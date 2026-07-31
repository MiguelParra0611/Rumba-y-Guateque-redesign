"use client";

import { Trash2 } from "lucide-react";
import { deleteArticle } from "@/app/admin/(protected)/actions";

export function DeleteArticleButton({ id, title }: { id: string; title: string }) {
  return (
    <form
      action={deleteArticle}
      onSubmit={(e) => {
        if (!confirm(`¿Eliminar el artículo "${title}"? Esta acción no se puede deshacer.`)) {
          e.preventDefault();
        }
      }}
    >
      <input type="hidden" name="id" value={id} />
      <button
        type="submit"
        aria-label="Eliminar"
        className="inline-flex items-center gap-1 rounded-full px-2.5 py-1.5 text-xs text-salsa-red hover:bg-salsa-red/10"
      >
        <Trash2 size={14} /> Eliminar
      </button>
    </form>
  );
}
