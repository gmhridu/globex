import { sans, serif } from "@/lib/utils";

export function Cta() {
  return (
    <section id="pl-contact" className="relative py-36 overflow-hidden">
      <div className="absolute inset-0 bg-[#080b10]">
        <img
          src="https://images.unsplash.com/photo-1606964212858-c215029db704?w=1800&h=700&fit=crop&auto=format"
          alt="Shipping containers representing private label supply chain"
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
          Ready to Build
          <br />
          Your Private
          <br />
          <span className="text-[#e8a020]">Label Brand?</span>
        </h2>
        <p
          className="text-sm text-muted-foreground max-w-md mx-auto mb-12"
          style={sans()}
        >
          Tell us about your product and capacity. We'll tell you honestly if
          private label is the right route — and which buyers are most likely to
          move fast.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:info@weareglobex.com"
            className="inline-block px-10 py-5 bg-[#e8a020] text-[#0d0f14] text-[0.7rem] uppercase tracking-widest hover:bg-[#f0b030] transition-colors"
            style={sans(600)}
          >
            Start a Conversation
          </a>

        </div>
      </div>
    </section>
  );
}
