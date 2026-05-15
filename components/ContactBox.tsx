import Link from "next/link";
import { CalendarCheck, Clock, ExternalLink, MapPin, MessageCircle, Phone } from "lucide-react";
import { hospitalInfo } from "@/lib/data";

export default function ContactBox() {
  const rows = [
    { icon: MapPin, label: "병원명", value: hospitalInfo.hospitalName },
    { icon: MapPin, label: "센터명", value: hospitalInfo.centerName },
    { icon: MapPin, label: "주소", value: hospitalInfo.address },
    { icon: Phone, label: "전화", value: hospitalInfo.phone },
    { icon: ExternalLink, label: "공식 홈페이지", value: hospitalInfo.officialWebsiteUrl },
    { icon: Clock, label: "진료시간", value: hospitalInfo.hours }
  ];

  return (
    <section id="contact-info" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-lg border border-line bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-ink">예약문의</h2>
          <div className="mt-6 grid gap-4">
            {rows.map((row) => {
              const Icon = row.icon;
              return (
                <div key={row.label} className="flex gap-4 rounded-lg bg-brand-50 p-4">
                  <Icon aria-hidden="true" className="mt-1 shrink-0 text-brand-700" size={22} />
                  <div>
                    <p className="font-bold text-ink">{row.label}</p>
                    <p className="mt-1 text-base leading-7 text-muted">{row.value}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <Link
              href={hospitalInfo.consultationPhoneHref}
              aria-label="새기준병원 관절센터 전화 상담"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-brand-800 px-4 py-3 font-bold text-white hover:bg-brand-900"
            >
              <Phone aria-hidden="true" size={19} />
              전화 상담
            </Link>
            <Link
              href={hospitalInfo.officialWebsiteUrl}
              aria-label="새기준병원 공식 홈페이지 보기"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-brand-200 px-4 py-3 font-bold text-brand-800 hover:bg-brand-50"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink aria-hidden="true" size={19} />
              공식 홈페이지 보기
            </Link>
            <Link
              href={hospitalInfo.naverReservationHref}
              aria-label="네이버 예약 placeholder 링크"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-brand-200 px-4 py-3 font-bold text-brand-800 hover:bg-brand-50"
            >
              <CalendarCheck aria-hidden="true" size={19} />
              네이버 예약
            </Link>
            <Link
              href={hospitalInfo.kakaoHref}
              aria-label="카카오 문의 placeholder 링크"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-brand-200 px-4 py-3 font-bold text-brand-800 hover:bg-brand-50"
            >
              <MessageCircle aria-hidden="true" size={19} />
              카카오 문의
            </Link>
            <Link
              href="#contact-map"
              aria-label="새기준병원 관절센터 오시는 길 지도 영역으로 이동"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-brand-200 px-4 py-3 font-bold text-brand-800 hover:bg-brand-50 sm:col-span-2"
            >
              <MapPin aria-hidden="true" size={19} />
              오시는 길
            </Link>
          </div>
          <div className="mt-5 rounded-lg bg-brand-50 p-4 text-sm leading-7 text-muted">
            <p>네이버 예약 링크: {hospitalInfo.naverReservationUrl}</p>
            <p>카카오 문의 링크: {hospitalInfo.kakaoUrl}</p>
            <p>공식 홈페이지 링크: {hospitalInfo.officialWebsiteUrl}</p>
          </div>
        </div>

        <div id="contact-map" className="rounded-lg border border-line bg-brand-50 p-6">
          <h2 className="text-2xl font-bold text-ink">오시는 길</h2>
          <div className="mt-6 flex min-h-[320px] items-center justify-center rounded-lg border border-dashed border-brand-200 bg-white p-8 text-center">
            <div>
              <MapPin aria-hidden="true" className="mx-auto text-brand-700" size={38} />
              <p className="mt-4 text-xl font-bold text-ink">지도 영역</p>
              <p className="mt-3 text-base leading-7 text-muted">
                추후 네이버 지도 또는 카카오맵 iframe으로 교체할 수 있습니다.
              </p>
              <p className="mt-2 text-base font-semibold text-brand-800">{hospitalInfo.address}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
