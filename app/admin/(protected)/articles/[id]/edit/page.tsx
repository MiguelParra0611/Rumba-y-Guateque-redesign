import { notFound } from "next/navigation";
import { getArticleByIdForAdmin } from "@/lib/articles/queries";
import { ArticleForm } from "@/components/admin/ArticleForm";
import { updateArticle } from "@/app/admin/(protected)/actions";

export default async function EditArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const article = await getArticleByIdForAdmin(id);

  if (!article) notFound();

  const action = updateArticle.bind(null, article.id);

  return (
    <div>
      <h1 className="font-[family-name:var(--font-display)] text-3xl tracking-wide text-ink">
        Editar publicación
      </h1>
      <div className="mt-6 max-w-2xl rounded-2xl bg-white p-6 ring-1 ring-ink/[0.06]">
        <ArticleForm action={action} article={article} />
      </div>
    </div>
  );
}
