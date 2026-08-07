"use client";
import { sans, serif } from "@/lib/utils";
import { useState } from "react";

const processSteps = [
  {
    n: "01",
    title: "Initial Assessment",
    body: "We review your distribution footprint, category expertise, and market coverage to understand where you can genuinely add value.",
  },
  {
    n: "02",
    title: "Distributor Research & Shortlisting",
    body: "We identify manufacturers in our network whose products align with your buyer relationships and regional strengths.",
  },
  {
    n: "03",
    title: "Due Diligence & Compatibility Check",
    body: "Both sides complete a structured compatibility review — commercial terms, volumes, exclusivity, and compliance requirements.",
  },
  {
    n: "04",
    title: "Onboarding & Partnership Development",
    body: "Once aligned, we manage the onboarding process and stay engaged through the first trading period to ensure the relationship performs.",
  },
];

export function Process() {
  const [openStep, setOpenStep] = useState<number | null>(null);
  return (
    <section id="cd-process" className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Process accordion — left 2 cols */}
          <div className="lg:col-span-2">
            <span className="w-6 h-px bg-[#e8a020] block mb-4" />
            <h2
              className="text-5xl md:text-6xl uppercase leading-none mb-12"
              style={serif()}
            >
              How the
              <br />
              <span className="text-[#e8a020]">Process Works.</span>
            </h2>
            <div className="space-y-px">
              {processSteps.map((step, i) => (
                <div key={i} className="border border-border bg-card">
                  <button
                    className="w-full flex items-center gap-6 px-6 py-5 text-left group"
                    onClick={() => setOpenStep(openStep === i ? null : i)}
                  >
                    <span
                      className="text-3xl text-border group-hover:text-[#e8a020]/30 transition-colors shrink-0 w-10"
                      style={serif(700)}
                    >
                      {step.n}
                    </span>
                    <span
                      className="flex-1 text-base uppercase text-[#f0ede8] group-hover:text-[#e8a020] transition-colors"
                      style={serif(700)}
                    >
                      {step.title}
                    </span>
                    <span
                      className="text-[#e8a020] text-xl shrink-0 transition-transform duration-300"
                      style={{
                        transform:
                          openStep === i ? "rotate(45deg)" : "rotate(0)",
                      }}
                    >
                      +
                    </span>
                  </button>
                  {openStep === i && (
                    <div className="px-6 pb-6 pl-17">
                      <p
                        className="text-sm text-muted-foreground leading-relaxed"
                        style={sans()}
                      >
                        {step.body}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar — right 1 col */}
          <div className="space-y-6">
            <div className="border border-border bg-card p-8">
              <span className="w-6 h-px bg-[#e8a020] block mb-5" />
              <h3 className="text-2xl uppercase mb-4" style={serif()}>
                Have More Questions
                <br />
                <span className="text-[#e8a020]">About Membership?</span>
              </h3>
              <p
                className="text-sm text-muted-foreground leading-relaxed mb-8"
                style={sans()}
              >
                Our distributor membership offers exclusive access to
                world-class manufacturers, dedicated account support, and global
                networking opportunities. Let's discuss how Globex can help your
                business expand and thrive.
              </p>
              <a
                href="mailto:info@weareglobex.com"
                className="inline-block w-full text-center py-4 border border-[#e8a020] text-[#e8a020] text-[0.7rem] uppercase tracking-widest hover:bg-[#e8a020] hover:text-[#0d0f14] transition-colors"
                style={sans(600)}
              >
                Contact Globex →
              </a>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 gap-px bg-border">
              {[
                { value: "340+", label: "Manufacturers" },
                { value: "47", label: "Markets" },
                { value: "14", label: "Sectors" },
                { value: "94%", label: "Retention" },
              ].map((s) => (
                <div key={s.label} className="bg-card p-5 text-center">
                  <div className="text-3xl text-[#e8a020]" style={serif()}>
                    {s.value}
                  </div>
                  <div
                    className="text-[0.6rem] uppercase tracking-widest text-muted-foreground mt-1"
                    style={sans(500)}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
