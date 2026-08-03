import assert from "node:assert/strict";
import test from "node:test";

import {
  SITE_ORIGIN,
  extractChangedContentPaths,
  extractSitemapUrls,
  selectUrlsForChanges
} from "./indexnow.mjs";

const sitemapUrls = [
  `${SITE_ORIGIN}/`,
  `${SITE_ORIGIN}/knee`,
  `${SITE_ORIGIN}/column`,
  `${SITE_ORIGIN}/column/meniscus-tear-surgery`,
  `${SITE_ORIGIN}/patient-guides`,
  `${SITE_ORIGIN}/patient-guides/meniscus-tear`,
  `${SITE_ORIGIN}/wrist/distal-radius-fracture`
];

test("extractSitemapUrls keeps unique canonical HTTPS URLs", () => {
  const xml = `
    <urlset>
      <url><loc>${SITE_ORIGIN}/</loc></url>
      <url><loc>${SITE_ORIGIN}/knee</loc></url>
      <url><loc>${SITE_ORIGIN}/knee</loc></url>
    </urlset>`;

  assert.deepEqual(extractSitemapUrls(xml), [`${SITE_ORIGIN}/`, `${SITE_ORIGIN}/knee`]);
});

test("extractSitemapUrls rejects URLs from another host", () => {
  assert.throws(
    () => extractSitemapUrls("<urlset><url><loc>https://example.com/</loc></url></urlset>"),
    /non-canonical/u
  );
});

test("content date diff returns only changed route keys", () => {
  const diff = `
--- a/lib/content-dates.ts
+++ b/lib/content-dates.ts
-  "/knee": "2026-07-30",
+  "/knee": "2026-07-31",
+  "/patient-guides/meniscus-tear": "2026-07-31",`;

  assert.deepEqual(extractChangedContentPaths(diff), ["/knee", "/patient-guides/meniscus-tear"]);
});

test("a route page change selects that route", () => {
  const result = selectUrlsForChanges({ changedFiles: ["app/knee/page.tsx"], sitemapUrls });
  assert.deepEqual(result, { mode: "changed", urls: [`${SITE_ORIGIN}/knee`] });
});

test("a dynamic column page change selects its route family", () => {
  const result = selectUrlsForChanges({ changedFiles: ["app/column/[slug]/page.tsx"], sitemapUrls });
  assert.deepEqual(result.urls, [
    `${SITE_ORIGIN}/column`,
    `${SITE_ORIGIN}/column/meniscus-tear-surgery`
  ]);
});

test("patient guide data changes stay within the guide route family", () => {
  const result = selectUrlsForChanges({
    changedFiles: ["lib/patient-guides.ts"],
    removedPatientGuideSlugs: ["retired-guide"],
    sitemapUrls
  });

  assert.deepEqual(result.urls, [
    `${SITE_ORIGIN}/patient-guides/retired-guide`,
    `${SITE_ORIGIN}/patient-guides`,
    `${SITE_ORIGIN}/patient-guides/meniscus-tear`
  ]);
});

test("shared content component changes fall back to the full sitemap", () => {
  const result = selectUrlsForChanges({ changedFiles: ["components/Header.tsx"], sitemapUrls });
  assert.deepEqual(result, { mode: "all", urls: sitemapUrls });
});

test("replaced medical images notify the pages that display them", () => {
  const guideImage = selectUrlsForChanges({
    changedFiles: ["public/patient-guides/illustrations/meniscus-tear/procedure.png"],
    sitemapUrls
  });
  const sharedImage = selectUrlsForChanges({
    changedFiles: ["public/images/joint-hero.svg"],
    sitemapUrls
  });

  assert.deepEqual(guideImage.urls, [
    `${SITE_ORIGIN}/patient-guides`,
    `${SITE_ORIGIN}/patient-guides/meniscus-tear`
  ]);
  assert.deepEqual(sharedImage, { mode: "all", urls: sitemapUrls });
});

test("distal radius animation and pamphlet assets select their canonical wrist page", () => {
  const result = selectUrlsForChanges({
    changedFiles: [
      "public/patient-guides/animations/distal-radius-fracture/animation.webm",
      "public/patient-guides/pdfs/distal-radius-fracture-orif-guide-v4.5.pdf"
    ],
    sitemapUrls
  });

  assert.deepEqual(result, {
    mode: "changed",
    urls: [`${SITE_ORIGIN}/wrist/distal-radius-fracture`]
  });
});

test("workflow, scripts, and styling-only changes do not submit URLs", () => {
  const result = selectUrlsForChanges({
    changedFiles: [".github/workflows/indexnow.yml", "scripts/indexnow.mjs", "app/globals.css"],
    sitemapUrls
  });
  assert.deepEqual(result, { mode: "none", urls: [] });
});
