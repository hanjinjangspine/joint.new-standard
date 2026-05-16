import { Clock, Phone } from "lucide-react";
import { clinicHoursSummary, doctorSchedules, hospitalInfo } from "@/lib/data";

const days = [
  { key: "monday", label: "월" },
  { key: "tuesday", label: "화" },
  { key: "wednesday", label: "수" },
  { key: "thursday", label: "목" },
  { key: "friday", label: "금" },
  { key: "saturday", label: "토" },
  { key: "sunday", label: "일" }
] as const;

type ScheduleStatus = (typeof doctorSchedules)[number]["schedule"][keyof (typeof doctorSchedules)[number]["schedule"]][number];

function badgeClass(status: ScheduleStatus) {
  if (status.includes("수술")) {
    return "border-blue-200 bg-blue-50 text-blue-800";
  }
  if (status.includes("순환진료")) {
    return "border-emerald-200 bg-emerald-50 text-emerald-800";
  }
  if (status.includes("휴진")) {
    return "border-rose-200 bg-rose-50 text-rose-800";
  }
  return "border-brand-100 bg-brand-50 text-brand-800";
}

function ScheduleBadges({ items }: { items: ScheduleStatus[] }) {
  return (
    <div className="flex flex-wrap justify-center gap-1.5">
      {items.map((item) => (
        <span
          key={item}
          className={`whitespace-nowrap rounded-full border px-2.5 py-1 text-xs font-extrabold ${badgeClass(item)}`}
        >
          {item}
        </span>
      ))}
    </div>
  );
}

export default function ClinicHoursTable() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-brand-700">
              Clinic Hours
            </p>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
              의료진별 진료 시간표
            </h2>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">
              {clinicHoursSummary.contactNotice}
            </p>
          </div>
          <a
            href={hospitalInfo.consultationPhoneHref}
            aria-label="새기준병원 대표전화로 진료시간 확인"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-brand-800 px-5 py-3 text-base font-extrabold text-white hover:bg-brand-900"
          >
            <Phone aria-hidden="true" size={19} />
            {hospitalInfo.phone}
          </a>
        </div>

        <div className="mt-10 hidden overflow-hidden rounded-2xl border border-line bg-white shadow-sm lg:block">
          <table className="w-full border-collapse text-left">
            <caption className="sr-only">새기준병원 의료진별 진료 시간표</caption>
            <thead className="bg-brand-50 text-sm text-brand-900">
              <tr>
                <th scope="col" className="w-[180px] px-5 py-4 font-extrabold">
                  의료진
                </th>
                <th scope="col" className="w-[120px] px-4 py-4 font-extrabold">
                  진료과
                </th>
                {days.map((day) => (
                  <th key={day.key} scope="col" className="px-3 py-4 text-center font-extrabold">
                    {day.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {doctorSchedules.map((doctor) => (
                <tr key={doctor.name} className="align-top">
                  <th scope="row" className="px-5 py-5 text-base font-extrabold text-ink">
                    {doctor.name}
                  </th>
                  <td className="px-4 py-5 text-sm font-bold text-muted">{doctor.department}</td>
                  {days.map((day) => (
                    <td key={day.key} className="px-3 py-4">
                      <ScheduleBadges items={doctor.schedule[day.key]} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8 grid gap-4 lg:hidden">
          {doctorSchedules.map((doctor) => (
            <article key={doctor.name} className="rounded-2xl border border-line bg-white p-5 shadow-sm">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-xl font-extrabold text-ink">{doctor.name}</h3>
                  <p className="mt-1 text-sm font-bold text-brand-700">{doctor.department}</p>
                </div>
                <Clock aria-hidden="true" className="text-brand-600" size={22} />
              </div>
              <dl className="mt-5 grid gap-3">
                {days.map((day) => (
                  <div key={day.key} className="grid grid-cols-[44px_1fr] items-center gap-3">
                    <dt className="text-sm font-extrabold text-ink">{day.label}</dt>
                    <dd>
                      <ScheduleBadges items={doctor.schedule[day.key]} />
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
