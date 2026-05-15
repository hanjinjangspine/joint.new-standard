import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import DoctorHero from "@/components/DoctorHero";
import DoctorProfile from "@/components/DoctorProfile";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "정형외과 원장 소개 | 새기준병원 관절센터",
  description:
    "족부·발목 최소침습수술을 중심으로 무릎·어깨 통증과 관절질환까지 단계적으로 안내하는 새기준병원 관절센터 정형외과 진료 소개.",
  path: "/doctor",
  keywords: ["용인 정형외과 원장", "새기준병원 의료진", "족부·발목 최소침습수술"]
});

export default function DoctorPage() {
  return (
    <>
      <DoctorHero />
      <main>
        <DoctorProfile />
        <CTASection />
      </main>
    </>
  );
}
