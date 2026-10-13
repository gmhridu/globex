import { GLOBAL_BRANDS_AWARD_STATS } from "@/constant/awards";
import { sans, serif } from "@/lib/utils";

export function StatsBand() {
  return (
    <section className="border-y border-[#2a2f3d] bg-[#151820]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3">
        {GLOBAL_BRANDS_AWARD_STATS.map((item) => (
          <div
            key={item.label}
            className="py-9 sm:px-8 border-b sm:border-b-0 sm:border-l border-[#2a2f3d] first:border-l-0 first:pl-0"
          >
            <p
              className="text-3xl md:text-4xl uppercase text-[#e8a020] leading-none mb-2"
              style={serif(800)}
            >
              {item.value}
            </p>
            <p
              className="text-[0.6rem] uppercase tracking-[0.2em] text-[#7a7f8e]"
              style={sans(500)}
            >
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
