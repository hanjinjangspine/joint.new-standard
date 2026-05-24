import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink, MapPin } from "lucide-react";
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

const officialLinks = [
  {
    label: "새기준병원 본원",
    href: "https://new-standard.co.kr"
  },
  {
    label: "의료진 소개",
    href: "https://new-standard.co.kr/sub/r10/s1020.php"
  },
  {
    label: "오시는 길·진료시간",
    href: "https://new-standard.co.kr/sub/r10/s1040.php"
  },
  {
    label: "온라인 상담",
    href: "https://new-standard.co.kr/bbs/board.php?bo_table=counsel"
  }
];

export const metadata: Metadata = createMetadata({
  title: "새기준병원 관절센터 | 족부·발목·무릎·어깨 통증 진료",
  description:
    "새기준병원 관절센터는 족부·발목, 무릎, 어깨, 손·손목 통증을 진찰과 영상검사를 함께 확인해 비수술 치료와 수술적 치료 방향을 상담합니다. 용인시 처인구에 위치한 정형외과 관절 진료 안내입니다.",
  path: "/",
  keywords: ["용인 관절센터", "용인 족부발목", "용인 무릎통증", "용인 어깨통증", "용인 손목통증"]
});

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <CenterIntroSection />
      <SpecialtyGrid />
      <TreatmentFlow />

      <section className="bg-calm px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <SectionTitle
            eyebrow="Foot & Ankle Focus"
            title="족부·발목 통증은 보행과 균형까지 함께 봐야 합니다"
            description="발과 발목 통증은 한 부위의 문제만이 아니라 보행, 하지정렬, 무릎·고관절 부담과도 관련될 수 있습니다. 새기준병원 관절센터는 족부·발목 질환을 중심으로 무릎, 어깨, 손목 등 관절 통증을 함께 평가합니다."
          />
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { label: "족부·발목 진료", href: "/foot-ankle" },
              { label: "최소침습 족부·발목 수술", href: "/foot-ankle-mis" },
              { label: "회복관리", href: "/recovery" }
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-2xl border border-line bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-card"
              >
                <span className="text-lg font-extrabold text-ink">{item.label}</span>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-brand-700">
                  자세히 보기
                  <ArrowRight aria-hidden="true" size={17} className="transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FootAnkleFeature />
      <DoctorIntroSection />

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[28px] border border-brand-100 bg-white p-6 shadow-sm sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <SectionTitle
              eyebrow="Local Guide"
              title="용인·처인구 인근 관절 통증 진료 안내"
              description="새기준병원 관절센터는 경기도 용인시 처인구에 위치해 있으며, 용인·처인구를 비롯해 수원, 오산, 이천, 안성, 경기 광주 등 인근 지역에서 무릎·어깨·발목·손목 통증으로 내원하는 환자의 진료 상담을 받을 수 있습니다. 새기준병원이 해당 지역에 위치한 것은 아니며, 환자 상태와 검사 결과에 따라 치료 방향을 상담합니다."
            />
            <div className="rounded-2xl bg-calm p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-brand-700">
                <MapPin aria-hidden="true" size={24} />
              </div>
              <p className="mt-5 text-lg font-extrabold text-ink">주소</p>
              <p className="mt-2 text-base leading-7 text-muted">경기도 용인시 처인구 중부대로 1539</p>
              <p className="mt-5 text-lg font-extrabold text-ink">진료 상담 전 확인</p>
              <p className="mt-2 text-base leading-7 text-muted">
                기존 X-ray, MRI 등 영상자료가 있다면 진료 상담에 도움이 됩니다. 진료 일정은 병원 상황에 따라 달라질 수 있으므로 방문 전 대표전화로 확인해 주세요.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-900 px-4 py-16 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-brand-100">
                Official Hospital Links
              </p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
                새기준병원 본원과 함께 보는 관절 진료
              </h2>
              <p className="mt-5 text-lg leading-8 text-brand-50">
                관절센터 진료는 새기준병원 본원 진료 안내, 영상검사, 재활치료, 입퇴원 안내와 함께 확인할 수 있습니다.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {officialLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-20 items-center justify-between rounded-2xl border border-white/12 bg-white/8 p-5 text-base font-extrabold text-white transition hover:bg-white/14"
                >
                  {item.label}
                  <ExternalLink aria-hidden="true" size={18} className="transition group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <HomeAIReadableSummary />
      <FAQSection />

      <CTASection
        title="관절 통증이 지속된다면 현재 상태와 치료 단계를 먼저 확인해 보세요"
        description="족부·발목, 무릎, 어깨, 손·손목 통증은 원인이 다양합니다. 진찰과 영상검사 결과를 함께 확인해 환자 상태에 맞는 치료 방향을 상담합니다."
      />
    </main>
  );
}
