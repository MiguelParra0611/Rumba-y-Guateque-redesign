import { createClient } from "@/lib/supabase/server";
import type { Article } from "./types";

export async function getFeaturedAndRecentArticles(): Promise<{
  featured: Article | null;
  recent: Article[];
}> {
  const supabase = await createClient();

  const { data: featuredRows } = await supabase
    .from("articles")
    .select("*")
    .eq("is_published", true)
    .eq("is_featured", true)
    .order("published_at", { ascending: false })
    .limit(1);

  let featured = (featuredRows?.[0] as Article | undefined) ?? null;

  const { data: recentRows } = await supabase
    .from("articles")
    .select("*")
    .eq("is_published", true)
    .order("published_at", { ascending: false })
    .limit(featured ? 7 : 8);

  const recent = ((recentRows as Article[] | null) ?? []).filter(
    (a) => a.id !== featured?.id
  );

  if (!featured && recent.length > 0) {
    featured = recent.shift() ?? null;
  }

  return { featured, recent };
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("articles")
    .select("*")
    .eq("slug", slug)
    .eq("is_published", true)
    .maybeSingle();

  return (data as Article | null) ?? null;
}

export async function getAllArticlesForAdmin(): Promise<Article[]> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("articles")
    .select("*")
    .order("published_at", { ascending: false });

  return (data as Article[] | null) ?? [];
}

export async function getArticleByIdForAdmin(id: string): Promise<Article | null> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("articles")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  return (data as Article | null) ?? null;
}
