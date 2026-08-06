import { sans, serif } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-end pb-16 pt-32 overflow-hidden">
      <div className="absolute inset-0 bg-[#060810]">
        <img
          src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?w=1800&h=1000&fit=crop&auto=format"
          alt="Global shipping and logistics operations"
          className="w-full h-full object-cover opacity-25"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(165deg, rgba(6,8,16,0.92) 0%, rgba(6,8,16,0.3) 55%, rgba(6,8,16,0.95) 100%)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-end">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-6 h-px bg-[#e8a020]" />
              <span
                className="text-[0.65rem] uppercase tracking-[0.22em] text-[#e8a020]"
                style={sans(500)}
              >
                Proven Results
              </span>
            </div>
            <h1
              className="text-[4.5rem] md:text-[7rem] leading-[0.88] uppercase mb-6"
              style={serif()}
            >
              Case
              <br />
              <span className="text-[#e8a020]">Studies.</span>
            </h1>
            <p
              className="text-muted-foreground text-base max-w-sm leading-relaxed"
              style={sans()}
            >
              Real manufacturers. Real markets. Real results. Every engagement
              we take on ends in active trading — or we keep working.
            </p>
          </div>

          {/* Hero stat block */}
          <div className="grid grid-cols-3 gap-px bg-border self-end">
            {[
              { n: "47+", label: "Markets Covered" },
              { n: "340+", label: "Active Partners" },
              { n: "94%", label: "Client Retention" },
            ].map((stat) => (
              <div key={stat.label} className="bg-[#0d0f14] px-6 py-8">
                <p
                  className="text-4xl md:text-5xl text-[#e8a020] mb-2 leading-none"
                  style={serif()}
                >
                  {stat.n}
                </p>
                <p
                  className="text-[0.6rem] uppercase tracking-widest text-[#3a3f4d]"
                  style={sans(500)}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
