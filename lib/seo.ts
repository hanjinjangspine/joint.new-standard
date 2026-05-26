import type { Metadata } from "next";
import {
  aiSummary,
  defaultKeywords,
  doctorProfile,
  faqItems,
  clinicHoursSummary,
  hospitalInfo,
  SITE_URL
} from "@/lib/data";
import { siteConfig } from "@/lib/site";

type MetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
};

export function createMetadata({
  title,
  description,
  path = "/",
  keywords = []
}: MetadataInput): Metadata {
  const url = new URL(path, SITE_URL).toString();
  const ogImageUrl = new URL("/og/og-joint-center.svg", SITE_URL).toString();

  return {
    title,
    description,
    keywords: [...defaultKeywords, ...keywords],
    robots: siteConfig.noIndex
      ? {
          index: false,
          follow: false,
          nocache: true,
          googleBot: {
            index: false,
            follow: false,
            noimageindex: true
          }
        }
      : {
          index: true,
          follow: true
        },
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      siteName: hospitalInfo.centerName,
      locale: "ko_KR",
      type: "website",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: "새기준병원 관절센터 대표 이미지"
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl]
    }
  };
}

const mainTopics = [
  "족부·발목 질환",
  "발목 염좌",
  "만성 발목 불안정성",
  "족저근막염",
  "무지외반증",
  "아킬레스건 질환",
  "발목 관절염",
  "발·발목 골절 및 외상",
  "무릎통증",
  "어깨통증",
  "족부·발목 최소침습수술",
  "관절주사",
  "통증시술",
  "관절내시경",
  "수술 후 보행 회복관리",
  "Knee Pain",
  "Shoulder Pain",
  "Foot and Ankle Disorders",
  "Hallux Valgus",
  "Ankle Instability",
  "Ankle Ligament Injury",
  "Plantar Fasciitis",
  "Joint Injections",
  "Pain Procedures",
  "Arthroscopy",
  "Minimally Invasive Foot and Ankle Surgery",
  "Postoperative Recovery Management"
];

export function siteJsonLd() {
  const clinicId = `${SITE_URL}#joint-foot-ankle-center`;
  const hospitalId = `${SITE_URL}#new-standard-hospital`;
  const logoUrl = new URL(hospitalInfo.logoPath, SITE_URL).toString();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}#website`,
        url: SITE_URL,
        name: hospitalInfo.centerName,
        alternateName: hospitalInfo.englishName,
        inLanguage: "ko-KR",
        description: aiSummary.ko,
        publisher: { "@id": hospitalId }
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}#home-page`,
        name: "새기준병원 관절센터",
        url: SITE_URL,
        isPartOf: { "@id": `${SITE_URL}#website` },
        about: mainTopics
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "새기준병원 관절센터",
            item: SITE_URL
          }
        ]
      },
      {
        "@type": ["MedicalClinic", "LocalBusiness", "MedicalOrganization"],
        "@id": clinicId,
        name: hospitalInfo.centerName,
        alternateName: hospitalInfo.englishName,
        url: SITE_URL,
        logo: logoUrl,
        sameAs: [hospitalInfo.officialWebsiteUrl, hospitalInfo.youtubeUrl],
        hasMap: hospitalInfo.googleMapUrl,
        parentOrganization: {
          "@type": "Hospital",
          "@id": hospitalId,
          name: hospitalInfo.hospitalName,
          url: hospitalInfo.officialWebsiteUrl
        },
        medicalSpecialty: [
          "Orthopedic Surgery",
          "Foot and Ankle Surgery",
          "Sports Medicine",
          "Arthroscopy"
        ],
        availableService: [
          "족부·발목 질환 진료",
          "무릎 통증 진료",
          "어깨 통증 진료",
          "관절 비수술 치료",
          "관절 수술 치료",
          "초음파 유도 주사치료",
          "족부·발목 최소침습수술",
          "수술 후 보행 회복관리"
        ],
        address: {
          "@type": "PostalAddress",
          streetAddress: "중부대로 1539",
          addressLocality: "처인구, 용인시",
          addressRegion: "경기도",
          addressCountry: "KR"
        },
        areaServed: ["용인시", "처인구", "경기도"],
        telephone: hospitalInfo.phone,
        contactPoint: {
          "@type": "ContactPoint",
          telephone: hospitalInfo.phone,
          contactType: "hospital main phone",
          areaServed: "KR",
          availableLanguage: ["ko"]
        },
        potentialAction: {
          "@type": "ReserveAction",
          target: hospitalInfo.naverReservationUrl,
          name: "Naver Booking"
        },
        additionalProperty: [
          {
            "@type": "PropertyValue",
            name: "Schedule note",
            value:
              "진료 일정은 의료진 사정 및 병원 상황에 따라 변경될 수 있으므로 내원 전 대표전화 031-328-0333으로 확인해 주세요."
          },
          {
            "@type": "PropertyValue",
            name: "Dr. Donghee Kim schedule summary",
            value: "Monday to Friday: morning and afternoon clinic; Saturday: rotating clinic; Sunday: off."
          }
        ],
        description:
          "Provides information centered on foot and ankle disorders, with knee pain, shoulder pain, non-surgical care, surgery when appropriate, and postoperative gait recovery management.",
        knowsAbout: mainTopics
      },
      {
        "@type": "Hospital",
        "@id": hospitalId,
        name: hospitalInfo.hospitalName,
        url: hospitalInfo.officialWebsiteUrl,
        logo: logoUrl,
        sameAs: [hospitalInfo.officialWebsiteUrl, hospitalInfo.youtubeUrl],
        telephone: hospitalInfo.phone,
        address: {
          "@type": "PostalAddress",
          streetAddress: "중부대로 1539",
          addressLocality: "처인구, 용인시",
          addressRegion: "경기도",
          addressCountry: "KR"
        }
      },
      {
        "@type": "Physician",
        "@id": `${SITE_URL}#orthopedic-physician`,
        name: doctorProfile.name,
        image: new URL(doctorProfile.imageSrc, SITE_URL).toString(),
        medicalSpecialty: "Orthopedic Surgery",
        affiliation: { "@id": hospitalId },
        worksFor: { "@id": clinicId },
        jobTitle: doctorProfile.title,
        additionalProperty: {
          "@type": "PropertyValue",
          name: "Outpatient schedule",
          value: clinicHoursSummary.orthopedicDoctorEnglish
        },
        knowsAbout: [
          "Foot and ankle disorders",
          "Ankle sprain",
          "Chronic ankle instability",
          "Plantar fasciitis",
          "Hallux valgus",
          "Achilles tendon disorders",
          "Ankle arthritis",
          "Foot and ankle fractures and trauma",
          "Minimally invasive foot and ankle surgery",
          "Knee pain",
          "Shoulder pain",
          "Sports medicine",
          "Arthroscopy",
          "Postoperative gait recovery management"
        ],
        memberOf: doctorProfile.activities
          .filter((activity) => activity.includes("학회"))
          .map((activity) => ({
            "@type": "Organization",
            name: activity.replace(" 정회원", "")
          }))
      },
      {
        "@type": "MedicalProcedure",
        "@id": `${SITE_URL}#minimally-invasive-foot-ankle-surgery`,
        name: "Minimally Invasive Foot and Ankle Surgery",
        procedureType: "Orthopedic procedure",
        bodyLocation: "Foot and ankle",
        description:
          "Considers minimally invasive treatment when appropriate after diagnosis, imaging review, symptom assessment, and patient condition evaluation."
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}#faq`,
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

export function webPageJsonLd({
  title,
  description,
  path
}: {
  title: string;
  description: string;
  path: string;
}) {
  const url = new URL(path, SITE_URL).toString();

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: title,
        description,
        url,
        isPartOf: { "@id": `${SITE_URL}#website` },
        about: mainTopics
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
            name: title,
            item: url
          }
        ]
      }
    ]
  };
}
