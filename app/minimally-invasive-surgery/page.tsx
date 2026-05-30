import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  ClipboardCheck,
  ExternalLink,
  MapPin,
  ScanLine,
  Stethoscope
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

const surgeryCandidateCards = [
  {
    title: "비수술 치료에도 통증과 기능 제한이 지속되는 경우",
    body: "약물치료, 주사치료, 재활치료 후에도 일상생활 제한이 지속되면 다음 치료 단계를 상담할 수 있습니다."
  },
  {
    title: "관절내 구조적 손상이 의심되는 경우",
    body: "관절 안쪽 구조물의 손상 여부를 진찰과 영상검사로 함께 확인합니다."
  },
  {
    title: "인대·힘줄·연골 손상이 확인되는 경우",
    body: "손상 위치와 범위, 기능 제한 정도를 확인해 수술적 치료 가능성을 상담합니다."
  },
  {
    title: "반복적인 불안정성이나 잠김 증상이 있는 경우",
    body: "관절이 빠질 듯하거나 걸리는 느낌이 반복되면 인대와 관절 내부 구조를 평가합니다."
  },
  {
    title: "관절 변형이나 관절염이 진행된 경우",
    body: "관절 간격, 정렬, 변형 정도와 통증 양상을 함께 확인해 치료 범위를 상담합니다."
  },
  {
    title: "일상생활과 보행 제한이 지속되는 경우",
    body: "걷기, 계단, 물건 들기, 신발 착용 등 생활 제한 정도를 함께 평가합니다."
  }
];

const assessmentCards = [
  {
    title: "통증 위치",
    body: "통증이 어느 관절과 구조물에서 시작되는지 진찰로 확인합니다.",
    icon: Stethoscope
  },
  {
    title: "관절 운동범위",
    body: "관절을 굽히고 펴는 범위, 걸림감, 움직임 제한을 함께 평가합니다.",
    icon: Activity
  },
  {
    title: "인대·힘줄·연골 손상 정도",
    body: "손상 범위와 기능 제한 정도에 따라 치료 방향이 달라질 수 있습니다.",
    icon: ScanLine
  },
  {
    title: "X-ray·MRI 등 영상검사",
    body: "영상 소견과 실제 증상이 일치하는지 확인해 치료 범위를 상담합니다.",
    icon: ClipboardCheck
  }
];

const surgeryItems = [
  "관절내시경",
  "회전근개 봉합",
  "십자인대 재건",
  "반월상연골판 수술",
  "발목 인대 봉합 또는 재건",
  "아킬레스건 봉합",
  "무지외반 교정",
  "인공관절 수술"
];

const treatmentStepCards = [
  {
    title: "비수술 치료를 고려할 수 있는 경우",
    body: "손상이 비교적 경미하거나 기능 제한이 크지 않은 경우에는 약물치료, 주사치료, 재활치료 등을 먼저 고려할 수 있습니다."
  },
  {
    title: "수술적 치료 상담이 필요한 경우",
    body: "구조적 손상, 불안정성, 변형, 보행 제한이 지속되는 경우에는 수술적 치료 가능성을 상담할 수 있습니다."
  },
  {
    title: "수술 후 회복관리와 재활",
    body: "수술 여부와 관계없이 통증 조절, 관절 운동범위, 근력, 보행 회복 계획을 함께 확인합니다."
  }
];

const bodyPartLinks = [
  { label: "족부·발목 통증 진료", href: "/foot-ankle" },
  { label: "최소침습 족부·발목 수술", href: "/foot-ankle-mis" },
  { label: "무릎 통증 진료", href: "/knee" },
  { label: "어깨 통증 진료", href: "/shoulder" },
  { label: "관절 비수술 치료", href: "/injection-pain" },
  { label: "회복관리", href: "/recovery" }
];

export const metadata: Metadata = createMetadata({
  title: "최소침습 관절수술 판단 | 새기준병원 관절센터",
  description:
    "새기준병원 관절센터는 무릎·어깨·발목·손목 질환에서 수술 여부와 치료 방법을 진찰 소견과 영상검사 결과를 함께 확인해 상담합니다.",
  path: "/minimally-invasive-surgery",
  keywords: ["용인 관절 치료 판단", "최소침습 관절수술 판단", "관절내시경", "인공관절", "회전근개 봉합"]
});

export default function MinimallyInvasiveSurgeryPage() {
  return (
    <>
      <section className="border-b border-line bg-[linear-gradient(135deg,#F8FAFB_0%,#EEF4F7_58%,#FFFFFF_100%)] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_360px] lg:items-center">
          <div>
            <Breadcrumb items={[{ label: "최소침습 관절수술" }]} />
            <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.12em] text-brand-600">
              Minimally Invasive Joint Surgery
            </p>
            <h1 className="mt-3 max-w-4xl text-3xl font-extrabold leading-[1.2] tracking-[-0.01em] text-ink sm:text-4xl lg:text-5xl">
              최소침습 관절수술
            </h1>
            <p className="mt-5 max-w-3xl text-xl font-extrabold leading-8 text-brand-800 sm:text-2xl">
              수술이 필요한 경우에도 관절 상태와 회복 계획을 함께 확인합니다
            </p>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-muted sm:text-xl">
              관절 통증은 원인과 손상 정도에 따라 비수술 치료부터 수술적 치료까지 치료 방향이
              달라질 수 있습니다. 새기준병원 관절센터는 진찰과 영상검사를 함께 확인해 관절내시경,
              최소침습 수술, 인공관절 등 수술적 치료 가능성을 환자 상태에 따라 상담합니다.
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
              {["수술 여부 판단", "수술 범위", "관절내시경", "인공관절", "회복관리", "재활 계획"].map((item) => (
                <span
                  key={item}
                  className="whitespace-nowrap rounded-full border border-brand-100 bg-brand-50 px-3 py-2 text-sm font-bold text-brand-800"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-5 text-base leading-7 text-muted">
              실제 수술 방법과 범위는 진료와 검사 결과를 종합해 상담합니다. 모든 환자에게 같은 치료가 적용되지는 않습니다.
            </p>
          </aside>
        </div>
      </section>

      <main>
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-bold uppercase text-brand-600">Surgical Decision</p>
              <h2 className="text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
                수술적 치료 상담이 필요한 경우
              </h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {surgeryCandidateCards.map((item) => (
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
            <div className="max-w-4xl">
              <p className="mb-3 text-sm font-bold uppercase text-brand-600">Assessment</p>
              <h2 className="text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
                최소침습 관절수술 판단에서 확인하는 요소
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted">
                수술 방법만 먼저 정하지 않고 통증 위치, 관절 운동범위, 손상 정도, 영상검사,
                전신 상태와 회복 가능성, 수술 후 재활 계획을 함께 확인합니다.
              </p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {assessmentCards.map((item) => {
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
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <p className="mb-3 text-sm font-bold uppercase text-brand-600">Surgery Scope</p>
                <h2 className="text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
                  대표적으로 함께 검토하는 수술적 치료 주제
                </h2>
                <p className="mt-4 text-lg leading-8 text-muted">
                  실제 수술 방법과 범위는 진료와 검사 결과를 종합해 상담합니다. 모든 환자에게 같은 치료가 적용되지는 않습니다.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {surgeryItems.map((item) => (
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
              <p className="mb-3 text-sm font-bold uppercase text-brand-600">Treatment Step</p>
              <h2 className="text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
                먼저 치료 단계를 확인합니다
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted">
                수술 여부는 진료와 검사 결과를 종합해 결정됩니다. 비수술 치료 가능성, 수술적 치료 필요성,
                수술 후 회복관리와 재활 계획을 함께 상담합니다.
              </p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {treatmentStepCards.map((item) => (
                <article key={item.title} className="rounded-2xl border border-line bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-extrabold leading-8 text-ink">{item.title}</h3>
                  <p className="mt-4 text-base leading-7 text-muted">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 rounded-[28px] border border-brand-100 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-bold uppercase text-brand-600">Related Care</p>
              <h2 className="text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
                부위별 치료 판단 연결
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted">
                수술적 치료 가능성은 통증 부위와 손상 구조에 따라 달라질 수 있습니다. 관련 진료 페이지에서
                무릎, 어깨, 족부·발목, 비수술 치료와 회복관리 정보를 함께 확인할 수 있습니다.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {bodyPartLinks.map((item) => (
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
                용인·처인구 인근 관절 치료 판단 안내
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted">
                새기준병원 관절센터는 경기도 용인시 처인구에 위치해 있으며, 용인·처인구를 비롯해
                수원, 오산, 이천, 안성, 경기 광주 등 인근 지역에서 무릎·어깨·발목·손목 통증과
                관절 질환으로 내원하는 환자의 진료 상담을 받을 수 있습니다. 새기준병원이 해당 지역에
                위치한 것은 아니며, 환자 상태와 검사 결과에 따라 치료 방향을 상담합니다.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[linear-gradient(135deg,#123247_0%,#1D4258_58%,#2E5870_100%)] px-4 py-16 text-white sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-[28px] border border-white/10 bg-white/5 p-6 lg:flex-row lg:items-center lg:justify-between lg:p-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
                수술 여부와 치료 방법은 평가 후 상담합니다
              </h2>
              <p className="mt-5 text-lg leading-8 text-brand-50">
                통증 위치, 관절 상태, 영상검사 결과, 기존 치료 반응, 회복 계획을 함께 확인해
                환자 상태에 맞는 치료 방향을 상담합니다.
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
