export const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://joint-new-standard.vercel.app";

export const BASE_URL_CANDIDATES = [
  "https://joint-new-standard.vercel.app",
  "https://joint.new-standard.co.kr",
  "https://ortho.new-standard.co.kr",
  "https://newstandard-joint.com"
];

export const siteConfig = {
  hospitalName: "새기준병원",
  centerName: "새기준병원 관절센터",
  englishName: "New Standard Hospital Joint & Foot-Ankle Center",
  address: "경기도 용인시 처인구 중부대로 1539",
  phone: "031-328-0333",
  phoneHref: "tel:031-328-0333",
  officialWebsiteUrl: "https://www.new-standard.co.kr",
  naverReservationUrl:
    "https://m.booking.naver.com/booking/13/bizes/1578687?theme=place&service-target=map-pc&lang=ko&area=pll",
  youtubeUrl: "https://www.youtube.com/@NewStandardHtv",
  naverMapUrl:
    "https://map.naver.com/p/search/새기준병원%20경기도%20용인시%20처인구%20중부대로%201539",
  googleMapUrl:
    "https://www.google.com/maps/search/?api=1&query=경기도%20용인시%20처인구%20중부대로%201539%20새기준병원",
  logoPath: "/brand/newstandard-logo-horizontal.png",
  logoAlt: "새기준병원 공식 로고",
  noIndex: true,
  baseUrl: BASE_URL
};
