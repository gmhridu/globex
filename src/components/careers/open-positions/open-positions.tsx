"use client";

import { sans, serif } from "@/lib/utils";
import { useState } from "react";

const openPositions = [
  {
    title: "Market Entry Consultant",
    type: "Full-Time",
    location: "Dartford, Kent (Hybrid)",
    dept: "Consulting",
    desc: "Work directly with North American manufacturers to build their European and Middle East distribution strategy. You'll own client relationships from onboarding through to first active trading.",
    requirements: [
      "3+ years in international trade, export consulting, or B2B sales",
      "Strong commercial acumen and confident negotiator",
      "Experience working with European or GCC markets preferred",
    ],
  },
  {
    title: "Business Development Manager",
    type: "Full-Time",
    location: "Dartford, Kent (Hybrid)",
    dept: "Sales",
    desc: "Identify and convert new manufacturer clients across North America. You'll manage the full sales cycle — from outbound prospecting to signed engagement — for a growing pipeline of inbound leads.",
    requirements: [
      "5+ years B2B sales, ideally in manufacturing, logistics, or trade services",
      "Track record of hitting or exceeding revenue targets",
      "Confident presenting to C-suite decision makers",
    ],
  },
  {
    title: "Distribution Network Associate",
    type: "Full-Time",
    location: "Dartford, Kent",
    dept: "Operations",
    desc: "Build and maintain our distributor and buyer database across Europe and the GCC. You'll qualify new partners, manage relationship records, and support consultants with in-market research and introductions.",
    requirements: [
      "1–2 years in a research, operations, or commercial support role",
      "Detail-oriented with strong written communication",
      "Interest in international trade and export markets",
    ],
  },
];

export function OpenPostions() {
  const [openRole, setOpenRole] = useState<number | null>(null);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "",
    message: "",
  });
  return (
    <section id="careers-positions" className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="w-6 h-px bg-[#e8a020] block mb-4" />
            <h2
              className="text-6xl md:text-7xl uppercase leading-none"
              style={serif()}
            >
              Open
              <br />
              <span className="text-[#e8a020]">Positions.</span>
            </h2>
          </div>
          <p
            className="text-sm text-muted-foreground max-w-xs leading-relaxed"
            style={sans()}
          >
            We're a lean team scaling fast. Every role we hire has a direct
            impact on outcomes for our clients and the business.
          </p>
        </div>

        <div className="space-y-px">
          {openPositions.map((role, i) => (
            <div key={i} className="border border-border bg-card">
              <button
                className="w-full flex items-center gap-6 px-6 py-6 text-left group"
                onClick={() => setOpenRole(openRole === i ? null : i)}
              >
                <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6 items-center">
                  <h3
                    className="text-xl uppercase text-[#f0ede8] group-hover:text-[#e8a020] transition-colors"
                    style={serif(700)}
                  >
                    {role.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 md:justify-center">
                    <span
                      className="px-2 py-0.5 text-[0.55rem] uppercase tracking-widest bg-[#e8a020]/15 text-[#e8a020]"
                      style={sans(600)}
                    >
                      {role.dept}
                    </span>
                    <span
                      className="px-2 py-0.5 text-[0.55rem] uppercase tracking-widest bg-border text-muted-foreground"
                      style={sans(500)}
                    >
                      {role.type}
                    </span>
                  </div>
                  <p
                    className="text-xs text-muted-foreground md:text-right"
                    style={sans()}
                  >
                    📍 {role.location}
                  </p>
                </div>
                <span
                  className="text-[#e8a020] text-2xl shrink-0 transition-transform duration-300"
                  style={{
                    transform: openRole === i ? "rotate(45deg)" : "rotate(0)",
                  }}
                >
                  +
                </span>
              </button>

              {openRole === i && (
                <div className="px-6 pb-8 border-t border-border pt-6">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <p
                        className="text-[0.6rem] uppercase tracking-widest text-[#3a3f4d] mb-3"
                        style={sans(500)}
                      >
                        The Role
                      </p>
                      <p
                        className="text-sm text-secondary-foreground leading-relaxed mb-6"
                        style={sans()}
                      >
                        {role.desc}
                      </p>
                      <p
                        className="text-[0.6rem] uppercase tracking-widest text-[#3a3f4d] mb-3"
                        style={sans(500)}
                      >
                        What We're Looking For
                      </p>
                      <ul className="space-y-2">
                        {role.requirements.map((r, ri) => (
                          <li key={ri} className="flex items-start gap-3">
                            <span className="text-[#e8a020] mt-0.5 text-xs shrink-0">
                              →
                            </span>
                            <span
                              className="text-sm text-secondary-foreground"
                              style={sans()}
                            >
                              {r}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-col justify-between gap-4">
                      <a
                        href="#careers-apply"
                        onClick={() =>
                          setForm((f) => ({ ...f, role: role.title }))
                        }
                        className="block text-center py-4 bg-[#e8a020] text-[#0d0f14] text-[0.7rem] uppercase tracking-widest hover:bg-[#f0b030] transition-colors"
                        style={sans(600)}
                      >
                        Apply for This Role →
                      </a>
                      <p
                        className="text-[0.6rem] text-[#3a3f4d] text-center"
                        style={sans()}
                      >
                        Or send a speculative CV to
                        <br />
                        <a
                          href="mailto:careers@weareglobex.com"
                          className="text-muted-foreground hover:text-[#e8a020] transition-colors"
                        >
                          careers@weareglobex.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
