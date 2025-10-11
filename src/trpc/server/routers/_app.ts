import { createTRPCRouter } from "../init";
import { adminRouter } from "./admin";
import { contactRouter } from "./contact";

export const appRouter = createTRPCRouter({
  admin: adminRouter,
  contact: contactRouter,
});

export type AppRouter = typeof appRouter;
