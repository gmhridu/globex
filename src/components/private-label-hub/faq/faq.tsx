"use client";

import { sans, serif } from "@/lib/utils";
import { useState } from "react";

const faqs = [
  {
    q: "What categories do you work in?",
    a: "Food & beverage, health & wellness, household goods, personal care, and industrial consumables. We evaluate each product on its merit.",
  },
  {
    q: "Do I need to have export experience?",
    a: "No. Many of our private label clients are exporting for the first time. We manage the full process from your factory gate to the buyer.",
  },
  {
    q: "How long does a first private label deal take?",
    a: "From engagement to first order — typically 4 to 8 months, depending on product complexity and buyer lead times.",
  },
  {
    q: "Who owns the brand?",
    a: "The buyer. You supply under their brand — but we structure the commercial terms so your IP and formulation remain protected.",
  },
  {
    q: "What's the minimum order volume?",
    a: "It depends entirely on your product and production economics. We match you to buyers whose volume requirements align with your capacity.",
  },
];

export function Faq() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <section id="pl-faq" className="py-24 border-t border-border">
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
