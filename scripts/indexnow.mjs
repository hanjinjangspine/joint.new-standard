import { execFileSync } from "node:child_process";
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { pathToFileURL } from "node:url";

export const SITE_ORIGIN = "https://joint.new-standard.co.kr";
export const SITEMAP_URL = `${SITE_ORIGIN}/sitemap.xml`;
export const ROBOTS_URL = `${SITE_ORIGIN}/robots.txt`;
export const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow";

const GLOBAL_CONTENT_FILES = new Set([
  "app/layout.tsx",
  "app/sitemap.ts",
  "lib/data.ts",
  "lib/seo.ts",
  "lib/site.ts",
  "next.config.mjs"
]);

const NON_CONTENT_PREFIXES = [
  ".github/",
  "docs/",
  "public/brand/",
  "public/og/",
  "scripts/"
];

const NON_CONTENT_FILES = new Set([
  ".gitignore",
  "app/globals.css",
  "app/robots.ts",
  "next-env.d.ts",
  "package-lock.json",
  "package.json",
  "postcss.config.mjs",
  "tailwind.config.ts",
  "tsconfig.json"
]);

function decodeXml(value) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&apos;", "'");
}

export function extractSitemapUrls(xml, origin = SITE_ORIGIN) {
  const expectedOrigin = new URL(origin).origin;
  const urls = [];

  for (const match of xml.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/giu)) {
    const url = new URL(decodeXml(match[1]));

    if (url.protocol !== "https:" || url.origin !== expectedOrigin) {
      throw new Error(`Sitemap contains a non-canonical URL: ${url.origin}`);
    }

    url.hash = "";
    urls.push(url.toString());
  }

  const uniqueUrls = [...new Set(urls)];
  if (uniqueUrls.length === 0 || uniqueUrls.length > 10_000) {
    throw new Error(`Sitemap URL count must be between 1 and 10000; got ${uniqueUrls.length}.`);
  }

  return uniqueUrls;
}

export function extractChangedContentPaths(diffText) {
  const paths = new Set();

  for (const line of diffText.split(/\r?\n/u)) {
    if ((!line.startsWith("+") && !line.startsWith("-")) || line.startsWith("+++") || line.startsWith("---")) {
      continue;
    }

    const match = line.match(/["'](\/[^"']*)["']\s*:/u);
    if (match) paths.add(match[1]);
  }

  return [...paths];
}

function routeFromPageFile(file) {
  if (file === "app/page.tsx") return "/";

  const match = file.match(/^app\/(.+)\/page\.tsx$/u);
  return match ? `/${match[1]}` : null;
}

function addRouteAndMatches(selected, route, sitemapUrls, origin) {
  const dynamicIndex = route.indexOf("/[");
  if (dynamicIndex === -1) {
    selected.add(new URL(route, origin).toString());
    return;
  }

  const prefix = route.slice(0, dynamicIndex) || "/";
  for (const url of sitemapUrls) {
    const pathname = new URL(url).pathname;
    if (pathname === prefix || pathname.startsWith(`${prefix}/`)) selected.add(url);
  }
}

function addMatchingPrefix(selected, prefix, sitemapUrls) {
  for (const url of sitemapUrls) {
    const pathname = new URL(url).pathname;
    if (pathname === prefix || pathname.startsWith(`${prefix}/`)) selected.add(url);
  }
}

export function selectUrlsForChanges({
  changedFiles,
  changedContentPaths = [],
  removedPatientGuideSlugs = [],
  sitemapUrls,
  origin = SITE_ORIGIN,
  submitAll = false
}) {
  if (submitAll || changedFiles.some((file) => GLOBAL_CONTENT_FILES.has(file.replaceAll("\\", "/")))) {
    return { mode: "all", urls: [...sitemapUrls] };
  }

  const selected = new Set();
  for (const contentPath of changedContentPaths) {
    selected.add(new URL(contentPath, origin).toString());
  }

  for (const slug of removedPatientGuideSlugs) {
    selected.add(new URL(`/patient-guides/${slug}`, origin).toString());
  }

  for (const rawFile of changedFiles) {
    const file = rawFile.replaceAll("\\", "/");

    if (file === "lib/content-dates.ts" || NON_CONTENT_FILES.has(file)) continue;
    if (NON_CONTENT_PREFIXES.some((prefix) => file.startsWith(prefix))) continue;

    if (file === "public/ai-readable-orthopedic-profile.md") {
      selected.add(new URL("/ai-readable-orthopedic-profile", origin).toString());
      continue;
    }

    if (file.startsWith("public/patient-guides/")) {
      addMatchingPrefix(selected, "/patient-guides", sitemapUrls);
      continue;
    }

    if (file.startsWith("public/images/")) {
      return { mode: "all", urls: [...sitemapUrls] };
    }

    if (
      file.startsWith("lib/patient-guide") ||
      file.startsWith("components/PatientGuide") ||
      file.startsWith("app/patient-guides/")
    ) {
      addMatchingPrefix(selected, "/patient-guides", sitemapUrls);
      continue;
    }

    if (file.startsWith("components/Column")) {
      addMatchingPrefix(selected, "/column", sitemapUrls);
      continue;
    }

    if (file.startsWith("components/")) {
      return { mode: "all", urls: [...sitemapUrls] };
    }

    const pageRoute = routeFromPageFile(file);
    if (pageRoute) {
      addRouteAndMatches(selected, pageRoute, sitemapUrls, origin);
      continue;
    }

    const appRouteFile = file.match(/^app\/(.+)\/[^/]+\.(?:ts|tsx|js|jsx|mdx)$/u);
    if (appRouteFile && !appRouteFile[1].startsWith("fonts")) {
      const route = `/${appRouteFile[1]}`;
      addRouteAndMatches(selected, route, sitemapUrls, origin);
    }
  }

  const exactOrigin = new URL(origin).origin;
  const urls = [...selected].filter((value) => {
    const url = new URL(value);
    return url.protocol === "https:" && url.origin === exactOrigin;
  });

  return { mode: urls.length > 0 ? "changed" : "none", urls: [...new Set(urls)] };
}

function git(args) {
  return execFileSync("git", args, {
    cwd: process.cwd(),
    encoding: "utf8",
    maxBuffer: 10 * 1024 * 1024
  }).trim();
}

function getChangedFiles(base, head) {
  if (!base || !head) return [];
  const output = git(["diff", "--name-only", "--diff-filter=ACDMRTUXB", base, head, "--"]);
  return output ? output.split(/\r?\n/u) : [];
}

function getChangedContentPaths(base, head) {
  if (!base || !head) return [];
  const diff = git(["diff", "--unified=0", base, head, "--", "lib/content-dates.ts"]);
  return extractChangedContentPaths(diff);
}

function getFileAtRevision(revision, file) {
  try {
    return git(["show", `${revision}:${file}`]);
  } catch {
    return "";
  }
}

function extractSlugs(source) {
  return new Set([...source.matchAll(/\bslug:\s*["']([^"']+)["']/gu)].map((match) => match[1]));
}

function getRemovedPatientGuideSlugs(base, head, changedFiles) {
  if (!base || !head || !changedFiles.includes("lib/patient-guides.ts")) return [];

  const before = extractSlugs(getFileAtRevision(base, "lib/patient-guides.ts"));
  const after = extractSlugs(getFileAtRevision(head, "lib/patient-guides.ts"));
  return [...before].filter((slug) => !after.has(slug));
}

async function discoverIndexNowKey(publicDir) {
  const candidates = [];

  for (const file of await readdir(publicDir, { withFileTypes: true })) {
    if (!file.isFile() || !/^([A-Za-z0-9-]{8,128})\.txt$/u.test(file.name)) continue;

    const key = path.basename(file.name, ".txt");
    const content = (await readFile(path.join(publicDir, file.name), "utf8")).trim();
    if (content === key) candidates.push({ key, file: file.name });
  }

  if (candidates.length !== 1) {
    throw new Error(`Expected exactly one valid IndexNow key file; found ${candidates.length}.`);
  }

  return candidates[0];
}

async function fetchText(url, label) {
  const response = await fetch(url, {
    cache: "no-store",
    signal: AbortSignal.timeout(15_000),
    headers: { "User-Agent": "new-standard-joint-indexnow/1.0" }
  });

  if (!response.ok) throw new Error(`${label} returned HTTP ${response.status}.`);
  return response.text();
}

function assertRobotsAllowsCrawling(robotsText) {
  const lines = robotsText.split(/\r?\n/u).map((line) => line.trim().toLowerCase());
  let appliesToAll = false;

  for (const line of lines) {
    if (line.startsWith("user-agent:")) {
      appliesToAll = line.slice("user-agent:".length).trim() === "*";
      continue;
    }

    if (appliesToAll && line === "disallow: /") {
      throw new Error("robots.txt blocks the entire site; IndexNow submission was stopped.");
    }
  }
}

function parseRetryAfter(value) {
  if (!value) return null;
  const seconds = Number(value);
  if (Number.isFinite(seconds)) return Math.max(0, seconds * 1000);

  const date = Date.parse(value);
  return Number.isNaN(date) ? null : Math.max(0, date - Date.now());
}

async function submitIndexNow(payload, endpoint) {
  const fallbackDelays = [2_000, 8_000];

  for (let attempt = 0; attempt < 3; attempt += 1) {
    let response;
    try {
      response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "User-Agent": "new-standard-joint-indexnow/1.0"
        },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(15_000)
      });
    } catch (error) {
      if (attempt === 2) throw new Error(`IndexNow network request failed: ${error.message}`);
      await new Promise((resolve) => setTimeout(resolve, fallbackDelays[attempt]));
      continue;
    }

    if (response.status === 200 || response.status === 202) return response.status;

    const retryable = response.status === 429 || response.status >= 500;
    if (!retryable || attempt === 2) {
      throw new Error(`IndexNow returned HTTP ${response.status}.`);
    }

    const retryAfter = parseRetryAfter(response.headers.get("retry-after"));
    const delay = retryAfter ?? fallbackDelays[attempt];
    if (delay > 60_000) {
      throw new Error(`IndexNow returned HTTP ${response.status} with a retry delay over 60 seconds.`);
    }
    await new Promise((resolve) => setTimeout(resolve, delay));
  }

  throw new Error("IndexNow submission exhausted all retry attempts.");
}

function parseArgs(argv) {
  const options = { base: "", head: "", dryRun: false, submitAll: false };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--dry-run") options.dryRun = true;
    else if (arg === "--all") options.submitAll = true;
    else if (arg === "--base") options.base = argv[++index] ?? "";
    else if (arg === "--head") options.head = argv[++index] ?? "";
    else throw new Error(`Unknown argument: ${arg}`);
  }

  return options;
}

export async function main(argv = process.argv.slice(2)) {
  const options = parseArgs(argv);
  const origin = process.env.INDEXNOW_SITE_ORIGIN || SITE_ORIGIN;
  const sitemapUrl = `${origin}/sitemap.xml`;
  const robotsUrl = `${origin}/robots.txt`;
  const endpoint = process.env.INDEXNOW_ENDPOINT || INDEXNOW_ENDPOINT;
  const publicDir = path.join(process.cwd(), "public");
  const { key, file } = await discoverIndexNowKey(publicDir);

  if (process.env.GITHUB_ACTIONS === "true") console.log(`::add-mask::${key}`);

  const keyLocation = `${origin}/${file}`;
  const [liveKey, robotsText, sitemapXml] = await Promise.all([
    fetchText(keyLocation, "IndexNow key file"),
    fetchText(robotsUrl, "robots.txt"),
    fetchText(sitemapUrl, "sitemap.xml")
  ]);

  if (liveKey.trim() !== key) throw new Error("The deployed IndexNow key does not match the repository key file.");
  assertRobotsAllowsCrawling(robotsText);

  const sitemapUrls = extractSitemapUrls(sitemapXml, origin);
  const changedFiles = getChangedFiles(options.base, options.head);
  const changedContentPaths = getChangedContentPaths(options.base, options.head);
  const removedPatientGuideSlugs = getRemovedPatientGuideSlugs(options.base, options.head, changedFiles);
  const selection = selectUrlsForChanges({
    changedFiles,
    changedContentPaths,
    removedPatientGuideSlugs,
    sitemapUrls,
    origin,
    submitAll: options.submitAll
  });

  console.log(`IndexNow validation passed: ${sitemapUrls.length} canonical sitemap URLs.`);
  console.log(`Submission mode: ${selection.mode}; selected URLs: ${selection.urls.length}.`);

  if (selection.urls.length === 0) {
    console.log("No indexable content URLs changed; submission skipped.");
    return;
  }

  if (options.dryRun) {
    console.log("Dry run complete; no IndexNow request was sent.");
    return;
  }

  const status = await submitIndexNow(
    {
      host: new URL(origin).host,
      key,
      keyLocation,
      urlList: selection.urls
    },
    endpoint
  );

  console.log(`IndexNow accepted ${selection.urls.length} URLs with HTTP ${status}.`);
}

const invokedFile = process.argv[1] ? pathToFileURL(path.resolve(process.argv[1])).href : "";
if (import.meta.url === invokedFile) {
  main().catch((error) => {
    console.error(error.message);
    process.exitCode = 1;
  });
}
