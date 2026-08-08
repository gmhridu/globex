import { sans, serif } from "@/lib/utils";

const pillars = [
  {
    icon: "🏡",
    title: "Hospice Care",
    body: "Inpatient care for children with life-limiting conditions, giving families respite and expert support in a home-away-from-home environment.",
  },
  {
    icon: "🏠",
    title: "Home Support",
    body: "Specialist nurses visit families in their own homes — providing medical care, emotional support, and practical help when it matters most.",
  },
  {
    icon: "💛",
    title: "Bereavement Support",
    body: "Dedicated counselling and support for families before and after the death of a child — for as long as they need it.",
  },
  {
    icon: "🎨",
    title: "Wellbeing Programmes",
    body: "Music therapy, art therapy, hydrotherapy, and sibling support — enriching lives and creating lasting family memories.",
  },
];

export function WhatShootingStarDoes() {
  return (
    <section className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span
              className="w-6 h-px block mb-4"
              style={{ background: "#00b4c8" }}
            />
            <h2
              className="text-6xl md:text-7xl uppercase leading-none"
              style={serif()}
            >
              Serving
              <br />
              <span style={{ color: "#00b4c8" }}>Children</span>{" "}
              <span className="text-[#f0ede8]">&</span>
              <br />
              <span className="text-[#e8a020]">Families.</span>
            </h2>
          </div>
          <p
            className="text-sm text-muted-foreground max-w-xs leading-relaxed"
            style={sans()}
          >
            Shooting Star supports over 2,700 families a year across two
            hospices and community teams — from diagnosis through to end of
            life, and beyond.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="bg-card p-8 group hover:bg-secondary transition-colors duration-300"
            >
              <span className="text-3xl mb-5 group-hover:scale-110 transition-transform duration-200 inline-block">
                {p.icon}
              </span>
              <h3
                className="text-xl uppercase mb-3 group-hover:text-[#00b4c8] transition-colors"
                style={serif(700)}
              >
                {p.title}
              </h3>
              <p
                className="text-sm text-muted-foreground leading-relaxed"
                style={sans()}
              >
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
