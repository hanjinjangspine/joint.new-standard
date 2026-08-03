import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Hand, ShieldCheck } from "lucide-react";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import PatientGuideSection from "@/components/PatientGuideSection";
import SEOJsonLd from "@/components/SEOJsonLd";
import { createMetadata, webPageJsonLd } from "@/lib/seo";

const title = "손·손목·팔꿈치 통증";
const description =
  "손 저림, 손목 통증, 팔꿈치 바깥쪽 통증과 골절 이후 불편을 증상과 진찰 소견, 필요한 검사 결과를 종합해 살펴봅니다.";

export const metadata: Metadata = createMetadata({
  title: `${title} | 새기준병원 관절센터`,
  description,
  path: "/hand-wrist-elbow",
  keywords: ["용인 손 저림", "수근관 증후군", "테니스 엘보", "손목 골절"]
});

const symptomCards = [
  {
    title: "밤에 손이 저리거나 물건을 자주 떨어뜨려요",
    body: "엄지·검지·중지 쪽 저림과 엄지 힘 저하는 수근관 증후군에서 나타날 수 있습니다.",
    href: "/patient-guides/carpal-tunnel-syndrome",
    link: "수근관 증후군 안내 보기"
  },
  {
    title: "물건을 들 때 팔꿈치 바깥쪽이 아파요",
    body: "손목과 손을 반복해 쓸 때 심해지는 팔꿈치 통증은 힘줄 상태와 사용 동작을 함께 확인합니다.",
    href: "/patient-guides/tennis-elbow",
    link: "테니스 엘보 안내 보기"
  },
  {
    title: "넘어진 뒤 손목이 붓고 아파요",
    body: "골절 여부와 뼈의 어긋남, 피부·신경 상태를 확인하고 고정 또는 수술이 필요한지 판단합니다.",
    href: "/wrist/distal-radius-fracture",
    link: "손목 골절 안내 보기"
  }
];

export default function HandWristElbowPage() {
  return (
    <>
      <SEOJsonLd
        data={webPageJsonLd({
          title: `${title} | 새기준병원 관절센터`,
          description,
          path: "/hand-wrist-elbow"
        })}
      />
      <PageHero
        eyebrow="Hand · Wrist · Elbow"
        title={title}
        description={description}
        breadcrumb={[{ label: title }]}
        highlights={["손 저림", "손목 통증", "팔꿈치 통증", "수근관 증후군", "테니스 엘보", "손목 골절"]}
        image={{
          src: "/patient-guides/illustrations/carpal-tunnel-syndrome/overview.png",
          alt: "손목 수근관에서 정중신경이 눌리는 구조를 보여주는 3D 의료 일러스트",
          width: 858,
          height: 700
        }}
      />
      <main>
        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-brand-600">Find by symptom</p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
                가장 불편한 증상부터 확인하세요
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted">
                같은 손 저림이나 통증도 신경, 힘줄, 관절, 뼈 문제에 따라 원인과 치료 순서가 달라질 수 있습니다.
              </p>
            </div>
            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {symptomCards.map((card) => (
                <article key={card.href} className="border-t-4 border-brand-600 bg-calm p-6">
                  <Hand aria-hidden="true" className="text-brand-700" size={28} />
                  <h3 className="mt-4 text-xl font-extrabold leading-8 text-ink">{card.title}</h3>
                  <p className="mt-3 text-base leading-7 text-muted">{card.body}</p>
                  <Link
                    href={card.href}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-brand-800"
                  >
                    {card.link}
                    <ArrowRight aria-hidden="true" size={17} />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <PatientGuideSection
          guideIds={["03", "09", "25"]}
          title="손·손목·팔꿈치 질환별 안내"
          description="증상과 검사, 먼저 살펴보는 치료, 수술을 고려하는 경우와 회복 과정을 확인할 수 있습니다."
          showAllLink
          tone="calm"
        />

        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 border-y border-line py-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex gap-4">
              <ShieldCheck aria-hidden="true" className="mt-1 shrink-0 text-brand-700" size={30} />
              <div>
                <h2 className="text-2xl font-extrabold text-ink">다친 뒤 변형이나 심한 붓기가 있다면</h2>
                <p className="mt-2 max-w-3xl text-base leading-7 text-muted">
                  손가락 감각이 떨어지거나 손이 차갑게 느껴지는 경우에는 홈페이지 안내만으로 판단하지 말고 빠르게 진료를 받으세요.
                </p>
              </div>
            </div>
            <Link
              href="/wrist/distal-radius-fracture"
              className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-md border border-brand-200 px-5 py-3 font-extrabold text-brand-800"
            >
              손목 골절 자세히 보기
            </Link>
          </div>
        </section>

        <CTASection
          title="손 저림이나 팔꿈치·손목 통증이 계속된다면 원인을 확인해 보세요"
          description="증상이 시작된 시기와 불편한 동작, 이전 검사와 치료 반응을 함께 확인하면 진료에 도움이 됩니다."
        />
      </main>
    </>
  );
}
