import { articles } from "./data";
import type { Article } from "./types";

export async function getFeaturedAndRecentArticles(): Promise<{
  featured: Article | null;
  recent: Article[];
}> {
  const published = articles
    .filter((a) => a.is_published)
    .sort((a, b) => (a.published_at < b.published_at ? 1 : -1));

  let featured: Article | null = published.find((a) => a.is_featured) ?? null;

  const recent = published
    .slice(0, featured ? 7 : 8)
    .filter((a) => a.id !== featured?.id);

  if (!featured && recent.length > 0) {
    featured = recent.shift() ?? null;
  }

  return { featured, recent };
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const article = articles.find((a) => a.slug === slug && a.is_published);
  return article ?? null;
}
