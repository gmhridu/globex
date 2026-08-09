"use client";

import { sans, serif } from "@/lib/utils";

type ArticleHeroPost = {
  category: string;
  title: string;
  author: string;
  date: string;
  readTime: string;
  img: string;
};

type ArticleHeroProps = {
  post: ArticleHeroPost;
  accentColor: string;
};

export function ArticleHero({ post, accentColor }: ArticleHeroProps) {
  return (
    <header className="relative min-h-[70vh] flex flex-col justify-end pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-[#050709]">
        <img
          src={post.img}
          alt={post.title}
          className="w-full h-full object-cover opacity-35"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(5,7,9,1) 0%, rgba(5,7,9,0.6) 50%, rgba(5,7,9,0.2) 100%)",
          }}
        />
      </div>
      <div className="relative max-w-4xl mx-auto px-6 w-full pb-16">
        <span
          className="inline-block px-2.5 py-1 text-[0.55rem] uppercase tracking-widest mb-5"
          style={{ ...sans(600), background: accentColor + "20", color: accentColor }}
        >
          {post.category}
        </span>
        <h1
          className="text-[2.8rem] md:text-[4.5rem] leading-[0.92] uppercase mb-6"
          style={serif()}
        >
          {post.title}
        </h1>
        <div className="flex items-center gap-6 flex-wrap">
          <div className="flex items-center gap-3">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
              style={{ background: accentColor + "25", color: accentColor, ...sans(700) }}
            >
              G
            </div>
            <div>
              <p className="text-xs text-[#f0ede8]" style={sans(500)}>
                {post.author}
              </p>
              <p className="text-xs text-[#7a7f8e]" style={sans()}>
                {post.date} · {post.readTime}
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
