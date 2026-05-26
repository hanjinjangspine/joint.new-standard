import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import { columnDetails } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

type ColumnDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return Object.keys(columnDetails).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ColumnDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const column = columnDetails[slug];

  if (!column) {
    return createMetadata({
      title: "관절칼럼 | 새기준병원 관절센터",
      description: "새기준병원 관절센터 관절칼럼입니다.",
      path: "/column"
    });
  }

  return createMetadata({
    title: `${column.title} | 새기준병원 관절칼럼`,
    description: column.description,
    path: `/column/${column.slug}`,
    keywords: [column.title, `${column.category} 통증`, "새기준병원 관절센터"]
  });
}

export default async function ColumnDetailPage({ params }: ColumnDetailPageProps) {
  const { slug } = await params;
  const column = columnDetails[slug];

  if (!column) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow={`${column.category} 칼럼 · ${column.readingTime}`}
        title={column.title}
        description={column.description}
        breadcrumb={[
          { label: "관절칼럼", href: "/column" },
          { label: column.title }
        ]}
      />
      <main>
        <article className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-lg border border-line bg-white p-6 shadow-sm sm:p-8">
              {column.sections.map((section, index) => (
                <section key={section.title} className={index === 0 ? undefined : "mt-10"}>
                  <h2 className="text-2xl font-bold leading-9 text-ink">{section.title}</h2>
                  <div className="mt-5 grid gap-4">
                    {section.body.map((paragraph) => (
                      <p key={paragraph} className="text-lg leading-9 text-muted">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </article>
        <CTASection
          title="칼럼만으로 판단하기 어려운 통증은 진료 상담이 필요합니다."
          description="검사 결과와 진찰 소견, 생활 제한을 함께 확인하여 현재 상태에 맞는 치료 순서를 안내합니다."
        />
      </main>
    </>
  );
}
