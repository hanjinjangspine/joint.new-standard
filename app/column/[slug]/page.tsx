import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import CTASection from "@/components/CTASection";
import Breadcrumb from "@/components/Breadcrumb";
import { columnGuidance } from "@/lib/column-guidance";
import SEOJsonLd from "@/components/SEOJsonLd";
import { contentUpdatedAt } from "@/lib/content-dates";
import { columnDetails } from "@/lib/data";
import { getRepresentativeGuide } from "@/lib/guide-links";
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
  const guidance = columnGuidance[column.slug];
  const sections = [...column.sections, ...(guidance?.sections ?? [])];
  const relatedGuide = getRepresentativeGuide(column.slug);
  const updatedAt = contentUpdatedAt[`/column/${column.slug}`] ?? "2026-07-31";
  const [updatedYear, updatedMonth, updatedDay] = updatedAt.split("-");

  return (
    <>
      <SEOJsonLd
        data={webPageJsonLd({
          title: `${column.title} | 새기준병원 관절칼럼`,
          description: column.description,
          path: `/column/${column.slug}`
        })}
      />
      <header className="border-b border-line bg-calm px-5 py-10 sm:px-6 sm:py-14">
        <div className="mx-auto max-w-[720px]">
          <Breadcrumb items={[{ label: "관절칼럼", href: "/column" }, { label: column.title }]} />
          <p className="mt-7 text-sm font-bold text-brand-600">{column.category} 칼럼 · {column.readingTime}</p>
          <h1 className="mt-3 break-keep text-3xl font-extrabold leading-[1.35] text-ink sm:text-4xl">{column.title}</h1>
          <p className="mt-5 text-lg leading-8 text-muted">{column.description}</p>
          {guidance ? <p className="mt-5 rounded-lg border-l-4 border-brand-600 bg-white p-4 text-base leading-7 text-brand-800">{guidance.purpose}</p> : null}
        </div>
      </header>
      <main>
        <article className="px-5 py-10 sm:px-6 sm:py-14">
          <div className="mx-auto max-w-[720px]">
            <div>
              <nav aria-label="칼럼 목차" className="mb-10 rounded-xl border border-line bg-calm p-5">
                <p className="text-sm font-bold text-brand-700">이 글에서 확인할 내용</p>
                <ol className="mt-3 grid gap-1 sm:grid-cols-2">{sections.map((section, index) => <li key={section.title}><a href={`#column-section-${index}`} className="flex min-h-11 items-center text-sm font-semibold leading-6 text-muted hover:text-brand-800">{index + 1}. {section.title}</a></li>)}</ol>
              </nav>
              {sections.map((section, index) => (
                <section id={`column-section-${index}`} key={section.title} className={index === 0 ? undefined : "mt-10"}>
                  <h2 className="break-keep text-2xl font-bold leading-9 text-ink">{section.title}</h2>
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
              {relatedGuide ? (
                <p className="mt-10 rounded-md border border-brand-100 bg-brand-50 p-5 text-base leading-8 text-muted">
                  증상·검사·비수술 치료·수술 판단·회복 과정 전체는{" "}
                  <Link
                    href={relatedGuide.href}
                    className="font-extrabold text-brand-800 underline decoration-brand-300 underline-offset-4 hover:text-brand-600"
                  >
                    {relatedGuide.label}
                  </Link>
                  에서 이어서 확인할 수 있습니다.
                </p>
              ) : null}
              {guidance?.references.length ? <section className="mt-10 rounded-xl bg-calm p-5"><h2 className="text-lg font-bold text-ink">더 읽어볼 공식 환자자료</h2><ul className="mt-3 space-y-2">{guidance.references.map((reference) => <li key={reference.href}><a href={reference.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center text-sm font-semibold leading-6 text-brand-700 underline underline-offset-4">{reference.title} (새 창)</a></li>)}</ul></section> : null}
              <p className="mt-10 border-t border-line pt-5 text-sm font-semibold leading-6 text-muted">
                콘텐츠 제공: 새기준병원 관절센터 · {guidance ? "기존 원문 의학 검토" : "의학적 검토"}: 김동희 원장(정형외과) · 최종 편집일: {updatedYear}년 {Number(updatedMonth)}월 {Number(updatedDay)}일
              </p>
              {guidance ? <p className="mt-3 text-sm leading-6 text-muted">추가 상담 질문과 일반 정보는 기존 질환 안내 및 공식 환자자료를 바탕으로 정리했습니다. 편집일은 새로운 의학 검토일을 의미하지 않습니다.</p> : null}
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
