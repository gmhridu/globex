import { auth } from "@/lib/auth";
import { toNextJsHandler } from "better-auth/next-js";
export const { POST, GET } = toNextJsHandler(auth);

// Logout endpoint for admin dashboard
export async function DELETE(request: Request) {
  try {
    // Use Better Auth's signOut method
    const signOutResponse = await auth.api.signOut({
      headers: request.headers,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Logout error:', error);
    return new Response(JSON.stringify({ error: 'Logout failed' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
