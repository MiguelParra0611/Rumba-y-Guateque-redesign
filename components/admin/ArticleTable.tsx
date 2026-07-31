import Link from "next/link";
import { Pencil, Star } from "lucide-react";
import type { Article } from "@/lib/articles/types";
import { DeleteArticleButton } from "@/components/admin/DeleteArticleButton";

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("es-CO", { day: "2-digit", month: "short", year: "numeric" }).format(
    new Date(iso)
  );
}

export function ArticleTable({ articles }: { articles: Article[] }) {
  if (articles.length === 0) {
    return <p className="text-sm text-ink/60">Aún no hay artículos. Crea el primero.</p>;
  }

  return (
    <div className="overflow-hidden rounded-2xl bg-white ring-1 ring-ink/[0.06]">
      <table className="w-full text-left text-sm">
        <thead className="bg-ink/[0.03] text-xs uppercase tracking-wide text-ink/50">
          <tr>
            <th className="px-4 py-3">Título</th>
            <th className="px-4 py-3">Autor</th>
            <th className="px-4 py-3">Fecha</th>
            <th className="px-4 py-3">Estado</th>
            <th className="px-4 py-3 text-right">Acciones</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-ink/[0.06]">
          {articles.map((article) => (
            <tr key={article.id}>
              <td className="px-4 py-3 font-medium text-ink">
                <span className="flex items-center gap-1.5">
                  {article.is_featured ? <Star size={14} className="text-guateque-gold" /> : null}
                  {article.title}
                </span>
              </td>
              <td className="px-4 py-3 text-ink/70">{article.author_name}</td>
              <td className="px-4 py-3 text-ink/70">{formatDate(article.published_at)}</td>
              <td className="px-4 py-3">
                <span
                  className={`rounded-full px-2 py-0.5 text-xs ${
                    article.is_published
                      ? "bg-live-green/15 text-live-green"
                      : "bg-ink/10 text-ink/50"
                  }`}
                >
                  {article.is_published ? "Publicado" : "Borrador"}
                </span>
              </td>
              <td className="px-4 py-3">
                <div className="flex items-center justify-end gap-1">
                  <Link
                    href={`/admin/articles/${article.id}/edit`}
                    className="inline-flex items-center gap-1 rounded-full px-2.5 py-1.5 text-xs text-ink/70 hover:bg-ink/5"
                  >
                    <Pencil size={14} /> Editar
                  </Link>
                  <DeleteArticleButton id={article.id} title={article.title} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
