import { sans, serif } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const painPoints = [
  { label: "Choosing the Right Markets" },
  { label: "Finding the Right Distributors" },
  { label: "Lack of Local Follow-Up" },
  { label: "Slow International Traction" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-end pb-20 pt-32 overflow-hidden">
      {/* City-at-night aerial - echoes the designer's original map imagery */}
      <div className="absolute inset-0 bg-[#080b10]">
        <Image
          src="https://images.unsplash.com/photo-1781130410887-065f6fef81e1?w=1800&h=1000&fit=crop&auto=format"
          alt="Aerial city at night representing global market reach"
          fill
          className="w-full h-full object-cover opacity-35"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, rgba(13,15,20,0.85) 0%, rgba(13,15,20,0.3) 50%, rgba(13,15,20,0.9) 100%)",
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
              Growth & Export Partner for Manufacturers
            </span>
          </div>
          <h1
            className="text-[3.8rem] md:text-[5.8rem] leading-[0.9] uppercase mb-8"
            style={serif()}
          >
            Europe &<br />
            Middle East
            <br />
            <span className="text-[#e8a020]">Market Entry</span>
            <br />
            <span className="text-[2.8rem] md:text-[3.8rem]">
              for U.S. & Canadian
              <br />
              Manufacturers.
            </span>
          </h1>
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-[#e8a020] text-[#0d0f14] text-[0.7rem] uppercase tracking-widest hover:bg-[#f0b030] transition-colors"
              style={sans(600)}
            >
              Book a Free Strategy Session
            </Link>
            <a
              href="#process"
              className="inline-block px-8 py-4 border border-white/20 text-[#f0ede8] text-[0.7rem] uppercase tracking-widest hover:border-[#e8a020] hover:text-[#e8a020] transition-colors"
              style={sans(500)}
            >
              How It Works
            </a>
          </div>

          {/* Award + trust bar */}
          <div className="flex flex-col sm:flex-row gap-3">
            {/* Award badge */}
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

        {/* Right: four pain-point callouts */}
        <div className="hidden lg:block">
          <p
            className="text-[0.65rem] uppercase tracking-[0.2em] text-white/90 mb-5"
            style={sans(500)}
          >
            Why Growth Stalls
          </p>
          <div className="space-y-2">
            {painPoints.map((p, i) => (
              <div
                key={i}
                className="flex items-center gap-4 py-3 px-4 border border-border bg-card/60"
              >
                <span className="text-[#e8a020] text-xs" style={serif(700)}>
                  0{i + 1}
                </span>
                <span className="text-sm text-secondary-foreground" style={sans(500)}>
                  {p.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
