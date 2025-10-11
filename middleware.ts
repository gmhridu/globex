import { auth } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only process admin routes
  if (!pathname.startsWith('/admin/')) {
    return NextResponse.next();
  }

  // Allow access to login page
  if (pathname === '/admin/login') {
    return NextResponse.next();
  }

  // For all other admin routes, check authentication
  try {
    const session = await auth.api.getSession({
      headers: request.headers,
    });

    if (!session || !session?.user) {
      // Redirect to login page if no user session
      const loginUrl = new URL('/admin/login', request.url);
      return NextResponse.redirect(loginUrl);
    }

    // User is authenticated, allow access
    return NextResponse.next();
  } catch (error) {
    console.error('Middleware session check error:', error);
    // On error, redirect to login
    const loginUrl = new URL('/admin/login', request.url);
    return NextResponse.redirect(loginUrl);
  }
}

export const config = {
  runtime: "nodejs",
  matcher: [
    /*
     * Match all admin routes
     */
    '/admin/:path*',
  ],
};
