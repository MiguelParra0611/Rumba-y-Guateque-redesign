export type Article = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  body: string;
  author_name: string;
  published_at: string;
  image_url: string | null;
  image_alt: string | null;
  is_featured: boolean;
  is_published: boolean;
  created_at: string;
  updated_at: string;
};

export type ArticleInput = {
  title: string;
  slug: string;
  excerpt: string;
  body: string;
  author_name: string;
  published_at: string;
  image_url: string | null;
  image_alt: string | null;
  is_featured: boolean;
  is_published: boolean;
};
