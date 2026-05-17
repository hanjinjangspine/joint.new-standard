import type { Metadata } from "next";
import CenterIntroSection from "@/components/CenterIntroSection";
import CTASection from "@/components/CTASection";
import DoctorIntroSection from "@/components/DoctorIntroSection";
import FAQSection from "@/components/FAQSection";
import FootAnkleFeature from "@/components/FootAnkleFeature";
import HeroSection from "@/components/HeroSection";
import HomeAIReadableSummary from "@/components/HomeAIReadableSummary";
import SectionTitle from "@/components/SectionTitle";
import SpecialtyGrid from "@/components/SpecialtyGrid";
import TreatmentFlow from "@/components/TreatmentFlow";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "새기준병원 관절센터 | 용인 족부·발목·무릎·어깨 진료",
  description:
    "용인 처인구 새기준병원 관절센터. 족부·발목 질환을 중심으로 무릎통증, 어깨통증, 관절주사, 비수술 치료, 필요한 경우 수술 치료와 보행 회복관리를 안내합니다.",
  path: "/"
});

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <CenterIntroSection />
      <SpecialtyGrid />

      <section className="bg-calm px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionTitle
            eyebrow="Treatment Philosophy"
            title="발과 발목의 통증은 보행과 생활 기능을 함께 봅니다."
            description="같은 발목 통증이라도 환자마다 불편한 동작, 신발 착용 문제, 보행 제한, 치료 목표가 다릅니다."
          />
          <div className="rounded-lg border border-line bg-white p-6 shadow-sm sm:p-8">
            <p className="text-xl leading-9 text-muted">
              새기준병원 관절센터는 족부·발목 질환을 중심으로 환자의 이야기를 듣고,
              영상검사와 진찰 소견, 기존 치료 반응을 함께 확인하여 치료 순서를 정합니다.
              무릎과 어깨 통증도 관절의 움직임과 생활 제한을 함께 살펴 비수술 치료부터
              필요한 경우 수술 치료까지 단계적으로 설명합니다.
            </p>
          </div>
        </div>
      </section>

      <FootAnkleFeature />
      <TreatmentFlow />
      <DoctorIntroSection />
      <HomeAIReadableSummary />
      <FAQSection />

      <CTASection
        title="진료시간과 오시는 길, 예약 방법을 확인하세요."
        description="족부·발목 통증을 비롯해 무릎·어깨 관절 통증이 반복된다면 현재 상태와 치료 단계를 먼저 확인해 보세요. 내원 전 대표전화와 네이버 예약으로 진료 일정을 확인하실 수 있습니다."
      />
    </main>
  );
}
