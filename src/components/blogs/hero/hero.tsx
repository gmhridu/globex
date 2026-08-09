"use client";

import {
  categoryColor,
  posts,
} from "@/constant/blogs";
import { sans, serif } from "@/lib/utils";
import Link from "next/link";

export function Hero() {
  const featured = posts.find((p) => p.featured)!;

  const Tag = ({ cat }: { cat: string }) => (
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

  return (
    <section className="relative min-h-[80vh] flex flex-col justify-end pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-[#050709]">
        <img
          src={featured.img}
          alt={featured.title}
          className="w-full h-full object-cover opacity-40"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(5,7,9,0.98) 0%, rgba(5,7,9,0.5) 50%, rgba(5,7,9,0.2) 100%)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 w-full pb-16">
        <div className="flex items-center gap-3 mb-4">
          <span className="w-6 h-px bg-[#e8a020]" />
          <span
            className="text-[0.65rem] uppercase tracking-[0.2em] text-[#e8a020]"
            style={sans(500)}
          >
            Our Insights — Featured
          </span>
        </div>
        <Tag cat={featured.category} />
        <h1
          className="text-[3.5rem] md:text-[5.5rem] leading-[0.92] uppercase mt-4 mb-6 max-w-4xl"
          style={serif()}
        >
          {featured.title}
        </h1>
        <p
          className="text-secondary-foreground text-base max-w-xl leading-relaxed mb-8"
          style={sans()}
        >
          {featured.excerpt}
        </p>
        <div className="flex flex-col sm:flex-row sm:items-center gap-6">
          <div className="flex items-center gap-4">
            <div
              className="w-8 h-8 rounded-full bg-[#e8a020]/20 flex items-center justify-center text-[#e8a020] text-xs font-bold"
              style={sans(700)}
            >
              G
            </div>
            <div>
              <p className="text-xs text-[#f0ede8]" style={sans(500)}>
                {featured.author}
              </p>
              <p className="text-xs text-muted-foreground" style={sans()}>
                {featured.date} · {featured.readTime}
              </p>
            </div>
          </div>
          <Link
            href={`/blogs/${featured.slug}`}
            className="inline-block px-8 py-3 bg-[#e8a020] text-[#0d0f14] text-[0.7rem] uppercase tracking-widest hover:bg-[#f0b030] transition-colors"
            style={sans(600)}
          >
            Read Article →
          </Link>
        </div>
      </div>

    </section>
  );
}
