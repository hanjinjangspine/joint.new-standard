import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

type SpecialtyHighlightProps = {
  eyebrow?: string;
  title: string;
  description: string;
  items: string[];
  href?: string;
  linkLabel?: string;
};

export default function SpecialtyHighlight({
  eyebrow,
  title,
  description,
  items,
  href,
  linkLabel = "자세히 보기"
}: SpecialtyHighlightProps) {
  return (
    <section className="bg-calm px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          {eyebrow ? (
            <p className="mb-3 text-sm font-bold uppercase text-brand-600">{eyebrow}</p>
          ) : null}
          <h2 className="text-3xl font-bold leading-tight text-ink sm:text-4xl">{title}</h2>
          <p className="mt-5 text-lg leading-8 text-muted sm:text-xl">{description}</p>
          {href ? (
            <Link
              href={href}
              className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-md bg-brand-700 px-5 py-3 font-bold text-white hover:bg-brand-800"
              aria-label={`${linkLabel} 페이지로 이동`}
            >
              {linkLabel}
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
          ) : null}
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {items.map((item) => (
            <div key={item} className="flex gap-3 rounded-2xl border border-line bg-white p-4 shadow-sm">
              <CheckCircle2 aria-hidden="true" className="mt-1 shrink-0 text-brand-700" size={20} />
              <span className="text-base font-semibold leading-7 text-ink">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
