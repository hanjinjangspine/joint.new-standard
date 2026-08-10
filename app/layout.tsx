import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MobileBottomCTA from "@/components/MobileBottomCTA";
import SEOJsonLd from "@/components/SEOJsonLd";
import SiteAnalytics from "@/components/SiteAnalytics";
import { hospitalInfo, SITE_URL } from "@/lib/data";
import { entityGraphJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const suit = localFont({
  src: "./fonts/SUIT-Variable.woff2",
  variable: "--font-suit",
  weight: "100 900",
  display: "swap",
  preload: true
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "새기준병원 관절센터 | 용인 관절 질환 안내",
    template: "%s"
  },
  description:
    "용인 처인구 새기준병원 관절센터. 족부·발목, 무릎, 어깨, 손·손목·팔꿈치 질환의 증상과 검사, 치료 선택과 회복을 안내합니다.",
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
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" }
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }]
  },
  openGraph: {
    title: "새기준병원 관절센터 | 용인 관절 질환 안내",
    description:
      "용인 처인구 새기준병원 관절센터. 족부·발목, 무릎, 어깨, 손·손목·팔꿈치 질환의 증상과 검사, 치료 선택과 회복을 안내합니다.",
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
    title: "새기준병원 관절센터 | 용인 관절 질환 안내",
    description:
      "용인 처인구 새기준병원 관절센터. 족부·발목, 무릎, 어깨, 손·손목·팔꿈치 질환의 증상과 검사, 치료 선택과 회복을 안내합니다.",
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
    <html lang="ko" className={suit.variable}>
      <body>
        <SiteAnalytics />
        <SEOJsonLd data={entityGraphJsonLd()} />
        <Header />
        <div id="main-content">{children}</div>
        <Footer />
        <MobileBottomCTA />
      </body>
    </html>
  );
}
