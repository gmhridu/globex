import * as schema from "@/db/schema";
import { db } from "@/db/db";
import { headers } from "next/headers";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { admin } from "better-auth/plugins";
import { adminClient } from "better-auth/client/plugins";
import type { Session } from "better-auth";
import type { User } from "better-auth";

type AuthSession = {
  session: Session;
  user: User;
} | null;

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: {
      ...schema,
      user: schema.admin,
    },
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
    password: {
      hash: async (password: string) => {
        const bcrypt = await import("bcrypt");
        return await bcrypt.hash(password, 12);
      },
      verify: async ({
        password,
        hash,
      }: {
        password: string;
        hash: string;
      }) => {
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
      name: "__Secure.better-auth.session_token",
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Secure in production only
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    },
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24, // 24 hours
  },
  plugins: [nextCookies(), admin(), adminClient()],
});

export const getSession = async (): Promise<AuthSession> => {
  try {
    // Use Better Auth's built-in session retrieval
    // This handles cookie parsing, database lookup, and expiration checks automatically
    const authSession = await auth.api.getSession({
      headers: await headers(),
    });

    return authSession;
  } catch (error) {
    console.error("getSession error:", error);
    return null;
  }
};
