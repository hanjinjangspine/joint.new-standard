import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { doctorProfile } from "@/lib/data";

export default function DoctorIntroSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-lg border border-line bg-white p-5 shadow-sm sm:p-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-bold uppercase text-brand-600">Orthopedic Doctor</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-ink sm:text-4xl">
            정형외과 전문의 김동희 원장
          </h2>
          <div className="mt-5">
            <p className="text-2xl font-extrabold text-ink">{doctorProfile.name}</p>
            <p className="mt-1 text-lg font-bold text-brand-700">{doctorProfile.title}</p>
          </div>
          <p className="mt-5 text-lg leading-8 text-muted sm:text-xl">
            족부·발목, 무릎, 어깨, 손·손목·팔꿈치 질환을 진료하며, 환자의 증상과 진찰 소견,
            필요한 영상검사 결과를 종합해 비수술 치료부터 수술까지 상담합니다.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {[
              "족부·발목 질환",
              "무릎 통증",
              "어깨 통증",
              "손·손목·팔꿈치 질환",
              "하지 정렬·보행 균형",
              "관절내시경",
              "인공관절"
            ].map(
              (item) => (
                <span
                  key={item}
                  className="whitespace-nowrap rounded-full border border-brand-100 bg-brand-50 px-4 py-2 text-sm font-bold text-brand-800"
                >
                  {item}
                </span>
              )
            )}
          </div>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-line bg-calm p-5">
              <h3 className="text-lg font-extrabold text-ink">학력·경력 요약</h3>
              <ul className="mt-3 grid gap-2 text-base leading-7 text-muted">
                {doctorProfile.educationAndCareer.slice(0, 3).map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-line bg-calm p-5">
              <h3 className="text-lg font-extrabold text-ink">학회활동 요약</h3>
              <ul className="mt-3 grid gap-2 text-base leading-7 text-muted">
                {doctorProfile.activities.slice(0, 3).map((item) => (
                  <li key={item}>- {item}</li>
                ))}
              </ul>
            </div>
          </div>
          <Link
            href="/doctor"
            className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-md bg-brand-700 px-5 py-3 font-bold text-white hover:bg-brand-800"
            aria-label="정형외과 의료진 자세히 보기"
          >
            의료진 자세히 보기
            <ArrowRight aria-hidden="true" size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
