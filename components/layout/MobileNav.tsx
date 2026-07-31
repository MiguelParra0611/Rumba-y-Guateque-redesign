"use client";

import Link from "next/link";
import { navItems } from "@/lib/data/nav";
import { Container } from "@/components/ui/Container";

export function MobileNav({
  open,
  onClose,
  pathname,
}: {
  open: boolean;
  onClose: () => void;
  pathname: string;
}) {
  return (
    <div
      className={`md:hidden overflow-hidden border-t border-ink/[0.08] bg-cream/95 backdrop-blur-md transition-[max-height] duration-300 ease-in-out ${
        open ? "max-h-96" : "max-h-0"
      }`}
    >
      <Container className="flex flex-col gap-1 py-4">
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={`rounded-lg px-3 py-2.5 text-base font-medium ${
                active ? "bg-ink/[0.06] text-salsa-red" : "text-ink/85 hover:bg-ink/[0.06]"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
        <Link
          href="/contacto#donaciones"
          onClick={onClose}
          className="mt-2 rounded-full bg-guateque-gold px-4 py-2.5 text-center text-sm font-semibold text-ink"
        >
          Apóyanos
        </Link>
        <p className="mt-3 text-center text-xs text-ink/60">
          Descarga nuestra app en Play Store y App Store — ver enlaces en el pie de página.
        </p>
      </Container>
    </div>
  );
}
