import { sans, serif } from "@/lib/utils";

export function Cta() {
  return (
    <section id="dh-contact" className="relative py-36 overflow-hidden">
      <div className="absolute inset-0 bg-[#080b10]">
        <img
          src="https://images.unsplash.com/photo-1634638026221-4c1c4cf9f881?w=1800&h=700&fit=crop&auto=format"
          alt="Container ship representing global distribution partnerships"
          className="w-full h-full object-cover opacity-25"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(13,15,20,0.92) 0%, rgba(13,15,20,0.65) 100%)",
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <span className="w-6 h-px bg-[#e8a020] block mx-auto mb-8" />
        <h2
          className="text-7xl md:text-[8rem] uppercase leading-none mb-6"
          style={serif()}
        >
          Build Strong
          <br />
          Distribution
          <br />
          <span className="text-[#e8a020]">Partnerships.</span>
        </h2>
        <p
          className="text-sm text-muted-foreground max-w-md mx-auto mb-12"
          style={sans()}
        >
          Book a direct entry review. We'll assess your product, identify the
          right markets, and tell you honestly what a realistic distribution
          outcome looks like.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:info@weareglobex.com"
            className="inline-block px-10 py-5 bg-[#e8a020] text-[#0d0f14] text-[0.7rem] uppercase tracking-widest hover:bg-[#f0b030] transition-colors"
            style={sans(600)}
          >
            Book a Direct Entry Review
          </a>
          <a
            href="mailto:info@weareglobex.com"
            className="inline-block px-10 py-5 border border-white/20 text-[#f0ede8] text-[0.7rem] uppercase tracking-widest hover:border-[#e8a020] hover:text-[#e8a020] transition-colors"
            style={sans(500)}
          >
            Request an Initial Entry Review →
          </a>
        </div>
      </div>
    </section>
  );
}
