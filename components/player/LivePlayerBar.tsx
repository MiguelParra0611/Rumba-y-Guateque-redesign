"use client";

import { Pause, Play, Volume2, X, RotateCcw } from "lucide-react";
import { STREAM_URL, usePlayer } from "@/components/player/PlayerProvider";
import { EqualizerBars } from "@/components/player/EqualizerBars";

function formatElapsed(totalSeconds: number) {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  const pad = (n: number) => n.toString().padStart(2, "0");
  return h > 0 ? `${h}:${pad(m)}:${pad(s)}` : `${pad(m)}:${pad(s)}`;
}

export function LivePlayerBar() {
  const { status, volume, elapsedSeconds, pause, resume, stop, retry, setVolume } = usePlayer();

  if (status === "idle") return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-cream/10 bg-vinyl-black text-cream shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-3 px-4 py-3 sm:gap-4">
        <div className="flex items-center gap-2 shrink-0">
          <span className="live-dot h-2 w-2 rounded-full bg-live-green" />
          <span className="text-xs font-semibold tracking-wide text-guateque-gold">EN VIVO</span>
        </div>

        {status === "error" ? (
          <div className="flex flex-1 min-w-[240px] flex-wrap items-center gap-3 text-sm">
            <p className="text-cream/80">
              No se pudo reproducir la transmisión en este navegador — probablemente bloqueada por
              tratarse de una conexión insegura (HTTP).
            </p>
            <a
              href={STREAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-full bg-guateque-gold px-3 py-1.5 text-xs font-semibold text-ink hover:bg-guateque-gold-soft"
            >
              Abrir la señal en una pestaña nueva
            </a>
            <button
              type="button"
              onClick={retry}
              aria-label="Reintentar"
              className="inline-flex items-center gap-1 text-xs text-cream/70 hover:text-cream"
            >
              <RotateCcw size={14} /> Reintentar
            </button>
          </div>
        ) : (
          <>
            <button
              type="button"
              onClick={status === "playing" ? pause : resume}
              disabled={status === "loading"}
              aria-label={status === "playing" ? "Pausar" : "Reanudar"}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-salsa-red text-cream hover:bg-salsa-red-dark disabled:opacity-60"
            >
              {status === "loading" ? (
                <span className="h-3 w-3 animate-spin rounded-full border-2 border-cream/40 border-t-cream" />
              ) : status === "playing" ? (
                <Pause size={16} />
              ) : (
                <Play size={16} className="ml-0.5" />
              )}
            </button>

            <EqualizerBars animated={status === "playing"} className="text-guateque-gold shrink-0" />

            <span className="w-16 shrink-0 font-mono text-xs text-cream/70 tabular-nums">
              {formatElapsed(elapsedSeconds)}
            </span>

            <div className="flex flex-1 min-w-[100px] items-center gap-2">
              <Volume2 size={16} className="text-cream/60 shrink-0" />
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                aria-label="Volumen"
                className="w-full accent-guateque-gold"
              />
            </div>
          </>
        )}

        <button
          type="button"
          onClick={stop}
          aria-label="Detener transmisión"
          className="ml-auto shrink-0 rounded-full p-2 text-cream/60 hover:bg-cream/10 hover:text-cream"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
}
