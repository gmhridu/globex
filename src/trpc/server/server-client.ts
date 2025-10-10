import { createTRPCContext } from "./init";
import { appRouter } from "./routers/_app";

export function serverClient() {
  const ctx = createTRPCContext();
  return appRouter.createCaller(ctx);
}
