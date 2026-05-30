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
import { officialPatientLinks } from "@/lib/data";
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

const specialtyItems = [
  "족부·발목 질환",
  "무릎 통증",
  "어깨 통증",
  "손·손목 질환",
  "하지정렬·보행균형",
  "관절내시경",
  "인공관절",
  "관절 비수술 치료"
];

const assessmentCards = [
  {
    title: "통증 위치",
    body: "통증이 어느 관절과 구조물에서 시작되는지 진찰로 확인합니다.",
    icon: Stethoscope
  },
  {
    title: "관절 운동범위",
    body: "관절을 굽히고 펴는 범위, 움직임 제한, 걸림감을 함께 살핍니다.",
    icon: Activity
  },
  {
    title: "근력과 보행",
    body: "근력저하, 보행 불편, 균형 문제를 확인해 치료 방향을 상담합니다.",
    icon: Footprints
  },
  {
    title: "하지정렬",
    body: "무릎, 발목, 고관절로 이어지는 정렬과 체중 부하 양상을 함께 확인합니다.",
    icon: Footprints
  },
  {
    title: "X-ray·MRI 등 영상검사",
    body: "영상검사 결과와 실제 증상이 일치하는지 확인합니다.",
    icon: ClipboardCheck
  },
  {
    title: "기존 치료 반응과 생활 제한",
    body: "약물·주사·재활치료 반응과 일상생활 제한 정도를 함께 평가합니다.",
    icon: ClipboardCheck
  }
];

const careLinks = [
  { label: "족부·발목 통증 진료", href: "/foot-ankle" },
  { label: "최소침습 족부·발목 수술", href: "/foot-ankle-mis" },
  { label: "무릎 통증 진료", href: "/knee" },
  { label: "어깨 통증 진료", href: "/shoulder" },
  { label: "관절 비수술 치료", href: "/injection-pain" },
  { label: "최소침습 관절수술", href: "/minimally-invasive-surgery" },
  { label: "회복관리", href: "/recovery" }
];

const hospitalLinks = [
  { label: "새기준병원 본원", href: "https://new-standard.co.kr" },
  { label: "본원 의료진 소개", href: "https://new-standard.co.kr/sub/r10/s1020.php" },
  { label: "본원 무릎 통증 안내", href: "https://new-standard.co.kr/sub/r50/knee-pain.php" },
  { label: "본원 족부·발목 클리닉", href: "https://new-standard.co.kr/sub/r50/foot-ankle-clinic.php" },
  { label: "오시는 길·진료시간", href: "https://new-standard.co.kr/sub/r10/s1040.php" },
  { label: "온라인 상담", href: "https://new-standard.co.kr/bbs/board.php?bo_table=counsel" }
];

export const metadata: Metadata = createMetadata({
  title: "김동희 원장 | 새기준병원 관절센터",
  description:
    "새기준병원 관절센터 김동희 원장은 족부·발목, 무릎, 어깨, 손·손목 질환을 진찰과 영상검사를 함께 확인해 비수술 치료와 수술적 치료 방향을 상담합니다.",
  path: "/doctor",
  keywords: ["김동희 원장", "새기준병원 관절센터", "용인 정형외과", "족부 발목", "무릎 어깨 손목 통증"]
});

export default function DoctorPage() {
  return (
    <>
      <section className="border-b border-line bg-[linear-gradient(135deg,#F8FAFB_0%,#EEF4F7_58%,#FFFFFF_100%)] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_360px] lg:items-center">
          <div>
            <Breadcrumb items={[{ label: "김동희 원장" }]} />
            <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.12em] text-brand-600">
              Orthopedic Surgeon
            </p>
            <h1 className="mt-3 max-w-4xl text-3xl font-extrabold leading-[1.2] tracking-[-0.01em] text-ink sm:text-4xl lg:text-5xl">
              정형외과 전문의 김동희 원장
            </h1>
            <p className="mt-5 max-w-3xl text-xl font-extrabold leading-8 text-brand-800 sm:text-2xl">
              족부·발목부터 무릎·어깨·손·손목 통증까지 진료합니다
            </p>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-muted sm:text-xl">
              김동희 원장은 족부·발목, 무릎, 어깨, 손·손목 질환을 진료하며, 환자의 증상과
              진찰 소견, X-ray·MRI 등 영상검사 결과를 함께 확인해 비수술 치료와 수술적 치료
              방향을 상담합니다.
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
            <p className="text-sm font-extrabold text-brand-600">진료 분야</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["족부·발목", "무릎", "어깨", "손·손목", "하지정렬", "관절 치료"].map((item) => (
                <span
                  key={item}
                  className="whitespace-nowrap rounded-full border border-brand-100 bg-brand-50 px-3 py-2 text-sm font-bold text-brand-800"
                >
                  {item}
                </span>
              ))}
            </div>
            <p className="mt-5 text-base leading-7 text-muted">
              진찰과 영상검사 결과를 함께 확인해 환자 상태에 맞는 치료 방향을 상담합니다.
            </p>
          </aside>
        </div>
      </section>

      <main>
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <p className="mb-3 text-sm font-bold uppercase text-brand-600">Clinical Focus</p>
                <h2 className="text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
                  주요 진료 분야
                </h2>
                <p className="mt-4 text-lg leading-8 text-muted">
                  통증 부위와 생활 불편, 진찰 소견, 영상검사 결과를 함께 확인해 치료 방향을 상담합니다.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {specialtyItems.map((item) => (
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
              <p className="mb-3 text-sm font-bold uppercase text-brand-600">Assessment</p>
              <h2 className="text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
                진료 시 함께 확인하는 요소
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted">
                같은 관절 통증이라도 원인은 다를 수 있어 증상, 움직임, 보행, 영상검사, 기존 치료 반응을 함께 확인합니다.
              </p>
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

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[28px] border border-brand-100 bg-white p-6 shadow-sm sm:p-8">
            <p className="mb-3 text-sm font-bold uppercase text-brand-600">Treatment Decision</p>
            <h2 className="text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
              수술부터 결정하지 않습니다
            </h2>
            <p className="mt-4 max-w-5xl text-lg leading-8 text-muted">
              관절 통증은 같은 부위라도 원인이 다를 수 있습니다. 김동희 원장은 진찰과 영상검사를 함께
              확인해 약물치료, 주사치료, 체외충격파, 재활치료 등 비수술 치료 가능성과 관절내시경,
              인공관절 등 수술적 치료 가능성을 환자 상태에 따라 상담합니다.
            </p>
          </div>
        </section>

        <section className="bg-calm px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm font-bold uppercase text-brand-600">Care Pages</p>
              <h2 className="text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
                부위별 진료 연결
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted">
                증상과 통증 부위에 따라 관련 진료 페이지에서 자세한 안내를 확인할 수 있습니다.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {careLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex min-h-16 items-center justify-between rounded-2xl border border-line bg-white p-5 font-extrabold text-ink shadow-sm transition hover:border-brand-200 hover:bg-brand-50"
                >
                  {item.label}
                  <ArrowRight aria-hidden="true" size={18} className="text-brand-700 transition group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 rounded-[28px] border border-brand-100 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm font-bold uppercase text-brand-600">Official Hospital Links</p>
              <h2 className="text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
                새기준병원 본원과 함께 보는 진료
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted">
                관절센터 진료는 새기준병원 본원의 영상검사, 재활치료, 입퇴원 안내, 오시는 길 정보와 함께 확인할 수 있습니다.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {hospitalLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-16 items-center justify-between rounded-2xl border border-line bg-calm p-5 font-extrabold text-ink transition hover:border-brand-200 hover:bg-brand-50"
                >
                  {item.label}
                  <ExternalLink aria-hidden="true" size={18} className="text-brand-700 transition group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-calm px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[28px] border border-line bg-white p-6 shadow-sm sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
              <MapPin aria-hidden="true" size={24} />
            </div>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-ink">
              용인·처인구 인근 관절 진료 안내
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted">
              새기준병원 관절센터는 경기도 용인시 처인구에 위치해 있으며, 용인·처인구를 비롯해
              수원, 오산, 이천, 안성, 경기 광주 등 인근 지역에서 족부·발목, 무릎, 어깨, 손·손목
              통증으로 내원하는 환자의 진료 상담을 받을 수 있습니다. 새기준병원이 해당 지역에 위치한 것은
              아니며, 환자 상태와 검사 결과에 따라 치료 방향을 상담합니다.
            </p>
          </div>
        </section>

        <section className="bg-[linear-gradient(135deg,#123247_0%,#1D4258_58%,#2E5870_100%)] px-4 py-16 text-white sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-[28px] border border-white/10 bg-white/5 p-6 lg:flex-row lg:items-center lg:justify-between lg:p-8">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
                관절 통증은 정확한 평가 후 치료 방향을 상담합니다
              </h2>
              <p className="mt-5 text-lg leading-8 text-brand-50">
                증상, 진찰 소견, 영상검사 결과, 기존 치료 반응을 함께 확인해 환자 상태에 맞는 치료 방향을 상담합니다.
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
