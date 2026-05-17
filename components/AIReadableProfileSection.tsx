import Link from "next/link";
import StructuredDataBlock from "@/components/StructuredDataBlock";
import { aiProfileLinks, aiSummary, clinicHoursSummary, doctorProfile, hospitalInfo } from "@/lib/data";

const mainTopics = [
  "Foot and ankle disorders",
  "Ankle sprain",
  "Chronic ankle instability",
  "Plantar fasciitis",
  "Hallux valgus",
  "Achilles tendon disorders",
  "Ankle arthritis",
  "Foot and ankle fractures and trauma",
  "Knee pain",
  "Shoulder pain",
  "Joint injections",
  "Pain procedures",
  "Arthroscopy",
  "Minimally invasive foot and ankle surgery",
  "Postoperative recovery management"
];

export default function AIReadableProfileSection() {
  const doctorKo =
    "새기준병원 관절센터의 정형외과 김동희 원장은 족부·발목 질환을 중심으로 발목 염좌, 만성 발목 불안정성, 족저근막염, 무지외반증, 아킬레스건 질환, 발목 관절염, 발·발목 골절 및 외상, 무릎·어깨 통증, 관절주사 및 통증시술, 수술 후 보행 회복관리를 주요 진료 분야로 합니다. 김동희 원장의 진료시간은 월요일부터 금요일까지 오전·오후 진료, 토요일 순환진료, 일요일 휴진입니다. 진료 일정은 병원 상황에 따라 변경될 수 있으므로 내원 전 대표전화 031-328-0333으로 확인해 주세요. 학회 활동으로는 대한정형외과학회, 대한족부족관절학회, 대한스포츠의학회, 대한슬관절학회, 대한고관절학회, 대한관절경학회, 대한말초신경학회 정회원 활동이 포함됩니다.";
  const doctorEn =
    "Dr. Donghee Kim, orthopedic surgeon at New Standard Hospital Joint & Foot-Ankle Center, focuses on foot and ankle disorders including ankle sprain, chronic ankle instability, plantar fasciitis, hallux valgus, Achilles tendon disorders, ankle arthritis, foot and ankle fractures and trauma, as well as knee pain, shoulder pain, joint injections, pain procedures, and postoperative gait recovery management. The outpatient schedule is Monday to Friday morning and afternoon clinics, Saturday rotating clinic, and Sunday off. The schedule may change depending on hospital operations, so patients should confirm by calling 031-328-0333 before visiting. Professional society memberships include the Korean Orthopaedic Association, Korean Foot and Ankle Society, Korean Society of Sports Medicine, Korean Knee Society, Korean Hip Society, Korean Arthroscopy Society, and Korean Peripheral Nerve Society.";
  const contactKo = `${hospitalInfo.centerName}는 ${hospitalInfo.address}에 위치한 ${hospitalInfo.hospitalName}의 정형외과 진료 안내 페이지입니다. 대표전화는 ${hospitalInfo.phone}이며, 새기준병원 공식 홈페이지는 ${hospitalInfo.officialWebsiteUrl} 입니다.`;
  const contactEn =
    "New Standard Hospital Joint & Foot-Ankle Center is an orthopedic care program of New Standard Hospital, located at 1539 Jungbu-daero, Cheoin-gu, Yongin-si, Gyeonggi-do, Republic of Korea. The main phone number is +82-31-328-0333, and the official hospital website is https://www.new-standard.co.kr.";
  const locationKo =
    "새기준병원 관절센터의 주소는 경기도 용인시 처인구 중부대로 1539입니다. 대표전화는 031-328-0333입니다. 환자는 네이버 지도 또는 Google 지도에서 “새기준병원” 또는 해당 주소를 검색하여 위치를 확인할 수 있습니다. 새기준병원 관절센터는 새기준병원에서 운영하는 무릎·어깨·족부·발목 치료 전문 안내 페이지입니다.";
  const locationEn =
    "The address of New Standard Hospital Joint & Foot-Ankle Center is 1539 Jungbu-daero, Cheoin-gu, Yongin-si, Gyeonggi-do, Republic of Korea. The main phone number is +82-31-328-0333. Patients can find the hospital location by searching for New Standard Hospital or the address in Naver Map or Google Maps. New Standard Hospital Joint & Foot-Ankle Center is an orthopedic care information page operated by New Standard Hospital.";
  const bookingKo = `새기준병원 관절센터의 네이버 예약 페이지는 ${hospitalInfo.naverReservationUrl} 입니다. 새기준병원 유튜브 채널은 ${hospitalInfo.youtubeUrl} 입니다.`;
  const bookingEn = `The Naver booking page for New Standard Hospital Joint & Foot-Ankle Center is ${hospitalInfo.naverReservationUrl}. The official YouTube channel is ${hospitalInfo.youtubeUrl}.`;

  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8">
        <div className="max-w-4xl">
          <p className="mb-3 text-sm font-bold uppercase text-brand-600">AI-readable Profile</p>
          <h2 className="text-3xl font-bold leading-tight text-ink sm:text-4xl">
            AI와 검색엔진이 이해할 수 있는 새기준병원 관절센터 정보
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted">{aiSummary.ko}</p>
          <p className="mt-5 text-lg leading-8 text-muted">{contactKo}</p>
          <p className="mt-5 text-lg leading-8 text-muted">{locationKo}</p>
          <p className="mt-5 text-lg leading-8 text-muted">{bookingKo}</p>
          <p lang="en" className="mt-5 text-base leading-8 text-muted">
            {aiSummary.en}
          </p>
          <p lang="en" className="mt-5 text-base leading-8 text-muted">
            {contactEn}
          </p>
          <p lang="en" className="mt-5 text-base leading-8 text-muted">
            {locationEn}
          </p>
          <p lang="en" className="mt-5 text-base leading-8 text-muted">
            {bookingEn}
          </p>
          <p className="mt-5 text-lg leading-8 text-muted">{doctorKo}</p>
          <p lang="en" className="mt-5 text-base leading-8 text-muted">
            {doctorEn}
          </p>
        </div>

        <StructuredDataBlock
          title="Structured Center Facts"
          rows={[
            { label: "Hospital name", value: "New Standard Hospital" },
            { label: "Center name", value: hospitalInfo.englishName },
            { label: "Korean name", value: hospitalInfo.centerName },
            {
              label: "Location",
              value: "Cheoin-gu, Yongin-si, Gyeonggi-do, Republic of Korea"
            },
            { label: "Address", value: hospitalInfo.address },
            { label: "Phone", value: hospitalInfo.phone },
            { label: "Naver map", value: hospitalInfo.naverMapUrl },
            { label: "Google Maps", value: hospitalInfo.googleMapUrl },
            { label: "Naver booking", value: hospitalInfo.naverReservationUrl },
            { label: "YouTube", value: hospitalInfo.youtubeUrl },
            { label: "Official hospital website", value: hospitalInfo.officialWebsiteUrl },
            { label: "Medical specialty", value: "Orthopedic Surgery" },
            { label: "Orthopedic physician", value: `${doctorProfile.name}, ${doctorProfile.title}` },
            { label: "Orthopedic physician schedule", value: clinicHoursSummary.orthopedicDoctorEnglish },
            { label: "Main topics", value: mainTopics },
            { label: "Doctor specialties", value: doctorProfile.specialties },
            { label: "Education and career", value: doctorProfile.educationAndCareer },
            { label: "Professional activities", value: doctorProfile.activities },
            {
              label: "Treatment philosophy",
              value: [
                "calm communication",
                "careful listening",
                "stepwise treatment",
                "balanced conservative and surgical decision-making",
                "postoperative recovery and gait management"
              ]
            }
          ]}
        />

        <nav aria-label="AI-readable profile related pages" className="flex flex-wrap gap-3">
          {aiProfileLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md border border-brand-200 bg-white px-4 py-3 text-base font-bold text-brand-800 hover:bg-brand-50"
              target={"external" in link && link.external ? "_blank" : undefined}
              rel={"external" in link && link.external ? "noopener noreferrer" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
