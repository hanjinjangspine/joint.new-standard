import Image from "next/image";
import Link from "next/link";
import { CalendarCheck, ExternalLink, MapPin } from "lucide-react";
import { doctorProfile } from "@/lib/data";

const heroBadges = [
  "족부·발목 진료",
  "무릎 통증",
  "어깨 통증",
  "손·손목·팔꿈치",
  "관절내시경",
  "인공관절",
  "재활 연계"
];

const heroActions = [
  {
    label: "진료 상담 문의",
    href: "https://new-standard.co.kr/bbs/board.php?bo_table=counsel",
    icon: CalendarCheck,
    primary: true
  },
  {
    label: "오시는 길·진료시간",
    href: "https://new-standard.co.kr/sub/r10/s1040.php",
    icon: MapPin
  },
  {
    label: "본원 홈페이지",
    href: "https://new-standard.co.kr",
    icon: ExternalLink
  }
];

export default function HeroSection() {
  return (
    <section className="overflow-hidden bg-[linear-gradient(135deg,#F8FAFB_0%,#EEF4F7_50%,#FFFFFF_100%)] px-4 py-5 sm:px-6 lg:px-8 lg:py-8">
      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1.06fr_0.94fr]">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.12em] text-brand-700">
            New Standard Hospital · Joint Center
          </p>
          <h1 className="max-w-3xl break-keep text-3xl font-extrabold leading-[1.16] tracking-[-0.01em] text-ink sm:text-4xl lg:text-[44px] xl:text-5xl 2xl:text-[56px]">
            새기준병원 관절센터
          </h1>
          <p className="mt-5 max-w-2xl break-keep text-base font-semibold leading-8 text-brand-800 sm:text-lg lg:text-xl lg:leading-9">
            아픈 부위와 생활의 불편을 먼저 듣고, 필요한 검사와 치료 순서를 함께 정합니다.
          </p>
          <p className="mt-4 max-w-2xl break-keep text-base leading-8 text-muted sm:text-lg">
            족부·발목, 무릎, 어깨, 손·손목·팔꿈치의 증상과 진찰 소견,
            필요한 영상검사 결과를 종합해 비수술 치료부터 수술과 회복까지 설명합니다.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:items-center">
            {heroActions.map((action) => {
              const Icon = action.icon;
              return (
                <Link
                  key={action.label}
                  href={action.href}
                  aria-label={`${action.label} 새 창으로 이동`}
                  className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-3 py-3 text-sm font-extrabold transition focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 sm:px-5 sm:text-base ${
                    action.primary
                      ? "col-span-2 bg-brand-800 text-white hover:bg-brand-900 sm:col-span-1"
                      : "border border-brand-200 bg-white text-brand-800 hover:bg-brand-50"
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon aria-hidden="true" size={19} />
                  {action.label}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="relative mx-auto hidden w-full max-w-[440px] sm:block lg:ml-auto">
          <div className="rounded-[26px] border border-brand-100 bg-white p-4 shadow-card sm:p-5">
            <div className="relative overflow-hidden rounded-2xl bg-brand-50">
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white to-transparent" />
              <Image
                src={doctorProfile.imageSrc}
                alt={doctorProfile.imageAlt}
                width={680}
                height={880}
                priority
                className="relative mx-auto h-auto max-h-[400px] w-full object-contain object-top"
              />
            </div>
            <div className="mt-3">
              <p className="text-lg font-extrabold text-ink sm:text-xl">{doctorProfile.name}</p>
              <p className="mt-1 text-sm font-bold text-brand-700 sm:text-base">{doctorProfile.title}</p>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {heroBadges.map((badge) => (
                <span
                  key={badge}
                  className="whitespace-nowrap rounded-full border border-brand-100 bg-brand-50 px-3 py-2 text-center text-xs font-extrabold text-brand-800 sm:text-sm"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
