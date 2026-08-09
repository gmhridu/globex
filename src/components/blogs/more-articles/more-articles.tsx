"use client";

import { categoryColor } from "@/constant/blogs";
import { sans, serif } from "@/lib/utils";

type RelatedPost = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  img: string;
};

type MoreArticlesProps = {
  category: string;
  related: RelatedPost[];
  openPost: (slug: string) => void;
};

export function MoreArticles({ category, related, openPost }: MoreArticlesProps) {
  if (related.length === 0) return null;

  return (
    <section className="border-t border-[#2a2f3d] py-20 bg-[#151820]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-10">
          <span className="w-6 h-px bg-[#e8a020]" />
          <p
            className="text-[0.65rem] uppercase tracking-widest text-[#e8a020]"
            style={sans(500)}
          >
            More in {category}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#2a2f3d]">
          {related.map((r) => (
            <button
              key={r.slug}
              onClick={() => openPost(r.slug)}
              className="bg-[#151820] hover:bg-[#1a1f2a] transition-colors text-left group overflow-hidden"
            >
              {/* Image */}
              <div
                className="relative overflow-hidden bg-[#0d0f14]"
                style={{ aspectRatio: "16/9" }}
              >
                <img
                  src={r.img}
                  alt={r.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 40%, rgba(21,24,32,0.85) 100%)",
                  }}
                />
                <div className="absolute bottom-4 left-4">
                  <span
                    className="inline-block px-2.5 py-1 text-[0.55rem] uppercase tracking-widest"
                    style={{
                      ...sans(600),
                      background:
                        (categoryColor[r.category] ?? "#e8a020") + "20",
                      color: categoryColor[r.category] ?? "#e8a020",
                    }}
                  >
                    {r.category}
                  </span>
                </div>
              </div>
              {/* Text */}
              <div className="p-8">
                <h3
                  className="text-xl uppercase leading-tight mb-3 group-hover:text-[#e8a020] transition-colors"
                  style={serif(700)}
                >
                  {r.title}
                </h3>
                <p
                  className="text-sm text-[#7a7f8e] leading-relaxed mb-4 line-clamp-2"
                  style={sans()}
                >
                  {r.excerpt}
                </p>
                <p
                  className="text-[0.65rem] uppercase tracking-widest text-[#e8a020]"
                  style={sans(600)}
                >
                  Read More →
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
