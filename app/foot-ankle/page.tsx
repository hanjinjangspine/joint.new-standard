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
    title: "발목을 삔 뒤 통증이 오래 지속되는 경우",
    body: "염좌 후 통증과 부종이 반복된다면 인대 손상, 연골 손상, 발목 안정성을 함께 확인합니다."
  },
  {
    title: "발목이 자주 꺾이거나 불안정한 경우",
    body: "반복적으로 접질리거나 울퉁불퉁한 길에서 불안정하다면 만성 발목 불안정성을 평가합니다."
  },
  {
    title: "걸을 때 발바닥이나 뒤꿈치가 아픈 경우",
    body: "족저근막염, 아킬레스건 문제, 발 구조 변화 등 여러 원인을 진찰과 검사로 확인합니다."
  },
  {
    title: "엄지발가락이 휘고 신발 착용이 불편한 경우",
    body: "무지외반은 변형 정도, 통증, 보행 불편, 신발 착용 문제를 함께 살펴 치료 방향을 상담합니다."
  },
  {
    title: "아킬레스건 부위 통증이나 부종이 있는 경우",
    body: "아킬레스건 주변 통증과 붓기는 힘줄 상태, 활동량, 보행 부담을 함께 확인해야 합니다."
  },
  {
    title: "발·발목 통증 때문에 무릎이나 허리까지 불편한 경우",
    body: "발과 발목의 기능 변화가 보행과 하지정렬에 영향을 줄 수 있어 연관 부위를 함께 평가합니다."
  }
];

const diseaseItems = [
  "발목 염좌 후 만성 통증",
  "발목 불안정성",
  "발목 인대 손상",
  "아킬레스건 질환",
  "무지외반",
  "족저근막염",
  "평발·요족 등 발 구조 문제",
  "발목 관절염"
];

const diagnosisCards = [
  {
    title: "통증 위치 확인",
    body: "통증이 발목 안쪽, 바깥쪽, 발바닥, 뒤꿈치, 발가락 중 어디에서 시작되는지 확인합니다.",
    icon: Stethoscope
  },
  {
    title: "발목 안정성 확인",
    body: "반복 염좌, 불안정감, 부종, 인대 손상 가능성을 진찰과 검사로 평가합니다.",
    icon: Activity
  },
  {
    title: "보행과 하지정렬 확인",
    body: "발의 아치, 발목 움직임, 하지정렬, 무릎·고관절 부담을 함께 살펴봅니다.",
    icon: Footprints
  },
  {
    title: "X-ray·MRI 등 영상검사 확인",
    body: "증상과 영상 소견이 일치하는지 확인해 치료 방향을 상담합니다.",
    icon: ClipboardCheck
  }
];

const treatmentCards = [
  {
    title: "비수술 치료를 고려할 수 있는 경우",
    body: "통증이 비교적 경미하거나 구조적 손상이 뚜렷하지 않은 경우 약물치료, 주사치료, 보조기, 체외충격파, 재활치료 등을 먼저 고려할 수 있습니다."
  },
  {
    title: "수술적 치료 상담이 필요한 경우",
    body: "구조적 손상이나 불안정성이 지속되거나 일상생활 제한이 큰 경우에는 검사 결과에 따라 수술적 치료 가능성을 상담할 수 있습니다."
  },
  {
    title: "재활과 회복관리",
    body: "발과 발목은 보행과 연결되므로 통증 조절, 근력 회복, 균형 훈련, 일상 복귀 계획을 함께 확인합니다."
  }
];

const surgeryLinks = [
  { label: "최소침습 족부·발목 수술", href: "/foot-ankle-mis" },
  { label: "회복관리", href: "/recovery" },
  { label: "최소침습 관절수술", href: "/minimally-invasive-surgery" }
];

export const metadata: Metadata = createMetadata({
  title: "족부·발목 통증 진료 | 새기준병원 관절센터",
  description:
    "새기준병원 관절센터는 발목 염좌 후 통증, 발목 불안정성, 아킬레스건, 무지외반, 발바닥 통증을 진찰과 영상검사를 함께 확인해 비수술 치료와 수술적 치료 방향을 상담합니다.",
  path: "/foot-ankle",
  keywords: ["용인 족부발목", "용인 발목통증", "발목 불안정성", "무지외반", "족저근막염"]
});

export default function FootAnklePage() {
  return (
    <>
      <section className="border-b border-line bg-[linear-gradient(135deg,#F8FAFB_0%,#EEF4F7_58%,#FFFFFF_100%)] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_360px] lg:items-center">
          <div>
            <Breadcrumb items={[{ label: "족부·발목 통증 진료" }]} />
            <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.12em] text-brand-600">
              Foot & Ankle Clinic
            </p>
            <h1 className="mt-3 max-w-4xl text-3xl font-extrabold leading-[1.2] tracking-[-0.01em] text-ink sm:text-4xl lg:text-5xl">
              족부·발목 통증 진료
            </h1>
            <p className="mt-5 max-w-3xl text-xl font-extrabold leading-8 text-brand-800 sm:text-2xl">
              발과 발목 통증은 보행과 균형까지 함께 봐야 합니다
            </p>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-muted sm:text-xl">
              발목 염좌 후 통증, 발목 불안정성, 아킬레스건 통증, 무지외반, 발바닥
              통증은 단순히 한 부위의 문제가 아니라 보행, 하지정렬, 무릎·고관절 부담과도
              관련될 수 있습니다. 새기준병원 관절센터는 진찰과 영상검사를 함께 확인해
              환자 상태에 맞는 치료 방향을 상담합니다.
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
              {["발목 불안정성", "아킬레스건", "무지외반", "족저근막염", "보행 평가", "재활 연계"].map((item) => (
                <span
                  key={item}
                  className="whitespace-nowrap rounded-full border border-brand-100 bg-brand-50 px-3 py-2 text-sm font-bold text-brand-800"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-5 text-base leading-7 text-muted">
              통증 부위만 보지 않고 발목 안정성, 발 구조, 보행과 영상검사 결과를 함께 확인합니다.
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
                이런 증상이 있으면 확인이 필요합니다
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
                  족부·발목에서 함께 확인하는 질환
                </h2>
                <p className="mt-4 text-lg leading-8 text-muted">
                  같은 발목 통증이라도 원인은 환자마다 다를 수 있습니다. 진료와 검사 결과에 따라 치료 방향을 상담합니다.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {diseaseItems.map((item) => (
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
                발과 발목은 보행과 하지정렬을 함께 봐야 합니다
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted">
                발과 발목은 체중을 지탱하고 보행을 조절하는 부위입니다. 통증 부위만 보는
                것이 아니라 발의 아치, 발목 안정성, 하지정렬, 보행 양상, 무릎·고관절
                부담까지 함께 확인해야 치료 방향을 정하는 데 도움이 됩니다.
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
                족부·발목 질환은 상태에 따라 약물치료, 주사치료, 보조기, 체외충격파,
                재활치료 등 비수술 치료를 먼저 고려할 수 있습니다. 다만 구조적 손상이나
                불안정성이 지속되거나 일상생활 제한이 큰 경우에는 수술적 치료 가능성을 상담할 수 있습니다.
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
                수술이 필요한 경우에도 범위와 회복 계획을 함께 상담합니다
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted">
                족부·발목 수술은 병변 위치, 손상 정도, 발 구조, 보행 상태, 전신 상태에
                따라 치료 방향이 달라질 수 있습니다. 새기준병원 관절센터는 검사 결과를
                바탕으로 수술 필요성과 회복관리 방향을 상담합니다.
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
                발목 염좌와 보행 회복관리 연결
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted">
                발목 염좌나 족부·발목 통증 이후에는 인대 손상 여부, 보행 상태, 통증 반응에 따라
                회복관리 방향이 달라질 수 있습니다. 회복재활센터에서 급성 염좌와 보행 회복관리 정보를
                확인할 수 있습니다.
              </p>
            </div>
            <Link
              href="https://rehab.new-standard.co.kr"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex min-h-20 items-center justify-between rounded-2xl border border-line bg-calm p-5 text-lg font-extrabold text-ink transition hover:border-brand-200 hover:bg-brand-50"
            >
              급성 염좌 회복관리 보기
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
                김동희 원장은 족부·발목, 무릎, 어깨, 손·손목 질환을 진료하며, 환자의
                증상과 영상검사 결과를 함께 확인해 비수술 치료와 수술적 치료 방향을 상담합니다.
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
                용인·처인구 인근 족부·발목 통증 진료 안내
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted">
                새기준병원 관절센터는 경기도 용인시 처인구에 위치해 있으며, 용인·처인구를
                비롯해 수원, 오산, 이천, 안성, 경기 광주 등 인근 지역에서 발목 통증,
                발바닥 통증, 무지외반, 아킬레스건 통증으로 내원하는 환자의 진료 상담을
                받을 수 있습니다. 새기준병원이 해당 지역에 위치한 것은 아니며, 환자 상태와
                검사 결과에 따라 치료 방향을 상담합니다.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[linear-gradient(135deg,#123247_0%,#1D4258_58%,#2E5870_100%)] px-4 py-16 text-white sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-[28px] border border-white/10 bg-white/5 p-6 lg:flex-row lg:items-center lg:justify-between lg:p-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
                족부·발목 통증이 지속된다면 정확한 평가가 필요합니다
              </h2>
              <p className="mt-5 text-lg leading-8 text-brand-50">
                통증 위치, 보행, 하지정렬, 영상검사 결과를 함께 확인해 환자 상태에 맞는 치료 방향을 상담합니다.
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
