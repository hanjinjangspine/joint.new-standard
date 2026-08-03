import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpenText } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import { PatientGuideCard } from "@/components/PatientGuideSection";
import ResponsiveHeroMedia from "@/components/ResponsiveHeroMedia";
import SEOJsonLd from "@/components/SEOJsonLd";
import {
  patientGuideCategoryOrder,
  patientGuides,
  type PatientGuideCategory
} from "@/lib/patient-guides";
import { createMetadata, webPageJsonLd } from "@/lib/seo";

const title = "관절·골절 질환별 안내";
const description =
  "무릎, 고관절, 어깨, 족부·발목, 손·손목·팔꿈치와 골절 질환을 증상·검사·치료·회복 순서로 확인할 수 있습니다.";

const categoryDetails: Record<PatientGuideCategory, { id: string; hint: string }> = {
  "무릎": { id: "knee", hint: "붓기, 잠김, 불안정감, O자 정렬" },
  "고관절": { id: "hip", hint: "사타구니·엉덩이 통증, 보행 불편" },
  "어깨": { id: "shoulder", hint: "야간통, 팔 들기 어려움, 탈구" },
  "족부·발목": { id: "foot-ankle", hint: "반복되는 접질림, 엄지발가락 변형" },
  "손·손목·팔꿈치": { id: "hand-wrist-elbow", hint: "손 저림, 팔꿈치 통증" },
  "골절": { id: "fracture", hint: "골절의 검사와 고정·수술 판단" }
};

export const metadata: Metadata = createMetadata({
  title: `${title} | 새기준병원 관절센터`,
  description,
  path: "/patient-guides",
  keywords: [
    "새기준병원 환자안내",
    "관절 질환 안내",
    "무릎 수술 안내",
    "고관절 질환 안내",
    "어깨 수술 안내",
    "족부 발목 수술 안내"
  ]
});

export default function PatientGuidesPage() {
  return (
    <>
      <SEOJsonLd
        data={webPageJsonLd({
          title: `${title} | 새기준병원 관절센터`,
          description,
          path: "/patient-guides"
        })}
      />
      <main>
        <section className="nsh-responsive-hero border-b border-line bg-[linear-gradient(135deg,#F8FAFB_0%,#EEF4F7_58%,#FFFFFF_100%)] px-4 py-9 sm:px-6 lg:px-8 lg:py-12">
          <div className="nsh-responsive-hero__grid mx-auto grid items-center">
            <div className="nsh-responsive-hero__copy">
              <Breadcrumb items={[{ label: "질환별 안내" }]} />
              <p className="mt-5 text-sm font-extrabold uppercase tracking-[0.12em] text-brand-600">
                Condition Guides
              </p>
              <h1 className="mt-3 max-w-4xl text-3xl font-extrabold leading-[1.2] tracking-[-0.01em] text-ink sm:text-4xl lg:text-5xl">
                관절·골절 질환별 안내
              </h1>
              <p className="mt-4 max-w-4xl text-base leading-7 text-muted sm:text-xl sm:leading-8">
                진단명을 몰라도 아픈 부위부터 찾을 수 있습니다. 각 질환 페이지에서 주요 증상과 검사,
                먼저 살펴보는 치료, 수술을 고려하는 경우, 회복과 주의 신호를 확인하세요.
              </p>
              <nav aria-label="아픈 부위로 질환 안내 찾기" className="mt-6 flex flex-wrap gap-2">
                {patientGuideCategoryOrder.map((category) => (
                  <a
                    key={category}
                    href={`#${categoryDetails[category].id}`}
                    className="rounded-full border border-brand-200 bg-white px-4 py-2 text-sm font-extrabold text-brand-800 transition hover:bg-brand-50"
                  >
                    {category}
                  </a>
                ))}
              </nav>
            </div>
            <div className="nsh-responsive-hero__media-column">
              <ResponsiveHeroMedia
                src="/images/joint-hero.svg"
                alt="무릎, 어깨, 발목 진료와 보행 회복을 상징하는 관절센터 의료 일러스트"
                width={720}
                height={560}
                priority
              />
            </div>
          </div>
        </section>

        <section className="px-4 py-8 sm:px-6 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-7xl">
            {patientGuideCategoryOrder.map((category, index) => {
              const guides = patientGuides.filter((guide) => guide.category === category);
              const details = categoryDetails[category];

              return (
                <div
                  key={category}
                  id={details.id}
                  className={`${index === 0 ? "" : "mt-14 border-t border-line pt-14"} scroll-mt-36`}
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-sm font-extrabold text-brand-600">아픈 부위 {String(index + 1).padStart(2, "0")}</p>
                      <h2 className="mt-2 text-2xl font-extrabold text-ink sm:text-3xl">{category}</h2>
                    </div>
                    <p className="text-sm leading-6 text-muted">{details.hint}</p>
                  </div>
                  <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {guides.map((guide) => (
                      <PatientGuideCard key={guide.id} guide={guide} />
                    ))}
                    {category === "손·손목·팔꿈치" ? (
                      <article className="flex h-full flex-col rounded-2xl border border-[#E1DEE6] bg-surface-note p-6 shadow-sm transition hover:border-interactive hover:shadow-card">
                        <div className="flex items-start justify-between gap-4">
                          <span className="rounded-full bg-brand-50 px-3 py-1.5 text-xs font-extrabold text-brand-700">
                            손·손목·팔꿈치
                          </span>
                          <BookOpenText aria-hidden="true" className="shrink-0 text-brand-600" size={24} />
                        </div>
                        <h3 className="mt-5 text-xl font-extrabold leading-8 text-ink">
                          원위 요골 골절·콜레스 골절과 금속판 고정술(ORIF)
                        </h3>
                        <p className="mt-3 flex-1 text-base leading-7 text-muted">
                          콜레스 골절의 의미, 비수술 치료와 수술 판단, 수장측 금속판 고정술과 회복 과정을
                          3D 영상과 인쇄용 팜플렛으로 안내합니다.
                        </p>
                        <div className="mt-5 rounded-xl bg-white/75 px-4 py-3">
                          <p className="text-xs font-extrabold text-brand-700">이런 증상을 확인하세요</p>
                          <p className="mt-1 text-sm leading-6 text-muted">
                            낙상 뒤 손목 통증·부종·변형 · 손가락 감각 또는 색 변화
                          </p>
                        </div>
                        <Link
                          href="/wrist/distal-radius-fracture"
                          className="mt-5 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-brand-800 px-4 py-3 text-sm font-extrabold text-white transition hover:bg-brand-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
                          aria-label="원위 요골 골절과 콜레스 골절 질환 안내 보기"
                        >
                          원위 요골 골절 안내 보기
                          <ArrowRight aria-hidden="true" size={17} />
                        </Link>
                      </article>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="bg-brand-900 px-4 py-12 text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <h2 className="text-2xl font-extrabold leading-tight sm:text-3xl">질환 안내 이용 전 확인해 주세요</h2>
            <p className="mt-4 max-w-4xl text-base leading-7 text-brand-50 sm:text-lg sm:leading-8">
              이 내용은 일반적인 환자 교육을 돕는 자료이며 개인별 진단을 대신하지 않습니다. 실제 치료 방법,
              수술 범위, 회복 기간은 증상과 진찰, 영상검사 결과, 전신 상태에 따라 달라질 수 있습니다.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
