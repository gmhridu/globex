import { boolean, pgEnum, pgTable, text, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

const roleEnum = pgEnum("role", ["admin", "super-admin"]);

export const admin = pgTable("admin", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  phone: text("phone"),
  emailVerified: boolean("email_verified").default(false).notNull(),
  image: text("image"),
  role: roleEnum("role").default("admin"),
  isActive: boolean("isActive").default(true),
  loginAt: timestamp("login_at", { withTimezone: true }).defaultNow().notNull(),
  logoutAt: timestamp("logout_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => /* @__PURE__ */ new Date())
    .notNull(),
});

export const session = pgTable("session", {
  id: text("id").primaryKey(),
  expiresAt: timestamp("expires_at").notNull(),
  token: text("token").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .$onUpdate(() => /* @__PURE__ */ new Date())
    .notNull(),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  userId: text("user_id")
    .notNull()
    .references(() => admin.id, { onDelete: "cascade" }),
});

export const account = pgTable("account", {
  id: text("id").primaryKey(),
  accountId: text("account_id").notNull(),
  providerId: text("provider_id").notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => admin.id, { onDelete: "cascade" }),
  accessToken: text("access_token"),
  refreshToken: text("refresh_token"),
  idToken: text("id_token"),
  accessTokenExpiresAt: timestamp("access_token_expires_at"),
  refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
  scope: text("scope"),
  password: text("password"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .$onUpdate(() => /* @__PURE__ */ new Date())
    .notNull(),
});

export const verification = pgTable("verification", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => /* @__PURE__ */ new Date())
    .notNull(),
});

export const insertAdminSchema = createInsertSchema(admin);
export const selectAdminSchema = createSelectSchema(admin);
// Session schemas for manual operations (when needed)
export const insertSessionSchema = createInsertSchema(session);
export const selectSessionSchema = createSelectSchema(session);
export const insertAccountSchema = createInsertSchema(account);
export const selectAccountSchema = createSelectSchema(account);
export const insertVerificationSchema = createInsertSchema(verification);
export const selectVerificationSchema = createSelectSchema(verification);

export type InsertAdmin = typeof admin.$inferInsert;
export type SelectAdmin = typeof admin.$inferSelect;
export type InsertSession = typeof session.$inferInsert;
export type SelectSession = typeof session.$inferSelect;
export type InsertAccount = typeof account.$inferInsert;
export type SelectAccount = typeof account.$inferSelect;
export type InsertVerification = typeof verification.$inferInsert;
export type SelectVerification = typeof verification.$inferSelect;

export const contactSubmission = pgTable("contact_submission", {
  id: text("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  company: text("company").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  description: text("description").notNull(),
  message: text("message").notNull(),
  status: text("status").default("new").notNull(), // new, in_progress, completed, archived
  isRead: boolean("is_read").default(false).notNull(),
  submittedAt: timestamp("submitted_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => /* @__PURE__ */ new Date())
    .notNull(),
});

export const insertContactSubmissionSchema = createInsertSchema(contactSubmission);
export const selectContactSubmissionSchema = createSelectSchema(contactSubmission);

export type InsertContactSubmission = typeof contactSubmission.$inferInsert;
export type SelectContactSubmission = typeof contactSubmission.$inferSelect;
