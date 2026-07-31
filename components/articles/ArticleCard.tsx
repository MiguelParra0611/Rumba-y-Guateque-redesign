import Image from "next/image";
import Link from "next/link";
import type { Article } from "@/lib/articles/types";

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("es-CO", { day: "numeric", month: "short", year: "numeric" }).format(
    new Date(iso)
  );
}

export function ArticleCard({
  article,
  variant = "standard",
}: {
  article: Article;
  variant?: "featured" | "standard";
}) {
  const featured = variant === "featured";

  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-ink/[0.06] ${
        featured ? "sm:col-span-2 sm:row-span-2" : ""
      }`}
    >
      <Link href={`/articulos/${article.slug}`} className={`relative block w-full overflow-hidden bg-ink/5 ${featured ? "aspect-[16/10]" : "aspect-[16/10]"}`}>
        {article.image_url ? (
          <Image
            src={article.image_url}
            alt={article.image_alt ?? article.title}
            fill
            sizes={featured ? "(min-width: 640px) 66vw, 100vw" : "(min-width: 640px) 33vw, 100vw"}
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-salsa-red to-vinyl-black text-cream/60">
            Rumba y Guateque
          </div>
        )}
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className={`font-[family-name:var(--font-serif-accent)] font-semibold text-ink ${featured ? "text-2xl sm:text-3xl" : "text-lg"}`}>
          <Link href={`/articulos/${article.slug}`} className="hover:text-salsa-red transition-colors">
            {article.title}
          </Link>
        </h3>

        <p className={`text-ink/70 ${featured ? "text-base" : "text-sm"} line-clamp-3`}>
          {article.excerpt}…
        </p>

        <div className="mt-auto flex items-center justify-between pt-2">
          <Link
            href={`/articulos/${article.slug}`}
            className="text-sm font-semibold text-salsa-red hover:text-salsa-red-dark"
          >
            Leer más
          </Link>
          <p className="text-xs text-ink/50">
            {article.author_name} · {formatDate(article.published_at)}
          </p>
        </div>
      </div>
    </article>
  );
}
