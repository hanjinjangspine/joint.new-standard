import SectionTitle from "@/components/SectionTitle";
import SpecialtyCard from "@/components/SpecialtyCard";
import { specialtyCards } from "@/lib/data";

export default function SpecialtyGrid() {
  return (
    <section className="px-4 py-9 sm:px-6 lg:px-8 lg:py-10">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Specialty Centers"
          title="어디가 불편하신가요?"
          description="족부·발목 질환을 중심으로 무릎·어깨 통증, 비수술 치료, 필요한 경우 수술 치료까지 진료 흐름을 나누어 안내합니다."
          align="center"
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {specialtyCards.map((card) => (
            <SpecialtyCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
