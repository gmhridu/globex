import { sans, serif } from "@/lib/utils";

const caseStudyStats = [
  {
    icon: "🌍",
    label: "Target Markets",
    value: "UK, Germany, France, Netherlands, UAE",
  },
  {
    icon: "🏪",
    label: "Channel",
    value: "Independent retailers & pharmacy chains",
  },
  {
    icon: "🚀",
    label: "Time to First Order",
    value: "5 months from engagement",
  },
  {
    icon: "📦",
    label: "Commercial Stage",
    value: "Active and reordering across 3 markets",
  },
];

export function CaseStudy() {
  return (
    <section
      id="dh-case-study"
      className="border-t border-border overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Product image panel */}
          <div className="relative min-h-130 bg-[#05080a] flex items-center justify-center overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=900&h=700&fit=crop&auto=format"
              alt="Baby products representing the consumer goods distribution case study"
              className="absolute inset-0 w-full h-full object-cover opacity-35"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(13,15,20,0.15) 0%, rgba(13,15,20,0.88) 100%)",
              }}
            />
            <div className="relative text-center px-10">
              <div className="inline-block border border-[#e8a020]/30 px-6 py-3 mb-6">
                <span
                  className="text-[0.6rem] uppercase tracking-[0.25em] text-[#e8a020]"
                  style={sans(600)}
                >
                  Featured Case Study
                </span>
              </div>
              <div className="space-y-1 mb-6">
                <div
                  className="text-5xl uppercase text-[#f0ede8]"
                  style={serif()}
                >
                  Baby
                </div>
                <div
                  className="text-5xl uppercase text-[#e8a020]"
                  style={serif()}
                >
                  Products
                </div>
                <div
                  className="text-2xl uppercase text-muted-foreground tracking-widest"
                  style={serif(600)}
                >
                  Manufacturer
                </div>
              </div>
              <div
                className="flex justify-center gap-6 text-[0.6rem] uppercase tracking-widest text-[#3a3f4d]"
                style={sans(500)}
              >
                <span>Consumer Goods</span>
                <span className="text-border">·</span>
                <span>Multi-Market</span>
                <span className="text-border">·</span>
                <span>Europe</span>
              </div>
            </div>
          </div>

          {/* Case study detail */}
          <div className="bg-card p-12 lg:p-16 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-6 h-px bg-[#e8a020]" />
              <span
                className="text-[0.65rem] uppercase tracking-[0.2em] text-[#e8a020]"
                style={sans(500)}
              >
                Baby Products Distribution Launch
              </span>
            </div>

            <h2
              className="text-4xl lg:text-5xl uppercase leading-tight mb-10"
              style={serif()}
            >
              Five Markets.
              <br />
              <span className="text-[#e8a020]">One Engagement.</span>
            </h2>

            <div className="space-y-6 mb-10">
              {[
                {
                  label: "Client",
                  value:
                    "North American baby products manufacturer entering Europe for the first time",
                },
                {
                  label: "Objective",
                  value:
                    "Establish active distributor and retail relationships across key European markets",
                },
                {
                  label: "Approach",
                  value:
                    "Full market audit, channel strategy, distributor qualification, and in-market commercial negotiation",
                },
                {
                  label: "Outcome",
                  value:
                    "Active trading relationships established across 5 markets within a single engagement period",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex gap-5 pb-6 border-b border-border last:border-0 last:pb-0"
                >
                  <span
                    className="text-[0.65rem] uppercase tracking-widest text-[#3a3f4d] w-20 shrink-0 pt-0.5"
                    style={sans(500)}
                  >
                    {item.label}
                  </span>
                  <p
                    className="text-sm text-secondary-foreground leading-relaxed"
                    style={sans()}
                  >
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-px bg-border mb-10">
              {caseStudyStats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[#0d0f14] p-5 flex gap-4 items-start"
                >
                  <span className="text-lg mt-0.5">{stat.icon}</span>
                  <div>
                    <p
                      className="text-[0.6rem] uppercase tracking-widest text-[#3a3f4d] mb-1"
                      style={sans(500)}
                    >
                      {stat.label}
                    </p>
                    <p
                      className="text-xs text-secondary-foreground leading-snug"
                      style={sans(500)}
                    >
                      {stat.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#dh-contact"
              className="inline-block w-fit px-8 py-4 bg-[#e8a020] text-[#0d0f14] text-[0.7rem] uppercase tracking-widest hover:bg-[#f0b030] transition-colors"
              style={sans(600)}
            >
              Start Your Distribution Journey →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
