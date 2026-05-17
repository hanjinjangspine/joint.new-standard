import SpecialtyHighlight from "@/components/SpecialtyHighlight";
import { footAnkleDiseases } from "@/lib/data";

export default function FootAnkleFeature() {
  return (
    <SpecialtyHighlight
      eyebrow="Foot & Ankle Focus"
      title="발과 발목, 걷는 일상을 지탱하는 관절입니다."
      description="발목 염좌가 반복되거나, 발바닥 통증과 아킬레스건 통증이 오래가거나, 무지외반증으로 신발 착용과 보행이 불편하다면 정확한 진단이 필요합니다. 새기준병원 관절센터는 족부·발목 질환에 대해 비수술 치료부터 필요한 경우 수술 치료까지 단계적으로 안내합니다."
      items={footAnkleDiseases}
      href="/foot-ankle"
      linkLabel="족부·발목 클리닉 보기"
    />
  );
}
