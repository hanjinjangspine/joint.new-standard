import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { doctorProfile } from "@/lib/data";

export default function DoctorIntroSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 rounded-lg border border-line bg-white p-5 shadow-sm sm:p-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
        <div className="rounded-lg bg-brand-50 p-4">
          <Image
            src={doctorProfile.imageSrc}
            alt={doctorProfile.imageAlt}
            width={520}
            height={680}
            className="h-auto max-h-[520px] w-full rounded-md bg-white object-contain object-top"
          />
        </div>
        <div>
          <p className="text-sm font-bold uppercase text-brand-600">Orthopedic Doctor</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-ink sm:text-4xl">
            족부·발목 최소침습수술을 중심으로 보는 정형외과 진료
          </h2>
          <div className="mt-5">
            <p className="text-2xl font-extrabold text-ink">{doctorProfile.name}</p>
            <p className="mt-1 text-lg font-bold text-brand-700">{doctorProfile.title}</p>
          </div>
          <p className="mt-5 text-lg leading-8 text-muted sm:text-xl">
            새기준병원 관절센터는 무릎·어깨 통증뿐 아니라 족부·발목 질환과 보행
            문제까지 함께 살펴봅니다. 정형외과 의료진은 환자의 이야기를 충분히
            듣고, 비수술 치료부터 필요한 경우 최소침습수술까지 단계적으로 안내합니다.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {doctorProfile.specialties.slice(0, 10).map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full border border-brand-100 bg-brand-50 px-4 py-2 text-sm font-bold text-brand-800"
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
