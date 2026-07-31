import { getFeaturedAndRecentArticles } from "@/lib/articles/queries";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArticleCard } from "@/components/articles/ArticleCard";

export async function ArticlesSection() {
  const { featured, recent } = await getFeaturedAndRecentArticles();

  if (!featured && recent.length === 0) {
    return null;
  }

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow="Últimas publicaciones" title="Noticias del mundo de la salsa" />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured ? <ArticleCard article={featured} variant="featured" /> : null}
          {recent.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </Container>
    </section>
  );
}
