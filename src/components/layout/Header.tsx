"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import { sans } from "@/lib/utils";

const navLinks = [
  { label: "Markets", href: "/our-markets" },
  { label: "Distribution", href: "/the-distribution-hub" },
  { label: "Private Label", href: "/private-label-hub" },
  { label: "For Buyers", href: "/certified-distributor" },
  { label: "Blog", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

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
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center">
        <Link href="/" className="shrink-0">
          <img
            src={"/logos/Globex_Logo_Reversed.png"}
            alt="We Are Globex"
            className="h-8 w-auto"
          />
        </Link>
        <div className="hidden md:flex items-center justify-center gap-8 mx-auto">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[0.7rem] uppercase tracking-widest text-muted-foreground hover:text-[#e8a020] transition-colors text-nowrap"
              style={sans(500)}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-6 ml-auto">
          <Link
            href="/contact"
            className="hidden md:inline-block px-5 py-2 bg-[#e8a020] text-[#0d0f14] text-[0.7rem] uppercase tracking-widest hover:bg-[#f0b030] transition-colors"
            style={sans(600)}
          >
            Contact Us
          </Link>
          <button
            className="md:hidden px-1 py-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className="block w-5 h-px bg-[#f0ede8] mb-1.5" />
            <span className="block w-5 h-px bg-[#f0ede8] mb-1.5" />
            <span className="block w-5 h-px bg-[#f0ede8]" />
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-card border-t border-border px-6 py-5 space-y-4">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block text-sm text-secondary-foreground hover:text-[#e8a020] transition-colors uppercase tracking-wide"
              onClick={() => setMenuOpen(false)}
              style={sans(500)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
