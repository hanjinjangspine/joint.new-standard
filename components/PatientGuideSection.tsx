import Link from "next/link";
import { ArrowRight, BookOpenText } from "lucide-react";
import {
  getPatientGuides,
  patientGuideHref,
  type PatientGuide
} from "@/lib/patient-guides";

export function PatientGuideCard({ guide }: { guide: PatientGuide }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-sm transition hover:border-brand-200 hover:shadow-card">
      <div className="flex items-start justify-between gap-4">
        <span className="rounded-full bg-brand-50 px-3 py-1.5 text-xs font-extrabold text-brand-700">
          {guide.category}
        </span>
        <BookOpenText aria-hidden="true" className="shrink-0 text-brand-600" size={24} />
      </div>
      <h3 className="mt-5 text-xl font-extrabold leading-8 text-ink">{guide.title}</h3>
      <p className="mt-3 flex-1 text-base leading-7 text-muted">{guide.description}</p>
      <div className="mt-5 rounded-xl bg-calm px-4 py-3">
        <p className="text-xs font-extrabold text-brand-700">이런 증상을 확인하세요</p>
        <p className="mt-1 text-sm leading-6 text-muted">{guide.symptoms.slice(0, 2).join(" · ")}</p>
      </div>
      <Link
        href={patientGuideHref(guide)}
        className="mt-5 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-brand-800 px-4 py-3 text-sm font-extrabold text-white transition hover:bg-brand-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
        aria-label={`${guide.title} 질환 안내 보기`}
      >
        {guide.title} 안내 보기
        <ArrowRight aria-hidden="true" size={17} />
      </Link>
    </article>
  );
}

type PatientGuideSectionProps = {
  guideIds?: string[];
  title?: string;
  description?: string;
  showAllLink?: boolean;
  tone?: "white" | "calm";
};

export default function PatientGuideSection({
  guideIds,
  title = "진료실 설명을 다시 확인하는 질환별 안내",
  description = "질환의 증상부터 검사, 치료 선택, 회복과 주의 신호까지 차분히 확인할 수 있습니다.",
  showAllLink = true,
  tone = "calm"
}: PatientGuideSectionProps) {
  const guides = getPatientGuides(guideIds);

  return (
    <section className={`${tone === "calm" ? "bg-calm" : "bg-white"} px-4 py-16 sm:px-6 lg:px-8`}>
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-brand-600">
              Patient Guides
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-ink sm:text-4xl">{title}</h2>
            <p className="mt-4 text-lg leading-8 text-muted">{description}</p>
          </div>
          {showAllLink ? (
            <Link
              href="/patient-guides"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-md border border-brand-200 bg-white px-5 py-3 font-extrabold text-brand-800 transition hover:bg-brand-50"
            >
              질환별 안내 전체 보기
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
          ) : null}
        </div>

        <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {guides.map((guide) => (
            <PatientGuideCard key={guide.id} guide={guide} />
          ))}
        </div>

        <p className="mt-7 rounded-xl border border-brand-100 bg-white px-5 py-4 text-sm leading-6 text-muted">
          이 내용은 일반적인 환자 교육용 안내입니다. 실제 진단과 치료 방법, 수술 범위와 회복 과정은
          환자의 상태와 검사 결과에 따라 달라질 수 있으므로 진료 시 의료진과 상의해 주세요.
        </p>
      </div>
    </section>
  );
}
