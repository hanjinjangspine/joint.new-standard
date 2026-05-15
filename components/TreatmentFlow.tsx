import { careFlow } from "@/lib/data";

export default function TreatmentFlow() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase text-brand-600">Care Flow</p>
          <h2 className="text-3xl font-extrabold leading-tight text-ink sm:text-4xl">
            진단부터 회복까지, 치료 순서를 함께 정합니다.
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted sm:text-xl">
            처음 상담부터 보행 회복과 일상 복귀 관리까지 필요한 단계를 차분하게 설명합니다.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {careFlow.map((item) => (
            <article key={item.step} className="rounded-2xl border border-line bg-white p-6 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 text-sm font-extrabold text-brand-800">
                {item.step.replace("단계", "")}
              </div>
              <h3 className="mt-4 text-xl font-extrabold leading-8 text-ink">{item.title}</h3>
              <p className="mt-4 text-base leading-7 text-muted">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
