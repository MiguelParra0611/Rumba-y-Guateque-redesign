import { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

type Variant = "primary" | "gold" | "outline" | "ghost";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-salsa-red text-cream hover:bg-salsa-red-dark shadow-sm shadow-salsa-red/30",
  gold: "bg-guateque-gold text-ink hover:bg-guateque-gold-soft",
  outline:
    "border border-ink/20 text-ink hover:bg-ink/5",
  ghost: "text-ink hover:bg-ink/5",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors disabled:opacity-50 disabled:pointer-events-none";

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; children: ReactNode }) {
  return (
    <button className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export function LinkButton({
  children,
  href,
  variant = "primary",
  className = "",
  target,
}: {
  children: ReactNode;
  href: string;
  variant?: Variant;
  className?: string;
  target?: string;
}) {
  return (
    <Link
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
