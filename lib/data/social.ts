export type SocialLink = {
  name: string;
  href: string;
  icon: "linkedin" | "facebook" | "whatsapp" | "telegram" | "x";
};

export const socialLinks: SocialLink[] = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/rumba-y-guateque", icon: "linkedin" },
  { name: "Facebook", href: "https://www.facebook.com/RyG.Fanpage", icon: "facebook" },
  { name: "WhatsApp", href: "https://wa.me/10000000000", icon: "whatsapp" },
  { name: "Telegram", href: "https://t.me/rumbayguateque", icon: "telegram" },
  { name: "X", href: "https://twitter.com/RumbaYGuateque", icon: "x" },
];

export const whatsappSupportUrl = "https://wa.me/10000000000";
