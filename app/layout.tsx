import type { Metadata, Viewport } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MobileBottomCTA from "@/components/MobileBottomCTA";
import SEOJsonLd from "@/components/SEOJsonLd";
import { hospitalInfo, SITE_URL } from "@/lib/data";
import { siteJsonLd } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "새기준병원 관절센터 | 용인 무릎·어깨·족부·발목 치료",
    template: "%s"
  },
  description:
    "용인 처인구 새기준병원 관절센터. 무릎통증, 어깨통증, 족부·발목 질환, 무지외반증, 발목불안정증, 관절주사, 통증시술, 최소침습수술, 수술 후 회복관리 안내.",
  applicationName: hospitalInfo.centerName,
  icons: {
    icon: "/favicon.ico"
  },
  openGraph: {
    title: "새기준병원 관절센터 | 용인 무릎·어깨·족부·발목 치료",
    description:
      "용인 처인구 새기준병원 관절센터. 무릎통증, 어깨통증, 족부·발목 질환, 무지외반증, 발목불안정증, 관절주사, 통증시술, 최소침습수술, 수술 후 회복관리 안내.",
    url: SITE_URL,
    siteName: hospitalInfo.centerName,
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/og/og-joint-center.svg",
        width: 1200,
        height: 630,
        alt: "새기준병원 관절센터 대표 이미지"
      }
    ]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#244962"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>
        <SEOJsonLd data={siteJsonLd()} />
        <Header />
        {children}
        <Footer />
        <MobileBottomCTA />
      </body>
    </html>
  );
}
