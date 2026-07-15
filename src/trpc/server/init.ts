import superjson from "superjson";

import { db } from "@/db/db";
import { cache } from "react";
import { initTRPC, TRPCError } from "@trpc/server";
import { getSession } from "@/lib/auth";

export const createTRPCContext = cache(async () => {
  const session = await getSession();
  return { db, session };
});

type Context = {
  db: typeof db;
  session: Awaited<ReturnType<typeof getSession>>;
};

const t = initTRPC.context<Context>().create({
  transformer: superjson,
});

export const createTRPCRouter = t.router;
export const createCallerFactory = t.createCallerFactory;
export const baseProcedure = t.procedure;
export const protectedProcedure = t.procedure.use(
  t.middleware(async ({ ctx, next }) => {
    if (!ctx.session?.user) {
      throw new TRPCError({
        code: "UNAUTHORIZED",
        message: "You are not authorized!",
      });
    }

    return next({
      ctx: {
        ...ctx,
        user: ctx.session.user
      }
    })
  })
);
