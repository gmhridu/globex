import { sans, serif } from "@/lib/utils";

export function Hero() {
  return (
    <header className="border-b border-border pt-28 pb-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-5">
          <span className="w-6 h-px bg-[#e8a020]" />
          <span
            className="text-[0.65rem] uppercase tracking-[0.22em] text-[#e8a020]"
            style={sans(500)}
          >
            Legal
          </span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
          <h1
            className="text-[4rem] md:text-[6rem] leading-[0.88] uppercase"
            style={serif()}
          >
            GDPR
            <br />
            <span className="text-[#e8a020]">Statement.</span>
          </h1>
          <div>
            <p
              className="text-xs text-[#3a3f4d] uppercase tracking-widest mb-3"
              style={sans(500)}
            >
              Last Updated
            </p>
            <p className="text-base text-secondary-foreground" style={sans()}>
              August 8, 2026
            </p>
            <p
              className="text-sm text-muted-foreground leading-relaxed mt-4 max-w-sm"
              style={sans()}
            >
              We Are Globex Ltd is committed to full compliance with the UK
              General Data Protection Regulation (UK GDPR) and the EU General
              Data Protection Regulation (EU GDPR). This statement explains how
              we meet our obligations.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
