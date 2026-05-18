import Breadcrumb from "@/components/Breadcrumb";
import CTAButtons from "@/components/CTAButtons";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  breadcrumb: {
    label: string;
    href?: string;
  }[];
  highlights?: string[];
};

export default function PageHero({ eyebrow, title, description, breadcrumb, highlights = [] }: PageHeroProps) {
  return (
    <section className="border-b border-line bg-[linear-gradient(135deg,#F8FAFB_0%,#EEF4F7_58%,#FFFFFF_100%)] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_360px] lg:items-center">
        <div>
        <Breadcrumb items={breadcrumb} />
        {eyebrow ? (
          <p className="mt-7 text-xs font-extrabold uppercase tracking-[0.12em] text-brand-600">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 max-w-4xl text-3xl font-extrabold leading-[1.2] tracking-[-0.01em] text-ink sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-muted sm:text-xl">{description}</p>
        <CTAButtons className="mt-7" />
        </div>
        <aside className="rounded-2xl border border-brand-100 bg-white p-6 shadow-card">
          <p className="text-sm font-extrabold text-brand-600">
            진료 핵심
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {(highlights.length > 0
              ? highlights
              : ["정확한 진단", "충분한 설명", "단계적 치료", "회복관리"]
            ).map((item) => (
              <span
                key={item}
                className="whitespace-nowrap rounded-full border border-brand-100 bg-brand-50 px-3 py-2 text-sm font-bold text-brand-800"
              >
                {item}
              </span>
            ))}
          </div>
          <p className="mt-5 text-base leading-7 text-muted">
            증상, 생활 제한, 영상검사, 치료 반응을 함께 확인해 현재 상태에 맞는
            치료 순서를 안내합니다.
          </p>
        </aside>
      </div>
    </section>
  );
}
