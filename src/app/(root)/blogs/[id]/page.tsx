import { notFound } from "next/navigation";
import { BlogDetails } from "@/components/blogs/blog-details/blog-details";
import { posts } from "@/constant/blogs";
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

  const post = posts.find((p) => p.slug === blogId);
  if (!post) return notFound();

  return <BlogDetails initialSlug={blogId} />;
}
