import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  ClipboardCheck,
  ExternalLink,
  MapPin,
  Stethoscope,
  Syringe
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import { createMetadata } from "@/lib/seo";

const heroActions = [
  {
    label: "진료 상담 문의",
    href: "https://new-standard.co.kr/bbs/board.php?bo_table=counsel",
    external: true
  },
  {
    label: "오시는 길·진료시간",
    href: "https://new-standard.co.kr/sub/r10/s1040.php",
    external: true
  },
  {
    label: "관절센터 메인",
    href: "/",
    external: false
  }
];

const candidateCards = [
  {
    title: "통증은 있지만 구조적 손상이 심하지 않은 경우",
    body: "진찰과 영상검사에서 손상 정도가 비교적 경미하면 비수술 치료 반응을 먼저 확인할 수 있습니다."
  },
  {
    title: "관절 운동 제한이 비교적 경미한 경우",
    body: "움직임 제한이 크지 않다면 통증 조절과 재활치료를 함께 고려할 수 있습니다."
  },
  {
    title: "초기 관절염 또는 염증성 통증이 의심되는 경우",
    body: "관절염 초기 변화나 염증성 통증은 환자 상태에 따라 약물치료와 주사치료 등을 상담합니다."
  },
  {
    title: "수술 전 보존치료 반응을 확인해야 하는 경우",
    body: "수술 여부를 바로 정하기보다 기존 치료 반응과 증상 변화를 함께 살펴볼 수 있습니다."
  },
  {
    title: "수술 후 회복 과정에서 통증 조절이 필요한 경우",
    body: "회복 과정에서는 통증 조절, 운동범위, 근력 회복을 함께 확인하는 것이 중요합니다."
  },
  {
    title: "고령 또는 전신 상태 때문에 치료 단계를 신중히 봐야 하는 경우",
    body: "나이만으로 판단하지 않고 전신 상태, 보행, 일상생활 제한 정도를 함께 확인합니다."
  }
];

const assessmentItems = [
  "통증 위치",
  "관절 운동범위",
  "근력과 보행",
  "X-ray·MRI 등 영상검사",
  "기존 치료 반응",
  "일상생활 제한 정도"
];

const treatmentItems = [
  "약물치료",
  "주사치료",
  "체외충격파",
  "재활치료",
  "보조기 또는 생활습관 조정",
  "운동치료"
];

const diagnosisCards = [
  {
    title: "통증 원인 확인",
    body: "통증이 관절 내부, 힘줄, 인대, 주변 근육 중 어디에서 시작되는지 진찰과 검사로 확인합니다.",
    icon: Stethoscope
  },
  {
    title: "염증과 손상 정도 확인",
    body: "염증 정도와 구조적 손상 여부에 따라 주사치료와 재활치료의 방향이 달라질 수 있습니다.",
    icon: Syringe
  },
  {
    title: "기능 제한 확인",
    body: "관절 운동범위, 근력, 보행, 일상생활 제한 정도를 함께 확인합니다.",
    icon: Activity
  },
  {
    title: "영상검사와 기존 치료 반응 확인",
    body: "X-ray·MRI 등 영상검사와 기존 약물·주사·재활치료 반응을 함께 평가합니다.",
    icon: ClipboardCheck
  }
];

const surgeryLinks = [
  { label: "최소침습 관절수술 판단", href: "/minimally-invasive-surgery" },
  { label: "회복관리", href: "/recovery" },
  { label: "무릎 통증 진료", href: "/knee" },
  { label: "어깨 통증 진료", href: "/shoulder" },
  { label: "족부·발목 통증 진료", href: "/foot-ankle" }
];

export const metadata: Metadata = createMetadata({
  title: "관절 비수술 치료 | 새기준병원 관절센터",
  description:
    "새기준병원 관절센터는 무릎·어깨·발목·손목 통증에서 약물치료, 주사치료, 체외충격파, 재활치료 등 비수술 치료 가능성을 진찰과 영상검사를 함께 확인해 상담합니다.",
  path: "/injection-pain",
  keywords: ["용인 관절 비수술 치료", "관절 주사치료", "체외충격파", "재활치료", "무릎 어깨 발목 손목 통증"]
});

export default function InjectionPainPage() {
  return (
    <>
      <section className="border-b border-line bg-[linear-gradient(135deg,#F8FAFB_0%,#EEF4F7_58%,#FFFFFF_100%)] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_360px] lg:items-center">
          <div>
            <Breadcrumb items={[{ label: "관절 비수술 치료" }]} />
            <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.12em] text-brand-600">
              Non-surgical Joint Care
            </p>
            <h1 className="mt-3 max-w-4xl text-3xl font-extrabold leading-[1.2] tracking-[-0.01em] text-ink sm:text-4xl lg:text-5xl">
              관절 비수술 치료
            </h1>
            <p className="mt-5 max-w-3xl text-xl font-extrabold leading-8 text-brand-800 sm:text-2xl">
              수술 전, 통증의 원인과 치료 단계를 먼저 확인합니다
            </p>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-muted sm:text-xl">
              관절 통증은 원인과 손상 정도에 따라 치료 방향이 달라질 수 있습니다.
              새기준병원 관절센터는 진찰과 영상검사를 함께 확인해 약물치료, 주사치료,
              체외충격파, 재활치료 등 비수술 치료 가능성을 상담합니다.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {heroActions.map((action, index) => (
                <Link
                  key={action.href}
                  href={action.href}
                  target={action.external ? "_blank" : undefined}
                  rel={action.external ? "noopener noreferrer" : undefined}
                  className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 py-3 text-base font-extrabold transition focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 ${
                    index === 0
                      ? "bg-brand-800 text-white hover:bg-brand-900"
                      : "border border-brand-200 bg-white text-brand-800 hover:bg-brand-50"
                  }`}
                >
                  {action.label}
                  {action.external ? <ExternalLink aria-hidden="true" size={18} /> : <ArrowRight aria-hidden="true" size={18} />}
                </Link>
              ))}
            </div>
          </div>
          <aside className="rounded-2xl border border-brand-100 bg-white p-6 shadow-card">
            <p className="text-sm font-extrabold text-brand-600">진료 핵심</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["약물치료", "주사치료", "체외충격파", "재활치료", "운동치료", "치료 단계"].map((item) => (
                <span
                  key={item}
                  className="whitespace-nowrap rounded-full border border-brand-100 bg-brand-50 px-3 py-2 text-sm font-bold text-brand-800"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-5 text-base leading-7 text-muted">
              치료 종류와 횟수는 환자 상태, 검사 결과, 기존 치료 반응에 따라 달라질 수 있습니다.
            </p>
          </aside>
        </div>
      </section>

      <main>
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-bold uppercase text-brand-600">Candidates</p>
              <h2 className="text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
                이런 경우 비수술 치료를 고려할 수 있습니다
              </h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {candidateCards.map((item) => (
                <article key={item.title} className="rounded-2xl border border-line bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-extrabold leading-8 text-ink">{item.title}</h3>
                  <p className="mt-4 text-base leading-7 text-muted">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-calm px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <p className="mb-3 text-sm font-bold uppercase text-brand-600">Assessment</p>
                <h2 className="text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
                  관절 비수술 치료에서 함께 확인하는 것
                </h2>
                <p className="mt-4 text-lg leading-8 text-muted">
                  통증을 줄이는 방법만 고르기보다 원인과 손상 정도, 일상생활 제한을 함께 확인해야 치료 단계를 상담할 수 있습니다.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {assessmentItems.map((item) => (
                  <div key={item} className="rounded-2xl border border-line bg-white p-5 font-bold text-ink shadow-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <p className="mb-3 text-sm font-bold uppercase text-brand-600">Treatment Options</p>
                <h2 className="text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
                  대표적인 비수술 치료
                </h2>
                <p className="mt-4 text-lg leading-8 text-muted">
                  비수술 치료의 종류와 횟수는 환자 상태와 검사 결과에 따라 달라질 수 있습니다.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {treatmentItems.map((item) => (
                  <div key={item} className="rounded-2xl border border-line bg-calm p-5 font-bold text-ink shadow-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-calm px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <p className="mb-3 text-sm font-bold uppercase text-brand-600">Injection Care</p>
              <h2 className="text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
                주사치료는 통증 원인 확인 후 시행합니다
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted">
                주사치료는 통증을 줄이는 데 도움이 될 수 있지만 모든 관절 통증에 동일하게 적용되는
                치료는 아닙니다. 통증 위치, 염증 정도, 관절 손상 정도, 기존 치료 반응을 함께 확인해
                치료 방향을 상담합니다.
              </p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {diagnosisCards.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="rounded-2xl border border-line bg-white p-6 shadow-sm">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                      <Icon aria-hidden="true" size={22} />
                    </div>
                    <h3 className="mt-4 text-xl font-extrabold text-ink">{item.title}</h3>
                    <p className="mt-3 text-base leading-7 text-muted">{item.body}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 rounded-[28px] border border-brand-100 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-bold uppercase text-brand-600">Surgical Decision</p>
              <h2 className="text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
                수술적 치료가 필요한 경우도 구분해야 합니다
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted">
                비수술 치료에도 통증과 기능 제한이 지속되거나, 구조적 손상·불안정성·관절 변형이
                뚜렷한 경우에는 수술적 치료 가능성을 상담할 수 있습니다.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {surgeryLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex min-h-16 items-center justify-between rounded-2xl border border-line bg-calm p-5 font-extrabold text-ink transition hover:border-brand-200 hover:bg-brand-50"
                >
                  {item.label}
                  <ArrowRight aria-hidden="true" size={18} className="text-brand-700 transition group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-calm px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="rounded-[28px] border border-line bg-white p-6 shadow-sm sm:p-8">
              <p className="mb-3 text-sm font-bold uppercase text-brand-600">Orthopedic Doctor</p>
              <h2 className="text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
                정형외과 전문의 김동희 원장
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted">
                김동희 원장은 족부·발목, 무릎, 어깨, 손·손목 질환을 진료하며, 환자의 증상과
                영상검사 결과를 함께 확인해 비수술 치료와 수술적 치료 방향을 상담합니다.
              </p>
              <Link
                href="/doctor"
                className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-brand-800 px-5 py-3 font-extrabold text-white transition hover:bg-brand-900"
              >
                의료진 소개
                <ArrowRight aria-hidden="true" size={18} />
              </Link>
            </div>
            <div className="rounded-[28px] border border-line bg-white p-6 shadow-sm sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                <MapPin aria-hidden="true" size={24} />
              </div>
              <h2 className="mt-5 text-3xl font-extrabold leading-tight text-ink">
                용인·처인구 인근 관절 비수술 치료 안내
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted">
                새기준병원 관절센터는 경기도 용인시 처인구에 위치해 있으며, 용인·처인구를 비롯해
                수원, 오산, 이천, 안성, 경기 광주 등 인근 지역에서 무릎·어깨·발목·손목 통증으로
                내원하는 환자의 진료 상담을 받을 수 있습니다. 새기준병원이 해당 지역에 위치한 것은
                아니며, 환자 상태와 검사 결과에 따라 치료 방향을 상담합니다.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[linear-gradient(135deg,#123247_0%,#1D4258_58%,#2E5870_100%)] px-4 py-16 text-white sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-[28px] border border-white/10 bg-white/5 p-6 lg:flex-row lg:items-center lg:justify-between lg:p-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
                관절 통증은 원인 확인 후 치료 단계를 상담합니다
              </h2>
              <p className="mt-5 text-lg leading-8 text-brand-50">
                통증 위치, 관절 상태, 영상검사 결과, 기존 치료 반응을 함께 확인해 환자 상태에 맞는
                비수술 치료와 수술적 치료 가능성을 상담합니다.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              {heroActions.map((action, index) => (
                <Link
                  key={`cta-${action.href}`}
                  href={action.href}
                  target={action.external ? "_blank" : undefined}
                  rel={action.external ? "noopener noreferrer" : undefined}
                  className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 py-3 text-base font-extrabold transition focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-brand-900 ${
                    index === 0
                      ? "bg-white text-brand-800 hover:bg-brand-50"
                      : "border border-white/55 bg-white/8 text-white hover:bg-white/14"
                  }`}
                >
                  {action.label}
                  {action.external ? <ExternalLink aria-hidden="true" size={18} /> : <ArrowRight aria-hidden="true" size={18} />}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
