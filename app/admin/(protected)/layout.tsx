import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth/session";
import { AdminShell } from "@/components/admin/AdminShell";

export default async function ProtectedAdminLayout({ children }: { children: React.ReactNode }) {
  const user = await getCurrentUser();
  if (!user) redirect("/admin/login");

  return <AdminShell email={user.email}>{children}</AdminShell>;
}
