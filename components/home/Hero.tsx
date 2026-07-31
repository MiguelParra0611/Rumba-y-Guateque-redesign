"use client";

import { useState } from "react";
import { EqualizerBars } from "@/components/player/EqualizerBars";
import { CoverImage } from "@/components/ui/CoverImage";
import { heroTagline } from "@/lib/data/content";

export function Hero() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="relative w-full h-[70vh] min-h-[480px] max-h-[760px] overflow-hidden bg-gradient-to-br from-vinyl-black via-vinyl-black-soft to-salsa-red-dark">
      <CoverImage src="/hero-vinyl.jpg" alt="Tornamesa con disco de vinilo" className="opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-t from-vinyl-black/90 via-vinyl-black/40 to-vinyl-black/60" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-8 px-4 text-center">
        <h1 className="max-w-3xl font-[family-name:var(--font-display)] text-4xl leading-tight tracking-wide text-cream sm:text-5xl md:text-6xl">
          {heroTagline}
        </h1>

        <button
          type="button"
          onClick={() => setPlaying((v) => !v)}
          aria-pressed={playing}
          className="group flex items-center gap-3 rounded-full bg-salsa-red px-6 py-3 text-cream shadow-lg shadow-salsa-red/40 transition-transform hover:scale-105"
        >
          <span className={`h-2.5 w-2.5 rounded-full bg-guateque-gold ${playing ? "live-dot" : ""}`} />
          <span className="font-[family-name:var(--font-display)] text-lg tracking-wider">
            {playing ? "AL AIRE" : "AL AIRE — ¡Click Aquí!"}
          </span>
          {playing ? <EqualizerBars animated className="text-guateque-gold" /> : null}
        </button>
      </div>
    </section>
  );
}
