/** @type {import('next').NextConfig} */
const isIndexable = process.env.NEXT_PUBLIC_INDEXABLE === "true";

const legacyPatientGuideRedirects = [
  ["03_테니스엘보_김동희원장_환자안내_v4.4.pdf", "tennis-elbow"],
  ["08_어깨석회화건염_김동희원장_환자안내_v4.4.pdf", "calcific-tendinitis"],
  ["09_수근관증후군_김동희원장_환자안내_v4.4.pdf", "carpal-tunnel-syndrome"],
  ["10_발목외측인대손상_김동희원장_환자안내_v4.4.pdf", "lateral-ankle-ligament-injury"],
  ["11_반월상연골판파열_김동희원장_환자안내_v4.4.pdf", "meniscus-tear"],
  ["12_무릎전방십자인대파열_김동희원장_환자안내_v4.4.pdf", "acl-tear"],
  ["13_무릎연골결손_카티스템_김동희원장_환자안내_v4.4.pdf", "knee-cartilage-defect"],
  ["14_무릎관절염_인공무릎관절치환술_김동희원장_환자안내_v4.4.pdf", "knee-osteoarthritis-replacement"],
  ["15_골절_CRIF_ORIF_김동희원장_환자안내_v4.4.pdf", "fracture-fixation"],
  ["20_무지외반증_MICA_김동희원장_환자안내_v4.4.pdf", "hallux-valgus-mica"],
  ["21_어깨회전근개파열_관절경봉합술_김동희원장_환자안내_v4.4.pdf", "rotator-cuff-tear"],
  ["22_어깨탈구_방카르트봉합술_김동희원장_환자안내_v4.4.pdf", "shoulder-dislocation-bankart"],
  ["23_무릎관절염_O자다리교정술_HTO_김동희원장_환자안내_v4.4.pdf", "knee-osteotomy-hto"],
  ["24_견봉쇄골관절탈구_오구쇄골인대재건술_김동희원장_환자안내_v4.4.pdf", "ac-joint-dislocation"],
  ["25_방아쇠수지_내시경A1pulley유리술_김동희원장_환자안내_v4.4.pdf", "trigger-finger"],
  ["26_대퇴골두무혈성괴사_AVN_THA_THR_Bipolar_김동희원장_환자안내_v4.4.pdf", "femoral-head-osteonecrosis"],
  ["27_무릎내측측부인대손상_MCL_봉합재건술_김동희원장_환자안내_v4.4.pdf", "mcl-injury"],
  ["28_무릎후방십자인대손상_PCL_관절경재건술_김동희원장_환자안내_v4.4.pdf", "pcl-tear"],
  ["29_어깨관절염_광범위회전근개파열_근위상완골골절_인공관절치환술_김동희원장_환자안내_v4.4.pdf", "shoulder-arthroplasty"],
  ["30_오구쇄골인대손상_급성고정_만성재건술_김동희원장_환자안내_v4.4.pdf", "ac-joint-dislocation"],
  ["31_콜레스골절_원위요골골절_ORIF_김동희원장_환자안내_v4.4.pdf", "/wrist/distal-radius-fracture"],
  ["32_발목삼과골절_ORIF_김동희원장_환자안내_v4.4.pdf", "trimalleolar-ankle-fracture"],
  ["33_경골간부골절_골수강내금속정_IMN_김동희원장_환자안내_v4.4.pdf", "tibial-shaft-fracture"],
  ["35_오십견_유착성관절낭염_관절경관절낭유리술_선택적견봉하감압술_김동희원장_환자안내_v4.4.pdf", "frozen-shoulder"],
  ["35_오십견_유착성관절낭염_관절경관절낭유리술_선택적점액낭절제술_김동희원장_환자안내_v4.5.pdf", "frozen-shoulder"],
  ["36_회전근개건병증_견봉하삼각근하점액낭염_상완이두근장두건초염_김동희원장_환자안내_v4.5.pdf", "shoulder-tendinopathy-bursitis"]
];

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return legacyPatientGuideRedirects.map(([filename, destination]) => ({
      source: `/patient-guides/${encodeURIComponent(filename)}`,
      destination: destination.startsWith("/") ? destination : `/patient-guides/${destination}`,
      permanent: true
    }));
  },
  async headers() {
    const headers = [
      {
        source: "/patient-guides/pdfs/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, follow"
          }
        ]
      }
    ];

    if (!isIndexable) {
      headers.push({
        source: "/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow"
          }
        ]
      });
    }

    return headers;
  }
};

export default nextConfig;
