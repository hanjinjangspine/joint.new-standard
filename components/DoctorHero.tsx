import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import CTAButtons from "@/components/CTAButtons";
import { doctorProfile, hospitalInfo } from "@/lib/data";

export default function DoctorHero() {
  return (
    <section className="border-b border-line bg-[linear-gradient(135deg,#F8FAFB_0%,#EEF4F7_60%,#FFFFFF_100%)] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Breadcrumb items={[{ label: "의료진" }]} />
        <div className="mt-8 grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div className="rounded-[28px] border border-brand-100 bg-white p-4 shadow-card sm:p-6">
            <div className="overflow-hidden rounded-2xl bg-brand-50">
              <Image
                src={doctorProfile.imageSrc}
                alt={doctorProfile.imageAlt}
                width={680}
                height={880}
                priority
                className="mx-auto h-auto max-h-[680px] w-full object-contain object-top"
              />
            </div>
          </div>

          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.12em] text-brand-700">
              {hospitalInfo.englishName}
            </p>
            <p className="mt-3 text-lg font-bold leading-8 text-brand-800">
              차분한 설명과 단계적 치료를 중시하는 정형외과 진료
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.18] tracking-[-0.01em] text-ink sm:text-5xl">
              환자의 이야기를 듣고, 치료 순서를 정하는 정형외과 진료
            </h1>
            <p className="mt-5 rounded-2xl border border-brand-100 bg-white/80 p-5 text-lg font-bold leading-8 text-brand-900">
              {doctorProfile.emphasis}
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-line bg-white p-5">
                <p className="text-sm font-bold text-muted">성명</p>
                <p className="mt-2 text-2xl font-extrabold text-ink">{doctorProfile.name}</p>
              </div>
              <div className="rounded-2xl border border-line bg-white p-5">
                <p className="text-sm font-bold text-muted">직함</p>
                <p className="mt-2 text-xl font-extrabold text-brand-800">{doctorProfile.title}</p>
              </div>
              <div className="rounded-2xl border border-line bg-white p-5">
                <p className="text-sm font-bold text-muted">소속</p>
                <p className="mt-2 text-xl font-extrabold text-brand-800">{hospitalInfo.centerName}</p>
              </div>
            </div>
            <p className="mt-6 text-lg leading-8 text-muted">
              무릎과 어깨 통증, 발과 발목의 통증은 단순히 영상검사 한 장으로
              결정되지 않습니다. 환자가 실제로 어디가 불편한지, 어느 동작에서 통증이
              심한지, 보행에 어떤 제한이 생겼는지 함께 살펴야 합니다.
            </p>
            <CTAButtons className="mt-8" />
          </div>
        </div>
      </div>
    </section>
  );
}
