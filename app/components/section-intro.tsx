type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  tone?: "dark" | "light";
};

export function SectionIntro({
  eyebrow,
  title,
  description,
  tone = "dark",
}: SectionIntroProps) {
  const headingClass = tone === "light" ? "text-ivory-50" : "text-forest-950";
  const descriptionClass = tone === "light" ? "text-ivory-100/65" : "text-forest-900/65";

  return (
    <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
      <p className="eyebrow">{eyebrow}</p>
      <div className="max-w-2xl">
        <h2 className={`display-heading text-4xl leading-[0.98] ${headingClass} sm:text-5xl`}>
          {title}
        </h2>
        <p className={`mt-5 max-w-xl text-base leading-7 ${descriptionClass}`}>
          {description}
        </p>
      </div>
    </div>
  );
}
