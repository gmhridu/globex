"use client";

import { ArticleBody } from "@/components/blogs/article-body/article-body";
import { ArticleHero } from "@/components/blogs/article-hero/article-hero";
import { MoreArticles } from "@/components/blogs/more-articles/more-articles";
import { articleContent, categoryColor, posts } from "@/constant/blogs";
import { useRouter } from "next/navigation";
import { useState } from "react";

type BlogDetailsProps = {
  initialSlug: string;
};

export function BlogDetails({ initialSlug }: BlogDetailsProps) {
  const router = useRouter();
  const [selectedSlug, setSelectedSlug] = useState(initialSlug);

  const selectedPost = posts.find((p) => p.slug === selectedSlug)!;
  const selectedContent = articleContent[selectedSlug] ?? null;

  const accentColor = categoryColor[selectedPost.category] ?? "#e8a020";
  const sameCategory = posts.filter(
    (p) => p.slug !== selectedPost.slug && p.category === selectedPost.category,
  );
  const otherCategory = posts.filter(
    (p) => p.slug !== selectedPost.slug && p.category !== selectedPost.category,
  );
  const related = [...sameCategory, ...otherCategory].slice(0, 2);

  const openPost = (slug: string) => {
    setSelectedSlug(slug);
    window.scrollTo(0, 0);
  };

  const goBack = () => router.push("/blogs");

  return (
    <>
      <ArticleHero post={selectedPost} accentColor={accentColor} />
      <ArticleBody
        content={selectedContent}
        accentColor={accentColor}
        related={related}
        openPost={openPost}
        onBack={goBack}
      />
      <MoreArticles
        category={selectedPost.category}
        related={related}
        openPost={openPost}
      />
    </>
  );
}
