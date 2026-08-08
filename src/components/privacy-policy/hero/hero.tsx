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
            Privacy
            <br />
            <span className="text-[#e8a020]">Policy.</span>
          </h1>
          <div>
            <p
              className="text-xs text-[#3a3f4d] uppercase tracking-widest mb-3"
              style={sans(500)}
            >
              Last Updated
            </p>
            <p className="text-base text-secondary-foreground" style={sans()}>
              September 22, 2024
            </p>
            <p
              className="text-sm text-muted-foreground leading-relaxed mt-4 max-w-sm"
              style={sans()}
            >
              We Are Globex is committed to protecting your personal data and
              being transparent about how we collect, use, and safeguard your
              information when you use our services.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
