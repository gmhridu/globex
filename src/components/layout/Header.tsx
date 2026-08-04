"use client";

import { useState, useEffect } from "react";

import { sans } from "@/lib/utils";

export default function Header() {
  const [_page, setPage] = useState<
    | "home"
    | "private-label"
    | "distribution-hub"
    | "markets"
    | "certified-distributor"
    | "contact"
    | "charity"
    | "careers"
    | "blog"
    | "case-studies"
    | "privacy-policy"
    | "gdpr"
  >("home");
  const [navScrolled, setNavScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const h = () => setNavScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: navScrolled ? "rgba(13,15,20,0.95)" : "transparent",
        backdropFilter: navScrolled ? "blur(16px)" : "none",
        borderBottom: navScrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <img
          src={"/logos/Globex_Logo_Reversed.png"}
          alt="We Are Globex"
          className="h-8 w-auto"
        />
        <div className="hidden md:flex items-center gap-8">
          {["About", "Solutions", "Process", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[0.7rem] uppercase tracking-widest text-muted-foreground hover:text-[#e8a020] transition-colors"
              style={sans(500)}
            >
              {item}
            </a>
          ))}
          <button
            onClick={() => setPage("markets")}
            className="text-[0.7rem] uppercase tracking-widest text-muted-foreground hover:text-[#e8a020] transition-colors"
            style={sans(500)}
          >
            Markets
          </button>
          <button
            onClick={() => setPage("certified-distributor")}
            className="text-[0.7rem] uppercase tracking-widest text-muted-foreground hover:text-[#e8a020] transition-colors"
            style={sans(500)}
          >
            For Buyers
          </button>
          <button
            onClick={() => setPage("blog")}
            className="text-[0.7rem] uppercase tracking-widest text-muted-foreground hover:text-[#e8a020] transition-colors"
            style={sans(500)}
          >
            Blog
          </button>
          <button
            onClick={() => setPage("contact")}
            className="px-5 py-2 bg-[#e8a020] text-[#0d0f14] text-[0.7rem] uppercase tracking-widest hover:bg-[#f0b030] transition-colors"
            style={sans(600)}
          >
            Contact Us
          </button>
        </div>
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className="block w-5 h-px bg-[#f0ede8] mb-1.5" />
          <span className="block w-5 h-px bg-[#f0ede8] mb-1.5" />
          <span className="block w-5 h-px bg-[#f0ede8]" />
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-card border-t border-border px-6 py-5 space-y-4">
          {["About", "Solutions", "Markets", "Process", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-sm text-secondary-foreground hover:text-[#e8a020] transition-colors uppercase tracking-wide"
                onClick={() => setMenuOpen(false)}
                style={sans(500)}
              >
                {item}
              </a>
            ),
          )}
        </div>
      )}
    </nav>
  );
}
