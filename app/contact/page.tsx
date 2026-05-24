import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ClipboardList,
  ExternalLink,
  FileText,
  MapPin,
  Stethoscope
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import { createMetadata } from "@/lib/seo";

const heroActions = [
  {
    label: "온라인 상담",
    href: "https://new-standard.co.kr/bbs/board.php?bo_table=counsel"
  },
  {
    label: "오시는 길·진료시간",
    href: "https://new-standard.co.kr/sub/r10/s1040.php"
  },
  {
    label: "새기준병원 본원",
    href: "https://new-standard.co.kr"
  }
];

const preparationCards = [
  {
    title: "현재 통증 부위와 증상 기간",
    body: "통증이 언제부터 시작됐는지, 어느 부위가 가장 불편한지 정리하면 상담에 도움이 됩니다.",
    icon: Stethoscope
  },
  {
    title: "통증이 심해지는 자세나 동작",
    body: "계단, 보행, 팔 올리기, 신발 착용 등 통증이 심해지는 동작을 함께 확인합니다.",
    icon: ClipboardList
  },
  {
    title: "기존 X-ray, MRI, 초음파 등 영상자료",
    body: "이미 촬영한 영상자료가 있다면 진료 시 치료 방향을 상담하는 데 도움이 됩니다.",
    icon: FileText
  },
  {
    title: "이전 치료 기록",
    body: "주사치료, 약물치료, 물리치료, 수술 이력 등 기존 치료 반응을 함께 확인합니다.",
    icon: ClipboardList
  },
  {
    title: "복용 중인 약",
    body: "항응고제, 당뇨약, 혈압약 등 복용 약물은 진료와 치료 계획에 참고가 될 수 있습니다.",
    icon: FileText
  },
  {
    title: "수술력 또는 기존 질환",
    body: "기존 수술력, 내과 질환, 알레르기 등은 환자 상태에 맞는 상담을 위해 확인합니다.",
    icon: Stethoscope
  }
];

const symptomLinks = [
  { label: "족부·발목 통증", href: "/foot-ankle" },
  { label: "최소침습 족부·발목 수술", href: "/foot-ankle-mis" },
  { label: "무릎 통증", href: "/knee" },
  { label: "어깨 통증", href: "/shoulder" },
  { label: "관절 비수술 치료", href: "/injection-pain" },
  { label: "최소침습 관절수술", href: "/minimally-invasive-surgery" },
  { label: "회복관리", href: "/recovery" },
  { label: "김동희 원장 소개", href: "/doctor" }
];

const hospitalLinks = [
  {
    label: "온라인 상담",
    href: "https://new-standard.co.kr/bbs/board.php?bo_table=counsel"
  },
  {
    label: "진료시간·오시는 길",
    href: "https://new-standard.co.kr/sub/r10/s1040.php"
  },
  {
    label: "본원 의료진 소개",
    href: "https://new-standard.co.kr/sub/r10/s1020.php"
  },
  {
    label: "새기준병원 본원",
    href: "https://new-standard.co.kr"
  }
];

const bottomActions = [
  {
    label: "온라인 상담",
    href: "https://new-standard.co.kr/bbs/board.php?bo_table=counsel",
    external: true
  },
  {
    label: "진료시간·오시는 길",
    href: "https://new-standard.co.kr/sub/r10/s1040.php",
    external: true
  },
  {
    label: "관절센터 메인",
    href: "/",
    external: false
  }
];

export const metadata: Metadata = createMetadata({
  title: "관절센터 진료 상담·오시는 길 | 새기준병원 관절센터",
  description:
    "새기준병원 관절센터는 용인시 처인구에서 족부·발목, 무릎, 어깨, 손·손목 통증에 대해 진찰과 영상검사를 함께 확인해 치료 방향을 상담합니다. 온라인 상담과 오시는 길을 안내합니다.",
  path: "/contact",
  keywords: ["새기준병원 관절센터 상담", "용인 관절 진료", "새기준병원 오시는 길", "관절 통증 상담"]
});

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-line bg-[linear-gradient(135deg,#F8FAFB_0%,#EEF4F7_58%,#FFFFFF_100%)] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_360px] lg:items-center">
          <div>
            <Breadcrumb items={[{ label: "진료 상담·오시는 길" }]} />
            <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.12em] text-brand-600">
              Contact & Visit
            </p>
            <h1 className="mt-3 max-w-4xl text-3xl font-extrabold leading-[1.2] tracking-[-0.01em] text-ink sm:text-4xl lg:text-5xl">
              관절센터 진료 상담·오시는 길
            </h1>
            <p className="mt-5 max-w-3xl text-xl font-extrabold leading-8 text-brand-800 sm:text-2xl">
              관절 통증 상담은 증상과 검사자료를 함께 확인하면 도움이 됩니다
            </p>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-muted sm:text-xl">
              새기준병원 관절센터는 경기도 용인시 처인구에 위치해 있으며, 족부·발목, 무릎, 어깨,
              손·손목 통증에 대해 진찰과 영상검사 결과를 함께 확인해 치료 방향을 상담합니다.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {heroActions.map((action, index) => (
                <Link
                  key={action.href}
                  href={action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 py-3 text-base font-extrabold transition focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 ${
                    index === 0
                      ? "bg-brand-800 text-white hover:bg-brand-900"
                      : "border border-brand-200 bg-white text-brand-800 hover:bg-brand-50"
                  }`}
                >
                  {action.label}
                  <ExternalLink aria-hidden="true" size={18} />
                </Link>
              ))}
            </div>
          </div>
          <aside className="rounded-2xl border border-brand-100 bg-white p-6 shadow-card">
            <p className="text-sm font-extrabold text-brand-600">대표 정보</p>
            <div className="mt-4 space-y-4 text-base leading-7 text-muted">
              <p>
                <span className="font-extrabold text-ink">주소</span>
                <br />
                경기도 용인시 처인구 중부대로 1539
              </p>
              <p>
                <span className="font-extrabold text-ink">대표전화</span>
                <br />
                031-328-0333
              </p>
            </div>
            <p className="mt-5 text-base leading-7 text-muted">
              진료 일정은 상황에 따라 달라질 수 있으므로 방문 전 본원 안내를 확인해 주세요.
            </p>
          </aside>
        </div>
      </section>

      <main>
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-bold uppercase text-brand-600">Before Visit</p>
              <h2 className="text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
                진료 상담 전 준비하면 좋은 자료
              </h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {preparationCards.map((item) => {
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
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm font-bold uppercase text-brand-600">Care Pages</p>
              <h2 className="text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
                관절센터에서 상담할 수 있는 주요 증상
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted">
                통증 부위와 증상에 따라 관련 진료 페이지를 함께 확인할 수 있습니다.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {symptomLinks.map((item) => (
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
                새기준병원 본원 연결
              </h2>
              <p className="mt-4 text-lg leading-8 text-muted">
                관절센터 진료는 새기준병원 본원의 진료시간, 오시는 길, 온라인 상담, 의료진 소개와 함께 확인할 수 있습니다.
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
                관절 통증 상담은 정확한 정보 확인에서 시작합니다
              </h2>
              <p className="mt-5 text-lg leading-8 text-brand-50">
                증상, 진찰 소견, 영상검사 결과, 기존 치료 반응을 함께 확인해 환자 상태에 맞는 치료 방향을 상담합니다.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              {bottomActions.map((action, index) => (
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
