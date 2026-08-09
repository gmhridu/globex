"use client";

import { sans, serif } from "@/lib/utils";
import { useState } from "react";

const faqs = [
  {
    q: "What markets do you focus on?",
    a: "Western and Eastern Europe, the GCC (UAE, KSA, Qatar, Kuwait, Bahrain, Oman), and the broader Middle East. We go deep in fewer markets rather than thin across many.",
  },
  {
    q: "How is this different from using a sales agent?",
    a: "We build infrastructure — channel strategy, partner qualification, commercial negotiation — not just introductions. We stay engaged until the distributor is active and reordering.",
  },
  {
    q: "What product categories do you work in?",
    a: "Food & beverage, health & wellness, household goods, personal care, consumer goods, and industrial supplies. We evaluate each product on its own merit.",
  },
  {
    q: "How long does the process take?",
    a: "First qualified introductions within 60–90 days. First orders typically within 4–6 months, depending on product complexity and market.",
  },
  {
    q: "Do you work with first-time exporters?",
    a: "Yes. We have a specific process for manufacturers exporting for the first time — including export documentation support and compliance guidance.",
  },
];

export function Faq() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <section id="dh-faq" className="py-24 border-t border-border">
      <div className="max-w-3xl mx-auto px-6">
        <span className="w-6 h-px bg-[#e8a020] block mb-6" />
        <h2 className="text-6xl uppercase leading-none mb-14" style={serif()}>
          Frequently
          <br />
          <span className="text-[#e8a020]">Asked.</span>
        </h2>

        <div className="space-y-px">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-card border border-border">
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
                    transform: openFaq === i ? "rotate(45deg)" : "rotate(0)",
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
