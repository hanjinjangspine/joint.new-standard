import Image from "next/image";
import Link from "next/link";
import { CalendarCheck, MapPin, Phone, Youtube } from "lucide-react";
import { ctaActions, doctorProfile, hospitalInfo } from "@/lib/data";

const heroBadges = [
  "족부·발목 클리닉",
  "발목 불안정성",
  "족저근막염",
  "무지외반증",
  "무릎·어깨 통증",
  "보행 상태 확인"
];

const iconMap = {
  "전화 상담": Phone,
  "네이버 예약": CalendarCheck,
  "유튜브": Youtube,
  "오시는 길": MapPin
};

export default function HeroSection() {
  const primaryActions = ctaActions.slice(0, 2);
  const supportActions = ctaActions.slice(2);

  return (
    <section className="overflow-hidden bg-[linear-gradient(135deg,#F8FAFB_0%,#EEF4F7_50%,#FFFFFF_100%)] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1.06fr_0.94fr]">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.12em] text-brand-700">
            New Standard Hospital Joint & Foot-Ankle Center
          </p>
          <h1 className="max-w-3xl break-keep text-3xl font-extrabold leading-[1.16] tracking-[-0.01em] text-ink sm:text-4xl lg:text-[44px] xl:text-5xl 2xl:text-[56px]">
            족부·발목을 중심으로{" "}
            <br />
            무릎·어깨 관절 통증까지 단계적으로 진료합니다.
          </h1>
          <p className="mt-5 max-w-2xl break-keep text-base font-semibold leading-8 text-brand-800 sm:text-lg lg:text-xl lg:leading-9">
            새기준병원 관절센터는 족부·발목 질환을 중심으로 무릎, 어깨, 관절 통증까지
            진료합니다. 증상, 영상검사, 보행 상태, 생활 기능을 종합해 비수술 치료부터
            필요한 경우 수술 치료까지 단계적으로 판단합니다.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            {primaryActions.map((action, index) => {
              const Icon = iconMap[action.label as keyof typeof iconMap] || Phone;
              const isExternal = action.href.startsWith("http");
              return (
                <Link
                  key={action.label}
                  href={action.href}
                  aria-label={action.ariaLabel}
                  className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 py-3 text-base font-extrabold transition focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 ${
                    index === 0
                      ? "bg-brand-800 text-white hover:bg-brand-900"
                      : "border border-brand-200 bg-white text-brand-800 hover:bg-brand-50"
                  }`}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                >
                  <Icon aria-hidden="true" size={19} />
                  {action.label}
                </Link>
              );
            })}
            <div className="flex flex-wrap items-center gap-3 sm:pl-1">
              {supportActions.map((action) => {
                const Icon = iconMap[action.label as keyof typeof iconMap] || MapPin;
                const isExternal = action.href.startsWith("http");
                return (
                  <Link
                    key={action.label}
                    href={action.href}
                    className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md px-2 py-2 text-sm font-extrabold text-brand-700 hover:text-brand-900"
                    aria-label={action.ariaLabel}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                  >
                    <Icon aria-hidden="true" size={17} />
                    {action.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[440px] lg:ml-auto">
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
