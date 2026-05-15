import CTAButtons from "@/components/CTAButtons";

type CTASectionProps = {
  title?: string;
  description?: string;
};

export default function CTASection({
  title = "무릎·어깨·발목 통증, 현재 상태에 맞는 치료 순서를 확인하세요.",
  description = "수술이 필요한지보다 먼저 확인해야 할 것은 정확한 원인과 현재 치료 단계입니다. 새기준병원 관절센터에서 증상과 보행 상태에 맞는 치료 순서를 안내받으세요."
}: CTASectionProps) {
  return (
    <section className="bg-[linear-gradient(135deg,#123247_0%,#1D4258_58%,#2E5870_100%)] px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-[28px] border border-white/10 bg-white/5 p-6 lg:flex-row lg:items-center lg:justify-between lg:p-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">{title}</h2>
          <p className="mt-5 text-lg leading-8 text-brand-50">{description}</p>
        </div>
        <CTAButtons variant="light" className="shrink-0" />
      </div>
    </section>
  );
}
