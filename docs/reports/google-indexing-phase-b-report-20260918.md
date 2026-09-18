# Google 색인 회복 Phase B 실행 보고서

- 작성일: 2026-09-18
- 브랜치: `seo/google-indexing-recovery-20260918` (joint.new-standard)
- 이 문서가 `google-indexing-phase-b-plan-20260918.md`의 B1–B5 계획표를 **대체**합니다(최신 지시 반영).
- **merge·운영 배포 없음.** 본원(new-standard-official) 파일은 수정·커밋하지 않았습니다.
- 금지 사항 준수: URL·canonical 변경 없음, noindex는 `*.vercel.app` 호스트에만, 서브도메인 변경 없음, 클릭 데이터 수집·GSC/네이버 로그인 시도 없음.
- 질환별 판단표 7개: **medical review required**(검수자: 김동희 원장, 정형외과). 초안 작성·본문 노출 없음.

---

## A. 본원 저장소 드리프트 — **중단 (소급 커밋 안 함)**

### A-1. 6개 파일 미커밋 diff 원문 (작업트리 vs 로컬 `HEAD` `5f07bb3`)

```diff
diff --git a/sub/r40/s4060.php b/sub/r40/s4060.php
--- a/sub/r40/s4060.php
+++ b/sub/r40/s4060.php
@@ -491 +491 @@
-        <p>비수술 치료와 수술 치료는 경쟁 관계가 아니라 환자 상태에 따라 단계적으로 검토되는 선택지입니다. 약물치료, 주사치료, 물리치료, 운동재활 등 비수술 치료 반응을 먼저 확인할 수 있습니다.</p>
+        <p>치료 방법은 관절 손상 정도와 증상, 기존 치료 반응에 따라 단계적으로 검토합니다. 먼저 약물치료, 주사치료, 물리치료, 운동재활 등 비수술 치료의 반응을 확인할 수 있습니다.</p>
@@ -544 +544 @@
-        <h2 id="jrLinkTitle">관련 페이지 내부링크</h2>
+        <h2 id="jrLinkTitle">관련 질환·검사·치료 안내</h2>
@@ -595 +595 @@
-        <h2 id="jrFinalCtaTitle">관절 손상 정도와 보행 상태를 함께 확인해 치료 방향을 상담합니다</h2>
+        <h2 id="jrFinalCtaTitle">보행과 일상생활의 불편이 계속되면 치료 선택지를 상담해 보세요</h2>
diff --git a/sub/r40/s4080.php b/sub/r40/s4080.php
--- a/sub/r40/s4080.php
+++ b/sub/r40/s4080.php
@@ -491 +491 @@
-        <p>비수술 치료와 수술 치료는 경쟁 관계가 아니라 환자 상태에 따라 단계적으로 검토되는 선택지입니다. 일부 손상은 보조기, 물리치료, 운동재활 등 비수술 치료를 먼저 검토할 수 있습니다.</p>
+        <p>치료 방법은 인대 손상 정도와 무릎 불안정성, 활동 수준에 따라 단계적으로 검토합니다. 일부 손상은 보조기, 물리치료, 운동재활 등 비수술 치료를 먼저 검토할 수 있습니다.</p>
@@ -544 +544 @@
-        <h2 id="aclLinkTitle">관련 페이지 내부링크</h2>
+        <h2 id="aclLinkTitle">관련 질환·검사·치료 안내</h2>
@@ -596 +596 @@
-        <h2 id="aclFinalCtaTitle">무릎 불안정성과 동반 손상 여부를 함께 확인해 치료 방향을 상담합니다</h2>
+        <h2 id="aclFinalCtaTitle">무릎이 반복해서 꺾이거나 불안하다면 손상 범위를 확인하세요</h2>
diff --git a/sub/r40/s4090.php b/sub/r40/s4090.php
--- a/sub/r40/s4090.php
+++ b/sub/r40/s4090.php
@@ -491 +491 @@
-        <p>비수술 치료와 수술 치료는 경쟁 관계가 아니라 환자 상태에 따라 단계적으로 검토되는 선택지입니다. 일부 어깨통증과 부분 파열은 약물, 주사, 물리치료, 운동재활 등 비수술 치료를 먼저 검토할 수 있습니다.</p>
+        <p>치료 방법은 힘줄 손상 범위와 증상, 기존 치료 반응에 따라 단계적으로 검토합니다. 일부 어깨통증과 부분 파열은 약물, 주사, 물리치료, 운동재활 등 비수술 치료를 먼저 검토할 수 있습니다.</p>
@@ -544 +544 @@
-        <h2 id="rotatorLinkTitle">관련 페이지 내부링크</h2>
+        <h2 id="rotatorLinkTitle">관련 질환·검사·치료 안내</h2>
@@ -593 +593 @@
-        <h2 id="rotatorFinalCtaTitle">어깨통증과 힘줄 파열 범위를 함께 확인해 치료 방향을 상담합니다</h2>
+        <h2 id="rotatorFinalCtaTitle">팔을 들기 어렵거나 밤 통증이 계속되면 어깨 상태를 확인하세요</h2>
diff --git a/sub/r40/s40b0.php b/sub/r40/s40b0.php
--- a/sub/r40/s40b0.php
+++ b/sub/r40/s40b0.php
@@ -491 +491 @@
-        <p>비수술 치료와 수술 치료는 경쟁 관계가 아니라 환자 상태에 따라 단계적으로 검토되는 선택지입니다. 초기 또는 경한 증상에서는 보조기, 약물치료, 주사치료, 물리치료, 사용 습관 조절 등을 먼저 검토할 수 있습니다.</p>
+        <p>치료 방법은 신경 압박 정도와 증상, 기존 치료 반응에 따라 단계적으로 검토합니다. 초기 또는 경한 증상에서는 보조기, 약물치료, 주사치료, 물리치료, 사용 습관 조절 등을 먼저 검토할 수 있습니다.</p>
@@ -544 +544 @@
-        <h2 id="carpalLinkTitle">관련 페이지 내부링크</h2>
+        <h2 id="carpalLinkTitle">관련 질환·검사·치료 안내</h2>
@@ -593 +593 @@
-        <h2 id="carpalFinalCtaTitle">손저림과 신경 압박 상태를 함께 확인해 치료 방향을 상담합니다</h2>
+        <h2 id="carpalFinalCtaTitle">밤에 손이 저리거나 손 힘이 떨어지면 신경 상태를 확인하세요</h2>
diff --git a/sub/r40/s40d0.php b/sub/r40/s40d0.php
--- a/sub/r40/s40d0.php
+++ b/sub/r40/s40d0.php
@@ -491 +491 @@
-        <p>비수술 치료와 수술 치료는 경쟁 관계가 아니라 환자 상태에 따라 단계적으로 검토되는 선택지입니다. 초기 발목 염좌나 경한 불안정성은 고정, 보조기, 물리치료, 운동재활, 균형 운동 등을 먼저 검토할 수 있습니다.</p>
+        <p>치료 방법은 인대 손상 정도와 발목 불안정성, 기존 치료 반응에 따라 단계적으로 검토합니다. 초기 발목 염좌나 경한 불안정성은 고정, 보조기, 물리치료, 운동재활, 균형 운동 등을 먼저 검토할 수 있습니다.</p>
@@ -544 +544 @@
-        <h2 id="ankleLinkTitle">관련 페이지 내부링크</h2>
+        <h2 id="ankleLinkTitle">관련 질환·검사·치료 안내</h2>
@@ -596 +596 @@
-        <h2 id="ankleFinalCtaTitle">반복 염좌와 발목 불안정성을 함께 확인해 치료 방향을 상담합니다</h2>
+        <h2 id="ankleFinalCtaTitle">발목을 자주 접질리거나 불안정하다면 진료를 받아보세요</h2>
diff --git a/sub/r40/s40e0.php b/sub/r40/s40e0.php
--- a/sub/r40/s40e0.php
+++ b/sub/r40/s40e0.php
@@ -491 +491 @@
-        <p>비수술 치료와 수술 치료는 경쟁 관계가 아니라 환자 상태에 따라 단계적으로 검토되는 선택지입니다. 초기 또는 경한 증상에서는 신발 조절, 보조기, 약물치료, 물리치료, 생활습관 조절 등을 먼저 검토할 수 있습니다.</p>
+        <p>치료 방법은 엄지발가락 변형 정도와 통증, 보행 불편에 따라 단계적으로 검토합니다. 초기 또는 경한 증상에서는 신발 조절, 보조기, 약물치료, 물리치료, 생활습관 조절 등을 먼저 검토할 수 있습니다.</p>
@@ -544 +544 @@
-        <h2 id="halluxLinkTitle">관련 페이지 내부링크</h2>
+        <h2 id="halluxLinkTitle">관련 질환·검사·치료 안내</h2>
@@ -596 +596 @@
-        <h2 id="halluxFinalCtaTitle">엄지발가락 변형과 보행 통증을 함께 확인해 치료 방향을 상담합니다</h2>
+        <h2 id="halluxFinalCtaTitle">엄지발가락 변형으로 신발 착용과 보행이 불편하다면 상담해 보세요</h2>
```

### A-2. 라이브 대조 결과
점검 방법: `https://new-standard.co.kr/sub/r40/<파일>.php`에 쿼리 문자열 없이 `Cache-Control: no-cache, no-store, max-age=0`, `Pragma: no-cache` 헤더로 요청했습니다(응답 `Cache-Control: max-age=0`, `Age` 없음). 파일별 표시 문장(12자 이상 h1–h3·p·li·span)이 라이브 HTML에 있는지 셌습니다.

| 파일 | 로컬 `HEAD` 문장 일치 | **작업트리** 문장 일치 | `origin/main` 문장 일치 | diff의 `+` 3줄 | diff의 `-` 3줄 |
|---|---|---|---|---|---|
| s4060 | 39/56 | **42/57** | **57/57** | 라이브에 있음 3/3, `origin/main`에 있음 3/3 | 라이브 0/3, `origin/main` 0/3 |
| s4080 | 42/59 | **45/60** | **61/61** | 3/3, 3/3 | 0/3, 0/3 |
| s4090 | 41/58 | **44/59** | **60/60** | 3/3, 3/3 | 0/3, 0/3 |
| s40b0 | 43/53 | **46/54** | **54/54** | 3/3, 3/3 | 0/3, 0/3 |
| s40d0 | 41/54 | **44/55** | **55/55** | 3/3, 3/3 | 0/3, 0/3 |
| s40e0 | 42/56 | **45/57** | **57/57** | 3/3, 3/3 | 0/3, 0/3 |

### A-3. 판정
- 3줄 diff 자체는 라이브와 일치합니다. 그러나 **이 3줄은 이미 `origin/main`에 커밋되어 있습니다**(`c8cb56c` 2026-09-15 「Use patient-first language across public care pages」).
- 라이브는 `origin/main`과 100% 일치합니다. 로컬 체크아웃(`naver-site-verification-20260820`, `5f07bb3`)은 `origin/main`보다 **471커밋 뒤처져** 있고, 작업트리 파일도 전체로는 라이브와 다릅니다(파일마다 약 11–15문장 불일치).
- 따라서 작업트리 파일을 「운영 반영분 소급 커밋」으로 올리면 라이브에 없는 옛 문장이 되살아납니다. **지시대로 멈추고 커밋하지 않았습니다.**
- 권장: 본원 로컬 체크아웃을 `origin/main` 기준으로 맞춘 뒤(로컬 미커밋·스테이징 변경 130개 파일의 보존 방침 결정 필요) B1 링크 작업을 `origin/main` 위에서 진행합니다. 삽입 위치(472–477행 「치료 결정 전 확인」, 547행 링크 목록)는 `origin/main`에서도 같은 줄에 있습니다.

---

## B. `*.vercel.app` noindex (코드만)

### 구현
`next.config.mjs` `headers()`에 host 조건 규칙 1개를 추가했습니다.
```js
headers.push({
  source: "/:path*",
  has: [{ type: "host", value: ".*\\.vercel\\.app" }],
  headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }]
});
```
- `robots.txt`는 그대로입니다(`Allow: /`). robots로 막으면 Google이 noindex 헤더를 읽지 못합니다.
- Vercel 계정·도메인·보호 설정은 건드리지 않았습니다.

### 검증
| 대상 | 요청 | HTTP | X-Robots-Tag | robots meta | 결과 |
|---|---|---|---|---|---|
| 로컬 빌드, Host `joint.new-standard.co.kr` | `/`, `/patient-guides/acl-tear`, `/robots.txt`, `/sitemap.xml` | 200 | **없음** | index, follow | PASS |
| 로컬 빌드, Host `joint-new-standard.vercel.app` | 같은 4개 | 200 | **noindex, nofollow** | index, follow | PASS |
| 로컬 빌드, Host `joint-new-standard-git-seo-hanjinjangspine.vercel.app` | 같은 4개 | 200 | **noindex, nofollow** | — | PASS |
| 운영 `https://joint.new-standard.co.kr/patient-guides/acl-tear` (익명) | — | 200 | 없음 | index, follow | 현재 상태(배포 전) |
| 운영 `https://joint-new-standard.vercel.app/patient-guides/acl-tear` (익명) | — | 200 | 없음 | index, follow | 현재 상태(배포 전) — 운영 배포 후 noindex 확인 필요 |

운영 별칭(`joint-new-standard.vercel.app`)의 실제 적용 확인은 **운영 배포 뒤에만** 가능합니다. 배포 직후 두 호스트를 다시 익명 요청해 「운영 도메인 = 헤더 없음, vercel.app = noindex」를 확인하고, 운영 도메인에 noindex가 보이면 즉시 롤백합니다.

---

## C. joint 본작업

### C-1. 환자안내 반복 문구 축소 (의미 유지, 줄이기만)

측정: `scripts/audit-guide-boilerplate.mjs`. 공통 문구 = 환자안내 24개 중 절반(12개) 이상에 똑같이 나오는 `<main>` 본문 줄. before = 운영, after = 이 브랜치 로컬 빌드.

| 환자안내 | P0 | 본문 글자 before → after | 공통 문구 비율 before → after | 본문 맥락 링크 before → after |
|---|---|---|---|---|
| `tennis-elbow` |  | 2055 → 1843 | 39.9% → **24.7%** | 1 → **5** |
| `calcific-tendinitis` |  | 1945 → 1799 | 42.1% → **25.3%** | 1 → **7** |
| `carpal-tunnel-syndrome` | ● | 1800 → 1587 | 45.2% → **28.4%** | 1 → **5** |
| `lateral-ankle-ligament-injury` | ● | 1821 → 1666 | 45% → **27.4%** | 1 → **6** |
| `meniscus-tear` | ● | 2015 → 1846 | 40.6% → **24.7%** | 1 → **7** |
| `acl-tear` | ● | 1787 → 1621 | 45.8% → **28.1%** | 1 → **7** |
| `knee-cartilage-defect` |  | 1880 → 1695 | 43.6% → **26.9%** | 1 → **6** |
| `knee-osteoarthritis-replacement` | ● | 2003 → 1757 | 47.2% → **29.5%** | 1 → **7** |
| `fracture-fixation` |  | 1959 → 1792 | 41.6% → **25.2%** | 1 → **5** |
| `hallux-valgus-mica` | ● | 2091 → 1821 | 46% → **28.5%** | 1 → **5** |
| `rotator-cuff-tear` | ● | 2066 → 1820 | 46% → **28.8%** | 1 → **7** |
| `shoulder-dislocation-bankart` |  | 2001 → 1724 | 48.3% → **30.4%** | 1 → **5** |
| `knee-osteotomy-hto` |  | 2116 → 1874 | 45.5% → **27.7%** | 1 → **6** |
| `ac-joint-dislocation` |  | 2543 → 2289 | 38% → **22.9%** | 1 → **5** |
| `trigger-finger` |  | 2426 → 2141 | 39.7% → **24.2%** | 1 → **5** |
| `femoral-head-osteonecrosis` |  | 2534 → 2263 | 38% → **22.9%** | 1 → **5** |
| `mcl-injury` |  | 2542 → 2280 | 38% → **23%** | 1 → **6** |
| `pcl-tear` |  | 2437 → 2176 | 39.7% → **24.1%** | 1 → **6** |
| `shoulder-arthroplasty` |  | 2622 → 2363 | 36.9% → **22.2%** | 1 → **5** |
| `trimalleolar-ankle-fracture` |  | 2526 → 2280 | 38.3% → **23%** | 1 → **5** |
| `tibial-shaft-fracture` |  | 2623 → 2374 | 36.7% → **21.9%** | 1 → **5** |
| `frozen-shoulder` |  | 3209 → 2985 | 28.5% → **15.8%** | 1 → **7** |
| `shoulder-tendinopathy-bursitis` |  | 3095 → 2869 | 29.7% → **16.6%** | 1 → **7** |
| `scaphoid-fracture` |  | 2601 → 2421 | 29.1% → **16.3%** | 2 → **6** |
| **평균 / 최대 / 최소 링크** | | | 40.4% / 48.3% → **24.5% / 30.4%** | 최소 1 → **5** |

25% 초과 환자안내(after): calcific-tendinitis 25.3%, carpal-tunnel-syndrome 28.4%, lateral-ankle-ligament-injury 27.4%, acl-tear 28.1%, knee-cartilage-defect 26.9%, knee-osteoarthritis-replacement 29.5%, fracture-fixation 25.2%, hallux-valgus-mica 28.5%, rotator-cuff-tear 28.8%, shoulder-dislocation-bankart 30.4%, knee-osteotomy-hto 27.7%

공통 줄 수 before 43 → after 32

줄인 내용(뜻은 그대로):
- 반복 eyebrow 제거: 「치료 결정 전」, 「먼저 살펴보는 치료」, 「수술 판단」, 「수술과 회복」, 「내원 전 준비」, 「3D Medical Illustration」
- 흩어져 있던 공통 안내 4곳(수술 권유 시 질문 가능, 수술 과정 일반 설명, 합병증 개인차, 이용 범위)을 하단 「이 안내의 이용 범위」 한 문단으로 합침
- 「내원 전 준비」 공통 4개 항목 → 같은 항목을 담은 한 문장
- 응급 안내 문장, 일러스트 고지 문장 축약(「실제 환자의 치료 전·후 사진이 아님」 고지는 유지)
- 제목 축약: 「치료를 결정하기 전에 확인하세요」 → 「치료 결정 전 확인」, 「수술을 선택한 경우의 과정과 회복」 → 「수술을 선택한 경우」, 「알아두어야 할 위험과 한계」 → 「위험과 한계」

**미달 사항**: 평균은 24.5%로 목표(25% 이하)를 달성했지만, 짧은 환자안내 11개가 25.2–30.4%입니다. 남은 공통 줄은 목차 6개, 섹션 제목, 의학 검토 표기, 응급·이용 범위 안내처럼 구조·안전 문구입니다. 이 페이지들을 25% 아래로 내리려면 (a) 목차·제목을 더 없애거나 (b) 질환별 고유 내용(보류 중인 판단표)이 들어가야 합니다. 이번에는 둘 다 하지 않았습니다.

### C-2. 내부 링크

| 방향 | before (운영) | after (로컬) |
|---|---|---|
| guide → 같은 부위 hub | 24개 모두 1개. 앵커가 「관련 진료 안내」(무맥락) | 24개 모두 1개. 앵커는 허브 실제 이름(예: 「무릎 통증 원인과 진료 흐름」) |
| guide → 관련 column | 0 | 같은 주제 칼럼이 있는 환자안내 15개에 1–4개 (칼럼 제목을 앵커로). 나머지 9개는 같은 주제 칼럼이 없어 관련 환자안내로 대신함 |
| guide → 관련 guide·부위 페이지 | 0 | 환자안내마다 1–3개 |
| guide → 본원 치료·수술 페이지 | **0** | **24/24** (본원 페이지 제목을 앵커로, 예: 「새기준병원 십자인대재건술 진료 안내」) |
| guide당 본문 맥락 링크(홈·목록·자기 자신 제외) | 최소 1 | **최소 5** (5–7) |
| column → 대표 guide (본문 안) | 0 (6개 칼럼은 본문 아래 버튼만) | **18/20** 칼럼 본문 안 문장 링크. 대표 환자안내가 없는 2개(`plantar-pain-differential`, `arthroscopy-timing`)는 제외 |

P0 환자안내로 들어오는 사이트 내부 링크(본문 기준, 출처 페이지 수):

| P0 환자안내 | before | after |
|---|---|---|
| acl-tear | 2 | 6 |
| knee-osteoarthritis-replacement | 2 | 6 |
| rotator-cuff-tear | 4 | 9 |
| hallux-valgus-mica | 5 | 6 |
| lateral-ankle-ligament-injury | 6 | 7 |
| meniscus-tear | 4 | 7 |
| carpal-tunnel-syndrome | 3 | 6 |

링크 정의 파일: `lib/guide-links.ts` (앵커는 모두 대상 페이지의 실제 제목, 「관절센터 보기」류 없음).

### C-3. 구조화데이터·날짜

| 항목 | before | after |
|---|---|---|
| 허브 `webPageJsonLd` `dateModified` | 2026-08-26 고정(`/knee`만 09-10) | `lib/content-dates.ts`의 실제 수정일 |
| 홈 `homeJsonLd` `dateModified` | 없음 | 2026-09-03 |
| 환자안내 `dateModified` | `lastReviewed`와 같은 값(07-31 등) | 실제 콘텐츠 수정일(이번 변경 → 2026-09-18) |
| 환자안내 `lastReviewed`·화면의 「최근 검토일」 | 07-31 / 08-02 / 08-09 | **변경 없음**(의학 검토를 새로 하지 않았으므로) |
| 칼럼 화면 「최종 수정일」 | 모든 칼럼 「2026년 8월 10일」 고정(08-10 커밋은 메타데이터만 추가, 본문 변경 없음) | 실제 수정일: 이번에 바뀐 18개 = 2026-09-18, 나머지 2개 = 2026-07-31 |
| `about` | 허브마다 공통 27개 주제 + 엔티티 | 페이지별 주제 1–6개(없는 페이지는 엔티티만). 공통 27개는 조직 엔티티의 `knowsAbout`에만 남김 |

sitemap `lastModified` 변경(실제로 바뀐 URL만):
- 2026-09-18: 환자안내 24개, 칼럼 18개, `/wrist/distal-radius-fracture`(공통 일러스트 고지 문장이 이 페이지에도 표시되어 함께 바뀜)
- `/knee`: 09-03 → **09-10** (09-10 커밋 `075398f`에서 화면 「페이지 갱신일 2026년 9월 10일」과 참고자료가 추가됐는데 sitemap에 반영되지 않았던 것을 바로잡음)
- 나머지 17개 URL: 변경 없음
- 주의: 운영 반영일이 늦어지면 `2026-09-18`을 실제 반영일로 바꾸는 것을 권장합니다.

### C-4. 허브 3개 본문 구조 수정안
`docs/reports/google-indexing-hub-structure-proposal-20260918.md` (제안만, 적용 안 함. title 변경 없음)

### E. title 1개 변경
`/patient-guides/knee-osteoarthritis-replacement`
- before: `용인 무릎 인공관절 | 수술이 필요한 시점과 회복 | 새기준병원`
- after: `용인 무릎 인공관절 | 수술을 고려하는 시점과 회복 | 새기준병원`
- H1(「무릎 관절염과 인공 무릎 관절 치환술」)과 앞뒤 키워드는 그대로입니다.
- 참고: 같은 페이지의 버튼 문구 `clinicCtaLabel` 「인공관절이 필요한 단계인지 확인하기」에도 「필요」가 있습니다. 지시 범위(title 1개) 밖이라 바꾸지 않았습니다.

---

## D. push·preview 확인
- push: `origin/seo/google-indexing-recovery-20260918` `394fcd3..5c45ebf` (커밋 3개: Phase A 보고서, Phase B 계획, 본작업). merge 없음.
- Vercel preview: 커밋 상태 `Vercel success`, 배포 ID 6517810726 (environment: Preview)
- preview URL: `https://joint-new-standard-a7nbinhb7-ubb799-7665s-projects.vercel.app`
- 익명 요청(쿠키 없음) 결과:

| 경로 | HTTP | Location | X-Robots-Tag | 본문 노출 |
|---|---|---|---|---|
| `/` | 302 | `https://vercel.com/sso-api?url=…` | noindex | 없음 |
| `/patient-guides/acl-tear` | 302 | `https://vercel.com/sso-api?url=…` | noindex | 없음 |
| `/robots.txt` | 302 | `https://vercel.com/sso-api?url=…` | noindex | 없음 |

→ preview는 SSO 보호로 **익명 접근이 차단**됩니다(`ssoProtection=all_except_custom_domains`와 일치). 이 preview에서 새 `*.vercel.app` 헤더 규칙의 동작은 익명으로 볼 수 없어서 §B의 로컬 Host 헤더 검증으로 대신했습니다.
- 운영 `https://joint.new-standard.co.kr/patient-guides/acl-tear`: 새 섹션 없음, X-Robots-Tag 없음 → 운영 변경 없음 확인.

---

## lint / build
- `npm ci` 성공, `npm run lint` 오류·경고 0, `NEXT_PUBLIC_INDEXABLE=true npm run build` 성공(정적 65페이지)
- `scripts/verify-indexing-p0.mjs` (로컬): P0 12/12 PASS, 호스트 2/2 PASS
- 모바일 375px: 새 「함께 읽을 안내」 섹션 가로 넘침 없음(문서 폭 375px)

---

## 본원 → joint 링크 문구 6개 (승인용, 적용 안 함)

삽입 위치(파일마다 2곳, `origin/main` 기준 같은 줄):
- A. 「치료 결정 전 확인」 섹션 머리말(`*CheckTitle`, 475–477행)의 기존 `<p>` 다음에 `<p>` 1개 — 기존 스타일 사용, CSS 추가 없음
- B. 「관련 질환·검사·치료 안내」 `<ul class="ns…Links">`(547행)의 첫 `<li>`
- 일반 `<a href>`, `rel="nofollow"` 없음, 같은 탭

| 본원 파일 | 링크 대상 | A. 본문 문장 원문 | B. 목록 앵커 원문 |
|---|---|---|---|
| `sub/r40/s4060.php` | `https://joint.new-standard.co.kr/patient-guides/knee-osteoarthritis-replacement` | 무릎 관절염에서 주사·운동치료, 근위경골절골술, 인공관절 치환술을 어떤 기준으로 비교하는지는 관절센터의 [무릎 관절염과 인공관절 치환술 환자안내]에서 단계별로 확인할 수 있습니다. | 무릎 관절염·인공관절 환자안내 (관절센터) |
| `sub/r40/s4080.php` | `…/patient-guides/acl-tear` | 재활을 먼저 해 볼 수 있는 경우와 재건술을 함께 검토하는 경우, 운동 복귀 전 확인하는 기능검사는 관절센터의 [전방 십자 인대 파열 환자안내]에 정리되어 있습니다. | 전방 십자 인대 파열 환자안내 (관절센터) |
| `sub/r40/s4090.php` | `…/patient-guides/rotator-cuff-tear` | 파열 범위와 근력 변화에 따라 비수술 치료와 관절경 봉합술을 어떻게 검토하는지, 수술 뒤 보조기와 재활 단계는 관절센터의 [회전근개 파열 환자안내]에서 확인할 수 있습니다. | 회전근개 파열 환자안내 (관절센터) |
| `sub/r40/s40b0.php` | `…/patient-guides/carpal-tunnel-syndrome` | 손저림이 목 신경 문제와 어떻게 구분되는지, 신경전도검사와 보조기·주사 치료를 어떤 순서로 검토하는지는 관절센터의 [수근관 증후군 환자안내]에 정리되어 있습니다. | 수근관(손목터널) 증후군 환자안내 (관절센터) |
| `sub/r40/s40d0.php` | `…/patient-guides/lateral-ankle-ligament-injury` | 급성 발목 염좌와 반복되는 발목 불안정성의 차이, 재활 뒤에도 불안정성이 남을 때 검토하는 치료는 관절센터의 [발목 외측 인대 손상 환자안내]에서 확인할 수 있습니다. | 발목 외측 인대 손상 환자안내 (관절센터) |
| `sub/r40/s40e0.php` | `…/patient-guides/hallux-valgus-mica` | 서 있는 자세 X-ray로 변형 정도를 보는 방법, 신발 조절 등 비수술 치료와 작은 절개 교정술(MICA)을 검토하는 기준은 관절센터의 [무지외반증 환자안내]에 정리되어 있습니다. | 무지외반증·MICA 환자안내 (관절센터) |

`[ ]` 안이 링크 앵커입니다. 문장은 joint 환자안내에 이미 게시된 내용만 가리키며 「수술이 필요하다」, 「완치」, 「보장」 류 표현이 없습니다. 이 방향(본원 → joint)과 C-2의 반대 방향(joint → 본원)이 짝을 이룹니다.
