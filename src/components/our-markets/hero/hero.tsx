import { sans, serif } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-end pb-20 pt-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#040608]">
        <img
          src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1800&h=1000&fit=crop&auto=format"
          alt="Aerial view of London at night"
          className="w-full h-full object-cover opacity-45"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(170deg, rgba(4,6,8,0.82) 0%, rgba(4,6,8,0.1) 45%, rgba(4,6,8,0.92) 100%)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-6 h-px bg-[#e8a020]" />
            <span
              className="text-[0.65rem] uppercase tracking-[0.22em] text-[#e8a020]"
              style={sans(500)}
            >
              Markets We Support
            </span>
          </div>
          <h1
            className="text-[4.5rem] md:text-[7rem] leading-[0.9] uppercase mb-8"
            style={serif()}
          >
            Global
            <br />
            Opportunities.
            <br />
            <span className="text-[#e8a020]">Local Expertise.</span>
          </h1>
          <p
            className="text-muted-foreground text-base max-w-lg leading-relaxed mb-10"
            style={sans()}
          >
            We connect North American manufacturers with trusted distributors,
            retailers, and proven trade buyers across Europe and the Middle
            East.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#mkt-contact"
              className="inline-block px-8 py-4 bg-[#e8a020] text-[#0d0f14] text-[0.7rem] uppercase tracking-widest hover:bg-[#f0b030] transition-colors"
              style={sans(600)}
            >
              Book a Market Entry Review
            </a>
            <a
              href="#mkt-sectors"
              className="inline-block px-8 py-4 border border-white/20 text-[#f0ede8] text-[0.7rem] uppercase tracking-widest hover:border-[#e8a020] hover:text-[#e8a020] transition-colors"
              style={sans(500)}
            >
              Explore Our Sectors
            </a>
          </div>
        </div>

        {/* Floating market count strip */}
        <div className="hidden lg:flex absolute bottom-0 right-6 gap-px">
          {[
            { value: "30+", label: "European Markets" },
            { value: "6", label: "GCC Countries" },
            { value: "47", label: "Total Markets" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-card/80 backdrop-blur-sm border border-border px-8 py-5 text-center"
            >
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
    </section>
  );
}
