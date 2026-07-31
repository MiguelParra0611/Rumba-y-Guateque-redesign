export function SectionHeading({
  eyebrow,
  title,
  align = "left",
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
  dark?: boolean;
}) {
  return (
    <div className={align === "center" ? "text-center" : "text-left"}>
      {eyebrow ? (
        <p
          className={`mb-2 text-sm font-semibold tracking-[0.2em] uppercase ${
            dark ? "text-guateque-gold" : "text-salsa-red"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-[family-name:var(--font-display)] text-4xl sm:text-5xl tracking-wide ${
          dark ? "text-cream" : "text-ink"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
