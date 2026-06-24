import type { Metadata } from "next";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Bone,
  ClipboardCheck,
  FileSearch,
  Hand,
  ShieldCheck,
  Stethoscope
} from "lucide-react";
import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import SectionTitle from "@/components/SectionTitle";
import SEOJsonLd from "@/components/SEOJsonLd";
import { hospitalInfo, SITE_URL } from "@/lib/data";
import { createMetadata } from "@/lib/seo";

const pagePath = "/wrist/distal-radius-fracture";
const pageTitle = "손목 골절, 깁스만 해도 될까요? 요골 원위부 골절의 보존치료와 수술 판단";
const pageDescription =
  "요골 원위부 골절에서 전위, 관절면 침범, 손목 정렬, 동반 손상, 힘줄 자극 가능성을 함께 확인해 보존치료와 수술 방향을 상담하는 기준을 안내합니다.";

const checkItems = [
  {
    title: "X-ray",
    body: "골절 위치, 손목 정렬, 전위 여부, 관절면 침범 가능성을 먼저 확인합니다.",
    icon: FileSearch
  },
  {
    title: "필요 시 CT",
    body: "X-ray만으로 골편 위치나 관절면 상태가 충분히 보이지 않을 때 CT를 고려할 수 있습니다.",
    icon: ClipboardCheck
  },
  {
    title: "관절면과 전위",
    body: "관절면이 유지되는지, 시간이 지나며 전위가 진행되는지 추적 X-ray로 확인합니다.",
    icon: Bone
  },
  {
    title: "신경·힘줄 상태",
    body: "통증, 감각, 손가락 움직임과 함께 힘줄 자극 가능성이 있는 골편을 살펴봅니다.",
    icon: Hand
  }
];

const conservativeItems = [
  "골절 전위가 크지 않은 경우",
  "관절면 정렬이 유지되는 경우",
  "추적 X-ray에서 전위 진행이 확인되지 않는 경우",
  "통증, 감각, 손가락 운동 상태가 안정적인 경우",
  "부목이나 석고 고정 후 정렬 유지 가능성이 있다고 판단되는 경우"
];

const surgeryItems = [
  "추적 관찰 중 전위가 진행되는 경우",
  "관절면 붕괴 또는 불안정성이 의심되는 경우",
  "정복 후에도 손목 정렬 유지가 어려운 경우",
  "골편 위치가 힘줄 자극 가능성과 관련되는 경우",
  "나이, 활동성, 골질, 동반 손상 등을 종합했을 때 고정이 필요하다고 판단되는 경우"
];

const followUpItems = [
  "초기에는 1주, 2주, 4주 등 X-ray 추적 관찰이 필요할 수 있습니다.",
  "부목이나 석고 고정 기간은 골절 형태와 정렬 유지 여부에 따라 달라집니다.",
  "손가락 운동, 부종 관리, 감각 변화 확인은 치료 중에도 중요합니다.",
  "수술 후에는 골유합, 금속 자극, 손목 강직, 힘줄 자극 여부를 장기적으로 확인합니다."
];

const faqItems = [
  {
    question: "손목 골절은 무조건 수술해야 하나요?",
    answer:
      "무조건 수술하는 것은 아닙니다. 전위가 크지 않고 관절면 정렬이 유지되며 추적 X-ray에서 정렬이 안정적이면 보존치료를 고려할 수 있습니다. 다만 전위 진행, 관절면 붕괴, 정렬 유지 어려움이 있으면 수술적 고정을 상담할 수 있습니다."
  },
  {
    question: "X-ray만으로 충분한가요?",
    answer:
      "많은 손목 골절은 X-ray로 기본 판단을 시작합니다. 다만 관절면 침범, 작은 골편, 손목 뒤쪽 골편, 정렬 상태가 불명확하면 CT를 추가로 고려할 수 있습니다."
  },
  {
    question: "손목 골절 후 CT가 필요한 경우는 언제인가요?",
    answer:
      "X-ray에서 골절선이 애매하거나 관절면 침범이 의심될 때, 전위 정도를 더 정확히 봐야 할 때, 힘줄을 자극할 수 있는 골편 위치를 확인해야 할 때 CT가 도움이 될 수 있습니다."
  },
  {
    question: "깁스 중 손가락은 움직여도 되나요?",
    answer:
      "의료진이 제한하지 않은 범위에서는 손가락을 부드럽게 움직여 부종과 강직을 줄이는 데 도움이 될 수 있습니다. 다만 통증이 심해지거나 감각 저하, 손가락 색 변화, 심한 붓기가 있으면 진료실에 알려야 합니다."
  },
  {
    question: "수술 후 금속판은 꼭 제거해야 하나요?",
    answer:
      "모든 환자에게 같은 기준으로 제거하지는 않습니다. 골유합 상태, 금속 자극 증상, 힘줄 자극 가능성, 환자의 활동성 등을 함께 확인해 제거 여부와 시기를 상담합니다."
  }
];

export const metadata: Metadata = createMetadata({
  title: `${pageTitle} | 새기준병원 관절센터`,
  description: pageDescription,
  path: pagePath,
  keywords: [
    "손목 골절",
    "손목 골절 수술",
    "손목 깁스",
    "손목 골절 CT",
    "요골 원위부 골절",
    "손목 골절 부목",
    "손목 골절 금속판"
  ]
});

function pageJsonLd() {
  const url = new URL(pagePath, SITE_URL).toString();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": `${url}#webpage`,
        name: pageTitle,
        description: pageDescription,
        url,
        inLanguage: "ko-KR",
        isPartOf: { "@id": `${SITE_URL}#website` },
        about: ["손목 골절", "요골 원위부 골절", "보존치료", "수술적 고정", "손목 골절 CT"],
        reviewedBy: {
          "@type": "MedicalOrganization",
          name: hospitalInfo.centerName,
          url: SITE_URL
        }
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "새기준병원 관절센터",
            item: SITE_URL
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "손·손목",
            item: new URL("/column", SITE_URL).toString()
          },
          {
            "@type": "ListItem",
            position: 3,
            name: pageTitle,
            item: url
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: faqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer
          }
        }))
      }
    ]
  };
}

export default function DistalRadiusFracturePage() {
  return (
    <>
      <SEOJsonLd data={pageJsonLd()} />
      <PageHero
        eyebrow="Wrist Fracture"
        title={pageTitle}
        description={pageDescription}
        breadcrumb={[
          { label: "관절칼럼", href: "/column" },
          { label: "손·손목 골절" }
        ]}
        highlights={["X-ray", "CT", "부목·석고", "수술 판단"]}
      />

      <main>
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <SectionTitle
                eyebrow="Patient Question"
                title="넘어진 뒤 손목이 붓고 아프다면, 먼저 골절 정렬을 확인합니다"
                description="손목을 짚고 넘어진 뒤 붓고 아프고, X-ray에서 손목 골절이 보이면 많은 분들이 깁스만 해도 되는지, 수술이 필요한지 고민합니다."
              />
              <div className="mt-6 grid gap-4 text-lg leading-8 text-muted">
                <p>
                  요골 원위부 골절은 손목 가까운 쪽의 요골이 부러지는 손상입니다. 같은 손목 골절이라도
                  골절선의 위치, 전위 정도, 관절면 침범 여부, 손목 정렬, 동반 손상에 따라 치료 방향이
                  달라질 수 있습니다.
                </p>
                <p>
                  새기준병원 관절센터는 진찰 소견, 영상검사, 손목 정렬, 통증 양상, 신경·힘줄 상태를 함께
                  확인해 치료 방향을 상담합니다. 실제 치료는 환자 상태와 검사 결과에 따라 달라질 수 있습니다.
                </p>
              </div>
            </div>

            <aside className="rounded-lg border border-dashed border-brand-200 bg-brand-50 p-6">
              <p className="text-sm font-extrabold uppercase text-brand-700">Imaging Review</p>
              <h2 className="mt-3 text-2xl font-bold leading-8 text-ink">영상검사는 진료실에서 함께 확인합니다</h2>
              <p className="mt-4 text-base leading-7 text-muted">
                진료 시에는 실제 X-ray와 CT 소견을 확인해 골절의 위치, 전위, 관절면 침범 여부를 함께 판단합니다.
                이 페이지에는 환자 식별 가능성이 있는 영상 자료를 게시하지 않습니다.
              </p>
            </aside>
          </div>
        </section>

        <section className="bg-calm px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="What We Check"
              title="손목 골절에서 확인하는 항목"
              description="골절이 보였다는 사실만으로 치료 방향이 정해지지는 않습니다. 정렬과 안정성, 관절면, 동반 손상을 함께 확인합니다."
            />
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {checkItems.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="rounded-lg border border-line bg-white p-6 shadow-sm">
                    <div className="flex h-11 w-11 items-center justify-center rounded-md bg-brand-50 text-brand-700">
                      <Icon aria-hidden="true" size={22} />
                    </div>
                    <h2 className="mt-5 text-xl font-bold text-ink">{item.title}</h2>
                    <p className="mt-3 text-base leading-7 text-muted">{item.body}</p>
                  </article>
                );
              })}
            </div>
            <div className="mt-8 rounded-lg border border-line bg-white p-6">
              <h2 className="text-2xl font-bold text-ink">함께 보는 세부 항목</h2>
              <ul className="mt-5 grid gap-3 text-base leading-7 text-muted md:grid-cols-2">
                {[
                  "관절면 침범 여부",
                  "전위 여부와 전위 진행 가능성",
                  "손목 정렬과 요골 길이 변화",
                  "척골 경상돌기 동반 손상",
                  "손목 뒤쪽 골편 위치",
                  "힘줄 자극 가능성이 있는 골편"
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <ShieldCheck aria-hidden="true" className="mt-1 shrink-0 text-brand-700" size={18} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Treatment Decision"
              title="깁스 치료와 수술적 고정은 어떤 기준으로 나눌까요?"
              description="보존치료와 수술적 고정은 한 가지 기준만으로 결정하지 않고, 영상검사와 진찰 소견, 추적 관찰 결과를 함께 확인해 상담합니다."
            />
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <article className="rounded-lg border border-line bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <Activity aria-hidden="true" className="text-brand-700" size={24} />
                  <h2 className="text-2xl font-bold text-ink">보존치료를 고려할 수 있는 경우</h2>
                </div>
                <ul className="mt-6 grid gap-3 text-base leading-7 text-muted">
                  {conservativeItems.map((item) => (
                    <li key={item} className="flex gap-3">
                      <ArrowRight aria-hidden="true" className="mt-1 shrink-0 text-brand-700" size={18} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="rounded-lg border border-line bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <Stethoscope aria-hidden="true" className="text-brand-700" size={24} />
                  <h2 className="text-2xl font-bold text-ink">수술적 고정을 고려할 수 있는 경우</h2>
                </div>
                <ul className="mt-6 grid gap-3 text-base leading-7 text-muted">
                  {surgeryItems.map((item) => (
                    <li key={item} className="flex gap-3">
                      <ArrowRight aria-hidden="true" className="mt-1 shrink-0 text-brand-700" size={18} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
            <p className="mt-6 rounded-lg bg-brand-50 p-5 text-base leading-7 text-muted">
              수술적 고정은 모든 손목 골절에 동일하게 적용되는 치료가 아닙니다. 환자의 나이, 활동성, 골질,
              동반 손상, 평소 손 사용 정도, 기존 치료 반응을 종합해 치료 방향을 상담합니다.
            </p>
          </div>
        </section>

        <section className="bg-calm px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Follow Up"
              title="치료 후에는 초기에 정렬 변화를 자주 확인합니다"
              description="손목 골절은 처음 정렬이 괜찮아 보여도 부종 변화나 골절 안정성에 따라 추적 관찰 중 전위가 진행될 수 있습니다."
            />
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {followUpItems.map((item) => (
                <article key={item} className="rounded-lg border border-line bg-white p-6">
                  <p className="text-base leading-7 text-muted">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="FAQ"
              title="자주 묻는 질문"
              description="아래 답변은 일반적인 교육 정보입니다. 개인별 판단은 진찰과 검사 결과를 함께 확인해 상담해야 합니다."
            />
            <div className="mt-10 grid gap-4 lg:grid-cols-2">
              {faqItems.map((item) => (
                <article key={item.question} className="rounded-lg border border-line bg-white p-6 shadow-sm">
                  <h2 className="text-xl font-bold leading-8 text-ink">{item.question}</h2>
                  <p className="mt-3 text-base leading-7 text-muted">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-calm px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-6 rounded-lg border border-line bg-white p-6 shadow-sm lg:grid-cols-[1fr_320px] lg:items-center">
            <div>
              <h2 className="text-3xl font-bold leading-tight text-ink">본원 손·손목 질환 안내와 함께 확인하세요</h2>
              <p className="mt-4 text-lg leading-8 text-muted">
                반복 사용 후 손목통증, 손저림, 손목터널증후군, 경추 신경 감별은 본원 손·손목 질환 안내에서
                함께 확인할 수 있습니다. 관절센터 페이지는 외상 후 손목 골절 판단에 집중합니다.
              </p>
            </div>
            <Link
              href={hospitalInfo.officialHospitalPages.jointPages.handWrist}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-brand-800 px-5 py-3 font-extrabold text-white transition hover:bg-brand-900"
            >
              본원 손·손목질환 안내
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </div>
        </section>

        <CTASection
          title="손목 골절 치료 방향은 영상검사와 진찰 소견을 함께 확인해 상담합니다"
          description="새기준병원 관절센터는 손목 골절에서 X-ray, 필요 시 CT, 손목 정렬, 통증 양상, 신경·힘줄 상태를 함께 확인해 보존치료와 수술적 고정 가능성을 상담합니다."
        />
      </main>
    </>
  );
}
