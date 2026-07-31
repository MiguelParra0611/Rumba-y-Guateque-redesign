import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft } from "lucide-react";
import { getArticleBySlug } from "@/lib/articles/queries";
import { Container } from "@/components/ui/Container";

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("es-CO", { day: "numeric", month: "long", year: "numeric" }).format(
    new Date(iso)
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  return { title: article ? `${article.title} | Rumba y Guateque` : "Artículo | Rumba y Guateque" };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) notFound();

  return (
    <article className="py-12 sm:py-16">
      <Container className="max-w-3xl">
        <Link href="/" className="inline-flex items-center gap-1 text-sm text-ink/60 hover:text-ink">
          <ChevronLeft size={16} /> Volver a Inicio
        </Link>

        <h1 className="mt-4 font-[family-name:var(--font-serif-accent)] text-3xl font-semibold text-ink sm:text-4xl">
          {article.title}
        </h1>

        <p className="mt-3 text-sm text-ink/50">
          {article.author_name} · {formatDate(article.published_at)}
        </p>

        {article.image_url ? (
          <div className="relative mt-6 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-ink/5">
            <Image
              src={article.image_url}
              alt={article.image_alt ?? article.title}
              fill
              sizes="(min-width: 768px) 768px, 100vw"
              className="object-cover"
              priority
            />
          </div>
        ) : null}

        <div className="prose prose-neutral mt-8 max-w-none text-ink/80">
          {article.body.split("\n\n").map((p, i) => (
            <p key={i} className="mb-4 leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </Container>
    </article>
  );
}
