"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/lib/data/nav";
import { Container } from "@/components/ui/Container";
import { MobileNav } from "@/components/layout/MobileNav";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/[0.08] bg-cream/72 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 shrink-0" onClick={() => setOpen(false)}>
          <Image src="/logo.png" alt="Rumba y Guateque" width={84} height={40} className="h-10 w-auto" priority />
          <span className="hidden sm:block font-[family-name:var(--font-display)] text-xl tracking-wide text-ink">
            Rumba &amp; Guateque
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-ink/[0.06] text-salsa-red"
                    : "text-ink/80 hover:bg-ink/[0.06] hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contacto#donaciones"
            className="inline-flex items-center rounded-full bg-guateque-gold px-4 py-2 text-sm font-semibold text-ink hover:bg-guateque-gold-soft transition-colors"
          >
            Apóyanos
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center rounded-full p-2 text-ink hover:bg-ink/[0.06]"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      <MobileNav open={open} onClose={() => setOpen(false)} pathname={pathname} />
    </header>
  );
}
