# Google Indexing Recovery Plan — joint.new-standard.co.kr

Date: 2026-09-18  
Branch: `seo/google-indexing-recovery-20260918`  
Scope: Google Search Console `Crawled - currently not indexed` recovery.  
Do not deploy from this document alone.

## 1. Evidence snapshot

GSC export on 2026-09-18 contains 60 affected URLs:
- 56 HTML/content URLs
- 4 `/_next/static/*` JS/CSS resources
- affected count grew 20 (2026-06-30) → 27 (07-25) → 33 (08-08) → 41 (08-11) → 56 (08-15) → 60 (08-18), then stayed at 60 through the export window.
- Example URL inspection for `/minimally-invasive-surgery`: crawl allowed, fetch successful, indexing allowed, self-canonical declared, but not indexed.

Naver is not the recovery target. Keep the current Naver-facing information architecture unless a separate issue is proven.

## 2. Current repository facts

This repository is Next.js App Router.
- `app/robots.ts` uses `isIndexable`.
- `lib/site.ts`: production indexing requires `NEXT_PUBLIC_INDEXABLE=true`.
- `lib/seo.ts#createMetadata()` emits self canonical and index/follow when indexable.
- `app/sitemap.ts` builds the sitemap from `allStaticPaths` + `patientGuides`.
- `app/patient-guides/[slug]/page.tsx` emits MedicalWebPage/WebPage + reviewedBy + images and uses a common patient-guide template.
- `app/column/[slug]/page.tsx` emits WebPage and uses a common column template with selected links to patient guides.

Technical indexing controls therefore look intentional in source. First verify production output; do not assume the cause is robots/canonical.

## 3. Working hypothesis

Primary hypothesis is not discovery failure. Google has crawled the pages.

Investigate these in order:
1. production indexability/canonical/HTTP/SSR consistency;
2. overlap with `new-standard.co.kr` treatment/service pages;
3. excessive template similarity across patient guides and columns;
4. insufficient contextual internal-link prominence to the most important URLs;
5. sitemap `lastModified` accuracy.

Do not solve this by adding more generic text.

## 4. Site-role contract

### new-standard.co.kr
Official hospital/service site:
- hospital, physician, location, reservation
- treatment/surgery service pages
- operational and conversion information

### joint.new-standard.co.kr
Patient decision-support knowledge center:
- symptoms and differential questions
- what findings matter before treatment
- non-operative vs operative decision criteria
- recovery/return-to-activity considerations
- physician-reviewed educational material

For overlapping topics, keep both pages only when their search intent and main content are materially different.

## 5. P0 pilot — 12 URLs

1. `/`
2. `/patient-guides`
3. `/minimally-invasive-surgery`
4. `/foot-ankle`
5. `/shoulder`
6. `/patient-guides/acl-tear`
7. `/patient-guides/knee-osteoarthritis-replacement`
8. `/patient-guides/rotator-cuff-tear`
9. `/patient-guides/hallux-valgus-mica`
10. `/patient-guides/lateral-ankle-ligament-injury`
11. `/patient-guides/meniscus-tear`
12. `/patient-guides/carpal-tunnel-syndrome`

Known main-site overlap examples:
- ACL → `https://new-standard.co.kr/sub/r40/s4080.php`
- knee arthroplasty → `https://new-standard.co.kr/sub/r40/s4060.php`
- rotator cuff → `https://new-standard.co.kr/sub/r40/s4090.php`
- hallux valgus → `https://new-standard.co.kr/sub/r40/s40e0.php`
- lateral ankle ligament → `https://new-standard.co.kr/sub/r40/s40d0.php`
- carpal tunnel → `https://new-standard.co.kr/sub/r40/s40b0.php`
- joint surgery/service hub → `https://new-standard.co.kr/sub/r40/s4050.php`
- foot/ankle hub → `https://new-standard.co.kr/sub/r50/foot-ankle-clinic.php`

## 6. Claude Code execution order

### Phase A — audit only, no content rewrite
Create `docs/reports/google-indexing-audit-20260918.md` with:
- P0 URL
- HTTP status
- rendered canonical
- robots meta / X-Robots-Tag
- whether meaningful H1/body exists in initial/server HTML
- sitemap inclusion
- sitemap lastModified
- inbound internal links found in repo
- main-site overlap URL
- intent assessment: distinct / partial overlap / strong overlap
- proposed action

Also verify production env behavior. Do not expose secrets; only report whether production output is indexable.

### Phase B — implement P0 only
For each P0 page:
- preserve self canonical unless the audit proves the page should consolidate;
- add a short, page-specific physician decision framework that cannot be reused unchanged on another disease;
- reduce repeated boilerplate where it dominates the main content;
- add contextual links from relevant hub/column/guide pages using descriptive anchor text;
- where a main-site treatment page overlaps, make the distinction explicit:
  - joint page = patient decision/education;
  - main site = hospital treatment/service/consultation.
- keep medical claims conservative and evidence-based.
- keep visible medical reviewer/date accurate.

Do not mass-edit all 56 HTML URLs in the first PR.

### Phase C — sitemap and metadata hygiene
- ensure sitemap contains only canonical indexable HTML URLs;
- keep `/_next/static/*` out of sitemap and do not block required rendering assets;
- update `lastModified` only when page content actually changes;
- do not fake fresh dates across the whole sitemap;
- verify canonical is present in server HTML and not mutated by client JS.

### Phase D — validation
Run at minimum:
- `npm ci`
- `npm run lint`
- `npm run build`

Add/extend a script that checks P0 generated pages for:
- 200 status in production-like output
- exactly one canonical
- canonical == expected self URL
- no `noindex`
- H1 present
- title/description non-empty
- JSON-LD parses
- internal links to relevant hub and/or main-site service page
- sitemap inclusion

Write results to `docs/reports/google-indexing-p0-validation.md`.

## 7. Do not do

- Do not move the subdomain to `new-standard.co.kr/joint/` in this recovery cycle.
- Do not bulk noindex patient guides or columns.
- Do not request indexing for all 60 URLs.
- Do not add keyword-stuffed city pages.
- Do not add generic AI-generated paragraphs just to increase word count.
- Do not change Naver strategy because of this Google issue.
- Do not block `/_next/static/*` merely because those resources appear in the GSC issue export.
- Do not deploy directly to production before reviewing the P0 diff and validation report.

## 8. Success criteria

After P0 deploy:
- request re-indexing only for the 12 P0 URLs;
- track URL Inspection / Page Indexing at 14 and 28 days;
- compare indexed count and search impressions for the P0 cohort;
- only then expand the same pattern to P1.

A page is not considered fixed merely because it was recrawled. The target is Google index inclusion plus stable canonical selection.

## 9. Google references

- Canonicalization troubleshooting: https://developers.google.com/search/docs/crawling-indexing/canonicalization-troubleshooting
- Canonical URL methods: https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
- Crawling/indexing documentation: https://developers.google.com/search/docs/crawling-indexing
- Crawling/indexing FAQ: https://developers.google.com/search/help/crawling-index-faq
