import { inMemoriam } from "@/lib/data/staff";
import { Container } from "@/components/ui/Container";
import { StaffCard } from "@/components/about/StaffCard";

export function InMemoriam() {
  return (
    <section className="py-12">
      <Container>
        <p className="text-center text-xs font-semibold tracking-[0.2em] uppercase text-ink/40">
          In Memoriam
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-x-10 gap-y-8">
          {inMemoriam.map((member) => (
            <div key={member.name} className="w-32">
              <StaffCard member={member} muted />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
