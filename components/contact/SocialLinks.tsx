import { socialLinks } from "@/lib/data/social";
import { FacebookIcon, LinkedinIcon, TelegramIcon, WhatsAppIcon, XIcon } from "@/components/icons/SocialIcons";

const iconMap = {
  facebook: FacebookIcon,
  linkedin: LinkedinIcon,
  whatsapp: WhatsAppIcon,
  telegram: TelegramIcon,
  x: XIcon,
};

export function SocialLinks() {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {socialLinks.map((link) => {
        const Icon = iconMap[link.icon];
        return (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            title={link.name}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-vinyl-black text-cream hover:bg-salsa-red transition-colors"
          >
            <Icon className="h-5 w-5" />
          </a>
        );
      })}
    </div>
  );
}
