import type { Metadata } from "next";
import ClinicHoursTable from "@/components/ClinicHoursTable";
import ContactBox from "@/components/ContactBox";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import { hospitalInfo } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "오시는 길·예약문의 | 새기준병원 관절센터",
  description:
    "새기준병원 관절센터 오시는 길, 주소, 대표전화 031-328-0333, 공식 홈페이지, 네이버 예약, 유튜브, 주차 및 대중교통 안내.",
  path: "/contact",
  keywords: ["새기준병원 위치", "용인 처인구 정형외과 예약", "새기준병원 예약"]
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="오시는 길 / 예약문의"
        description={`${hospitalInfo.hospitalName} 관절센터 상담과 방문 안내입니다. 대표전화는 ${hospitalInfo.phone}이며, 새기준병원 공식 홈페이지는 ${hospitalInfo.officialWebsiteUrl}입니다.`}
        breadcrumb={[{ label: "예약문의" }]}
      />
      <main>
        <ContactBox />

        <section className="bg-calm px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              title="방문 전 확인해 주세요."
              description="진료 일정은 의료진 사정 및 병원 상황에 따라 변경될 수 있습니다. 내원 전 대표전화 031-328-0333으로 확인해 주세요."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <article className="rounded-lg border border-line bg-white p-6">
                <h2 className="text-2xl font-bold text-ink">주차 안내</h2>
                <p className="mt-4 text-lg leading-8 text-muted">
                  내원 전 대표전화로 주차 가능 여부와 주차장 위치를 확인하시면 더 편하게
                  방문하실 수 있습니다.
                </p>
              </article>
              <article className="rounded-lg border border-line bg-white p-6">
                <h2 className="text-2xl font-bold text-ink">대중교통 안내</h2>
                <p className="mt-4 text-lg leading-8 text-muted">
                  방문 주소는 {hospitalInfo.address}입니다. 대중교통 이용 시 병원 주소를
                  기준으로 경로를 확인해 주세요.
                </p>
              </article>
            </div>
          </div>
        </section>

        <ClinicHoursTable />

        <CTASection
          title="무릎·어깨·발목 통증, 현재 상태에 맞는 치료 순서를 확인하세요."
          description="방문 전 상담을 통해 필요한 진료 항목과 준비할 내용을 확인할 수 있습니다."
        />
      </main>
    </>
  );
}
