"use client";

import { categoryColor } from "@/constant/blogs";
import { sans, serif } from "@/lib/utils";
import Link from "next/link";
import { Pencil, Trash2 } from "lucide-react";

type ArticleGridPost = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  img: string;
  id?: string;
};

interface ArticleGridProps {
  filtered: ArticleGridPost[];
  visible: number;
  onLoadMore: () => void;
  isAdmin?: boolean;
  onEdit?: (post: ArticleGridPost) => void;
  onDelete?: (post: ArticleGridPost) => void;
  onCreate?: () => void;
}

function Tag({ cat }: { cat: string }) {
  return (
    <span
      className="inline-block px-2.5 py-1 text-[0.55rem] uppercase tracking-widest font-semibold"
      style={{
        ...sans(600),
        background: (categoryColor[cat] ?? "#e8a020") + "20",
        color: categoryColor[cat] ?? "#e8a020",
      }}
    >
      {cat}
    </span>
  );
}

export function ArticleGrid({
  filtered,
  visible,
  onLoadMore,
  isAdmin = false,
  onEdit,
  onDelete,
  onCreate,
}: ArticleGridProps) {
  return (
    <section className="border-b border-border">
      <div className="max-w-7xl mx-auto px-6">
        {isAdmin && (
          <div className="flex justify-between items-center py-8">
            <h2
              className="text-3xl uppercase text-[#f0ede8]"
              style={serif(700)}
            >
              Blog Management
            </h2>
            {onCreate && (
              <button
                onClick={onCreate}
                className="px-6 py-3 bg-[#e8a020] text-[#0d0f14] text-[0.7rem] uppercase tracking-widest hover:bg-[#f0b030] transition-colors"
                style={sans(600)}
              >
                + New Blog
              </button>
            )}
          </div>
        )}

        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <p
              className="text-4xl uppercase text-border mb-4"
              style={serif()}
            >
              No Articles Yet
            </p>
            <p className="text-sm text-[#3a3f4d]" style={sans()}>
              {isAdmin ? "Create your first blog post." : "More coming soon in this category."}
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
              {filtered.slice(0, visible).map((post, i) => {
                const cardContent = (
                  <>
                    {/* Image */}
                    <div
                      className="relative overflow-hidden bg-card"
                      style={{ aspectRatio: "16/9" }}
                    >
                      <img
                        src={post.img}
                        alt={post.title}
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-transform duration-700"
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(to bottom, transparent 40%, rgba(13,15,20,0.85) 100%)",
                        }}
                      />
                      <div className="absolute bottom-4 left-4">
                        <Tag cat={post.category} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-7">
                      <h2
                        className="text-xl uppercase leading-tight mb-3 group-hover:text-[#e8a020] transition-colors"
                        style={serif(700)}
                      >
                        {post.title}
                      </h2>
                      <p
                        className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-2"
                        style={sans()}
                      >
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div
                            className="w-6 h-6 rounded-full bg-[#e8a020]/20 flex items-center justify-center text-[#e8a020] text-[0.55rem] font-bold"
                            style={sans(700)}
                          >
                            G
                          </div>
                          <div>
                            <p
                              className="text-[0.6rem] text-secondary-foreground leading-none"
                              style={sans(500)}
                            >
                              {post.date}
                            </p>
                            <p
                              className="text-[0.55rem] text-[#3a3f4d] mt-0.5"
                              style={sans()}
                            >
                              {post.readTime}
                            </p>
                          </div>
                        </div>
                        <span
                          className="text-[0.65rem] uppercase tracking-widest text-[#e8a020] border-b border-[#e8a020]/30 pb-0.5 group-hover:border-[#e8a020] transition-colors"
                          style={sans(600)}
                        >
                          Read More →
                        </span>
                      </div>
                    </div>
                  </>
                );

                if (isAdmin) {
                  return (
                    <div
                      key={post.id ?? post.slug}
                      className="bg-[#0d0f14] group cursor-pointer hover:bg-card transition-colors duration-300 relative"
                    >
                      {cardContent}
                      {/* Admin overlay actions */}
                      <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                        {onEdit && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onEdit(post);
                            }}
                            className="p-2 bg-[#0d0f14]/90 border border-border rounded-lg hover:border-[#e8a020] transition-colors"
                            title="Edit"
                          >
                            <Pencil className="w-3.5 h-3.5 text-[#e8a020]" />
                          </button>
                        )}
                        {onDelete && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onDelete(post);
                            }}
                            className="p-2 bg-[#0d0f14]/90 border border-border rounded-lg hover:border-red-500 transition-colors"
                            title="Delete"
                          >
                            <Trash2 className="w-3.5 h-3.5 text-red-400" />
                          </button>
                        )}
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={post.slug}
                    href={`/blogs/${post.slug}`}
                    className="bg-[#0d0f14] group cursor-pointer hover:bg-card transition-colors duration-300"
                  >
                    {cardContent}
                  </Link>
                );
              })}
            </div>

            {/* Load more */}
            {visible < filtered.length && (
              <div className="flex justify-center mt-14">
                <button
                  onClick={onLoadMore}
                  className="px-12 py-4 border border-border text-muted-foreground text-[0.7rem] uppercase tracking-widest hover:border-[#e8a020] hover:text-[#e8a020] transition-colors mb-5"
                  style={sans(500)}
                >
                  Load More Articles
                </button>
              </div>
            )}

            {visible >= filtered.length && filtered.length > 0 && (
              <p
                className="text-center text-[0.6rem] text-border uppercase tracking-widest mt-14 mb-5"
                style={sans()}
              >
                You've reached the end
              </p>
            )}
          </>
        )}
      </div>
    </section>
  );
}