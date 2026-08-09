"use client";

import { sans, serif } from "@/lib/utils";
import { useState } from "react";

const faqs = [
  {
    q: "Which markets do you cover?",
    a: "We operate across 30+ European markets and the full GCC/Middle East region.",
  },
  {
    q: "How is Globex different from a sales agent?",
    a: "We build distribution infrastructure — strategy, channel selection, and in-market execution — not just introductions.",
  },
  {
    q: "What types of companies do you work with?",
    a: "North American manufacturers with proven domestic sales and a product that travels well.",
  },
  {
    q: "How long does it take to see results?",
    a: "First qualified distributor introductions within 60–90 days. First orders typically within 6 months.",
  },
  {
    q: "What is the onboarding process?",
    a: "Strategy session → market audit → route-to-market plan → in-market activation. Four stages, clear milestones.",
  },
];

export function Faq() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <section className="py-24 border-t border-border bg-card">
      <div className="max-w-3xl mx-auto px-6">
        <span className="w-6 h-px bg-[#e8a020] block mb-6" />
        <h2 className="text-6xl uppercase leading-none mb-14" style={serif()}>
          Frequently
          <br />
          <span className="text-[#e8a020]">Asked.</span>
        </h2>

        <div className="space-y-px">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-[#0d0f14] border border-border">
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left group"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <span
                  className="text-sm text-[#f0ede8] group-hover:text-[#e8a020] transition-colors pr-8"
                  style={sans(500)}
                >
                  {faq.q}
                </span>
                <span
                  className="text-[#e8a020] text-xl shrink-0 transition-transform duration-300"
                  style={{
                    transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)",
                  }}
                >
                  +
                </span>
              </button>
              {openFaq === i && (
                <div className="px-6 pb-5">
                  <p
                    className="text-sm text-muted-foreground leading-relaxed"
                    style={sans()}
                  >
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
