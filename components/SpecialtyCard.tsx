import Link from "next/link";
import { Activity, ArrowRight, CircleDot, ClipboardCheck, Footprints, RefreshCw, Syringe } from "lucide-react";

type SpecialtyCardProps = {
  title: string;
  description: string;
  href: string;
  icon: string;
  featured?: boolean;
  tone?: "info" | "decision" | "recovery" | "note";
};

const toneClasses = {
  info: "border-[#D5E3E8] bg-surface-info",
  decision: "border-[#D7E4DA] bg-surface-decision",
  recovery: "border-[#E7DED3] bg-surface-recovery",
  note: "border-[#E1DEE6] bg-surface-note"
};

const iconMap = {
  foot: Footprints,
  ankle: Footprints,
  knee: CircleDot,
  shoulder: Activity,
  injection: Syringe,
  surgery: ClipboardCheck,
  recovery: RefreshCw
};

export default function SpecialtyCard({
  title,
  description,
  href,
  icon,
  featured = false,
  tone = "info"
}: SpecialtyCardProps) {
  const Icon = iconMap[icon as keyof typeof iconMap] || Activity;

  return (
    <Link
      href={href}
      className={`group flex min-h-[220px] flex-col justify-between rounded-2xl border p-6 transition duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 ${
        featured
          ? "border-brand-700 bg-brand-800 text-white shadow-card hover:-translate-y-1 hover:bg-brand-900 md:col-span-2"
          : `${toneClasses[tone]} text-ink shadow-sm hover:-translate-y-1 hover:border-interactive hover:shadow-card`
      }`}
      aria-label={`${title} 페이지로 이동`}
    >
      <div>
        {featured ? (
          <span className="mb-4 inline-flex rounded-full bg-white/12 px-3 py-1 text-xs font-extrabold text-brand-50">
            중심 진료
          </span>
        ) : null}
        <div
          className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl ${
            featured ? "bg-white/12 text-white" : "bg-white/75 text-brand-700"
          }`}
        >
          <Icon aria-hidden="true" size={24} strokeWidth={2.1} />
        </div>
        <h3 className="text-2xl font-extrabold leading-8">{title}</h3>
        <p className={`mt-4 text-base leading-7 ${featured ? "text-brand-50" : "text-muted"}`}>
          {description}
        </p>
      </div>
      <span
        className={`mt-7 inline-flex items-center gap-2 text-sm font-extrabold ${
          featured ? "text-white" : "text-brand-700"
        }`}
      >
        자세히 보기
        <ArrowRight aria-hidden="true" size={18} className="transition group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
