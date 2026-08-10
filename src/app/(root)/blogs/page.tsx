import type { Metadata } from "next";
import { BlogsView } from "@/components/blogs/BlogsView";
import { CATEGORIES, posts } from "@/constant/blogs";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://weareglobex.com";

const featured = posts.find((p) => p.featured) ?? posts[0];

const categories = CATEGORIES.filter((c) => c !== "All");

const description =
  "Expert export strategy, market intelligence, trade & tariff analysis, and distribution guidance for manufacturers expanding into Europe and the Middle East. Read the latest insights from We Are Globex.";

export const metadata: Metadata = {
  title: "Blogs & Industry Insights for Manufacturers",
  description,
  keywords: [
    "manufacturing blogs",
    "export strategy",
    "market intelligence",
    "trade and tariffs",
    "European distribution",
    "Middle East market entry",
    "manufacturing insights",
    ...categories.map((c) => c.toLowerCase()),
  ],
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    title: "Blogs & Industry Insights for Manufacturers",
    description,
    url: `${SITE_URL}/blogs`,
    siteName: "We Are Globex",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: featured.img,
        width: 1200,
        height: 630,
        alt: `${featured.title} - We Are Globex`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogs & Industry Insights for Manufacturers",
    description,
    images: [featured.img],
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
  category: "blog",
  classification: "Manufacturing Export Insights",
};

export default function BlogsPage() {
  return <BlogsView />;
}