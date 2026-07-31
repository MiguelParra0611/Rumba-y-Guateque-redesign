import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScheduleGrid } from "@/components/programming/ScheduleGrid";

export const metadata: Metadata = {
  title: "Programación | Rumba y Guateque",
};

export default function ProgramacionPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow="En vivo" title="Programación" align="center" />
        <p className="mx-auto mt-4 max-w-xl text-center text-sm text-ink/60">
          Horario de Colombia. En el resto del horario funciona nuestro AutoDJ — emitimos las 24 horas.
        </p>
        <div className="mt-10">
          <ScheduleGrid />
        </div>
      </Container>
    </section>
  );
}
