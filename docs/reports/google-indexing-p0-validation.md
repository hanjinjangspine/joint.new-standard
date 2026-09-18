# Google 색인 P0 검증 보고서

- 검증일: 2026-09-18
- 브랜치: `seo/google-indexing-recovery-20260918`
- 도구: `scripts/verify-indexing-p0.mjs`, `scripts/audit-guide-boilerplate.mjs`
- 기준 빌드: `NEXT_PUBLIC_INDEXABLE=true npm run build` → `next start` (로컬, 운영과 같은 색인 설정)
- **운영 배포 없음.** 아래 "before"는 운영(라이브), "after"는 이 브랜치의 로컬 빌드입니다.

## 1. after — 로컬 빌드 (이 브랜치)

| URL | HTTP | canonical | robots meta / X-Robots-Tag | H1 | dateModified | lastReviewed | about 수 | 본문 맥락 링크 | 본원 링크 | sitemap lastmod | 결과 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `/` | 200 | https://joint.new-standard.co.kr | index, follow / - | 용인 정형외과, 무릎·어깨 통증의 원인부터 치료와 회복까지 | 2026-09-03 | - | 6 | 28 | 7 | 2026-09-03 | PASS |
| `/patient-guides` | 200 | https://joint.new-standard.co.kr/patient-guides | index, follow / - | 관절·골절 질환별 안내 | 2026-08-09 | - | 1 | 25 | 0 | 2026-08-09 | PASS |
| `/minimally-invasive-surgery` | 200 | https://joint.new-standard.co.kr/minimally-invasive-surgery | index, follow / - | 용인 무릎수술·관절수술, 증상과 회복 계획으로 판단합니다 | 2026-09-03 | - | 4 | 9 | 1 | 2026-09-03 | PASS |
| `/foot-ankle` | 200 | https://joint.new-standard.co.kr/foot-ankle | index, follow / - | 족부·발목 통증 진료 | 2026-07-31 | - | 7 | 10 | 1 | 2026-07-31 | PASS |
| `/shoulder` | 200 | https://joint.new-standard.co.kr/shoulder | index, follow / - | 용인 어깨통증, 움직임 제한과 힘줄 상태를 함께 봅니다 | 2026-09-03 | - | 5 | 15 | 1 | 2026-09-03 | PASS |
| `/patient-guides/acl-tear` | 200 | https://joint.new-standard.co.kr/patient-guides/acl-tear | index, follow / - | 무릎 전방 십자 인대 파열 | 2026-09-18 | 2026-07-31 | 1 | 7 | 1 | 2026-09-18 | PASS |
| `/patient-guides/knee-osteoarthritis-replacement` | 200 | https://joint.new-standard.co.kr/patient-guides/knee-osteoarthritis-replacement | index, follow / - | 무릎 관절염과 인공 무릎 관절 치환술 | 2026-09-18 | 2026-07-31 | 1 | 7 | 1 | 2026-09-18 | PASS |
| `/patient-guides/rotator-cuff-tear` | 200 | https://joint.new-standard.co.kr/patient-guides/rotator-cuff-tear | index, follow / - | 어깨 회전근개 파열과 관절경 봉합술 | 2026-09-18 | 2026-07-31 | 1 | 7 | 1 | 2026-09-18 | PASS |
| `/patient-guides/hallux-valgus-mica` | 200 | https://joint.new-standard.co.kr/patient-guides/hallux-valgus-mica | index, follow / - | 무지외반증과 작은 절개를 이용한 뼈 교정술(MICA) | 2026-09-18 | 2026-07-31 | 1 | 5 | 1 | 2026-09-18 | PASS |
| `/patient-guides/lateral-ankle-ligament-injury` | 200 | https://joint.new-standard.co.kr/patient-guides/lateral-ankle-ligament-injury | index, follow / - | 발목 외측 인대 손상 | 2026-09-18 | 2026-07-31 | 1 | 6 | 1 | 2026-09-18 | PASS |
| `/patient-guides/meniscus-tear` | 200 | https://joint.new-standard.co.kr/patient-guides/meniscus-tear | index, follow / - | 반월상 연골판 파열 | 2026-09-18 | 2026-07-31 | 1 | 7 | 1 | 2026-09-18 | PASS |
| `/patient-guides/carpal-tunnel-syndrome` | 200 | https://joint.new-standard.co.kr/patient-guides/carpal-tunnel-syndrome | index, follow / - | 수근관 증후군 | 2026-09-18 | 2026-07-31 | 1 | 5 | 1 | 2026-09-18 | PASS |

| Host | HTTP | X-Robots-Tag | 결과 |
|---|---|---|---|
| joint.new-standard.co.kr | 200 | - | PASS |
| joint-new-standard.vercel.app | 200 | noindex, nofollow | PASS |

- 호스트 점검은 같은 로컬 서버에 `Host` 헤더를 바꿔 보낸 결과입니다(운영 도메인 → 헤더 없음, `*.vercel.app` → `noindex, nofollow`).
- `about 수` = 해당 페이지 WebPage 노드의 `about` 항목 수. 이전에는 허브마다 공통 주제 27개 + 엔티티 1개 = 28개였습니다.

## 2. before — 운영(라이브)

| URL | HTTP | canonical | robots meta / X-Robots-Tag | H1 | dateModified | lastReviewed | about 수 | 본문 맥락 링크 | 본원 링크 | sitemap lastmod | 결과 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| `/` | 200 | https://joint.new-standard.co.kr | index, follow / - | 용인 정형외과, 무릎·어깨 통증의 원인부터 치료와 회복까지 | - | - | 27 | 28 | 7 | 2026-09-03 | FAIL: dateModified, aboutScoped |
| `/patient-guides` | 200 | https://joint.new-standard.co.kr/patient-guides | index, follow / - | 관절·골절 질환별 안내 | 2026-08-26 | - | 28 | 25 | 0 | 2026-08-09 | FAIL: dateModified, aboutScoped |
| `/minimally-invasive-surgery` | 200 | https://joint.new-standard.co.kr/minimally-invasive-surgery | index, follow / - | 용인 무릎수술·관절수술, 증상과 회복 계획으로 판단합니다 | 2026-08-26 | - | 28 | 9 | 1 | 2026-09-03 | FAIL: dateModified, aboutScoped |
| `/foot-ankle` | 200 | https://joint.new-standard.co.kr/foot-ankle | index, follow / - | 족부·발목 통증 진료 | 2026-08-26 | - | 28 | 10 | 1 | 2026-07-31 | FAIL: dateModified, aboutScoped |
| `/shoulder` | 200 | https://joint.new-standard.co.kr/shoulder | index, follow / - | 용인 어깨통증, 움직임 제한과 힘줄 상태를 함께 봅니다 | 2026-08-26 | - | 28 | 15 | 1 | 2026-09-03 | FAIL: dateModified, aboutScoped |
| `/patient-guides/acl-tear` | 200 | https://joint.new-standard.co.kr/patient-guides/acl-tear | index, follow / - | 무릎 전방 십자 인대 파열 | 2026-07-31 | 2026-07-31 | 1 | 1 | 0 | 2026-07-31 | FAIL: links5, mainSiteLink |
| `/patient-guides/knee-osteoarthritis-replacement` | 200 | https://joint.new-standard.co.kr/patient-guides/knee-osteoarthritis-replacement | index, follow / - | 무릎 관절염과 인공 무릎 관절 치환술 | 2026-07-31 | 2026-07-31 | 1 | 1 | 0 | 2026-07-31 | FAIL: links5, mainSiteLink |
| `/patient-guides/rotator-cuff-tear` | 200 | https://joint.new-standard.co.kr/patient-guides/rotator-cuff-tear | index, follow / - | 어깨 회전근개 파열과 관절경 봉합술 | 2026-07-31 | 2026-07-31 | 1 | 1 | 0 | 2026-07-31 | FAIL: links5, mainSiteLink |
| `/patient-guides/hallux-valgus-mica` | 200 | https://joint.new-standard.co.kr/patient-guides/hallux-valgus-mica | index, follow / - | 무지외반증과 작은 절개를 이용한 뼈 교정술(MICA) | 2026-07-31 | 2026-07-31 | 1 | 1 | 0 | 2026-07-31 | FAIL: links5, mainSiteLink |
| `/patient-guides/lateral-ankle-ligament-injury` | 200 | https://joint.new-standard.co.kr/patient-guides/lateral-ankle-ligament-injury | index, follow / - | 발목 외측 인대 손상 | 2026-07-31 | 2026-07-31 | 1 | 1 | 0 | 2026-07-31 | FAIL: links5, mainSiteLink |
| `/patient-guides/meniscus-tear` | 200 | https://joint.new-standard.co.kr/patient-guides/meniscus-tear | index, follow / - | 반월상 연골판 파열 | 2026-07-31 | 2026-07-31 | 1 | 1 | 0 | 2026-07-31 | FAIL: links5, mainSiteLink |
| `/patient-guides/carpal-tunnel-syndrome` | 200 | https://joint.new-standard.co.kr/patient-guides/carpal-tunnel-syndrome | index, follow / - | 수근관 증후군 | 2026-07-31 | 2026-07-31 | 1 | 1 | 0 | 2026-07-31 | FAIL: links5, mainSiteLink |

| Host | HTTP | X-Robots-Tag | 결과 |
|---|---|---|---|
| joint.new-standard.co.kr | 200 | - | PASS |
| joint-new-standard.vercel.app | 200 | - | FAIL |

- before의 호스트 표는 운영 서버에 Host를 바꿔 보낸 값이라 참고용입니다. 실제 두 호스트 익명 요청 결과는 Phase B 보고서 §B를 보세요.
- before 실패 사유: 허브 `dateModified`가 2026-08-26 고정값이거나 없음, `about` 28개 공통 목록, 환자안내 맥락 링크 1개·본원 링크 0개.

## 3. 명령 결과
- `npm ci`: 성공
- `npm run lint`: 경고·오류 0
- `NEXT_PUBLIC_INDEXABLE=true npm run build`: 성공 (정적 페이지 65개)
- `node scripts/verify-indexing-p0.mjs --origin http://localhost:3107`: 12/12 PASS, 호스트 2/2 PASS (exit 0)
