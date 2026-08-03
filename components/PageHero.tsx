import Breadcrumb from "@/components/Breadcrumb";
import CTAButtons from "@/components/CTAButtons";
import ResponsiveHeroMedia, { type ResponsiveHeroImage } from "@/components/ResponsiveHeroMedia";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  breadcrumb: {
    label: string;
    href?: string;
  }[];
  highlights?: string[];
  image?: ResponsiveHeroImage;
};

const defaultHeroImage: ResponsiveHeroImage = {
  src: "/images/joint-hero.svg",
  alt: "무릎, 어깨, 발목 진료와 보행 회복을 상징하는 관절센터 의료 일러스트",
  width: 720,
  height: 560
};

export default function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
  highlights = [],
  image = defaultHeroImage
}: PageHeroProps) {
  return (
    <section className="nsh-responsive-hero border-b border-line bg-[linear-gradient(135deg,#F8FAFB_0%,#EEF4F7_58%,#FFFFFF_100%)] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="nsh-responsive-hero__grid mx-auto grid items-center">
        <div className="nsh-responsive-hero__copy">
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
        <div className="nsh-responsive-hero__media-column">
          <ResponsiveHeroMedia {...image} priority />
          <aside className="hidden rounded-2xl border border-brand-100 bg-white p-5 shadow-card sm:block">
            <p className="text-sm font-extrabold text-brand-600">진료 핵심</p>
            <div className="mt-3 flex flex-wrap gap-2">
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
          </aside>
        </div>
      </div>
    </section>
  );
}
