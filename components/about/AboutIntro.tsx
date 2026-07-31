import { CoverImage } from "@/components/ui/CoverImage";
import { Container } from "@/components/ui/Container";
import { aboutIntro } from "@/lib/data/content";

export function AboutIntro() {
  return (
    <section className="relative w-full aspect-[16/9] overflow-hidden bg-gradient-to-br from-vinyl-black via-salsa-red-dark to-vinyl-black-soft">
      <CoverImage src="/hero-mic.jpg" alt="Micrófono de estudio tipo podcast" className="opacity-85" />
      <div className="absolute inset-0 bg-gradient-to-t from-vinyl-black/95 via-vinyl-black/50 to-vinyl-black/40" />
      <div className="relative z-10 flex h-full items-center">
        <Container>
          <p className="max-w-xl font-[family-name:var(--font-serif-accent)] text-lg leading-relaxed text-cream sm:text-xl">
            {aboutIntro}
          </p>
        </Container>
      </div>
    </section>
  );
}
