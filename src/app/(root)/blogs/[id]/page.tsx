import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogDetails } from "@/components/blogs/blog-details/blog-details";
import { posts } from "@/constant/blogs";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://weareglobex.com";

interface BlogDetailsPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: BlogDetailsPageProps): Promise<Metadata> {
  const awaitedParams = await params;
  const post = posts.find((p) => p.slug === awaitedParams.id);

  if (!post) {
    return {
      title: "Blog Not Found",
      robots: { index: false, follow: false },
    };
  }

  const publishedTime = new Date(post.date).toISOString();

  return {
    title: post.title,
    description: post.excerpt,
    keywords: [
      post.category,
      "manufacturing",
      "export strategy",
      "market intelligence",
      "trade and tariffs",
      "European distribution",
      "Middle East market entry",
      "industry insights",
    ],
    authors: [{ name: post.author, url: SITE_URL }],
    category: post.category,
    alternates: {
      canonical: `/blogs/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${SITE_URL}/blogs/${post.slug}`,
      siteName: "We Are Globex",
      locale: "en_US",
      type: "article",
      publishedTime,
      authors: [post.author],
      section: post.category,
      images: [
        {
          url: post.img,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.img],
      creator: "@weareglobex",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export default async function BlogDetailsPage({
  params,
}: BlogDetailsPageProps) {
  const awaitedParams = await params;
  const blogId = awaitedParams.id;

  const post = posts.find((p) => p.slug === blogId);
  if (!post) return notFound();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE_URL}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blogs",
        item: `${SITE_URL}/blogs`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `${SITE_URL}/blogs/${post.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <BlogDetails initialSlug={blogId} />
    </>
  );
}