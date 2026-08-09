import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Download,
  HeartPulse,
  Stethoscope
} from "lucide-react";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import PatientGuideIllustrationGallery from "@/components/PatientGuideIllustrationGallery";
import ResponsiveHeroMedia from "@/components/ResponsiveHeroMedia";
import SEOJsonLd from "@/components/SEOJsonLd";
import { SITE_URL } from "@/lib/data";
import { getPatientGuideIllustrations } from "@/lib/patient-guide-illustrations";
import { getPatientGuide, patientGuides } from "@/lib/patient-guides";
import { createMetadata } from "@/lib/seo";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return patientGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const guide = getPatientGuide((await params).slug);
  if (!guide) return {};
  return createMetadata({
    title: `${guide.title} 환자안내 | 새기준병원 관절센터`,
    description: guide.description,
    path: `/patient-guides/${guide.slug}`,
    keywords: guide.keywords
  });
}

function guideJsonLd(guide: NonNullable<ReturnType<typeof getPatientGuide>>) {
  const url = new URL(`/patient-guides/${guide.slug}`, SITE_URL).toString();
  const lastReviewed = guide.reviewedAt ?? "2026-07-31";
  const imageObjects = getPatientGuideIllustrations(guide.slug).map((illustration) => ({
    "@type": "ImageObject",
    contentUrl: new URL(illustration.src, SITE_URL).toString(),
    caption: illustration.caption,
    description: illustration.alt,
    encodingFormat: "image/png",
    width: illustration.width,
    height: illustration.height,
    representativeOfPage: illustration.placement === "overview"
  }));
  const primaryImage = imageObjects.find((image) => image.representativeOfPage);
  const videoObject = guide.video
    ? {
        "@type": "VideoObject",
        "@id": `${url}#video`,
        name: guide.video.name,
        description: guide.video.description,
        thumbnailUrl: new URL(guide.video.poster, SITE_URL).toString(),
        contentUrl: new URL(guide.video.mp4, SITE_URL).toString(),
        uploadDate: lastReviewed,
        duration: guide.video.duration,
        inLanguage: "ko-KR",
        transcript: guide.video.transcript.join(" ")
      }
    : null;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["MedicalWebPage", "WebPage"],
        "@id": `${url}#webpage`,
        url,
        name: `${guide.title} 환자안내`,
        description: guide.description,
        inLanguage: "ko-KR",
        audience: { "@type": "Patient" },
        isPartOf: { "@id": `${SITE_URL}#website` },
        about: [{ "@type": "MedicalCondition", name: guide.title }],
        reviewedBy: {
          "@type": "Physician",
          name: "김동희",
          medicalSpecialty: "Orthopedic"
        },
        lastReviewed,
        relatedLink: [
          new URL(guide.clinicPath, SITE_URL).toString(),
          new URL("/patient-guides", SITE_URL).toString()
        ],
        image: imageObjects,
        associatedMedia: videoObject ? [...imageObjects, videoObject] : imageObjects,
        ...(primaryImage ? { primaryImageOfPage: primaryImage } : {})
      },
      ...(videoObject ? [videoObject] : []),
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "새기준병원 관절센터", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "질환별 안내",
            item: new URL("/patient-guides", SITE_URL).toString()
          },
          { "@type": "ListItem", position: 3, name: guide.title, item: url }
        ]
      }
    ]
  };
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 grid gap-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-base leading-7 text-muted sm:text-lg sm:leading-8">
          <CheckCircle2 aria-hidden="true" className="mt-1 shrink-0 text-brand-600" size={20} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function PatientGuideDetailPage({ params }: PageProps) {
  const guide = getPatientGuide((await params).slug);
  if (!guide) notFound();
  const allIllustrations = getPatientGuideIllustrations(guide.slug);
  const heroIllustration = allIllustrations.find((illustration) => illustration.placement === "overview");
  const heroImage = heroIllustration ?? {
    src: "/images/joint-hero.svg",
    width: 720,
    height: 560,
    alt: "관절 진료와 기능 회복을 상징하는 의료 일러스트",
    caption: "관절센터 질환 안내"
  };
  const clinicalIllustrations = allIllustrations.filter(
    (illustration) => illustration.placement !== "procedure" && illustration.src !== heroIllustration?.src
  );
  const procedureIllustrations = allIllustrations.filter(
    (illustration) => illustration.placement === "procedure"
  );
  const reviewedAt = guide.reviewedAt ?? "2026-07-31";
  const [reviewedYear, reviewedMonth, reviewedDay] = reviewedAt.split("-");

  return (
    <>
      <SEOJsonLd data={guideJsonLd(guide)} />
      <main>
        <section className="nsh-responsive-hero border-b border-line bg-[linear-gradient(135deg,#F8FAFB_0%,#EEF4F7_58%,#FFFFFF_100%)] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="nsh-responsive-hero__grid mx-auto grid items-center">
            <div className="nsh-responsive-hero__copy">
              <Breadcrumb items={[{ label: "질환별 안내", href: "/patient-guides" }, { label: guide.title }]} />
              <p className="mt-7 text-sm font-extrabold uppercase tracking-[0.12em] text-brand-600">
                질환별 안내 · {guide.category}
              </p>
              <h1 className="mt-3 max-w-5xl text-3xl font-extrabold leading-[1.2] text-ink sm:text-4xl lg:text-5xl">
                {guide.title}
              </h1>
              <p className="mt-5 max-w-4xl text-lg leading-8 text-muted sm:text-xl">{guide.lead}</p>
              <p className="mt-4 text-sm font-semibold text-brand-800">
                의학적 검토: 김동희 원장(정형외과) · 최근 검토일: {reviewedYear}년 {Number(reviewedMonth)}월 {Number(reviewedDay)}일
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link
                  href="#decision"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-brand-800 px-5 py-3 font-extrabold text-white hover:bg-brand-900"
                >
                  결정 전 확인사항 <ArrowRight aria-hidden="true" size={18} />
                </Link>
                <Link
                  href={guide.clinicPath}
                  className="inline-flex min-h-12 items-center justify-center rounded-md border border-brand-200 bg-white px-5 py-3 font-extrabold text-brand-800 hover:bg-brand-50"
                >
                  관련 진료 안내
                </Link>
                {guide.pamphletPdfPath ? (
                  <a
                    href={guide.pamphletPdfPath}
                    download
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-brand-200 bg-white px-5 py-3 font-extrabold text-brand-800 hover:bg-brand-50"
                  >
                    <Download aria-hidden="true" size={18} />
                    인쇄용 팜플렛 PDF
                  </a>
                ) : null}
              </div>
            </div>
            <div className="nsh-responsive-hero__media-column">
              <ResponsiveHeroMedia
                src={heroImage.src}
                alt={heroImage.alt}
                width={heroImage.width}
                height={heroImage.height}
                caption={`${heroImage.caption} · AI 기반 3D 의료 일러스트`}
                priority
              />
            </div>
          </div>
        </section>

        <nav aria-label="이 질환 안내 목차" className="border-b border-line bg-white px-4 py-3 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto pb-1">
            {[
              ["#decision", "치료 결정 전"],
              ["#symptoms-tests", "증상·검사"],
              ["#treatment", "치료 선택"],
              ["#procedure", "수술·회복"],
              ["#risks", "위험·주의 신호"],
              ["#visit", "내원 전 준비"]
            ].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className="whitespace-nowrap rounded-full border border-brand-100 bg-brand-50 px-4 py-2 text-sm font-extrabold text-brand-800"
              >
                {label}
              </Link>
            ))}
          </div>
        </nav>

        <section id="decision" className="scroll-mt-36 px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <p className="text-sm font-extrabold text-brand-600">치료 결정 전</p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
                치료를 결정하기 전에 확인하세요
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted">
                수술을 권유받았더라도 현재 상태와 선택 가능한 치료를 다시 확인하고 질문할 수 있습니다.
              </p>
            </div>
            <div className="rounded-2xl border border-brand-100 bg-surface-decision p-6 sm:p-8">
              <BulletList items={guide.decisionChecks} />
            </div>
          </div>
        </section>

        <section id="symptoms-tests" className="scroll-mt-36 bg-calm px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 lg:grid-cols-2">
              <article className="rounded-2xl border border-line bg-surface-info p-6 shadow-sm sm:p-8">
                <HeartPulse aria-hidden="true" className="text-brand-600" size={28} />
                <h2 className="mt-4 text-2xl font-extrabold text-ink">주요 증상</h2>
                <BulletList items={guide.symptoms} />
              </article>
              <article className="rounded-2xl border border-line bg-surface-note p-6 shadow-sm sm:p-8">
                <Stethoscope aria-hidden="true" className="text-brand-600" size={28} />
                <h2 className="mt-4 text-2xl font-extrabold text-ink">진찰과 검사</h2>
                <BulletList items={guide.diagnosis} />
              </article>
            </div>
            <div id="illustrations" className="scroll-mt-24 pt-12">
              {clinicalIllustrations.length > 0 ? (
                <>
                  <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-brand-600">
                    3D Medical Illustration
                  </p>
                  <h2 className="mt-3 text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
                    질환의 위치와 구조를 살펴보세요
                  </h2>
                  <div className="mt-7">
                    <PatientGuideIllustrationGallery illustrations={clinicalIllustrations} showDisclosure />
                  </div>
                </>
              ) : null}
              {guide.video ? (
                <article className="mt-10 rounded-2xl border border-line bg-white p-5 shadow-sm sm:p-8">
                  <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-brand-600">3D Education Video</p>
                  <h3 className="mt-3 text-2xl font-extrabold text-ink">{guide.video.name}</h3>
                  <p className="mt-3 max-w-4xl text-base leading-7 text-muted">{guide.video.description}</p>
                  <video
                    className="mt-6 aspect-video w-full rounded-2xl border border-line bg-calm"
                    controls
                    playsInline
                    preload="metadata"
                    poster={guide.video.poster}
                  >
                    <source src={guide.video.webm} type="video/webm" />
                    <source src={guide.video.mp4} type="video/mp4" />
                    <track kind="captions" src={guide.video.captions} srcLang="ko" label="한국어" default />
                    브라우저가 영상을 지원하지 않습니다.
                  </video>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    AI 기반 3D 교육용 시각자료이며 실제 환자 영상이나 실제 수술 장면이 아닙니다. 영상은 자동재생되지 않습니다.
                  </p>
                  <details className="mt-5 rounded-xl border border-line bg-calm p-5">
                    <summary className="cursor-pointer font-extrabold text-brand-800">영상 내용 글로 보기</summary>
                    <ol className="mt-4 grid gap-2 pl-5 text-base leading-7 text-muted">
                      {guide.video.transcript.map((line) => (
                        <li key={line} className="list-decimal">{line}</li>
                      ))}
                    </ol>
                  </details>
                </article>
              ) : null}
            </div>
          </div>
        </section>

        <section id="treatment" className="scroll-mt-36 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
            <article className="rounded-2xl border border-line bg-surface-decision p-6 sm:p-8">
              <p className="text-sm font-extrabold text-brand-600">먼저 살펴보는 치료</p>
              <h2 className="mt-3 text-2xl font-extrabold text-ink">먼저 고려하는 비수술 치료</h2>
              <BulletList items={guide.firstTreatments} />
            </article>
            <article className="rounded-2xl border border-brand-200 bg-brand-900 p-6 text-white sm:p-8">
              <p className="text-sm font-extrabold text-brand-100">수술 판단</p>
              <h2 className="mt-3 text-2xl font-extrabold">수술을 함께 검토할 수 있는 경우</h2>
              <ul className="mt-6 grid gap-3">
                {guide.surgeryConsiderations.map((item) => (
                  <li key={item} className="flex gap-3 text-base leading-7 text-brand-50 sm:text-lg sm:leading-8">
                    <CheckCircle2 aria-hidden="true" className="mt-1 shrink-0 text-brand-200" size={20} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section id="procedure" className="scroll-mt-24 bg-calm px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-extrabold text-brand-600">수술과 회복</p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-ink sm:text-4xl">수술을 선택한 경우의 과정과 회복</h2>
              <p className="mt-4 text-lg leading-8 text-muted">
                아래 내용은 수술을 선택한 경우의 일반적인 설명입니다. 실제 범위와 순서는 검사 결과와 수술 중 소견에 따라 달라질 수 있습니다.
              </p>
            </div>
            <article className="mt-9 rounded-2xl border border-line bg-surface-recovery p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <ClipboardCheck aria-hidden="true" className="text-brand-600" size={26} />
                <h3 className="text-2xl font-extrabold text-ink">수술 과정</h3>
              </div>
              <BulletList items={guide.procedure} />
              {procedureIllustrations.length > 0 ? (
                <div className="mt-8 border-t border-line pt-8">
                  <PatientGuideIllustrationGallery illustrations={procedureIllustrations} />
                </div>
              ) : null}
            </article>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {guide.recovery.map((phase, index) => (
                <article
                  key={phase.label}
                  className={`rounded-2xl border border-line p-6 shadow-sm ${
                    ["bg-surface-info", "bg-surface-decision", "bg-surface-note"][index % 3]
                  }`}
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-brand-800 text-sm font-extrabold text-white">
                    {index + 1}
                  </span>
                  <h3 className="mt-4 text-xl font-extrabold text-ink">{phase.label}</h3>
                  <p className="mt-3 text-base leading-7 text-muted">{phase.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="risks" className="scroll-mt-36 px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
            <article className="rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <AlertTriangle aria-hidden="true" className="text-amber-700" size={26} />
                <h2 className="text-2xl font-extrabold text-ink">알아두어야 할 위험과 한계</h2>
              </div>
              <p className="mt-4 text-base leading-7 text-muted">
                치료 전 개인별 위험을 의료진과 확인해야 합니다. 가능한 합병증에는 다음 항목이 포함될 수 있습니다.
              </p>
              <BulletList items={guide.risks} />
            </article>
            <article className="rounded-2xl border border-red-200 bg-red-50 p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <AlertTriangle aria-hidden="true" className="text-red-700" size={26} />
                <h2 className="text-2xl font-extrabold text-ink">빠른 진료가 필요한 신호</h2>
              </div>
              <BulletList items={guide.urgentSigns} />
              <p className="mt-6 text-sm leading-6 text-muted">
                응급 증상이 의심되면 홈페이지 안내만으로 판단하지 말고 가까운 응급의료기관을 이용하세요.
              </p>
            </article>
          </div>
        </section>

        <section id="visit" className="scroll-mt-36 border-t border-line bg-white px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-extrabold text-brand-600">내원 전 준비</p>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-ink sm:text-4xl">진료 전 준비하면 좋은 내용</h2>
            </div>
            <div className="rounded-2xl border border-line bg-calm p-6 sm:p-8">
              <BulletList
                items={[
                  "최근 촬영한 X-ray·초음파·MRI·CT 영상과 판독 결과",
                  "이전에 받은 약물·주사·재활·수술 치료의 시기와 반응",
                  "현재 복용 중인 약, 알레르기와 치료에 영향을 줄 수 있는 질환",
                  "가장 불편한 동작과 치료 후 회복하고 싶은 일상·업무·운동 목표"
                ]}
              />
            </div>
          </div>
        </section>

        {guide.references?.length ? (
          <section className="border-t border-line bg-calm px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
              <h2 className="text-2xl font-extrabold text-ink">근거 자료</h2>
              <p className="mt-3 max-w-4xl text-base leading-7 text-muted">
                아래 자료는 일반 교육 내용을 검토할 때 참고했습니다. 실제 진단과 치료 계획은 진료 시 개별적으로 결정합니다.
              </p>
              <ul className="mt-5 grid gap-3">
                {guide.references.map((reference) => (
                  <li key={reference.href}>
                    <a
                      href={reference.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-extrabold text-brand-800 underline decoration-brand-300 underline-offset-4 hover:text-brand-600"
                    >
                      {reference.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ) : null}

        <section className="bg-brand-900 px-4 py-12 text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-2xl font-extrabold sm:text-3xl">이 안내의 이용 범위</h2>
            <p className="mt-4 max-w-5xl text-base leading-7 text-brand-50 sm:text-lg sm:leading-8">
              이 페이지는 김동희 원장의 환자안내 자료를 웹에서 읽을 수 있도록 재구성한 일반 교육 정보이며 개인별 진단이나 치료 지시를 대신하지 않습니다. 실제 치료 방법, 수술 범위와 회복 기간은 증상, 진찰, 영상검사, 전신 상태와 생활 목표에 따라 달라질 수 있습니다.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href={guide.clinicPath} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-white px-5 py-3 font-extrabold text-brand-900">
                관련 진료 안내 <ArrowRight aria-hidden="true" size={18} />
              </Link>
              <Link href="/patient-guides" className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/30 px-5 py-3 font-extrabold text-white hover:bg-white/10">
                전체 질환별 안내
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
