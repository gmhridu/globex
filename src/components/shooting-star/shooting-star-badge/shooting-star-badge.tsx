import { sans } from "@/lib/utils";

export function ShootingStarBadge() {
  return (
    <section className="py-20 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        <div>
          <span className="w-6 h-px bg-[#e8a020] block mb-4" />
          <p
            className="text-sm text-muted-foreground max-w-sm leading-relaxed"
            style={sans()}
          >
            To learn more about Shooting Star Children's Hospices or to make a
            donation, visit{" "}
            <a
              href="https://www.shootingstar.org.uk"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:opacity-80 transition-opacity"
              style={{ color: "#00b4c8" }}
            >
              www.shootingstar.org.uk
            </a>
          </p>
        </div>

        {/* Badge */}
        <div className="shrink-0 flex items-center gap-6 px-8 py-6 border border-border bg-card">
          <div className="text-4xl">⭐</div>
          <div>
            <div
              className="text-[0.55rem] uppercase tracking-widest mb-1"
              style={{ ...sans(600), color: "#00b4c8" }}
            >
              Supporting
            </div>
            <div
              className="text-lg font-bold text-[#f0ede8]"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 700 }}
            >
              Shooting Star
            </div>
            <div
              className="text-xs text-muted-foreground tracking-widest uppercase"
              style={sans()}
            >
              children's hospices
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
