import BlogsClient from "@/components/blogs/BlogsClient";
import HeroSection from "@/components/blogs/Header";
export const metadata = {
  title: "Blogs - Insights from Globex",
  description: "Read the latest blogs and insights from Globex. Stay updated with industry trends, manufacturing tips, and expert advice.",
  keywords: "blogs, insights, Globex, industry trends, manufacturing, expert advice",
  openGraph: {
    title: "Blogs - Insights from Globex",
    description: "Read the latest blogs and insights from Globex on industry trends and manufacturing.",
    url: "/blogs",
    siteName: "Globex",
    images: [
      {
        url: "/assests/home/hero.jpg", // Assuming a default image, adjust if needed
        width: 1200,
        height: 630,
        alt: "Blogs Hero Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blogs - Insights from Globex",
    description: "Read the latest blogs and insights from Globex on industry trends and manufacturing.",
    images: ["/assests/home/hero.jpg"],
  },
};


export default function BlogsPage() {
  return (
    <>
      <HeroSection />
      <BlogsClient />
    </>
  );
}
