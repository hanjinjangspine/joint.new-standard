import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { PatientGuideCard } from "@/components/PatientGuideSection";
import SEOJsonLd from "@/components/SEOJsonLd";
import {
  patientGuideCategoryOrder,
  patientGuides,
  type PatientGuideCategory
} from "@/lib/patient-guides";
import { createMetadata, webPageJsonLd } from "@/lib/seo";

const title = "관절·골절 질환별 안내";
const description =
  "무릎, 어깨, 족부·발목, 손·손목·팔꿈치와 골절 질환을 증상·검사·치료·회복 순서로 확인할 수 있습니다.";

const categoryDetails: Record<PatientGuideCategory, { id: string; hint: string }> = {
  "무릎": { id: "knee", hint: "붓기, 잠김, 불안정감, O자 정렬" },
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
        <section className="border-b border-line bg-[linear-gradient(135deg,#F8FAFB_0%,#EEF4F7_58%,#FFFFFF_100%)] px-4 py-9 sm:px-6 lg:px-8 lg:py-12">
          <div className="mx-auto max-w-7xl">
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
