ALTER TABLE "session" ADD COLUMN "token" text NOT NULL;
ALTER TABLE "session" ADD CONSTRAINT "session_token_unique" UNIQUE("token");
