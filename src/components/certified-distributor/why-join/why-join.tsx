import { sans, serif } from "@/lib/utils";

export function WhyJoin() {
  return (
    <section
      id="cd-why-join"
      className="border-t border-border overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image */}
          <div className="relative min-h-125 bg-[#080b10]">
            <img
              src="https://images.unsplash.com/photo-1684610529682-553625a1ffed?w=900&h=700&fit=crop&auto=format"
              alt="Global network connections representing the Globex distributor network"
              className="absolute inset-0 w-full h-full object-cover opacity-50"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, transparent 40%, rgba(13,15,20,0.9) 100%)",
              }}
            />
            <div className="absolute bottom-8 left-8">
              <div className="text-5xl text-[#e8a020]" style={serif()}>
                47
              </div>
              <div
                className="text-[0.65rem] uppercase tracking-widest text-muted-foreground mt-1"
                style={sans(500)}
              >
                Markets Across Europe & Middle East
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="py-16 px-8 lg:px-14 flex flex-col justify-center">
            <span className="w-6 h-px bg-[#e8a020] block mb-6" />
            <h2
              className="text-5xl md:text-6xl uppercase leading-none mb-8"
              style={serif()}
            >
              Why Join the
              <br />
              <span className="text-[#e8a020]">
                Globex Distribution
                <br />
                Network?
              </span>
            </h2>
            <p
              className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-sm"
              style={sans()}
            >
              The Globex network is open to trusted distributors who understand
              their local markets and are seeking new, high-quality products and
              international recognition designed to help your business grow.
            </p>
            <p
              className="text-sm text-muted-foreground leading-relaxed mb-10 max-w-sm"
              style={sans()}
            >
              We don't just connect you to manufacturers — we support the
              relationship from first introduction to active trading, so both
              sides win long-term.
            </p>
            <a
              href="#cd-apply"
              className="inline-block w-fit px-8 py-4 bg-[#e8a020] text-[#0d0f14] text-[0.7rem] uppercase tracking-widest hover:bg-[#f0b030] transition-colors"
              style={sans(600)}
            >
              I Want More Information →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
