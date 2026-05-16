"use client";

import Link from "next/link";
import { CalendarCheck, MapPin, Navigation, Phone, Youtube } from "lucide-react";
import { hospitalInfo } from "@/lib/data";

type GoogleMapEmbedProps = {
  src?: string;
};

const mapActions = [
  {
    label: "전화 상담",
    href: hospitalInfo.consultationPhoneHref,
    ariaLabel: "새기준병원 관절센터 전화 상담",
    icon: Phone
  },
  {
    label: "네이버 예약",
    href: hospitalInfo.naverReservationHref,
    ariaLabel: "네이버 예약 페이지로 이동",
    icon: CalendarCheck,
    external: true
  },
  {
    label: "네이버 지도 길찾기",
    href: hospitalInfo.naverMapUrl,
    ariaLabel: "네이버 지도에서 새기준병원 길찾기",
    icon: Navigation,
    external: true
  },
  {
    label: "Google 지도에서 보기",
    href: hospitalInfo.googleMapUrl,
    ariaLabel: "Google 지도에서 새기준병원 위치 보기",
    icon: MapPin,
    external: true
  },
  {
    label: "유튜브",
    href: hospitalInfo.youtubeHref,
    ariaLabel: "새기준병원 유튜브 채널로 이동",
    icon: Youtube,
    external: true
  }
];

export default function GoogleMapEmbed({ src }: GoogleMapEmbedProps) {
  const hasMap = Boolean(src);

  return (
    <div className="mt-6">
      <div className="overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-sm">
        {hasMap ? (
          <iframe
            title="새기준병원 위치 Google 지도"
            src={src}
            className="h-[320px] w-full border-0 lg:h-[420px]"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        ) : (
          <div className="flex min-h-[320px] items-center justify-center bg-brand-50 p-8 text-center lg:min-h-[420px]">
            <div className="max-w-xl">
              <MapPin aria-hidden="true" className="mx-auto text-brand-700" size={42} />
              <p className="mt-4 text-xl font-extrabold text-ink">Google 지도 설정이 필요합니다.</p>
              <p className="mt-3 text-base leading-7 text-muted">
                지도를 불러오지 못했습니다. 아래 버튼을 통해 네이버 지도 또는 Google
                지도에서 위치를 확인해 주세요.
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
        {mapActions.map((action, index) => {
          const Icon = action.icon;
          const isPrimary = index === 0;
          return (
            <Link
              key={action.label}
              href={action.href}
              aria-label={action.ariaLabel}
              className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-4 py-3 text-sm font-extrabold transition focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 ${
                isPrimary
                  ? "bg-brand-800 text-white hover:bg-brand-900"
                  : "border border-brand-200 bg-white text-brand-800 hover:bg-brand-50"
              }`}
              target={action.external ? "_blank" : undefined}
              rel={action.external ? "noopener noreferrer" : undefined}
            >
              <Icon aria-hidden="true" size={18} />
              {action.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
