import SpecialtyHighlight from "@/components/SpecialtyHighlight";
import { footAnkleDiseases } from "@/lib/data";

export default function FootAnkleFeature() {
  return (
    <SpecialtyHighlight
      eyebrow="Foot & Ankle Focus"
      title="발과 발목, 걷는 일상을 지탱하는 관절입니다."
      description="발목을 자주 삐거나, 발가락 변형으로 신발 신기가 어렵거나, 발바닥 통증과 발목 통증이 반복된다면 정확한 진단이 필요합니다. 새기준병원 관절센터는 족부·발목 질환에 대해 비수술 치료부터 필요한 경우 최소침습적 수술까지 단계적으로 안내합니다."
      items={footAnkleDiseases}
      href="/foot-ankle"
      linkLabel="족부·발목 클리닉 보기"
    />
  );
}
