import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ourHistory } from "@/lib/data/content";

export function OurHistory() {
  const paragraphs = ourHistory.split("\n\n");

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow="Desde 2009" title="Nuestra Historia" align="center" />
        <div className="mx-auto mt-8 max-w-3xl space-y-5 text-ink/80 leading-relaxed">
          {paragraphs.map((p, i) => (
            <p key={i} className={i === paragraphs.length - 1 ? "italic text-ink/60" : undefined}>
              {p}
            </p>
          ))}
        </div>
      </Container>
    </section>
  );
}
