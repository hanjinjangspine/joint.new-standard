import { BASE_URL, siteConfig } from "@/lib/site";

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
  hours: "월-금 진료 / 토요일 순환진료 / 일요일 의료진별 상이",
  hoursNote: "진료 일정은 의료진 사정 및 병원 상황에 따라 변경될 수 있습니다.",
  hoursConfirmation: "내원 전 대표전화 031-328-0333으로 확인해 주세요.",
  baseUrl: siteConfig.baseUrl,
  commonNotice:
    "새기준병원 관절센터는 새기준병원에서 운영하는 무릎·어깨·족부·발목 치료 전문 안내 페이지입니다.",
  officialRelationship:
    "진료 예약 및 병원 기본 정보는 새기준병원 공식 홈페이지에서도 확인하실 수 있습니다."
};

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
    department: "마취과",
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
    "새기준병원 관절센터는 경기도 용인시 처인구에 위치한 정형외과 진료 프로그램으로, 무릎통증, 어깨통증, 족부·발목질환, 관절주사, 통증시술, 최소침습 관절수술, 수술 후 회복관리를 중심으로 진료합니다. 진료 철학은 환자의 이야기를 충분히 듣고, 비수술 치료부터 수술적 치료까지 환자 상태에 맞는 순서로 결정하는 것입니다.",
  en:
    "New Standard Hospital Joint & Foot-Ankle Center is an orthopedic care program in Yongin, South Korea, focusing on knee pain, shoulder pain, foot and ankle disorders, non-surgical pain procedures, minimally invasive orthopedic surgery, and postoperative recovery management. The orthopedic philosophy emphasizes calm communication, careful listening, stepwise treatment, and balanced decision-making between conservative care, injections, procedures, and surgery."
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
  "용인 발목불안정증",
  "용인 발목관절내시경",
  "용인 족저근막염",
  "용인 발목수술",
  "용인 최소침습 발목수술",
  "새기준병원 관절센터"
];

export const navItems = [
  { label: "관절센터", href: "/" },
  { label: "의료진", href: "/doctor" },
  { label: "족부·발목", href: "/foot-ankle", activePaths: ["/foot-ankle", "/foot-ankle-mis"] },
  { label: "무릎·어깨", href: "/knee", activePaths: ["/knee", "/shoulder"] },
  { label: "비수술·통증치료", href: "/injection-pain" },
  { label: "최소침습수술", href: "/minimally-invasive-surgery" },
  { label: "회복관리", href: "/recovery" },
  { label: "의학칼럼", href: "/column" },
  { label: "예약문의", href: "/contact" }
];

export const specialtyCards = [
  {
    title: "족부·발목 최소침습수술",
    href: "/foot-ankle-mis",
    description: "무지외반증, 발목 불안정증, 발목 관절내시경, 발목 인대 손상, 보행 회복관리",
    icon: "foot",
    featured: true
  },
  {
    title: "족부·발목 클리닉",
    href: "/foot-ankle",
    description: "발목통증, 족저근막염, 무지외반증, 반복되는 발목 염좌, 발목 연골 손상",
    icon: "ankle"
  },
  {
    title: "무릎통증 클리닉",
    href: "/knee",
    description: "퇴행성 무릎관절염, 반월상연골판 손상, 무릎 물참, 계단 통증",
    icon: "knee"
  },
  {
    title: "어깨통증 클리닉",
    href: "/shoulder",
    description: "오십견, 회전근개 파열, 석회성 건염, 충돌증후군, 야간통",
    icon: "shoulder"
  },
  {
    title: "관절주사·통증시술",
    href: "/injection-pain",
    description: "초음파 유도 주사, 관절강내 주사, 힘줄·점액낭 주사, 체외충격파",
    icon: "injection"
  },
  {
    title: "수술 후 보행 회복관리",
    href: "/recovery",
    description: "통증 조절, 보행 회복, 재활운동, 추적검사, 일상 복귀 관리",
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

export const treatmentCards = [
  {
    title: "무릎통증 클리닉",
    href: "/knee",
    description:
      "퇴행성 무릎관절염, 반월상연골판 손상, 무릎 물참, 계단 통증, 인공관절 상담"
  },
  {
    title: "어깨통증 클리닉",
    href: "/shoulder",
    description: "오십견, 회전근개 파열, 석회성 건염, 충돌증후군, 야간통"
  },
  {
    title: "족부·발목 클리닉",
    href: "/foot-ankle",
    description: "무지외반증, 족저근막염, 발목염좌, 발목불안정증, 발목 연골 손상"
  },
  {
    title: "족부·발목 최소침습수술",
    href: "/foot-ankle-mis",
    description:
      "최소침습 무지외반증 교정, 발목 관절내시경, 발목 인대 수술, 보행 회복관리"
  },
  {
    title: "관절주사·통증시술",
    href: "/injection-pain",
    description:
      "초음파 유도 주사, 관절강내 주사, 힘줄·점액낭 주사, 신경차단술, 체외충격파"
  },
  {
    title: "최소침습 관절수술",
    href: "/minimally-invasive-surgery",
    description: "관절내시경, 최소절개 수술, 회복 프로그램, 수술 후 재활관리"
  },
  {
    title: "골다공증·골절 클리닉",
    href: "/osteoporosis-fracture",
    description: "고령 환자 골절, 골다공증 평가, 재골절 예방, 회복관리"
  },
  {
    title: "수술 후 회복관리",
    href: "/recovery",
    description: "통증 조절, 보행 회복, 재활운동, 추적검사, 일상 복귀 관리"
  }
];

export const careFlow = [
  {
    step: "1단계",
    title: "문진과 진찰",
    description: "통증 위치, 불편한 동작, 보행 제한, 기존 치료 경험을 함께 확인합니다."
  },
  {
    step: "2단계",
    title: "필요한 검사",
    description: "X-ray, 초음파, MRI 등 현재 상태 판단에 필요한 검사를 선택합니다."
  },
  {
    step: "3단계",
    title: "기본 치료",
    description: "약물치료, 물리치료, 운동치료 등 보존적 치료부터 검토합니다."
  },
  {
    step: "4단계",
    title: "주사치료와 통증시술",
    description: "염증과 통증 양상에 따라 초음파 유도 주사와 통증시술을 고려합니다."
  },
  {
    step: "5단계",
    title: "관절내시경 또는 최소침습수술",
    description: "구조적 손상과 생활 제한이 큰 경우 수술적 치료를 검토합니다."
  },
  {
    step: "6단계",
    title: "회복관리와 재활",
    description: "통증 조절, 상처 관리, 재활운동, 추적검사를 이어갑니다."
  },
  {
    step: "7단계",
    title: "보행 회복과 일상 복귀",
    description: "발과 발목, 무릎 기능을 함께 보며 일상 복귀 과정을 관리합니다."
  }
];

export const footAnkleDiseases = [
  "무지외반증",
  "소건막류",
  "망치족지",
  "족저근막염",
  "지간신경종",
  "평발",
  "발목 염좌",
  "만성 발목 불안정증",
  "발목 인대 손상",
  "발목 충돌증후군",
  "발목 연골 손상",
  "아킬레스건 질환"
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
      "만성 발목 불안정증, 인대 손상, 발목 충돌증후군 등을 확인할 수 있습니다. 반복되는 삠은 진료를 통해 원인을 살피는 것이 좋습니다."
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
      "통증 조절, 상처 관리, 재활운동, 보행 회복이 일상 복귀에 영향을 줍니다. 수술 이후에도 회복 과정을 함께 관리합니다."
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
      "무릎 통증은 퇴행성 관절염, 반월상연골판 손상, 연골 손상, 인대 문제, 무릎 물참 등 다양한 원인으로 발생합니다. 새기준병원 관절센터는 증상, 보행 상태, X-ray, MRI, 초음파, 치료 반응을 종합하여 환자에게 맞는 치료 순서를 정합니다.",
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
        items: ["퇴행성 무릎관절염", "반월상연골판 손상", "연골 손상", "인대 손상", "무릎 활액막염"]
      },
      {
        title: "치료 방법",
        items: ["약물치료", "물리치료", "운동치료", "주사치료", "관절내시경", "인공관절 상담"]
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
      "어깨 통증은 오십견, 회전근개 파열, 석회성 건염, 충돌증후군, 관절염 등 원인이 다양합니다. 특히 야간통, 팔을 들기 어려운 증상, 힘 빠짐이 동반되면 정확한 평가가 필요합니다.",
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
        items: ["오십견", "회전근개 파열", "석회성 건염", "충돌증후군", "어깨 관절염"]
      },
      {
        title: "치료 방법",
        items: ["약물치료", "물리치료", "운동치료", "주사치료", "관절내시경"]
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
      "발과 발목은 체중을 지탱하고 보행을 담당하는 중요한 부위입니다. 발목을 자주 삐거나, 발가락 변형으로 신발 신기가 어렵거나, 발바닥 통증과 발목 통증이 반복된다면 정확한 진단이 필요합니다. 새기준병원 관절센터는 족부·발목 통증의 원인을 확인하고, 비수술 치료부터 필요한 경우 수술적 치료까지 단계적으로 안내합니다.",
    sections: [
      {
        title: "이런 증상이 있으면 상담이 필요합니다",
        items: [
          "발목을 반복해서 삠",
          "발목이 불안정하고 자주 꺾임",
          "발가락 변형으로 신발 신기가 어려움",
          "엄지발가락이 휘고 통증이 있음",
          "발바닥 통증이 오래 지속됨",
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
          "깔창 및 보조기",
          "물리치료",
          "체외충격파",
          "주사치료",
          "발목 관절내시경",
          "최소침습 족부·발목 수술",
          "수술 후 보행 회복관리"
        ]
      }
    ],
    seoTitle: "용인 족부·발목 클리닉 | 새기준병원 관절센터",
    seoDescription:
      "용인 처인구 새기준병원 관절센터. 발목통증, 무지외반증, 족저근막염, 발목불안정증, 발목 인대 손상, 발목 연골 손상 진료 안내.",
    keywords: ["용인 족부정형외과", "용인 발목통증", "용인 무지외반증", "용인 발목불안정증"]
  },
  "foot-ankle-mis": {
    slug: "foot-ankle-mis",
    eyebrow: "Foot & Ankle MIS",
    title: "족부·발목 최소침습수술, 작은 절개로 보행 회복을 고려합니다.",
    description:
      "변형, 반복적인 발목 불안정성, 연골 손상, 지속되는 통증은 정확한 진단 후 치료 순서를 정해야 합니다.",
    body:
      "모든 족부·발목 질환이 수술이 필요한 것은 아닙니다. 하지만 변형이 진행되거나, 반복적인 발목 불안정성, 연골 손상, 보존적 치료에도 지속되는 통증이 있다면 수술적 치료가 필요할 수 있습니다. 새기준병원 관절센터는 환자 상태에 따라 가능한 경우 최소침습적 접근을 고려하고, 수술 후 회복관리까지 함께 안내합니다.",
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
          "수술 후 보행 회복관리"
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
    seoTitle: "족부·발목 최소침습수술 | 새기준병원 관절센터",
    seoDescription:
      "무지외반증, 발목불안정증, 발목 관절내시경, 발목 인대 손상, 족부·발목 변형 질환에 대해 환자 상태에 맞는 최소침습적 치료를 고려합니다.",
    keywords: ["용인 최소침습 발목수술", "용인 발목관절내시경", "용인 무지외반증", "족부·발목 최소침습수술"],
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
        items: ["초음파 유도 주사", "관절강내 주사", "힘줄·점액낭 주사", "신경차단술", "체외충격파", "주사치료 후 주의사항"]
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
      "모든 관절질환이 수술이 필요한 것은 아닙니다. 하지만 보존적 치료에도 통증이 지속되거나, 구조적 손상이 뚜렷하거나, 일상생활 제한이 심한 경우에는 수술적 치료가 필요할 수 있습니다. 새기준병원 관절센터는 가능한 경우 관절내시경, 최소절개 수술, 족부·발목 최소침습수술, 회복관리 프로그램을 통해 환자의 일상 복귀를 돕습니다.",
    sections: [
      {
        title: "확인할 내용",
        items: [
          "관절내시경이란?",
          "최소침습 수술의 장점",
          "수술이 필요한 경우",
          "수술 전 확인할 것",
          "수술 후 회복관리",
          "족부·발목 최소침습수술과 보행 회복"
        ]
      }
    ],
    seoTitle: "최소침습 관절수술 | 새기준병원 관절센터",
    seoDescription:
      "관절내시경, 최소절개 수술, 족부·발목 최소침습수술, 수술 후 회복관리까지 단계적으로 안내하는 새기준병원 관절센터.",
    keywords: ["용인 관절내시경", "최소침습 관절수술", "용인 발목수술"]
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
      "통증 조절, 상처 관리, 보행 회복, 재활운동, 외래 추적 관찰까지 일상 복귀 과정을 함께 관리합니다.",
    body:
      "수술 후에는 통증 조절, 상처 관리, 보행 회복, 재활운동, 추적검사가 중요합니다. 새기준병원 관절센터는 수술 후 환자가 안전하게 일상으로 돌아갈 수 있도록 회복 과정을 함께 관리합니다.",
    sections: [
      {
        title: "회복관리 항목",
        items: [
          "수술 직후 관리",
          "통증 조절",
          "상처 관리",
          "보행 회복",
          "재활운동",
          "외래 추적 관찰",
          "일상 복귀 안내",
          "족부·발목 수술 후 보행 회복관리"
        ]
      }
    ],
    seoTitle: "수술 후 회복관리 | 새기준병원 관절센터",
    seoDescription:
      "관절수술과 족부·발목 수술 후 통증 조절, 보행 회복, 재활운동, 추적검사와 일상 복귀 관리 안내.",
    keywords: ["관절수술 회복", "수술 후 재활", "보행 회복관리"]
  }
};

export const orthopedicDoctor = {
  name: "김동희 원장",
  title: "정형외과 전문의",
  imageSrc: "/images/doctors/orthopedic-doctor.png",
  imageAlt: "새기준병원 정형외과 의료진 프로필 사진",
  emphasis: "족부·발목 최소침습수술을 중심으로, 무릎·어깨 통증과 관절질환까지 함께 진료합니다.",
  specialties: [
    "족부·발목 질환",
    "족부·발목 최소침습수술",
    "무지외반증",
    "발목 불안정증",
    "발목 인대 손상",
    "발목 관절내시경",
    "무릎 통증",
    "어깨 통증",
    "관절주사 및 통증시술",
    "수술 후 보행 회복관리"
  ],
  educationAndCareer: [
    "전북대학교 의학전문대학원 의학과",
    "전북대학교병원",
    "전북대학교병원 정형외과",
    "전북대학교 의과대학원 의학과",
    "전북대학교병원 정형외과",
    "전북소재 척추관절전문병원"
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
    "영상검사 결과만으로 치료 방향을 정하기보다 환자가 실제로 겪는 통증, 보행 제한, 생활 목표를 함께 확인하고, 비수술 치료부터 수술적 치료까지 단계적으로 설명합니다."
};

export const doctorProfile = {
  ...orthopedicDoctor,
  fields: orthopedicDoctor.specialties
};

const pending = "#";

export const columnList = [
  { title: "용인 무릎통증, 꼭 수술해야 하나요?", category: "무릎", href: "/column/knee-pain-yongin", excerpt: "무릎 통증의 원인과 치료 순서를 먼저 확인해야 하는 이유를 설명합니다." },
  { title: "계단 내려갈 때 무릎이 아픈 이유", category: "무릎", href: pending, excerpt: "계단 통증에서 확인해야 할 관절염, 연골, 근력 문제를 정리합니다." },
  { title: "무릎에 물이 찼다는 말은 무슨 뜻일까요?", category: "무릎", href: pending, excerpt: "무릎 붓기와 활액막염, 염증 반응을 쉽게 설명합니다." },
  { title: "퇴행성 무릎관절염, 주사치료는 언제 도움이 될까요?", category: "무릎", href: "/column/knee-arthritis-injection", excerpt: "주사치료가 도움이 되는 상황과 함께 확인할 점을 안내합니다." },
  { title: "반월상연골판 손상, 수술이 필요한 경우는?", category: "무릎", href: pending, excerpt: "증상, 파열 양상, 생활 제한에 따라 치료 방향이 달라질 수 있습니다." },
  { title: "무릎 MRI는 언제 찍어야 할까요?", category: "무릎", href: pending, excerpt: "X-ray만으로 부족할 때 MRI가 필요한 경우를 정리합니다." },
  { title: "무릎 주사를 맞아도 계속 아픈 이유", category: "무릎", href: pending, excerpt: "통증 원인이 여러 가지일 때 치료 반응이 다를 수 있습니다." },
  { title: "인공관절 수술 전 꼭 확인해야 할 것들", category: "무릎", href: pending, excerpt: "수술 결정 전 증상, 보행, 영상검사, 전신 상태를 확인합니다." },
  { title: "고령 환자 무릎통증, 치료 순서는 어떻게 정할까요?", category: "무릎", href: pending, excerpt: "기저질환과 활동 목표를 함께 고려한 치료 계획을 설명합니다." },
  { title: "무릎 관절내시경 수술은 언제 필요할까요?", category: "무릎", href: "/column/arthroscopy-timing", excerpt: "보존적 치료 이후 수술적 치료를 검토하는 기준을 안내합니다." },
  { title: "용인 어깨통증, 오십견과 회전근개파열 차이", category: "어깨", href: "/column/shoulder-pain-yongin", excerpt: "오십견과 회전근개 파열이 어떻게 다르게 나타나는지 살펴봅니다." },
  { title: "밤에 어깨가 아프면 어떤 질환을 의심해야 할까요?", category: "어깨", href: pending, excerpt: "야간통이 있을 때 확인할 어깨 질환을 정리합니다." },
  { title: "팔을 들기 힘든 어깨통증, 단순 근육통일까요?", category: "어깨", href: pending, excerpt: "팔을 올릴 때 통증과 힘 빠짐이 있는 경우의 평가 기준입니다." },
  { title: "회전근개 파열, 수술부터 생각해야 하나요?", category: "어깨", href: pending, excerpt: "파열 크기와 기능 제한에 따라 치료 접근이 달라질 수 있습니다." },
  { title: "석회성 건염은 왜 갑자기 심하게 아플까요?", category: "어깨", href: pending, excerpt: "급성 통증이 생기는 이유와 치료 방향을 설명합니다." },
  { title: "어깨 주사치료 후 주의사항", category: "어깨", href: pending, excerpt: "주사치료 후 통증 변화와 활동 조절에 대해 안내합니다." },
  { title: "어깨 MRI는 언제 필요할까요?", category: "어깨", href: pending, excerpt: "회전근개 손상과 구조적 문제 확인이 필요한 경우를 정리합니다." },
  { title: "오십견은 시간이 지나면 저절로 좋아질까요?", category: "어깨", href: "/column/frozen-shoulder-vs-rotator-cuff", excerpt: "오십견과 회전근개 질환을 구분해야 하는 이유를 설명합니다." },
  { title: "어깨 관절내시경 수술은 어떤 경우에 하나요?", category: "어깨", href: pending, excerpt: "통증과 기능 제한이 지속될 때 수술 여부를 검토하는 흐름입니다." },
  { title: "어깨 통증이 목디스크와 헷갈리는 이유", category: "어깨", href: pending, excerpt: "목과 어깨 통증이 겹칠 때 확인할 증상을 정리합니다." },
  { title: "용인 발목통증, 반복해서 삔다면 확인해야 할 것", category: "족부·발목", href: pending, excerpt: "반복되는 발목 염좌에서 확인해야 할 구조와 보행 문제를 정리합니다." },
  { title: "발목을 자주 삐는 이유, 만성 발목 불안정증이란?", category: "족부·발목", href: "/column/ankle-instability", excerpt: "발목 불안정성과 인대 손상을 함께 살펴야 하는 이유를 안내합니다." },
  { title: "무지외반증, 꼭 수술해야 하나요?", category: "족부·발목", href: "/column/hallux-valgus", excerpt: "변형 정도와 통증, 신발 착용 불편을 기준으로 치료 순서를 설명합니다." },
  { title: "발바닥 통증, 족저근막염만은 아닐 수 있습니다", category: "족부·발목", href: pending, excerpt: "발바닥 통증에서 확인할 여러 질환을 정리합니다." },
  { title: "발목 관절내시경 수술은 언제 필요할까요?", category: "족부·발목", href: pending, excerpt: "발목 연골 손상과 충돌증후군에서 관절내시경을 검토하는 흐름입니다." },
  { title: "발목 인대파열, 보존치료와 수술치료의 기준", category: "족부·발목", href: pending, excerpt: "인대 손상 정도와 불안정성에 따라 치료 계획이 달라질 수 있습니다." },
  { title: "발가락 변형 때문에 신발 신기가 힘들 때", category: "족부·발목", href: pending, excerpt: "무지외반증, 소건막류, 망치족지 등 변형 질환을 안내합니다." },
  { title: "발목 연골 손상은 왜 오래 아플까요?", category: "족부·발목", href: pending, excerpt: "연골 손상과 만성 통증의 관계를 쉽게 설명합니다." },
  { title: "족부·발목 최소침습수술이란 무엇인가요?", category: "족부·발목", href: "/column/foot-ankle-mis", excerpt: "가능한 경우 작은 절개와 보행 회복을 고려하는 치료 접근을 설명합니다." },
  { title: "수술 후 보행 회복관리는 왜 중요할까요?", category: "족부·발목", href: pending, excerpt: "발과 발목 수술 후 통증 조절, 재활, 보행 회복관리의 의미를 안내합니다." }
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
    category: "관절수술",
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
    description: "족부·발목 질환에서 가능한 경우 최소침습적 접근과 보행 회복관리를 함께 고려하는 이유를 설명합니다.",
    category: "족부·발목",
    readingTime: "약 3분",
    sections: [
      { title: "작은 절개만이 목적은 아닙니다", body: ["족부·발목 최소침습수술은 가능한 경우 조직 손상을 줄이고 회복 과정을 고려하는 수술 접근입니다.", "다만 모든 질환과 모든 환자에게 적용되는 것은 아니며, 변형 정도와 영상검사 결과, 전신 상태를 함께 확인해야 합니다."] },
      { title: "보행 회복을 함께 봅니다", body: ["발과 발목은 걷는 기능과 직접 연결되어 있어 수술 후 통증 조절, 보행 훈련, 재활 계획이 중요합니다.", "새기준병원 관절센터는 치료 전 설명부터 수술 후 회복관리까지 환자 상태에 맞게 안내합니다."] }
    ]
  }
};

export const aiProfileLinks = [
  { label: "메인 페이지", href: "/" },
  { label: "의료진", href: "/doctor" },
  { label: "무릎통증", href: "/knee" },
  { label: "어깨통증", href: "/shoulder" },
  { label: "족부·발목", href: "/foot-ankle" },
  { label: "족부·발목 최소침습수술", href: "/foot-ankle-mis" },
  { label: "예약문의", href: "/contact" },
  { label: "전화 상담", href: hospitalInfo.consultationPhoneHref },
  { label: "네이버 지도에서 보기", href: hospitalInfo.naverMapUrl, external: true },
  { label: "Google 지도에서 보기", href: hospitalInfo.googleMapUrl, external: true },
  { label: "네이버 예약", href: hospitalInfo.naverReservationHref, external: true },
  { label: "유튜브", href: hospitalInfo.youtubeHref, external: true },
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
  "/ai-readable-orthopedic-profile",
  ...Object.keys(columnDetails).map((slug) => `/column/${slug}`)
];
