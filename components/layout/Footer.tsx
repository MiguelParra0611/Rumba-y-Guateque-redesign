import Image from "next/image";
import Link from "next/link";
import { Apple, Smartphone } from "lucide-react";
import { navItems } from "@/lib/data/nav";
import { socialLinks } from "@/lib/data/social";
import { Container } from "@/components/ui/Container";
import { FacebookIcon, LinkedinIcon, TelegramIcon, WhatsAppIcon, XIcon } from "@/components/icons/SocialIcons";

const iconMap = {
  facebook: FacebookIcon,
  linkedin: LinkedinIcon,
  whatsapp: WhatsAppIcon,
  telegram: TelegramIcon,
  x: XIcon,
};

export function Footer() {
  return (
    <footer className="bg-vinyl-black text-cream">
      <Container className="py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image src="/logo.png" alt="Rumba y Guateque" width={92} height={44} className="h-11 w-auto" />
            <p className="mt-4 text-sm text-cream/60 max-w-xs">
              La emisora online donde se siente, se aprende y se vive la salsa. Salsa buena, salsa brava, 24/7.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-guateque-gold uppercase">Secciones</h3>
            <ul className="mt-4 space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-cream/70 hover:text-cream">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-guateque-gold uppercase">Síguenos</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {socialLinks.map((link) => {
                const Icon = iconMap[link.icon];
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-cream/10 text-cream hover:bg-guateque-gold hover:text-ink transition-colors"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-guateque-gold uppercase">Descarga la app</h3>
            <div className="mt-4 flex flex-col gap-2">
              <span className="inline-flex items-center gap-2 rounded-lg border border-cream/20 px-3 py-2 text-xs text-cream/70">
                <Apple className="h-4 w-4" /> Próximamente en App Store
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg border border-cream/20 px-3 py-2 text-xs text-cream/70">
                <Smartphone className="h-4 w-4" /> Próximamente en Play Store
              </span>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-cream/10 pt-6 text-center text-xs text-cream/50">
          © {new Date().getFullYear()} Rumba y Guateque Radio. Somos una emisora sin ánimo de lucro. Que viva la salsa.
        </div>
      </Container>
    </footer>
  );
}
