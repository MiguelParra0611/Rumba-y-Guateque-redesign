import Link from "next/link";
import { LogOut } from "lucide-react";
import { signOut } from "@/app/admin/(protected)/actions";

export function AdminShell({
  email,
  children,
}: {
  email?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <header className="border-b border-ink/10 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
          <Link href="/admin/articles" className="font-[family-name:var(--font-display)] text-xl tracking-wide text-ink">
            Admin · Rumba y Guateque
          </Link>
          <div className="flex items-center gap-4">
            {email ? <span className="text-sm text-ink/60">{email}</span> : null}
            <form action={signOut}>
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 rounded-full border border-ink/15 px-3 py-1.5 text-sm text-ink/70 hover:bg-ink/5"
              >
                <LogOut size={14} /> Salir
              </button>
            </form>
          </div>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">{children}</main>
    </div>
  );
}
