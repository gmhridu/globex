"use client";

import { sans, serif } from "@/lib/utils";
import { useState } from "react";

export function Markets() {
  const [activeMarket, setActiveMarket] = useState<"europe" | "gcc">("europe");
  return (
    <section id="markets" className="border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left — market selector */}
          <div className="p-12 lg:p-16 flex flex-col justify-center">
            <span className="w-6 h-px bg-[#e8a020] block mb-6" />
            <h2
              className="text-6xl md:text-7xl uppercase leading-none mb-12"
              style={serif()}
            >
              Europe &<br />
              <span className="text-[#e8a020]">Middle East</span>
              <br />
              Coverage.
            </h2>

            <div className="flex gap-px mb-10">
              {(["europe", "gcc"] as const).map((m) => (
                <button
                  key={m}
                  onClick={() => setActiveMarket(m)}
                  className="flex-1 py-3 text-[0.65rem] uppercase tracking-widest transition-colors"
                  style={{
                    ...sans(600),
                    background: activeMarket === m ? "#e8a020" : "#151820",
                    color: activeMarket === m ? "#0d0f14" : "#7a7f8e",
                  }}
                >
                  {m === "europe" ? "Europe" : "GCC / Middle East"}
                </button>
              ))}
            </div>

            {activeMarket === "europe" ? (
              <div className="space-y-3">
                {[
                  "Broad coverage across 30+ European markets",
                  "Eastern, Western & Nordic distribution networks",
                  "Retail, wholesale, and foodservice routes",
                ].map((t, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-[#e8a020] mt-0.5 text-xs">→</span>
                    <span className="text-sm text-secondary-foreground" style={sans()}>
                      {t}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-3">
                {[
                  "GCC-wide distributor network: UAE, KSA, Qatar, Kuwait",
                  "Halal certification and regulatory support included",
                  "Key focus on right-market, right-product fit",
                ].map((t, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-[#e8a020] mt-0.5 text-xs">→</span>
                    <span className="text-sm text-secondary-foreground" style={sans()}>
                      {t}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right — image */}
          <div className="relative min-h-105 lg:min-h-0 bg-[#080b10]">
            <img
              src="https://images.unsplash.com/photo-1744744219364-7e200651324c?w=900&h=800&fit=crop&auto=format"
              alt="City lights along a coastline at dusk representing international markets"
              className="absolute inset-0 w-full h-full object-cover opacity-60"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, rgba(13,15,20,0.7) 0%, transparent 50%)",
              }}
            />
            <div className="absolute bottom-8 right-8 text-right">
              <div
                className="text-5xl font-bold text-[#e8a020]"
                style={serif()}
              >
                47
              </div>
              <div
                className="text-[0.65rem] uppercase tracking-widest text-muted-foreground mt-1"
                style={sans(500)}
              >
                Markets Active
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
