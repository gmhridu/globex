"use client";

import { ArticleGrid } from "@/components/blogs/article-grid/article-grid";
import { CategoryFilter } from "@/components/blogs/category-filter/category-filter";
import { Hero } from "@/components/blogs/hero/hero";
import { CATEGORIES, INITIAL_VISIBLE, posts } from "@/constant/blogs";
import { useState } from "react";
import { NewsLetter } from "./newsletter/newsletter";

export function BlogsView() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visible, setVisible] = useState(INITIAL_VISIBLE);

  const filtered = posts
    .filter((p) => !p.featured)
    .filter((p) => activeCategory === "All" || p.category === activeCategory);

  return (
    <>
      <Hero />
      <div id="blog-grid">
        <CategoryFilter
          categories={CATEGORIES}
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
      />
      <NewsLetter />
    </>
  );
}
