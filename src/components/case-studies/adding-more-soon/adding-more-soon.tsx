import { sans, serif } from "@/lib/utils";

export function AddingMoreSoon() {
  return (
    <section className="border-t border-border py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p
            className="text-[0.65rem] uppercase tracking-widest text-[#e8a020] mb-2"
            style={sans(500)}
          >
            Ongoing
          </p>
          <h3
            className="text-3xl md:text-4xl uppercase leading-tight"
            style={serif()}
          >
            More Case Studies
            <br />
            <span className="text-[#3a3f4d]">Coming Soon.</span>
          </h3>
        </div>
        <p
          className="text-sm text-muted-foreground max-w-xs leading-relaxed"
          style={sans()}
        >
          We publish case studies as engagements conclude. Every new client adds
          to this record. Check back regularly — or speak to us directly.
        </p>
      </div>
    </section>
  );
}
