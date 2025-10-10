import { baseProcedure, createTRPCRouter, protectedProcedure } from "../init";
import { admin } from "@/db/schema";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { eq, or } from "drizzle-orm";
import bcrypt from "bcrypt";

export const createAdminSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Invalid email address"),
  phone: z.string().optional(),
  password: z.string().min(6, "Password must be at least 6 characters"),
  role: z.enum(["admin", "super-admin"]).default("admin"),
});

export const signinAdminSchema = z.object({
  identifier: z.string().min(1, "Email or phone is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const adminRouter = createTRPCRouter({
  createAdmin: baseProcedure
    .input(createAdminSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        // Check if admin with this email already exists
        const existingAdmin = await ctx.db
          .select()
          .from(admin)
          .where(eq(admin.email, input.email))
          .limit(1);
        // const existingAdmin = await db.select().from(admin).where(eq(admin.email, input.email)).limit(1);

        if (existingAdmin) {
          throw new TRPCError({
            code: "CONFLICT",
            message: "Admin with this email already exists",
          });
        }

        // Create the admin
        const newAdmin = await ctx.db
          .insert(admin)
          .values({
            name: input.name,
            email: input.email,
            phone: input.phone,
            role: input.role,
            isActive: true,
            createdAt: new Date(),
            updatedAt: new Date(),
          })
          .returning({
            id: admin.id,
            name: admin.name,
            email: admin.email,
            phone: admin.phone,
            role: admin.role,
            isActive: admin.isActive,
            createdAt: admin.createdAt,
            updatedAt: admin.updatedAt,
          });

        return {
          success: true,
          admin: newAdmin[0],
        };
      } catch (error) {
        if (error instanceof TRPCError) {
          throw error;
        }

        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to create admin",
        });
      }
    }),

  signinAdmin: baseProcedure
    .input(signinAdminSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        // Find admin by email or phone
        const adminUser = await ctx.db
          .select()
          .from(admin)
          .where(
            or(
              eq(admin.email, input.identifier),
              eq(admin.phone, input.identifier)
            )
          )
          .limit(1);

        if (!adminUser || adminUser.length === 0) {
          throw new TRPCError({
            code: "UNAUTHORIZED",
            message: "Invalid email or password",
          });
        }

        const foundAdmin = adminUser[0];

        // Check if admin is active
        if (!foundAdmin.isActive) {
          throw new TRPCError({
            code: "UNAUTHORIZED",
            message: "Account is deactivated",
          });
        }

        // Update login timestamp
        await ctx.db
          .update(admin)
          .set({
            loginAt: new Date(),
            updatedAt: new Date(),
          })
          .where(eq(admin.id, foundAdmin.id));

        // Return admin data (excluding password)
        return {
          success: true,
          admin: {
            id: foundAdmin.id,
            name: foundAdmin.name,
            email: foundAdmin.email,
            phone: foundAdmin.phone,
            role: foundAdmin.role,
            isActive: foundAdmin.isActive,
            loginAt: new Date(),
            createdAt: foundAdmin.createdAt,
            updatedAt: new Date(),
          },
        };
      } catch (error) {
        if (error instanceof TRPCError) {
          throw error;
        }

        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to get admin data",
        });
      }
    }),
});
