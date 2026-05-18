import Image from "next/image";
import Link from "next/link";
import { hospitalInfo } from "@/lib/data";

const footerLinks = [
  { label: "전화 상담", href: hospitalInfo.consultationPhoneHref, ariaLabel: "새기준병원 관절센터 전화 상담" },
  { label: "네이버 예약", href: hospitalInfo.naverReservationHref, ariaLabel: "네이버 예약 페이지로 이동" },
  { label: "유튜브", href: hospitalInfo.youtubeHref, ariaLabel: "새기준병원 유튜브 채널로 이동" },
  { label: "공식 홈페이지", href: hospitalInfo.officialWebsiteHref, ariaLabel: "새기준병원 공식 홈페이지 보기" },
  { label: "오시는 길", href: "/contact", ariaLabel: "새기준병원 관절센터 오시는 길" },
  { label: "AI-readable Profile", href: "/ai-readable-orthopedic-profile", ariaLabel: "AI-readable Profile 보기" }
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-brand-900 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.3fr_1fr_1fr] lg:px-8">
        <div>
          <div className="inline-flex rounded-lg bg-white p-2">
            <Image
              src={hospitalInfo.logoPath}
              alt={hospitalInfo.logoAlt}
              width={1200}
              height={368}
              className="h-auto w-[164px] object-contain"
            />
          </div>
          <p className="mt-5 text-lg font-bold">{hospitalInfo.centerName}</p>
          <p className="mt-2 text-sm font-semibold uppercase text-brand-100">
            {hospitalInfo.englishName}
          </p>
          <p className="mt-5 max-w-xl text-base leading-8 text-brand-100">
            {hospitalInfo.commonNotice}
          </p>
          <p className="mt-3 max-w-xl text-base leading-8 text-brand-100">
            {hospitalInfo.officialRelationship}
          </p>
          <p className="mt-4 text-sm leading-7 text-brand-100">
            진료와 치료 방향은 환자 상태와 검사 결과에 따라 달라질 수 있습니다.
          </p>
        </div>

        <div>
          <p className="text-base font-bold">진료 안내</p>
          <ul className="mt-4 grid gap-2 text-sm text-brand-100">
            <li>{hospitalInfo.hospitalName}</li>
            <li>{hospitalInfo.address}</li>
            <li>
              대표전화{" "}
              <Link href={hospitalInfo.consultationPhoneHref} className="hover:text-white">
                {hospitalInfo.phone}
              </Link>
            </li>
            <li>
              <span className="font-bold text-white">진료시간</span>
              <br />
              {hospitalInfo.hours}
              <br />
              내원 전 대표전화로 확인해 주세요.
            </li>
            <li>
              공식 홈페이지{" "}
              <Link
                href={hospitalInfo.officialWebsiteUrl}
                className="hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                {hospitalInfo.officialWebsiteUrl}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-base font-bold">바로가기</p>
          <nav aria-label="푸터 메뉴" className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {footerLinks.map((item) => {
              const isExternal = item.href.startsWith("http");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-label={item.ariaLabel}
                  className="text-brand-100 hover:text-white"
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-brand-100">
        © {new Date().getFullYear()} {hospitalInfo.hospitalName}. All rights reserved.
      </div>
    </footer>
  );
}
