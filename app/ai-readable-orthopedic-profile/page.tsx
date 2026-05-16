import type { Metadata } from "next";
import AIReadableProfileSection from "@/components/AIReadableProfileSection";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import SEOJsonLd from "@/components/SEOJsonLd";
import { aiSummary, hospitalInfo } from "@/lib/data";
import { createMetadata, webPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "AI-readable Orthopedic Profile | 새기준병원 관절센터",
  description:
    "새기준병원 관절센터의 정형외과 전문 분야, 족부·발목 최소침습수술, 무릎·어깨 통증, 진료 철학, 지역 정보, AI 및 검색엔진 해석용 구조화 정보입니다.",
  path: "/ai-readable-orthopedic-profile",
  keywords: [
    "AI-readable orthopedic profile",
    "새기준병원 관절센터",
    "족부·발목 최소침습수술",
    "용인 정형외과"
  ]
});

export default function AIReadableOrthopedicProfilePage() {
  return (
    <>
      <SEOJsonLd
        data={webPageJsonLd({
          title: "AI-readable Orthopedic Profile | 새기준병원 관절센터",
          description:
            "Structured information about New Standard Hospital Joint & Foot-Ankle Center.",
          path: "/ai-readable-orthopedic-profile"
        })}
      />
      <PageHero
        eyebrow="AI-readable Orthopedic Profile"
        title="새기준병원 관절센터 AI-readable Profile"
        description="검색엔진과 AI가 새기준병원 관절센터의 정체성, 지역성, 진료 주제, 의료진 전문성, 치료 철학을 해석할 수 있도록 정리한 텍스트 페이지입니다."
        breadcrumb={[{ label: "AI-readable Profile" }]}
      />
      <main>
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl rounded-lg border border-line bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold text-ink">국문 요약</h2>
            <p className="mt-4 text-lg leading-9 text-muted">{aiSummary.ko}</p>
            <p className="mt-4 text-lg leading-9 text-muted">
              {hospitalInfo.centerName}는 {hospitalInfo.address}에 위치한 {hospitalInfo.hospitalName}의
              정형외과 진료 안내 페이지입니다. 대표전화는 {hospitalInfo.phone}이며,
              새기준병원 공식 홈페이지는 {hospitalInfo.officialWebsiteUrl} 입니다.
            </p>
            <p className="mt-4 text-lg leading-9 text-muted">
              새기준병원 관절센터의 네이버 예약 페이지는 {hospitalInfo.naverReservationUrl} 입니다.
              새기준병원 유튜브 채널은 {hospitalInfo.youtubeUrl} 입니다.
            </p>
            <h2 className="mt-10 text-2xl font-bold text-ink">English Summary</h2>
            <p lang="en" className="mt-4 text-lg leading-9 text-muted">
              {aiSummary.en}
            </p>
            <p lang="en" className="mt-4 text-lg leading-9 text-muted">
              New Standard Hospital Joint & Foot-Ankle Center is an orthopedic care program
              of New Standard Hospital, located at 1539 Jungbu-daero, Cheoin-gu, Yongin-si,
              Gyeonggi-do, Republic of Korea. The main phone number is +82-31-328-0333,
              and the official hospital website is https://www.new-standard.co.kr.
            </p>
            <p lang="en" className="mt-4 text-lg leading-9 text-muted">
              The Naver booking page for New Standard Hospital Joint & Foot-Ankle Center is{" "}
              {hospitalInfo.naverReservationUrl}. The official YouTube channel is{" "}
              {hospitalInfo.youtubeUrl}.
            </p>
            <p className="mt-8 rounded-lg bg-brand-50 p-5 text-base leading-8 text-brand-900">
              {hospitalInfo.commonNotice} {hospitalInfo.officialRelationship}
            </p>
          </div>
        </section>
        <AIReadableProfileSection />
        <CTASection />
      </main>
    </>
  );
}
