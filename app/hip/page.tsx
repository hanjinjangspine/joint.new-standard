import type { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import PatientGuideSection from "@/components/PatientGuideSection";
import SEOJsonLd from "@/components/SEOJsonLd";
import { clinicPages } from "@/lib/data";
import { createMetadata, webPageJsonLd } from "@/lib/seo";

const page = clinicPages.hip;

export const metadata: Metadata = createMetadata({
  title: page.seoTitle,
  description: page.seoDescription,
  path: "/hip",
  keywords: page.keywords
});

export default function HipPage() {
  return (
    <>
      <SEOJsonLd
        data={webPageJsonLd({
          title: page.seoTitle,
          description: page.seoDescription,
          path: "/hip"
        })}
      />
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
        breadcrumb={[{ label: "고관절 통증 진료" }]}
        highlights={["사타구니 통증", "보행 불편", "관절 운동범위", "영상검사", "단계별 치료 판단"]}
        image={{
          src: "/patient-guides/illustrations/femoral-head-osteonecrosis/overview.png",
          alt: "대퇴 골두의 혈액 공급 저하와 무혈성 괴사 부위를 보여주는 3D 의료 일러스트",
          width: 1586,
          height: 992
        }}
      />
      <main>
        <aside className="border-b border-red-200 bg-red-50 px-5 py-6 sm:px-6" aria-labelledby="hip-urgent-title">
          <div className="mx-auto max-w-7xl">
            <h2 id="hip-urgent-title" className="break-keep text-xl font-bold text-red-900">넘어진 뒤 심한 통증으로 걷거나 다리를 디딜 수 없다면</h2>
            <p className="mt-3 text-base leading-7 text-red-950">예약 상담을 기다리지 말고 응급실 등에서 빠르게 평가받으세요. 외상 뒤 감각이 떨어지거나 저리는 경우도 확인이 필요합니다. 갑작스러운 심한 통증, 관절의 열감·부종, 발열이나 오한이 있으면 신속히 진료를 받으세요.</p>
          </div>
        </aside>
        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-4xl rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-8">
              <p className="text-xl leading-9 text-muted">{page.body}</p>
            </div>
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {page.sections.map((section, index) => (
                <article
                  key={section.title}
                  className={`rounded-2xl border border-line p-6 shadow-sm ${
                    ["bg-surface-info", "bg-surface-decision", "bg-surface-note"][index % 3]
                  }`}
                >
                  <h2 className="text-2xl font-extrabold leading-8 text-ink">{section.title}</h2>
                  <ul className="mt-6 grid gap-3">
                    {section.items.map((item) => (
                      <li key={item} className="flex gap-3 text-base leading-8 text-muted sm:text-lg">
                        <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-brand-600" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-line px-5 py-12 sm:px-6">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
            <div>
              <h2 className="break-keep text-2xl font-extrabold leading-9 text-ink">진료에서는 무엇을 구분하나요?</h2>
              <p className="mt-4 text-base leading-8 text-muted">사타구니·엉덩이·허벅지 중 아픈 위치와 통증을 만드는 동작을 확인하고, 보행과 고관절 운동범위를 살핍니다. 여러 질환이 비슷한 불편을 만들 수 있어 증상만으로 무혈성 괴사나 관절염을 단정하지 않습니다.</p>
              <p className="mt-4 text-base leading-8 text-muted">기존 영상이 있다면 진찰 소견과 비교하고 필요한 검사를 선택합니다. 아래 무혈성 괴사 안내는 고관절 통증의 여러 원인 중 하나를 자세히 설명하는 자료입니다.</p>
            </div>
            <div className="rounded-xl border border-line bg-calm p-6">
              <h2 className="text-2xl font-extrabold leading-9 text-ink">내원 전 준비해 주세요</h2>
              <ul className="mt-4 grid list-disc gap-3 pl-5 text-base leading-7 text-muted">
                <li>시작 시기와 낙상·외상 여부, 가장 불편한 동작을 정리합니다.</li>
                <li>걸을 수 있는 정도, 수면과 신발·양말 착용의 불편을 알려 주세요.</li>
                <li>이전 영상·판독지, 치료 기록과 복용 약 목록을 가져오세요.</li>
              </ul>
              <Link href="/recovery" className="mt-5 inline-flex min-h-12 items-center font-bold text-brand-800 underline underline-offset-4">치료 후 기능과 회복을 확인하는 방법 →</Link>
            </div>
          </div>
        </section>

        <PatientGuideSection
          guideIds={["26"]}
          title="고관절 질환별 판단 기준을 확인하세요"
          description="대퇴골두 무혈성 괴사의 단계, 검사, 관절 보존 치료와 인공관절 치환술을 고려하는 기준을 환자안내에서 확인할 수 있습니다."
          showAllLink
          compact
          tone="calm"
        />

        <section className="border-t border-line px-5 py-8 sm:px-6"><div className="mx-auto max-w-7xl"><h2 className="text-lg font-bold text-ink">참고자료</h2><a className="mt-2 inline-flex min-h-11 items-center text-sm font-semibold text-brand-700 underline underline-offset-4" href="https://www.nhs.uk/symptoms/hip-pain/" target="_blank" rel="noopener noreferrer">NHS — Hip pain in adults (새 창)</a><p className="mt-2 text-sm leading-6 text-muted">일반적인 증상과 빠른 진료가 필요한 신호에 관한 자료이며 개인별 진단을 대신하지 않습니다.</p></div></section>
        <CTASection title="고관절 통증이나 보행 불편이 지속된다면 원인과 현재 관절 상태를 먼저 확인하세요." />
      </main>
    </>
  );
}
