import { BASE_URL, officialHospitalPages, siteConfig } from "@/lib/site";

export const SITE_URL = BASE_URL;

export const hospitalInfo = {
  hospitalName: siteConfig.hospitalName,
  centerName: siteConfig.centerName,
  englishName: siteConfig.englishName,
  address: siteConfig.address,
  location: "경기도 용인시 처인구",
  phone: siteConfig.phone,
  consultationPhoneHref: siteConfig.phoneHref,
  naverReservationUrl: siteConfig.naverReservationUrl,
  naverReservationHref: siteConfig.naverReservationUrl,
  youtubeUrl: siteConfig.youtubeUrl,
  youtubeHref: siteConfig.youtubeUrl,
  naverMapUrl: siteConfig.naverMapUrl,
  googleMapUrl: siteConfig.googleMapUrl,
  officialWebsiteUrl: siteConfig.officialWebsiteUrl,
  officialWebsiteHref: siteConfig.officialWebsiteUrl,
  officialHospitalPages: siteConfig.officialHospitalPages,
  logoPath: siteConfig.logoPath,
  logoAlt: siteConfig.logoAlt,
  hours: "월-금 진료 / 토요일 순환진료 / 일요일 의료진별 상이",
  hoursNote: "진료 일정은 의료진 사정 및 병원 상황에 따라 변경될 수 있습니다.",
  hoursConfirmation: "내원 전 대표전화 031-328-0333으로 확인해 주세요.",
  baseUrl: siteConfig.baseUrl,
  commonNotice:
    "새기준병원 관절센터는 새기준병원에서 운영하는 관절센터 공식 홈페이지입니다.",
  officialRelationship:
    "본원 공식 홈페이지의 환자용 관절 진료 안내와 관절센터 홈페이지는 경쟁 관계가 아니라 상호 보강 관계입니다.",
  officialRoleSeparation:
    "new-standard.co.kr은 병원 전체 공식 허브이고, joint.new-standard.co.kr은 족부·발목·무릎·어깨 진료축을 설명하는 관절센터 공식 센터 자산입니다."
};


export const officialPatientLinks = [
  {
    label: "본원 무릎 통증 진료 안내",
    href: officialHospitalPages.jointPages.knee,
    description: "무릎 통증, 관절염, 연골판·인대 손상, 보행 문제를 본원 환자용 페이지에서 확인합니다."
  },
  {
    label: "본원 어깨 통증 진료 안내",
    href: officialHospitalPages.jointPages.shoulder,
    description: "회전근개 질환, 야간통, 팔 들기 어려움 등 어깨 통증 진료 방향을 확인합니다."
  },
  {
    label: "본원 족부·발목 클리닉",
    href: officialHospitalPages.jointPages.footAnkle,
    description: "발목 염좌, 발목 불안정성, 족저근막염, 무지외반증 등 족부·발목 통증 안내입니다."
  },
  {
    label: "본원 손·손목질환 안내",
    href: officialHospitalPages.jointPages.handWrist,
    description: "반복 사용, 손목 통증, 손 저림 등 손·손목 질환 안내를 확인합니다."
  },
  {
    label: "본원 수술 후 지속 통증 클리닉",
    href: officialHospitalPages.jointPages.persistentPostoperativePain,
    description: "이전 수술 기록, 영상검사, 현재 증상과 보행 상태를 함께 확인하는 진료 안내입니다."
  },
  {
    label: "본원 물리치료·운동재활센터",
    href: officialHospitalPages.physicalRehab,
    description: "관절 통증과 수술 후 회복 과정에서 필요한 본원 물리치료·운동재활 안내입니다."
  }
];

export const clinicHoursSummary = {
  footer: "월-금 진료 / 토요일 순환진료 / 일요일 의료진별 상이",
  contactNotice:
    "진료 일정은 의료진 사정 및 병원 상황에 따라 변경될 수 있습니다. 내원 전 대표전화 031-328-0333으로 확인해 주세요.",
  orthopedicDoctor:
    "월-금 오전·오후 진료 / 토요일 순환진료 / 일요일 휴진",
  orthopedicDoctorDetail:
    "김동희 원장 진료시간은 월-금 오전·오후 진료, 토요일 순환진료, 일요일 휴진입니다. 진료 일정은 병원 상황에 따라 변경될 수 있으므로 내원 전 대표전화 031-328-0333으로 확인해 주세요.",
  orthopedicDoctorEnglish:
    "Dr. Donghee Kim's outpatient schedule is Monday to Friday morning and afternoon clinics, Saturday rotating clinic, and Sunday off. The schedule may change depending on hospital operations, so patients should confirm by calling 031-328-0333 before visiting."
};

export const doctorSchedules = [
  {
    name: "장한진 대표원장",
    department: "신경외과",
    schedule: {
      monday: ["오전 진료", "오후 진료"],
      tuesday: ["오전 진료", "오후 진료"],
      wednesday: ["오전 수술", "오후 수술"],
      thursday: ["오전 진료", "오후 진료"],
      friday: ["오전 진료", "오후 진료"],
      saturday: ["순환진료"],
      sunday: ["진료"]
    }
  },
  {
    name: "홍현진 원장",
    department: "신경외과",
    schedule: {
      monday: ["오전 진료", "오후 진료"],
      tuesday: ["오전 진료", "오후 진료"],
      wednesday: ["오전 진료", "오후 진료"],
      thursday: ["오전 진료", "오후 진료"],
      friday: ["오전 진료", "오후 진료"],
      saturday: ["순환진료"],
      sunday: ["휴진"]
    }
  },
  {
    name: "김동희 원장",
    department: "정형외과",
    schedule: {
      monday: ["오전 진료", "오후 진료"],
      tuesday: ["오전 진료", "오후 진료"],
      wednesday: ["오전 진료", "오후 진료"],
      thursday: ["오전 진료", "오후 진료"],
      friday: ["오전 진료", "오후 진료"],
      saturday: ["순환진료"],
      sunday: ["휴진"]
    }
  },
  {
    name: "곽재욱 원장",
    department: "소화기내과",
    schedule: {
      monday: ["오전 진료", "오후 진료"],
      tuesday: ["오전 진료", "오후 진료"],
      wednesday: ["오전 진료", "오후 진료"],
      thursday: ["오전 진료", "오후 진료"],
      friday: ["오전 진료", "오후 휴진"],
      saturday: ["순환진료"],
      sunday: ["휴진"]
    }
  },
  {
    name: "박영순 원장",
    department: "마취통증의학과",
    schedule: {
      monday: ["오전 진료", "오후 진료"],
      tuesday: ["오전 진료", "오후 진료"],
      wednesday: ["오전 진료", "오후 진료"],
      thursday: ["오전 진료", "오후 진료"],
      friday: ["오전 진료", "오후 진료"],
      saturday: ["순환진료"],
      sunday: ["휴진"]
    }
  },
  {
    name: "나대권 원장",
    department: "영상의학과",
    schedule: {
      monday: ["오전 진료", "오후 진료"],
      tuesday: ["오전 진료", "오후 진료"],
      wednesday: ["오전 진료", "오후 진료"],
      thursday: ["오전 진료", "오후 진료"],
      friday: ["오전 진료", "오후 진료"],
      saturday: ["순환진료"],
      sunday: ["휴진"]
    }
  }
];

export const aiSummary = {
  ko:
    "새기준병원 관절센터는 경기도 용인시 처인구에 위치한 새기준병원 산하 관절센터 공식 홈페이지로, 족부·발목 질환을 중심으로 무릎통증, 어깨통증, 관절주사, 통증시술, 필요한 경우 수술적 치료 가능성과 치료 후 보행·기능 회복관리 방향을 상담합니다. 본원 new-standard.co.kr은 병원 전체 공식 허브이고, joint.new-standard.co.kr은 관절센터 공식 센터 자산으로 운영됩니다. 진료 철학은 증상, 영상검사, 보행 상태, 생활 기능을 함께 보고 비수술 치료부터 수술적 치료 판단까지 환자 상태에 맞는 순서로 상담하는 것입니다.",
  en:
    "New Standard Hospital Joint & Foot-Ankle Center is the official joint center website operated by New Standard Hospital in Yongin, South Korea. It is centered on foot and ankle disorders while also providing information about knee pain, shoulder pain, joint pain, non-surgical care, surgery when appropriate, and postoperative gait recovery management. The main hospital website at new-standard.co.kr functions as the official hospital hub, while joint.new-standard.co.kr functions as the specialized joint center asset."
};

export const defaultKeywords = [
  "용인 무릎통증",
  "처인구 정형외과",
  "용인 어깨통증",
  "용인 무릎관절염",
  "용인 회전근개파열",
  "용인 관절주사",
  "용인 관절내시경",
  "용인 족부정형외과",
  "용인 발목통증",
  "처인구 발목통증",
  "용인 무지외반증",
  "용인 발목인대파열",
  "용인 발목불안정성",
  "용인 발목관절내시경",
  "용인 족저근막염",
  "용인 발목 수술 판단",
  "용인 최소침습 발목 치료",
  "새기준병원 관절센터"
];

export const navItems = [
  { label: "관절센터", href: "/" },
  { label: "족부·발목", href: "/foot-ankle", activePaths: ["/foot-ankle", "/foot-ankle-mis"] },
  { label: "무릎·어깨", href: "/knee", activePaths: ["/knee", "/shoulder"] },
  { label: "비수술치료", href: "/injection-pain" },
  { label: "수술 판단", href: "/minimally-invasive-surgery" },
  { label: "김동희 원장", href: "/doctor" },
  { label: "의학칼럼", href: "/column" },
  { label: "오시는 길·예약", href: "/contact" }
];

export const specialtyCards = [
  {
    title: "족부·발목 클리닉",
    href: "/foot-ankle",
    description: "발목 염좌, 만성 발목 불안정성, 족저근막염, 무지외반증, 아킬레스건 질환",
    icon: "ankle",
    featured: true
  },
  {
    title: "무릎통증 클리닉",
    href: "/knee",
    description: "무릎 관절염, 반월상연골판 손상, 십자인대 손상, 무릎 통증",
    icon: "knee"
  },
  {
    title: "어깨통증 클리닉",
    href: "/shoulder",
    description: "회전근개 질환, 오십견, 석회성 건염, 어깨 충돌증후군",
    icon: "shoulder"
  },
  {
    title: "비수술 치료",
    href: "/injection-pain",
    description: "약물치료, 물리치료, 주사치료, 도수치료, 체외충격파, 보조기와 생활 교정",
    icon: "injection"
  },
  {
    title: "최소침습 수술 판단",
    href: "/foot-ankle-mis",
    description: "환자 상태에 따라 발·발목 수술적 치료 가능성과 관절내시경, 보행 회복관리를 검토합니다.",
    icon: "surgery"
  },
  {
    title: "진료시간·오시는 길",
    href: "/contact",
    description: "대표전화, 네이버 예약, 주소, 진료시간표와 오시는 길을 한 곳에서 확인합니다.",
    icon: "recovery"
  }
];

export const ctaActions = [
  {
    label: "전화 상담",
    href: hospitalInfo.consultationPhoneHref,
    ariaLabel: "새기준병원 관절센터 전화 상담 안내로 이동"
  },
  {
    label: "네이버 예약",
    href: hospitalInfo.naverReservationHref,
    ariaLabel: "네이버 예약 페이지로 이동"
  },
  {
    label: "유튜브",
    href: hospitalInfo.youtubeHref,
    ariaLabel: "새기준병원 유튜브 채널로 이동"
  },
  {
    label: "오시는 길",
    href: "/contact",
    ariaLabel: "새기준병원 관절센터 오시는 길 페이지로 이동"
  }
];

export const officialHospitalJointLinks = [
  {
    label: "본원 무릎 통증 진료 안내",
    href: siteConfig.officialHospitalPages.jointPages.knee,
    description: "본원 공식 홈페이지에서 무릎 통증, 관절염, 연골판·인대 손상 진료 흐름을 확인합니다."
  },
  {
    label: "본원 어깨·회전근개 진료 안내",
    href: siteConfig.officialHospitalPages.jointPages.shoulder,
    description: "본원 공식 홈페이지에서 회전근개 파열, 오십견, 석회성 건염 등 어깨 통증 진료 흐름을 확인합니다."
  },
  {
    label: "본원 족부·발목 클리닉 안내",
    href: siteConfig.officialHospitalPages.jointPages.footAnkle,
    description: "본원 공식 홈페이지에서 발목 염좌, 발목 불안정성, 족저근막염, 무지외반증 진료 흐름을 확인합니다."
  },
  {
    label: "본원 관절 비수술치료 안내",
    href: siteConfig.officialHospitalPages.jointPages.nonSurgicalJointCare,
    description: "관절 주사치료, 체외충격파, 물리치료·운동재활 등 비수술 치료 방향을 확인합니다."
  },
  {
    label: "수술 후 지속 통증 클리닉",
    href: siteConfig.officialHospitalPages.jointPages.persistentPostoperativePain,
    description: "수술 후 통증이 지속될 때 이전 치료 기록, 영상자료, 보행 상태를 함께 확인하는 진료 안내입니다."
  },
  {
    label: "회복재활센터 공식 홈페이지",
    href: siteConfig.officialHospitalPages.rehabCenter,
    description: "관절·척추 수술 후 회복관리와 생활 통증 회복재활을 안내하는 공식 센터 홈페이지입니다."
  }
];

export const treatmentCards = [
  {
    title: "족부·발목 클리닉",
    href: "/foot-ankle",
    description: "발목 염좌, 만성 발목 불안정성, 족저근막염, 무지외반증, 아킬레스건 질환"
  },
  {
    title: "무릎통증 클리닉",
    href: "/knee",
    description:
      "무릎 관절염, 반월상연골판 손상, 십자인대 손상, 무릎 통증"
  },
  {
    title: "어깨통증 클리닉",
    href: "/shoulder",
    description: "회전근개 질환, 오십견, 석회성 건염, 어깨 충돌증후군"
  },
  {
    title: "비수술 치료",
    href: "/injection-pain",
    description:
      "약물치료, 물리치료, 주사치료, 도수치료, 체외충격파, 보조기 및 생활 교정"
  },
  {
    title: "최소침습 수술 판단",
    href: "/foot-ankle-mis",
    description:
      "필요한 경우 족부·발목 수술적 치료 가능성, 관절내시경, 치료 후 보행 회복관리"
  },
  {
    title: "김동희 원장 소개",
    href: "/doctor",
    description: "족부·발목 질환을 중심으로 무릎·어깨 관절 통증까지 단계적으로 설명합니다."
  }
];

export const careFlow = [
  {
    step: "1단계",
    title: "문진과 진찰",
    description: "발·발목, 무릎, 어깨의 통증 위치와 불편한 동작, 보행 제한, 기존 치료 경험을 확인합니다."
  },
  {
    step: "2단계",
    title: "필요한 검사",
    description: "X-ray, 초음파, MRI 등 현재 상태 판단에 필요한 검사를 선택합니다."
  },
  {
    step: "3단계",
    title: "비수술 치료",
    description: "약물치료, 물리치료, 주사치료, 도수치료, 체외충격파, 보조기와 생활 교정을 검토합니다."
  },
  {
    step: "4단계",
    title: "치료 반응 확인",
    description: "통증 변화, 보행 상태, 생활 기능 회복 정도를 확인하며 다음 치료 단계를 판단합니다."
  },
  {
    step: "5단계",
    title: "필요한 경우 수술적 치료 판단",
    description: "구조적 손상과 생활 제한이 큰 경우 환자 상태에 맞는 수술적 치료 가능성을 검토합니다."
  },
  {
    step: "6단계",
    title: "회복관리와 재활",
    description: "통증 조절, 수술 부위 상태 확인, 재활운동, 추적검사를 이어갑니다."
  },
  {
    step: "7단계",
    title: "보행 회복과 일상 복귀",
    description: "발과 발목, 무릎 기능을 함께 보며 일상 복귀 과정을 관리합니다."
  }
];

export const footAnkleDiseases = [
  "발목 염좌",
  "만성 발목 불안정성",
  "족저근막염",
  "무지외반증",
  "아킬레스건 질환",
  "발목 관절염",
  "발·발목 골절 및 외상",
  "발목 인대 손상",
  "발목 연골 손상"
];

export const faqItems = [
  {
    question: "무릎통증이 있으면 꼭 수술해야 하나요?",
    answer:
      "먼저 통증 원인, 보행 상태, 영상검사, 기존 치료 반응을 확인합니다. 수술 여부는 정확한 진단 후 환자 상태에 따라 결정합니다."
  },
  {
    question: "어깨통증은 오십견과 회전근개파열을 어떻게 구분하나요?",
    answer:
      "움직임 제한, 힘 빠짐, 야간통, 초음파나 MRI 등 필요한 검사를 함께 확인합니다. 증상만으로 단정하지 않습니다."
  },
  {
    question: "발목을 자주 삐면 어떤 질환을 의심해야 하나요?",
    answer:
      "만성 발목 불안정성, 인대 손상, 발목 관절염 등을 확인할 수 있습니다. 반복되는 삠은 진료를 통해 원인을 살피는 것이 좋습니다."
  },
  {
    question: "무지외반증은 꼭 수술해야 하나요?",
    answer:
      "변형 정도, 통증, 신발 착용 불편, 보행 제한을 함께 봅니다. 초기에는 보존적 치료를 고려하고, 필요한 경우 수술적 치료를 검토합니다."
  },
  {
    question: "족부·발목 최소침습수술은 모든 환자에게 가능한가요?",
    answer:
      "모든 환자에게 적용되는 것은 아닙니다. 질환의 정도, 변형 상태, 영상검사 결과, 전신 상태에 따라 적절한 치료 방법을 선택합니다."
  },
  {
    question: "관절주사는 얼마나 자주 맞아야 하나요?",
    answer:
      "주사 종류와 환자 상태에 따라 달라집니다. 통증 원인과 치료 반응을 확인한 뒤 필요한 범위에서 계획합니다."
  },
  {
    question: "수술 후 회복관리는 왜 중요한가요?",
    answer:
      "통증 조절, 치료 부위 상태 확인, 재활운동, 보행 회복이 일상 복귀에 영향을 줍니다. 치료 이후에도 회복 과정을 함께 관리합니다."
  }
];

export type ClinicPage = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  body: string;
  sections: {
    title: string;
    items: string[];
  }[];
  seoTitle: string;
  seoDescription: string;
  keywords?: string[];
  ctaTitle?: string;
};

export const clinicPages: Record<string, ClinicPage> = {
  knee: {
    slug: "knee",
    eyebrow: "Knee Pain Clinic",
    title: "무릎 통증, 꼭 수술부터 생각할 필요는 없습니다.",
    description:
      "증상과 보행 상태, 영상검사, 치료 반응을 함께 보고 현재 단계에 맞는 치료 순서를 정합니다.",
    body:
      "무릎 통증은 무릎 관절염, 반월상연골판 손상, 십자인대 손상, 연골 손상 등 다양한 원인으로 발생합니다. 새기준병원 관절센터는 증상, 보행 상태, 영상검사, 치료 반응을 종합하여 환자에게 맞는 치료 순서를 정합니다.",
    sections: [
      {
        title: "이런 증상이 있으면 상담이 필요합니다",
        items: [
          "계단을 내려갈 때 무릎이 아픔",
          "오래 걷기 어려움",
          "무릎에 물이 참",
          "앉았다 일어날 때 통증",
          "무릎이 붓고 열감이 있음",
          "다리가 O자처럼 휘어짐"
        ]
      },
      {
        title: "주요 질환",
        items: ["무릎 관절염", "반월상연골판 손상", "십자인대 손상", "무릎 통증", "무릎 활액막염"]
      },
      {
        title: "치료 방법",
        items: ["약물치료", "물리치료", "주사치료", "도수치료", "체외충격파", "보조기 및 생활 교정", "필요한 경우 수술적 치료 판단"]
      }
    ],
    seoTitle: "무릎통증 클리닉 | 새기준병원 관절센터",
    seoDescription:
      "용인 처인구 새기준병원 관절센터 무릎통증 클리닉. 무릎관절염, 반월상연골판 손상, 무릎 물참, 주사치료, 관절내시경 상담 안내.",
    keywords: ["용인 무릎통증", "용인 무릎관절염", "처인구 정형외과"]
  },
  shoulder: {
    slug: "shoulder",
    eyebrow: "Shoulder Pain Clinic",
    title: "밤에 아픈 어깨, 단순 오십견이 아닐 수 있습니다.",
    description:
      "야간통, 팔 들기 어려움, 힘 빠짐이 있으면 어깨 구조와 염증 상태를 함께 확인해야 합니다.",
    body:
      "어깨 통증은 회전근개 질환, 오십견, 석회성 건염, 어깨 충돌증후군 등 원인이 다양합니다. 특히 야간통, 팔을 들기 어려운 증상, 힘 빠짐이 동반되면 정확한 평가가 필요합니다.",
    sections: [
      {
        title: "이런 증상이 있으면 상담이 필요합니다",
        items: [
          "밤에 어깨가 아픔",
          "팔을 들어 올리기 어려움",
          "옷 입기, 머리 감기가 불편함",
          "특정 방향으로 움직일 때 통증",
          "어깨에서 걸리는 느낌",
          "팔 힘이 빠짐"
        ]
      },
      {
        title: "주요 질환",
        items: ["회전근개 질환", "오십견", "석회성 건염", "어깨 충돌증후군"]
      },
      {
        title: "치료 방법",
        items: ["약물치료", "물리치료", "주사치료", "도수치료", "체외충격파", "필요한 경우 수술적 치료 판단"]
      }
    ],
    seoTitle: "어깨통증 클리닉 | 새기준병원 관절센터",
    seoDescription:
      "용인 새기준병원 관절센터 어깨통증 클리닉. 오십견, 회전근개 파열, 석회성 건염, 충돌증후군, 어깨 주사치료 안내.",
    keywords: ["용인 어깨통증", "용인 회전근개파열", "용인 오십견"]
  },
  "foot-ankle": {
    slug: "foot-ankle",
    eyebrow: "Foot & Ankle Clinic",
    title: "발과 발목 통증, 보행의 문제까지 함께 봅니다.",
    description:
      "발과 발목은 체중을 지탱하고 보행을 담당하는 부위입니다. 통증의 원인과 걷는 기능을 함께 확인합니다.",
    body:
      "발과 발목은 체중을 지탱하고 보행을 담당하는 중요한 부위입니다. 발목을 반복해서 삐거나, 발바닥 통증이 오래 지속되거나, 발가락 변형과 아킬레스건 통증으로 걷기 불편하다면 정확한 진단이 필요합니다. 새기준병원 관절센터는 족부·발목 통증의 원인을 확인하고, 비수술 치료부터 필요한 경우 수술적 치료 가능성까지 단계적으로 상담합니다.",
    sections: [
      {
        title: "이런 증상이 있으면 상담이 필요합니다",
        items: [
          "발목을 반복해서 삠",
          "발목이 불안정하고 자주 꺾임",
          "발가락 변형으로 신발 신기가 어려움",
          "엄지발가락이 휘고 통증이 있음",
          "발바닥 통증이 오래 지속됨",
          "아킬레스건 주변 통증이 반복됨",
          "발목 안쪽 또는 바깥쪽 통증이 반복됨",
          "오래 걸으면 발과 발목이 아픔"
        ]
      },
      {
        title: "주요 질환",
        items: footAnkleDiseases
      },
      {
        title: "치료 방법",
        items: [
          "약물치료",
          "물리치료",
          "주사치료",
          "초음파 유도 주사",
          "도수치료",
          "체외충격파",
          "보조기 및 생활 교정",
          "필요한 경우 수술적 치료 판단",
          "치료 후 보행 회복관리"
        ]
      }
    ],
    seoTitle: "용인 족부·발목 클리닉 | 새기준병원 관절센터",
    seoDescription:
      "용인 처인구 새기준병원 관절센터. 발목 염좌, 만성 발목 불안정성, 족저근막염, 무지외반증, 아킬레스건 질환, 발목 관절염 진료 안내.",
    keywords: ["용인 족부정형외과", "용인 발목통증", "용인 무지외반증", "용인 발목불안정성"]
  },
  "foot-ankle-mis": {
    slug: "foot-ankle-mis",
    eyebrow: "Foot & Ankle MIS",
    title: "족부·발목 최소침습수술은 환자 상태를 먼저 확인합니다.",
    description:
      "변형, 반복적인 발목 불안정성, 연골 손상, 지속되는 통증은 정확한 진단 후 치료 순서를 정해야 합니다.",
    body:
      "모든 족부·발목 질환이 수술이 필요한 것은 아닙니다. 변형 진행, 반복적인 발목 불안정성, 연골 손상, 보존적 치료 반응을 함께 확인한 뒤 환자 상태에 따라 수술적 치료 가능성을 검토할 수 있습니다. 새기준병원 관절센터는 가능한 경우 최소침습적 접근 여부와 치료 후 회복관리까지 함께 상담합니다.",
    sections: [
      {
        title: "강조할 수술과 치료",
        items: [
          "최소침습 무지외반증 교정술",
          "발목 관절내시경",
          "발목 인대 손상 수술",
          "발목 충돌증후군 수술",
          "발목 연골 손상 치료",
          "족부 변형 교정",
          "치료 후 보행 회복관리"
        ]
      },
      {
        title: "치료 전 확인할 것",
        items: ["질환의 정도", "변형 상태", "통증 원인", "영상검사 결과", "환자의 전신 상태"]
      },
      {
        title: "주의 문구",
        items: [
          "최소침습수술은 모든 환자에게 적용되는 것은 아니며, 환자 상태에 따라 적절한 수술 방법을 선택합니다."
        ]
      }
    ],
    seoTitle: "족부·발목 최소침습수술 판단 | 새기준병원 관절센터",
    seoDescription:
      "무지외반증, 발목불안정증, 발목 관절내시경, 발목 인대 손상, 족부·발목 변형 질환에 대해 환자 상태에 맞는 최소침습적 치료를 고려합니다.",
    keywords: ["용인 발목 수술 판단", "용인 발목관절내시경", "용인 무지외반증", "족부·발목 최소침습수술 판단"],
    ctaTitle: "발과 발목 통증이 반복된다면 정확한 진단과 치료 순서를 먼저 확인하세요."
  },
  "injection-pain": {
    slug: "injection-pain",
    eyebrow: "Injection & Pain Care",
    title: "주사치료도 정확한 진단과 위치가 중요합니다.",
    description:
      "통증을 줄이는 데서 그치지 않고 염증 조절과 기능 회복을 돕는 단계적 치료로 접근합니다.",
    body:
      "관절주사와 통증시술은 단순히 통증을 줄이는 치료가 아니라, 염증 조절과 기능 회복을 돕기 위한 단계적 치료입니다. 초음파를 활용하여 병변 부위와 주변 구조를 확인하고, 환자의 상태에 맞는 치료를 계획합니다.",
    sections: [
      {
        title: "진료 항목",
        items: [
          "약물치료",
          "물리치료",
          "주사치료",
          "초음파 유도 주사",
          "도수치료",
          "체외충격파",
          "보조기 및 생활 교정",
          "주사치료 후 주의사항"
        ]
      }
    ],
    seoTitle: "관절주사·통증시술 | 새기준병원 관절센터",
    seoDescription:
      "초음파 유도 관절주사, 힘줄·점액낭 주사, 신경차단술, 체외충격파 등 단계적 비수술·통증치료 안내.",
    keywords: ["용인 관절주사", "용인 통증시술", "초음파 유도 주사"]
  },
  "minimally-invasive-surgery": {
    slug: "minimally-invasive-surgery",
    eyebrow: "Minimally Invasive Surgery",
    title: "필요한 경우에는 작게 절개하고, 회복을 고려하는 수술을 지향합니다.",
    description:
      "보존적 치료 반응과 구조적 손상, 생활 제한 정도를 확인해 필요한 경우 수술적 치료를 검토합니다.",
    body:
      "모든 관절질환이 수술이 필요한 것은 아닙니다. 보존적 치료에도 통증이 지속되거나, 구조적 손상이 뚜렷하거나, 일상생활 제한이 큰 경우에는 수술적 치료 가능성을 환자 상태에 따라 검토할 수 있습니다. 새기준병원 관절센터는 관절내시경, 최소절개 수술, 족부·발목 최소침습수술 가능성과 회복관리 방향을 진찰 소견과 영상검사 결과를 바탕으로 상담합니다.",
    sections: [
      {
        title: "확인할 내용",
        items: [
          "관절내시경이란?",
          "최소침습 수술의 장점",
          "수술 여부 판단",
          "수술 전 확인할 것",
          "수술 후 회복관리",
          "족부·발목 최소침습수술 판단과 보행 회복"
        ]
      }
    ],
    seoTitle: "최소침습 관절수술 판단 | 새기준병원 관절센터",
    seoDescription:
      "관절내시경, 최소절개 수술, 족부·발목 최소침습수술 가능성과 치료 후 회복관리까지 단계적으로 상담하는 새기준병원 관절센터.",
    keywords: ["용인 관절내시경", "최소침습 관절수술 판단", "용인 발목 수술 판단"]
  },
  "osteoporosis-fracture": {
    slug: "osteoporosis-fracture",
    eyebrow: "Osteoporosis & Fracture",
    title: "골절 치료 이후에는 재골절 예방이 중요합니다.",
    description:
      "고령 환자 골절은 치료 이후 골다공증 평가, 낙상 위험 관리, 재활 계획까지 함께 봅니다.",
    body:
      "고령 환자의 골절은 단순히 뼈가 부러진 문제로 끝나지 않습니다. 골다공증 평가, 낙상 위험 관리, 재활, 재골절 예방까지 함께 관리해야 합니다.",
    sections: [
      {
        title: "진료 항목",
        items: ["골다공증 평가", "고령 환자 골절", "낙상 위험 관리", "재골절 예방", "회복관리"]
      }
    ],
    seoTitle: "골다공증·골절 클리닉 | 새기준병원 관절센터",
    seoDescription: "고령 환자 골절, 골다공증 평가, 낙상 위험 관리, 재골절 예방과 회복관리 안내.",
    keywords: ["용인 골다공증", "용인 골절", "고령 환자 골절"]
  },
  recovery: {
    slug: "recovery",
    eyebrow: "Postoperative Recovery",
    title: "수술은 끝이 아니라 회복의 시작입니다.",
    description:
      "통증 조절, 수술 부위 상태 확인, 보행 회복, 재활운동, 외래 추적 관찰까지 일상 복귀 과정을 함께 관리합니다.",
    body:
      "수술 후에는 통증 조절, 수술 부위 상태 확인, 보행 회복, 재활운동, 추적검사가 중요합니다. 새기준병원 관절센터는 치료 범위와 환자 상태에 맞춰 회복 과정을 함께 관리합니다.",
    sections: [
      {
        title: "회복관리 항목",
        items: [
          "수술 직후 관리",
          "통증 조절",
          "수술 부위 상태 확인",
          "보행 회복",
          "재활운동",
          "외래 추적 관찰",
          "일상 복귀 안내",
      "족부·발목 치료 후 보행 회복관리"
        ]
      }
    ],
    seoTitle: "수술 후 회복관리 | 새기준병원 관절센터",
    seoDescription:
      "관절 치료와 족부·발목 치료 후 통증 조절, 보행 회복, 재활운동, 추적검사와 일상 복귀 관리 안내.",
    keywords: ["관절 치료 후 회복", "수술 후 재활", "보행 회복관리"]
  }
};

export const orthopedicDoctor = {
  name: "김동희 원장",
  title: "정형외과 전문의",
  imageSrc: "/images/doctors/orthopedic-doctor.png",
  imageAlt: "새기준병원 정형외과 의료진 프로필 사진",
  emphasis: "족부·발목 질환과 보행 문제를 중심으로, 무릎·어깨 통증과 관절질환까지 함께 진료합니다.",
  specialties: [
    "족부·발목 질환",
    "족부·발목 수술 판단",
    "무지외반증",
    "발목 불안정증",
    "발목 인대 손상",
    "발목 관절내시경",
    "무릎 통증",
    "어깨 통증",
    "관절주사 및 통증시술",
    "치료 후 보행 회복관리"
  ],
  educationAndCareer: [
    "전북대학교 의학전문대학원 의학과",
    "전북대학교병원",
    "전북대학교병원 정형외과",
    "전북대학교 의과대학원 의학과",
    "전북대학교병원 정형외과",
    "전북소재 척추관절병원"
  ],
  activities: [
    "스포츠의학 인증 전문의",
    "대한정형외과학회 정회원",
    "대한족부족관절학회 정회원",
    "대한스포츠의학회 정회원",
    "대한슬관절학회 정회원",
    "대한고관절학회 정회원",
    "대한관절경학회 정회원",
    "대한말초신경학회 정회원"
  ],
  philosophy:
    "영상검사 결과만으로 치료 방향을 정하기보다 환자가 실제로 겪는 통증, 보행 제한, 생활 목표를 함께 확인하고, 비수술 치료부터 수술적 치료 가능성까지 단계적으로 설명합니다."
};

export const doctorProfile = {
  ...orthopedicDoctor,
  fields: orthopedicDoctor.specialties
};

const pending = "#";

export const columnList = [
  { title: "손목 골절, 깁스만 해도 될까요? 요골 원위부 골절의 보존치료와 수술 판단", category: "손·손목", href: "/wrist/distal-radius-fracture", excerpt: "손목 골절에서 X-ray와 CT, 부목·석고 고정, 수술적 고정 판단 기준을 설명합니다." },
  { title: "용인 무릎통증, 꼭 수술해야 하나요?", category: "무릎", href: "/column/knee-pain-yongin", excerpt: "무릎 통증의 원인과 치료 순서를 먼저 확인해야 하는 이유를 설명합니다." },
  { title: "계단 내려갈 때 무릎이 아픈 이유", category: "무릎", href: "/column/stair-descent-knee-pain", excerpt: "계단 통증에서 확인해야 할 관절염, 연골, 근력 문제를 정리합니다." },
  { title: "무릎에 물이 찼다는 말은 무슨 뜻일까요?", category: "무릎", href: "/column/knee-joint-effusion", excerpt: "무릎 붓기와 활액막염, 염증 반응을 쉽게 설명합니다." },
  { title: "퇴행성 무릎관절염, 주사치료는 언제 도움이 될까요?", category: "무릎", href: "/column/knee-arthritis-injection", excerpt: "주사치료가 도움이 되는 상황과 함께 확인할 점을 안내합니다." },
  { title: "반월상연골판 손상, 수술이 필요한 경우는?", category: "무릎", href: "/column/meniscus-tear-surgery", excerpt: "증상, 파열 양상, 생활 제한에 따라 치료 방향이 달라질 수 있습니다." },
  { title: "무릎 MRI는 언제 찍어야 할까요?", category: "무릎", href: "/column/knee-mri-timing", excerpt: "X-ray만으로 부족할 때 MRI가 필요한 경우를 정리합니다." },
  { title: "무릎 주사를 맞아도 계속 아픈 이유", category: "무릎", href: pending, excerpt: "통증 원인이 여러 가지일 때 치료 반응이 다를 수 있습니다." },
  { title: "인공관절 수술 전 꼭 확인해야 할 것들", category: "무릎", href: pending, excerpt: "수술 결정 전 증상, 보행, 영상검사, 전신 상태를 확인합니다." },
  { title: "고령 환자 무릎통증, 치료 순서는 어떻게 정할까요?", category: "무릎", href: pending, excerpt: "기저질환과 활동 목표를 함께 고려한 치료 계획을 설명합니다." },
  { title: "무릎 관절내시경 수술은 언제 필요할까요?", category: "무릎", href: "/column/arthroscopy-timing", excerpt: "보존적 치료 이후 수술적 치료를 검토하는 기준을 안내합니다." },
  { title: "용인 어깨통증, 오십견과 회전근개파열 차이", category: "어깨", href: "/column/shoulder-pain-yongin", excerpt: "오십견과 회전근개 파열이 어떻게 다르게 나타나는지 살펴봅니다." },
  { title: "밤에 어깨가 아프면 어떤 질환을 의심해야 할까요?", category: "어깨", href: "/column/shoulder-night-pain", excerpt: "야간통이 있을 때 확인할 어깨 질환을 정리합니다." },
  { title: "팔을 들기 힘든 어깨통증, 단순 근육통일까요?", category: "어깨", href: "/column/arm-raising-shoulder-pain", excerpt: "팔을 올릴 때 통증과 힘 빠짐이 있는 경우의 평가 기준입니다." },
  { title: "회전근개 파열, 수술부터 생각해야 하나요?", category: "어깨", href: "/column/rotator-cuff-surgery-decision", excerpt: "파열 크기와 기능 제한에 따라 치료 접근이 달라질 수 있습니다." },
  { title: "석회성 건염은 왜 갑자기 심하게 아플까요?", category: "어깨", href: pending, excerpt: "급성 통증이 생기는 이유와 치료 방향을 설명합니다." },
  { title: "어깨 주사치료 후 주의사항", category: "어깨", href: pending, excerpt: "주사치료 후 통증 변화와 활동 조절에 대해 안내합니다." },
  { title: "어깨 MRI는 언제 필요할까요?", category: "어깨", href: "/column/shoulder-mri-timing", excerpt: "회전근개 손상과 구조적 문제 확인이 필요한 경우를 정리합니다." },
  { title: "오십견은 시간이 지나면 저절로 좋아질까요?", category: "어깨", href: "/column/frozen-shoulder-vs-rotator-cuff", excerpt: "오십견과 회전근개 질환을 구분해야 하는 이유를 설명합니다." },
  { title: "어깨 관절내시경 수술은 어떤 경우에 하나요?", category: "어깨", href: pending, excerpt: "통증과 기능 제한이 지속될 때 수술 여부를 검토하는 흐름입니다." },
  { title: "어깨 통증이 목디스크와 헷갈리는 이유", category: "어깨", href: "/column/shoulder-vs-cervical-disc", excerpt: "목과 어깨 통증이 겹칠 때 확인할 증상을 정리합니다." },
  { title: "용인 발목통증, 반복해서 삔다면 확인해야 할 것", category: "족부·발목", href: "/column/yongin-ankle-pain-repeated-sprain", excerpt: "반복되는 발목 염좌에서 확인해야 할 구조와 보행 문제를 정리합니다." },
  { title: "발목을 자주 삐는 이유, 만성 발목 불안정증이란?", category: "족부·발목", href: "/column/ankle-instability", excerpt: "발목 불안정성과 인대 손상을 함께 살펴야 하는 이유를 안내합니다." },
  { title: "무지외반증, 꼭 수술해야 하나요?", category: "족부·발목", href: "/column/hallux-valgus", excerpt: "변형 정도와 통증, 신발 착용 불편을 기준으로 치료 순서를 설명합니다." },
  { title: "발바닥 통증, 족저근막염만은 아닐 수 있습니다", category: "족부·발목", href: "/column/plantar-pain-differential", excerpt: "발바닥 통증에서 확인할 여러 질환을 정리합니다." },
  { title: "발목 관절내시경 수술은 언제 필요할까요?", category: "족부·발목", href: pending, excerpt: "발목 연골 손상과 충돌증후군에서 관절내시경을 검토하는 흐름입니다." },
  { title: "발목 인대파열, 보존치료와 수술치료의 기준", category: "족부·발목", href: "/column/ankle-ligament-tear-treatment", excerpt: "인대 손상 정도와 불안정성에 따라 치료 계획이 달라질 수 있습니다." },
  { title: "발가락 변형 때문에 신발 신기가 힘들 때", category: "족부·발목", href: pending, excerpt: "무지외반증, 소건막류, 망치족지 등 변형 질환을 안내합니다." },
  { title: "발목 연골 손상은 왜 오래 아플까요?", category: "족부·발목", href: pending, excerpt: "연골 손상과 만성 통증의 관계를 쉽게 설명합니다." },
  { title: "족부·발목 최소침습수술이란 무엇인가요?", category: "족부·발목", href: "/column/foot-ankle-mis", excerpt: "가능한 경우 작은 절개와 회복 과정을 함께 고려하는 치료 접근을 설명합니다." },
  { title: "수술 후 보행 회복관리는 왜 중요할까요?", category: "족부·발목", href: pending, excerpt: "발과 발목 치료 후 통증 조절, 재활, 보행 회복관리의 의미를 안내합니다." }
];

export type ColumnDetail = {
  slug: string;
  title: string;
  description: string;
  category: string;
  readingTime: string;
  sections: {
    title: string;
    body: string[];
  }[];
};

export const columnDetails: Record<string, ColumnDetail> = {
  "rotator-cuff-surgery-decision": {
    slug: "rotator-cuff-surgery-decision",
    title: "회전근개 파열, 수술부터 생각해야 하나요?",
    description: "회전근개 파열 진단 후 수술과 비수술 치료를 결정하는 기준을 파열 크기, 증상, 나이와 활동 수준에 따라 설명합니다.",
    category: "어깨",
    readingTime: "약 4분",
    sections: [
      { title: "회전근개 파열은 힘줄 상태와 기능을 함께 봅니다", body: ["회전근개는 팔을 들어 올리고 어깨를 안정적으로 움직이게 하는 힘줄입니다. 파열이 생기면 팔을 들 때 통증이 있거나 힘이 빠지고 밤에 통증이 심해질 수 있습니다.", "하지만 파열이라는 진단만으로 치료 방향이 바로 정해지지는 않습니다. 파열 크기, 통증 기간, 근력저하, 일상생활 제한을 함께 확인해야 합니다."] },
      { title: "비수술 치료를 먼저 고려할 수 있는 경우", body: ["파열 크기가 작고 근력저하가 뚜렷하지 않으며 통증 조절과 운동치료에 반응하는 경우에는 약물치료, 주사치료, 재활치료 같은 비수술 치료를 고려할 수 있습니다.", "특히 어깨 주변 근육의 균형을 회복하고 관절 운동범위를 유지하는 과정이 중요합니다."] },
      { title: "수술 상담이 필요한 경우", body: ["파열 크기가 크거나 시간이 지나며 커지는 경우, 팔 힘이 뚜렷하게 떨어지는 경우, 야간통과 생활 제한이 지속되는 경우에는 봉합술 같은 수술적 치료 가능성을 상담할 수 있습니다.", "나이와 활동 수준, 직업, 당뇨나 흡연 여부 같은 전신 상태도 치료 계획에 영향을 줄 수 있습니다."] },
      { title: "검사 결과와 증상이 맞는지 확인합니다", body: ["초음파나 MRI에서 보이는 파열과 실제 통증 원인이 항상 동일한 것은 아닙니다.", "진찰에서 근력저하와 운동 제한을 확인하고 영상검사 결과와 맞춰 보아야 수술과 비수술 치료의 순서를 정할 수 있습니다."] },
      { title: "자주 묻는 질문", body: ["Q. 회전근개가 찢어졌다고 하면 시간이 지나며 더 나빠지나요? A. 파열 상태에 따라 다릅니다. 크기와 증상 변화를 정기적으로 확인하며 치료 방향을 상담합니다.", "Q. 주사치료만으로 파열이 붙나요? A. 주사치료는 통증과 염증 조절에 도움이 될 수 있지만 힘줄 파열 자체를 모두 회복시키는 치료로 설명하기는 어렵습니다.", "Q. 수술 후 바로 팔을 쓸 수 있나요? A. 봉합 부위가 안정되는 시간이 필요합니다. 보조기 착용, 운동범위 회복, 근력 재활은 수술 범위에 따라 달라집니다."] }
    ]
  },
  "shoulder-vs-cervical-disc": {
    slug: "shoulder-vs-cervical-disc",
    title: "어깨 통증이 목디스크와 헷갈리는 이유",
    description: "어깨 통증과 경추 디스크 통증이 혼동되는 이유와 두 질환을 구별할 때 확인하는 증상을 설명합니다.",
    category: "어깨",
    readingTime: "약 4분",
    sections: [
      { title: "목과 어깨 통증은 서로 겹쳐 보일 수 있습니다", body: ["어깨가 아프다고 모두 어깨 질환은 아니고, 목디스크나 경추 신경 압박으로 어깨와 팔 통증이 나타날 수 있습니다.", "반대로 회전근개 파열이나 오십견도 목 주변까지 뻐근하게 느껴질 수 있어 증상만으로 구분하기 어려운 경우가 있습니다."] },
      { title: "어깨 질환에서 자주 보이는 특징", body: ["팔을 옆으로 들어 올리거나 뒤로 돌릴 때 통증이 심하고, 특정 각도에서 걸리는 느낌이나 힘 빠짐이 있다면 어깨 힘줄이나 관절 문제를 확인합니다.", "오십견처럼 관절이 굳는 질환은 다른 사람이 팔을 들어 올려도 움직임이 제한되는 경우가 많습니다."] },
      { title: "목디스크를 함께 확인해야 하는 경우", body: ["목을 뒤로 젖히거나 돌릴 때 어깨와 팔로 뻗치는 통증이 생기거나, 손 저림과 감각저하가 동반되면 경추 신경 문제를 확인해야 합니다.", "팔 전체가 저리거나 손가락까지 증상이 이어지는 경우에는 목 상태와 신경학적 소견을 함께 보는 것이 도움이 됩니다."] },
      { title: "진찰과 영상검사를 함께 판단합니다", body: ["어깨 초음파나 MRI, 경추 X-ray나 MRI는 필요한 경우 선택할 수 있습니다.", "검사보다 중요한 것은 통증이 생기는 동작, 근력저하 위치, 감각 변화, 어깨 관절 운동범위를 함께 비교하는 과정입니다."] },
      { title: "자주 묻는 질문", body: ["Q. 어깨가 아픈데 손도 저리면 어느 진료를 봐야 하나요? A. 어깨와 경추를 함께 확인하는 것이 좋습니다. 손 저림은 신경 증상일 수 있습니다.", "Q. 목디스크가 있어도 어깨 치료가 필요할 수 있나요? A. 가능합니다. 경추 질환과 어깨 질환이 함께 있는 경우도 있어 증상과 진찰 소견을 함께 봅니다.", "Q. 통증 위치만으로 구분할 수 있나요? A. 위치만으로는 어렵습니다. 움직임 제한, 근력, 감각, 영상검사 결과를 종합해 판단합니다."] }
    ]
  },
  "meniscus-tear-surgery": {
    slug: "meniscus-tear-surgery",
    title: "반월상연골판 손상, 수술이 필요한 경우는?",
    description: "무릎 반월상연골판 손상 시 보존치료와 수술치료를 어떤 기준으로 결정하는지 설명합니다.",
    category: "무릎",
    readingTime: "약 4분",
    sections: [
      { title: "반월상연골판은 무릎의 충격을 줄이는 구조입니다", body: ["반월상연골판은 허벅지뼈와 정강이뼈 사이에서 충격을 흡수하고 무릎이 부드럽게 움직이도록 돕는 구조입니다.", "손상이 생기면 무릎 안쪽이나 바깥쪽 통증, 붓기, 걸리는 느낌, 쪼그려 앉기 어려움이 나타날 수 있습니다."] },
      { title: "모든 손상이 수술로 이어지지는 않습니다", body: ["통증이 비교적 가볍고 잠김 증상이 뚜렷하지 않으며 일상생활 제한이 크지 않은 경우에는 약물치료, 물리치료, 근력운동 같은 보존치료를 먼저 고려할 수 있습니다.", "파열 위치와 모양, 나이, 활동량, 관절염 동반 여부에 따라 치료 방향은 달라질 수 있습니다."] },
      { title: "수술 상담을 고려하는 경우", body: ["무릎이 반복적으로 잠기거나 펴지지 않는 경우, 파열 조각이 관절 안에서 걸리는 경우, 통증과 붓기가 반복되어 생활 제한이 큰 경우에는 관절내시경 수술 가능성을 상담할 수 있습니다.", "다만 수술 여부는 MRI 소견만으로 정하지 않고 진찰 소견, 증상 기간, 보행 상태, 기존 치료 반응을 함께 확인합니다."] },
      { title: "수술 후에는 회복 계획도 중요합니다", body: ["반월상연골판 수술은 절제인지 봉합인지에 따라 회복 속도와 재활 과정이 달라집니다.", "수술을 상담할 때는 수술 방법뿐 아니라 체중 부하 시기, 무릎 운동범위 회복, 근력운동 계획을 함께 설명받는 것이 좋습니다."] },
      { title: "자주 묻는 질문", body: ["Q. MRI에서 반월상연골판 파열이라고 하면 수술해야 하나요? A. 그렇지 않습니다. 증상과 파열 양상, 관절염 여부, 일상생활 제한 정도를 함께 확인해 치료 방향을 상담합니다.", "Q. 무릎이 잠기는 느낌이 있으면 어떤 의미인가요? A. 파열 조각이 관절 움직임을 방해할 때 나타날 수 있습니다. 반복되거나 무릎이 펴지지 않으면 진료가 필요할 수 있습니다.", "Q. 오래된 파열도 치료가 가능한가요? A. 파열 상태와 통증 원인에 따라 접근이 달라질 수 있습니다. 영상검사와 진찰 소견을 함께 확인해 상담합니다."] }
    ]
  },
  "knee-mri-timing": {
    slug: "knee-mri-timing",
    title: "무릎 MRI는 언제 찍어야 할까요?",
    description: "무릎 통증이 있을 때 MRI 검사가 필요한 경우와 X-ray만으로 먼저 확인할 수 있는 경우를 구분해 안내합니다.",
    category: "무릎",
    readingTime: "약 4분",
    sections: [
      { title: "무릎 검사는 단계적으로 선택합니다", body: ["무릎 통증이 있다고 처음부터 모든 경우에 MRI가 필요한 것은 아닙니다. 통증 위치, 붓기, 외상 여부, 관절 운동범위, 보행 상태를 먼저 확인합니다.", "X-ray는 관절 간격, 뼈의 정렬, 골절, 진행된 관절염 여부를 확인하는 기본 검사로 도움이 됩니다."] },
      { title: "MRI가 도움이 되는 경우", body: ["반월상연골판 손상, 인대 손상, 연골 손상, 골멍, 힘줄 문제처럼 X-ray에서 잘 보이지 않는 구조를 확인해야 할 때 MRI를 고려할 수 있습니다.", "무릎이 잠기거나 불안정한 느낌이 반복되는 경우, 운동 중 다친 뒤 붓기와 통증이 지속되는 경우, 보존치료에도 통증이 반복되는 경우에는 추가 검사가 필요할 수 있습니다."] },
      { title: "X-ray만으로 먼저 볼 수 있는 경우", body: ["퇴행성 관절염이 의심되거나 무릎 정렬과 관절 간격을 확인해야 하는 경우에는 X-ray가 먼저 시행될 수 있습니다.", "초기 진찰과 X-ray 결과를 바탕으로 MRI가 필요한지, 물리치료나 약물치료부터 시작할지 치료 순서를 정합니다."] },
      { title: "검사 결과보다 증상과 기능을 함께 봅니다", body: ["MRI에서 이상 소견이 보인다고 모두 같은 치료가 필요한 것은 아닙니다.", "영상검사 결과가 실제 통증 위치와 맞는지, 계단 보행이나 쪼그려 앉기 같은 생활 기능에 어떤 영향을 주는지 함께 확인해야 합니다."] },
      { title: "자주 묻는 질문", body: ["Q. 무릎이 아프면 바로 MRI를 찍는 것이 좋나요? A. 외상이나 잠김, 불안정성 같은 신호가 있는지 먼저 확인하고 필요한 경우 MRI를 고려합니다.", "Q. X-ray가 정상이어도 무릎이 아플 수 있나요? A. 가능합니다. 연골판, 인대, 힘줄, 초기 연골 손상은 X-ray에서 잘 보이지 않을 수 있습니다.", "Q. MRI를 찍으면 치료 방법이 바로 정해지나요? A. MRI는 판단에 도움이 되지만 치료 방향은 진찰 소견과 증상, 기존 치료 반응을 함께 보아 정합니다."] }
    ]
  },
  "yongin-ankle-pain-repeated-sprain": {
    slug: "yongin-ankle-pain-repeated-sprain",
    title: "용인 발목통증, 반복해서 삔다면 확인해야 할 것",
    description: "발목을 자주 삐는 이유와 만성 발목 불안정증을 확인하고 치료 순서를 정해야 하는 이유를 설명합니다.",
    category: "족부·발목",
    readingTime: "약 4분",
    sections: [
      { title: "반복되는 발목 염좌는 단순한 삠으로만 보기 어렵습니다", body: ["발목을 한 번 삔 뒤 통증이 오래가거나, 비슷한 방향으로 자주 꺾인다면 인대가 충분히 회복되지 않았거나 발목 안정성이 떨어졌을 수 있습니다.", "발목 바깥쪽 통증, 붓기, 불안정한 느낌, 울퉁불퉁한 길에서 접질리는 증상이 반복되면 진료를 통해 확인하는 것이 좋습니다."] },
      { title: "만성 발목 불안정증을 확인합니다", body: ["발목 인대가 늘어나거나 손상된 뒤 균형 감각과 근력이 회복되지 않으면 만성 발목 불안정증으로 이어질 수 있습니다.", "이 상태가 지속되면 발목 연골 손상, 충돌증후군, 보행 습관 변화가 함께 생길 수 있어 통증 부위뿐 아니라 보행 상태도 확인합니다."] },
      { title: "치료 순서는 손상 정도에 따라 달라집니다", body: ["초기에는 보호, 약물치료, 물리치료, 보조기, 근력과 균형 운동을 통해 안정성을 회복하는 방향을 고려합니다.", "반복적인 접질림이 지속되거나 MRI에서 인대 손상과 연골 문제가 확인되는 경우에는 수술적 치료 가능성을 상담할 수 있습니다."] },
      { title: "보행과 하지정렬도 함께 봅니다", body: ["발목은 체중을 지탱하고 방향 전환을 조절하는 관절입니다.", "평발, 요족, 종아리 근력, 발목 운동범위, 무릎과 고관절 부담을 함께 확인하면 재발을 줄이는 생활 관리와 재활 방향을 정하는 데 도움이 됩니다."] },
      { title: "자주 묻는 질문", body: ["Q. 발목을 자주 삐면 인대가 끊어진 건가요? A. 모든 경우가 파열은 아닙니다. 다만 반복된다면 인대 손상과 불안정성을 확인해야 합니다.", "Q. 보호대만 착용하면 괜찮을까요? A. 보호대는 도움이 될 수 있지만 근력과 균형 회복이 함께 필요할 수 있습니다.", "Q. 오래된 발목 염좌도 치료할 수 있나요? A. 통증 원인과 불안정성 정도를 확인한 뒤 재활, 보조기, 수술 상담 등 치료 단계를 정할 수 있습니다."] }
    ]
  },
  "ankle-ligament-tear-treatment": {
    slug: "ankle-ligament-tear-treatment",
    title: "발목 인대파열, 보존치료와 수술치료의 기준",
    description: "발목 인대 손상 시 등급별 치료 방법과 보존치료, 수술치료를 선택하는 기준을 설명합니다.",
    category: "족부·발목",
    readingTime: "약 4분",
    sections: [
      { title: "발목 인대 손상은 정도를 나누어 봅니다", body: ["발목 인대 손상은 가벼운 늘어남부터 부분 파열, 완전 파열까지 정도가 다양합니다.", "통증과 붓기만으로 손상 정도를 단정하기 어렵기 때문에 압통 위치, 불안정성 검사, X-ray, 필요 시 MRI를 함께 확인합니다."] },
      { title: "보존치료를 우선 고려하는 경우", body: ["초기 손상에서는 보호, 냉찜질, 압박, 거상, 보조기 착용, 약물치료와 물리치료를 통해 통증과 붓기를 조절합니다.", "이후 발목 운동범위, 종아리 근력, 균형 감각을 회복하는 재활치료가 중요합니다."] },
      { title: "수술적 치료 상담이 필요한 경우", body: ["완전 파열이 의심되거나 불안정성이 반복되는 경우, 보존치료 후에도 접질림이 계속되는 경우, 연골 손상이나 관절 내 병변이 동반된 경우에는 수술 가능성을 상담할 수 있습니다.", "수술 여부는 손상 정도뿐 아니라 활동 수준, 직업, 보행 불편, 기존 치료 반응을 함께 확인해 결정합니다."] },
      { title: "회복 과정에서 확인할 것", body: ["발목 인대 손상은 통증이 줄었다고 회복이 끝난 것은 아닐 수 있습니다.", "다시 삐지 않기 위해서는 균형 훈련, 근력 회복, 보행 패턴 확인, 운동 복귀 시점 조절이 필요합니다."] },
      { title: "자주 묻는 질문", body: ["Q. 발목 인대가 파열되면 깁스를 해야 하나요? A. 손상 정도와 불안정성에 따라 보조기, 부목, 깁스 등 보호 방법이 달라질 수 있습니다.", "Q. 인대가 파열되면 수술이 필요한가요? A. 모든 파열이 수술로 이어지지는 않습니다. 불안정성, 동반 손상, 치료 반응을 함께 확인합니다.", "Q. 통증이 없어지면 운동해도 되나요? A. 통증 감소와 함께 근력, 균형, 발목 운동범위가 회복됐는지 확인하는 것이 좋습니다."] }
    ]
  },
  "shoulder-night-pain": {
    slug: "shoulder-night-pain",
    title: "밤에 어깨가 아프면 어떤 질환을 의심해야 할까요?",
    description: "밤에 어깨 통증이 심해지는 이유와 회전근개 파열, 오십견, 석회성 건염 등 확인할 질환을 안내합니다.",
    category: "어깨",
    readingTime: "약 4분",
    sections: [
      { title: "밤에 어깨 통증이 심해지는 이유", body: ["밤에 어깨 통증이 심하면 잠을 자다가 깨거나 아픈 쪽으로 눕기 어려워질 수 있습니다.", "누운 자세에서 어깨 힘줄과 관절 주변 압력이 달라지고 염증 반응이 두드러지면서 야간통이 심하게 느껴질 수 있습니다."] },
      { title: "의심할 수 있는 대표 질환", body: ["회전근개 파열은 팔을 들 때 통증과 힘 빠짐이 함께 나타날 수 있고, 오십견은 어깨가 굳어 팔을 뒤로 돌리거나 위로 올리기 어렵습니다.", "석회성 건염은 갑자기 심한 통증이 생길 수 있으며, 충돌증후군이나 이두건염도 밤에 불편감을 만들 수 있습니다."] },
      { title: "어떤 경우에 검사가 필요할까요?", body: ["야간통이 반복되거나 팔을 들기 어렵고 힘이 빠지는 느낌이 있으면 진찰과 영상검사가 필요할 수 있습니다.", "X-ray로 석회나 관절 상태를 확인하고, 힘줄 손상이 의심되면 초음파나 MRI를 고려할 수 있습니다."] },
      { title: "치료 방향은 어떻게 정하나요?", body: ["초기에는 약물치료, 주사치료, 물리치료, 운동 범위 회복을 통해 통증을 조절하는 치료를 고려할 수 있습니다.", "회전근개 파열이 크거나 근력저하와 생활 제한이 지속되면 수술적 치료 가능성을 상담할 수 있습니다."] },
      { title: "새기준병원 관절센터에서는 무엇을 함께 확인하나요?", body: ["새기준병원 관절센터는 통증이 심해지는 자세, 어깨 운동범위, 근력, X-ray·초음파·MRI 결과를 함께 확인합니다.", "정확한 치료 방향은 통증 양상, 진찰 소견, 영상검사 결과를 함께 확인한 뒤 상담하는 것이 좋습니다."] },
      { title: "자주 묻는 질문", body: ["Q. 밤에 아프면 회전근개 파열인가요? A. 회전근개 파열에서 야간통이 흔하지만 오십견, 석회성 건염 등 다른 질환도 가능합니다.", "Q. 아픈 쪽으로 누워서 생긴 통증인가요? A. 자세가 통증을 악화할 수 있지만 반복된다면 어깨 힘줄이나 관절 문제를 확인해야 합니다.", "Q. 주사치료만 받으면 되나요? A. 통증 조절에 도움이 될 수 있지만 원인과 손상 정도에 따라 치료 방향은 달라질 수 있습니다."] }
    ]
  },
  "arm-raising-shoulder-pain": {
    slug: "arm-raising-shoulder-pain",
    title: "팔을 들기 힘든 어깨통증, 단순 근육통일까요?",
    description: "팔을 들기 힘든 어깨통증이 있을 때 회전근개 손상, 오십견, 충돌증후군을 구분하는 기준을 설명합니다.",
    category: "어깨",
    readingTime: "약 4분",
    sections: [
      { title: "팔을 들기 힘들다면 원인을 구분해야 합니다", body: ["팔을 들 때 어깨가 아프거나 힘이 빠지면 단순 근육통으로만 보기 어려울 수 있습니다.", "어깨 힘줄 손상, 오십견, 충돌증후군, 석회성 건염처럼 치료 방향이 다른 질환들이 비슷한 증상으로 나타날 수 있습니다."] },
      { title: "의심할 수 있는 대표 질환", body: ["특정 각도에서 통증이 심하고 팔에 힘이 빠지면 회전근개 손상을 확인합니다.", "팔을 다른 사람이 들어 올려도 잘 올라가지 않으면 오십견처럼 관절 운동 제한이 두드러지는 질환을 의심할 수 있습니다."] },
      { title: "어떤 경우에 검사가 필요할까요?", body: ["통증이 2주 이상 지속되거나 팔을 드는 동작이 어려워 일상생활에 지장이 있으면 진료를 고려하는 것이 좋습니다.", "근력저하가 뚜렷하거나 야간통이 동반되면 초음파나 MRI로 힘줄 상태를 확인할 수 있습니다."] },
      { title: "치료 방향은 어떻게 정하나요?", body: ["근육 긴장이나 염증이 주된 원인이라면 약물치료, 물리치료, 운동치료를 먼저 고려할 수 있습니다.", "힘줄 파열이나 관절 운동 제한이 확인되면 주사치료, 재활치료, 수술적 치료 상담 등 치료 단계가 달라질 수 있습니다."] },
      { title: "새기준병원 관절센터에서는 무엇을 함께 확인하나요?", body: ["새기준병원 관절센터는 팔을 올리는 각도, 수동 운동범위, 어깨 근력, 통증 위치, 영상검사 결과를 함께 봅니다.", "정확한 치료 방향은 증상과 진찰 소견, 영상검사 결과를 함께 확인한 뒤 상담하는 것이 좋습니다."] },
      { title: "자주 묻는 질문", body: ["Q. 팔이 안 올라가면 오십견인가요? A. 오십견일 수도 있지만 회전근개 파열이나 충돌증후군도 비슷하게 보일 수 있습니다.", "Q. 근육통과 어깨 질환은 어떻게 다른가요? A. 통증 기간, 힘 빠짐, 운동 제한, 야간통 여부를 함께 확인합니다.", "Q. 운동을 계속해도 되나요? A. 통증을 참고 무리한 운동을 하기보다 원인을 확인한 뒤 운동 범위와 강도를 정하는 것이 좋습니다."] }
    ]
  },
  "knee-joint-effusion": {
    slug: "knee-joint-effusion",
    title: "무릎에 물이 찼다는 말은 무슨 뜻일까요?",
    description: "무릎에 물이 찼다는 표현의 의미와 관절삼출, 활액막염, 관절염, 연골 손상 가능성을 설명합니다.",
    category: "무릎",
    readingTime: "약 4분",
    sections: [
      { title: "무릎에 물이 찼다는 말은 관절삼출을 뜻합니다", body: ["무릎에 물이 찼다는 말은 관절 안에 활액이 평소보다 많이 고인 상태, 즉 관절삼출을 의미합니다.", "붓기와 뻐근함, 무릎이 꽉 찬 느낌, 굽히거나 펴기 어려운 증상이 함께 나타날 수 있습니다."] },
      { title: "왜 이런 증상이 생기나요?", body: ["퇴행성 관절염, 반월상연골판 손상, 연골 손상, 인대 손상, 활액막염처럼 관절 안쪽에 자극이 생기면 염증 반응으로 물이 찰 수 있습니다.", "운동이나 외상 뒤 갑자기 붓는 경우와 반복적으로 붓는 경우는 확인해야 할 원인이 다를 수 있습니다."] },
      { title: "어떤 경우에 검사가 필요할까요?", body: ["무릎이 갑자기 많이 붓거나 열감이 있거나, 통증 때문에 걷기 어렵다면 진료가 필요할 수 있습니다.", "반복적으로 물이 차거나 무릎이 걸리는 느낌이 있으면 X-ray와 필요 시 MRI를 통해 관절염과 연골판 손상을 함께 확인합니다."] },
      { title: "치료 방향은 어떻게 정하나요?", body: ["통증과 염증이 가벼운 경우에는 휴식, 약물치료, 물리치료, 운동 조절을 먼저 고려할 수 있습니다.", "물이 반복해서 차는 경우에는 주사치료나 추가 검사가 필요할 수 있으며, 원인이 되는 구조적 손상을 확인해 치료 순서를 정합니다."] },
      { title: "새기준병원 관절센터에서는 무엇을 함께 확인하나요?", body: ["새기준병원 관절센터는 무릎 붓기 정도, 열감, 통증 위치, 관절 운동범위, 기존 치료 반응과 영상검사 결과를 함께 봅니다.", "정확한 치료 방향은 관절삼출의 원인과 진찰 소견, 영상검사 결과를 함께 확인한 뒤 상담하는 것이 좋습니다."] },
      { title: "자주 묻는 질문", body: ["Q. 무릎 물을 빼면 다시 안 차나요? A. 물을 빼는 것은 증상 조절에 도움이 될 수 있지만 원인에 따라 다시 찰 수 있습니다.", "Q. 무릎이 부으면 모두 관절염인가요? A. 관절염 외에도 연골판 손상, 인대 손상, 활액막염 등이 원인이 될 수 있습니다.", "Q. 붓기는 있는데 통증이 적으면 지켜봐도 되나요? A. 반복되거나 운동 제한이 있으면 원인을 확인하는 것이 좋습니다."] }
    ]
  },
  "stair-descent-knee-pain": {
    slug: "stair-descent-knee-pain",
    title: "계단 내려갈 때 무릎이 아픈 이유",
    description: "계단 내려갈 때 무릎 통증이 생기는 이유를 슬개대퇴관절, 연골, 근력 문제와 함께 설명합니다.",
    category: "무릎",
    readingTime: "약 4분",
    sections: [
      { title: "계단을 내려갈 때 무릎에 부담이 커집니다", body: ["계단 내려갈 때 무릎 통증은 평지를 걸을 때보다 무릎 앞쪽과 안쪽에 더 큰 압력이 걸리면서 나타날 수 있습니다.", "특히 슬개골 주변 관절, 반월상연골판, 연골 상태, 허벅지 근력 저하가 함께 영향을 줄 수 있습니다."] },
      { title: "의심할 수 있는 대표 원인", body: ["무릎 앞쪽이 아프면 슬개대퇴 통증이나 연골 문제를 확인하고, 안쪽 통증이 심하면 퇴행성 관절염이나 반월상연골판 손상을 함께 봅니다.", "무릎이 붓거나 걸리는 느낌이 있으면 단순 근육통보다 관절 안쪽 구조 문제를 확인하는 것이 좋습니다."] },
      { title: "어떤 경우에 검사가 필요할까요?", body: ["통증이 2주 이상 반복되거나 계단을 피하게 될 정도로 불편하면 진찰과 X-ray를 통해 관절 간격과 정렬을 먼저 확인할 수 있습니다.", "무릎 잠김, 반복적인 붓기, 외상 이후 통증이 있으면 MRI 같은 정밀검사를 고려할 수 있습니다."] },
      { title: "치료 방향은 어떻게 정하나요?", body: ["초기에는 약물치료, 물리치료, 허벅지 근력 강화, 체중 부하 조절을 통해 통증을 줄이는 방향을 고려합니다.", "관절염 진행이나 구조적 손상이 확인되면 주사치료, 재활치료, 수술적 치료 가능성까지 환자 상태에 따라 상담할 수 있습니다."] },
      { title: "새기준병원 관절센터에서는 무엇을 함께 확인하나요?", body: ["새기준병원 관절센터는 통증 위치, 계단 보행 양상, 무릎 운동범위, 하지정렬, X-ray와 MRI 결과를 함께 확인합니다.", "정확한 치료 방향은 통증 위치, 진찰 소견, 영상검사 결과를 함께 확인한 뒤 상담하는 것이 좋습니다."] },
      { title: "자주 묻는 질문", body: ["Q. 계단 내려갈 때만 아파도 진료가 필요한가요? A. 반복되거나 통증 때문에 계단을 피한다면 무릎 앞쪽 관절과 연골 상태를 확인하는 것이 좋습니다.", "Q. 근력 운동만 하면 좋아질까요? A. 근력 회복이 도움이 될 수 있지만 연골 손상이나 관절염이 동반되면 치료 방향이 달라질 수 있습니다.", "Q. X-ray가 정상이어도 MRI가 필요한가요? A. 잠김, 붓기, 외상 후 통증처럼 연골판이나 인대 손상이 의심되면 MRI를 고려할 수 있습니다."] }
    ]
  },
  "plantar-pain-differential": {
    slug: "plantar-pain-differential",
    title: "발바닥 통증, 족저근막염만은 아닐 수 있습니다",
    description: "발바닥 통증의 원인을 족저근막염, 신경 포착, 지방패드 위축, 피로골절 등과 구분해 설명합니다.",
    category: "족부·발목",
    readingTime: "약 4분",
    sections: [
      { title: "발바닥 통증은 위치에 따라 원인이 달라질 수 있습니다", body: ["발바닥 통증이라고 하면 족저근막염을 먼저 떠올리지만 모든 통증이 같은 원인으로 생기지는 않습니다.", "뒤꿈치, 발바닥 중앙, 발 앞쪽, 발가락 사이처럼 아픈 위치에 따라 확인해야 할 질환이 달라질 수 있습니다."] },
      { title: "의심할 수 있는 대표 질환", body: ["아침 첫걸음에 뒤꿈치 통증이 심하면 족저근막염을 고려할 수 있습니다.", "발가락 사이가 저리거나 화끈거리면 지간신경종 같은 신경 문제를, 발 앞쪽이 오래 아프면 중족골 통증이나 피로골절 가능성을 함께 확인합니다."] },
      { title: "어떤 경우에 검사가 필요할까요?", body: ["통증이 2주 이상 지속되거나 체중을 디딜 때 심해지는 경우, 붓기나 저림이 동반되는 경우에는 진료가 필요할 수 있습니다.", "X-ray로 뼈와 정렬을 먼저 확인하고, 필요하면 초음파나 MRI로 근막, 신경, 피로골절 여부를 확인합니다."] },
      { title: "치료 방향은 어떻게 정하나요?", body: ["족저근막염이 의심되면 스트레칭, 신발과 깔창 조정, 약물치료, 물리치료, 체외충격파 등을 고려할 수 있습니다.", "신경 포착이나 피로골절처럼 다른 원인이 확인되면 활동 조절과 치료 기간, 보조기 사용 여부가 달라질 수 있습니다."] },
      { title: "새기준병원 관절센터에서는 무엇을 함께 확인하나요?", body: ["새기준병원 관절센터는 발바닥 통증 위치, 보행 양상, 발 아치, 신발 착용 습관, X-ray와 필요한 영상검사를 함께 확인합니다.", "정확한 치료 방향은 통증 위치, 진찰 소견, 영상검사 결과를 함께 확인한 뒤 상담하는 것이 좋습니다."] },
      { title: "자주 묻는 질문", body: ["Q. 뒤꿈치가 아프면 모두 족저근막염인가요? A. 족저근막염이 흔하지만 지방패드 문제, 신경 문제, 피로골절도 확인할 수 있습니다.", "Q. 발바닥 통증이 있을 때 운동해도 되나요? A. 통증을 악화시키는 달리기나 점프는 조절하고 원인에 맞는 스트레칭과 치료를 상담하는 것이 좋습니다.", "Q. 깔창을 쓰면 도움이 되나요? A. 발 아치와 통증 원인에 따라 도움이 될 수 있지만 모든 경우에 같은 방식으로 적용되지는 않습니다."] }
    ]
  },
  "shoulder-mri-timing": {
    slug: "shoulder-mri-timing",
    title: "어깨 MRI는 언제 필요할까요?",
    description: "어깨 MRI가 필요한 경우를 회전근개 파열, 반복 통증, 근력저하, 초음파·X-ray 결과와 함께 설명합니다.",
    category: "어깨",
    readingTime: "약 4분",
    sections: [
      { title: "어깨 MRI는 모든 통증에 바로 필요한 검사는 아닙니다", body: ["어깨 통증이 있다고 처음부터 MRI를 찍어야 하는 것은 아닙니다.", "진찰에서 통증 위치, 운동 제한, 근력저하, 야간통을 확인하고 X-ray나 초음파로 먼저 볼 수 있는 부분을 확인한 뒤 MRI 필요성을 판단합니다."] },
      { title: "의심할 수 있는 대표 질환", body: ["MRI는 회전근개 파열, 관절와순 손상, 관절 안쪽 염증, 연골 손상처럼 깊은 구조를 확인할 때 도움이 됩니다.", "석회성 건염이나 관절염 일부는 X-ray에서 먼저 단서를 찾을 수 있고, 힘줄 상태는 초음파로 확인하기도 합니다."] },
      { title: "어떤 경우에 검사가 필요할까요?", body: ["팔 힘이 뚜렷하게 빠지거나 야간통이 지속되는 경우, 주사치료나 재활치료 후에도 통증이 반복되는 경우, 외상 이후 팔을 들기 어려운 경우에는 MRI를 고려할 수 있습니다.", "수술 여부를 상담해야 하는 상황에서도 파열 크기와 위치, 근육 위축 여부를 확인하기 위해 MRI가 필요할 수 있습니다."] },
      { title: "치료 방향은 어떻게 정하나요?", body: ["MRI 결과에서 이상이 보여도 증상과 일치하지 않으면 치료 방향이 달라질 수 있습니다.", "비수술 치료로 통증을 조절할 수 있는지, 구조적 손상이 기능 제한과 연결되는지 확인해 치료 단계를 정합니다."] },
      { title: "새기준병원 관절센터에서는 무엇을 함께 확인하나요?", body: ["새기준병원 관절센터는 어깨 운동범위, 근력, 통증 양상, X-ray·초음파·MRI 결과를 함께 확인합니다.", "정확한 치료 방향은 진찰 소견과 영상검사 결과, 기존 치료 반응을 함께 확인한 뒤 상담하는 것이 좋습니다."] },
      { title: "자주 묻는 질문", body: ["Q. 초음파와 MRI는 무엇이 다른가요? A. 초음파는 힘줄과 염증을 실시간으로 볼 수 있고, MRI는 관절 안쪽 구조와 파열 범위를 넓게 확인하는 데 도움이 됩니다.", "Q. MRI에서 파열이 보이면 수술해야 하나요? A. 파열 크기, 증상, 근력저하, 생활 제한을 함께 확인해 치료 방향을 상담합니다.", "Q. 어깨 MRI는 언제까지 미뤄도 되나요? A. 통증이 가볍고 호전 중이면 경과를 볼 수 있지만 힘 빠짐이나 야간통이 지속되면 진료를 권합니다."] }
    ]
  },
  "knee-pain-yongin": {
    slug: "knee-pain-yongin",
    title: "용인 무릎통증, 꼭 수술해야 하나요?",
    description: "무릎 통증이 있을 때 수술 여부보다 먼저 확인해야 할 진단과 치료 단계에 대해 안내합니다.",
    category: "무릎",
    readingTime: "약 3분",
    sections: [
      { title: "무릎 통증의 원인은 하나로 정해지지 않습니다", body: ["무릎 통증은 퇴행성 관절염, 반월상연골판 손상, 연골 손상, 인대 문제, 활액막염처럼 여러 원인으로 나타날 수 있습니다.", "통증 위치와 붓기, 계단 통증, 보행 제한, X-ray와 MRI 소견을 함께 보아야 현재 치료 단계를 판단할 수 있습니다."] },
      { title: "비수술 치료부터 순서를 정합니다", body: ["초기에는 약물치료, 물리치료, 운동치료, 주사치료를 통해 통증과 염증을 조절하는 방법을 고려합니다.", "다만 구조적 손상이 뚜렷하거나 일상생활 제한이 큰 경우에는 수술적 치료 상담이 필요할 수 있습니다."] },
      { title: "상담이 필요한 신호", body: ["무릎이 반복적으로 붓거나, 계단을 내려갈 때 통증이 심하거나, 오래 걷기 어려운 상태가 지속된다면 진료를 통해 원인을 확인하는 것이 좋습니다."] }
    ]
  },
  "shoulder-pain-yongin": {
    slug: "shoulder-pain-yongin",
    title: "용인 어깨통증, 오십견과 회전근개파열 차이",
    description: "오십견과 회전근개 파열은 증상이 비슷할 수 있어 움직임 제한과 힘 빠짐을 함께 확인해야 합니다.",
    category: "어깨",
    readingTime: "약 3분",
    sections: [
      { title: "비슷해 보여도 치료 방향이 달라질 수 있습니다", body: ["오십견은 어깨 관절낭이 굳어 움직임이 제한되는 경우가 많고, 회전근개 파열은 힘줄 손상으로 통증과 힘 빠짐이 동반될 수 있습니다.", "두 질환 모두 밤에 아프거나 팔을 들기 어려운 증상이 나타날 수 있어 진찰과 영상검사를 함께 보는 것이 중요합니다."] },
      { title: "확인해야 할 증상", body: ["팔을 수동으로 들어 올려도 잘 올라가지 않으면 오십견 양상을 의심할 수 있고, 특정 각도에서 힘이 빠지거나 걸리는 느낌이 있으면 회전근개 문제를 확인해야 합니다.", "증상만으로 단정하기보다 초음파나 MRI 등 필요한 검사를 선택해 치료 방향을 정합니다."] }
    ]
  },
  "knee-arthritis-injection": {
    slug: "knee-arthritis-injection",
    title: "퇴행성 무릎관절염, 주사치료는 언제 도움이 될까요?",
    description: "무릎관절염에서 주사치료를 고려하는 상황과 치료 전후 확인할 점을 정리합니다.",
    category: "무릎",
    readingTime: "약 3분",
    sections: [
      { title: "주사치료는 치료 단계 중 하나입니다", body: ["무릎 주사치료는 염증과 통증을 조절하고 운동치료나 일상생활 회복을 돕기 위해 고려할 수 있습니다.", "관절 상태, 통증 양상, 부종 여부, 기존 치료 반응에 따라 주사 종류와 치료 간격은 달라질 수 있습니다."] },
      { title: "검사와 진찰이 먼저입니다", body: ["주사를 맞는 것 자체보다 중요한 것은 통증의 원인과 현재 관절 상태를 확인하는 일입니다.", "관절염 진행 정도가 심하거나 다리 변형, 보행 제한이 큰 경우에는 주사치료만으로 충분하지 않을 수 있어 다른 치료 방법도 함께 설명받는 것이 좋습니다."] }
    ]
  },
  "frozen-shoulder-vs-rotator-cuff": {
    slug: "frozen-shoulder-vs-rotator-cuff",
    title: "오십견과 회전근개파열은 어떻게 다를까요?",
    description: "오십견과 회전근개 질환을 구분해야 하는 이유, 치료 시기를 놓치지 않는 방법을 설명합니다.",
    category: "어깨",
    readingTime: "약 3분",
    sections: [
      { title: "기다려도 되는 통증인지 확인이 필요합니다", body: ["오십견은 시간이 지나며 호전되는 경우도 있지만, 통증과 관절 운동 제한이 오래 지속되면 일상생활에 큰 불편을 줄 수 있습니다.", "또한 회전근개 파열이나 석회성 건염처럼 다른 질환이 함께 있으면 단순히 기다리는 접근이 맞지 않을 수 있습니다."] },
      { title: "초기 평가가 중요한 이유", body: ["움직임 제한의 방향, 야간통, 힘 빠짐, 영상검사 소견을 함께 확인하면 치료 방향을 더 정확하게 정할 수 있습니다.", "약물치료, 물리치료, 운동치료, 주사치료를 단계적으로 고려하되, 구조적 손상이 의심되면 추가 검사가 필요할 수 있습니다."] }
    ]
  },
  "arthroscopy-timing": {
    slug: "arthroscopy-timing",
    title: "관절내시경 수술은 언제 필요할까요?",
    description: "관절내시경 수술을 검토하는 상황과 수술 전 확인해야 할 기준을 안내합니다.",
    category: "수술 판단",
    readingTime: "약 3분",
    sections: [
      { title: "수술 결정은 증상과 손상 정도를 함께 봅니다", body: ["관절내시경은 작은 절개를 통해 관절 안을 확인하고 필요한 치료를 시행하는 방법입니다.", "모든 관절 통증에 필요한 것은 아니며, 보존적 치료에도 통증이 지속되거나 구조적 손상이 뚜렷한 경우에 검토합니다."] },
      { title: "수술 전 확인할 것", body: ["통증의 원인, 파열 양상, 관절염 진행 정도, 보행 제한, 환자의 생활 목표를 함께 확인해야 합니다.", "수술이 필요한 경우에도 회복 계획과 재활 방향을 미리 설명받는 것이 중요합니다."] }
    ]
  },
  "ankle-instability": {
    slug: "ankle-instability",
    title: "발목을 자주 삔다면 만성 발목 불안정증을 확인해야 합니다.",
    description: "반복되는 발목 염좌와 불안정성은 인대 손상과 보행 문제를 함께 확인해야 합니다.",
    category: "족부·발목",
    readingTime: "약 3분",
    sections: [
      { title: "반복되는 삠은 발목 불안정성과 관련될 수 있습니다", body: ["발목을 자주 삐거나 울퉁불퉁한 길에서 발목이 꺾이는 느낌이 반복되면 만성 발목 불안정증을 확인해야 합니다.", "인대 손상 정도, 통증 위치, 부종, 보행 불편을 함께 확인하면 치료 방향을 정하는 데 도움이 됩니다."] },
      { title: "치료는 단계적으로 접근합니다", body: ["초기에는 보호, 물리치료, 근력과 균형 운동, 보조기 등을 고려할 수 있습니다.", "불안정성이 지속되거나 연골 손상이 동반되면 수술적 치료가 필요한지 진료를 통해 판단합니다."] }
    ]
  },
  "hallux-valgus": {
    slug: "hallux-valgus",
    title: "무지외반증, 꼭 수술해야 하나요?",
    description: "엄지발가락 변형과 통증이 있을 때 보존적 치료와 수술적 치료를 어떻게 판단하는지 안내합니다.",
    category: "족부·발목",
    readingTime: "약 3분",
    sections: [
      { title: "변형만으로 치료가 결정되지는 않습니다", body: ["무지외반증은 엄지발가락이 바깥쪽으로 휘고 발 안쪽 돌출부에 통증이 생길 수 있는 질환입니다.", "통증 정도, 신발 착용 불편, 변형 진행, 보행 제한을 함께 확인해 치료 순서를 정합니다."] },
      { title: "환자 상태에 따라 치료 방법을 선택합니다", body: ["초기에는 신발 조절, 보조기, 통증 조절, 생활 습관 조정을 고려합니다.", "통증과 변형으로 생활 제한이 크거나 보존적 치료 반응이 부족한 경우 수술적 치료 상담이 필요할 수 있습니다."] }
    ]
  },
  "foot-ankle-mis": {
    slug: "foot-ankle-mis",
    title: "족부·발목 최소침습수술이란 무엇인가요?",
    description: "족부·발목 질환에서 가능한 경우 최소침습적 접근과 회복관리 방향을 함께 고려하는 이유를 설명합니다.",
    category: "족부·발목",
    readingTime: "약 3분",
    sections: [
      { title: "작은 절개만이 목적은 아닙니다", body: ["족부·발목 최소침습수술은 가능한 경우 조직 부담과 회복 과정을 함께 고려하는 수술 접근입니다.", "다만 모든 질환과 모든 환자에게 적용되는 것은 아니며, 변형 정도와 영상검사 결과, 전신 상태를 함께 확인해야 합니다."] },
      { title: "보행 회복을 함께 봅니다", body: ["발과 발목은 걷는 기능과 직접 연결되어 있어 치료 후 통증 조절, 보행 훈련, 재활 계획이 중요합니다.", "새기준병원 관절센터는 치료 전 설명부터 회복관리까지 환자 상태에 맞게 안내합니다."] }
    ]
  }
};

export const aiProfileLinks = [
  { label: "메인 페이지", href: "/" },
  { label: "의료진", href: "/doctor" },
  { label: "무릎통증", href: "/knee" },
  { label: "어깨통증", href: "/shoulder" },
  { label: "족부·발목", href: "/foot-ankle" },
  { label: "족부·발목 최소침습수술 판단", href: "/foot-ankle-mis" },
  { label: "예약문의", href: "/contact" },
  { label: "전화 상담", href: hospitalInfo.consultationPhoneHref },
  { label: "네이버 지도에서 보기", href: hospitalInfo.naverMapUrl, external: true },
  { label: "Google 지도에서 보기", href: hospitalInfo.googleMapUrl, external: true },
  { label: "네이버 예약", href: hospitalInfo.naverReservationHref, external: true },
  { label: "유튜브", href: hospitalInfo.youtubeHref, external: true },
  { label: "본원 무릎 통증 진료 안내", href: hospitalInfo.officialHospitalPages.jointPages.knee, external: true },
  { label: "본원 어깨·회전근개 진료 안내", href: hospitalInfo.officialHospitalPages.jointPages.shoulder, external: true },
  { label: "본원 족부·발목 클리닉 안내", href: hospitalInfo.officialHospitalPages.jointPages.footAnkle, external: true },
  { label: "회복재활센터 공식 홈페이지", href: hospitalInfo.officialHospitalPages.rehabCenter, external: true },
  { label: "공식 홈페이지", href: hospitalInfo.officialWebsiteHref, external: true }
];

export const allStaticPaths = [
  "/",
  "/doctor",
  "/knee",
  "/shoulder",
  "/foot-ankle",
  "/foot-ankle-mis",
  "/injection-pain",
  "/minimally-invasive-surgery",
  "/osteoporosis-fracture",
  "/recovery",
  "/contact",
  "/column",
  "/wrist/distal-radius-fracture",
  "/ai-readable-orthopedic-profile",
  ...Object.keys(columnDetails).map((slug) => `/column/${slug}`)
];
