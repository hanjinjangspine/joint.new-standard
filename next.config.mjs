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
  ["24_견봉쇄골관절탈구_오구쇄골인대재건술_김동희원장_환자안내_v4.4.pdf", "ac-joint-dislocation"]
];

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return legacyPatientGuideRedirects.map(([filename, slug]) => ({
      source: `/patient-guides/${encodeURIComponent(filename)}`,
      destination: `/patient-guides/${slug}`,
      permanent: true
    }));
  },
  async headers() {
    if (isIndexable) {
      return [];
    }

    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow"
          }
        ]
      }
    ];
  }
};

export default nextConfig;
