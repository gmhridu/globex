import { sans, serif } from "@/lib/utils";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-end pb-20 pt-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#080b10]">
        <img
          src="https://images.unsplash.com/photo-1651525670114-2b8117390b28?w=1800&h=1000&fit=crop&auto=format"
          alt="Manufacturing factory floor representing distribution at scale"
          className="w-full h-full object-cover opacity-30"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, rgba(13,15,20,0.92) 0%, rgba(13,15,20,0.3) 55%, rgba(13,15,20,0.92) 100%)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-end">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-6 h-px bg-[#e8a020]" />
            <span
              className="text-[0.65rem] uppercase tracking-[0.22em] text-[#e8a020]"
              style={sans(500)}
            >
              Solutions
            </span>
          </div>
          <h1
            className="text-[4.5rem] md:text-[6.5rem] leading-[0.9] uppercase mb-8"
            style={serif()}
          >
            Distribution
            <br />
            <span className="text-[#e8a020]">Hub.</span>
          </h1>
          <p
            className="text-muted-foreground text-base max-w-sm leading-relaxed mb-10"
            style={sans()}
          >
            We build active distribution partnerships across Europe and the
            Middle East — not introductions, not databases. Trading
            relationships.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-[#e8a020] text-[#0d0f14] text-[0.7rem] uppercase tracking-widest hover:bg-[#f0b030] transition-colors"
              style={sans(600)}
            >
              Book a Direct Entry Review
            </Link>
            <a
              href="#dh-process"
              className="inline-block px-8 py-4 border border-white/20 text-[#f0ede8] text-[0.7rem] uppercase tracking-widest hover:border-[#e8a020] hover:text-[#e8a020] transition-colors"
              style={sans(500)}
            >
              See the Process
            </a>
          </div>

          {/* Trust bar */}
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex items-center gap-4 px-5 py-4 rounded-xl border border-[#e8a020]/25 bg-card/80 backdrop-blur-sm">
              <span className="text-2xl">🏆</span>
              <div>
                <p
                  className="text-xs font-semibold text-[#e8a020] leading-tight"
                  style={sans(600)}
                >
                  Business Consultancy of the Year
                </p>
                <p
                  className="text-[0.65rem] text-muted-foreground mt-0.5"
                  style={sans()}
                >
                  2026 Award Winner
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 px-5 py-4 rounded-xl border border-border bg-card/80 backdrop-blur-sm">
              <span className="text-2xl">🌍</span>
              <div>
                <p
                  className="text-xs font-semibold text-[#f0ede8] leading-tight"
                  style={sans(600)}
                >
                  Europe & Middle East
                </p>
                <p
                  className="text-[0.65rem] text-muted-foreground mt-0.5"
                  style={sans()}
                >
                  Local Market Expertise
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 px-5 py-4 rounded-xl border border-border bg-card/80 backdrop-blur-sm">
              <span className="text-2xl">✦</span>
              <div>
                <p
                  className="text-xs font-semibold text-[#f0ede8] leading-tight"
                  style={sans(600)}
                >
                  Client References
                </p>
                <p
                  className="text-[0.65rem] text-muted-foreground mt-0.5"
                  style={sans()}
                >
                  Available Upon Request
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right — quick stats */}
        <div className="hidden lg:grid grid-cols-2 gap-px bg-border">
          {[
            { value: "47", label: "Markets Active" },
            { value: "340+", label: "Manufacturers Served" },
            { value: "£2.4B+", label: "Export Revenue Unlocked" },
            { value: "94%", label: "Client Retention Rate" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-card/70 backdrop-blur-sm p-8 text-center"
            >
              <div className="text-4xl text-[#e8a020] mb-2" style={serif()}>
                {s.value}
              </div>
              <div
                className="text-[0.6rem] uppercase tracking-widest text-muted-foreground"
                style={sans(500)}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
