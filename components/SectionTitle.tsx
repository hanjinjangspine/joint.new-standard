type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left"
}: SectionTitleProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-bold uppercase text-brand-600">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-bold leading-tight text-ink sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-lg leading-8 text-muted sm:text-xl">{description}</p>
      ) : null}
    </div>
  );
}
