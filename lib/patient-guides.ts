export type PatientGuideCategory = "무릎" | "어깨" | "족부·발목" | "손·팔꿈치" | "골절";

export type PatientGuide = {
  id: string;
  title: string;
  category: PatientGuideCategory;
  description: string;
  fileName: string;
};

export const patientGuideCategoryOrder: PatientGuideCategory[] = [
  "무릎",
  "어깨",
  "족부·발목",
  "손·팔꿈치",
  "골절"
];

export const patientGuides: PatientGuide[] = [
  {
    id: "03",
    title: "테니스 엘보",
    category: "손·팔꿈치",
    description: "팔꿈치 바깥쪽 통증의 증상과 검사, 치료 선택과 회복 과정을 정리한 환자안내입니다.",
    fileName: "03_테니스엘보_김동희원장_환자안내_v4.4.pdf"
  },
  {
    id: "08",
    title: "어깨 석회화 건염",
    category: "어깨",
    description: "어깨 석회화 건염의 증상과 검사, 치료 선택과 회복 과정을 정리한 환자안내입니다.",
    fileName: "08_어깨석회화건염_김동희원장_환자안내_v4.4.pdf"
  },
  {
    id: "09",
    title: "수근관 증후군",
    category: "손·팔꿈치",
    description: "손 저림과 수근관 증후군의 증상, 검사, 치료 선택과 회복 과정을 정리한 환자안내입니다.",
    fileName: "09_수근관증후군_김동희원장_환자안내_v4.4.pdf"
  },
  {
    id: "10",
    title: "발목 외측 인대 손상",
    category: "족부·발목",
    description: "반복되는 발목 삠과 외측 인대 손상의 검사, 치료 선택과 회복 과정을 정리한 환자안내입니다.",
    fileName: "10_발목외측인대손상_김동희원장_환자안내_v4.4.pdf"
  },
  {
    id: "11",
    title: "반월상 연골판 파열",
    category: "무릎",
    description: "무릎 반월상 연골판 파열의 증상과 검사, 치료 선택과 회복 과정을 정리한 환자안내입니다.",
    fileName: "11_반월상연골판파열_김동희원장_환자안내_v4.4.pdf"
  },
  {
    id: "12",
    title: "무릎 전방 십자 인대 파열",
    category: "무릎",
    description: "전방 십자 인대 손상의 증상과 검사, 재건술 판단과 회복 과정을 정리한 환자안내입니다.",
    fileName: "12_무릎전방십자인대파열_김동희원장_환자안내_v4.4.pdf"
  },
  {
    id: "13",
    title: "무릎 연골 결손·카티스템",
    category: "무릎",
    description: "무릎 연골 결손의 검사와 치료 선택, 카티스템 치료와 회복 과정을 정리한 환자안내입니다.",
    fileName: "13_무릎연골결손_카티스템_김동희원장_환자안내_v4.4.pdf"
  },
  {
    id: "14",
    title: "무릎 관절염·인공 무릎 관절 치환술",
    category: "무릎",
    description: "무릎 관절염의 증상과 검사, 인공 무릎 관절 치환술 판단과 회복 과정을 정리한 환자안내입니다.",
    fileName: "14_무릎관절염_인공무릎관절치환술_김동희원장_환자안내_v4.4.pdf"
  },
  {
    id: "15",
    title: "골절·CRIF·ORIF",
    category: "골절",
    description: "골절의 증상과 검사, 정복 및 내고정술 판단과 회복 과정을 정리한 환자안내입니다.",
    fileName: "15_골절_CRIF_ORIF_김동희원장_환자안내_v4.4.pdf"
  },
  {
    id: "20",
    title: "무지외반증·MICA",
    category: "족부·발목",
    description: "무지외반증의 증상과 검사, 최소침습 교정술 판단과 회복 과정을 정리한 환자안내입니다.",
    fileName: "20_무지외반증_MICA_김동희원장_환자안내_v4.4.pdf"
  },
  {
    id: "21",
    title: "어깨 회전근개 파열·관절경 봉합술",
    category: "어깨",
    description: "회전근개 파열의 증상과 검사, 관절경 봉합술 판단과 회복 과정을 정리한 환자안내입니다.",
    fileName: "21_어깨회전근개파열_관절경봉합술_김동희원장_환자안내_v4.4.pdf"
  },
  {
    id: "22",
    title: "어깨 탈구·방카르트 봉합술",
    category: "어깨",
    description: "반복되는 어깨 탈구의 검사와 치료 선택, 방카르트 봉합술과 회복 과정을 정리한 환자안내입니다.",
    fileName: "22_어깨탈구_방카르트봉합술_김동희원장_환자안내_v4.4.pdf"
  },
  {
    id: "23",
    title: "무릎 관절염·O자 다리 교정술(HTO)",
    category: "무릎",
    description: "무릎 관절염과 O자 다리의 검사, 근위 경골 절골술 판단과 회복 과정을 정리한 환자안내입니다.",
    fileName: "23_무릎관절염_O자다리교정술_HTO_김동희원장_환자안내_v4.4.pdf"
  },
  {
    id: "24",
    title: "견봉 쇄골 관절 탈구·오구 쇄골 인대 재건술",
    category: "어깨",
    description: "견봉 쇄골 관절 탈구의 검사, 인대 재건술 판단과 회복 과정을 정리한 환자안내입니다.",
    fileName: "24_견봉쇄골관절탈구_오구쇄골인대재건술_김동희원장_환자안내_v4.4.pdf"
  }
];

export function patientGuideHref(guide: PatientGuide) {
  return `/patient-guides/${guide.fileName}`;
}

export function getPatientGuides(ids?: string[]) {
  if (!ids) {
    return patientGuides;
  }

  const idSet = new Set(ids);
  return patientGuides.filter((guide) => idSet.has(guide.id));
}
