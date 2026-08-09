import { sans, serif } from "@/lib/utils";

const whyItems = [
  {
    n: "01",
    title: "Higher Margins",
    body: "Private label commands better margins than branded commodity supply. We help manufacturers access that premium.",
  },
  {
    n: "02",
    title: "Brand Control",
    body: "Buyers own the brand. Manufacturers own the relationship. We structure it so both sides win long-term.",
  },
  {
    n: "03",
    title: "Lower Risk Entry",
    body: "No marketing spend. No brand building from scratch. You supply — the buyer activates.",
  },
  {
    n: "04",
    title: "Scalability",
    body: "One private label relationship can grow into multi-SKU, multi-territory supply. We structure for that from day one.",
  },
];

export function WhyPrivateLabel() {
  return (
    <section
      id="pl-why-private-label"
      className="border-t border-border overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Image */}
          <div className="relative min-h-120 bg-[#080b10]">
            <img
              src="https://images.unsplash.com/photo-1717386255773-1e3037c81788?w=900&h=700&fit=crop&auto=format"
              alt="Large industrial manufacturing facility"
              className="absolute inset-0 w-full h-full object-cover opacity-55"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, transparent 50%, rgba(13,15,20,0.95) 100%)",
              }}
            />
            <div className="absolute bottom-8 left-8">
              <div className="text-5xl text-[#e8a020]" style={serif()}>
                340+
              </div>
              <div
                className="text-[0.65rem] uppercase tracking-widest text-muted-foreground mt-1"
                style={sans(500)}
              >
                Manufacturers Served
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="py-16 px-8 lg:px-14 flex flex-col justify-center">
            <span className="w-6 h-px bg-[#e8a020] block mb-6" />
            <h2
              className="text-5xl md:text-6xl uppercase leading-none mb-12"
              style={serif()}
            >
              Why We
              <br />
              <span className="text-[#e8a020]">Champion This.</span>
            </h2>

            <div className="space-y-0">
              {whyItems.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-6 py-7 border-b border-border last:border-0"
                >
                  <span
                    className="text-[#e8a020]/30 text-4xl shrink-0 w-10"
                    style={serif(700)}
                  >
                    {item.n}
                  </span>
                  <div>
                    <h3
                      className="text-xl uppercase mb-2 text-[#f0ede8]"
                      style={serif(700)}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-sm text-muted-foreground leading-relaxed"
                      style={sans()}
                    >
                      {item.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
