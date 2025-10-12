import { baseProcedure, protectedProcedure, createTRPCRouter } from "../init";
import { contactSubmission } from "@/db/schema";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { eq, desc, sql } from "drizzle-orm";

export const createContactSubmissionSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  company: z.string().min(1, "Company is required"),
  email: z.email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  description: z.string().min(1, "Description is required"),
  message: z.string().min(1, "Message is required"),
});

export const updateContactSubmissionSchema = z.object({
  id: z.string().min(1, "ID is required"),
  status: z.enum(["new", "in_progress", "completed", "archived"]).optional(),
  isRead: z.boolean().optional(),
});

export const contactRouter = createTRPCRouter({
  // Public procedure for submitting contact forms
  submitContact: baseProcedure
    .input(createContactSubmissionSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        const newSubmission = await ctx.db
          .insert(contactSubmission)
          .values({
            id: crypto.randomUUID(),
            firstName: input.firstName,
            lastName: input.lastName,
            company: input.company,
            email: input.email,
            phone: input.phone,
            description: input.description,
            message: input.message,
            status: "new",
            isRead: false,
            submittedAt: new Date(),
            updatedAt: new Date(),
          })
          .returning({
            id: contactSubmission.id,
            firstName: contactSubmission.firstName,
            lastName: contactSubmission.lastName,
            company: contactSubmission.company,
            email: contactSubmission.email,
            phone: contactSubmission.phone,
            description: contactSubmission.description,
            message: contactSubmission.message,
            status: contactSubmission.status,
            isRead: contactSubmission.isRead,
            submittedAt: contactSubmission.submittedAt,
            updatedAt: contactSubmission.updatedAt,
          });

        return {
          success: true,
          submission: newSubmission[0],
        };
      } catch (error) {
        if (error instanceof TRPCError) {
          throw error;
        }

        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to submit contact form",
        });
      }
    }),

  // Protected procedures for admin dashboard
  getAllSubmissions: protectedProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(100).default(50),
        offset: z.number().min(0).default(0),
        status: z.enum(["new", "in_progress", "completed", "archived"]).optional(),
      })
    )
    .query(async ({ ctx, input }) => {
      try {
        let whereClause = undefined;

        if (input.status) {
          whereClause = eq(contactSubmission.status, input.status);
        }

        const submissions = await ctx.db
          .select()
          .from(contactSubmission)
          .where(whereClause)
          .orderBy(desc(contactSubmission.submittedAt))
          .limit(input.limit)
          .offset(input.offset);

        const totalCount = await ctx.db
          .select({ count: sql<number>`count(*)` })
          .from(contactSubmission)
          .where(whereClause);

        return {
          submissions,
          totalCount: totalCount[0]?.count || 0,
          hasMore: (input.offset + input.limit) < (totalCount[0]?.count || 0),
        };
      } catch {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to fetch contact submissions",
        });
      }
    }),

  getSubmissionById: protectedProcedure
    .input(z.object({ id: z.string().min(1, "ID is required") }))
    .query(async ({ ctx, input }) => {
      try {
        const submission = await ctx.db
          .select()
          .from(contactSubmission)
          .where(eq(contactSubmission.id, input.id))
          .limit(1);

        if (!submission || submission.length === 0) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "Contact submission not found",
          });
        }

        // Mark as read when accessed
        await ctx.db
          .update(contactSubmission)
          .set({
            isRead: true,
            updatedAt: new Date(),
          })
          .where(eq(contactSubmission.id, input.id));

        return submission[0];
      } catch (error) {
        if (error instanceof TRPCError) {
          throw error;
        }

        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to fetch contact submission",
        });
      }
    }),

  updateSubmission: protectedProcedure
    .input(updateContactSubmissionSchema)
    .mutation(async ({ ctx, input }) => {
      try {
        const updateData: {
          updatedAt: Date;
          status?: "new" | "in_progress" | "completed" | "archived";
          isRead?: boolean;
        } = {
          updatedAt: new Date(),
        };

        if (input.status !== undefined) {
          updateData.status = input.status;
        }

        if (input.isRead !== undefined) {
          updateData.isRead = input.isRead;
        }

        const updatedSubmission = await ctx.db
          .update(contactSubmission)
          .set(updateData)
          .where(eq(contactSubmission.id, input.id))
          .returning({
            id: contactSubmission.id,
            firstName: contactSubmission.firstName,
            lastName: contactSubmission.lastName,
            company: contactSubmission.company,
            email: contactSubmission.email,
            phone: contactSubmission.phone,
            description: contactSubmission.description,
            message: contactSubmission.message,
            status: contactSubmission.status,
            isRead: contactSubmission.isRead,
            submittedAt: contactSubmission.submittedAt,
            updatedAt: contactSubmission.updatedAt,
          });

        if (!updatedSubmission || updatedSubmission.length === 0) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "Contact submission not found",
          });
        }

        return {
          success: true,
          submission: updatedSubmission[0],
        };
      } catch (error) {
        if (error instanceof TRPCError) {
          throw error;
        }

        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to update contact submission",
        });
      }
    }),

  deleteSubmission: protectedProcedure
    .input(z.object({ id: z.string().min(1, "ID is required") }))
    .mutation(async ({ ctx, input }) => {
      try {
        const deletedSubmission = await ctx.db
          .delete(contactSubmission)
          .where(eq(contactSubmission.id, input.id))
          .returning({
            id: contactSubmission.id,
          });

        if (!deletedSubmission || deletedSubmission.length === 0) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "Contact submission not found",
          });
        }

        return {
          success: true,
          message: "Contact submission deleted successfully",
        };
      } catch (error) {
        if (error instanceof TRPCError) {
          throw error;
        }

        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to delete contact submission",
        });
      }
    }),

  getUnreadCount: protectedProcedure.query(async ({ ctx }) => {
    try {
      const unreadCount = await ctx.db
        .select({ count: contactSubmission.id })
        .from(contactSubmission)
        .where(eq(contactSubmission.isRead, false));

      return {
        count: unreadCount[0]?.count || 0,
      };
    } catch {
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Failed to fetch unread count",
      });
    }
  }),
});
