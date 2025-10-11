import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    // Use Better Auth's built-in sign-out method
    // This handles session deletion and cookie clearing automatically
    await auth.api.signOut({
      headers: await headers(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Signout error:", error);
    return NextResponse.json({ error: "Failed to sign out" }, { status: 500 });
  }
}
