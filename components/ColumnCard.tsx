import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ColumnCardProps = {
  title: string;
  category: string;
  excerpt: string;
  href: string;
};

export default function ColumnCard({ title, category, excerpt, href }: ColumnCardProps) {
  const isReady = href !== "#";
  const toneByCategory: Record<string, string> = {
    "족부·발목": "border-[#D7E4DA] bg-surface-decision",
    무릎: "border-[#D5E3E8] bg-surface-info",
    어깨: "border-[#E7DED3] bg-surface-recovery",
    "손·손목": "border-[#E1DEE6] bg-surface-note",
    "손·손목·팔꿈치": "border-[#E1DEE6] bg-surface-note",
    골절: "border-[#E1DEE6] bg-surface-note",
    "수술 판단": "border-[#D7E4DA] bg-surface-decision"
  };
  const tone = toneByCategory[category] ?? "border-line bg-white";

  if (!isReady) {
    return (
      <article className={`rounded-lg border p-6 ${tone}`}>
        <p className="text-sm font-bold text-brand-600">{category}</p>
        <h2 className="mt-3 text-xl font-bold leading-8 text-ink">{title}</h2>
        <p className="mt-4 text-base leading-7 text-muted">{excerpt}</p>
        <span className="mt-6 inline-flex rounded-md bg-brand-50 px-3 py-2 text-sm font-bold text-brand-700">
          순차 업데이트 예정
        </span>
      </article>
    );
  }

  return (
    <Link
      href={href}
      className={`group rounded-lg border p-6 transition hover:-translate-y-1 hover:border-interactive hover:shadow-soft focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 ${tone}`}
      aria-label={`${title} 칼럼 읽기`}
    >
      <article>
        <p className="text-sm font-bold text-brand-600">{category}</p>
        <h2 className="mt-3 text-xl font-bold leading-8 text-ink">{title}</h2>
        <p className="mt-4 text-base leading-7 text-muted">{excerpt}</p>
        <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-700">
          읽어보기
          <ArrowRight
            aria-hidden="true"
            size={18}
            className="transition group-hover:translate-x-1"
          />
        </span>
      </article>
    </Link>
  );
}
