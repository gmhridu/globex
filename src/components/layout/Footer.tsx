"use client";

import { sans } from "@/lib/utils";
import Link from "next/link";

const footerLinks = {
  main: [
    { label: "Home", href: "/" },
    { label: "Careers", href: "/career" },
  ],
  services: [
    { label: "The Distribution Hub", href: "/the-distribution-hub" },
    { label: "The Private-Label Hub", href: "/private-label-hub" },
    { label: "The Contract MFG Hub", href: "/contract-manufacturing" },
  ],
  company: [
    { label: "Contact", href: "/contact" },
    { label: "Charity", href: "/shooting-star" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "GDPR Statement", href: "/gdpr-statement" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0a0c10] border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-14">
          <div className="md:col-span-2">
            <div className="mb-4">
              <Link href="/">
                <img
                  src={"/logos/Globex_Logo_Reversed.png"}
                  alt="We Are Globex"
                  className="h-8 w-auto"
                />
              </Link>
            </div>
            <p
              className="text-sm text-muted-foreground max-w-xs leading-relaxed"
              style={sans()}
            >
              Growth & Export Partner for Manufacturers. We build distribution
              across Europe and the Middle East.
            </p>
          </div>
          <div>
            <h4
              className="text-[0.65rem] uppercase tracking-widest text-[#e8a020] mb-5"
              style={sans(600)}
            >
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/the-distribution-hub"
                  className="text-sm text-muted-foreground hover:text-[#e8a020] transition-colors"
                  style={sans()}
                >
                  Distribution Hub
                </Link>
              </li>
              <li>
                <Link
                  href="/private-label-hub"
                  className="text-sm text-muted-foreground hover:text-[#e8a020] transition-colors"
                  style={sans()}
                >
                  Private Label Hub
                </Link>
              </li>
              <li>
                <Link
                  href="/certified-distributor"
                  className="text-sm text-muted-foreground hover:text-[#e8a020] transition-colors"
                  style={sans()}
                >
                  For Buyers
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4
              className="text-[0.65rem] uppercase tracking-widest text-[#e8a020] mb-5"
              style={sans(600)}
            >
              Company
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-muted-foreground hover:text-[#e8a020] transition-colors"
                  style={sans()}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/our-markets"
                  className="text-sm text-muted-foreground hover:text-[#e8a020] transition-colors"
                  style={sans()}
                >
                  Markets
                </Link>
              </li>

              <li>
                <Link
                  href="/case-studies"
                  className="text-sm text-muted-foreground hover:text-[#e8a020] transition-colors"
                  style={sans()}
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-sm text-muted-foreground hover:text-[#e8a020] transition-colors"
                  style={sans()}
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/shooting-star"
                  className="text-sm text-muted-foreground hover:text-[#e8a020] transition-colors"
                  style={sans()}
                >
                  Our Charity Partner
                </Link>
              </li>

              <li>
                <Link
                  href="/blogs"
                  className="text-sm text-muted-foreground hover:text-[#e8a020] transition-colors"
                  style={sans()}
                >
                  Blog
                </Link>
              </li>
            <li>
              <Link
                href="/contact"
                className="text-sm text-muted-foreground hover:text-[#e8a020] transition-colors"
                style={sans()}
              >
                Contact Us
              </Link>
            </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border gap-3">
          <p className="text-xs text-[#3a3f4d]" style={sans()}>
            © {new Date().getFullYear()} We Are Globex. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-[#3a3f4d]">
            <a
              href="https://www.linkedin.com/company/weareglobex"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#e8a020] transition-colors flex items-center gap-1.5"
              style={sans()}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <Link
              href="/privacy-policy"
              className="hover:text-muted-foreground transition-colors"
              style={sans()}
            >
              Privacy Policy
            </Link>
            <Link
              href="/gdpr-statement"
              className="hover:text-muted-foreground transition-colors"
              style={sans()}
            >
              GDPR Statement
            </Link>
            <Link
              href="/terms-of-service"
              className="hover:text-muted-foreground transition-colors"
              style={sans()}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
