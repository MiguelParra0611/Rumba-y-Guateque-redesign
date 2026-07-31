import Link from "next/link";
import { Plus } from "lucide-react";
import { getAllArticlesForAdmin } from "@/lib/articles/queries";
import { ArticleTable } from "@/components/admin/ArticleTable";

export default async function AdminArticlesPage() {
  const articles = await getAllArticlesForAdmin();

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-[family-name:var(--font-display)] text-3xl tracking-wide text-ink">
          Artículos
        </h1>
        <Link
          href="/admin/articles/new"
          className="inline-flex items-center gap-1.5 rounded-full bg-salsa-red px-4 py-2 text-sm font-semibold text-cream hover:bg-salsa-red-dark"
        >
          <Plus size={16} /> Nueva publicación
        </Link>
      </div>

      <div className="mt-6">
        <ArticleTable articles={articles} />
      </div>
    </div>
  );
}
