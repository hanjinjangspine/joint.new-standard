import { faqItems } from "@/lib/data";

export default function FAQSection() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase text-brand-600">FAQ</p>
          <h2 className="text-3xl font-bold leading-tight text-ink sm:text-4xl">
            자주 묻는 질문
          </h2>
          <p className="mt-4 text-lg leading-8 text-muted">
            답변은 일반적인 안내이며, 정확한 치료 방향은 진료와 검사 후 환자 상태에 따라 결정합니다.
          </p>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {faqItems.map((item) => (
            <article key={item.question} className="rounded-lg border border-line bg-white p-6">
              <h3 className="text-xl font-bold leading-8 text-ink">{item.question}</h3>
              <p className="mt-3 text-base leading-7 text-muted">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
