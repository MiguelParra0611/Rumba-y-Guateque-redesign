import { staff } from "@/lib/data/staff";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaffCard } from "@/components/about/StaffCard";

export function StaffGrid() {
  return (
    <section className="py-16 sm:py-20 bg-cream-muted/40">
      <Container>
        <SectionHeading eyebrow="El equipo" title="Nuestro Staff" align="center" />
        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
          {staff.map((member) => (
            <StaffCard key={member.name} member={member} />
          ))}
        </div>
      </Container>
    </section>
  );
}
