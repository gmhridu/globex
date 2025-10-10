import { db } from "@/db/db";
import { headers } from "next/headers";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import * as schema from "@/db/schema";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: {
      ...schema,
      user: schema.admin,
    },
  }),
  pages: {
    signIn: "/admin/login",
  },
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
    password: {
      hash: async (password: string) => {
        const bcrypt = await import("bcrypt");
        return await bcrypt.hash(password, 12);
      },
      verify: async ({ password, hash }: { password: string; hash: string }) => {
        const bcrypt = await import("bcrypt");
        return await bcrypt.compare(password, hash);
      },
    },
  },
  secret: process.env.BETTER_AUTH_SECRET!,
  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
  session: {
    cookieCache: {
      enabled: true,
      maxAge: 60 * 60 * 24 * 7, // 7 days
    },
    cookie: {
      name: "better-auth.session_token",
      httpOnly: true,
      secure: false, // Set to false for development (HTTP)
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    },
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24, // 24 hours
  },
});

export const getSession = async () => {
  try {
    // First try BetterAuth's built-in session retrieval
    const authSession = await auth.api.getSession({
      headers: await headers(),
    });

    if (authSession?.user) {
      return authSession;
    }

    const { db } = await import("@/db/db");
    const { session: sessionTable, admin } = await import("@/db/schema");
    const { eq } = await import("drizzle-orm");

    // Get cookies using Next.js cookies() function
    const { cookies } = await import("next/headers");
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get("better-auth.session_token")?.value;

    if (sessionToken) {

      // Look up session in database
      const dbSession = await db
        .select({
          session: sessionTable,
          user: admin,
        })
        .from(sessionTable)
        .where(eq(sessionTable.id, sessionToken))
        .leftJoin(admin, eq(sessionTable.userId, admin.id))
        .limit(1);

      if (dbSession.length > 0) {
        const sessionData = dbSession[0];

        if (sessionData.user) {
          return {
            user: {
              id: sessionData.user.id,
              email: sessionData.user.email,
              name: sessionData.user.name || "",
              image: null,
              emailVerified: true,
              createdAt: sessionData.user.createdAt,
              updatedAt: sessionData.user.updatedAt,
            },
            session: {
              id: sessionData.session.id,
              userId: sessionData.session.userId,
              expiresAt: sessionData.session.expiresAt,
              createdAt: sessionData.session.createdAt,
              updatedAt: sessionData.session.updatedAt,
            },
          };
        }
      } else {
        console.log("Session not found in database");
      }
    } else {
      console.log("No session token found in cookies");
    }

    return null;
  } catch (error) {
    console.error("getSession error:", error);
    return null;
  }
};
