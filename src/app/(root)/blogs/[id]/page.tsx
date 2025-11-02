import { notFound } from "next/navigation";
import BlogsDetailes from "@/components/blogs/BlogsDetailes";

interface BlogDetailsPageProps {
  params: Promise<{ id: string }>;
}

export default async function BlogDetailsPage({
  params,
}: BlogDetailsPageProps) {
  const awaitedParams = await params;
  const blogId = awaitedParams.id;

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/blogs/${blogId}`, {
      cache: 'no-store' // Ensure we get fresh data
    });

    if (!response.ok) {
      if (response.status === 404) {
        return notFound();
      }
      throw new Error('Failed to fetch blog');
    }

    const blog = await response.json();

    if (!blog) return notFound();

    return <BlogsDetailes blog={blog} />;
  } catch (error) {
    console.error('Error fetching blog:', error);
    return notFound();
  }
}
