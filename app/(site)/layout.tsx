import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloatingButton } from "@/components/layout/WhatsAppFloatingButton";
import { PlayerProvider } from "@/components/player/PlayerProvider";
import { LivePlayerBar } from "@/components/player/LivePlayerBar";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <PlayerProvider>
      <Header />
      <main className="flex-1 pb-20">{children}</main>
      <Footer />
      <WhatsAppFloatingButton />
      <LivePlayerBar />
    </PlayerProvider>
  );
}
