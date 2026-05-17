import Link from "next/link";
import { ArrowRight, ClipboardCheck, Footprints, MapPinned, Stethoscope } from "lucide-react";

const introItems = [
  {
    title: "중심 진료",
    body: "족부·발목 질환을 중심으로 발목 염좌, 만성 발목 불안정성, 족저근막염, 무지외반증, 아킬레스건 질환을 살핍니다.",
    icon: Footprints
  },
  {
    title: "함께 보는 관절 통증",
    body: "무릎 관절염, 반월상연골판 손상, 십자인대 손상, 회전근개 질환, 오십견, 석회성 건염을 함께 안내합니다.",
    icon: Stethoscope
  },
  {
    title: "치료 판단 기준",
    body: "증상, 영상검사, 보행 상태, 생활 기능을 종합해 약물·물리·주사·도수치료부터 필요한 경우 수술 치료까지 단계적으로 판단합니다.",
    icon: ClipboardCheck
  },
  {
    title: "예약과 내원",
    body: "진료시간, 대표전화, 네이버 예약, 오시는 길은 한 곳에서 확인할 수 있도록 정리했습니다.",
    icon: MapPinned
  }
];

export default function CenterIntroSection() {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 rounded-[28px] border border-brand-100 bg-white p-6 shadow-sm lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-brand-700">
              Joint & Foot-Ankle Center
            </p>
            <h2 className="mt-3 break-keep text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
              새기준병원 관절센터 소개
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted sm:text-xl">
              새기준병원 관절센터는 족부·발목 클리닉을 중심에 두고
              무릎·어깨·관절 통증 진료 정보를 함께 안내합니다. 환자의 통증 부위와
              생활 기능, 보행 상태를 함께 확인하는 흐름으로 구성했습니다.
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-md bg-brand-800 px-5 py-3 font-bold text-white transition hover:bg-brand-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
              aria-label="새기준병원 관절센터 진료시간과 오시는 길 확인"
            >
              진료시간·오시는 길 확인
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {introItems.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-2xl border border-line bg-calm p-5">
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
      </div>
    </section>
  );
}
