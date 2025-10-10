"use server";

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { db } from "@/db/db";
import { admin } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function signInAdminAction(identifier: string, password: string) {
  try {

    const result = await auth.api.signInEmail({
      body: {
        email: identifier,
        password: password,
      },
      headers: await headers(),
    });


    if (result.user) {
      // Create session manually using the database adapter
      const { db } = await import("@/db/db");
      const { session, admin } = await import("@/db/schema");
      const { eq } = await import("drizzle-orm");

      // Find the user in admin table
      const user = await db
        .select()
        .from(admin)
        .where(eq(admin.email, identifier))
        .limit(1);

      if (user.length > 0) {
        // Create session record manually
        const sessionId = crypto.randomUUID();
        const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

        await db.insert(session).values({
          id: sessionId,
          userId: user[0].id,
          token: crypto.randomUUID(),
          expiresAt: expiresAt,
          ipAddress: null,
          userAgent: null,
          createdAt: new Date(),
          updatedAt: new Date(),
        });


        // Set session cookie using Next.js cookies API
        const { cookies } = await import("next/headers");
        const cookieStore = await cookies();
        cookieStore.set("better-auth.session_token", sessionId, {
          httpOnly: true,
          secure: false, // false for development
          sameSite: "lax",
          path: "/",
          maxAge: 7 * 24 * 60 * 60, // 7 days
        });
      }

      // Redirect to dashboard on successful login
      redirect("/admin/dashboard");
    }

    return result;
  } catch (error: any) {
    // Don't treat NEXT_REDIRECT as an error - it's expected behavior
    if (error.message?.includes("NEXT_REDIRECT") || error.digest?.includes("NEXT_REDIRECT")) {
      throw error; // Re-throw redirect errors as they're expected
    }

    console.error("Login error:", error);
    throw new Error(error.message || "Login failed");
  }
}
