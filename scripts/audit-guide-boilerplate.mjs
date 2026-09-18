#!/usr/bin/env node
// 환자안내(patient guide) 공통 문구 비율과 본문 맥락 링크 수를 측정한다.
// 사용: node scripts/audit-guide-boilerplate.mjs --origin https://joint.new-standard.co.kr [--host joint.new-standard.co.kr]
// 공통 문구 = 전체 환자안내의 절반 이상에 똑같이 나오는 본문(<main>) 줄.

const args = process.argv.slice(2);
const readArg = (name, fallback) => {
  const index = args.indexOf(name);
  return index >= 0 && args[index + 1] ? args[index + 1] : fallback;
};

const origin = new URL(readArg("--origin", "https://joint.new-standard.co.kr")).origin;
const hostHeader = readArg("--host", "");
const headers = { "cache-control": "no-cache", pragma: "no-cache", ...(hostHeader ? { host: hostHeader } : {}) };

async function get(path) {
  const response = await fetch(new URL(path, origin), { headers, redirect: "manual" });
  if (response.status !== 200) throw new Error(`${path} HTTP ${response.status}`);
  return response.text();
}

function mainHtml(html) {
  return html.match(/<main[\s\S]*?<\/main>/)?.[0] ?? "";
}

function lines(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<(h[1-6]|p|li|div|section|article|a|span|summary|dt|dd)\b[^>]*>/gi, "\n")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z#0-9]+;/gi, " ")
    .split("\n")
    .map((line) => line.replace(/\s+/g, " ").trim())
    .filter((line) => line.length > 1);
}

function contextualLinks(html, selfPath) {
  const hrefs = [...html.matchAll(/<a\b[^>]*href="([^"]+)"/g)].map((match) => match[1]);
  const targets = new Set();
  for (const href of hrefs) {
    if (href.startsWith("#")) continue;
    const url = new URL(href, "https://joint.new-standard.co.kr");
    if (/\.(pdf|png|jpe?g|webp|mp4|webm)$/i.test(url.pathname)) continue;
    const key = url.host === "joint.new-standard.co.kr" ? url.pathname.replace(/\/$/, "") || "/" : url.href;
    // 홈·목록(breadcrumb)과 자기 자신은 맥락 링크로 세지 않는다.
    if (key === "/" || key === "/patient-guides" || key === selfPath) continue;
    targets.add(key);
  }
  return [...targets];
}

const sitemap = await get("/sitemap.xml");
const guidePaths = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)]
  .map((match) => new URL(match[1]).pathname)
  .filter((path) => path.startsWith("/patient-guides/"));

const pages = [];
for (const path of guidePaths) {
  const main = mainHtml(await get(path));
  pages.push({ path, lines: lines(main), links: contextualLinks(main, path) });
}

const frequency = new Map();
for (const page of pages) {
  for (const line of new Set(page.lines)) frequency.set(line, (frequency.get(line) ?? 0) + 1);
}
const threshold = Math.ceil(pages.length / 2);

const rows = pages.map((page) => {
  const total = page.lines.join("").length;
  const shared = page.lines.filter((line) => frequency.get(line) >= threshold).join("").length;
  return {
    path: page.path,
    chars: total,
    boilerplatePct: Math.round((1000 * shared) / total) / 10,
    contextualLinks: page.links.length,
    links: page.links
  };
});

const average = (values) => Math.round((10 * values.reduce((sum, value) => sum + value, 0)) / values.length) / 10;
const summary = {
  origin,
  guides: rows.length,
  threshold: `${threshold}/${rows.length} guides`,
  boilerplateAvgPct: average(rows.map((row) => row.boilerplatePct)),
  boilerplateMaxPct: Math.max(...rows.map((row) => row.boilerplatePct)),
  minContextualLinks: Math.min(...rows.map((row) => row.contextualLinks)),
  sharedLines: [...frequency].filter(([, count]) => count >= threshold).map(([line, count]) => `${count}× ${line}`)
};

if (args.includes("--json")) {
  console.log(JSON.stringify({ summary, rows }, null, 2));
} else {
  for (const row of rows) {
    console.log(`${row.path.padEnd(52)} chars ${String(row.chars).padStart(5)}  boilerplate ${String(row.boilerplatePct).padStart(5)}%  links ${row.contextualLinks}`);
  }
  console.log(JSON.stringify(summary, null, 2));
}
