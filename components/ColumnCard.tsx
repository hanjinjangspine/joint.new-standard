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

  if (!isReady) {
    return (
      <article className="rounded-lg border border-line bg-white p-6">
        <p className="text-sm font-bold text-brand-600">{category}</p>
        <h2 className="mt-3 text-xl font-bold leading-8 text-ink">{title}</h2>
        <p className="mt-4 text-base leading-7 text-muted">{excerpt}</p>
        <span className="mt-6 inline-flex rounded-md bg-brand-50 px-3 py-2 text-sm font-bold text-brand-700">
          본문 준비 중
        </span>
      </article>
    );
  }

  return (
    <Link
      href={href}
      className="group rounded-lg border border-line bg-white p-6 transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-soft focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
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
