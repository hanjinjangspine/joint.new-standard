import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

const videoUrl = "https://www.youtube.com/watch?v=jKSkqWNJQbI";

export default function ShoulderBraceVideoSection() {
  return (
    <section
      className="bg-calm px-4 py-16 sm:px-6 lg:px-8"
      aria-labelledby="shoulder-brace-video-title"
    >
      <div className="mx-auto grid max-w-7xl gap-8 rounded-[28px] border border-brand-100 bg-white p-6 shadow-sm sm:p-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
        <div>
          <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-brand-600">
            Patient Education Video
          </p>
          <h2
            id="shoulder-brace-video-title"
            className="mt-3 text-3xl font-extrabold leading-tight text-ink sm:text-4xl"
          >
            어깨 수술 후 보조기, 올바르게 착용하세요
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted">
            어깨 수술 후 또는 어깨 탈구·손상으로 보조기를 사용하는 분을 위해 착용 방법과
            주의사항을 새기준병원 공식 영상으로 안내합니다.
          </p>
          <p className="mt-4 rounded-2xl border border-brand-100 bg-brand-50 p-4 text-sm leading-7 text-brand-900">
            보조기 종류와 착용 기간은 환자 상태에 따라 달라질 수 있으므로 퇴원 시 받은 안내와
            주치의 지시를 우선해 주세요.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/shoulder"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-brand-800 px-5 py-3 font-extrabold text-white transition hover:bg-brand-900"
            >
              어깨 통증 진료 안내
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
            <Link
              href={videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-brand-200 bg-white px-5 py-3 font-extrabold text-brand-800 transition hover:bg-brand-50"
            >
              유튜브에서 보기
              <ExternalLink aria-hidden="true" size={18} />
            </Link>
          </div>
        </div>

        <div className="aspect-video w-full overflow-hidden rounded-2xl border border-line bg-black shadow-card">
          <iframe
            src="https://www.youtube-nocookie.com/embed/jKSkqWNJQbI?rel=0&playsinline=1"
            title="새기준병원 어깨 수술 후 보조기 올바른 착용법 및 주의사항 교육 영상"
            width="560"
            height="315"
            className="h-full w-full border-0"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
