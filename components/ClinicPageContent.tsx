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
              eyebrow="진료 원칙"
              title="비수술 치료와 수술 치료를 균형 있게 설명합니다."
              description="현재 상태에서 먼저 시도할 수 있는 치료와 치료 시기를 놓치지 않기 위해 확인해야 할 점을 함께 안내합니다."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {[
                { title: "증상과 검사를 함께 확인", body: "다친 시점, 통증 위치, 체중을 실을 수 있는지와 이전 골절·골다공증 치료 기록을 알려 주세요. 진찰과 필요한 영상검사를 함께 확인합니다." },
                { title: "치료의 목적과 범위 상담", body: "고정이나 수술이 필요한 이유, 다른 선택지, 예상되는 위험과 추가 치료 가능성을 질문하세요. 복용 약과 전신 상태도 치료 계획에 반영합니다." },
                { title: "다음 진료까지의 생활 계획", body: "보조기 사용, 체중을 싣는 범위, 허용 운동, 상처 관리와 다음 확인 일정을 알아두세요. 골절 회복 상태에 따라 계획을 조정합니다." }
              ].map((item, index) => (
                <div
                  key={item.title}
                  className={`rounded-lg border border-line p-6 ${
                    ["bg-surface-info", "bg-surface-decision", "bg-surface-recovery"][index]
                  }`}
                >
                  <h3 className="text-xl font-bold text-ink">{item.title}</h3>
                  <p className="mt-3 text-base leading-7 text-muted">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-7 text-sm leading-6 text-muted">참고: <a href="https://orthoinfo.aaos.org/en/diseases--conditions/fractures-broken-bones/" target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-700 underline underline-offset-4">AAOS 골절 환자교육 자료</a>. 일반적인 상담 준비 안내이며 고정·체중 부하·운동 범위는 담당 의료진에게 확인하세요.</p>
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
