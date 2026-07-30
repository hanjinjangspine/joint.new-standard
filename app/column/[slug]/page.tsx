import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import SEOJsonLd from "@/components/SEOJsonLd";
import { columnDetails } from "@/lib/data";
import { createMetadata, webPageJsonLd } from "@/lib/seo";

type ColumnDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const categoryLinks: Record<string, { label: string; href: string }> = {
  "무릎": { label: "무릎 질환 안내", href: "/knee" },
  "어깨": { label: "어깨 질환 안내", href: "/shoulder" },
  "족부·발목": { label: "족부·발목 질환 안내", href: "/foot-ankle" },
  "손·손목": { label: "손·손목·팔꿈치 질환 안내", href: "/hand-wrist-elbow" }
};

const relatedGuideByColumnSlug: Record<string, { label: string; href: string }> = {
  "rotator-cuff-surgery-decision": {
    label: "회전근개 파열 질환 안내",
    href: "/patient-guides/rotator-cuff-tear"
  },
  "meniscus-tear-surgery": {
    label: "반월상 연골판 파열 질환 안내",
    href: "/patient-guides/meniscus-tear"
  },
  "yongin-ankle-pain-repeated-sprain": {
    label: "발목 외측 인대 손상 질환 안내",
    href: "/patient-guides/lateral-ankle-ligament-injury"
  },
  "ankle-ligament-tear-treatment": {
    label: "발목 외측 인대 손상 질환 안내",
    href: "/patient-guides/lateral-ankle-ligament-injury"
  },
  "ankle-instability": {
    label: "발목 외측 인대 손상 질환 안내",
    href: "/patient-guides/lateral-ankle-ligament-injury"
  },
  "hallux-valgus": {
    label: "무지외반증 질환 안내",
    href: "/patient-guides/hallux-valgus-mica"
  }
};

function splitFaq(paragraph: string) {
  const match = paragraph.match(/^Q\.\s*(.*?)\s*A\.\s*(.*)$/);
  return match ? { question: match[1], answer: match[2] } : null;
}

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
  const categoryLink = categoryLinks[column.category];
  const relatedGuide = relatedGuideByColumnSlug[column.slug];

  return (
    <>
      <SEOJsonLd
        data={webPageJsonLd({
          title: `${column.title} | 새기준병원 관절칼럼`,
          description: column.description,
          path: `/column/${column.slug}`
        })}
      />
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
                  {section.title === "자주 묻는 질문" ? (
                    <dl className="mt-5 grid gap-4">
                      {section.body.map((paragraph) => {
                        const faq = splitFaq(paragraph);
                        if (!faq) return null;
                        return (
                          <div key={paragraph} className="border-t border-line pt-4 first:border-t-0 first:pt-0">
                            <dt className="text-lg font-extrabold leading-8 text-ink">{faq.question}</dt>
                            <dd className="mt-2 text-base leading-8 text-muted">{faq.answer}</dd>
                          </div>
                        );
                      })}
                    </dl>
                  ) : (
                    <div className="mt-5 grid gap-4">
                      {section.body.map((paragraph) => (
                        <p key={paragraph} className="text-lg leading-9 text-muted">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  )}
                </section>
              ))}
            </div>
          </div>
        </article>
        <nav aria-label="관련 질환 안내" className="bg-calm px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-3xl flex-col gap-3 sm:flex-row">
            {categoryLink ? (
              <Link
                href={categoryLink.href}
                className="inline-flex min-h-12 flex-1 items-center justify-between rounded-md border border-brand-200 bg-white px-5 py-3 font-extrabold text-brand-800"
              >
                {categoryLink.label}
                <ArrowRight aria-hidden="true" size={18} />
              </Link>
            ) : null}
            {relatedGuide ? (
              <Link
                href={relatedGuide.href}
                className="inline-flex min-h-12 flex-1 items-center justify-between rounded-md bg-brand-800 px-5 py-3 font-extrabold text-white"
              >
                {relatedGuide.label}
                <ArrowRight aria-hidden="true" size={18} />
              </Link>
            ) : null}
          </div>
        </nav>
        <CTASection
          title="증상이 계속되거나 일상생활이 불편하다면 원인을 확인해 보세요"
          description="증상과 진찰 소견, 필요한 검사 결과를 종합해 현재 상태에 맞는 치료 순서를 안내합니다."
        />
      </main>
    </>
  );
}
