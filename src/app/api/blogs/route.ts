import { NextRequest, NextResponse } from "next/server";
import z from "zod";
import { db } from "@/db/db";
import { blogs, admin } from "@/db/schema";
import { getSession } from "@/lib/auth";
import { eq } from "drizzle-orm";
import { randomUUID } from "crypto";



const updateBlogSchema = z.object({
  title: z.string().min(1).optional(),
  excerpt: z.string().min(10).optional(),
  body: z.string().min(10).optional(),
  image: z.string().optional(),
  category: z.string().min(1).optional(),
  author: z.string().min(1).optional(),
});

const createBlogSchema = z.object({
  title: z.string().min(1),
  excerpt: z.string().min(10),
  author: z.string().default("Globex Team"),
  body: z.string().min(10),
  image: z.string().optional(),
  category: z.string().min(1),
});

// Helper function to check if user is admin or super-admin
async function requireAdmin(request: NextRequest) {
  const session = await getSession();
  if (!session || !session.user) {
    return { error: new NextResponse("Unauthorized", { status: 401 }) };
  }

  // Get user role from database
  const user = await db.select().from(admin).where(eq(admin.id, session.user.id)).limit(1);
  if (user.length === 0) {
    return { error: new NextResponse("User not found", { status: 404 }) };
  }

  const userRole = user[0].role;
  if (userRole !== "admin" && userRole !== "super-admin") {
    return { error: new NextResponse("Forbidden: Admin access required", { status: 403 }) };
  }

  return { session };
}

// GET /api/blogs - Get all blogs (public)
export async function GET(request: NextRequest) {
  try {
    const allBlogs = await db.select().from(blogs).orderBy(blogs.date);

    // Transform the blog data to match the expected format
    const transformedBlogs = allBlogs.map(blog => ({
      id: blog.id,
      category: blog.category,
      title: blog.title,
      excerpt: blog.excerpt,
      image: blog.image,
      author: blog.author,
      date: blog.date.toISOString().split('T')[0], // Format date as YYYY-MM-DD
      body: blog.body,
    }));

    return NextResponse.json(transformedBlogs);
  } catch (error) {
    console.error("GET blogs error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// POST /api/blogs - Create a new blog (admin/super-admin only)
export async function POST(request: NextRequest) {
  try {
    const authCheck = await requireAdmin(request);
    if (authCheck.error) return authCheck.error;

    const body = await request.json();
    const validatedData = createBlogSchema.parse(body);

    const newBlog = await db.insert(blogs).values({
      id: randomUUID(),
      ...validatedData,
      author: validatedData.author || "Globex Team",
    }).returning();

    return NextResponse.json(newBlog[0], { status: 201 });
  } catch (error) {
    console.error("POST blogs error:", error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Validation error", details: error.issues }, { status: 400 });
    }
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// PUT /api/blogs - Update a blog (admin/super-admin only)
export async function PUT(request: NextRequest) {
  try {
    const authCheck = await requireAdmin(request);
    if (authCheck.error) return authCheck.error;

    const body = await request.json();
    const { id, ...updateData } = body;

    if (!id) {
      return NextResponse.json({ error: "Blog ID required" }, { status: 400 });
    }

    const validatedData = updateBlogSchema.parse(updateData);

    const updatedBlog = await db.update(blogs)
      .set(validatedData)
      .where(eq(blogs.id, id))
      .returning();

    if (updatedBlog.length === 0) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    // Transform the blog data to match the expected format
    const blog = updatedBlog[0];
    const transformedBlog = {
      id: blog.id,
      category: blog.category,
      title: blog.title,
      excerpt: blog.excerpt,
      image: blog.image,
      author: blog.author,
      date: blog.date.toISOString().split('T')[0], // Format date as YYYY-MM-DD
      body: blog.body,
    };

    return NextResponse.json(transformedBlog);
  } catch (error) {
    console.error("PUT blogs error:", error);
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: "Validation error", details: error.issues }, { status: 400 });
    }
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// DELETE /api/blogs - Delete a blog (admin/super-admin only)
export async function DELETE(request: NextRequest) {
  try {
    const authCheck = await requireAdmin(request);
    if (authCheck.error) return authCheck.error;

    const body = await request.json();
    const { id } = body;

    if (!id) {
      return NextResponse.json({ error: "Blog ID required" }, { status: 400 });
    }

    const deletedBlog = await db.delete(blogs)
      .where(eq(blogs.id, id))
      .returning();

    if (deletedBlog.length === 0) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Blog deleted successfully" });
  } catch (error) {
    console.error("DELETE blogs error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
