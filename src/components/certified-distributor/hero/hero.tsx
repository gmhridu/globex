import { sans, serif } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-end pb-20 pt-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#060810]">
        <img
          src="https://images.unsplash.com/photo-1691334016976-d36da0a28a7b?w=1800&h=1000&fit=crop&auto=format"
          alt="City skyline at night representing global distribution network"
          className="w-full h-full object-cover opacity-45"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(170deg, rgba(6,8,16,0.88) 0%, rgba(6,8,16,0.25) 50%, rgba(6,8,16,0.92) 100%)",
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
              Certified Distributor Programme
            </span>
          </div>
          <h1
            className="text-[4.2rem] md:text-[6rem] leading-[0.9] uppercase mb-8"
            style={serif()}
          >
            Join Our
            <br />
            <span className="text-[#e8a020]">Global</span>
            <br />
            Distributor
            <br />
            Network.
          </h1>
          <p
            className="text-foreground text-base max-w-sm leading-relaxed mb-10"
            style={sans()}
          >
            Become a certified Globex distributor and gain exclusive access to a
            network of top North American manufacturers seeking European and
            Middle East partners.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <a
              href="#cd-apply"
              className="inline-block px-8 py-4 bg-[#e8a020] text-[#0d0f14] text-[0.7rem] uppercase tracking-widest hover:bg-[#f0b030] transition-colors"
              style={sans(600)}
            >
              Apply Now
            </a>
            <a
              href="#cd-why-join"
              className="inline-block px-8 py-4 border border-white/20 text-[#f0ede8] text-[0.7rem] uppercase tracking-widest hover:border-[#e8a020] hover:text-[#e8a020] transition-colors"
              style={sans(500)}
            >
              Learn More
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
                  340+ Manufacturers
                </p>
                <p
                  className="text-[0.6rem] text-muted-foreground mt-0.5"
                  style={sans()}
                >
                  In Our Network
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

        {/* Right — qualification checklist */}
        <div className="hidden lg:block">
          <p
            className="text-[0.65rem] uppercase tracking-[0.2em] text-foreground mb-5"
            style={sans(500)}
          >
            Who We're Looking For
          </p>
          <div className="space-y-2">
            {[
              "Established regional distribution footprint",
              "Strong buyer relationships in your territory",
              "Capacity to handle international product ranges",
              "Commitment to brand standards and compliance",
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
