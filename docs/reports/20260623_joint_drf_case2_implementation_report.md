# 2026-06-23 관절센터 요골 원위부 골절 페이지 구현 검수 보고서

## 1. 수정 파일 목록

- `app/wrist/distal-radius-fracture/page.tsx`
  - 신규 환자 교육 페이지 생성
  - 제목, meta description, canonical, FAQ, BreadcrumbList, MedicalWebPage JSON-LD 구성
  - 원본 PPT 이미지와 식별 가능 영상 자료 미게시
  - 공개 화면 내부 작업자 문구 제거
- `lib/data.ts`
  - `/column` 목록에 신규 글 노출
  - `allStaticPaths`에 `/wrist/distal-radius-fracture` 추가
- `docs/reports/20260623_joint_drf_case2_market_research.md`
  - Phase 0 시장조사 보고서 작성
- `docs/reports/20260623_joint_drf_case2_implementation_report.md`
  - 구현 및 배포 전 검수 결과 기록

참고: `app/sitemap.ts`, `lib/site.ts`에는 의도치 않은 변경 없음.

## 2. 빌드 결과

- 명령: `NEXT_PUBLIC_INDEXABLE=true NEXT_PUBLIC_SITE_URL=https://joint.new-standard.co.kr npm run build`
- 결과: PASS
- `/wrist/distal-radius-fracture` 정적 라우트 생성 확인
- 참고 경고: Next.js workspace root 추론 경고 발생. 상위 `C:\Users\user\package-lock.json`과 프로젝트 `package-lock.json`이 함께 감지되는 기존 환경 경고이며, 빌드 실패는 아님.

## 3. 로컬 검수 결과

검수 서버:

- `NEXT_PUBLIC_INDEXABLE=true`
- `NEXT_PUBLIC_SITE_URL=https://joint.new-standard.co.kr`
- `http://127.0.0.1:3011`

HTTP 결과:

| URL | 결과 | X-Robots-Tag |
| --- | --- | --- |
| `/` | 200 | 없음 |
| `/column` | 200 | 없음 |
| `/wrist/distal-radius-fracture` | 200 | 없음 |
| `/sitemap.xml` | 200 | 없음 |

## 4. H1/title/meta/canonical/noindex 표

| 항목 | 결과 |
| --- | --- |
| H1 개수 | 1 |
| H1 | 손목 골절, 깁스만 해도 될까요? 요골 원위부 골절의 보존치료와 수술 판단 |
| title 개수 | 1 |
| title | 손목 골절, 깁스만 해도 될까요? 요골 원위부 골절의 보존치료와 수술 판단 \| 새기준병원 관절센터 |
| meta description | 요골 원위부 골절에서 전위, 관절면 침범, 손목 정렬, 동반 손상, 힘줄 자극 가능성을 함께 확인해 보존치료와 수술 방향을 상담하는 기준을 안내합니다. |
| canonical | `https://joint.new-standard.co.kr/wrist/distal-radius-fracture` |
| noindex | 없음 |
| robots meta | `index, follow` |
| X-Robots-Tag | 없음 |

## 5. FAQ/schema 표

| 항목 | 결과 |
| --- | --- |
| 화면 FAQ 문항 수 | 5 |
| FAQPage JSON-LD 문항 수 | 5 |
| 화면 FAQ와 schema 문항 일치 | PASS |
| BreadcrumbList | 존재 |
| MedicalWebPage | 존재 |
| JSON-LD parse error | 0 |

FAQ 문항:

1. 손목 골절은 무조건 수술해야 하나요?
2. X-ray만으로 충분한가요?
3. 손목 골절 후 CT가 필요한 경우는 언제인가요?
4. 깁스 중 손가락은 움직여도 되나요?
5. 수술 후 금속판은 꼭 제거해야 하나요?

## 6. 개인정보 키워드 검사 결과

공개 페이지와 `/column` 목록 기준 검출 0건.

검사 키워드:

- 환자명
- 생년월일
- 등록번호
- 직업
- 케이스 번호
- 촬영일
- 원본 PPT
- DICOM
- TN0634
- T6151
- Case 2
- Image Placeholder
- 이미지 준비 중
- 비식별 영상 준비 후 삽입

## 7. 의료광고 위험문구 검사 결과

공개 페이지와 `/column` 목록 기준 검출 0건.

검사 문구:

- 완치
- 100% 개선
- 부작용 없음
- 즉시 회복
- 빠른 회복 보장
- 안전한 수술
- 최고의 치료
- 유일한 치료
- 수술 결과 보장
- 외상성 관절염 100%
- 반드시 수술
- 반드시 금속 제거

## 8. 내부 링크 404 검사 결과

- 대상 페이지 내 로컬 내부 링크 404: 0건
- 확인 링크:
  - `/`
  - `/ai-readable-orthopedic-profile`
  - `/column`
  - `/contact`
  - `/doctor`
  - `/foot-ankle`
  - `/injection-pain`
  - `/knee`
  - `/minimally-invasive-surgery`

## 9. 모바일 검수 결과

브라우저 viewport 390px 기준:

| 항목 | 결과 |
| --- | --- |
| viewport width | 390 |
| visual viewport width | 375 |
| document client width | 375 |
| document scroll width | 375 |
| body scroll width | 375 |
| horizontal overflow | 없음 |
| H1 개수 | 1 |
| FAQ 개수 | 5 |
| 내부 작업자 문구 노출 | 없음 |

## 10. NEXT_PUBLIC_INDEXABLE 확인 필요

이 프로젝트는 `NEXT_PUBLIC_INDEXABLE=true`가 빌드 시점과 실행 환경에 설정되어야 `robots meta`가 `index, follow`가 되고 `X-Robots-Tag`가 제거된다.

production 배포 환경에서 아래 조건 유지 필요:

- `NEXT_PUBLIC_INDEXABLE=true`
- `NEXT_PUBLIC_SITE_URL=https://joint.new-standard.co.kr`
- `/wrist/distal-radius-fracture`에 noindex 없음
- `X-Robots-Tag` 없음
- `robots meta`는 `index, follow`

## 11. 최종 판정

PASS: 서버 반영 가능.

단, production 배포 후 실제 URL 기준으로 noindex, X-Robots-Tag, robots meta, sitemap 포함 여부를 재검수해야 한다.
