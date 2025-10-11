"use server";

import { auth } from "@/lib/auth";
import { db } from "@/db/db";
import { admin } from "@/db/schema";
import { account } from "@/db/schema";
import { eq } from "drizzle-orm";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";

export async function signInAdminAction(identifier: string, password: string) {
  // Check if identifier is an email or phone number
  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(identifier);

  // Find the admin user by email or phone with their account info
  const user = await db
    .select({
      admin: admin,
      account: account
    })
    .from(admin)
    .leftJoin(account, eq(admin.id, account.userId))
    .where(
      isEmail
        ? eq(admin.email, identifier)
        : eq(admin.phone, identifier)
    )
    .limit(1);

  if (!user || user.length === 0) {
    throw new Error("Invalid credentials");
  }

  const { admin: adminUser, account: userAccount } = user[0];

  // Check if user is active
  if (!adminUser.isActive) {
    throw new Error("Account is disabled. Please contact support.");
  }

  // Verify password using bcrypt
  if (!userAccount?.password) {
    throw new Error("Invalid credentials");
  }

  const isPasswordValid = await bcrypt.compare(password, userAccount.password);

  if (!isPasswordValid) {
    throw new Error("Invalid credentials");
  }

  // Create session using Better Auth
  const result = await auth.api.signInEmail({
    body: {
      email: adminUser.email,
      password: password,
    },
    headers: await headers(),
  });

  if (result.user) {
    // Update login timestamp
    await db
      .update(admin)
      .set({ loginAt: new Date() })
      .where(eq(admin.id, adminUser.id));

    // Better Auth handles session creation and cookie setting automatically
    // No need for manual session or cookie management
    redirect("/admin/dashboard");
  }

  return result;
}
