import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db/db";
import { blogs } from "@/db/schema";
import { eq } from "drizzle-orm";

// GET /api/blogs/[id] - Get a single blog by ID (public)
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const awaitedParams = await params;
    const blogId = awaitedParams.id;

    if (!blogId) {
      return NextResponse.json({ error: "Blog ID required" }, { status: 400 });
    }

    const blogData = await db
      .select()
      .from(blogs)
      .where(eq(blogs.id, blogId))
      .limit(1);

    if (blogData.length === 0) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    // Transform the blog data to match the expected format
    const blog = blogData[0];
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
    console.error("GET blog by ID error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
