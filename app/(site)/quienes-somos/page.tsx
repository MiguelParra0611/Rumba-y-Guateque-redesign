import type { Metadata } from "next";
import { AboutIntro } from "@/components/about/AboutIntro";
import { OurHistory } from "@/components/about/OurHistory";
import { StaffGrid } from "@/components/about/StaffGrid";
import { InMemoriam } from "@/components/about/InMemoriam";

export const metadata: Metadata = {
  title: "Quiénes somos | Rumba y Guateque",
};

export default function QuienesSomosPage() {
  return (
    <>
      <AboutIntro />
      <OurHistory />
      <StaffGrid />
      <InMemoriam />
    </>
  );
}
