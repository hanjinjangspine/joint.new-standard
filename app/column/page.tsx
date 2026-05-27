import type { Metadata } from "next";
import ColumnCard from "@/components/ColumnCard";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import { columnList } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "새기준병원 관절칼럼 | 무릎·어깨·족부·발목 치료정보",
  description:
    "새기준병원 관절칼럼은 무릎, 어깨, 족부·발목 질환과 관절 통증, 수술 후 회복관리 정보를 환자분들이 이해하기 쉽게 정리한 공식 콘텐츠입니다.",
  path: "/column",
  keywords: ["용인 무릎통증 칼럼", "용인 어깨통증 칼럼", "용인 발목통증 칼럼", "관절칼럼"]
});

export default function ColumnPage() {
  const publishedColumns = columnList.filter((item) => item.href !== "#");
  const upcomingColumns = columnList.filter((item) => item.href === "#");
  const categories = [
    "족부·발목",
    "무릎",
    "어깨",
    "손·손목",
    "관절주사·비수술치료",
    "수술 후 회복관리"
  ];

  return (
    <>
      <PageHero
        eyebrow="Joint Column"
        title="새기준병원 관절칼럼"
        description="무릎·어깨·족부·발목 통증을 이해하고 상담 전 확인하면 좋은 내용을 과장 없이 정리합니다."
        breadcrumb={[{ label: "관절칼럼" }]}
      />
      <main>
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Joint Article Hub"
              title="새기준병원 관절칼럼 모아보기"
              description="족부·발목, 무릎, 어깨, 손·손목 통증과 수술 후 회복관리 정보를 환자분들이 이해하기 쉽게 정리합니다."
            />
            <p className="mt-6 max-w-4xl text-base leading-7 text-muted">
              관절 통증은 부위와 원인에 따라 치료 방향이 달라질 수 있습니다.
              증상, 영상검사, 보행 상태, 생활 기능을 함께 확인해 치료 순서를
              상담합니다.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {categories.map((category) => (
                <span
                  key={category}
                  className="rounded-full border border-brand-100 bg-brand-50 px-4 py-2 text-sm font-bold text-brand-800"
                >
                  {category}
                </span>
              ))}
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {publishedColumns.map((column) => (
                <ColumnCard key={column.title} {...column} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-calm px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              title="추가 예정 주제"
              description="아래 주제는 순차적으로 상세 칼럼을 보강할 예정입니다. 실제 공개 전까지는 목록형 안내로만 제공합니다."
            />
            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {upcomingColumns.map((column) => (
                <article
                  key={column.title}
                  className="rounded-lg border border-line bg-white p-6"
                >
                  <p className="text-sm font-bold text-brand-600">{column.category}</p>
                  <h3 className="mt-3 text-lg font-bold leading-7 text-ink">
                    {column.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-muted">{column.excerpt}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
    </>
  );
}
