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

  return {
    title,
    description,
    keywords: [...defaultKeywords, ...keywords],
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
          url: new URL("/og/og-joint-center.svg", SITE_URL).toString(),
          width: 1200,
          height: 630,
          alt: "새기준병원 관절센터 대표 이미지"
        }
      ]
    }
  };
}

const mainTopics = [
  "무릎통증",
  "어깨통증",
  "족부·발목 질환",
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
          "무릎 통증 진료",
          "어깨 통증 진료",
          "족부·발목 질환 진료",
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
          "Provides information about knee pain, shoulder pain, foot and ankle disorders, non-surgical pain procedures, arthroscopy, minimally invasive foot and ankle surgery, and postoperative recovery management.",
        knowsAbout: mainTopics
      },
      {
        "@type": "Hospital",
        "@id": hospitalId,
        name: hospitalInfo.hospitalName,
        url: hospitalInfo.officialWebsiteUrl,
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
          "Minimally invasive foot and ankle surgery",
          "Hallux valgus",
          "Ankle instability",
          "Ankle arthroscopy",
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
