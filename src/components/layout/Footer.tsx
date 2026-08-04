"use client";

import { sans } from "@/lib/utils";
import { useState } from "react";

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
  const [page, setPage] = useState<'home' | 'private-label' | 'distribution-hub' | 'markets' | 'certified-distributor' | 'contact' | 'charity' | 'careers' | 'blog' | 'case-studies' | 'privacy-policy' | 'gdpr'>('home')
  return (
    <footer className="bg-[#0a0c10] border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-14">
          <div className="md:col-span-2">
            <div className="mb-4">
              <img
                src={"/logos/Globex_Logo_Reversed.png"}
                alt="We Are Globex"
                className="h-8 w-auto"
              />
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
              {[
                "Distribution Hub",
                "Private Label Hub",
                "Market Coverage",
                "Commercial Routes",
              ].map((s) => (
                <li key={s}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-[#e8a020] transition-colors"
                    style={sans()}
                  >
                    {s}
                  </a>
                </li>
              ))}
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
              {["Home", "About"].map((s) => (
                <li key={s}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-[#e8a020] transition-colors"
                    style={sans()}
                  >
                    {s}
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={() => setPage("case-studies")}
                  className="text-sm text-muted-foreground hover:text-[#e8a020] transition-colors"
                  style={sans()}
                >
                  Case Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => setPage("careers")}
                  className="text-sm text-muted-foreground hover:text-[#e8a020] transition-colors"
                  style={sans()}
                >
                  Careers
                </button>
              </li>
              <li>
                <button
                  onClick={() => setPage("charity")}
                  className="text-sm text-muted-foreground hover:text-[#e8a020] transition-colors"
                  style={sans()}
                >
                  Our Charity Partner
                </button>
              </li>
              <li></li>
              {[].map((s) => (
                <li key={s}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-[#e8a020] transition-colors"
                    style={sans()}
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border gap-3">
          <p className="text-xs text-[#3a3f4d]" style={sans()}>
            © 2025 We Are Globex. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-[#3a3f4d]">
            <button
              onClick={() => setPage("privacy-policy")}
              className="hover:text-muted-foreground transition-colors"
              style={sans()}
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setPage("gdpr")}
              className="hover:text-muted-foreground transition-colors"
              style={sans()}
            >
              GDPR Statement
            </button>
            <a
              href="#"
              className="hover:text-muted-foreground transition-colors"
              style={sans()}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
