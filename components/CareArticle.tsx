import Link from "next/link";
import EditorialPhoto from "@/components/EditorialPhoto";
import type { EditorialMedia } from "@/lib/editorial-media";
import Breadcrumb from "@/components/Breadcrumb";

export type CareArticleData = {
  title: string; lead: string; summary: string;
  media: EditorialMedia;
  sections: { id: string; title: string; paragraphs?: string[]; items?: string[] }[];
  safety: { title: string; items: string[] };
  related: { title: string; href: string; description: string }[];
  sources: { title: string; href: string }[];
};

export default function CareArticle({ data }: { data: CareArticleData }) {
  return <main className="care-article">
    <section className="border-b border-line bg-calm px-5 py-12 sm:px-6 lg:py-16">
      <div className="mx-auto max-w-5xl">
        <Breadcrumb items={[{ label: data.title }]} />
        <p className="mt-7 text-sm font-bold text-brand-600">치료·회복 안내</p>
        <h1 className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight text-ink sm:text-5xl">{data.title}</h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">{data.lead}</p>
        <p className="mt-6 rounded-xl border-l-4 border-brand-600 bg-white p-5 text-base font-semibold leading-7 text-brand-800">{data.summary}</p>
      </div>
    </section>
    <div className="mx-auto grid max-w-5xl gap-10 px-5 py-10 sm:px-6 lg:grid-cols-[200px_minmax(0,1fr)] lg:py-16">
      <nav aria-label="이 페이지 목차" className="self-start lg:sticky lg:top-36">
        <p className="mb-3 text-sm font-bold text-muted">이 페이지에서 확인할 내용</p>
        <ol className="grid gap-1 border-l border-line">
          {data.sections.map((section, i) => <li key={section.id}><a href={`#${section.id}`} className="flex min-h-11 items-center gap-3 px-3 py-2 text-sm font-semibold leading-6 text-brand-800 hover:bg-brand-50"><span className="text-brand-500">0{i + 1}</span>{section.title}</a></li>)}
          <li><a href="#safety" className="flex min-h-11 items-center px-3 py-2 text-sm font-semibold text-red-800">빠른 진료가 필요한 신호</a></li>
        </ol>
      </nav>
      <div className="min-w-0">
        <EditorialPhoto media={data.media} className="mb-8" />
        {data.sections.map((section, i) => <section id={section.id} key={section.id} className={i ? "mt-10 border-t border-line pt-10" : ""}>
          <h2 className="text-2xl font-extrabold leading-9 text-ink">{section.title}</h2>
          {section.paragraphs?.map((text) => <p key={text} className="mt-4 text-lg leading-8 text-muted">{text}</p>)}
          {section.items ? <ul className="mt-5 grid gap-3 rounded-xl bg-calm p-5">{section.items.map((text) => <li key={text} className="flex gap-3 text-base leading-7 text-muted"><span aria-hidden="true" className="text-brand-600">•</span><span>{text}</span></li>)}</ul> : null}
        </section>)}
        <aside id="safety" className="mt-10 rounded-xl border border-red-200 bg-red-50 p-6" aria-labelledby="care-safety-title">
          <h2 id="care-safety-title" className="text-xl font-bold leading-8 text-red-900">{data.safety.title}</h2>
          <ul className="mt-4 grid list-disc gap-3 pl-5 text-base leading-7 text-red-950">{data.safety.items.map((item) => <li key={item}>{item}</li>)}</ul>
          <p className="mt-4 text-sm leading-6 text-red-900">온라인 상담 답변을 기다리지 말고 진료를 받으세요. 위급한 경우 119 또는 응급실을 이용하세요.</p>
        </aside>
        <section className="mt-10" aria-labelledby="care-related-title">
          <h2 id="care-related-title" className="text-xl font-bold text-ink">상황에 맞는 다음 안내</h2>
          <div className="mt-4 grid gap-3">{data.related.map((link) => <Link key={link.href} href={link.href} className="rounded-xl border border-line p-5 hover:bg-brand-50"><strong className="text-base text-brand-800">{link.title} →</strong><p className="mt-2 text-sm leading-6 text-muted">{link.description}</p></Link>)}</div>
        </section>
        <section className="mt-10 border-t border-line pt-6">
          <h2 className="text-lg font-bold text-ink">참고자료와 안내 범위</h2>
          <p className="mt-3 text-sm leading-6 text-muted">일반적인 환자 교육 자료입니다. 진단·치료 방법·운동 범위와 회복 일정은 개인의 상태와 담당 의료진의 지시에 따라 달라집니다.</p>
          <ul className="mt-3 space-y-2">{data.sources.map((source) => <li key={source.href}><a href={source.href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center text-sm font-semibold text-brand-700 underline underline-offset-4">{source.title} (새 창)</a></li>)}</ul>
        </section>
      </div>
    </div>
    <section className="border-t border-line bg-calm px-5 py-8"><div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4"><p className="text-base leading-7 text-muted">진료시간과 위치를 확인하고 상담을 준비하세요.</p><Link href="/contact" className="inline-flex min-h-12 items-center rounded-lg bg-brand-800 px-5 py-3 font-bold text-white">진료시간·오시는 길·예약</Link></div></section>
  </main>;
}
