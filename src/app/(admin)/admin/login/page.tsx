import AdminLoginForm from "@/components/admin/login/AdminLoginForm";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";

export const dynamic = 'force-dynamic';

const AdminLoginPage = async () => {
  const session = await getSession();

  if (session?.user || session?.session.id) return redirect("/admin/dashboard");
  return <AdminLoginForm />;
};

export default AdminLoginPage;
