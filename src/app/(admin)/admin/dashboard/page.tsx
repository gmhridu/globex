import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function AdminDashboardPage() {
  try {
    const session = await getSession();

    if (!session?.user) {
      redirect("/admin/login");
    }

    return (
      <div>
        <h1>Admin Dashboard</h1>
        <p>Welcome! Session is active for user: {session.user.email}</p>
      </div>
    );
  } catch (error) {
    console.error("Dashboard session error:", error);
    redirect("/admin/login");
  }
}
