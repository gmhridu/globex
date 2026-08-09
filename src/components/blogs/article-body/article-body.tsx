"use client";

import { sans, serif } from "@/lib/utils";

type ArticleSection = {
  type: "intro" | "heading" | "body" | "pullquote" | "list" | "subheading";
  text?: string;
  items?: string[];
};

type RelatedPost = {
  slug: string;
  title: string;
  date: string;
};

type ArticleBodyProps = {
  content: { sections: ArticleSection[] } | null;
  accentColor: string;
  related: RelatedPost[];
  openPost: (slug: string) => void;
  onBack: () => void;
};

export function ArticleBody({
  content,
  accentColor,
  related,
  openPost,
  onBack,
}: ArticleBodyProps) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_200px] gap-16">
        {/* Main content */}
        <article className="min-w-0">
          {content ? (
            <div className="space-y-8">
              {content.sections.map((section, i) => {
                if (section.type === "intro")
                  return (
                    <p
                      key={i}
                      className="text-lg text-secondary-foreground leading-relaxed border-l-2 border-[#e8a020] pl-6"
                      style={sans()}
                    >
                      {section.text}
                    </p>
                  );
                if (section.type === "heading")
                  return (
                    <h2
                      key={i}
                      className="text-3xl md:text-4xl uppercase leading-tight pt-6"
                      style={serif()}
                    >
                      {section.text}
                    </h2>
                  );
                if (section.type === "subheading")
                  return (
                    <h3
                      key={i}
                      className="text-xl uppercase leading-tight"
                      style={{ ...serif(700), color: accentColor }}
                    >
                      {section.text}
                    </h3>
                  );
                if (section.type === "body")
                  return (
                    <p
                      key={i}
                      className="text-sm text-secondary-foreground leading-[1.85]"
                      style={sans()}
                    >
                      {section.text}
                    </p>
                  );
                if (section.type === "pullquote")
                  return (
                    <blockquote
                      key={i}
                      className="my-10 py-8 border-t border-b border-border"
                    >
                      <p
                        className="text-2xl md:text-3xl uppercase leading-tight text-[#f0ede8]"
                        style={serif(700)}
                      >
                        <span style={{ color: accentColor }}>"</span>
                        {section.text}
                        <span style={{ color: accentColor }}>"</span>
                      </p>
                    </blockquote>
                  );
                if (section.type === "list")
                  return (
                    <ul key={i} className="space-y-4">
                      {section.items?.map((item, li) => (
                        <li key={li} className="flex gap-4">
                          <span
                            className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full"
                            style={{ background: accentColor }}
                          />
                          <p
                            className="text-sm text-secondary-foreground leading-[1.85]"
                            style={sans()}
                          >
                            {item}
                          </p>
                        </li>
                      ))}
                    </ul>
                  );
                return null;
              })}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground" style={sans()}>
              Full article coming soon.
            </p>
          )}

          {/* Article footer */}
          <div className="mt-16 pt-10 border-t border-border">
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold"
                style={{
                  background: accentColor + "20",
                  color: accentColor,
                  ...sans(700),
                }}
              >
                G
              </div>
              <div>
                <p className="text-sm text-[#f0ede8]" style={sans(600)}>
                  We Are Globex
                </p>
                <p className="text-xs text-muted-foreground" style={sans()}>
                  B2B Growth & Export Consultancy — Europe & Middle East
                </p>
              </div>
            </div>
            <button
              onClick={onBack}
              className="inline-block px-8 py-4 bg-[#e8a020] text-[#0d0f14] text-[0.7rem] uppercase tracking-widest hover:bg-[#f0b030] transition-colors"
              style={sans(600)}
            >
              Speak to Our Team →
            </button>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-8">
            <div>
              <p
                className="text-[0.6rem] uppercase tracking-widest text-[#3a3f4d] mb-4"
                style={sans(500)}
              >
                In This Article
              </p>
              <nav className="space-y-2">
                {content?.sections
                  .filter((s) => s.type === "heading")
                  .map((s, i) => (
                    <p
                      key={i}
                      className="text-xs text-muted-foreground leading-snug py-1 border-l border-border pl-3 hover:text-[#e8a020] hover:border-[#e8a020] transition-colors cursor-default"
                      style={sans()}
                    >
                      {s.text}
                    </p>
                  ))}
              </nav>
            </div>
            {related.length > 0 && (
              <div>
                <p
                  className="text-[0.6rem] uppercase tracking-widest text-[#3a3f4d] mb-4"
                  style={sans(500)}
                >
                  Related
                </p>
                <div className="space-y-4">
                  {related.map((r) => (
                    <button
                      key={r.slug}
                      onClick={() => openPost(r.slug)}
                      className="block text-left group"
                    >
                      <p
                        className="text-xs text-muted-foreground leading-snug group-hover:text-[#e8a020] transition-colors"
                        style={sans()}
                      >
                        {r.title}
                      </p>
                      <p className="text-[0.55rem] text-[#3a3f4d] mt-1" style={sans()}>
                        {r.date}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
