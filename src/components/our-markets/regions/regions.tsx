"use client";

import { sans, serif } from "@/lib/utils";
import { useState } from "react";

const markets = [
  {
    region: "Western Europe",
    tag: "Core Market",
    countries: [
      "United Kingdom",
      "Germany",
      "France",
      "Netherlands",
      "Belgium",
      "Spain",
      "Italy",
    ],
    note: "Largest consumer base. Complex regulatory environment. Strong retail infrastructure.",
  },
  {
    region: "Eastern Europe",
    tag: "Growth Market",
    countries: [
      "Poland",
      "Czech Republic",
      "Hungary",
      "Romania",
      "Bulgaria",
      "Slovakia",
    ],
    note: "Fast-growing middle class. Lower competition. Strong distributor networks.",
  },
  {
    region: "Nordic & Baltic",
    tag: "Premium Market",
    countries: [
      "Sweden",
      "Denmark",
      "Norway",
      "Finland",
      "Estonia",
      "Latvia",
      "Lithuania",
    ],
    note: "High-value consumers. Sustainability-conscious buying. Strong e-commerce.",
  },
  {
    region: "GCC",
    tag: "Priority Market",
    countries: ["UAE", "Saudi Arabia", "Qatar", "Kuwait", "Bahrain", "Oman"],
    note: "High purchasing power. Government-driven demand. Rapid retail expansion.",
  },
  {
    region: "Levant & North Africa",
    tag: "Emerging Market",
    countries: ["Jordan", "Lebanon", "Egypt", "Morocco", "Tunisia"],
    note: "Younger demographics. Emerging middle class. Significant growth trajectory.",
  },
];

export function Regions() {
  const [activeRegion, setActiveRegion] = useState(0);
  return (
    <section
      id="mkt-regions"
      className="border-t border-border overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5">
          {/* Region tabs — left strip */}
          <div className="lg:col-span-2 border-r border-border">
            <div className="px-8 pt-14 pb-6">
              <span className="w-6 h-px bg-[#e8a020] block mb-4" />
              <h2
                className="text-5xl md:text-6xl uppercase leading-none"
                style={serif()}
              >
                Where
                <br />
                <span className="text-[#e8a020]">We Operate.</span>
              </h2>
            </div>
            <div className="space-y-px">
              {markets.map((m, i) => (
                <button
                  key={m.region}
                  onClick={() => setActiveRegion(i)}
                  className="w-full flex items-center justify-between px-8 py-5 text-left group transition-colors duration-200"
                  style={{
                    background: activeRegion === i ? "#1c2030" : "transparent",
                  }}
                >
                  <div>
                    <p
                      className="text-base uppercase text-[#f0ede8] group-hover:text-[#e8a020] transition-colors"
                      style={serif(700)}
                    >
                      {m.region}
                    </p>
                    <p
                      className="text-[0.6rem] uppercase tracking-widest mt-0.5"
                      style={{
                        ...sans(500),
                        color: activeRegion === i ? "#e8a020" : "#3a3f4d",
                      }}
                    >
                      {m.tag}
                    </p>
                  </div>
                  <span
                    className="text-border group-hover:text-[#e8a020] transition-colors text-lg"
                    style={{
                      color: activeRegion === i ? "#e8a020" : undefined,
                    }}
                  >
                    →
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Region detail — right panel */}
          <div className="lg:col-span-3 relative min-h-125">
            <img
              src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1000&h=600&fit=crop&auto=format"
              alt="Aerial view of European city at dusk"
              className="absolute inset-0 w-full h-full object-cover opacity-15"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(13,15,20,0.3) 0%, rgba(13,15,20,0.8) 100%)",
              }}
            />
            <div className="relative p-12 lg:p-14 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <h3
                    className="text-5xl uppercase text-[#f0ede8]"
                    style={serif()}
                  >
                    {markets[activeRegion].region}
                  </h3>
                  <span
                    className="px-3 py-1 border border-[#e8a020]/40 text-[#e8a020] text-[0.6rem] uppercase tracking-widest"
                    style={sans(600)}
                  >
                    {markets[activeRegion].tag}
                  </span>
                </div>
                <p
                  className="text-sm text-muted-foreground mb-8 leading-relaxed max-w-sm"
                  style={sans()}
                >
                  {markets[activeRegion].note}
                </p>
                <div className="flex flex-wrap gap-2">
                  {markets[activeRegion].countries.map((c) => (
                    <span
                      key={c}
                      className="px-3 py-1.5 border border-border text-xs text-secondary-foreground bg-card/60"
                      style={sans(500)}
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-10 pt-8 border-t border-border">
                <a
                  href="#mkt-contact"
                  className="inline-block text-[0.65rem] uppercase tracking-widest text-[#e8a020] border-b border-[#e8a020]/40 pb-0.5 hover:border-[#e8a020] transition-colors"
                  style={sans(600)}
                >
                  Book a {markets[activeRegion].region} Entry Review →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
