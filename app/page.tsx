import type { Metadata } from "next";
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
  title: "새기준병원 관절센터 | 용인 무릎·어깨·족부·발목 치료",
  description:
    "용인 처인구 새기준병원 관절센터. 무릎통증, 어깨통증, 족부·발목 질환, 무지외반증, 발목불안정증, 관절주사, 통증시술, 최소침습수술, 수술 후 회복관리 안내.",
  path: "/"
});

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <SpecialtyGrid />
      <DoctorIntroSection />

      <section className="bg-calm px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <SectionTitle
            eyebrow="Treatment Philosophy"
            title="증상만 보지 않고, 환자의 생활과 보행을 함께 봅니다."
            description="같은 무릎 통증, 같은 어깨 통증, 같은 발목 통증이라도 환자마다 불편한 동작, 생활 제한, 치료 목표가 다릅니다."
          />
          <div className="rounded-lg border border-line bg-white p-6 shadow-sm sm:p-8">
            <p className="text-xl leading-9 text-muted">
              새기준병원 관절센터는 환자의 이야기를 듣고, 영상검사와 진찰 소견,
              기존 치료 반응을 함께 확인하여 치료 순서를 정합니다. 특히 족부·발목
              질환은 보행과 일상생활에 직접 영향을 주기 때문에, 통증의 원인뿐 아니라
              걷는 기능과 회복 과정까지 함께 고려합니다.
            </p>
          </div>
        </div>
      </section>

      <TreatmentFlow />
      <FootAnkleFeature />
      <HomeAIReadableSummary />
      <FAQSection />

      <CTASection
        title="무릎·어깨·발목 통증, 오래 참지 말고 상담하세요."
        description="수술이 필요한지보다 먼저 확인해야 할 것은 정확한 원인과 현재 치료 단계입니다. 새기준병원 관절센터에서 현재 상태에 맞는 치료 순서를 안내받으세요."
      />
    </main>
  );
}
