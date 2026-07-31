"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryImage } from "@/lib/data/gallery";

export function Lightbox({ images }: { images: GalleryImage[] }) {
  const [index, setIndex] = useState<number | null>(null);

  return (
    <>
      <div className="grid grid-cols-3 gap-2 sm:grid-cols-5 lg:grid-cols-10">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setIndex(i)}
            className="group relative aspect-square overflow-hidden rounded-lg bg-ink/5"
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 1024px) 10vw, (min-width: 640px) 20vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </button>
        ))}
      </div>

      {index !== null ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-vinyl-black/90 p-4"
          onClick={() => setIndex(null)}
        >
          <button
            type="button"
            aria-label="Cerrar"
            onClick={() => setIndex(null)}
            className="absolute right-4 top-4 rounded-full bg-cream/10 p-2 text-cream hover:bg-cream/20"
          >
            <X size={20} />
          </button>

          <button
            type="button"
            aria-label="Anterior"
            onClick={(e) => {
              e.stopPropagation();
              setIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length));
            }}
            className="absolute left-4 rounded-full bg-cream/10 p-2 text-cream hover:bg-cream/20"
          >
            <ChevronLeft size={22} />
          </button>

          <div className="relative h-[70vh] w-full max-w-3xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[index].src}
              alt={images[index].alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>

          <button
            type="button"
            aria-label="Siguiente"
            onClick={(e) => {
              e.stopPropagation();
              setIndex((i) => (i === null ? i : (i + 1) % images.length));
            }}
            className="absolute right-16 rounded-full bg-cream/10 p-2 text-cream hover:bg-cream/20"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      ) : null}
    </>
  );
}
