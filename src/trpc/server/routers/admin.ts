import { baseProcedure, protectedProcedure, createTRPCRouter } from "../init";
import { admin, contactSubmission, blogs } from "@/db/schema";
import { TRPCError } from "@trpc/server";
import { z } from "zod";
import { eq, or, desc, sql } from "drizzle-orm";

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
            id: crypto.randomUUID(),
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

  // Contact submission management procedures
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
    .input(z.object({
      id: z.string().min(1, "ID is required"),
      status: z.enum(["new", "in_progress", "completed", "archived"]).optional(),
      isRead: z.boolean().optional(),
    }))
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
        .select({ count: sql<number>`count(*)` })
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

  getStatusCounts: protectedProcedure.query(async ({ ctx }) => {
    try {
      const statusCounts = await ctx.db
        .select({
          status: contactSubmission.status,
          count: sql<number>`count(*)`,
        })
        .from(contactSubmission)
        .groupBy(contactSubmission.status);

      const counts = {
        new: 0,
        in_progress: 0,
        completed: 0,
        archived: 0,
      };

      statusCounts.forEach(({ status, count }) => {
        counts[status as keyof typeof counts] = count;
      });

      return counts;
    } catch {
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Failed to fetch status counts",
      });
    }
  }),

  // Blog management procedures
  getAllBlogs: protectedProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(100).default(50),
        offset: z.number().min(0).default(0),
      })
    )
    .query(async ({ ctx, input }) => {
      try {
        const allBlogs = await ctx.db
          .select()
          .from(blogs)
          .orderBy(desc(blogs.date))
          .limit(input.limit)
          .offset(input.offset);

        const totalCount = await ctx.db
          .select({ count: sql<number>`count(*)` })
          .from(blogs);

        return {
          blogs: allBlogs,
          totalCount: totalCount[0]?.count || 0,
          hasMore: (input.offset + input.limit) < (totalCount[0]?.count || 0),
        };
      } catch {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to fetch blogs",
        });
      }
    }),

  getBlogById: protectedProcedure
    .input(z.object({ id: z.string().min(1, "ID is required") }))
    .query(async ({ ctx, input }) => {
      try {
        const blog = await ctx.db
          .select()
          .from(blogs)
          .where(eq(blogs.id, input.id))
          .limit(1);

        if (!blog || blog.length === 0) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "Blog not found",
          });
        }

        return blog[0];
      } catch (error) {
        if (error instanceof TRPCError) {
          throw error;
        }

        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to fetch blog",
        });
      }
    }),

  createBlog: protectedProcedure
    .input(z.object({
      title: z.string().min(1, "Title is required"),
      excerpt: z.string().min(10, "Excerpt must be at least 10 characters"),
      body: z.string().min(10, "Body must be at least 10 characters"),
      image: z.string().optional(),
      category: z.string().min(1, "Category is required"),
      author: z.string().min(1, "Author is required"),
    }))
    .mutation(async ({ ctx, input }) => {
      try {
        const newBlog = await ctx.db
          .insert(blogs)
          .values({
            id: crypto.randomUUID(),
            ...input,
            date: new Date(),
          })
          .returning({
            id: blogs.id,
            title: blogs.title,
            excerpt: blogs.excerpt,
            body: blogs.body,
            image: blogs.image,
            category: blogs.category,
            author: blogs.author,
            date: blogs.date,
          });

        return {
          success: true,
          blog: newBlog[0],
        };
      } catch (error) {
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to create blog",
        });
      }
    }),

  updateBlog: protectedProcedure
    .input(z.object({
      id: z.string().min(1, "ID is required"),
      title: z.string().min(1).optional(),
      excerpt: z.string().min(10).optional(),
      body: z.string().min(10).optional(),
      image: z.string().optional(),
      category: z.string().min(1).optional(),
      author: z.string().min(1).optional(),
    }))
    .mutation(async ({ ctx, input }) => {
      try {
        const updateData: {
          title?: string;
          excerpt?: string;
          body?: string;
          image?: string;
          category?: string;
          author?: string;
        } = {};

        if (input.title !== undefined) updateData.title = input.title;
        if (input.excerpt !== undefined) updateData.excerpt = input.excerpt;
        if (input.body !== undefined) updateData.body = input.body;
        if (input.image !== undefined) updateData.image = input.image;
        if (input.category !== undefined) updateData.category = input.category;
        if (input.author !== undefined) updateData.author = input.author;

        const updatedBlog = await ctx.db
          .update(blogs)
          .set(updateData)
          .where(eq(blogs.id, input.id))
          .returning({
            id: blogs.id,
            title: blogs.title,
            excerpt: blogs.excerpt,
            body: blogs.body,
            image: blogs.image,
            category: blogs.category,
            author: blogs.author,
            date: blogs.date,
          });

        if (!updatedBlog || updatedBlog.length === 0) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "Blog not found",
          });
        }

        return {
          success: true,
          blog: updatedBlog[0],
        };
      } catch (error) {
        if (error instanceof TRPCError) {
          throw error;
        }

        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to update blog",
        });
      }
    }),

  deleteBlog: protectedProcedure
    .input(z.object({ id: z.string().min(1, "ID is required") }))
    .mutation(async ({ ctx, input }) => {
      try {
        const deletedBlog = await ctx.db
          .delete(blogs)
          .where(eq(blogs.id, input.id))
          .returning({
            id: blogs.id,
          });

        if (!deletedBlog || deletedBlog.length === 0) {
          throw new TRPCError({
            code: "NOT_FOUND",
            message: "Blog not found",
          });
        }

        return {
          success: true,
          message: "Blog deleted successfully",
        };
      } catch (error) {
        if (error instanceof TRPCError) {
          throw error;
        }

        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to delete blog",
        });
      }
    }),

  getBlogStats: protectedProcedure.query(async ({ ctx }) => {
    try {
      const totalBlogs = await ctx.db
        .select({ count: sql<number>`count(*)` })
        .from(blogs);

      const categories = await ctx.db
        .select({
          category: blogs.category,
          count: sql<number>`count(*)`,
        })
        .from(blogs)
        .groupBy(blogs.category);

      return {
        totalBlogs: totalBlogs[0]?.count || 0,
        categories: categories.map(({ category, count }) => ({ category, count })),
      };
    } catch {
      throw new TRPCError({
        code: "INTERNAL_SERVER_ERROR",
        message: "Failed to fetch blog stats",
      });
    }
  }),
});
