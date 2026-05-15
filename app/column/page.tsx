import type { Metadata } from "next";
import ColumnCard from "@/components/ColumnCard";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import { columnList } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "블로그형 의학칼럼 | 새기준병원 관절센터",
  description:
    "무릎통증, 어깨통증, 족부·발목질환, 무지외반증, 발목불안정증, 관절주사, 관절내시경 등 새기준병원 관절센터 의학칼럼.",
  path: "/column",
  keywords: ["용인 무릎통증 칼럼", "용인 어깨통증 칼럼", "용인 발목통증 칼럼", "관절 의학칼럼"]
});

export default function ColumnPage() {
  const kneeColumns = columnList.filter((item) => item.category === "무릎");
  const shoulderColumns = columnList.filter((item) => item.category === "어깨");
  const footAnkleColumns = columnList.filter((item) => item.category === "족부·발목");

  return (
    <>
      <PageHero
        eyebrow="Medical Column"
        title="블로그형 의학칼럼"
        description="무릎·어깨·족부·발목 통증을 이해하고 상담 전 확인하면 좋은 내용을 과장 없이 정리합니다."
        breadcrumb={[{ label: "의학칼럼" }]}
      />
      <main>
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              title="무릎 관련 칼럼"
              description="초기에는 대표 글 8개를 상세 페이지로 제공하고, 나머지는 목록 형태로 노출합니다."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {kneeColumns.map((column) => (
                <ColumnCard key={column.title} {...column} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-calm px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle title="어깨 관련 칼럼" />
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {shoulderColumns.map((column) => (
                <ColumnCard key={column.title} {...column} />
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              title="족부·발목 관련 칼럼"
              description="발목통증, 무지외반증, 발목불안정증, 족부·발목 최소침습수술과 보행 회복관리를 다룹니다."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {footAnkleColumns.map((column) => (
                <ColumnCard key={column.title} {...column} />
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
    </>
  );
}
