import { AWARD_IMAGES, AWARD_LINKS } from "@/constant/awards";
import { sans, serif } from "@/lib/utils";

export function AboutOrganisation() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
      <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
        {/* Framed Group Photo with Gold Corner Accent */}
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-28 h-28 border-l border-t border-[#e8a020]/50 pointer-events-none" />
          <img
            src={AWARD_IMAGES.groupPhoto}
            alt="Global Brand Awards winners gathered at the 2026 ceremony"
            className="relative w-full aspect-[3/2] object-cover"
          />
        </div>

        {/* Organisation Details */}
        <div>
          <p
            className="text-[0.65rem] uppercase tracking-[0.22em] text-[#e8a020] mb-5"
            style={sans(600)}
          >
            About the Organisation
          </p>
          <h2
            className="text-5xl md:text-7xl uppercase leading-[0.9] mb-7 text-[#f0ede8]"
            style={serif(800)}
          >
            Global Brands
            <br />
            <span className="text-[#e8a020]">Magazine.</span>
          </h2>
          <div
            className="space-y-5 text-sm text-[#c4bfb8] leading-relaxed"
            style={sans(400)}
          >
            <p>
              Global Brands Magazine is an international publication focused on
              brands, leadership, innovation, and performance across industries
              and markets worldwide.
            </p>
            <p>
              Its Global Brand Awards programme recognises organisations that
              demonstrate distinction in their field. Winners are selected
              through an independent assessment process designed to identify
              strong performance, customer trust, market presence, and sustained
              brand value.
            </p>
            <p>
              Being recognised alongside organisations from around the world
              places We Are Globex within a global community of businesses
              committed to raising standards in their sectors.
            </p>
          </div>
          <a
            href={AWARD_LINKS.globalBrandsMagazine}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-8 text-[0.65rem] uppercase tracking-widest text-[#e8a020] border-b border-[#e8a020]/40 pb-2 hover:text-[#f0b030] transition-colors"
            style={sans(600)}
          >
            Visit Global Brands Magazine ↗
          </a>
        </div>
      </div>
    </section>
  );
}
