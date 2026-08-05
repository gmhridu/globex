import { sans, serif } from "@/lib/utils";

export function ProductLaunch() {
  return (
    <section className="border-t border-border bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="py-16 px-8 lg:px-14 flex flex-col justify-center">
            <span className="w-6 h-px bg-[#e8a020] block mb-6" />
            <h2
              className="text-5xl md:text-6xl uppercase leading-none mb-8"
              style={serif()}
            >
              Private Label
              <br />
              <span className="text-[#e8a020]">Product Launch.</span>
            </h2>
            <p
              className="text-sm text-muted-foreground max-w-sm leading-relaxed mb-10"
              style={sans()}
            >
              We don't just make the introduction. We manage the full launch —
              from briefing and spec sign-off through to first delivery and
              reorder structure.
            </p>
            <div className="space-y-3">
              {[
                "Buyer brief translated into manufacturer specification",
                "Packaging design and compliance sign-off",
                "Pilot production and QA sign-off",
                "First delivery managed end-to-end",
                "Reorder framework and pricing review",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-[#e8a020] mt-0.5 text-xs shrink-0">
                    →
                  </span>
                  <span className="text-sm text-secondary-foreground" style={sans()}>
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Stacked product images */}
          <div className="grid grid-cols-2 gap-px">
            <div className="relative bg-[#080b10] aspect-square overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1647427060118-4911c9821b82?w=600&h=600&fit=crop&auto=format"
                alt="Factory with orange machines representing private label production"
                className="w-full h-full object-cover opacity-50 hover:opacity-65 transition-opacity duration-500"
              />
            </div>
            <div className="relative bg-[#0d0f14] aspect-square overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1730584476141-232435a40c32?w=600&h=600&fit=crop&auto=format"
                alt="Precision manufacturing welding"
                className="w-full h-full object-cover opacity-50 hover:opacity-65 transition-opacity duration-500"
              />
            </div>
            <div className="relative bg-[#0d0f14] aspect-square overflow-hidden col-span-2">
              <img
                src="https://images.unsplash.com/photo-1634638022845-1ab614a94128?w=800&h=400&fit=crop&auto=format"
                alt="Container ship representing private label export at scale"
                className="w-full h-full object-cover opacity-40 hover:opacity-55 transition-opacity duration-500"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <p
                  className="text-3xl md:text-4xl uppercase text-white text-center"
                  style={serif()}
                >
                  Supply at
                  <br />
                  <span className="text-[#e8a020]">Export Scale.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
