import { sans, serif } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative min-h-[86vh] flex items-end pt-32 pb-20 border-b border-[#2a2f3d] overflow-hidden">
      {/* Background radial and glow accents */}
      <div
        className="absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(circle at 78% 28%, rgba(232,160,32,0.16), transparent 28%), linear-gradient(135deg, #0d0f14 35%, #151820 100%)",
        }}
      />
      {/* Concentric orbital rings echoing prestige & recognition */}
      <div className="absolute top-28 right-[8%] w-64 h-64 md:w-96 md:h-96 rounded-full border border-[#e8a020]/20 pointer-events-none" />
      <div className="absolute top-40 right-[12%] w-44 h-44 md:w-64 md:h-64 rounded-full border border-[#e8a020]/30 pointer-events-none" />
      
      {/* Gold Award Seal Badge */}
      <div className="absolute top-56 right-[16%] w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#e8a020] shadow-[0_0_40px_rgba(232,160,32,0.35)] flex items-center justify-center z-10 transition-transform hover:scale-105 duration-300">
        <div className="text-center text-[#0d0f14]">
          <p
            className="text-[0.55rem] uppercase tracking-[0.25em]"
            style={sans(600)}
          >
            Awarded
          </p>
          <p
            className="text-4xl md:text-5xl leading-none font-bold"
            style={serif(800)}
          >
            2026
          </p>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-7">
            <span className="w-8 h-px bg-[#e8a020]" />
            <span
              className="text-[0.65rem] uppercase tracking-[0.24em] text-[#e8a020]"
              style={sans(500)}
            >
              Independent Recognition
            </span>
          </div>
          <h1
            className="text-[4.5rem] sm:text-[6.5rem] md:text-[9rem] uppercase leading-[0.78] mb-10"
            style={serif(800)}
          >
            International Growth.
            <br />
            <span className="text-[#e8a020]">Award-Winning Expertise.</span>
          </h1>
          <div className="grid sm:grid-cols-[auto_1fr] gap-6 sm:gap-10 items-start max-w-2xl">
            <p
              className="text-6xl text-[#e8a020] leading-none"
              style={serif(800)}
            >
              02
            </p>
            <p
              className="text-base text-[#c4bfb8] leading-relaxed"
              style={sans(400)}
            >
              Two 2026 awards recognising We Are Globex for business consultancy
              and international manufacturing growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
