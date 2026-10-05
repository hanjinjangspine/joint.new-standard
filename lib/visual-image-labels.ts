export const visualImageLabels: Record<string, string> = {
  "consult": "질문 노트와 청진기 — AI 설명용 연출 이미지",
  "wound": "거즈와 드레싱 준비 도구 — AI 설명용 연출 이미지",
  "nutrition": "곡물밥과 생선·채소 식사 — AI 설명용 연출 이미지",
  "imaging": "영상 자료를 검토하는 모니터와 기록지 — AI 설명용 연출 이미지",
  "doctor": "의료 상담을 상징하는 청진기와 기록지 — AI 설명용 연출 이미지",
  "procedure": "척추 모형과 치료 상담 자료 — AI 설명용 연출 이미지",
  "safety": "전화와 응급 대응 준비 가방 — AI 설명용 연출 이미지",
  "access": "방문 준비를 상징하는 지도와 위치 표시 — AI 설명용 연출 이미지",
  "decision": "자료 비교를 위한 점검표와 돋보기 — AI 설명용 연출 이미지",
  "preop": "입원 준비 가방과 개인 물품 — AI 설명용 연출 이미지",
  "posture": "작업 자세를 위한 의자와 책상 — AI 설명용 연출 이미지",
  "rehab": "탄력 밴드와 운동 도구 — AI 설명용 연출 이미지",
  "recovery": "보행과 일상 복귀 준비 물품 — AI 설명용 연출 이미지",
  "acute": "발목 보조기와 냉찜질 준비 물품 — AI 설명용 연출 이미지",
  "parenting": "육아 중 자세 상담을 위한 생활 공간 — AI 설명용 연출 이미지",
  "senior": "보행·균형 평가를 상징하는 운동 공간 — AI 설명용 연출 이미지",
  "postoperative": "회복 상담용 보조기와 지팡이 — AI 설명용 연출 이미지",
  "gait": "보행 평가를 상징하는 빈 운동 통로 — AI 설명용 연출 이미지",
  "infusion": "수액 상담을 상징하는 밀봉된 의료 물품 — AI 설명용 연출 이미지",
  "vaccination": "예방접종 상담을 상징하는 밀봉된 의료 물품 — AI 설명용 연출 이미지",
  "garden": "자연광 아래의 식물과 밝은 벽 — AI 설명용 연출 이미지",
  "shoulder": "어깨 관절과 회전근개 구조 — AI 설명용 3D 일러스트",
  "cervical": "경추와 신경 구조 — AI 설명용 3D 일러스트",
  "hip": "고관절 구조 — AI 설명용 3D 일러스트",
  "ankle": "발목과 아킬레스 구조 — AI 설명용 3D 일러스트",
  "wrist": "손목과 힘줄 구조 — AI 설명용 3D 일러스트",
  "lumbar": "요추와 신경 구조 — AI 설명용 3D 일러스트",
  "forefoot": "엄지발가락 관절 구조 — AI 설명용 3D 일러스트",
  "elbow": "팔꿈치 관절 구조 — AI 설명용 3D 일러스트",
  "knee": "무릎 관절 구조 — AI 설명용 3D 일러스트",
  "hospital": "새기준병원 실제 접수 공간",
  "facility": "새기준병원 실제 재활 치료 공간",
  "exterior": "새기준병원 실제 건물 외관"
};
export function explanatoryImageAlt(src: string, fallback: string): string {
  if (!src.includes("/content-images-v5/")) return fallback;
  return visualImageLabels[src.split("/").pop()?.split(".")[0] ?? ""] ?? fallback;
}
