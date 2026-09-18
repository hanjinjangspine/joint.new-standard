import { columnDetails } from "@/lib/data";
import { patientGuides } from "@/lib/patient-guides";

// 환자안내 본문 맥락 링크. 앵커는 링크 대상의 실제 제목이나 내용을 쓰고
// 「관절센터 보기」 같은 무맥락 문구는 쓰지 않는다.

export type GuideLink = { href: string; label: string; note?: string };

const hubLinks: Record<string, GuideLink> = {
  "/knee": { href: "/knee", label: "무릎 통증 원인과 진료 흐름" },
  "/shoulder": { href: "/shoulder", label: "어깨 통증 원인과 진료 흐름" },
  "/foot-ankle": { href: "/foot-ankle", label: "족부·발목 통증 원인과 진료 흐름" },
  "/hand-wrist-elbow": { href: "/hand-wrist-elbow", label: "손·손목·팔꿈치 통증 원인과 진료 흐름" },
  "/hip": { href: "/hip", label: "고관절 통증 원인과 진료 흐름" },
  "/osteoporosis-fracture": { href: "/osteoporosis-fracture", label: "골다공증 골절 치료와 회복 흐름" }
};

const extraLinks = {
  footAnkleMis: { href: "/foot-ankle-mis", label: "족부·발목 최소침습수술을 검토하는 기준" },
  surgeryDecision: { href: "/minimally-invasive-surgery", label: "관절수술을 검토하는 기준" },
  recovery: { href: "/recovery", label: "치료 후 회복관리" },
  distalRadius: { href: "/wrist/distal-radius-fracture", label: "손목 골절(요골 원위부 골절)의 보존치료와 수술 판단" }
} satisfies Record<string, GuideLink>;

// 본원(new-standard.co.kr)의 해당 치료·수술·진료 페이지. label은 본원 페이지 제목 기준.
const mainSite = {
  s3030: { href: "https://new-standard.co.kr/sub/r30/s3030.php", label: "무릎통증·계단 통증 진료 안내" },
  s3040: { href: "https://new-standard.co.kr/sub/r30/s3040.php", label: "어깨통증·팔 올릴 때 통증 진료 안내" },
  s3070: { href: "https://new-standard.co.kr/sub/r30/s3070.php", label: "손목통증·손저림·손가락 통증 진료 안내" },
  s4050: { href: "https://new-standard.co.kr/sub/r40/s4050.php", label: "정형외과 무릎·어깨·발목 통증 진료 안내" },
  s4060: { href: "https://new-standard.co.kr/sub/r40/s4060.php", label: "인공관절치환술 진료 안내" },
  s4070: { href: "https://new-standard.co.kr/sub/r40/s4070.php", label: "근위경골절골술(O자 다리 교정) 진료 안내" },
  s4080: { href: "https://new-standard.co.kr/sub/r40/s4080.php", label: "십자인대재건술 진료 안내" },
  s4090: { href: "https://new-standard.co.kr/sub/r40/s4090.php", label: "회전근개봉합술 진료 안내" },
  s40a0: { href: "https://new-standard.co.kr/sub/r40/s40a0.php", label: "골프·테니스엘보 치료 안내" },
  s40b0: { href: "https://new-standard.co.kr/sub/r40/s40b0.php", label: "손목터널절제술 진료 안내" },
  s40d0: { href: "https://new-standard.co.kr/sub/r40/s40d0.php", label: "발목인대봉합술 진료 안내" },
  s40e0: { href: "https://new-standard.co.kr/sub/r40/s40e0.php", label: "무지외반교정술 진료 안내" },
  footAnkleClinic: { href: "https://new-standard.co.kr/sub/r50/foot-ankle-clinic.php", label: "족부·발목 클리닉 진료 안내" },
  calcific: { href: "https://new-standard.co.kr/sub/r50/calcific-shoulder-rehabilitation.php", label: "석회성 어깨 통증 재활 안내" }
} satisfies Record<string, GuideLink>;

type GuideLinkPlan = {
  columns?: string[];
  guides?: string[];
  extras?: GuideLink[];
  mainSite: GuideLink;
};

const guideLinkPlans: Record<string, GuideLinkPlan> = {
  "tennis-elbow": { guides: ["carpal-tunnel-syndrome", "trigger-finger", "scaphoid-fracture"], mainSite: mainSite.s40a0 },
  "calcific-tendinitis": {
    columns: ["shoulder-night-pain", "arm-raising-shoulder-pain", "shoulder-mri-timing"],
    guides: ["shoulder-tendinopathy-bursitis", "frozen-shoulder"],
    mainSite: mainSite.calcific
  },
  "carpal-tunnel-syndrome": { guides: ["trigger-finger", "tennis-elbow", "scaphoid-fracture"], mainSite: mainSite.s40b0 },
  "lateral-ankle-ligament-injury": {
    columns: ["ankle-ligament-tear-treatment", "ankle-instability", "yongin-ankle-pain-repeated-sprain"],
    guides: ["trimalleolar-ankle-fracture"],
    mainSite: mainSite.s40d0
  },
  "meniscus-tear": {
    columns: ["meniscus-tear-surgery", "knee-mri-timing", "knee-joint-effusion"],
    guides: ["acl-tear", "knee-cartilage-defect"],
    mainSite: mainSite.s3030
  },
  "acl-tear": {
    columns: ["knee-mri-timing", "arthroscopy-timing"],
    guides: ["meniscus-tear", "pcl-tear", "mcl-injury"],
    mainSite: mainSite.s4080
  },
  "knee-cartilage-defect": {
    columns: ["knee-joint-effusion", "stair-descent-knee-pain"],
    guides: ["knee-osteotomy-hto", "meniscus-tear"],
    mainSite: mainSite.s3030
  },
  "knee-osteoarthritis-replacement": {
    columns: ["knee-arthritis-injection", "stair-descent-knee-pain", "knee-pain-yongin"],
    guides: ["knee-osteotomy-hto", "knee-cartilage-defect"],
    mainSite: mainSite.s4060
  },
  "fracture-fixation": {
    guides: ["tibial-shaft-fracture", "trimalleolar-ankle-fracture", "scaphoid-fracture"],
    mainSite: mainSite.s4050
  },
  "hallux-valgus-mica": {
    columns: ["hallux-valgus", "foot-ankle-mis"],
    extras: [extraLinks.footAnkleMis],
    mainSite: mainSite.s40e0
  },
  "rotator-cuff-tear": {
    columns: ["rotator-cuff-surgery-decision", "frozen-shoulder-vs-rotator-cuff", "shoulder-mri-timing", "arm-raising-shoulder-pain"],
    guides: ["shoulder-tendinopathy-bursitis"],
    mainSite: mainSite.s4090
  },
  "shoulder-dislocation-bankart": {
    columns: ["shoulder-mri-timing", "arthroscopy-timing"],
    guides: ["ac-joint-dislocation"],
    mainSite: mainSite.s3040
  },
  "knee-osteotomy-hto": {
    columns: ["stair-descent-knee-pain", "knee-arthritis-injection"],
    guides: ["knee-osteoarthritis-replacement", "knee-cartilage-defect"],
    mainSite: mainSite.s4070
  },
  "ac-joint-dislocation": {
    guides: ["shoulder-dislocation-bankart", "fracture-fixation", "rotator-cuff-tear"],
    mainSite: mainSite.s3040
  },
  "trigger-finger": { guides: ["carpal-tunnel-syndrome", "tennis-elbow", "scaphoid-fracture"], mainSite: mainSite.s3070 },
  "femoral-head-osteonecrosis": {
    guides: ["knee-osteoarthritis-replacement", "fracture-fixation"],
    extras: [extraLinks.surgeryDecision],
    mainSite: mainSite.s4060
  },
  "mcl-injury": {
    columns: ["knee-mri-timing"],
    guides: ["acl-tear", "pcl-tear", "meniscus-tear"],
    mainSite: mainSite.s3030
  },
  "pcl-tear": {
    columns: ["knee-mri-timing", "arthroscopy-timing"],
    guides: ["acl-tear", "mcl-injury"],
    mainSite: mainSite.s4080
  },
  "shoulder-arthroplasty": {
    columns: ["rotator-cuff-surgery-decision"],
    guides: ["rotator-cuff-tear", "fracture-fixation"],
    mainSite: mainSite.s3040
  },
  "trimalleolar-ankle-fracture": {
    guides: ["lateral-ankle-ligament-injury", "tibial-shaft-fracture", "fracture-fixation"],
    mainSite: mainSite.footAnkleClinic
  },
  "tibial-shaft-fracture": {
    guides: ["fracture-fixation", "trimalleolar-ankle-fracture"],
    extras: [extraLinks.recovery],
    mainSite: mainSite.s4050
  },
  "frozen-shoulder": {
    columns: ["frozen-shoulder-vs-rotator-cuff", "shoulder-pain-yongin", "shoulder-night-pain"],
    guides: ["calcific-tendinitis", "rotator-cuff-tear"],
    mainSite: mainSite.s3040
  },
  "shoulder-tendinopathy-bursitis": {
    columns: ["arm-raising-shoulder-pain", "shoulder-night-pain", "shoulder-vs-cervical-disc"],
    guides: ["rotator-cuff-tear", "calcific-tendinitis"],
    mainSite: mainSite.s3040
  },
  "scaphoid-fracture": {
    guides: ["fracture-fixation", "carpal-tunnel-syndrome"],
    extras: [extraLinks.distalRadius],
    mainSite: mainSite.s3070
  }
};

export function getHubLink(clinicPath: string): GuideLink {
  return hubLinks[clinicPath] ?? { href: clinicPath, label: "부위별 통증 원인과 진료 흐름" };
}

export function getGuideLinks(slug: string, clinicPath: string) {
  const plan = guideLinkPlans[slug];
  if (!plan) return null;

  const columns = (plan.columns ?? []).map((columnSlug) => {
    const column = columnDetails[columnSlug];
    if (!column) throw new Error(`Unknown column slug in guide links: ${columnSlug}`);
    return { href: `/column/${columnSlug}`, label: column.title };
  });
  const guides = (plan.guides ?? []).map((guideSlug) => {
    const guide = patientGuides.find((item) => item.slug === guideSlug);
    if (!guide) throw new Error(`Unknown guide slug in guide links: ${guideSlug}`);
    return { href: `/patient-guides/${guideSlug}`, label: `${guide.title} 환자안내` };
  });

  return {
    hub: getHubLink(clinicPath),
    related: [...columns, ...guides, ...(plan.extras ?? [])],
    mainSite: plan.mainSite
  };
}

// 칼럼 → 같은 주제의 대표 환자안내
export const representativeGuideByColumnSlug: Record<string, string> = {
  "rotator-cuff-surgery-decision": "rotator-cuff-tear",
  "shoulder-vs-cervical-disc": "shoulder-tendinopathy-bursitis",
  "meniscus-tear-surgery": "meniscus-tear",
  "knee-mri-timing": "acl-tear",
  "yongin-ankle-pain-repeated-sprain": "lateral-ankle-ligament-injury",
  "ankle-ligament-tear-treatment": "lateral-ankle-ligament-injury",
  "shoulder-night-pain": "calcific-tendinitis",
  "arm-raising-shoulder-pain": "shoulder-tendinopathy-bursitis",
  "knee-joint-effusion": "knee-cartilage-defect",
  "stair-descent-knee-pain": "knee-cartilage-defect",
  "shoulder-mri-timing": "rotator-cuff-tear",
  "knee-pain-yongin": "knee-osteoarthritis-replacement",
  "shoulder-pain-yongin": "frozen-shoulder",
  "knee-arthritis-injection": "knee-osteoarthritis-replacement",
  "frozen-shoulder-vs-rotator-cuff": "frozen-shoulder",
  "ankle-instability": "lateral-ankle-ligament-injury",
  "hallux-valgus": "hallux-valgus-mica",
  "foot-ankle-mis": "hallux-valgus-mica"
};

export function getRepresentativeGuide(columnSlug: string) {
  const guideSlug = representativeGuideByColumnSlug[columnSlug];
  if (!guideSlug) return null;
  const guide = patientGuides.find((item) => item.slug === guideSlug);
  if (!guide) throw new Error(`Unknown representative guide: ${guideSlug}`);
  return { href: `/patient-guides/${guide.slug}`, label: `${guide.title} 환자안내` };
}
