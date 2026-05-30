import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  ClipboardCheck,
  ExternalLink,
  MapPin,
  MoveUpRight,
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
    title: "팔을 위로 올릴 때 통증이 있는 경우",
    body: "팔을 들어 올리는 동작에서 통증이 반복되면 회전근개, 충돌증후군, 관절 운동 제한을 함께 확인합니다."
  },
  {
    title: "밤에 어깨 통증이 심해지는 경우",
    body: "야간통이 지속되면 염증, 힘줄 손상, 관절 내부 문제 여부를 진찰과 영상검사로 평가합니다."
  },
  {
    title: "팔을 뒤로 돌리기 어려운 경우",
    body: "옷을 입거나 등 뒤로 손을 돌리는 동작이 어렵다면 관절 운동 제한과 통증 양상을 함께 확인합니다."
  },
  {
    title: "어깨가 굳고 움직임이 제한되는 경우",
    body: "어깨가 굳어 움직임이 줄어드는 경우 오십견과 다른 구조적 문제를 구분해 보는 것이 중요합니다."
  },
  {
    title: "힘이 빠져 물건을 들기 어려운 경우",
    body: "근력저하가 동반되면 회전근개 파열이나 신경 관련 문제 가능성을 함께 평가합니다."
  },
  {
    title: "주사나 물리치료 후에도 통증이 반복되는 경우",
    body: "증상이 반복되면 기존 치료 반응과 영상 소견을 확인해 다음 치료 단계를 상담할 수 있습니다."
  }
];

const conditionItems = [
  "오십견",
  "회전근개 파열",
  "어깨 충돌증후군",
  "석회성 건염",
  "어깨 관절염",
  "이두건염",
  "어깨 불안정성"
];

const diagnosisCards = [
  {
    title: "운동 제한 확인",
    body: "어깨를 앞, 옆, 뒤로 움직일 때 제한이 있는지 확인해 오십견과 구조적 손상을 구분합니다.",
    icon: Activity
  },
  {
    title: "근력저하 확인",
    body: "팔을 들거나 버티는 힘이 떨어지는지 확인해 회전근개 파열 가능성을 함께 평가합니다.",
    icon: MoveUpRight
  },
  {
    title: "통증 양상 확인",
    body: "야간통, 특정 동작 통증, 움직임에 따른 통증 변화를 확인해 원인을 좁혀갑니다.",
    icon: Stethoscope
  },
  {
    title: "X-ray·초음파·MRI 등 영상검사 확인",
    body: "영상 소견과 실제 증상이 일치하는지 확인해 치료 방향을 상담합니다.",
    icon: ClipboardCheck
  }
];

const treatmentCards = [
  {
    title: "비수술 치료",
    body: "통증 정도와 운동 제한, 염증 상태에 따라 약물치료, 주사치료, 재활치료 등을 먼저 고려할 수 있습니다."
  },
  {
    title: "수술적 치료 상담",
    body: "회전근개 파열, 반복되는 기능 저하, 구조적 손상이 확인되는 경우에는 검사 결과에 따라 수술적 치료 가능성을 상담합니다."
  },
  {
    title: "재활과 회복관리",
    body: "치료 전후에는 어깨 운동범위, 근력, 통증 변화, 일상 동작 회복을 함께 확인하는 것이 중요합니다."
  }
];

const surgeryLinks = [
  { label: "최소침습 관절수술 판단", href: "/minimally-invasive-surgery" },
  { label: "회복관리", href: "/recovery" },
  { label: "관절 비수술 치료", href: "/injection-pain" }
];

export const metadata: Metadata = createMetadata({
  title: "어깨 통증 진료 | 새기준병원 관절센터",
  description:
    "새기준병원 관절센터는 어깨 통증, 오십견, 회전근개 파열, 충돌증후군, 석회성 건염을 진찰과 영상검사를 함께 확인해 비수술 치료와 수술적 치료 방향을 상담합니다.",
  path: "/shoulder",
  keywords: ["용인 어깨 통증", "오십견", "회전근개 파열", "어깨 충돌증후군", "석회성 건염"]
});

export default function ShoulderPage() {
  return (
    <>
      <section className="border-b border-line bg-[linear-gradient(135deg,#F8FAFB_0%,#EEF4F7_58%,#FFFFFF_100%)] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_360px] lg:items-center">
          <div>
            <Breadcrumb items={[{ label: "어깨 통증 진료" }]} />
            <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.12em] text-brand-600">
              Shoulder Clinic
            </p>
            <h1 className="mt-3 max-w-4xl text-3xl font-extrabold leading-[1.2] tracking-[-0.01em] text-ink sm:text-4xl lg:text-5xl">
              어깨 통증 진료
            </h1>
            <p className="mt-5 max-w-3xl text-xl font-extrabold leading-8 text-brand-800 sm:text-2xl">
              어깨 통증은 오십견과 회전근개 파열을 구분해 봐야 합니다
            </p>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-muted sm:text-xl">
              어깨 통증은 오십견, 회전근개 파열, 충돌증후군, 석회성 건염, 어깨 관절염 등
              다양한 원인으로 발생할 수 있습니다. 새기준병원 관절센터는 통증 위치, 운동 제한,
              근력, 영상검사 결과를 함께 확인해 비수술 치료와 수술적 치료 방향을 상담합니다.
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
              {["어깨 통증", "오십견", "회전근개", "충돌증후군", "운동 제한", "영상검사"].map((item) => (
                <span
                  key={item}
                  className="whitespace-nowrap rounded-full border border-brand-100 bg-brand-50 px-3 py-2 text-sm font-bold text-brand-800"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-5 text-base leading-7 text-muted">
              통증 위치와 운동 제한, 근력, 영상검사 결과를 함께 확인해 오십견과 회전근개 파열 등을 감별합니다.
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
                이런 어깨 증상이 있으면 확인이 필요합니다
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
                  어깨에서 함께 확인하는 질환
                </h2>
                <p className="mt-4 text-lg leading-8 text-muted">
                  같은 어깨 통증이라도 원인은 환자마다 다를 수 있습니다. 진료와 검사 결과에 따라 치료 방향을 상담합니다.
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
              <p className="mb-3 text-sm font-bold uppercase text-brand-600">Differential Diagnosis</p>
              <h2 className="text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
                오십견과 회전근개 파열은 구분이 필요합니다
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted">
                오십견은 어깨가 굳고 운동범위가 줄어드는 양상이 두드러질 수 있고, 회전근개 파열은
                근력저하와 특정 동작 통증이 함께 나타날 수 있습니다. 통증 양상과 진찰 소견,
                X-ray·초음파·MRI 등 영상검사를 함께 확인해야 치료 방향을 정하는 데 도움이 됩니다.
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
                어깨 통증은 원인과 손상 정도에 따라 치료 방향이 달라질 수 있습니다. 비수술 치료부터
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
                어깨 치료는 통증 원인, 파열 크기, 근력저하, 운동 제한, 전신 상태에 따라 달라질 수 있습니다.
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
          <div className="mx-auto grid max-w-7xl gap-8 rounded-[28px] border border-brand-100 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-bold uppercase text-brand-600">Recovery Rehab Center</p>
              <h2 className="text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
                어깨 운동 범위 회복관리 연결
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted">
                어깨 통증이나 치료 후에는 통증 변화와 운동 범위 회복 과정을 함께 확인하는 것이
                도움이 될 수 있습니다. 회복재활센터에서 도수치료·운동재활 방향을 상담할 수 있습니다.
              </p>
            </div>
            <Link
              href="https://rehab.new-standard.co.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-20 items-center justify-between rounded-2xl border border-line bg-calm p-5 text-lg font-extrabold text-ink transition hover:border-brand-200 hover:bg-brand-50"
            >
              어깨 회복관리 연결
              <ExternalLink aria-hidden="true" size={20} className="text-brand-700 transition group-hover:translate-x-1" />
            </Link>
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
                용인·처인구 인근 어깨 통증 진료 안내
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted">
                새기준병원 관절센터는 경기도 용인시 처인구에 위치해 있으며, 용인·처인구를 비롯해
                수원, 오산, 이천, 안성, 경기 광주 등 인근 지역에서 어깨 통증, 오십견,
                회전근개 파열, 충돌증후군 등으로 내원하는 환자의 진료 상담을 받을 수 있습니다.
                새기준병원이 해당 지역에 위치한 것은 아니며, 환자 상태와 검사 결과에 따라 치료 방향을 상담합니다.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[linear-gradient(135deg,#123247_0%,#1D4258_58%,#2E5870_100%)] px-4 py-16 text-white sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-[28px] border border-white/10 bg-white/5 p-6 lg:flex-row lg:items-center lg:justify-between lg:p-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
                어깨 통증은 정확한 감별 후 치료 방향을 상담합니다
              </h2>
              <p className="mt-5 text-lg leading-8 text-brand-50">
                통증 위치, 운동 제한, 근력, 영상검사 결과를 함께 확인해 환자 상태에 맞는 치료 방향을 상담합니다.
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
