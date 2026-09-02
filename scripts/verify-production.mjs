#!/usr/bin/env node

const args = process.argv.slice(2);

function readArg(name, fallback) {
  const index = args.indexOf(name);
  return index >= 0 && args[index + 1] ? args[index + 1] : fallback;
}

const origin = new URL(readArg("--origin", "https://joint.new-standard.co.kr")).origin;
const attempts = Number(readArg("--attempts", "18"));
const retrySeconds = Number(readArg("--retry-seconds", "10"));
const limit = Number(readArg("--limit", "250"));
const userAgent = "NewStandardProductionVerifier/1.0";

if (!Number.isInteger(attempts) || attempts < 1) throw new Error("--attempts must be a positive integer");
if (!Number.isFinite(retrySeconds) || retrySeconds < 0) throw new Error("--retry-seconds must be zero or greater");
if (!Number.isInteger(limit) || limit < 1) throw new Error("--limit must be a positive integer");

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function fetchText(url, maxAttempts = 3) {
  let lastError;
  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    try {
      const response = await fetch(url, {
        redirect: "follow",
        headers: {
          "cache-control": "no-cache",
          pragma: "no-cache",
          "user-agent": userAgent
        }
      });
      const text = await response.text();
      if (response.status !== 200) throw new Error(`HTTP ${response.status}`);
      return { response, text };
    } catch (error) {
      lastError = error;
      if (attempt < maxAttempts) await sleep(retrySeconds * 1000);
    }
  }
  throw new Error(`${url} 확인 실패: ${lastError?.message || lastError}`);
}

function assertIndexableHtml(url, response, html) {
  const contentType = response.headers.get("content-type") || "";
  if (!contentType.includes("text/html")) throw new Error(`${url} 응답이 HTML이 아닙니다: ${contentType}`);
  if (!/<html[^>]+lang=["']ko["']/i.test(html)) throw new Error(`${url}에 한국어 lang 속성이 없습니다.`);
  const robotsMeta = html.match(/<meta[^>]+name=["']robots["'][^>]*>/i)?.[0] || "";
  if (/noindex/i.test(robotsMeta)) throw new Error(`${url}에 noindex가 있습니다.`);
  if (/Application error|Internal Server Error/i.test(html)) {
    throw new Error(`${url}에서 애플리케이션 오류 문구를 발견했습니다.`);
  }
}

function sitemapUrls(xml) {
  const urls = [];
  for (const match of xml.matchAll(/<url\b[\s\S]*?<loc>([\s\S]*?)<\/loc>[\s\S]*?<\/url>/gi)) {
    const value = match[1]
      .trim()
      .replaceAll("&amp;", "&")
      .replaceAll("&lt;", "<")
      .replaceAll("&gt;", ">");
    const url = new URL(value);
    if (url.origin !== origin) throw new Error(`사이트맵 외부 URL 발견: ${url}`);
    urls.push(url.toString());
  }
  return [...new Set(urls)];
}

console.log(`운영 검증 시작: ${origin}`);

const home = await fetchText(origin, attempts);
assertIndexableHtml(origin, home.response, home.text);

const robotsUrl = `${origin}/robots.txt`;
const robots = await fetchText(robotsUrl);
if (/User-agent:\s*\*[\s\S]*?Disallow:\s*\/\s*(?:\r?\n|$)/i.test(robots.text)) {
  throw new Error("robots.txt가 전체 사이트 수집을 차단합니다.");
}
if (!/Sitemap:\s*https?:\/\//i.test(robots.text)) throw new Error("robots.txt에 Sitemap 선언이 없습니다.");

const sitemapUrl = `${origin}/sitemap.xml`;
const sitemap = await fetchText(sitemapUrl);
const urls = sitemapUrls(sitemap.text);
if (urls.length === 0) throw new Error("sitemap.xml에 검증할 URL이 없습니다.");
if (urls.length > limit) throw new Error(`사이트맵 URL ${urls.length}건이 검증 한도 ${limit}건을 초과했습니다.`);

for (let index = 0; index < urls.length; index += 5) {
  const batch = urls.slice(index, index + 5);
  await Promise.all(
    batch.map(async (url) => {
      const result = await fetchText(url);
      assertIndexableHtml(url, result.response, result.text);
      console.log(`OK ${url}`);
    })
  );
}

console.log(JSON.stringify({ origin, homepage: "ok", robots: "ok", sitemap: "ok", pages: urls.length }));
