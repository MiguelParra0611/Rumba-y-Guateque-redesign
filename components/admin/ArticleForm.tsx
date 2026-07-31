"use client";

import { useActionState } from "react";
import Image from "next/image";
import type { Article } from "@/lib/articles/types";
import type { FormState } from "@/app/admin/(protected)/actions";

function toLocalInputValue(iso?: string) {
  if (!iso) return "";
  const d = new Date(iso);
  const pad = (n: number) => n.toString().padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(
    d.getMinutes()
  )}`;
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function ArticleForm({
  action,
  article,
}: {
  action: (prevState: FormState, formData: FormData) => Promise<FormState>;
  article?: Article;
}) {
  const [state, formAction, pending] = useActionState<FormState, FormData>(action, null);

  return (
    <form action={formAction} className="flex flex-col gap-5">
      {article ? <input type="hidden" name="current_image_url" value={article.image_url ?? ""} /> : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-1 text-sm sm:col-span-2">
          Título
          <input
            type="text"
            name="title"
            required
            defaultValue={article?.title}
            onChange={(e) => {
              const slugInput = e.currentTarget.form?.elements.namedItem("slug") as HTMLInputElement | null;
              if (slugInput && !slugInput.dataset.touched) {
                slugInput.value = slugify(e.currentTarget.value);
              }
            }}
            className="rounded-lg border border-ink/15 px-3 py-2 outline-none focus:border-salsa-red"
          />
        </label>

        <label className="flex flex-col gap-1 text-sm sm:col-span-2">
          Slug (URL)
          <input
            type="text"
            name="slug"
            required
            defaultValue={article?.slug}
            onChange={(e) => {
              e.currentTarget.dataset.touched = "true";
            }}
            className="rounded-lg border border-ink/15 px-3 py-2 font-mono text-xs outline-none focus:border-salsa-red"
          />
        </label>

        <label className="flex flex-col gap-1 text-sm">
          Autor
          <input
            type="text"
            name="author_name"
            defaultValue={article?.author_name ?? "Julieta Parra"}
            className="rounded-lg border border-ink/15 px-3 py-2 outline-none focus:border-salsa-red"
          />
        </label>

        <label className="flex flex-col gap-1 text-sm">
          Fecha de publicación
          <input
            type="datetime-local"
            name="published_at"
            defaultValue={toLocalInputValue(article?.published_at) || toLocalInputValue(new Date().toISOString())}
            className="rounded-lg border border-ink/15 px-3 py-2 outline-none focus:border-salsa-red"
          />
        </label>

        <label className="flex flex-col gap-1 text-sm sm:col-span-2">
          Extracto (se muestra truncado con "…" en las tarjetas)
          <textarea
            name="excerpt"
            required
            rows={2}
            defaultValue={article?.excerpt}
            className="rounded-lg border border-ink/15 px-3 py-2 outline-none focus:border-salsa-red"
          />
        </label>

        <label className="flex flex-col gap-1 text-sm sm:col-span-2">
          Contenido completo
          <textarea
            name="body"
            required
            rows={8}
            defaultValue={article?.body}
            className="rounded-lg border border-ink/15 px-3 py-2 outline-none focus:border-salsa-red"
          />
        </label>

        <label className="flex flex-col gap-1 text-sm">
          Imagen {article ? "(deja vacío para conservar la actual)" : ""}
          <input
            type="file"
            name="image"
            accept="image/*"
            className="rounded-lg border border-ink/15 px-3 py-2 text-xs outline-none focus:border-salsa-red"
          />
          {article?.image_url ? (
            <div className="relative mt-1 h-24 w-40 overflow-hidden rounded-lg bg-ink/5">
              <Image src={article.image_url} alt="" fill className="object-cover" />
            </div>
          ) : null}
        </label>

        <label className="flex flex-col gap-1 text-sm">
          Texto alternativo de la imagen
          <input
            type="text"
            name="image_alt"
            defaultValue={article?.image_alt ?? ""}
            className="rounded-lg border border-ink/15 px-3 py-2 outline-none focus:border-salsa-red"
          />
        </label>

        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" name="is_featured" defaultChecked={article?.is_featured} className="accent-salsa-red" />
          Destacado (tarjeta grande en Inicio)
        </label>

        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            name="is_published"
            defaultChecked={article?.is_published ?? true}
            className="accent-salsa-red"
          />
          Publicado (visible en el sitio)
        </label>
      </div>

      {state?.message ? <p className="text-sm text-salsa-red">{state.message}</p> : null}

      <button
        type="submit"
        disabled={pending}
        className="self-start rounded-full bg-salsa-red px-6 py-2.5 text-sm font-semibold text-cream hover:bg-salsa-red-dark disabled:opacity-60"
      >
        {pending ? "Guardando…" : "Guardar"}
      </button>
    </form>
  );
}
