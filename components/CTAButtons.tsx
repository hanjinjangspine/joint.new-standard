import Link from "next/link";
import { CalendarCheck, MapPin, Phone, Youtube } from "lucide-react";
import { ctaActions } from "@/lib/data";

const iconMap = {
  "전화 상담": Phone,
  "네이버 예약": CalendarCheck,
  "유튜브": Youtube,
  "오시는 길": MapPin
};

type CTAButtonsProps = {
  variant?: "primary" | "light";
  className?: string;
};

export default function CTAButtons({ variant = "primary", className = "" }: CTAButtonsProps) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {ctaActions.map((action, index) => {
        const Icon = iconMap[action.label as keyof typeof iconMap] || CalendarCheck;
        const isExternal = action.href.startsWith("http");
        const isPrimary = index === 0;
        const baseClass =
          "inline-flex min-h-12 items-center justify-center gap-2 rounded-md px-5 py-3 text-base font-semibold transition focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2";
        const colorClass =
          variant === "light"
            ? isPrimary
              ? "bg-white text-brand-800 hover:bg-brand-50"
              : "border border-white/45 text-white hover:bg-white/10"
            : isPrimary
              ? "bg-brand-700 text-white hover:bg-brand-800"
              : "border border-brand-200 bg-white text-brand-800 hover:bg-brand-50";

        return (
          <Link
            key={action.label}
            href={action.href}
            aria-label={action.ariaLabel}
            className={`${baseClass} ${colorClass}`}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
          >
            <Icon aria-hidden="true" size={19} strokeWidth={2.1} />
            <span>{action.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
