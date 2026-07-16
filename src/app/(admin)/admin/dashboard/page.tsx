import { getSession } from "@/lib/auth";
import AdminDashboard from "@/components/admin/dashboard/AdminDashboard";

// Force dynamic rendering
export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const session = await getSession();

  if (!session || !session.user) {
    throw new Error("Unauthorized access");
  }

  return <AdminDashboard />;
}
