import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import CenterIntroSection from "@/components/CenterIntroSection";
import CTASection from "@/components/CTASection";
import DoctorIntroSection from "@/components/DoctorIntroSection";
import FAQSection from "@/components/FAQSection";
import HeroSection from "@/components/HeroSection";
import PatientGuideSection from "@/components/PatientGuideSection";
import SEOJsonLd from "@/components/SEOJsonLd";
import SectionTitle from "@/components/SectionTitle";
import SpecialtyGrid from "@/components/SpecialtyGrid";
import { createMetadata, homeJsonLd } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "용인 정형외과 | 무릎·어깨 관절 진료 | 새기준병원",
  description:
    "용인 처인구 새기준병원 정형외과 관절 진료 안내입니다. 무릎·어깨·족부·발목·손목 통증의 원인과 검사, 비수술 치료, 수술 판단과 회복 과정을 설명합니다.",
  path: "/",
  keywords: ["용인 정형외과", "처인구 정형외과", "용인 관절 진료"]
});

export default function HomePage() {
  return (
    <main>
      <SEOJsonLd data={homeJsonLd()} />
      <HeroSection />
      <SpecialtyGrid />
      <CenterIntroSection />

      <PatientGuideSection
        guideIds={["11", "21", "20"]}
        compact
        title="진료실의 설명을 다시 읽는 질환 안내"
        description="무릎·어깨·족부·발목·손·손목·팔꿈치·골절의 증상, 검사, 치료 선택, 회복과 주의 신호를 확인할 수 있습니다."
        tone="white"
      />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[28px] border border-brand-100 bg-white p-6 shadow-sm sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <SectionTitle
              eyebrow="본원 환자 안내"
              title="진료 준비부터 회복까지 이어집니다"
              description="진료시간·병원 이용은 본원에서, 치료 후 운동과 재활은 회복재활센터에서 안내합니다."
            />
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { label: "본원 진료·이용 안내", href: "https://new-standard.co.kr/", description: "전체 진료과, 진료시간과 병원 이용 정보를 확인하세요." },
                { label: "회복재활센터", href: "https://rehab.new-standard.co.kr/", description: "치료 후 일상 복귀와 운동·재활 안내를 확인하세요." }
              ].map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group rounded-2xl border border-line p-5 transition hover:border-interactive ${
                    ["bg-surface-info", "bg-surface-decision", "bg-surface-recovery", "bg-surface-note"][index % 4]
                  }`}
                >
                  <strong className="block text-base font-extrabold text-ink">{item.label}</strong>
                  <span className="mt-3 block text-sm leading-7 text-muted">{item.description}</span>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-brand-700">
                    안내 보기
                    <ExternalLink aria-hidden="true" size={16} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <DoctorIntroSection />

      <FAQSection />

      <CTASection
        title="무릎·어깨 통증의 원인과 현재 치료 단계를 확인해 보세요"
        description="용인·처인구에서 관절 진료가 필요할 때 통증 위치와 움직임 제한, 진찰 소견, 필요한 검사 결과를 함께 확인해 치료 순서를 상담합니다."
      />
    </main>
  );
}
