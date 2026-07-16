import { createTRPCContext } from "./init";
import { appRouter } from "./routers/_app";

export async function serverClient() {
  const ctx = await createTRPCContext();
  return appRouter.createCaller(ctx);
}
