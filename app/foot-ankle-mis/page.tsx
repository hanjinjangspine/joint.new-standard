import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  ClipboardCheck,
  ExternalLink,
  Footprints,
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
    label: "족부·발목 통증 진료",
    href: "/foot-ankle",
    external: false
  }
];

const surgeryConsultCards = [
  {
    title: "발목을 자주 접질리고 불안정한 경우",
    body: "반복적인 염좌와 불안정감이 지속되면 인대 상태와 발목 안정성을 함께 평가합니다."
  },
  {
    title: "발목 인대 손상 후 통증이 지속되는 경우",
    body: "인대 손상 정도, 부종, 연골 손상 동반 여부를 진찰과 영상검사로 확인합니다."
  },
  {
    title: "무지외반으로 신발 착용과 보행이 불편한 경우",
    body: "변형 정도, 통증, 신발 착용 불편, 보행 제한을 함께 살펴 치료 방향을 상담합니다."
  },
  {
    title: "아킬레스건 손상이나 통증이 지속되는 경우",
    body: "힘줄 손상 범위, 통증 위치, 활동 제한, 회복 계획을 함께 확인합니다."
  },
  {
    title: "발목 관절염으로 보행 제한이 있는 경우",
    body: "관절 손상 정도와 보행 제한, 통증 양상을 확인해 치료 단계를 상담합니다."
  },
  {
    title: "보존치료에도 일상생활 제한이 지속되는 경우",
    body: "약물·주사·재활치료 이후에도 생활 제한이 크다면 수술적 치료 가능성을 상담할 수 있습니다."
  }
];

const decisionFactors = [
  {
    title: "병변 위치 확인",
    body: "통증과 손상이 발목, 발바닥, 뒤꿈치, 발가락 중 어디에 집중되는지 확인합니다.",
    icon: Stethoscope
  },
  {
    title: "인대·힘줄·관절 손상 정도 확인",
    body: "인대, 힘줄, 연골, 관절 손상 정도에 따라 치료 범위가 달라질 수 있습니다.",
    icon: Activity
  },
  {
    title: "발 구조와 하지정렬 확인",
    body: "발의 아치, 변형 정도, 하지정렬, 보행 양상을 함께 평가합니다.",
    icon: Footprints
  },
  {
    title: "X-ray·MRI 등 영상검사 확인",
    body: "영상 소견과 증상이 일치하는지 확인해 치료 방향을 상담합니다.",
    icon: ScanLine
  },
  {
    title: "수술 후 회복과 재활 계획 확인",
    body: "보행 회복, 근력, 균형, 일상 복귀 계획까지 함께 살펴봅니다.",
    icon: ClipboardCheck
  }
];

const surgeryItems = [
  "발목 인대 봉합 또는 재건",
  "무지외반 교정",
  "아킬레스건 봉합",
  "발목 관절내시경",
  "발목 관절염 수술적 치료",
  "발 구조 문제에 대한 교정 수술"
];

const treatmentCards = [
  {
    title: "비수술 치료를 고려할 수 있는 경우",
    body: "통증이 비교적 경미하거나 구조적 불안정성이 뚜렷하지 않은 경우에는 약물치료, 주사치료, 보조기, 체외충격파, 재활치료 등을 고려할 수 있습니다."
  },
  {
    title: "수술적 치료 상담이 필요한 경우",
    body: "반복적인 불안정성, 구조적 변형, 힘줄·인대 손상, 보행 제한이 지속되는 경우에는 수술적 치료 가능성을 상담할 수 있습니다."
  },
  {
    title: "회복관리와 재활",
    body: "수술 여부와 관계없이 보행 회복, 근력, 균형, 재활 계획을 함께 확인하는 것이 중요합니다."
  }
];

const recoveryLinks = [
  { label: "회복관리", href: "/recovery" },
  { label: "관절 비수술 치료", href: "/injection-pain" },
  { label: "최소침습 관절수술", href: "/minimally-invasive-surgery" }
];

export const metadata: Metadata = createMetadata({
  title: "최소침습 족부·발목 수술 | 새기준병원 관절센터",
  description:
    "새기준병원 관절센터는 발목 불안정성, 발목 인대 손상, 무지외반, 아킬레스건, 발목 관절염 등 족부·발목 질환에서 진찰과 영상검사를 함께 확인해 비수술 치료와 수술적 치료 방향을 상담합니다.",
  path: "/foot-ankle-mis",
  keywords: ["용인 최소침습 발목수술", "용인 발목관절내시경", "발목 인대 손상", "무지외반", "아킬레스건"]
});

export default function FootAnkleMisPage() {
  return (
    <>
      <section className="border-b border-line bg-[linear-gradient(135deg,#F8FAFB_0%,#EEF4F7_58%,#FFFFFF_100%)] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_360px] lg:items-center">
          <div>
            <Breadcrumb items={[{ label: "최소침습 족부·발목 수술" }]} />
            <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.12em] text-brand-600">
              Foot & Ankle Surgery Decision
            </p>
            <h1 className="mt-3 max-w-4xl text-3xl font-extrabold leading-[1.2] tracking-[-0.01em] text-ink sm:text-4xl lg:text-5xl">
              최소침습 족부·발목 수술
            </h1>
            <p className="mt-5 max-w-3xl text-xl font-extrabold leading-8 text-brand-800 sm:text-2xl">
              수술이 필요한 경우에도 병변 위치와 회복 계획을 함께 확인합니다
            </p>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-muted sm:text-xl">
              족부·발목 질환은 통증 부위, 발목 안정성, 발 구조, 보행 상태, 하지정렬,
              영상검사 결과에 따라 치료 방향이 달라질 수 있습니다. 새기준병원 관절센터는
              환자 상태를 종합해 비수술 치료와 수술적 치료 가능성을 함께 상담합니다.
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
            <p className="text-sm font-extrabold text-brand-600">판단 기준</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["병변 위치", "손상 정도", "발목 안정성", "하지정렬", "영상검사", "회복 계획"].map((item) => (
                <span
                  key={item}
                  className="whitespace-nowrap rounded-full border border-brand-100 bg-brand-50 px-3 py-2 text-sm font-bold text-brand-800"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-5 text-base leading-7 text-muted">
              수술명보다 중요한 것은 환자 상태와 검사 결과를 함께 확인해 치료 범위를 상담하는 것입니다.
            </p>
          </aside>
        </div>
      </section>

      <main>
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <p className="mb-3 text-sm font-bold uppercase text-brand-600">Surgical Consultation</p>
              <h2 className="text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
                수술적 치료 상담이 필요한 경우
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted">
                족부·발목 질환은 먼저 비수술 치료를 고려할 수 있지만, 구조적 손상이나
                불안정성이 지속되거나 일상생활 제한이 큰 경우에는 수술적 치료 가능성을 상담할 수 있습니다.
              </p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {surgeryConsultCards.map((item) => (
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
              <p className="mb-3 text-sm font-bold uppercase text-brand-600">Decision Factors</p>
              <h2 className="text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
                수술 방법보다 먼저 확인해야 할 요소
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted">
                수술 방법은 병명만으로 결정하지 않습니다. 통증 위치, 손상 정도, 발목 안정성,
                발 구조, 보행 상태, 영상검사 결과를 함께 확인해야 수술 범위와 회복 계획을 상담할 수 있습니다.
              </p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
              {decisionFactors.map((item) => {
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
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm font-bold uppercase text-brand-600">Procedures</p>
              <h2 className="text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
                대표적으로 상담할 수 있는 족부·발목 수술
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
        </section>

        <section className="bg-calm px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <p className="mb-3 text-sm font-bold uppercase text-brand-600">Treatment Step</p>
              <h2 className="text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
                먼저 치료 단계를 확인합니다
              </h2>
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
              <p className="mb-3 text-sm font-bold uppercase text-brand-600">Recovery</p>
              <h2 className="text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
                수술 후 회복은 재활 계획과 함께 봅니다
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted">
                족부·발목 수술 후에는 통증 관리, 부종 관리, 보행 회복, 근력 회복, 균형 회복이
                중요합니다. 환자 상태와 수술 범위에 따라 회복 과정은 달라질 수 있습니다.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {recoveryLinks.map((item) => (
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
                용인·처인구 인근 족부·발목 수술 상담 안내
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted">
                새기준병원 관절센터는 경기도 용인시 처인구에 위치해 있으며, 용인·처인구를
                비롯해 수원, 오산, 이천, 안성, 경기 광주 등 인근 지역에서 발목 불안정성,
                무지외반, 아킬레스건 통증, 발목 관절염 등으로 내원하는 환자의 진료 상담을
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
                족부·발목 수술 여부는 정확한 평가 후 상담합니다
              </h2>
              <p className="mt-5 text-lg leading-8 text-brand-50">
                통증 위치, 발목 안정성, 보행, 하지정렬, 영상검사 결과를 함께 확인해 환자 상태에 맞는 치료 방향을 상담합니다.
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
