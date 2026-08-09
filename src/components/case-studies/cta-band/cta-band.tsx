import { sans, serif } from "@/lib/utils";

export function CtaBand() {
  return (
    <section className="border-t border-border overflow-hidden relative">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1800&h=500&fit=crop&auto=format"
          alt="Strategic business planning"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-[#0d0f14]/80" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 py-24 text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="w-6 h-px bg-[#e8a020]" />
          <span
            className="text-[0.65rem] uppercase tracking-[0.22em] text-[#e8a020]"
            style={sans(500)}
          >
            Get Started
          </span>
          <span className="w-6 h-px bg-[#e8a020]" />
        </div>
        <h2
          className="text-[3.5rem] md:text-[5.5rem] uppercase leading-[0.9] mb-6"
          style={serif()}
        >
          Your Results
          <br />
          <span className="text-[#e8a020]">Belong Here.</span>
        </h2>
        <p
          className="text-muted-foreground text-sm max-w-md mx-auto leading-relaxed mb-10"
          style={sans()}
        >
          Every case study on this page started with a single conversation. Tell
          us your product and your target — we'll tell you what's realistic.
        </p>
      </div>
    </section>
  );
}
