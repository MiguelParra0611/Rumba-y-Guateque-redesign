import { ArticleForm } from "@/components/admin/ArticleForm";
import { createArticle } from "@/app/admin/(protected)/actions";

export default function NewArticlePage() {
  return (
    <div>
      <h1 className="font-[family-name:var(--font-display)] text-3xl tracking-wide text-ink">
        Nueva publicación
      </h1>
      <div className="mt-6 max-w-2xl rounded-2xl bg-white p-6 ring-1 ring-ink/[0.06]">
        <ArticleForm action={createArticle} />
      </div>
    </div>
  );
}
