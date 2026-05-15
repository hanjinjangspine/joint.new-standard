import Link from "next/link";
import { ArrowRight } from "lucide-react";

type TreatmentCardProps = {
  title: string;
  description: string;
  href: string;
};

export default function TreatmentCard({ title, description, href }: TreatmentCardProps) {
  return (
    <Link
      href={href}
      className="group flex min-h-[190px] flex-col justify-between rounded-lg border border-line bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-soft focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
      aria-label={`${title} 페이지로 이동`}
    >
      <div>
        <h3 className="text-xl font-bold leading-8 text-ink">{title}</h3>
        <p className="mt-4 text-base leading-7 text-muted">{description}</p>
      </div>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-700">
        자세히 보기
        <ArrowRight
          aria-hidden="true"
          size={18}
          className="transition group-hover:translate-x-1"
        />
      </span>
    </Link>
  );
}
