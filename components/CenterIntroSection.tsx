import Link from "next/link";
import { ArrowRight, ClipboardCheck, Footprints, MapPinned, Stethoscope } from "lucide-react";

const introItems = [
  {
    title: "정확한 진단",
    body: "통증 위치, 움직임 제한, 보행, 근력, 진찰 소견을 함께 확인합니다.",
    icon: Footprints
  },
  {
    title: "영상검사 확인",
    body: "X-ray, MRI 등 영상 소견과 실제 증상이 일치하는지 살펴봅니다.",
    icon: Stethoscope
  },
  {
    title: "단계적 치료 상담",
    body: "약물·주사·재활치료부터 관절내시경·인공관절 등 수술적 치료 가능성까지 환자 상태에 따라 상담합니다.",
    icon: ClipboardCheck
  },
  {
    title: "재활 연계",
    body: "수술 전후 통증, 보행, 근력, 일상 복귀 과정을 함께 확인합니다.",
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
              Joint Care Principle
            </p>
            <h2 className="mt-3 break-keep text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
              수술부터 결정하지 않습니다
            </h2>
            <p className="mt-5 text-lg leading-8 text-muted sm:text-xl">
              관절 통증은 같은 부위라도 원인이 다를 수 있습니다. 새기준병원 관절센터는
              통증 위치, 움직임 제한, 근력, 보행, 영상 소견을 함께 확인해 비수술 치료와
              수술적 치료 가능성을 단계적으로 상담합니다.
            </p>
            <p className="mt-4 text-base leading-7 text-muted">
              수술 여부는 진료와 검사 결과를 종합해 결정됩니다. 모든 환자에게 같은 치료가
              적용되지는 않습니다.
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
