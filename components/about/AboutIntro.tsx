import { CoverImage } from "@/components/ui/CoverImage";
import { Container } from "@/components/ui/Container";
import { aboutTitle, aboutIntro } from "@/lib/data/content";

export function AboutIntro() {
  const paragraphs = aboutIntro.split("\n\n");

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-vinyl-black via-salsa-red-dark to-vinyl-black-soft">
      <CoverImage src="/hero-mic.jpg" alt="Micrófono de estudio tipo podcast" className="opacity-85" />
      <div className="absolute inset-0 bg-gradient-to-b from-vinyl-black/85 via-vinyl-black/55 to-vinyl-black/85" />
      <div className="relative z-10 flex min-h-[420px] flex-col items-center justify-center px-4 py-16 text-center sm:min-h-[520px] sm:py-24 lg:py-28">
        <Container className="flex flex-col items-center text-center">
          <h1 className="font-[family-name:var(--font-display)] text-4xl tracking-wide text-cream sm:text-5xl">
            {aboutTitle}
          </h1>
          <div className="mt-5 max-w-2xl space-y-4">
            {paragraphs.map((p, i) => (
              <p
                key={i}
                className="font-[family-name:var(--font-serif-accent)] text-base leading-relaxed text-cream/90 sm:text-lg"
              >
                {p}
              </p>
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
