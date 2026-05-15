import Link from "next/link";
import { CalendarCheck, MapPin, MessageCircle, Phone } from "lucide-react";
import { ctaActions } from "@/lib/data";

const icons = [Phone, CalendarCheck, MessageCircle, MapPin];

export default function MobileBottomCTA() {
  return (
    <nav
      aria-label="모바일 빠른 상담 메뉴"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-white shadow-soft md:hidden"
    >
      <div className="grid grid-cols-4">
        {ctaActions.map((action, index) => {
          const Icon = icons[index] || Phone;
          return (
            <Link
              key={action.label}
              href={action.href}
              aria-label={action.ariaLabel}
              className="flex h-[72px] flex-col items-center justify-center gap-1 text-xs font-bold text-brand-800"
            >
              <Icon aria-hidden="true" size={21} />
              <span>{action.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
