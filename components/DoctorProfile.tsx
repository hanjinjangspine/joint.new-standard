import CTAButtons from "@/components/CTAButtons";
import { doctorProfile } from "@/lib/data";

export default function DoctorProfile() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-center">
          <p className="text-sm font-bold uppercase text-brand-600">Orthopedic Specialist</p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
            주요 진료 분야와 전문 활동
          </h2>
          <p className="mt-5 rounded-lg border border-brand-100 bg-brand-50 p-5 text-lg font-semibold leading-8 text-brand-900">
            {doctorProfile.emphasis}
          </p>
          <div className="mt-8">
            <h3 className="text-xl font-bold text-ink">주요 진료 분야</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {doctorProfile.specialties.map((field) => (
                <span
                  key={field}
                  className="rounded-md border border-brand-100 bg-white px-4 py-2 text-base font-semibold text-brand-800"
                >
                  {field}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-5 xl:grid-cols-2">
            <article className="rounded-lg border border-line bg-white p-6">
              <h3 className="text-xl font-bold text-ink">학력 및 경력</h3>
              <ul className="mt-5 grid gap-3">
                {doctorProfile.educationAndCareer.map((item) => (
                  <li key={item} className="flex gap-3 text-base leading-7 text-muted">
                    <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-brand-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-lg border border-line bg-white p-6">
              <h3 className="text-xl font-bold text-ink">학회 및 주요활동</h3>
              <ul className="mt-5 grid gap-3">
                {doctorProfile.activities.map((item) => (
                  <li key={item} className="flex gap-3 text-base leading-7 text-muted">
                    <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-brand-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <div className="mt-8 rounded-lg border border-line bg-white p-6">
            <h3 className="text-xl font-bold text-ink">진료 철학</h3>
            <p className="mt-4 text-lg leading-8 text-muted">{doctorProfile.philosophy}</p>
          </div>
          <CTAButtons className="mt-8" />
        </div>
      </div>
    </section>
  );
}
