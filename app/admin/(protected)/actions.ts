"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import type { SupabaseClient } from "@supabase/supabase-js";

export type FormState = { message: string } | null;

async function requireUser(supabase: SupabaseClient) {
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/admin/login");
  return user;
}

async function uploadImageIfPresent(supabase: SupabaseClient, file: File | null) {
  if (!file || file.size === 0) return null;

  const ext = file.name.includes(".") ? file.name.split(".").pop() : "jpg";
  const path = `${crypto.randomUUID()}.${ext}`;

  const { error } = await supabase.storage.from("article-images").upload(path, file, {
    upsert: false,
    contentType: file.type || "image/jpeg",
  });
  if (error) throw new Error(error.message);

  const { data } = supabase.storage.from("article-images").getPublicUrl(path);
  return data.publicUrl;
}

function readArticleFields(formData: FormData) {
  return {
    title: String(formData.get("title") ?? ""),
    slug: String(formData.get("slug") ?? ""),
    excerpt: String(formData.get("excerpt") ?? ""),
    body: String(formData.get("body") ?? ""),
    author_name: String(formData.get("author_name") || "Julieta Parra"),
    published_at: formData.get("published_at")
      ? new Date(String(formData.get("published_at"))).toISOString()
      : new Date().toISOString(),
    image_alt: String(formData.get("image_alt") ?? "") || null,
    is_featured: formData.get("is_featured") === "on",
    is_published: formData.get("is_published") === "on",
  };
}

export async function createArticle(_prevState: FormState, formData: FormData): Promise<FormState> {
  const supabase = await createClient();
  await requireUser(supabase);

  let imageUrl: string | null = null;
  try {
    imageUrl = await uploadImageIfPresent(supabase, formData.get("image") as File | null);
  } catch {
    return { message: "No se pudo subir la imagen." };
  }

  const fields = readArticleFields(formData);
  const { error } = await supabase.from("articles").insert({ ...fields, image_url: imageUrl });

  if (error) return { message: error.message };

  revalidatePath("/");
  revalidatePath("/admin/articles");
  redirect("/admin/articles");
}

export async function updateArticle(
  id: string,
  _prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const supabase = await createClient();
  await requireUser(supabase);

  const currentImageUrl = String(formData.get("current_image_url") ?? "") || null;
  let imageUrl = currentImageUrl;
  try {
    const uploaded = await uploadImageIfPresent(supabase, formData.get("image") as File | null);
    if (uploaded) imageUrl = uploaded;
  } catch {
    return { message: "No se pudo subir la imagen." };
  }

  const fields = readArticleFields(formData);
  const { error } = await supabase
    .from("articles")
    .update({ ...fields, image_url: imageUrl })
    .eq("id", id);

  if (error) return { message: error.message };

  revalidatePath("/");
  revalidatePath("/admin/articles");
  revalidatePath(`/articulos/${fields.slug}`);
  redirect("/admin/articles");
}

export async function deleteArticle(formData: FormData) {
  const supabase = await createClient();
  await requireUser(supabase);

  const id = String(formData.get("id") ?? "");
  if (!id) return;

  await supabase.from("articles").delete().eq("id", id);

  revalidatePath("/");
  revalidatePath("/admin/articles");
}

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/admin/login");
}
