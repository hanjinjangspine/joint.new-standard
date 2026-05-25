import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  ClipboardCheck,
  ExternalLink,
  Footprints,
  MapPin,
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

const assessmentCards = [
  {
    title: "통증 변화",
    body: "치료 전후 통증 강도와 통증 위치 변화를 함께 확인합니다.",
    icon: Stethoscope
  },
  {
    title: "부종과 염증 반응",
    body: "부종, 열감, 염증 반응이 남아 있는지 확인해 회복 단계를 상담합니다.",
    icon: ClipboardCheck
  },
  {
    title: "관절 운동범위",
    body: "굽히고 펴는 범위, 움직임 제한, 일상 동작 가능 범위를 함께 봅니다.",
    icon: Activity
  },
  {
    title: "근력 회복",
    body: "치료 부위 주변 근력과 균형을 확인해 재활 방향을 상담합니다.",
    icon: Footprints
  },
  {
    title: "보행과 균형",
    body: "걷는 모습, 체중 부하, 균형감, 보행 안정성을 단계적으로 확인합니다.",
    icon: Footprints
  },
  {
    title: "일상생활 복귀 정도",
    body: "계단, 보행, 직장·가사 활동 등 생활 복귀 정도를 함께 살핍니다.",
    icon: ClipboardCheck
  }
];

const recoverySteps = [
  "초기 통증과 부종 관리",
  "관절 운동범위 회복",
  "근력과 균형 회복",
  "보행과 일상생활 회복",
  "재발 방지를 위한 생활관리"
];

const surgeryRecoveryLinks = [
  { label: "최소침습 족부·발목 수술", href: "/foot-ankle-mis" },
  { label: "최소침습 관절수술", href: "/minimally-invasive-surgery" }
];

const bodyPartLinks = [
  { label: "족부·발목 통증 진료", href: "/foot-ankle" },
  { label: "무릎 통증 진료", href: "/knee" },
  { label: "어깨 통증 진료", href: "/shoulder" },
  { label: "관절 비수술 치료", href: "/injection-pain" },
  { label: "최소침습 관절수술", href: "/minimally-invasive-surgery" }
];

export const metadata: Metadata = createMetadata({
  title: "관절 회복관리 | 새기준병원 관절센터",
  description:
    "새기준병원 관절센터는 관절 치료 후 통증 관리, 관절 운동범위, 보행 회복, 근력 회복, 재활 계획을 환자 상태와 치료 범위에 따라 상담합니다.",
  path: "/recovery",
  keywords: ["용인 관절 회복관리", "관절 재활", "수술 후 회복관리", "보행 회복", "관절 운동범위"]
});

export default function RecoveryPage() {
  return (
    <>
      <section className="border-b border-line bg-[linear-gradient(135deg,#F8FAFB_0%,#EEF4F7_58%,#FFFFFF_100%)] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_360px] lg:items-center">
          <div>
            <Breadcrumb items={[{ label: "관절 회복관리" }]} />
            <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.12em] text-brand-600">
              Recovery & Rehabilitation
            </p>
            <h1 className="mt-3 max-w-4xl text-3xl font-extrabold leading-[1.2] tracking-[-0.01em] text-ink sm:text-4xl lg:text-5xl">
              관절 회복관리
            </h1>
            <p className="mt-5 max-w-3xl text-xl font-extrabold leading-8 text-brand-800 sm:text-2xl">
              치료 후 회복은 통증, 보행, 근력, 재활 계획을 함께 봐야 합니다
            </p>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-muted sm:text-xl">
              관절 치료 후 회복 과정은 환자의 질환, 치료 범위, 통증 정도, 근력, 보행 상태에 따라
              달라질 수 있습니다. 새기준병원 관절센터는 수술 여부와 관계없이 통증 관리, 관절 운동범위,
              보행 회복, 재활 계획을 함께 상담합니다.
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
            <p className="text-sm font-extrabold text-brand-600">회복관리 핵심</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["통증 관리", "부종 관리", "운동범위", "근력 회복", "보행 회복", "재활 계획"].map((item) => (
                <span
                  key={item}
                  className="whitespace-nowrap rounded-full border border-brand-100 bg-brand-50 px-3 py-2 text-sm font-bold text-brand-800"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-5 text-base leading-7 text-muted">
              회복 과정은 질환과 치료 범위, 전신 상태, 재활 참여도에 따라 달라질 수 있습니다.
            </p>
          </aside>
        </div>
      </section>

      <main>
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-bold uppercase text-brand-600">Recovery Check</p>
              <h2 className="text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
                회복 과정에서 함께 확인하는 것
              </h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {assessmentCards.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="rounded-2xl border border-line bg-white p-6 shadow-sm">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
                      <Icon aria-hidden="true" size={22} />
                    </div>
                    <h3 className="mt-4 text-xl font-extrabold leading-8 text-ink">{item.title}</h3>
                    <p className="mt-4 text-base leading-7 text-muted">{item.body}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-calm px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <p className="mb-3 text-sm font-bold uppercase text-brand-600">Recovery Steps</p>
                <h2 className="text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
                  치료 후 회복은 단계적으로 봅니다
                </h2>
                <p className="mt-4 text-lg leading-8 text-muted">
                  치료 후 변화는 한 번에 판단하기보다 통증, 부종, 움직임, 근력, 보행을 단계적으로 확인하는 것이 중요합니다.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {recoverySteps.map((item) => (
                  <div key={item} className="rounded-2xl border border-line bg-white p-5 font-bold text-ink shadow-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 rounded-[28px] border border-brand-100 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-bold uppercase text-brand-600">After Surgery</p>
              <h2 className="text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
                수술 후 회복관리
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted">
                수술 후 회복 과정은 수술 부위, 수술 범위, 환자의 전신 상태와 재활 참여도에 따라
                달라질 수 있습니다. 통증 조절, 부종 관리, 보행 훈련, 관절 운동범위 회복을 단계적으로 확인합니다.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {surgeryRecoveryLinks.map((item) => (
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
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="rounded-[28px] border border-line bg-white p-6 shadow-sm sm:p-8">
                <p className="mb-3 text-sm font-bold uppercase text-brand-600">After Non-surgical Care</p>
                <h2 className="text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
                  비수술 치료 후 회복관리
                </h2>
                <p className="mt-4 text-lg leading-8 text-muted">
                  주사치료, 약물치료, 체외충격파, 재활치료 후에도 통증 변화와 기능 회복을 확인하는 것이
                  중요합니다. 치료 반응에 따라 다음 치료 방향을 상담할 수 있습니다.
                </p>
                <Link
                  href="/injection-pain"
                  className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-brand-800 px-5 py-3 font-extrabold text-white transition hover:bg-brand-900"
                >
                  관절 비수술 치료
                  <ArrowRight aria-hidden="true" size={18} />
                </Link>
              </div>
              <div className="rounded-[28px] border border-line bg-white p-6 shadow-sm sm:p-8">
                <p className="mb-3 text-sm font-bold uppercase text-brand-600">Related Care</p>
                <h2 className="text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
                  부위별 회복관리 연결
                </h2>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {bodyPartLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group flex min-h-14 items-center justify-between rounded-2xl border border-line bg-calm p-4 font-extrabold text-ink transition hover:border-brand-200 hover:bg-brand-50"
                    >
                      {item.label}
                      <ArrowRight aria-hidden="true" size={18} className="text-brand-700 transition group-hover:translate-x-1" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 rounded-[28px] border border-brand-100 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-bold uppercase text-brand-600">Recovery Rehab Center</p>
              <h2 className="text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
                회복재활센터에서 이어지는 회복관리
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted">
                관절 치료 후 회복 과정에서는 통증 변화, 보행 상태, 운동 범위, 근력 저하 여부를 함께
                확인하는 것이 중요합니다. 새기준병원 회복재활센터는 본원 진료와 연결된 회복관리
                안내를 제공합니다.
              </p>
            </div>
            <Link
              href="https://rehab.new-standard.co.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-20 items-center justify-between rounded-2xl border border-line bg-calm p-5 text-lg font-extrabold text-ink transition hover:border-brand-200 hover:bg-brand-50"
            >
              새기준병원 회복재활센터 바로가기
              <ExternalLink aria-hidden="true" size={20} className="text-brand-700 transition group-hover:translate-x-1" />
            </Link>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="rounded-[28px] border border-line bg-white p-6 shadow-sm sm:p-8">
              <p className="mb-3 text-sm font-bold uppercase text-brand-600">Orthopedic Doctor</p>
              <h2 className="text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
                정형외과 전문의 김동희 원장
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted">
                김동희 원장은 족부·발목, 무릎, 어깨, 손·손목 질환을 진료하며, 환자의 증상과
                영상검사 결과를 함께 확인해 치료 후 회복관리와 재활 방향을 상담합니다.
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
                용인·처인구 인근 관절 회복관리 안내
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted">
                새기준병원 관절센터는 경기도 용인시 처인구에 위치해 있으며, 용인·처인구를 비롯해
                수원, 오산, 이천, 안성, 경기 광주 등 인근 지역에서 관절 통증 치료 후 회복관리와
                재활 상담이 필요한 환자의 진료 상담을 받을 수 있습니다. 새기준병원이 해당 지역에
                위치한 것은 아니며, 환자 상태와 검사 결과에 따라 치료 방향을 상담합니다.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[linear-gradient(135deg,#123247_0%,#1D4258_58%,#2E5870_100%)] px-4 py-16 text-white sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-[28px] border border-white/10 bg-white/5 p-6 lg:flex-row lg:items-center lg:justify-between lg:p-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
                관절 치료 후 회복은 단계적으로 확인해야 합니다
              </h2>
              <p className="mt-5 text-lg leading-8 text-brand-50">
                통증, 관절 운동범위, 근력, 보행, 일상생활 회복 정도를 함께 확인해 환자 상태에 맞는
                회복관리 방향을 상담합니다.
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
