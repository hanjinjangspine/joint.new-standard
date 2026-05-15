import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

type BreadcrumbProps = {
  items: {
    label: string;
    href?: string;
  }[];
};

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav
      aria-label="현재 위치"
      className="inline-flex flex-wrap items-center gap-2 rounded-full border border-brand-100 bg-white/80 px-3 py-2 text-sm shadow-sm"
    >
      <Link
        href="/"
        aria-label="홈으로 이동"
        className="inline-flex items-center gap-1 font-semibold text-brand-700 hover:text-brand-900"
      >
        <Home aria-hidden="true" size={16} />
        홈
      </Link>
      {items.map((item) => (
        <span key={item.label} className="inline-flex items-center gap-2">
          <ChevronRight aria-hidden="true" size={15} className="text-brand-300" />
          {item.href ? (
            <Link href={item.href} className="font-semibold text-brand-700 hover:text-brand-900">
              {item.label}
            </Link>
          ) : (
            <span className="font-semibold text-muted">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
