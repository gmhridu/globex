import { AWARD_LINKS } from "@/constant/awards";
import { sans, serif } from "@/lib/utils";

export function EventFilms() {
  return (
    <section className="border-t border-[#2a2f3d]">
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
        <div className="grid lg:grid-cols-[0.55fr_1.45fr] gap-14 lg:gap-24">
          <div>
            <p
              className="text-[0.65rem] uppercase tracking-[0.22em] text-[#e8a020] mb-5"
              style={sans(600)}
            >
              Event Films
            </p>
            <h2
              className="text-5xl md:text-7xl uppercase leading-[0.9] text-[#f0ede8]"
              style={serif(800)}
            >
              Watch the
              <br />
              <span className="text-[#e8a020]">Story.</span>
            </h2>
          </div>
          <div className="overflow-hidden border border-[#2a2f3d] bg-[#151820]">
            <iframe
              className="block w-full aspect-video"
              src={AWARD_LINKS.videoEmbed}
              title="We Are Globex at the Global Brand Awards 2026"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
