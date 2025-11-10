import { notFound } from "next/navigation";
import BlogsDetailes from "@/components/blogs/BlogsDetailes";
export const metadata = {
  title: "Blog Details - Insights from Globex",
  description: "Read detailed blog posts and insights from Globex. Stay updated with industry trends, manufacturing tips, and expert advice.",
  keywords: "blog details, insights, Globex, industry trends, manufacturing, expert advice",
  openGraph: {
    title: "Blog Details - Insights from Globex",
    description: "Read detailed blog posts and insights from Globex on industry trends and manufacturing.",
    url: "/blogs/[id]",
    siteName: "Globex",
    images: [
      {
        url: "/assests/home/hero.jpg", // Assuming a default image, adjust if needed
        width: 1200,
        height: 630,
        alt: "Blog Details Image",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog Details - Insights from Globex",
    description: "Read detailed blog posts and insights from Globex on industry trends and manufacturing.",
    images: ["/assests/home/hero.jpg"],
  },
};


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
