import type { Metadata, Viewport } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MobileBottomCTA from "@/components/MobileBottomCTA";
import SEOJsonLd from "@/components/SEOJsonLd";
import { hospitalInfo, SITE_URL } from "@/lib/data";
import { siteJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "새기준병원 관절센터 | 용인 족부·발목·무릎·어깨 진료",
    template: "%s"
  },
  description:
    "용인 처인구 새기준병원 관절센터. 족부·발목 질환을 중심으로 무릎통증, 어깨통증, 관절주사, 비수술 치료, 필요한 경우 수술 치료와 보행 회복관리를 안내합니다.",
  applicationName: hospitalInfo.centerName,
  robots: siteConfig.noIndex
    ? {
        index: false,
        follow: false,
        nocache: true,
        googleBot: {
          index: false,
          follow: false,
          noimageindex: true
        }
      }
    : {
        index: true,
        follow: true
      },
  icons: {
    icon: "/favicon.ico"
  },
  openGraph: {
    title: "새기준병원 관절센터 | 용인 족부·발목·무릎·어깨 진료",
    description:
      "용인 처인구 새기준병원 관절센터. 족부·발목 질환을 중심으로 무릎통증, 어깨통증, 관절주사, 비수술 치료, 필요한 경우 수술 치료와 보행 회복관리를 안내합니다.",
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
  },
  twitter: {
    card: "summary_large_image",
    title: "새기준병원 관절센터 | 용인 족부·발목·무릎·어깨 진료",
    description:
      "용인 처인구 새기준병원 관절센터. 족부·발목 질환을 중심으로 무릎통증, 어깨통증, 관절주사, 비수술 치료, 필요한 경우 수술 치료와 보행 회복관리를 안내합니다.",
    images: [new URL("/og/og-joint-center.svg", SITE_URL).toString()]
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
