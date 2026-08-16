import { sans, serif } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-end pb-20 pt-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#080b10]">
        <img
          src="https://images.unsplash.com/photo-1559297434-fae8a1916a79?w=1800&h=1000&fit=crop&auto=format"
          alt="Shipping containers representing global private label logistics"
          className="w-full h-full object-cover opacity-30"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, rgba(13,15,20,0.9) 0%, rgba(13,15,20,0.35) 55%, rgba(13,15,20,0.92) 100%)",
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
            Private
            <br />
            <span className="text-[#e8a020]">Label</span>
            <br />
            Hub.
          </h1>
          <p
            className="text-foreground text-base max-w-sm leading-relaxed mb-10"
            style={sans()}
          >
            We connect manufacturers with buyers, brand owners, and retailers
            seeking private label supply across Europe and the Middle East.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <a
              href="#pl-contact"
              className="inline-block px-8 py-4 bg-[#e8a020] text-[#0d0f14] text-[0.7rem] uppercase tracking-widest hover:bg-[#f0b030] transition-colors"
              style={sans(600)}
            >
              Build Your Private Label Brand
            </a>
            <a
              href="#pl-process"
              className="inline-block px-8 py-4 border border-white/20 text-[#f0ede8] text-[0.7rem] uppercase tracking-widest hover:border-[#e8a020] hover:text-[#e8a020] transition-colors"
              style={sans(500)}
            >
              See the Process
            </a>
          </div>

          {/* Trust bar */}
          <div className="grid grid-cols-2 gap-3 max-w-lg">
            <div className="flex items-center gap-3 px-4 py-3 border border-[#e8a020]/25 bg-card/80 backdrop-blur-sm">
              <span className="text-xl shrink-0">🏆</span>
              <div>
                <p
                  className="text-[0.7rem] font-semibold text-[#e8a020] leading-tight"
                  style={sans(600)}
                >
                  Business Consultancy of the Year
                </p>
                <p
                  className="text-[0.6rem] text-muted-foreground mt-0.5"
                  style={sans()}
                >
                  2026 Award Winner
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 border border-[#e8a020]/25 bg-card/80 backdrop-blur-sm">
              <span className="text-xl shrink-0">🥇</span>
              <div>
                <p
                  className="text-[0.7rem] font-semibold text-[#e8a020] leading-tight"
                  style={sans(600)}
                >
                  Intl. Manufacturing Growth Partner of the Year
                </p>
                <p
                  className="text-[0.6rem] text-muted-foreground mt-0.5"
                  style={sans()}
                >
                  2026 Award Winner
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 border border-border bg-card/80 backdrop-blur-sm">
              <span className="text-xl shrink-0">🌍</span>
              <div>
                <p
                  className="text-[0.7rem] font-semibold text-[#f0ede8] leading-tight"
                  style={sans(600)}
                >
                  Europe & Middle East
                </p>
                <p
                  className="text-[0.6rem] text-muted-foreground mt-0.5"
                  style={sans()}
                >
                  Local Market Expertise
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-4 py-3 border border-border bg-card/80 backdrop-blur-sm">
              <span className="text-xl shrink-0">✦</span>
              <div>
                <p
                  className="text-[0.7rem] font-semibold text-[#f0ede8] leading-tight"
                  style={sans(600)}
                >
                  Client References
                </p>
                <p
                  className="text-[0.6rem] text-muted-foreground mt-0.5"
                  style={sans()}
                >
                  Available Upon Request
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right — is private label right for you? */}
        <div className="hidden lg:block">
          <p
            className="text-[0.65rem] uppercase tracking-[0.2em] text-foreground mb-5"
            style={sans(500)}
          >
            Is Private Label the Right Route?
          </p>
          <div className="space-y-2">
            {[
              "You have spare production capacity",
              "You want entry without marketing spend",
              "You're open to supplying under a buyer's brand",
              "You can meet retail-grade quality standards",
            ].map((line, i) => (
              <div
                key={i}
                className="flex items-center gap-4 py-3 px-4 border border-border bg-card/60"
              >
                <span className="text-[#e8a020] text-xs">✓</span>
                <span
                  className="text-sm text-secondary-foreground"
                  style={sans(500)}
                >
                  {line}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
