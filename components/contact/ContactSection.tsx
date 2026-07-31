import { Heart, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SocialLinks } from "@/components/contact/SocialLinks";
import { contactEmails, contactMessage } from "@/lib/data/content";

export function ContactSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container className="max-w-2xl">
        <SectionHeading eyebrow="Hablemos" title="Contacto" align="center" />

        <p className="mx-auto mt-6 max-w-xl text-center text-ink/70">{contactMessage}</p>

        <div className="mt-6 flex flex-col items-center gap-2">
          {contactEmails.map((email) => (
            <a
              key={email}
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 text-salsa-red font-medium hover:text-salsa-red-dark"
            >
              <Mail size={16} /> {email}
            </a>
          ))}
        </div>

        <div className="mt-8">
          <SocialLinks />
        </div>

        <div
          id="donaciones"
          className="mt-14 scroll-mt-24 rounded-2xl bg-gradient-to-br from-guateque-gold-soft to-guateque-gold p-8 text-center"
        >
          <Heart className="mx-auto h-8 w-8 text-salsa-red-dark" />
          <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl tracking-wide text-ink">
            Apoya a Rumba y Guateque
          </h3>
          <p className="mx-auto mt-2 max-w-md text-sm text-ink/70">
            Somos una emisora sin ánimo de lucro. Tu donación nos ayuda a seguir transmitiendo salsa
            buena, salsa brava, las 24 horas del día.
          </p>
          <button
            type="button"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-vinyl-black px-6 py-2.5 text-sm font-semibold text-cream hover:bg-vinyl-black-soft"
          >
            <Heart size={16} /> Donar ahora
          </button>
        </div>
      </Container>
    </section>
  );
}
