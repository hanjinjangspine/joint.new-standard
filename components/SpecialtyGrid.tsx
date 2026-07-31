import SectionTitle from "@/components/SectionTitle";
import SpecialtyCard from "@/components/SpecialtyCard";

const specialtyCards = [
  {
    title: "발·발목이 아파요",
    href: "/foot-ankle",
    description:
      "발목 염좌 후 통증, 발목 불안정성, 아킬레스건, 무지외반, 발바닥 통증 등 발과 발목 질환을 평가합니다.",
    icon: "ankle",
    featured: true,
    tone: "decision" as const
  },
  {
    title: "무릎이 아파요",
    href: "/knee",
    description:
      "무릎 통증, 퇴행성 관절염, 반월상연골판 손상, 십자인대 손상, 하지정렬 문제를 함께 확인합니다.",
    icon: "knee",
    tone: "info" as const
  },
  {
    title: "어깨가 아파요",
    href: "/shoulder",
    description:
      "회전근개 파열, 오십견, 충돌증후군, 어깨 통증의 원인을 진찰과 영상검사로 평가합니다.",
    icon: "shoulder",
    tone: "recovery" as const
  },
  {
    title: "손·손목·팔꿈치가 아파요",
    href: "/hand-wrist-elbow",
    description: "손 저림, 수근관 증후군, 테니스 엘보, 손목 골절처럼 손과 팔을 쓰기 불편한 원인을 확인합니다.",
    icon: "recovery",
    tone: "note" as const
  },
  {
    title: "수술 전 다른 치료가 궁금해요",
    href: "/injection-pain",
    description:
      "약물치료, 주사치료, 체외충격파, 재활치료 등 환자 상태에 따라 비수술 치료를 먼저 고려할 수 있습니다.",
    icon: "injection",
    tone: "decision" as const
  },
  {
    title: "수술이 필요한지 궁금해요",
    href: "/minimally-invasive-surgery",
    description:
      "관절내시경, 최소침습 수술, 수술 후 회복관리와 재활 계획은 진료와 검사 결과에 따라 상담합니다.",
    icon: "surgery",
    tone: "info" as const
  }
];

export default function SpecialtyGrid() {
  return (
    <section className="bg-[#FCFDFD] px-4 py-9 sm:px-6 lg:px-8 lg:py-10">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Find Your Care"
          title="아픈 부위와 질환으로 찾아보세요"
          description="진단명을 몰라도 괜찮습니다. 가장 불편한 부위를 먼저 고르면 관련 증상과 질환 안내를 확인할 수 있습니다."
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
