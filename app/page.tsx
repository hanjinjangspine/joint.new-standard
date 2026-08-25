import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import CenterIntroSection from "@/components/CenterIntroSection";
import CTASection from "@/components/CTASection";
import DoctorIntroSection from "@/components/DoctorIntroSection";
import FAQSection from "@/components/FAQSection";
import FootAnkleFeature from "@/components/FootAnkleFeature";
import HeroSection from "@/components/HeroSection";
import HomeAIReadableSummary from "@/components/HomeAIReadableSummary";
import PatientGuideSection from "@/components/PatientGuideSection";
import SEOJsonLd from "@/components/SEOJsonLd";
import SectionTitle from "@/components/SectionTitle";
import ShoulderBraceVideoSection from "@/components/ShoulderBraceVideoSection";
import SpecialtyGrid from "@/components/SpecialtyGrid";
import { officialPatientLinks } from "@/lib/data";
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
        guideIds={["37", "20", "11", "21", "09", "03", "15"]}
        title="질환별 안내로 진료 내용을 다시 확인하세요"
        description="무릎·어깨·족부·발목·손·손목·팔꿈치·골절의 증상, 검사, 치료 선택, 회복과 주의 신호를 확인할 수 있습니다."
        tone="white"
      />

      <FootAnkleFeature />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[28px] border border-brand-100 bg-white p-6 shadow-sm sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <SectionTitle
              eyebrow="Official Patient Pages"
              title="본원 공식 환자용 관절 진료 안내와 함께 확인하세요"
              description="관절 질환별 설명은 이 사이트에서, 병원 전체 진료시간·의료진·이용 정보는 본원 홈페이지에서 확인할 수 있습니다."
            />
            <div className="grid gap-3 sm:grid-cols-2">
              {officialPatientLinks.map((item, index) => (
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
                    본원 페이지 보기
                    <ExternalLink aria-hidden="true" size={16} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <DoctorIntroSection />
      <ShoulderBraceVideoSection />

      <HomeAIReadableSummary />
      <FAQSection />

      <CTASection
        title="무릎·어깨 통증의 원인과 현재 치료 단계를 확인해 보세요"
        description="용인·처인구에서 관절 진료가 필요할 때 통증 위치와 움직임 제한, 진찰 소견, 필요한 검사 결과를 함께 확인해 치료 순서를 상담합니다."
      />
    </main>
  );
}
