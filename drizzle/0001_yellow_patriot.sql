CREATE TABLE "market_contact_submission" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"country" text NOT NULL,
	"sector" text NOT NULL,
	"message" text DEFAULT '' NOT NULL,
	"status" text DEFAULT 'new' NOT NULL,
	"is_read" boolean DEFAULT false NOT NULL,
	"submitted_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
