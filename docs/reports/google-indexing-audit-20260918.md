# Google 색인 감사 (Phase A) — joint.new-standard.co.kr

- 감사일: 2026-09-18
- 브랜치: `seo/google-indexing-recovery-20260918` (HEAD `394fcd3`)
- 범위: GSC `Crawled - currently not indexed` P0 12개 URL
- 방법: 운영 URL을 Googlebot 스마트폰 UA로 직접 수집(서버 HTML, JS 실행 없음), 운영 `sitemap.xml` / `robots.txt` 파싱, 사이트맵 61개 URL 전체를 크롤링해 렌더링된 내부 inbound link 집계, 본원(new-standard.co.kr) 대응 페이지 19개 수집 비교, 저장소 소스 확인
- **이번 단계에서 바꾼 것 없음**: 콘텐츠, canonical, robots, sitemap, 운영 배포 모두 그대로입니다.

---

## 1. 결론 요약

1. **기술적 색인 차단은 원인이 아닙니다.** P0 12개 모두 200, 서버 HTML에 self-canonical 1개, `index, follow`, `X-Robots-Tag` 없음, H1과 본문이 SSR로 나오고, sitemap에도 들어 있습니다. 운영 환경은 `NEXT_PUBLIC_INDEXABLE=true`로 동작합니다(`robots.txt` `Allow: /`, noindex 헤더 없음).
2. **사이트 전체 문제입니다.** GSC 영향 URL은 HTML 56개인데 sitemap URL은 61개이고, 홈(`/`)도 포함됩니다. 개별 페이지 결함보다 **사이트 전체의 가치·중복 판단**(서브도메인이 본원과 같은 검색 의도를 다시 다룬다는 판단)으로 보는 것이 맞습니다.
3. **본원과의 중복은 문장 복제가 아니라 검색 의도 중복입니다.** 문장 4-gram 겹침은 0.07–0.25로 낮습니다. 대신 본원 `s40xx` 수술 페이지가 joint 환자안내와 **같은 판단 구조**를 씁니다(「어떤 경우에 상담하나 / 치료 결정 전 확인 / 비수술 치료와 수술 치료의 관계 / 수술적 치료 가능성」). 같은 질문에 답하는 페이지가 두 도메인에 있으면 Google은 더 오래되고 권위 있는 본원 쪽을 택할 가능성이 높습니다.
4. **환자안내가 짧고 틀이 반복됩니다.** 본문(`<main>`) 1,776–2,082자 가운데 39–46%가 다른 환자안내 4개 이상과 같은 줄입니다(같은 8개 섹션 골격, 같은 내원 준비·이용 범위 문구). 질환별 판단 기준도 짧고 일반적입니다.
5. **내부 링크가 약합니다.** 환자안내가 본문에서 받는 inbound link는 2–6개이고 대부분 목록 페이지(`/patient-guides`)와 허브 한 곳에서 옵니다. ACL과 무릎 인공관절은 2개뿐입니다. 본원은 joint 홈, `/doctor`, 허브만 링크하고 **환자안내로 가는 링크는 0개**입니다.
6. **제목이 역할과 어긋납니다.** 교육 페이지에 지역 서비스형 제목이 붙어 있습니다(「용인 무릎 인공관절」, 「용인 회전근개 파열」, 「용인 어깨통증 진료」, 「용인 무릎수술 판단」). 이 검색 의도는 본원 서비스 페이지 몫입니다.

---

## 2. P0 기술 감사표 (운영 서버 HTML 기준)

| # | URL | HTTP | canonical (서버 HTML) | robots meta / X-Robots-Tag | H1 (서버 HTML) | `<main>` 본문 글자수 | sitemap | lastmod |
|---|---|---|---|---|---|---|---|---|
| 1 | `/` | 200 | `https://joint.new-standard.co.kr` (self, 끝 슬래시 없음 — 루트라 같은 URL) | index, follow / 없음 | 용인 정형외과, 무릎·어깨 통증의 원인부터 치료와 회복까지 | 4,680 | O (`/`) | 2026-09-03 |
| 2 | `/patient-guides` | 200 | self | index, follow / 없음 | 관절·골절 질환별 안내 | 4,624 | O | 2026-08-09 |
| 3 | `/minimally-invasive-surgery` | 200 | self | index, follow / 없음 | 용인 무릎수술·관절수술, 증상과 회복 계획으로 판단합니다 | **1,691** | O | 2026-09-03 |
| 4 | `/foot-ankle` | 200 | self | index, follow / 없음 | 족부·발목 통증 진료 | 2,725 | O | 2026-07-31 |
| 5 | `/shoulder` | 200 | self | index, follow / 없음 | 용인 어깨통증, 움직임 제한과 힘줄 상태를 함께 봅니다 | 3,524 | O | 2026-09-03 |
| 6 | `/patient-guides/acl-tear` | 200 | self | index, follow / 없음 | 무릎 전방 십자 인대 파열 | 1,776 | O | 2026-07-31 |
| 7 | `/patient-guides/knee-osteoarthritis-replacement` | 200 | self | index, follow / 없음 | 무릎 관절염과 인공 무릎 관절 치환술 | 1,992 | O | 2026-07-31 |
| 8 | `/patient-guides/rotator-cuff-tear` | 200 | self | index, follow / 없음 | 어깨 회전근개 파열과 관절경 봉합술 | 2,055 | O | 2026-07-31 |
| 9 | `/patient-guides/hallux-valgus-mica` | 200 | self | index, follow / 없음 | 무지외반증과 작은 절개를 이용한 뼈 교정술(MICA) | 2,082 | O | 2026-07-31 |
| 10 | `/patient-guides/lateral-ankle-ligament-injury` | 200 | self | index, follow / 없음 | 발목 외측 인대 손상 | 1,812 | O | 2026-07-31 |
| 11 | `/patient-guides/meniscus-tear` | 200 | self | index, follow / 없음 | 반월상 연골판 파열 | 2,003 | O | 2026-07-31 |
| 12 | `/patient-guides/carpal-tunnel-syndrome` | 200 | self | index, follow / 없음 | 수근관 증후군 | 1,789 | O | 2026-07-31 |

공통 확인 사항:
- canonical은 문서마다 정확히 1개이고 JSON-LD는 모두 파싱됩니다. 허브: `WebSite, MedicalClinic, Hospital, Physician, MedicalProcedure` + `MedicalWebPage, BreadcrumbList`. 환자안내: `MedicalWebPage` + `reviewedBy`, `lastReviewed`, `ImageObject`.
- 변형 URL 처리: `http://` → 308 `https://`, 끝 슬래시 → 308로 슬래시 없는 URL, `?utm_*` → 200에 self-canonical(파라미터 제거). 모두 정상입니다.
- `/_next/static/*`: 해시가 바뀐 옛 chunk는 404를 냅니다. 배포 과정에서 생기는 정상 현상이므로 차단할 필요가 없습니다.

### 2-1. 부수 위생 문제 (원인 가능성 낮음, P1)

| 항목 | 내용 | 영향 |
|---|---|---|
| `joint-new-standard.vercel.app` 별칭 | 사이트 전체가 200, `index, follow`로 응답(canonical은 운영 도메인). | canonical이 막아 주지만 호스트 중복입니다. Vercel에서 기본 도메인으로 308 리디렉트하는 것을 권장합니다. |
| `lib/seo.ts#webPageJsonLd` | 허브 페이지 `dateModified`가 `"2026-08-26"`으로 고정되어 있습니다(`/knee`만 예외). sitemap lastmod(07-31 / 09-03)와 어긋납니다. | 날짜 신호가 서로 맞지 않습니다. `contentUpdatedAt`에서 읽도록 바꿔야 합니다. |
| `lib/seo.ts#webPageJsonLd` `about` | 모든 허브에 같은 27개 주제 목록(`mainTopics`)이 들어갑니다. | 페이지를 구분하는 신호가 없습니다. 페이지별 주제로 바꿔야 합니다. |
| `/minimally-invasive-surgery` | title은 「용인 무릎수술 판단 \| 관절내시경·인공관절」인데 본문은 관절 전체 일반론(1.7k자)입니다. | title과 본문의 의도가 어긋나고 본문이 얇습니다. |
| sitemap lastmod | 정책(실제 내용이 바뀔 때만 갱신)은 대체로 지켜집니다. 다만 `/foot-ankle`은 09-13·09-15 문구 수정 뒤에도 07-31입니다(경미). | 거짓으로 날짜를 올리지는 않았습니다. 유지하되 Phase B에서 실제로 바꾼 페이지만 갱신합니다. |
| 60개 URL 중 50개 lastmod 2026-07-31 | 환자안내 일괄 공개일입니다. | 사실과 맞으므로 수정하지 않습니다. |

---

## 3. 콘텐츠·템플릿 반복도 (환자안내 7개)

| 지표 | 값 |
|---|---|
| `<main>` 본문 | 1,776–2,082자 (헤더·푸터 포함 전체 약 2.4k자) |
| 다른 환자안내 4개 이상과 같은 줄의 비율 | ACL 46%, 수근관 46%, 발목 외측 인대 45%, 반월상 41%, 무릎 인공관절 40%, 회전근개 39%, 무지외반 39% |
| 환자안내 간 5-gram Jaccard | 0.31–0.37 (평균 0.33) |
| 공통 골격 | 결정 전 확인 → 증상 → 검사 → 비수술 → 수술 판단 → 수술 과정·3단계 회복 → 위험 → 응급 신호 → 내원 준비(같은 문구) → 이용 범위(같은 문구) |
| 환자안내의 외부 링크 | `/knee` 등 허브 1개와 `/patient-guides`뿐이고 **본원 서비스 페이지 링크는 0개** |

해석: 문장 자체는 질환별로 다르지만 섹션마다 2–3줄씩이라 질환 고유 정보가 얇고, 같은 틀과 같은 문구가 본문의 40% 안팎을 차지합니다. Google 입장에서는 이미 색인된 본원 페이지보다 더 알려 주는 것이 적은 페이지로 보일 수 있습니다.

---

## 4. 내부 inbound link (운영 사이트맵 61개 URL 크롤링, 렌더링된 HTML 기준)

「본문 링크」는 `<main>` 안의 링크만 셉니다(헤더·푸터 내비게이션 제외).

| URL | 전체 위치 링크(페이지 수) | 본문 링크(페이지 수) | 본문 링크 출처 | 본원 → 해당 URL |
|---|---|---|---|---|
| `/` | 60 | 34 | 전 페이지 「관절센터 메인」 | O (본원 공통 스키마·다수 페이지) |
| `/patient-guides` | 60 | 34 | 전 환자안내 breadcrumb, 허브 | 없음 |
| `/minimally-invasive-surgery` | 9 | 9 | `/`, `/knee`, `/shoulder`, `/foot-ankle`, `/injection-pain`, `/recovery`, `/doctor`, `/contact`, `/foot-ankle-mis` | O (`r50/rotator-cuff-tear.php`) |
| `/foot-ankle` | 60 | 17 | 허브, 환자안내 3개, 칼럼 5개 | O (`r50/foot-ankle-clinic.php`) |
| `/shoulder` | 60 | 21 | 허브, 어깨 환자안내, 칼럼 7개 | O (`r50/rotator-cuff-tear.php`) |
| `/patient-guides/acl-tear` | **2** | **2** | `/patient-guides`, `/knee` | 없음 |
| `/patient-guides/knee-osteoarthritis-replacement` | **2** | **2** | `/patient-guides`, `/knee` | 없음 |
| `/patient-guides/rotator-cuff-tear` | 4 | 4 | `/patient-guides`, `/`, `/shoulder`, `/column/rotator-cuff-surgery-decision` | 없음 |
| `/patient-guides/hallux-valgus-mica` | 5 | 5 | `/patient-guides`, `/`, `/foot-ankle`, `/foot-ankle-mis`, `/column/hallux-valgus` | 없음 |
| `/patient-guides/lateral-ankle-ligament-injury` | 6 | 6 | `/patient-guides`, `/foot-ankle`, `/foot-ankle-mis`, 칼럼 3개 | 없음 |
| `/patient-guides/meniscus-tear` | 4 | 4 | `/patient-guides`, `/`, `/knee`, `/column/meniscus-tear-surgery` | 없음 |
| `/patient-guides/carpal-tunnel-syndrome` | **3** | **3** | `/patient-guides`, `/`, `/hand-wrist-elbow` | 없음 |

- 환자안내로 가는 anchor text는 대부분 「○○ 안내 보기」, 「○○ 질환 안내」처럼 제목을 반복하는 형태입니다. 판단 질문형 anchor(예: 「재건술 대신 재활을 먼저 해볼 수 있는 경우」)는 없습니다.
- 본원 `s40xx` 수술 페이지 19개를 수집해 보니 joint로 가는 링크는 전부 홈, `/doctor`, 스키마 `@id`였습니다. 질환 단위 연결이 없습니다.

---

## 5. 본원 유사 페이지 대응과 검색 의도 판정

판정 기준:
- **distinct**: 본원에 같은 질문에 답하는 페이지가 없음.
- **partial overlap**: 같은 질환을 다루지만 질문(검색 의도)이나 깊이가 분명히 다름.
- **strong overlap**: 같은 검색어를 겨냥하고 같은 판단 구조로 답함.

텍스트 겹침 = 4-gram containment(짧은 쪽 기준)입니다. 수치는 모두 낮으므로 판정 근거는 **title·H1이 겨냥하는 검색어와 섹션 구조**입니다.

| # | joint URL | 본원 유사 페이지 (title) | 텍스트 겹침 | 판정 | 근거 | 제안 조치 (Phase B) |
|---|---|---|---|---|---|---|
| 1 | `/` | `/sub/r40/s4050.php` 「용인 정형외과 진료 \| 무릎·어깨·발목 통증」 | 0.14 | **strong overlap** | title·H1이 모두 「용인 정형외과 + 무릎·어깨(·발목) 통증」을 겨냥. 본원은 권위 있는 도메인의 정형외과 허브. | self-canonical 유지. 홈 title·H1을 「관절·족부 질환별 판단 가이드」 역할로 바꾸고(「용인 정형외과」 서비스 의도는 본원 s4050이 맡음), s4050 ↔ joint 홈 상호 링크에 역할 설명을 붙임. |
| 2 | `/patient-guides` | 없음 (본원에 질환별 환자안내 목록 없음) | — | **distinct** | 본원에 대응하는 페이지 없음. | 유지. 부위별 묶음마다 「이 부위에서 가장 많이 묻는 판단 질문」 1–2줄을 넣고, 본원 해당 수술 페이지로 가는 링크를 둠. |
| 3 | `/minimally-invasive-surgery` | `s4050` (관절 허브), `s4060` (인공관절), `s4080` (십자인대) | 0.24–0.25 | **partial overlap** | 본원에는 「관절수술 판단 기준」 허브가 따로 없으므로 의도는 다름. 다만 title이 「용인 무릎수술」로 본원 s4060·s4080과 겹치고, 본문은 1.7k자 일반론이라 얇음. | title을 본문과 맞춤(「관절수술이 필요한지 판단하는 기준」). 8개 수술 주제마다 해당 joint 환자안내와 본원 수술 페이지로 가는 짧은 판단 기준 링크 추가. |
| 4 | `/foot-ankle` | `/sub/r50/foot-ankle-clinic.php` 「족부·발목 클리닉」, `/sub/r30/s3080.php` 「발목통증·발등저림·아킬레스건통증」 | 0.17–0.18 | **strong overlap** | 같은 증상 목록(반복 접질림, 발바닥·뒤꿈치, 아킬레스, 무지외반), 같은 「진료」 서비스 의도. | 「진료」 서비스 문구를 줄이고 증상별 감별 질문 → 해당 환자안내로 이어지는 판단 허브로 바꿈. 본원 foot-ankle-clinic을 진료·예약 페이지로 명시해 링크. |
| 5 | `/shoulder` | `/sub/r50/rotator-cuff-tear.php`, `/sub/r30/s3040.php` 「어깨통증·팔 올릴 때 통증」 | 0.17–0.18 | **strong overlap** | 「용인 어깨통증 진료」 title과 H1 모두 본원 두 페이지와 같은 검색어. | title·H1에서 「용인 … 진료」를 빼고 「어깨 통증 원인별 판단(회전근개·오십견·석회화·충돌)」로 바꿈. 본원 r50/rotator-cuff-tear로 진료 링크. |
| 6 | `/patient-guides/acl-tear` | `/sub/r40/s4080.php` 「무릎이 흔들리는 인대를 다시 만드는 수술(십자인대재건술)」 | 0.13 | **strong overlap** | 두 페이지 모두 「불안정성·동반 손상·활동 수준 → 비수술 vs 재건술」 판단 구조. joint 쪽이 수술 과정·위험·회복 단계를 더 다루지만 겨냥하는 질문은 같음. | 재활 우선 vs 재건 선택을 가르는 ACL 고유 판단표(방향 전환 스포츠 여부, 반복 giving-way, 동반 연골판 손상, 복귀 기능검사 항목) 추가(원장 검수 필요). s4080으로 「수술·입원 안내」 링크. inbound link 2개 → 5개 이상으로 늘림(`/minimally-invasive-surgery`, `/knee`, 관련 칼럼). |
| 7 | `/patient-guides/knee-osteoarthritis-replacement` | `/sub/r40/s4060.php` 「인공관절치환술 진료 안내 \| 무릎·고관절 관절염」, `/sub/r40/s4070.php` (HTO) | 0.11 | **strong overlap** | 본문 겹침은 낮지만 `seoTitle` 「**용인 무릎 인공관절** \| 수술이 필요한 시점과 회복」이 본원 s4060의 지역 서비스 의도와 정면으로 겹침. | `seoTitle`을 교육 의도로 되돌림(예: 「무릎 관절염, 인공관절을 고려하는 시점과 회복」 — 「용인」 제거). 주사·HTO·인공관절 중 무엇을 고를지 가르는 기준을 추가하고 s4060·s4070 링크. inbound 2개 → 늘림. |
| 8 | `/patient-guides/rotator-cuff-tear` | `/sub/r40/s4090.php` 「회전근개봉합술」, `/sub/r50/rotator-cuff-tear.php` 「회전근개 파열·어깨 통증 진료 안내」 | 0.09–0.12 | **strong overlap** | 본원 2개 + joint `/shoulder` + joint 칼럼 `rotator-cuff-surgery-decision`까지 **4곳이 같은 의도**. `seoTitle` 「용인 회전근개 파열 \| 비수술 치료와 봉합술 판단」. | `seoTitle`에서 「용인」 제거. 부분층 vs 전층 파열, 급성 외상성 vs 퇴행성, 근위축·지방변성에 따른 판단 기준 추가. 칼럼 `rotator-cuff-surgery-decision`과 역할 분리(칼럼 = 질문 1개, 환자안내 = 전체 판단). 본원 s4090 링크. |
| 9 | `/patient-guides/hallux-valgus-mica` | `/sub/r40/s40e0.php` 「휘어진 엄지발가락을 바로잡는 수술(무지외반교정술)」 | 0.10 | **strong overlap** | 같은 판단 구조(변형 정도, 통증, 신발, 기존 치료 반응 → 수술 상담). joint 내부에도 `/column/hallux-valgus`, `/foot-ankle-mis`가 있음. | 변형 각도·통증 원인(돌출부 vs 전족부 통증)·MICA 적용 한계 같은 고유 기준 추가. 본원 s40e0 링크. 칼럼과 역할 분리. |
| 10 | `/patient-guides/lateral-ankle-ligament-injury` | `/sub/r40/s40d0.php` 「발목인대봉합술 진료 안내 \| 반복 발목 염좌·발목 불안정성」 | 0.12 | **strong overlap** | 같은 의도. joint 내부에도 칼럼 3개(`ankle-instability`, `ankle-ligament-tear-treatment`, `yongin-ankle-pain-repeated-sprain`)가 같은 주제를 다룸. | 급성 염좌 등급별 대응 vs 만성 불안정성의 수술 기준(재활 기간, 반복 횟수, 동반 연골 손상)을 고유 판단표로 추가. 칼럼 3개가 이 환자안내를 본문 링크로 가리키게 정리. 본원 s40d0 링크. |
| 11 | `/patient-guides/meniscus-tear` | 전용 페이지 없음. `/sub/r30/s3030.php` 「무릎통증·계단 통증」, `/sub/r50/knee-pain.php`에서 부분 언급 | 0.07–0.10 | **partial overlap** | 본원에는 반월상 연골판 수술 페이지가 없음. 무릎통증 페이지의 원인 항목 중 하나로만 다룸. | 본원과 겹침이 가장 적어 색인 회복 가능성이 가장 큰 페이지. 봉합 vs 부분절제 vs 보존치료 기준(파열 형태, 잠김 증상, 연령·퇴행 변화)을 강화. 칼럼 `meniscus-tear-surgery`와 역할 분리. |
| 12 | `/patient-guides/carpal-tunnel-syndrome` | `/sub/r40/s40b0.php` 「손목터널절제술 진료 안내 \| 손목터널증후군·손저림」 | 0.13 | **strong overlap** | 같은 판단 구조(손저림 범위, 야간 증상, 근력저하, 감별). | 목디스크 감별, 신경전도검사 결과 해석, 수술 후 감각 회복의 한계 같은 고유 기준 추가. 본원 s40b0 링크. inbound 3개 → 늘림(`/hand-wrist-elbow` 본문, 관련 칼럼). |

판정 집계: **distinct 1**(`/patient-guides`), **partial overlap 2**(`/minimally-invasive-surgery`, `meniscus-tear`), **strong overlap 9**.

---

## 6. P0 수정안 (Phase B 제안 — 아직 적용 안 함)

우선순위 순입니다. 모두 **self-canonical 유지, noindex 없음, URL 변경 없음, 서브도메인 이전 없음**을 전제로 합니다.

### 6-1. 역할 분리 (가장 중요)
- 원칙: 본원 = 「용인 + 진료·수술 서비스」 의도, joint = 「질환별 판단 기준(수술이 필요한가, 무엇을 고를까)」 의도.
- joint에서 지역 서비스형 title과 H1을 교육 의도로 바꿉니다: `/`, `/shoulder`, `/foot-ankle`, `/minimally-invasive-surgery`, 환자안내 `seoTitle` 2개(무릎 인공관절, 회전근개).
- 환자안내마다 「이 페이지는 판단 기준 안내입니다. 새기준병원 진료·수술·입원 안내는 [본원 ○○ 페이지]」 형태의 **상호 역할 링크 한 줄**을 넣습니다.
- ⚠️ Naver: 08-26·09-03 커밋(「Naver 검색 의도 맞춤」)으로 붙은 「용인 …」 title을 되돌리는 작업이라 Naver 노출에 영향이 있을 수 있습니다. **적용 전에 결정이 필요합니다**(§7).

### 6-2. 질환별 고유 판단 블록 (환자안내 7개)
- 페이지마다 「김동희 원장이 실제로 가르는 기준」 블록 하나를 넣습니다. 다른 질환에 그대로 옮겨 쓸 수 없는 내용(판단 변수 3–5개와 선택지별 조건)이어야 하고, 보수적 표현, 원장 검수, 검토일 갱신을 거칩니다.
- 일반 문장을 늘려 글자 수를 채우지 않습니다. 목표는 「본원 페이지에는 없는 판단 정보」입니다.

### 6-3. 반복 문구 축소
- 「내원 전 준비」와 「이 안내의 이용 범위」 공통 블록을 짧은 공통 푸터 1개로 합칩니다. 이렇게 하면 공통 줄 비율 39–46% → 목표 25% 이하.
- 「치료를 결정하기 전에 확인하세요」 공통 도입 문장을 질환별 문장으로 바꿉니다.

### 6-4. 내부 링크
- 환자안내마다 본문 inbound link를 최소 5개(목록 페이지 제외 3개 이상)로 늘리고, anchor는 판단 질문형으로 씁니다.
  - ACL / 무릎 인공관절: `/minimally-invasive-surgery`, `/knee` 본문, 관련 칼럼(`knee-mri-timing`, `knee-arthritis-injection`, `arthroscopy-timing`).
  - 수근관: `/hand-wrist-elbow` 본문, `/wrist/distal-radius-fracture` 관련 섹션.
- 같은 주제 칼럼(회전근개 2, 발목 인대 3, 무지외반 1, 반월상 1)이 본문에서 해당 환자안내를 대표 문서로 링크하게 합니다(같은 사이트 안의 cannibalization 정리).
- **본원 → joint**: `s4060/s4080/s4090/s40b0/s40d0/s40e0`에 대응 joint 환자안내로 가는 「질환 판단 가이드」 링크 1개씩. 본원 저장소와 Cafe24 배포가 필요하므로 **별도 승인 대상**입니다.

### 6-5. 구조화데이터·날짜 위생
- `webPageJsonLd`: `dateModified`를 `contentUpdatedAt[path]`에서 읽고, `about`을 페이지별 주제로 바꿉니다.
- sitemap `lastModified`는 Phase B에서 실제로 내용이 바뀐 P0 페이지만 갱신합니다.

### 6-6. P1 (P0 효과 확인 뒤)
- `joint-new-standard.vercel.app` → 운영 도메인 308(Vercel Domains 설정).
- 나머지 49개 URL에 같은 패턴 적용은 14·28일 측정 뒤 결정.

---

## 7. 진행 전에 결정이 필요한 사항

1. **title 역할 분리와 Naver 영향**: joint의 「용인 …」 서비스형 title을 교육형으로 바꿀지. 권장: P0 12개만 바꾸고 Naver 순위를 함께 관찰.
2. **본원 → joint 질환 링크**: 본원 `s40xx` 6개 페이지 수정(별도 저장소, Cafe24 배포)을 이번 사이클에 넣을지.
3. **원장 검수**: 질환별 판단 블록 7개의 의학 내용을 김동희 원장이 검수할 수 있는 일정.
4. **허브 3개(`/shoulder`, `/foot-ankle`, `/`)의 범위**: title·H1 조정까지만 할지, 본문 구조까지 판단 허브로 바꿀지.

---

## 부록 A. 운영 환경 색인 설정 확인
- `robots.txt`: `User-Agent: * / Allow: / / Sitemap: https://joint.new-standard.co.kr/sitemap.xml` → `isIndexable === true`.
- 전 P0 응답에 `X-Robots-Tag` 없음 → `next.config.mjs`의 `!isIndexable` 헤더 분기가 꺼져 있음.
- `/patient-guides/pdfs/*`에만 의도된 `noindex, follow`.
- 환경변수 값은 직접 조회하지 않았고 운영 출력으로만 판단했습니다.

## 부록 B. 본원 대응 페이지 기술 상태
본원 19개 페이지 모두 200, self-canonical, robots meta 없음(기본 index). 본원 `s40xx` 수술 페이지끼리도 같은 14개 H2 골격을 공유합니다(본원 쪽 템플릿 반복 — 이번 범위 밖).
