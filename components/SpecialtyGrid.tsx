import SectionTitle from "@/components/SectionTitle";
import SpecialtyCard from "@/components/SpecialtyCard";

const specialtyCards = [
  {
    title: "족부·발목",
    href: "/foot-ankle",
    description:
      "발목 염좌 후 통증, 발목 불안정성, 아킬레스건, 무지외반, 발바닥 통증 등 발과 발목 질환을 평가합니다.",
    icon: "ankle",
    featured: true
  },
  {
    title: "무릎",
    href: "/knee",
    description:
      "무릎 통증, 퇴행성 관절염, 반월상연골판 손상, 십자인대 손상, 하지정렬 문제를 함께 확인합니다.",
    icon: "knee"
  },
  {
    title: "어깨",
    href: "/shoulder",
    description:
      "회전근개 파열, 오십견, 충돌증후군, 어깨 통증의 원인을 진찰과 영상검사로 평가합니다.",
    icon: "shoulder"
  },
  {
    title: "손·손목",
    href: "/contact",
    description: "손목터널증후군, 손목 통증, 손 저림, 힘줄·인대 문제를 확인합니다.",
    icon: "recovery"
  },
  {
    title: "관절 비수술 치료",
    href: "/injection-pain",
    description:
      "약물치료, 주사치료, 체외충격파, 재활치료 등 환자 상태에 따라 비수술 치료를 먼저 고려할 수 있습니다.",
    icon: "injection"
  },
  {
    title: "최소침습 관절수술",
    href: "/minimally-invasive-surgery",
    description:
      "관절내시경, 최소침습 수술, 수술 후 회복관리와 재활 계획은 진료와 검사 결과에 따라 상담합니다.",
    icon: "surgery"
  }
];

export default function SpecialtyGrid() {
  return (
    <section className="px-4 py-9 sm:px-6 lg:px-8 lg:py-10">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Joint Care Areas"
          title="관절센터 진료 영역"
          description="통증 부위와 생활 불편, 진찰 소견, X-ray·MRI 등 영상검사를 함께 확인해 치료 방향을 상담합니다."
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
