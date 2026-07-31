export type PatientGuideIllustrationPlacement = "overview" | "comparison" | "procedure";

export type PatientGuideIllustration = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  note?: string;
  displayCrop?: {
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
  };
  placement: PatientGuideIllustrationPlacement;
};

const illustrationRoot = "/patient-guides/illustrations";

export const patientGuideIllustrations: Record<string, PatientGuideIllustration[]> = {
  "tennis-elbow": [
    {
      src: `${illustrationRoot}/tennis-elbow/overview.png`,
      width: 858,
      height: 700,
      alt: "팔꿈치 외측상과 힘줄 병변을 나타낸 3D 의료 일러스트",
      caption: "팔꿈치 바깥쪽 힘줄과 외측상과염이 생기는 위치",
      displayCrop: { top: 70, bottom: 57 },
      placement: "overview"
    }
  ],
  "calcific-tendinitis": [
    {
      src: `${illustrationRoot}/calcific-tendinitis/overview.png`,
      width: 858,
      height: 700,
      alt: "어깨 회전근개 힘줄의 석회 침착을 나타낸 3D 의료 일러스트",
      caption: "회전근개 힘줄 안에 석회가 침착되는 위치",
      placement: "overview"
    }
  ],
  "carpal-tunnel-syndrome": [
    {
      src: `${illustrationRoot}/carpal-tunnel-syndrome/overview.png`,
      width: 858,
      height: 700,
      alt: "손목 수근관에서 정중신경이 눌리는 구조를 나타낸 3D 의료 일러스트",
      caption: "수근관 안에서 정중신경이 압박되는 위치",
      displayCrop: { top: 70, bottom: 57 },
      placement: "overview"
    },
    {
      src: `${illustrationRoot}/carpal-tunnel-syndrome/procedure.png`,
      width: 917,
      height: 419,
      alt: "횡수근인대를 유리해 정중신경을 감압하는 과정을 나타낸 3D 의료 일러스트",
      caption: "횡수근인대 유리와 정중신경 감압 과정",
      placement: "procedure"
    }
  ],
  "lateral-ankle-ligament-injury": [
    {
      src: `${illustrationRoot}/lateral-ankle-ligament-injury/overview.png`,
      width: 858,
      height: 700,
      alt: "발목 외측 인대 손상 부위를 나타낸 3D 의료 일러스트",
      caption: "발목 바깥쪽 인대의 위치와 손상 부위",
      displayCrop: { top: 54, bottom: 73 },
      placement: "overview"
    },
    {
      src: `${illustrationRoot}/lateral-ankle-ligament-injury/procedure.png`,
      width: 917,
      height: 419,
      alt: "발목 외측 인대를 해부학적 위치에 봉합하는 과정을 나타낸 3D 의료 일러스트",
      caption: "발목 외측 인대 봉합 과정",
      placement: "procedure"
    }
  ],
  "meniscus-tear": [
    {
      src: `${illustrationRoot}/meniscus-tear/overview.png`,
      width: 858,
      height: 700,
      alt: "무릎 반월상 연골판 파열 위치를 나타낸 3D 의료 일러스트",
      caption: "무릎 관절 안의 반월상 연골판과 파열 부위",
      displayCrop: { top: 70, bottom: 57 },
      placement: "overview"
    },
    {
      src: `${illustrationRoot}/meniscus-tear/procedure.png`,
      width: 1536,
      height: 1024,
      alt: "관절경으로 반월상 연골판의 불안정한 손상 조직을 필요한 범위만 정리하는 과정과 봉합 가능한 파열을 봉합하는 과정을 각각 나타낸 3D 의료 일러스트",
      caption:
        "파열의 위치·모양·혈류·조직 상태에 따라 봉합 가능한 연골판은 보존해 봉합하고, 봉합이 어려운 불안정 조직은 필요한 범위만 정리합니다.",
      note:
        "환자교육을 위한 AI 기반 3D 의료 일러스트이며 실제 수술 사진이나 치료 전·후 사례가 아닙니다. 실제 치료 방법과 절제·봉합 범위, 재활 일정은 진찰·영상검사와 관절경 소견에 따라 달라질 수 있습니다.",
      placement: "procedure"
    }
  ],
  "acl-tear": [
    {
      src: `${illustrationRoot}/acl-tear/overview.png`,
      width: 858,
      height: 645,
      alt: "무릎 전방 십자 인대 파열을 나타낸 3D 의료 일러스트",
      caption: "무릎 안쪽 전방 십자 인대의 위치와 파열",
      displayCrop: { top: 133 },
      placement: "overview"
    },
    {
      src: `${illustrationRoot}/acl-tear/procedure.png`,
      width: 917,
      height: 419,
      alt: "이식건을 이용한 전방 십자 인대 재건 과정을 나타낸 3D 의료 일러스트",
      caption: "이식건 터널 형성과 전방 십자 인대 재건 과정",
      placement: "procedure"
    }
  ],
  "knee-cartilage-defect": [
    {
      src: `${illustrationRoot}/knee-cartilage-defect/overview.png`,
      width: 858,
      height: 700,
      alt: "무릎 관절 연골의 국소 결손 부위를 나타낸 3D 의료 일러스트",
      caption: "무릎 관절면의 국소 연골 결손 부위",
      displayCrop: { top: 70, bottom: 57 },
      placement: "overview"
    },
    {
      src: `${illustrationRoot}/knee-cartilage-defect/procedure.png`,
      width: 917,
      height: 419,
      alt: "무릎 연골 결손 부위에 세포 기반 치료제를 적용하는 과정을 나타낸 3D 의료 일러스트",
      caption: "연골 결손 부위를 정리하고 세포 기반 치료제를 적용하는 과정",
      note: "치료 적합성은 허가사항과 진찰·영상검사 결과를 함께 확인해 판단합니다.",
      placement: "procedure"
    }
  ],
  "knee-osteoarthritis-replacement": [
    {
      src: `${illustrationRoot}/knee-osteoarthritis-replacement/overview.png`,
      width: 858,
      height: 700,
      alt: "무릎 퇴행성 관절염의 관절면 변화를 나타낸 3D 의료 일러스트",
      caption: "무릎 관절 연골이 닳고 관절 간격이 좁아진 구조",
      placement: "overview"
    },
    {
      src: `${illustrationRoot}/knee-osteoarthritis-replacement/comparison.png`,
      width: 980,
      height: 365,
      alt: "정상 무릎과 퇴행성 관절염 무릎 구조를 비교한 3D 의료 일러스트",
      caption: "정상 무릎과 퇴행성 관절염 무릎의 구조 비교",
      placement: "comparison"
    },
    {
      src: `${illustrationRoot}/knee-osteoarthritis-replacement/procedure.png`,
      width: 917,
      height: 419,
      alt: "손상된 무릎 관절면을 정리하고 인공관절을 삽입하는 과정을 나타낸 3D 의료 일러스트",
      caption: "무릎 인공관절 치환 과정",
      placement: "procedure"
    }
  ],
  "fracture-fixation": [
    {
      src: `${illustrationRoot}/fracture-fixation/overview.png`,
      width: 858,
      height: 700,
      alt: "뼈의 골절선과 어긋난 골편을 나타낸 3D 의료 일러스트",
      caption: "골절선과 어긋난 골편의 구조",
      displayCrop: { top: 70, bottom: 57 },
      placement: "overview"
    },
    {
      src: `${illustrationRoot}/fracture-fixation/procedure.png`,
      width: 917,
      height: 419,
      alt: "골절을 맞춘 뒤 금속판과 나사로 고정하는 과정을 나타낸 3D 의료 일러스트",
      caption: "골절 정복과 금속판·나사 고정 과정",
      note: "골절 부위와 형태에 따라 정복·고정 방법은 달라집니다.",
      placement: "procedure"
    }
  ],
  "hallux-valgus-mica": [
    {
      src: `${illustrationRoot}/hallux-valgus-mica/overview.png`,
      width: 1448,
      height: 1086,
      alt: "무지외반증의 엄지발가락 변형을 나타낸 3D 의료 일러스트",
      caption: "엄지발가락이 바깥쪽으로 기울고 첫째 중족골이 벌어진 구조",
      placement: "overview"
    },
    {
      src: `${illustrationRoot}/hallux-valgus-mica/comparison.png`,
      width: 1536,
      height: 1024,
      alt: "정상 발과 무지외반증 발의 뼈 정렬을 비교한 3D 의료 일러스트",
      caption: "정상 발과 무지외반증 발의 뼈 정렬 비교",
      placement: "comparison"
    },
    {
      src: `${illustrationRoot}/hallux-valgus-mica/procedure.png`,
      width: 1881,
      height: 836,
      alt: "최소침습 무지외반 교정술의 절골과 고정 과정을 나타낸 3D 의료 일러스트",
      caption: "최소침습 절골·교정과 나사 고정 과정",
      note: "MICA 적용 여부와 절골·고정 범위는 환자마다 다릅니다.",
      placement: "procedure"
    }
  ],
  "rotator-cuff-tear": [
    {
      src: `${illustrationRoot}/rotator-cuff-tear/overview.png`,
      width: 1536,
      height: 1024,
      alt: "어깨 회전근개 힘줄 파열을 나타낸 3D 의료 일러스트",
      caption: "상완골 부착부에서 파열된 회전근개 힘줄",
      placement: "overview"
    },
    {
      src: `${illustrationRoot}/rotator-cuff-tear/comparison.png`,
      width: 1693,
      height: 929,
      alt: "정상 회전근개와 파열된 회전근개 구조를 비교한 3D 의료 일러스트",
      caption: "정상 회전근개와 파열된 회전근개의 구조 비교",
      placement: "comparison"
    },
    {
      src: `${illustrationRoot}/rotator-cuff-tear/procedure.png`,
      width: 1983,
      height: 793,
      alt: "파열된 회전근개 힘줄을 봉합나사로 고정하는 과정을 나타낸 3D 의료 일러스트",
      caption: "회전근개 힘줄을 봉합나사로 뼈에 고정하는 과정",
      placement: "procedure"
    }
  ],
  "shoulder-dislocation-bankart": [
    {
      src: `${illustrationRoot}/shoulder-dislocation-bankart/overview.png`,
      width: 1536,
      height: 1024,
      alt: "어깨 탈구와 방카르트 병변을 나타낸 3D 의료 일러스트",
      caption: "어깨 탈구 때 관절와순이 손상되는 방카르트 병변",
      placement: "overview"
    },
    {
      src: `${illustrationRoot}/shoulder-dislocation-bankart/comparison.png`,
      width: 1693,
      height: 929,
      alt: "정상 어깨와 방카르트 병변이 있는 어깨 구조를 비교한 3D 의료 일러스트",
      caption: "정상 관절와순과 방카르트 병변의 구조 비교",
      placement: "comparison"
    },
    {
      src: `${illustrationRoot}/shoulder-dislocation-bankart/procedure.png`,
      width: 1774,
      height: 887,
      alt: "손상된 관절와순을 봉합나사로 복원하는 과정을 나타낸 3D 의료 일러스트",
      caption: "관절와순을 봉합나사로 복원하는 방카르트 봉합 과정",
      placement: "procedure"
    }
  ],
  "knee-osteotomy-hto": [
    {
      src: `${illustrationRoot}/knee-osteotomy-hto/overview.png`,
      width: 1536,
      height: 1024,
      alt: "내반 정렬과 무릎 안쪽 관절염을 나타낸 3D 의료 일러스트",
      caption: "O자 정렬에서 무릎 안쪽 관절에 부하가 집중되는 구조",
      placement: "overview"
    },
    {
      src: `${illustrationRoot}/knee-osteotomy-hto/comparison.png`,
      width: 1536,
      height: 1024,
      alt: "정상 하지 정렬과 내반 하지 정렬을 비교한 3D 의료 일러스트",
      caption: "정상 하지 정렬과 내반 하지 정렬의 체중부하 축 비교",
      placement: "comparison"
    },
    {
      src: `${illustrationRoot}/knee-osteotomy-hto/procedure.png`,
      width: 1935,
      height: 813,
      alt: "근위 경골 절골술의 절골과 정렬 교정 과정을 나타낸 3D 의료 일러스트",
      caption: "경골 절골·정렬 교정과 금속판 고정 과정",
      note: "교정 각도는 서서 촬영한 전신 하지 X-ray와 진찰 결과를 바탕으로 계획합니다.",
      placement: "procedure"
    }
  ],
  "ac-joint-dislocation": [
    {
      src: `${illustrationRoot}/ac-joint-dislocation/overview.png`,
      width: 1672,
      height: 941,
      alt: "견봉 쇄골 관절 탈구와 오구 쇄골 인대 손상을 나타낸 3D 의료 일러스트",
      caption: "견봉 쇄골 관절 탈구와 오구 쇄골 인대 손상",
      placement: "overview"
    },
    {
      src: `${illustrationRoot}/ac-joint-dislocation/comparison.png`,
      width: 1774,
      height: 887,
      alt: "정상 견봉 쇄골 관절과 탈구된 관절 구조를 비교한 3D 의료 일러스트",
      caption: "정상 견봉 쇄골 관절과 탈구된 관절의 정렬 비교",
      placement: "comparison"
    },
    {
      src: `${illustrationRoot}/ac-joint-dislocation/procedure.png`,
      width: 1858,
      height: 846,
      alt: "오구 쇄골 인대를 재건하고 관절을 안정화하는 과정을 나타낸 3D 의료 일러스트",
      caption: "오구 쇄골 인대 재건과 관절 안정화 과정",
      placement: "procedure"
    }
  ]
};

export function getPatientGuideIllustrations(
  slug: string,
  placement?: PatientGuideIllustrationPlacement
) {
  const illustrations = patientGuideIllustrations[slug] ?? [];
  return placement
    ? illustrations.filter((illustration) => illustration.placement === placement)
    : illustrations;
}
