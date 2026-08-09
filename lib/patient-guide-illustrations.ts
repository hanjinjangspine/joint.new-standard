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
const aiMedicalIllustrationNote =
  "AI 기반 3D 의료 일러스트이며 실제 환자, 실제 수술 장면 또는 치료 전후 사진이 아닙니다. 그림의 해부 구조와 치료 범위는 이해를 돕기 위한 예시로, 실제 치료는 환자 상태와 진찰·영상검사·수술 중 소견에 따라 달라질 수 있습니다.";

export const patientGuideIllustrations: Record<string, PatientGuideIllustration[]> = {
  "scaphoid-fracture": [
    {
      src: `${illustrationRoot}/scaphoid-fracture/overview.png`,
      width: 1024,
      height: 1536,
      alt: "엄지 쪽 손목의 주상골 위치와 주상골 몸통 골절선을 보여 주는 3D 의료 일러스트",
      caption: "엄지 쪽 손목의 주상골 위치와 예시 골절선",
      note: "AI 기반 3D 의료 일러스트이며 실제 환자의 X-ray, CT 또는 수술 사진이 아닙니다. 골절 위치와 치료 방법은 개인별 진찰과 영상검사 결과에 따라 달라집니다.",
      placement: "overview"
    }
  ],
  "tennis-elbow": [
    {
      src: `${illustrationRoot}/tennis-elbow/overview.png`,
      width: 858,
      height: 700,
      alt: "팔꿈치 외측상과 힘줄 병변을 나타낸 3D 의료 일러스트",
      caption: "팔꿈치 바깥쪽 힘줄과 외측상과염이 생기는 위치",
      displayCrop: { top: 70, bottom: 57 },
      placement: "overview"
    },
    {
      src: `${illustrationRoot}/tennis-elbow/procedure.png`,
      width: 724,
      height: 724,
      alt: "팔꿈치 바깥쪽 힘줄 병변을 관절경으로 확인하고 필요한 범위에서 정리하는 과정을 나타낸 AI 기반 3D 의학 일러스트",
      caption: "관절경으로 병변을 확인하고 필요한 범위의 변성 조직을 정리하는 과정",
      note:
        "AI 기반 3D 의료 일러스트이며 실제 환자, 실제 수술 장면 또는 치료 전후 사진이 아닙니다. 병변 정리 범위와 봉합 여부는 증상, 진찰·영상검사와 수술 중 소견에 따라 달라질 수 있습니다.",
      displayCrop: { top: 34, right: 24, bottom: 33, left: 24 },
      placement: "procedure"
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
    },
    {
      src: `${illustrationRoot}/calcific-tendinitis/procedure.png`,
      width: 724,
      height: 724,
      alt: "회전근개 힘줄의 석회 침착 위치를 확인하고 관절경으로 필요한 범위에서 제거하는 과정을 나타낸 AI 기반 3D 의학 일러스트",
      caption: "관절경으로 석회 위치를 확인하고 필요한 범위에서 제거하는 과정",
      note:
        "AI 기반 3D 의료 일러스트이며 실제 환자, 실제 수술 장면 또는 치료 전후 사진이 아닙니다. 석회 위치·제거 범위와 남은 회전근개 힘줄의 봉합 여부는 증상, 진찰·영상검사와 수술 중 소견에 따라 달라질 수 있습니다.",
      displayCrop: { top: 34, right: 24, bottom: 33, left: 24 },
      placement: "procedure"
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
      width: 1536,
      height: 1024,
      alt: "견봉 쇄골 관절 탈구와 오구 쇄골 인대 손상 위치를 나타낸 AI 기반 3D 의료 일러스트",
      caption: "견봉 쇄골 관절 탈구와 오구 쇄골 인대가 손상되는 위치",
      note: aiMedicalIllustrationNote,
      placement: "overview"
    },
    {
      src: `${illustrationRoot}/ac-joint-dislocation/comparison.png`,
      width: 1774,
      height: 887,
      alt: "정상 견봉 쇄골 관절과 오구 쇄골 인대 손상으로 어긋난 관절을 비교한 AI 기반 3D 의료 일러스트",
      caption: "정상 견봉 쇄골 관절과 손상 뒤 달라진 정렬 비교",
      note: aiMedicalIllustrationNote,
      placement: "comparison"
    },
    {
      src: `${illustrationRoot}/ac-joint-dislocation/procedure.png`,
      width: 1983,
      height: 793,
      alt: "급성 견봉 쇄골 관절 손상의 고정과 만성 오구 쇄골 인대 재건 과정을 나타낸 AI 기반 3D 의료 일러스트",
      caption: "손상 시기와 조직 상태에 따라 고려하는 급성기 고정과 만성기 인대 재건 과정",
      note: aiMedicalIllustrationNote,
      placement: "procedure"
    }
  ],
  "trigger-finger": [
    {
      src: `${illustrationRoot}/trigger-finger/overview.png`,
      width: 1586,
      height: 992,
      alt: "손가락 굽힘 힘줄이 A1 활차 부위에서 걸리는 방아쇠수지를 나타낸 AI 기반 3D 의료 일러스트",
      caption: "굽힘 힘줄이 좁아진 A1 활차를 통과하며 걸리는 위치",
      note: aiMedicalIllustrationNote,
      placement: "overview"
    },
    {
      src: `${illustrationRoot}/trigger-finger/comparison.png`,
      width: 1536,
      height: 1024,
      alt: "정상 손가락 힘줄과 방아쇠수지의 좁아진 A1 활차를 비교한 AI 기반 3D 의료 일러스트",
      caption: "정상 A1 활차와 굽힘 힘줄 통로가 좁아진 방아쇠수지 비교",
      note: aiMedicalIllustrationNote,
      placement: "comparison"
    },
    {
      src: `${illustrationRoot}/trigger-finger/procedure.png`,
      width: 1923,
      height: 817,
      alt: "손가락 신경과 힘줄을 보호하며 A1 활차를 유리하는 과정을 나타낸 AI 기반 3D 의료 일러스트",
      caption: "주변 신경·혈관과 힘줄을 보호하며 좁아진 A1 활차를 유리하는 과정",
      note: aiMedicalIllustrationNote,
      placement: "procedure"
    }
  ],
  "femoral-head-osteonecrosis": [
    {
      src: `${illustrationRoot}/femoral-head-osteonecrosis/overview.png`,
      width: 1586,
      height: 992,
      alt: "대퇴 골두의 혈액 공급 저하와 무혈성 괴사 부위를 나타낸 AI 기반 3D 의료 일러스트",
      caption: "대퇴 골두에서 혈액 공급이 줄어 뼈가 약해지는 부위",
      note: aiMedicalIllustrationNote,
      placement: "overview"
    },
    {
      src: `${illustrationRoot}/femoral-head-osteonecrosis/comparison.png`,
      width: 1860,
      height: 846,
      alt: "정상 대퇴 골두와 무혈성 괴사로 함몰이 진행된 대퇴 골두를 비교한 AI 기반 3D 의료 일러스트",
      caption: "정상 대퇴 골두와 무혈성 괴사·함몰이 진행된 구조 비교",
      note: aiMedicalIllustrationNote,
      placement: "comparison"
    },
    {
      src: `${illustrationRoot}/femoral-head-osteonecrosis/procedure.png`,
      width: 1774,
      height: 887,
      alt: "대퇴 골두와 비구를 인공 삽입물로 치환하는 고관절 수술 과정을 나타낸 AI 기반 3D 의료 일러스트",
      caption: "손상 범위와 관절 상태에 따라 고려하는 고관절 전치환 또는 반치환 과정",
      note: aiMedicalIllustrationNote,
      placement: "procedure"
    }
  ],
  "mcl-injury": [
    {
      src: `${illustrationRoot}/mcl-injury/overview.png`,
      width: 1536,
      height: 1024,
      alt: "무릎 안쪽 내측 측부 인대의 위치와 손상을 나타낸 AI 기반 3D 의료 일러스트",
      caption: "무릎 안쪽을 지지하는 내측 측부 인대와 손상 부위",
      note: aiMedicalIllustrationNote,
      placement: "overview"
    },
    {
      src: `${illustrationRoot}/mcl-injury/comparison.png`,
      width: 1693,
      height: 929,
      alt: "정상 무릎 내측 측부 인대와 손상된 인대를 비교한 AI 기반 3D 의료 일러스트",
      caption: "정상 내측 측부 인대와 손상 뒤 달라진 구조 비교",
      note: aiMedicalIllustrationNote,
      placement: "comparison"
    },
    {
      src: `${illustrationRoot}/mcl-injury/procedure.png`,
      width: 1774,
      height: 887,
      alt: "무릎 내측 측부 인대를 봉합하거나 이식건으로 재건하는 과정을 나타낸 AI 기반 3D 의료 일러스트",
      caption: "손상 시기와 조직 상태에 따라 고려하는 내측 측부 인대 봉합·재건 과정",
      note: aiMedicalIllustrationNote,
      placement: "procedure"
    }
  ],
  "pcl-tear": [
    {
      src: `${illustrationRoot}/pcl-tear/overview.png`,
      width: 1536,
      height: 1024,
      alt: "무릎 후방 십자 인대 파열과 정강이뼈의 뒤쪽 처짐을 나타낸 AI 기반 3D 의료 일러스트",
      caption: "정강이뼈가 뒤로 밀리는 것을 제어하는 후방 십자 인대의 파열",
      note: aiMedicalIllustrationNote,
      placement: "overview"
    },
    {
      src: `${illustrationRoot}/pcl-tear/comparison.png`,
      width: 1731,
      height: 909,
      alt: "정상 후방 십자 인대와 파열된 후방 십자 인대를 비교한 AI 기반 3D 의료 일러스트",
      caption: "정상 후방 십자 인대와 파열 뒤 정강이뼈가 처진 구조 비교",
      note: aiMedicalIllustrationNote,
      placement: "comparison"
    },
    {
      src: `${illustrationRoot}/pcl-tear/procedure.png`,
      width: 1693,
      height: 929,
      alt: "뼈 통로를 만들고 이식건으로 후방 십자 인대를 재건하는 과정을 나타낸 AI 기반 3D 의료 일러스트",
      caption: "대퇴골·경골의 뼈 통로에 이식건을 통과시켜 후방 십자 인대를 재건하는 과정",
      note: aiMedicalIllustrationNote,
      placement: "procedure"
    }
  ],
  "shoulder-arthroplasty": [
    {
      src: `${illustrationRoot}/shoulder-arthroplasty/overview.png`,
      width: 1672,
      height: 941,
      alt: "어깨 관절염과 회전근개 기능 저하로 손상된 관절 구조를 나타낸 AI 기반 3D 의료 일러스트",
      caption: "관절염·회전근개 기능과 골절 양상에 따라 달라지는 어깨 관절 구조",
      note: aiMedicalIllustrationNote,
      placement: "overview"
    },
    {
      src: `${illustrationRoot}/shoulder-arthroplasty/comparison.png`,
      width: 1774,
      height: 887,
      alt: "해부학적 어깨 전치환술과 역행성 어깨 전치환술의 삽입물 구조를 비교한 AI 기반 3D 의료 일러스트",
      caption: "회전근개 상태 등에 따라 고려하는 해부학적·역행성 어깨 인공 관절 비교",
      note: aiMedicalIllustrationNote,
      placement: "comparison"
    },
    {
      src: `${illustrationRoot}/shoulder-arthroplasty/procedure.png`,
      width: 1693,
      height: 929,
      alt: "손상된 어깨 관절면을 정리하고 인공 관절 삽입물을 고정하는 과정을 나타낸 AI 기반 3D 의료 일러스트",
      caption: "손상된 관절면을 정리하고 선택한 방식의 어깨 인공 관절을 삽입하는 과정",
      note: aiMedicalIllustrationNote,
      placement: "procedure"
    }
  ],
  "distal-radius-fracture": [
    {
      src: `${illustrationRoot}/distal-radius-fracture/overview.png`,
      width: 1659,
      height: 948,
      alt: "손목 가까운 요골의 골절과 손등 쪽 전위를 보이는 콜레스 골절을 나타낸 AI 기반 3D 의료 일러스트",
      caption: "손목 가까운 요골에서 생긴 원위 요골 골절과 콜레스형 변형",
      note: aiMedicalIllustrationNote,
      placement: "overview"
    },
    {
      src: `${illustrationRoot}/distal-radius-fracture/comparison.png`,
      width: 1693,
      height: 929,
      alt: "안정형 원위 요골 골절, 콜레스형 골절과 분쇄된 관절면 골절을 비교한 AI 기반 3D 의료 일러스트",
      caption: "안정형·콜레스형·분쇄 관절면형 원위 요골 골절 비교",
      note: aiMedicalIllustrationNote,
      placement: "comparison"
    },
    {
      src: `${illustrationRoot}/distal-radius-fracture/procedure.png`,
      width: 1855,
      height: 848,
      alt: "원위 요골 골절을 맞추고 손바닥 쪽 금속판과 나사로 고정하는 과정을 나타낸 AI 기반 3D 의료 일러스트",
      caption: "골절과 관절면 정렬을 맞춘 뒤 수장측 금속판과 나사로 고정하는 과정",
      note: aiMedicalIllustrationNote,
      placement: "procedure"
    }
  ],
  "trimalleolar-ankle-fracture": [
    {
      src: `${illustrationRoot}/trimalleolar-ankle-fracture/overview.png`,
      width: 1024,
      height: 1536,
      alt: "발목 안쪽·바깥쪽·뒤쪽 복사뼈가 함께 손상된 삼과 골절을 나타낸 AI 기반 3D 의료 일러스트",
      caption: "안쪽·바깥쪽·뒤쪽 복사뼈가 함께 다친 발목 삼과 골절",
      note: aiMedicalIllustrationNote,
      placement: "overview"
    },
    {
      src: `${illustrationRoot}/trimalleolar-ankle-fracture/comparison.png`,
      width: 1834,
      height: 858,
      alt: "정상 발목 관절과 삼과 골절로 정렬이 어긋난 발목을 비교한 AI 기반 3D 의료 일러스트",
      caption: "정상 발목 관절과 삼과 골절 뒤 어긋난 관절 정렬 비교",
      note: aiMedicalIllustrationNote,
      placement: "comparison"
    },
    {
      src: `${illustrationRoot}/trimalleolar-ankle-fracture/procedure.png`,
      width: 1897,
      height: 829,
      alt: "발목 삼과 골절을 맞추고 금속판과 나사로 고정하는 과정을 나타낸 AI 기반 3D 의료 일러스트",
      caption: "발목 관절의 정렬과 안정성을 회복하도록 골절을 맞추고 고정하는 과정",
      note: aiMedicalIllustrationNote,
      placement: "procedure"
    }
  ],
  "tibial-shaft-fracture": [
    {
      src: `${illustrationRoot}/tibial-shaft-fracture/overview.png`,
      width: 972,
      height: 1619,
      alt: "정강이뼈 몸통 부위의 경골 간부 골절을 나타낸 AI 기반 3D 의료 일러스트",
      caption: "무릎과 발목 사이 경골 몸통 부위의 골절",
      note: aiMedicalIllustrationNote,
      placement: "overview"
    },
    {
      src: `${illustrationRoot}/tibial-shaft-fracture/comparison.png`,
      width: 1672,
      height: 941,
      alt: "정상 경골과 어긋난 경골 간부 골절을 비교한 AI 기반 3D 의료 일러스트",
      caption: "정상 경골 정렬과 간부 골절 뒤 어긋난 정렬 비교",
      note: aiMedicalIllustrationNote,
      placement: "comparison"
    },
    {
      src: `${illustrationRoot}/tibial-shaft-fracture/procedure.png`,
      width: 1915,
      height: 821,
      alt: "경골 골수강에 금속정을 삽입하고 잠금 나사로 고정하는 과정을 나타낸 AI 기반 3D 의료 일러스트",
      caption: "경골 정렬을 맞춘 뒤 골수강 내 금속정과 잠금 나사로 고정하는 과정",
      note: aiMedicalIllustrationNote,
      placement: "procedure"
    }
  ],
  "frozen-shoulder": [
    {
      src: `${illustrationRoot}/frozen-shoulder/overview.png`,
      width: 1536,
      height: 1024,
      alt: "오십견에서 두꺼워지고 수축한 관절낭과 보존된 회전근개 구조를 나타낸 AI 기반 3D 의료 일러스트",
      caption: "염증으로 두꺼워지고 수축한 어깨 관절낭",
      note: aiMedicalIllustrationNote,
      placement: "overview"
    },
    {
      src: `${illustrationRoot}/frozen-shoulder/comparison.png`,
      width: 1796,
      height: 876,
      alt: "정상 관절낭, 염증과 비후가 있는 관절낭, 수축과 유착이 진행된 관절낭을 비교한 AI 기반 3D 의료 일러스트",
      caption: "정상 관절낭과 염증·비후, 수축·유착 단계의 구조 비교",
      note: aiMedicalIllustrationNote,
      placement: "comparison"
    },
    {
      src: `${illustrationRoot}/frozen-shoulder/procedure-v2.png`,
      width: 1994,
      height: 789,
      alt: "관절경으로 관절낭을 확인하고 전방·하방과 선택적 후방 관절낭을 유리하며 별도 적응증에서 점액낭을 절제하는 과정을 나타낸 AI 기반 3D 의료 일러스트",
      caption: "관절경적 전방·하방 관절낭 유리, 선택적 후방 유리와 별도 적응증의 점액낭 절제 과정",
      note:
        "AI 기반 3D 의료 일러스트이며 실제 수술 장면이 아닙니다. 후방 유리·gentle MUA·점액낭 절제 여부와 실제 수술 범위는 운동 제한, 진찰·영상검사와 수술 중 소견에 따라 달라집니다.",
      placement: "procedure"
    }
  ],
  "shoulder-tendinopathy-bursitis": [
    {
      src: `${illustrationRoot}/shoulder-tendinopathy-bursitis/overview.png`,
      width: 1536,
      height: 1024,
      alt: "연속성이 보존된 회전근개 힘줄과 경미한 건병증, 견봉하-삼각근하 점액낭 및 이두근 장두건초 염증을 나타낸 AI 기반 3D 의료 일러스트",
      caption: "파열 없이 함께 나타날 수 있는 회전근개 건병증·점액낭염·이두근 건초염",
      note: aiMedicalIllustrationNote,
      placement: "overview"
    },
    {
      src: `${illustrationRoot}/shoulder-tendinopathy-bursitis/comparison.png`,
      width: 1825,
      height: 862,
      alt: "정상 어깨, 경미한 회전근개 건병증과 점액낭염, 상완이두근 장두건초염을 비교한 AI 기반 3D 의료 일러스트",
      caption: "정상 구조와 건병증·점액낭염·이두근 장두건초염 비교",
      note: aiMedicalIllustrationNote,
      placement: "comparison"
    },
    {
      src: `${illustrationRoot}/shoulder-tendinopathy-bursitis/procedure.png`,
      width: 1983,
      height: 793,
      alt: "회전근개 건병증, 견봉하 점액낭염, 이두근 장두건초염과 단계적 재활 뒤 진정된 상태를 나타낸 AI 기반 3D 의료 일러스트",
      caption: "힘줄의 연속성을 확인하고 통증 조절·단계적 재활·재평가로 이어지는 회복 과정",
      note:
        "AI 기반 3D 의료 일러스트이며 실제 치료 전후 사진이 아닙니다. 점액낭 또는 이두근 건초의 액체만으로 증상의 원인이나 수술 적응증을 확정하지 않습니다.",
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
