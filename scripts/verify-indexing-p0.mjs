#!/usr/bin/env node
// Google 색인 회복 P0 12개 URL의 색인 조건을 점검한다.
// 사용: node scripts/verify-indexing-p0.mjs --origin http://localhost:3000 [--markdown]
// 운영 도메인 Host로 요청하므로 로컬 빌드(next start)나 운영 모두에 쓸 수 있다.

const args = process.argv.slice(2);
const readArg = (name, fallback) => {
  const index = args.indexOf(name);
  return index >= 0 && args[index + 1] ? args[index + 1] : fallback;
};

const origin = new URL(readArg("--origin", "https://joint.new-standard.co.kr")).origin;
const PRIMARY = "https://joint.new-standard.co.kr";
const P0 = [
  "/",
  "/patient-guides",
  "/minimally-invasive-surgery",
  "/foot-ankle",
  "/shoulder",
  "/patient-guides/acl-tear",
  "/patient-guides/knee-osteoarthritis-replacement",
  "/patient-guides/rotator-cuff-tear",
  "/patient-guides/hallux-valgus-mica",
  "/patient-guides/lateral-ankle-ligament-injury",
  "/patient-guides/meniscus-tear",
  "/patient-guides/carpal-tunnel-syndrome"
];

async function get(path, host) {
  if (host) {
    // fetch는 Host 헤더를 덮어쓰므로 호스트별 점검은 node:http(s)로 보낸다.
    const url = new URL(path, origin);
    const { request } = await import(url.protocol === "https:" ? "node:https" : "node:http");
    return new Promise((resolve, reject) => {
      const req = request(url, { headers: { host, "cache-control": "no-cache" }, servername: host }, (res) => {
        let text = "";
        res.setEncoding("utf8");
        res.on("data", (chunk) => (text += chunk));
        res.on("end", () => resolve({ status: res.statusCode, headers: new Headers(Object.entries(res.headers).map(([key, value]) => [key, String(value)])), text }));
      });
      req.on("error", reject);
      req.end();
    });
  }
  const response = await fetch(new URL(path, origin), {
    redirect: "manual",
    headers: { "cache-control": "no-cache", pragma: "no-cache" }
  });
  return { status: response.status, headers: response.headers, text: await response.text() };
}

const strip = (html) => html.replace(/<[^>]+>/g, " ").replace(/&[a-z#0-9]+;/gi, " ").replace(/\s+/g, " ").trim();

const sitemap = (await get("/sitemap.xml")).text;
const sitemapEntries = new Map(
  [...sitemap.matchAll(/<url>[\s\S]*?<loc>([^<]+)<\/loc>[\s\S]*?<lastmod>([^<]+)<\/lastmod>[\s\S]*?<\/url>/g)].map((match) => [
    new URL(match[1]).pathname.replace(/\/$/, "") || "/",
    match[2].slice(0, 10)
  ])
);

const rows = [];
let failures = 0;

for (const path of P0) {
  const { status, headers, text } = await get(path);
  const expected = path === "/" ? PRIMARY : `${PRIMARY}${path}`;
  const canonicals = [...text.matchAll(/<link[^>]+rel="canonical"[^>]*href="([^"]+)"/g)].map((match) => match[1].replace(/\/$/, ""));
  const robotsMeta = text.match(/<meta[^>]+name="robots"[^>]*content="([^"]+)"/)?.[1] ?? "";
  const xRobots = headers.get("x-robots-tag") ?? "";
  const h1 = strip(text.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1] ?? "");
  const title = text.match(/<title>([^<]*)<\/title>/)?.[1] ?? "";
  const description = text.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? "";
  const jsonLdBlocks = [...text.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((match) => match[1]);
  let jsonLdOk = true;
  const pageNodes = [];
  for (const block of jsonLdBlocks) {
    try {
      const data = JSON.parse(block);
      for (const node of data["@graph"] ?? [data]) {
        const types = [].concat(node["@type"]);
        if (types.includes("WebPage")) pageNodes.push(node);
      }
    } catch {
      jsonLdOk = false;
    }
  }
  const pageNode = pageNodes[0] ?? {};
  const aboutCount = Array.isArray(pageNode.about) ? pageNode.about.length : pageNode.about ? 1 : 0;
  const main = text.match(/<main[\s\S]*?<\/main>/)?.[0] ?? "";
  const mainSiteLinks = [...main.matchAll(/href="(https:\/\/new-standard\.co\.kr\/sub\/[^"]+)"/g)].map((match) => match[1]);
  const contextual = new Set(
    [...main.matchAll(/href="([^"#]+)"/g)]
      .map((match) => new URL(match[1], PRIMARY))
      .filter((url) => !/\.(pdf|png|jpe?g|webp)$/i.test(url.pathname))
      .map((url) => (url.origin === PRIMARY ? url.pathname.replace(/\/$/, "") || "/" : url.href))
      .filter((key) => key !== "/" && key !== "/patient-guides" && key !== path)
  );

  const checks = {
    status: status === 200,
    canonical: canonicals.length === 1 && canonicals[0] === expected,
    indexable: !/noindex/i.test(robotsMeta) && !/noindex/i.test(xRobots),
    h1: h1.length > 0,
    titleDescription: title.length > 0 && description.length > 0,
    jsonLd: jsonLdOk && jsonLdBlocks.length > 0,
    dateModified: pageNode.dateModified !== "2026-08-26" && Boolean(pageNode.dateModified),
    aboutScoped: aboutCount <= 8,
    sitemap: sitemapEntries.has(path),
    ...(path.startsWith("/patient-guides/")
      ? { links5: contextual.size >= 5, mainSiteLink: mainSiteLinks.length > 0 }
      : {})
  };
  const failed = Object.entries(checks).filter(([, ok]) => !ok).map(([name]) => name);
  if (failed.length) failures += 1;
  rows.push({
    path,
    status,
    canonical: canonicals.join(" "),
    robots: `${robotsMeta || "-"} / ${xRobots || "-"}`,
    h1,
    title,
    dateModified: pageNode.dateModified ?? "-",
    lastReviewed: pageNode.lastReviewed ?? "-",
    about: aboutCount,
    contextualLinks: contextual.size,
    mainSiteLinks: mainSiteLinks.length,
    sitemapLastmod: sitemapEntries.get(path) ?? "MISSING",
    result: failed.length ? `FAIL: ${failed.join(", ")}` : "PASS"
  });
}

// 중복 호스트 헤더 점검
const hostChecks = [];
for (const host of ["joint.new-standard.co.kr", "joint-new-standard.vercel.app"]) {
  const { status, headers } = await get("/patient-guides/acl-tear", host);
  const xRobots = headers.get("x-robots-tag") ?? "";
  const ok = host.endsWith(".vercel.app") ? /noindex/i.test(xRobots) : !/noindex/i.test(xRobots);
  if (!ok) failures += 1;
  hostChecks.push({ host, status, xRobots: xRobots || "-", result: ok ? "PASS" : "FAIL" });
}

if (args.includes("--markdown")) {
  console.log(`| URL | HTTP | canonical | robots meta / X-Robots-Tag | H1 | dateModified | lastReviewed | about 수 | 본문 맥락 링크 | 본원 링크 | sitemap lastmod | 결과 |`);
  console.log(`|---|---|---|---|---|---|---|---|---|---|---|---|`);
  for (const row of rows) {
    console.log(`| \`${row.path}\` | ${row.status} | ${row.canonical} | ${row.robots} | ${row.h1} | ${row.dateModified} | ${row.lastReviewed} | ${row.about} | ${row.contextualLinks} | ${row.mainSiteLinks} | ${row.sitemapLastmod} | ${row.result} |`);
  }
  console.log(`\n| Host | HTTP | X-Robots-Tag | 결과 |\n|---|---|---|---|`);
  for (const row of hostChecks) console.log(`| ${row.host} | ${row.status} | ${row.xRobots} | ${row.result} |`);
} else {
  console.table(rows.map(({ path, status, dateModified, contextualLinks, mainSiteLinks, sitemapLastmod, result }) => ({ path, status, dateModified, contextualLinks, mainSiteLinks, sitemapLastmod, result })));
  console.table(hostChecks);
}

process.exitCode = failures ? 1 : 0;
