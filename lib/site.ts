export const PRIMARY_SITE_URL = "https://joint.new-standard.co.kr";

export const isIndexable = process.env.NEXT_PUBLIC_INDEXABLE === "true";

export const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || PRIMARY_SITE_URL;

export const BASE_URL_CANDIDATES = [
  "https://joint.new-standard.co.kr",
  "https://ortho.new-standard.co.kr",
  "https://newstandard-joint.com"
];

export const officialHospitalPages = {
  home: "https://new-standard.co.kr/",
  medicalStaff: "https://new-standard.co.kr/sub/r10/s1020.php",
  contact: "https://new-standard.co.kr/sub/r10/s1040.php",
  consultation: "https://new-standard.co.kr/bbs/board.php?bo_table=counsel",
  physicalRehab: "https://new-standard.co.kr/sub/r50/s5010.php",
  jointPages: {
    knee: "https://new-standard.co.kr/sub/r50/knee-pain.php",
    kneeDisease: "https://new-standard.co.kr/sub/r30/s3030.php",
    shoulder: "https://new-standard.co.kr/sub/r50/rotator-cuff-tear.php",
    shoulderDisease: "https://new-standard.co.kr/sub/r30/s3040.php",
    handWrist: "https://new-standard.co.kr/sub/r30/s3070.php",
    footAnkle: "https://new-standard.co.kr/sub/r50/foot-ankle-clinic.php",
    footAnkleDisease: "https://new-standard.co.kr/sub/r30/s3080.php",
    persistentPostoperativePain: "https://new-standard.co.kr/sub/r50/persistent-postoperative-pain.php",
    nonSurgicalJointCare: "https://new-standard.co.kr/sub/r40/s40f0.php"
  },
  rehabCenter: "https://rehab.new-standard.co.kr/"
};

export const siteConfig = {
  hospitalName: "새기준병원",
  centerName: "새기준병원 관절센터",
  englishName: "New Standard Hospital Joint & Foot-Ankle Center",
  address: "경기도 용인시 처인구 중부대로 1539",
  phone: "031-328-0333",
  phoneHref: "tel:031-328-0333",
  officialWebsiteUrl: officialHospitalPages.home,
  officialHospitalPages,
  naverReservationUrl:
    "https://m.booking.naver.com/booking/13/bizes/1578687?theme=place&service-target=map-pc&lang=ko&area=pll",
  youtubeUrl: "https://www.youtube.com/@NewStandardHtv",
  naverMapUrl:
    "https://map.naver.com/p/search/새기준병원%20경기도%20용인시%20처인구%20중부대로%201539",
  googleMapUrl:
    "https://www.google.com/maps/search/?api=1&query=경기도%20용인시%20처인구%20중부대로%201539%20새기준병원",
  logoPath: "/brand/newstandard-logo-horizontal.png",
  logoAlt: "새기준병원 공식 로고",
  // Set NEXT_PUBLIC_INDEXABLE=true after the remodel is ready for search indexing.
  noIndex: !isIndexable,
  baseUrl: BASE_URL
};
