import { sans, serif } from "@/lib/utils";

export function CaseStudy() {
  return (
    <section className="border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image */}
          <div className="relative min-h-120 bg-[#080b10]">
            <img
              src="https://images.unsplash.com/photo-1581091212991-8891c7d4bd9b?w=900&h=700&fit=crop&auto=format"
              alt="Engineers working in automotive manufacturing factory"
              className="absolute inset-0 w-full h-full object-cover opacity-55"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, transparent 60%, rgba(13,15,20,0.9) 100%)",
              }}
            />
            <div className="absolute top-8 left-8">
              <span
                className="px-3 py-1 bg-[#e8a020] text-[#0d0f14] text-[0.6rem] uppercase tracking-widest"
                style={sans(700)}
              >
                Case Study
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-12 lg:p-16 flex flex-col justify-center bg-card">
            <span
              className="text-[0.65rem] uppercase tracking-[0.2em] text-[#e8a020] mb-4"
              style={sans(500)}
            >
              North American Manufacturer
            </span>
            <h2
              className="text-4xl lg:text-5xl uppercase leading-tight mb-8"
              style={serif()}
            >
              Proven Results
              <br />
              <span className="text-[#e8a020]">for Manufacturers.</span>
            </h2>

            <div className="space-y-5 mb-10">
              <div>
                <p
                  className="text-[0.65rem] uppercase tracking-widest text-[#3a3f4d] mb-2"
                  style={sans(500)}
                >
                  The Challenge
                </p>
                <p
                  className="text-sm text-muted-foreground leading-relaxed"
                  style={sans()}
                >
                  Established domestic sales. No export infrastructure. No
                  European or GCC distributor relationships.
                </p>
              </div>
              <div className="w-full h-px bg-border" />
              <div>
                <p
                  className="text-[0.65rem] uppercase tracking-widest text-[#3a3f4d] mb-2"
                  style={sans(500)}
                >
                  Target Markets
                </p>
                <div className="space-y-1">
                  {[
                    "Western Europe — DACH & Benelux",
                    "GCC & Levant regions",
                    "Consumer and B2B retail entry",
                  ].map((t, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="text-[#e8a020] text-xs">→</span>
                      <span className="text-sm text-secondary-foreground" style={sans()}>
                        {t}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full h-px bg-border" />
              <div>
                <p
                  className="text-[0.65rem] uppercase tracking-widest text-[#3a3f4d] mb-2"
                  style={sans(500)}
                >
                  The Result
                </p>
                <p className="text-4xl text-[#e8a020]" style={serif()}>
                  3 active markets. 9 months.
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-block w-fit px-8 py-4 bg-[#e8a020] text-[#0d0f14] text-[0.7rem] uppercase tracking-widest hover:bg-[#f0b030] transition-colors"
              style={sans(600)}
            >
              See Full Case Study →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
