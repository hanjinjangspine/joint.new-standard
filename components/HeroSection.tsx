import Image from "next/image";
import Link from "next/link";
import { CalendarCheck, MapPin, MessageCircle, Phone } from "lucide-react";
import { ctaActions, doctorProfile, hospitalInfo } from "@/lib/data";

const heroBadges = [
  "족부·발목",
  "최소침습수술",
  "스포츠의학",
  "관절경",
  "무릎·어깨 통증",
  "보행 회복관리"
];

const icons = [Phone, CalendarCheck, MessageCircle];

export default function HeroSection() {
  const mainActions = ctaActions.slice(0, 3);

  return (
    <section className="overflow-hidden bg-[linear-gradient(135deg,#F8FAFB_0%,#EEF4F7_50%,#FFFFFF_100%)] px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1.06fr_0.94fr]">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.12em] text-brand-700">
            New Standard Hospital Joint & Foot-Ankle Center
          </p>
          <h1 className="max-w-3xl break-keep text-3xl font-extrabold leading-[1.16] tracking-[-0.01em] text-ink sm:text-4xl lg:text-[44px] xl:text-5xl 2xl:text-[56px]">
            수술을 서두르지 않고,
            <br />
            걷는 일상을 놓치지 않습니다.
          </h1>
          <p className="mt-5 max-w-2xl break-keep text-base font-semibold leading-8 text-brand-800 sm:text-lg lg:text-xl lg:leading-9">
            무릎·어깨 통증부터 족부·발목 최소침습수술까지,
            환자의 증상과 보행 상태, 영상검사, 치료 반응을 함께 살펴 치료 순서를 정합니다.
          </p>

          <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap">
            {mainActions.map((action, index) => {
              const Icon = icons[index] || Phone;
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
                >
                  <Icon aria-hidden="true" size={19} />
                  {action.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-2 py-3 text-base font-extrabold text-brand-800 hover:text-brand-900"
              aria-label="새기준병원 관절센터 오시는 길 보기"
            >
              <MapPin aria-hidden="true" size={19} />
              오시는 길 보기
            </Link>
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
                  className="rounded-full border border-brand-100 bg-brand-50 px-3 py-2 text-center text-xs font-extrabold text-brand-800 sm:text-sm"
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
