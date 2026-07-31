export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Programación", href: "/programacion" },
  { label: "Quiénes somos", href: "/quienes-somos" },
  { label: "Galería", href: "/galeria" },
  { label: "Contacto", href: "/contacto" },
];
