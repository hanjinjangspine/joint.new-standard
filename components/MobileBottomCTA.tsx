import Link from "next/link";
import { BookOpenText, CalendarCheck, MapPin, Phone } from "lucide-react";
import { ctaActions } from "@/lib/data";

const mobileActions = [
  ctaActions[0],
  ctaActions[1],
  {
    label: "질환별 안내",
    href: "/patient-guides",
    ariaLabel: "관절 질환별 안내 보기"
  },
  ctaActions[3]
];
const icons = [Phone, CalendarCheck, BookOpenText, MapPin];
const shortLabels = ["전화", "예약", "질환찾기", "길찾기"];

export default function MobileBottomCTA() {
  return (
    <nav
      aria-label="모바일 빠른 상담 메뉴"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-white pb-[env(safe-area-inset-bottom)] shadow-soft md:hidden"
    >
      <div className="grid grid-cols-4">
        {mobileActions.map((action, index) => {
          const Icon = icons[index] || Phone;
          const isExternal = action.href.startsWith("http");
          return (
            <Link
              key={action.label}
              href={action.href}
              aria-label={action.ariaLabel}
              className="flex h-[72px] flex-col items-center justify-center gap-1 text-xs font-bold text-brand-800"
              target={isExternal ? "_blank" : undefined}
              rel={isExternal ? "noopener noreferrer" : undefined}
            >
              <Icon aria-hidden="true" size={21} />
              <span>{shortLabels[index] || action.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
