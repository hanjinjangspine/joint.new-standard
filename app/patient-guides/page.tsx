import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import GuideDirectory from "@/components/GuideDirectory";
import ResponsiveHeroMedia from "@/components/ResponsiveHeroMedia";
import SEOJsonLd from "@/components/SEOJsonLd";
import {
  patientGuideCategoryOrder,
  patientGuides,
  patientGuideHref,
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
                질환별 안내
              </p>
              <h1 className="mt-3 max-w-4xl text-3xl font-extrabold leading-[1.2] tracking-[-0.01em] text-ink sm:text-4xl lg:text-5xl">
                관절·골절 질환별 안내
              </h1>
              <p className="mt-4 max-w-4xl text-base leading-7 text-muted sm:text-xl sm:leading-8">
                진단명을 몰라도 아픈 부위부터 찾을 수 있습니다. 각 질환 페이지에서 주요 증상과 검사,
                먼저 살펴보는 치료, 수술을 고려하는 경우, 회복과 주의 신호를 확인하세요.
              </p>
              <p className="mt-6 text-sm font-bold text-brand-700">아래에서 아픈 부위를 누르면 질환 목록이 펼쳐집니다.</p>
            </div>
            <div className="nsh-responsive-hero__media-column">
              <ResponsiveHeroMedia
                src="/images/content-images-v5/rehab.webp"
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
            <GuideDirectory categories={patientGuideCategoryOrder.map((category) => ({
              label: category,
              ...categoryDetails[category],
              links: [
                ...patientGuides.filter((guide) => guide.category === category).map((guide) => ({ title: guide.title, description: guide.description, href: patientGuideHref(guide) })),
                ...(category === "손·손목·팔꿈치" ? [{ title: "원위 요골 골절·콜레스 골절", description: "손목 골절의 검사와 치료 판단, 금속판 고정술과 회복 안내", href: "/wrist/distal-radius-fracture" }] : [])
              ]
            }))} />
            <div className="mt-8 rounded-2xl bg-brand-50 p-6">
              <h2 className="text-xl font-bold text-ink">치료 순서와 회복이 궁금하신가요?</h2>
              <nav aria-label="치료와 회복 안내" className="mt-3 flex flex-wrap gap-3">
                {[["비수술 치료", "/injection-pain"], ["관절수술 판단", "/minimally-invasive-surgery"], ["관절 회복관리", "/recovery"]].map(([label, href]) => <Link key={href} href={href} className="inline-flex min-h-12 items-center gap-2 rounded-lg border border-brand-200 bg-white px-4 py-3 font-bold text-brand-800">{label}<ArrowRight size={16} aria-hidden="true" /></Link>)}
              </nav>
            </div>
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
