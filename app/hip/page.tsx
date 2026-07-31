import type { Metadata } from "next";
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
      />
      <main>
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

        <PatientGuideSection
          guideIds={["26"]}
          title="고관절 질환별 판단 기준을 확인하세요"
          description="대퇴골두 무혈성 괴사의 단계, 검사, 관절 보존 치료와 인공관절 치환술을 고려하는 기준을 환자안내에서 확인할 수 있습니다."
          showAllLink
          tone="calm"
        />

        <CTASection title="고관절 통증이나 보행 불편이 지속된다면 원인과 현재 관절 상태를 먼저 확인하세요." />
      </main>
    </>
  );
}
