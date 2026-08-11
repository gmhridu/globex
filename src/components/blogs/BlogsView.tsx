"use client";

import { ArticleGrid } from "@/components/blogs/article-grid/article-grid";
import { CategoryFilter } from "@/components/blogs/category-filter/category-filter";
import { Hero } from "@/components/blogs/hero/hero";
import { CATEGORIES, INITIAL_VISIBLE, posts as staticPosts } from "@/constant/blogs";
import { useState } from "react";
import { NewsLetter } from "./newsletter/newsletter";

export type BlogPost = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  img: string;
  id?: string;
  author?: string;
  body?: string;
  featured?: boolean;
};

interface BlogsViewProps {
  posts?: BlogPost[];
  categories?: string[];
  isAdmin?: boolean;
  onEdit?: (post: BlogPost) => void;
  onDelete?: (post: BlogPost) => void;
  onCreate?: () => void;
}

export function BlogsView({
  posts: propPosts,
  categories = CATEGORIES,
  isAdmin = false,
  onEdit,
  onDelete,
  onCreate,
}: BlogsViewProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visible, setVisible] = useState(INITIAL_VISIBLE);

  const sourcePosts = propPosts ?? staticPosts;

  const filtered = sourcePosts
    .filter((p) => !p.featured)
    .filter((p) => activeCategory === "All" || p.category === activeCategory);

  return (
    <>
      {!isAdmin && <Hero />}
      <div id="blog-grid">
        <CategoryFilter
          categories={categories}
          activeCategory={activeCategory}
          onSelect={setActiveCategory}
          count={filtered.length}
          countLabel="article"
          countLabelPlural="articles"
        />
      </div>
      <ArticleGrid
        filtered={filtered}
        visible={visible}
        onLoadMore={() => setVisible((v) => v + 3)}
        isAdmin={isAdmin}
        onEdit={onEdit}
        onDelete={onDelete}
        onCreate={onCreate}
      />
      {!isAdmin && <NewsLetter />}
    </>
  );
}