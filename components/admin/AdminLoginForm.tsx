"use client";

import { useActionState } from "react";
import { signIn, type LoginState } from "@/app/admin/login/actions";

const initialState: LoginState = null;

export function AdminLoginForm() {
  const [state, formAction, pending] = useActionState(signIn, initialState);

  return (
    <form
      action={formAction}
      className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-sm ring-1 ring-ink/[0.06]"
    >
      <h1 className="font-[family-name:var(--font-display)] text-2xl tracking-wide text-ink">
        Panel administrador
      </h1>
      <p className="mt-1 text-sm text-ink/60">Rumba y Guateque</p>

      <div className="mt-6 flex flex-col gap-4">
        <label className="flex flex-col gap-1 text-sm">
          Correo
          <input
            type="email"
            name="email"
            required
            autoComplete="username"
            className="rounded-lg border border-ink/15 px-3 py-2 text-sm outline-none focus:border-salsa-red"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm">
          Contraseña
          <input
            type="password"
            name="password"
            required
            autoComplete="current-password"
            className="rounded-lg border border-ink/15 px-3 py-2 text-sm outline-none focus:border-salsa-red"
          />
        </label>

        {state?.message ? (
          <p className="text-sm text-salsa-red" aria-live="polite">
            {state.message}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={pending}
          className="mt-2 rounded-full bg-salsa-red px-4 py-2.5 text-sm font-semibold text-cream hover:bg-salsa-red-dark disabled:opacity-60"
        >
          {pending ? "Ingresando…" : "Ingresar"}
        </button>
      </div>
    </form>
  );
}
