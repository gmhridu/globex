import { sans, serif } from "@/lib/utils";

export function CaseStudy() {
  return (
    <section className="border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Product image panel */}
          <div className="relative min-h-120 bg-[#05080a] flex items-center justify-center overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=900&h=700&fit=crop&auto=format"
              alt="Premium private label pet food product packaging"
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
            {/* Dark vignette so product text stays readable */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(13,15,20,0.2) 0%, rgba(13,15,20,0.85) 100%)",
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
              {/* Stylised product name block */}
              <div className="space-y-1 mb-6">
                <div
                  className="text-5xl uppercase text-[#f0ede8]"
                  style={serif()}
                >
                  Private
                </div>
                <div
                  className="text-5xl uppercase text-[#e8a020]"
                  style={serif()}
                >
                  Label
                </div>
                <div
                  className="text-2xl uppercase text-muted-foreground tracking-widest"
                  style={serif(600)}
                >
                  Adult Complete
                </div>
              </div>
              <div
                className="flex justify-center gap-6 text-[0.6rem] uppercase tracking-widest text-foreground/90"
                style={sans(500)}
              >
                <span>Petfood</span>
                <span className="text-border">·</span>
                <span>Europe</span>
                <span className="text-border">·</span>
                <span>Multi-Market</span>
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
                Private Label Petfood Launch
              </span>
            </div>

            <h2
              className="text-4xl lg:text-5xl uppercase leading-tight mb-10"
              style={serif()}
            >
              From Factory
              <br />
              to <span className="text-[#e8a020]">Five Markets.</span>
            </h2>

            <div className="space-y-6 mb-10">
              {[
                {
                  label: "Client",
                  value:
                    "Petfood manufacturer seeking European private label distribution",
                },
                {
                  label: "Objective",
                  value:
                    "Launch a private label petfood range with retailers and distributors across Europe",
                },
                {
                  label: "Approach",
                  value:
                    "Buyer mapping, retailer and distributor introductions, packaging alignment, and full launch support",
                },
                {
                  label: "Outcome",
                  value:
                    "Successfully launched with retail and distribution partners across key European markets",
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

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-px bg-border mb-10">
              {[
                {
                  icon: "🌍",
                  label: "Target Markets",
                  value: "UK, Germany, Poland, Netherlands, Sweden",
                },
                {
                  icon: "🏪",
                  label: "Qualified Buyers",
                  value: "Retailers & Distributors",
                },
                {
                  icon: "🚀",
                  label: "Launch Result",
                  value: "Successfully launched in all target markets",
                },
                {
                  icon: "📦",
                  label: "Commercial Stage",
                  value: "Live with retail & distribution partners",
                },
              ].map((stat) => (
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
              href="#pl-contact"
              className="inline-block w-fit px-8 py-4 bg-[#e8a020] text-[#0d0f14] text-[0.7rem] uppercase tracking-widest hover:bg-[#f0b030] transition-colors"
              style={sans(600)}
            >
              Start Your Private Label Launch →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
