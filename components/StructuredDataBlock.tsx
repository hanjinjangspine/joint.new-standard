type StructuredDataBlockProps = {
  title: string;
  rows: {
    label: string;
    value: string | string[];
  }[];
};

export default function StructuredDataBlock({ title, rows }: StructuredDataBlockProps) {
  return (
    <section className="rounded-lg border border-line bg-white p-6 shadow-sm sm:p-8">
      <h2 className="text-2xl font-bold leading-9 text-ink">{title}</h2>
      <dl className="mt-6 grid gap-5">
        {rows.map((row) => (
          <div key={row.label} className="grid gap-2 border-t border-line pt-5 md:grid-cols-[220px_1fr]">
            <dt className="font-bold text-brand-800">{row.label}</dt>
            <dd className="text-base leading-8 text-muted">
              {Array.isArray(row.value) ? (
                <ul className="grid gap-1 sm:grid-cols-2">
                  {row.value.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : (
                row.value
              )}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
