export type EditorialMedia = { src: string; alt: string; width: number; height: number; caption: string };

export const editorialMedia: Record<string, EditorialMedia> = {
  knee: { src: "/images/symptom-photos-v1/knee.webp", alt: "계단에서 무릎 통증을 느끼는 성인의 일상 장면 — AI 설명용 연출 이미지", width: 1536, height: 1024, caption: "증상 이해를 돕는 AI 연출 이미지 · 실제 본원 환자나 치료 장면이 아닙니다." },
  shoulder: { src: "/images/symptom-photos-v1/shoulder.webp", alt: "팔을 들어 올릴 때 어깨가 불편한 성인의 일상 장면 — AI 설명용 연출 이미지", width: 1536, height: 1024, caption: "증상 이해를 돕는 AI 연출 이미지 · 실제 본원 환자나 치료 장면이 아닙니다." },
  hip: { src: "/images/symptom-photos-v1/hip.webp", alt: "고관절 부위가 불편한 성인의 일상 장면 — AI 설명용 연출 이미지", width: 1448, height: 1086, caption: "증상 이해를 돕는 AI 연출 이미지 · 실제 본원 환자나 치료 장면이 아닙니다." },
  wrist: { src: "/images/symptom-photos-v1/wrist.webp", alt: "손목과 손의 불편한 부위를 짚어 보는 성인의 일상 장면 — AI 설명용 연출 이미지", width: 1536, height: 1024, caption: "증상 이해를 돕는 AI 연출 이미지 · 실제 본원 환자나 치료 장면이 아닙니다." },
  ankle: { src: "/images/symptom-photos-v1/ankle.webp", alt: "발목 통증 부위를 확인하는 성인의 일상 장면 — AI 설명용 연출 이미지", width: 1448, height: 1086, caption: "증상 이해를 돕는 AI 연출 이미지 · 실제 본원 환자나 치료 장면이 아닙니다." },
  elbow: { src: "/images/symptom-photos-v1/elbow.webp", alt: "팔꿈치가 불편한 부위를 짚어 보는 성인의 일상 장면 — AI 설명용 연출 이미지", width: 1448, height: 1086, caption: "증상 이해를 돕는 AI 연출 이미지 · 실제 본원 환자나 치료 장면이 아닙니다." },
  hospital: { src: "/images/content-images-v5/hospital.webp", alt: "새기준병원 실제 접수 공간", width: 1600, height: 1067, caption: "새기준병원 실제 접수 공간" },
  facility: { src: "/images/content-images-v5/facility.webp", alt: "새기준병원 실제 재활 치료 공간", width: 1600, height: 1067, caption: "새기준병원 실제 재활 치료 공간" },
  decision: { src: "/images/content-images-v5/decision.webp", alt: "검사와 치료 선택에 관한 질문을 정리할 점검표와 돋보기 — AI 설명용 연출 이미지", width: 1600, height: 900, caption: "치료 상담 준비를 설명하는 AI 연출 이미지" },
  forefoot: { src: "/patient-guides/illustrations/hallux-valgus-mica/overview.png", alt: "무지외반증에서 엄지발가락의 정렬 변화를 보여주는 3D 의료 일러스트", width: 858, height: 700, caption: "무지외반증 구조를 설명하는 AI 기반 3D 일러스트" },
};

// Exact slugs are reviewed; no keyword inference or DOM-based image insertion.
export const columnPhotoBySlug: Record<string, EditorialMedia> = {
  "rotator-cuff-surgery-decision": editorialMedia.shoulder,
  "shoulder-vs-cervical-disc": editorialMedia.shoulder,
  "meniscus-tear-surgery": editorialMedia.knee,
  "knee-mri-timing": editorialMedia.knee,
  "yongin-ankle-pain-repeated-sprain": editorialMedia.ankle,
  "ankle-ligament-tear-treatment": editorialMedia.ankle,
  "shoulder-night-pain": editorialMedia.shoulder,
  "arm-raising-shoulder-pain": editorialMedia.shoulder,
  "knee-joint-effusion": editorialMedia.knee,
  "stair-descent-knee-pain": editorialMedia.knee,
  "plantar-pain-differential": editorialMedia.decision,
  "shoulder-mri-timing": editorialMedia.shoulder,
  "knee-pain-yongin": editorialMedia.knee,
  "shoulder-pain-yongin": editorialMedia.shoulder,
  "knee-arthritis-injection": editorialMedia.knee,
  "frozen-shoulder-vs-rotator-cuff": editorialMedia.shoulder,
  "arthroscopy-timing": editorialMedia.decision,
  "ankle-instability": editorialMedia.ankle,
  "hallux-valgus": editorialMedia.forefoot,
  "foot-ankle-mis": editorialMedia.forefoot,
};
