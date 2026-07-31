"use client";

// Falls back to the wrapping element's own background (a CSS gradient) if the
// real photo file hasn't been dropped into /public yet.
export function CoverImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      className={`absolute inset-0 h-full w-full object-cover ${className}`}
      onError={(e) => {
        e.currentTarget.style.display = "none";
      }}
    />
  );
}
