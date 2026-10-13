import { AWARD_IMAGES, AWARD_LINKS } from "@/constant/awards";
import { sans, serif } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-end pt-32 pb-16 md:pb-24 overflow-hidden">
      {/* Background Dubai skyline image */}
      <img
        src={AWARD_IMAGES.dubaiHero}
        alt="Dubai skyline with the Burj Khalifa at golden hour"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-55"
      />

      {/* Atmospheric dark gradient overlays */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(13,15,20,0.98) 0%, rgba(13,15,20,0.88) 44%, rgba(13,15,20,0.32) 76%, rgba(13,15,20,0.58) 100%), linear-gradient(0deg, rgba(13,15,20,0.92) 0%, transparent 50%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-7">
            <span className="w-8 h-px bg-[#e8a020]" />
            <span
              className="text-[0.65rem] uppercase tracking-[0.24em] text-[#e8a020]"
              style={sans(600)}
            >
              Global Brands Magazine · Global Brand Awards 2026
            </span>
          </div>

          <h1
            className="text-[4rem] sm:text-[5.5rem] md:text-[7.5rem] uppercase leading-[0.82] mb-8 text-[#f0ede8]"
            style={serif(800)}
          >
            International
            <br />
            Manufacturing Growth
            <br />
            <span className="text-[#e8a020]">Partner of the Year.</span>
          </h1>

          <p
            className="text-base md:text-lg text-[#c4bfb8] leading-relaxed max-w-2xl mb-10"
            style={sans(400)}
          >
            International recognition for building sustainable distributor,
            buyer, and private-label relationships that help manufacturers grow
            beyond their home markets.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href={AWARD_LINKS.officialWinnerPage}
              target="_blank"
              rel="noreferrer"
              className="px-7 py-4 bg-[#e8a020] text-[#0d0f14] text-[0.65rem] uppercase tracking-widest hover:bg-[#f0b030] transition-colors inline-block"
              style={sans(600)}
            >
              View Official Recognition ↗
            </a>
            <a
              href="#event"
              className="px-7 py-4 border border-white/20 text-[#f0ede8] text-[0.65rem] uppercase tracking-widest hover:border-[#e8a020] hover:text-[#e8a020] transition-colors inline-block"
              style={sans(500)}
            >
              See the Event
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
