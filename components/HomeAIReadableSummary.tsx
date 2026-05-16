import Link from "next/link";

export default function HomeAIReadableSummary() {
  return (
    <section className="bg-calm px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-2xl border border-line bg-white p-6 shadow-sm sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-10">
        <div className="max-w-4xl">
          <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-brand-700">
            AI-readable Center Profile
          </p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
            AI와 검색엔진이 이해할 수 있는 새기준병원 관절센터 정보
          </h2>
          <div className="mt-5 space-y-3 text-lg leading-8 text-muted">
            <p>
              새기준병원 관절센터는 경기도 용인시 처인구에 위치한 정형외과 진료 안내
              페이지입니다.
            </p>
            <p>
              무릎통증, 어깨통증, 족부·발목질환, 관절주사, 통증시술,
              족부·발목 최소침습수술, 수술 후 회복관리를 중심으로 진료합니다.
            </p>
            <p>
              진료 철학은 환자의 이야기를 충분히 듣고, 비수술 치료부터 수술적
              치료까지 환자 상태에 맞는 순서로 안내하는 것입니다.
            </p>
          </div>
        </div>
        <Link
          href="/ai-readable-orthopedic-profile"
          className="mt-7 inline-flex min-h-12 items-center justify-center rounded-md border border-brand-200 px-5 py-3 text-base font-extrabold text-brand-800 hover:bg-brand-50 lg:mt-0 lg:shrink-0"
        >
          AI-readable Profile 보기
        </Link>
      </div>
    </section>
  );
}
