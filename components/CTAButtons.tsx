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
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {ctaActions.map((action, index) => {
        const Icon = iconMap[action.label as keyof typeof iconMap] || CalendarCheck;
        const isExternal = action.href.startsWith("http");
        const sizeClass =
          index < 2
            ? "min-h-12 px-5 py-3 text-base"
            : "min-h-10 px-3 py-2 text-sm";
        const colorClass =
          variant === "light"
            ? index === 0
              ? "bg-white text-brand-800 hover:bg-brand-50"
              : index === 1
                ? "border border-white/55 bg-white/8 text-white hover:bg-white/14"
                : "text-brand-50 hover:text-white"
            : index === 0
              ? "bg-brand-800 text-white hover:bg-brand-900"
              : index === 1
                ? "border border-brand-300 bg-white text-brand-800 hover:bg-brand-50"
                : "text-brand-700 hover:text-brand-900";
        const baseClass =
          "inline-flex items-center justify-center gap-2 rounded-md font-bold transition focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2";

        return (
          <Link
            key={action.label}
            href={action.href}
            aria-label={action.ariaLabel}
            className={`${baseClass} ${sizeClass} ${colorClass}`}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
          >
            <Icon aria-hidden="true" size={index < 2 ? 19 : 17} strokeWidth={2.1} />
            <span>{action.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
