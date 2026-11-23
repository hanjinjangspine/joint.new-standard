import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NewDoctorAnnouncement() {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8" aria-labelledby="new-doctor-announcement-title">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[28px] border border-brand-100 bg-[linear-gradient(135deg,#F8FAFB_0%,#EAF5F1_58%,#FFFFFF_100%)] shadow-sm lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="p-6 sm:p-10 lg:p-12">
          <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-brand-600">신규의료진 진료개시</p>
          <h2 id="new-doctor-announcement-title" className="mt-3 text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
            관절센터 센터장 · 정형외과 원장 부기현
          </h2>
          <p className="mt-5 text-lg font-extrabold leading-8 text-brand-800 sm:text-xl">
            12월 1일부터 어깨·무릎 관절경 수술을 중심으로 진료합니다.
          </p>
          <p className="mt-4 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            인공관절과 골절·외상 진료도 환자의 증상, 진찰 소견과 필요한 영상검사 결과를 함께 확인해 치료 방향을 상담합니다.
          </p>
          <Link
            href="https://new-standard.co.kr/sub/r10/s1020.php#bu-kihyun"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex min-h-12 items-center gap-2 rounded-md bg-brand-800 px-5 py-3 font-extrabold text-white transition hover:bg-brand-900 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
          >
            부기현 원장 상세 안내
            <ArrowRight aria-hidden="true" size={18} />
          </Link>
        </div>
        <div className="flex items-end justify-center self-stretch bg-white/40 px-8 pt-8 lg:px-12 lg:pt-12">
          <Image
            src="/images/doctors/bu-kihyun-profile.jpg"
            alt="새기준병원 관절센터 부기현 원장"
            width={1600}
            height={2000}
            className="h-auto max-h-[520px] w-full max-w-[420px] object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  );
}
