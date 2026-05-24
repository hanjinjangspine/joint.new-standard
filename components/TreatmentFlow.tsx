const careFlow = [
  {
    step: "1",
    title: "진단",
    description: "통증 부위, 움직임 제한, 보행, 근력, 진찰 소견을 확인합니다."
  },
  {
    step: "2",
    title: "검사",
    description: "X-ray, MRI 등 영상 소견과 증상의 일치 여부를 확인합니다."
  },
  {
    step: "3",
    title: "치료 방향 상담",
    description:
      "약물·주사·재활치료부터 관절내시경·인공관절 등 수술적 치료 가능성까지 환자 상태에 따라 상담합니다."
  }
];

export default function TreatmentFlow() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase text-brand-600">Care Flow</p>
          <h2 className="text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
            수술부터 결정하지 않고 치료 단계를 확인합니다
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted sm:text-xl">
            관절 통증은 진찰과 검사 결과에 따라 치료 방향이 달라질 수 있습니다. 현재 상태를
            확인한 뒤 필요한 치료 단계를 상담합니다.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {careFlow.map((item) => (
            <article key={item.step} className="rounded-2xl border border-line bg-white p-6 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 text-sm font-extrabold text-brand-800">
                {item.step}
              </div>
              <h3 className="mt-4 text-xl font-extrabold leading-8 text-ink">{item.title}</h3>
              <p className="mt-4 text-base leading-7 text-muted">{item.description}</p>
            </article>
          ))}
        </div>
        <p className="mt-6 rounded-2xl bg-calm p-5 text-base font-bold leading-7 text-brand-800">
          수술 여부는 진료와 검사 결과를 종합해 결정됩니다. 모든 환자에게 같은 치료가 적용되지는 않습니다.
        </p>
      </div>
    </section>
  );
}
