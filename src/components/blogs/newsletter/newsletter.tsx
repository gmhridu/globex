import { sans, serif } from "@/lib/utils";

export function NewsLetter() {
  return (
    <section className="py-24 border-b border-border bg-card">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <span className="w-6 h-px bg-[#e8a020] block mx-auto mb-6" />
        <h2
          className="text-5xl md:text-6xl uppercase leading-none mb-4"
          style={serif()}
        >
          Stay Ahead of
          <br />
          <span className="text-[#e8a020]">the Market.</span>
        </h2>
        <p
          className="text-sm text-muted-foreground max-w-sm mx-auto mb-8"
          style={sans()}
        >
          Insights on export strategy, market intelligence, and trade trends —
          straight to your inbox. No noise.
        </p>
        <form
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            required
            placeholder="your@email.com"
            className="flex-1 bg-[#0d0f14] border border-border px-4 py-3 text-sm text-[#f0ede8] placeholder-[#3a3f4d] focus:border-[#e8a020] focus:outline-none transition-colors"
            style={sans()}
          />
          <button
            type="submit"
            className="px-8 py-3 bg-[#e8a020] text-[#0d0f14] text-[0.7rem] uppercase tracking-widest hover:bg-[#f0b030] transition-colors shrink-0"
            style={sans(600)}
          >
            Subscribe
          </button>
        </form>
        <p className="text-[0.6rem] text-border mt-4" style={sans()}>
          No spam. Unsubscribe any time.
        </p>
      </div>
    </section>
  );
}
