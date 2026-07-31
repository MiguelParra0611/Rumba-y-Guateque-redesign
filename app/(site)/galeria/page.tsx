import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Lightbox } from "@/components/gallery/Lightbox";
import { galleryImages } from "@/lib/data/gallery";

export const metadata: Metadata = {
  title: "Galería | Rumba y Guateque",
};

export default function GaleriaPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow="Momentos" title="Galería de Fotos" align="center" />
        <div className="mt-10">
          <Lightbox images={galleryImages} />
        </div>
      </Container>
    </section>
  );
}
