import { sans, serif } from "@/lib/utils";

export function InTheDrive() {
  return (
    <section className="py-24 border-t border-border bg-card">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="flex justify-center gap-4 mb-8">
          <span className="w-8 h-px bg-[#e8a020] self-center" />
          <span
            className="text-[0.65rem] uppercase tracking-[0.2em]"
            style={{ ...sans(500), color: "#00b4c8" }}
          >
            Why This Matters to Us
          </span>
          <span
            className="w-8 h-px self-center"
            style={{ background: "#00b4c8" }}
          />
        </div>
        <h2
          className="text-5xl md:text-6xl uppercase leading-none mb-8"
          style={serif()}
        >
          In the Drive
          <br />
          <span className="text-[#e8a020]">to Do More.</span>
        </h2>
        <p
          className="text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6"
          style={sans()}
        >
          At Globex, we believe that commercial success carries a
          responsibility. We are proud to direct a portion of every engagement
          towards causes that create genuine, lasting impact for families facing
          unimaginable challenges.
        </p>
        <p
          className="text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-12"
          style={sans()}
        >
          Shooting Star Children's Hospices represents everything we admire —
          precision, compassion, and an unrelenting commitment to the families
          they serve. We are honoured to stand alongside them.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.shootingstar.org.uk/donate"
            target="_blank"
            rel="noreferrer"
            className="inline-block px-10 py-5 text-[0.7rem] uppercase tracking-widest text-white hover:opacity-80 transition-opacity"
            style={{ ...sans(600), background: "#00b4c8" }}
          >
            Donate to Shooting Star
          </a>
          <a
            href="https://www.shootingstar.org.uk"
            target="_blank"
            rel="noreferrer"
            className="inline-block px-10 py-5 border text-[0.7rem] uppercase tracking-widest text-[#f0ede8] hover:border-[#e8a020] hover:text-[#e8a020] transition-colors"
            style={{ ...sans(500), borderColor: "rgba(255,255,255,0.2)" }}
          >
            Learn More →
          </a>
        </div>
      </div>
    </section>
  );
}
