import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import { PatientGuideCard } from "@/components/PatientGuideSection";
import SEOJsonLd from "@/components/SEOJsonLd";
import {
  patientGuideCategoryOrder,
  patientGuides
} from "@/lib/patient-guides";
import { createMetadata, webPageJsonLd } from "@/lib/seo";

const title = "관절·골절 환자안내 자료";
const description =
  "새기준병원 관절센터의 무릎, 어깨, 족부·발목, 손·팔꿈치, 골절 환자안내 PDF를 질환별로 확인할 수 있습니다.";

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
        <section className="border-b border-line bg-[linear-gradient(135deg,#F8FAFB_0%,#EEF4F7_58%,#FFFFFF_100%)] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-7xl">
            <Breadcrumb items={[{ label: "환자안내" }]} />
            <p className="mt-7 text-sm font-extrabold uppercase tracking-[0.12em] text-brand-600">
              Patient Education Library
            </p>
            <h1 className="mt-3 max-w-4xl text-3xl font-extrabold leading-[1.2] tracking-[-0.01em] text-ink sm:text-4xl lg:text-5xl">
              관절·골절 환자안내 자료
            </h1>
            <p className="mt-5 max-w-4xl text-lg leading-8 text-muted sm:text-xl">
              진료실에서 들은 질환과 치료 설명을 다시 확인할 수 있도록 김동희 원장의 환자안내
              정본 14종을 진료 부위별로 정리했습니다. 제목과 설명은 검색 가능한 HTML로 제공하고,
              검수된 2면 PDF 원본은 보기·저장용으로 연결합니다.
            </p>
          </div>
        </section>

        {patientGuideCategoryOrder.map((category, index) => {
          const guides = patientGuides.filter((guide) => guide.category === category);

          return (
            <section
              key={category}
              className={`${index % 2 === 0 ? "bg-white" : "bg-calm"} px-4 py-16 sm:px-6 lg:px-8`}
            >
              <div className="mx-auto max-w-7xl">
                <div className="max-w-3xl">
                  <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-brand-600">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-3 text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
                    {category} 환자안내
                  </h2>
                </div>
                <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {guides.map((guide) => (
                    <PatientGuideCard key={guide.id} guide={guide} />
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        <section className="bg-brand-900 px-4 py-12 text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8">
            <h2 className="text-2xl font-extrabold leading-tight sm:text-3xl">자료 이용 전 확인해 주세요</h2>
            <p className="mt-4 max-w-4xl text-base leading-7 text-brand-50 sm:text-lg sm:leading-8">
              환자안내는 일반적인 교육을 돕는 자료이며 개인별 진단을 대신하지 않습니다. 실제 치료 방법,
              수술 범위, 회복 기간은 증상과 진찰, 영상검사 결과, 전신 상태에 따라 달라질 수 있습니다.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
