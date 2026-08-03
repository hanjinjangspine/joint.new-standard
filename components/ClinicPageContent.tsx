import CTASection from "@/components/CTASection";
import FootAnkleFeature from "@/components/FootAnkleFeature";
import PageHero from "@/components/PageHero";
import PatientGuideSection from "@/components/PatientGuideSection";
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
        image={{
          src: "/patient-guides/illustrations/fracture-fixation/overview.png",
          alt: "골절선과 어긋난 골편의 구조를 보여주는 3D 의료 일러스트",
          width: 858,
          height: 700
        }}
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

        {page.slug === "foot-ankle" ? <FootAnkleFeature /> : null}

        <section className="bg-calm px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Care Principle"
              title="비수술 치료와 수술 치료를 균형 있게 설명합니다."
              description="현재 상태에서 먼저 시도할 수 있는 치료와 치료 시기를 놓치지 않기 위해 확인해야 할 점을 함께 안내합니다."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {["정확한 진단", "충분한 설명", "회복 과정 관리"].map((item, index) => (
                <div
                  key={item}
                  className={`rounded-lg border border-line p-6 ${
                    ["bg-surface-info", "bg-surface-decision", "bg-surface-recovery"][index]
                  }`}
                >
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

        {page.patientGuideIds ? (
          <PatientGuideSection
            guideIds={page.patientGuideIds}
            title="골절 치료 설명을 다시 확인하세요"
            description="골절의 검사와 치료 선택, 정복 및 내고정술 판단과 회복 과정을 정리한 환자안내입니다."
            tone="white"
          />
        ) : null}

        <CTASection title={page.ctaTitle} />
      </main>
    </>
  );
}
