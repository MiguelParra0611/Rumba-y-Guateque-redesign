import { whatsappSupportUrl } from "@/lib/data/social";
import { WhatsAppIcon } from "@/components/icons/SocialIcons";

export function WhatsAppFloatingButton() {
  return (
    <a
      href={whatsappSupportUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatea con nosotros por WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center"
    >
      <span className="mr-3 hidden rounded-full bg-vinyl-black px-3 py-1.5 text-xs font-medium text-cream shadow-lg opacity-0 translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 sm:block whitespace-nowrap">
        Chatea con nosotros
      </span>
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-live-green text-white shadow-lg shadow-live-green/40 transition-transform hover:scale-105">
        <WhatsAppIcon className="h-7 w-7" />
      </span>
    </a>
  );
}
