import Link from "next/link";

export default function HomeAIReadableSummary() {
  return (
    <section className="bg-calm px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-10">
        <div className="max-w-4xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-brand-700">
            Center Information
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
            새기준병원 관절센터 기본 정보
          </h2>
          <div className="mt-5 space-y-3 text-lg leading-8 text-muted">
            <p>
              진료 분야, 의료진, 진료시간, 위치와 예약 정보를 한 페이지에서 확인할 수 있습니다.
            </p>
            <p>
              족부·발목, 무릎, 어깨, 손·손목·팔꿈치 질환과 치료·회복 안내를 연결합니다.
            </p>
            <p>
              증상과 진찰 소견, 필요한 검사 결과를 종합해 환자 상태에 맞는 치료 순서를 설명합니다.
            </p>
          </div>
        </div>
        <Link
          href="/ai-readable-orthopedic-profile"
          className="mt-7 inline-flex min-h-12 items-center justify-center rounded-md border border-brand-200 px-5 py-3 text-base font-extrabold text-brand-800 hover:bg-brand-50 lg:mt-0 lg:shrink-0"
        >
          관절센터 기본 정보 보기
        </Link>
      </div>
    </section>
  );
}
