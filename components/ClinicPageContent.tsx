import CTASection from "@/components/CTASection";
import FootAnkleFeature from "@/components/FootAnkleFeature";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import type { ClinicPage } from "@/lib/data";

type ClinicPageContentProps = {
  page: ClinicPage;
};

export default function ClinicPageContent({ page }: ClinicPageContentProps) {
  return (
    <>
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        description={page.description}
        breadcrumb={[{ label: page.title }]}
        highlights={page.sections.flatMap((section) => section.items).slice(0, 6)}
      />
      <main>
        <section className="px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-4xl rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-8">
              <p className="text-xl leading-9 text-muted">{page.body}</p>
            </div>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {page.sections.map((section) => (
                <article key={section.title} className="rounded-2xl border border-line bg-calm p-6 shadow-sm">
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

        {page.slug === "foot-ankle" ? <FootAnkleFeature /> : null}

        <section className="bg-calm px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Care Principle"
              title="비수술 치료와 수술 치료를 균형 있게 설명합니다."
              description="현재 상태에서 먼저 시도할 수 있는 치료와 치료 시기를 놓치지 않기 위해 확인해야 할 점을 함께 안내합니다."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {["정확한 진단", "충분한 설명", "회복 과정 관리"].map((item) => (
                <div key={item} className="rounded-lg border border-line bg-white p-6">
                  <h3 className="text-xl font-bold text-ink">{item}</h3>
                  <p className="mt-3 text-base leading-7 text-muted">
                    환자 상태에 맞는 치료 계획을 세우고, 검사 결과와 치료 반응을
                    함께 확인합니다.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection title={page.ctaTitle} />
      </main>
    </>
  );
}
