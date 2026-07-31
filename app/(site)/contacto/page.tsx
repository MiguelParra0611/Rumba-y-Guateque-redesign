import type { Metadata } from "next";
import { ContactSection } from "@/components/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contacto | Rumba y Guateque",
};

export default function ContactoPage() {
  return <ContactSection />;
}
