"use client";

import { useState } from "react";
import Link from "next/link";
import {
  CalendarCheck,
  Check,
  Copy,
  ExternalLink,
  MapPin,
  Navigation,
  Phone
} from "lucide-react";
import { hospitalInfo } from "@/lib/data";

const locationActions = [
  {
    label: "네이버 지도에서 보기",
    href: hospitalInfo.naverMapUrl,
    ariaLabel: "네이버 지도에서 새기준병원 위치 보기",
    icon: Navigation,
    external: true
  },
  {
    label: "Google 지도에서 보기",
    href: hospitalInfo.googleMapUrl,
    ariaLabel: "Google 지도에서 새기준병원 위치 보기",
    icon: ExternalLink,
    external: true
  },
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
  }
];

export default function LocationGuideCard() {
  const [copied, setCopied] = useState(false);

  async function copyAddress() {
    try {
      await navigator.clipboard.writeText(hospitalInfo.address);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="mt-6 rounded-2xl border border-brand-100 bg-white p-5 shadow-sm sm:p-7">
      <div className="rounded-2xl bg-brand-50 p-6 text-center sm:p-8">
        <MapPin aria-hidden="true" className="mx-auto text-brand-700" size={44} />
        <p className="mt-5 text-sm font-extrabold uppercase tracking-[0.12em] text-brand-700">
          Location
        </p>
        <h3 className="mt-2 text-2xl font-extrabold text-ink">{hospitalInfo.centerName}</h3>
        <p className="mt-3 text-xl font-extrabold leading-8 text-brand-900">
          {hospitalInfo.address}
        </p>
        <p className="mt-2 text-base font-bold text-brand-800">대표전화 {hospitalInfo.phone}</p>
      </div>

      <div className="mt-6 space-y-3 text-base leading-8 text-muted">
        <p>
          {hospitalInfo.centerName}는 {hospitalInfo.hospitalName}에서 운영하는
          무릎·어깨·족부·발목 치료 전문 안내 페이지입니다.
        </p>
        <p>
          네이버 지도 또는 Google 지도에서 새기준병원 위치를 확인하실 수 있습니다.
          내원 전 진료 일정은 대표전화 {hospitalInfo.phone}으로 확인해 주세요.
        </p>
        <p className="font-semibold text-brand-900">
          용인 정형외과, 처인구 정형외과, 용인 족부·발목, 용인 무릎통증,
          용인 어깨통증, 족부·발목 최소침습수술, 수술 후 보행 회복관리 안내
        </p>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {locationActions.map((action, index) => {
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
        <button
          type="button"
          onClick={copyAddress}
          aria-label="새기준병원 주소 복사"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-brand-200 bg-white px-4 py-3 text-sm font-extrabold text-brand-800 transition hover:bg-brand-50 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
        >
          {copied ? <Check aria-hidden="true" size={18} /> : <Copy aria-hidden="true" size={18} />}
          주소 복사
        </button>
      </div>

      <p
        aria-live="polite"
        className="mt-4 min-h-6 text-center text-sm font-bold text-emerald-700"
      >
        {copied ? "주소가 복사되었습니다." : ""}
      </p>
    </div>
  );
}
