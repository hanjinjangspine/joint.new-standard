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

const symptomCards = [
  {
    title: "계단을 오르내릴 때 무릎이 아픈 경우",
    body: "계단 보행에서 통증이 반복되면 관절염, 연골 손상, 슬개대퇴 관절 문제 등을 함께 확인할 수 있습니다."
  },
  {
    title: "앉았다 일어날 때 통증이 있는 경우",
    body: "무릎을 굽혔다 펴는 동작에서 통증이 지속되면 관절 운동범위와 연골 상태를 함께 평가합니다."
  },
  {
    title: "무릎이 붓거나 열감이 있는 경우",
    body: "반복되는 부종이나 열감은 관절 내부 염증, 연골판 손상, 활막 자극 여부를 확인하는 데 도움이 됩니다."
  },
  {
    title: "무릎이 걸리거나 잠기는 느낌이 있는 경우",
    body: "걸림이나 잠김 증상이 있으면 반월상연골판 손상이나 관절 내 구조 문제를 확인할 필요가 있습니다."
  },
  {
    title: "방향 전환 때 무릎이 불안정한 경우",
    body: "걷거나 운동 중 방향을 바꿀 때 불안정감이 있다면 십자인대와 주변 인대 상태를 평가합니다."
  },
  {
    title: "오래 걸으면 무릎 통증이 심해지는 경우",
    body: "보행 시간이 길어질수록 통증이 심해지면 관절 상태, 하지정렬, 보행 양상을 함께 확인합니다."
  }
];

const conditionItems = [
  "퇴행성 무릎 관절염",
  "반월상연골판 손상",
  "십자인대 손상",
  "연골 손상",
  "슬개대퇴 통증",
  "하지정렬 문제",
  "무릎 주변 힘줄·인대 통증"
];

const diagnosisCards = [
  {
    title: "통증 위치 확인",
    body: "통증이 무릎 앞쪽, 안쪽, 바깥쪽, 뒤쪽 중 어디에서 시작되는지 확인합니다.",
    icon: Stethoscope
  },
  {
    title: "관절 운동범위 확인",
    body: "무릎을 굽히고 펴는 범위, 걸림감, 붓기, 움직임 제한을 함께 평가합니다.",
    icon: Activity
  },
  {
    title: "보행과 하지정렬 확인",
    body: "걷는 모습, 다리 축, 발목과 고관절 부담까지 함께 확인해 무릎 통증의 원인을 살핍니다.",
    icon: Footprints
  },
  {
    title: "X-ray·MRI 등 영상검사 확인",
    body: "영상 소견과 실제 증상이 일치하는지 확인해 치료 방향을 상담합니다.",
    icon: ClipboardCheck
  }
];

const treatmentCards = [
  {
    title: "비수술 치료",
    body: "통증 정도와 관절 상태에 따라 약물치료, 주사치료, 재활치료, 보행 관리 등을 먼저 고려할 수 있습니다."
  },
  {
    title: "수술적 치료 상담",
    body: "연골판·인대 손상, 관절 손상, 보행 제한이 지속되는 경우에는 검사 결과에 따라 수술적 치료 가능성을 상담합니다."
  },
  {
    title: "재활과 회복관리",
    body: "치료 전후에는 근력, 관절 운동범위, 보행, 균형 회복을 함께 확인하는 것이 중요합니다."
  }
];

const surgeryLinks = [
  { label: "최소침습 관절수술", href: "/minimally-invasive-surgery" },
  { label: "회복관리", href: "/recovery" },
  { label: "관절 비수술 치료", href: "/injection-pain" }
];

export const metadata: Metadata = createMetadata({
  title: "무릎 통증 진료 | 새기준병원 관절센터",
  description:
    "새기준병원 관절센터는 무릎 통증, 퇴행성 관절염, 반월상연골판 손상, 십자인대 손상, 하지정렬 문제를 진찰과 영상검사를 함께 확인해 비수술 치료와 수술적 치료 방향을 상담합니다.",
  path: "/knee",
  keywords: ["용인 무릎 통증", "무릎 관절염", "반월상연골판 손상", "십자인대 손상", "하지정렬"]
});

export default function KneePage() {
  return (
    <>
      <section className="border-b border-line bg-[linear-gradient(135deg,#F8FAFB_0%,#EEF4F7_58%,#FFFFFF_100%)] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_360px] lg:items-center">
          <div>
            <Breadcrumb items={[{ label: "무릎 통증 진료" }]} />
            <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.12em] text-brand-600">
              Knee Clinic
            </p>
            <h1 className="mt-3 max-w-4xl text-3xl font-extrabold leading-[1.2] tracking-[-0.01em] text-ink sm:text-4xl lg:text-5xl">
              무릎 통증 진료
            </h1>
            <p className="mt-5 max-w-3xl text-xl font-extrabold leading-8 text-brand-800 sm:text-2xl">
              무릎 통증은 관절 상태와 보행, 하지정렬을 함께 봐야 합니다
            </p>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-muted sm:text-xl">
              무릎 통증은 퇴행성 관절염, 반월상연골판 손상, 십자인대 손상, 연골 손상,
              하지정렬 문제 등 다양한 원인으로 발생할 수 있습니다. 새기준병원 관절센터는
              진찰과 영상검사를 함께 확인해 비수술 치료와 수술적 치료 방향을 상담합니다.
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
              {["무릎 통증", "관절염", "연골판", "십자인대", "하지정렬", "보행 평가"].map((item) => (
                <span
                  key={item}
                  className="whitespace-nowrap rounded-full border border-brand-100 bg-brand-50 px-3 py-2 text-sm font-bold text-brand-800"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-5 text-base leading-7 text-muted">
              통증 위치만 보지 않고 관절 운동범위, 보행, 하지정렬, 영상검사 결과를 함께 확인합니다.
            </p>
          </aside>
        </div>
      </section>

      <main>
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-bold uppercase text-brand-600">Symptoms</p>
              <h2 className="text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
                이런 무릎 증상이 있으면 확인이 필요합니다
              </h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {symptomCards.map((item) => (
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
                <p className="mb-3 text-sm font-bold uppercase text-brand-600">Conditions</p>
                <h2 className="text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
                  무릎에서 함께 확인하는 질환
                </h2>
                <p className="mt-4 text-lg leading-8 text-muted">
                  같은 무릎 통증이라도 원인은 환자마다 다를 수 있습니다. 진료와 검사 결과에 따라 치료 방향을 상담합니다.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {conditionItems.map((item) => (
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
            <div className="max-w-4xl">
              <p className="mb-3 text-sm font-bold uppercase text-brand-600">Diagnosis</p>
              <h2 className="text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
                무릎 통증은 하지정렬과 보행을 함께 봐야 합니다
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted">
                무릎은 보행과 체중 부하에 직접 연결되는 관절입니다. 통증 부위, 관절 운동범위,
                보행 양상, 하지정렬, X-ray·MRI 등 영상검사 결과를 함께 확인해야 치료 방향을
                정하는 데 도움이 됩니다.
              </p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {diagnosisCards.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="rounded-2xl border border-line bg-calm p-6 shadow-sm">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-brand-700">
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

        <section className="bg-calm px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <p className="mb-3 text-sm font-bold uppercase text-brand-600">Treatment Decision</p>
              <h2 className="text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
                먼저 치료 단계를 확인합니다
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted">
                무릎 통증은 원인과 손상 정도에 따라 치료 방향이 달라질 수 있습니다. 비수술 치료부터
                수술적 치료 가능성, 재활과 회복관리까지 환자 상태에 따라 단계적으로 상담합니다.
              </p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {treatmentCards.map((item) => (
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
              <p className="mb-3 text-sm font-bold uppercase text-brand-600">Surgery & Recovery</p>
              <h2 className="text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
                수술적 치료가 필요한 경우에도 범위와 회복 계획을 함께 상담합니다
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted">
                무릎 치료는 관절 상태, 손상 위치, 보행 제한, 하지정렬, 전신 상태에 따라 달라질 수 있습니다.
                새기준병원 관절센터는 검사 결과를 바탕으로 치료 범위와 회복관리 방향을 상담합니다.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
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
                용인·처인구 인근 무릎 통증 진료 안내
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted">
                새기준병원 관절센터는 경기도 용인시 처인구에 위치해 있으며, 용인·처인구를 비롯해
                수원, 오산, 이천, 안성, 경기 광주 등 인근 지역에서 무릎 통증, 무릎 관절염,
                반월상연골판 손상, 십자인대 손상 등으로 내원하는 환자의 진료 상담을 받을 수 있습니다.
                새기준병원이 해당 지역에 위치한 것은 아니며, 환자 상태와 검사 결과에 따라 치료 방향을 상담합니다.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[linear-gradient(135deg,#123247_0%,#1D4258_58%,#2E5870_100%)] px-4 py-16 text-white sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-[28px] border border-white/10 bg-white/5 p-6 lg:flex-row lg:items-center lg:justify-between lg:p-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
                무릎 통증은 정확한 평가 후 치료 방향을 상담합니다
              </h2>
              <p className="mt-5 text-lg leading-8 text-brand-50">
                통증 위치, 관절 상태, 보행, 하지정렬, 영상검사 결과를 함께 확인해 환자 상태에 맞는 치료 방향을 상담합니다.
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
