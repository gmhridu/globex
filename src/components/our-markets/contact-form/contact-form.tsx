import { sans, serif } from "@/lib/utils";

const contactDetails = [
  {
    icon: "✉️",
    label: "Email Us",
    value: "info@weareglobex.com",
    sub: "We respond within one business day.",
    href: "mailto:info@weareglobex.com",
  },
  {
    icon: "📞",
    label: "Call Us",
    value: "(+44) 203 829 9510",
    sub: "Mon – Fri, 9am – 5pm GMT.",
    href: "tel:+442038299510",
  },
  {
    icon: "📍",
    label: "Visit Us",
    value: "Victory Way Admirals Park, Dartford, Kent DA2 6QD",
    sub: "United Kingdom.",
    href: "https://maps.google.com",
  },
  {
    icon: "💼",
    label: "Follow Us on LinkedIn",
    value: "Linkedin",
    sub: "Updates, insights, and market news.",
    href: "https://www.linkedin.com/company/weareglobex",
  },
];

export function ContactForm() {
  return (
    <section className="border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left — contact details */}
          <div className="py-16 px-8 lg:px-14 flex flex-col justify-center border-r border-border">
            <span className="w-6 h-px bg-[#e8a020] block mb-6" />
            <h2
              className="text-5xl md:text-6xl uppercase leading-none mb-6"
              style={serif()}
            >
              Have
              <br />
              <span className="text-[#e8a020]">Questions?</span>
            </h2>
            <p
              className="text-sm text-muted-foreground leading-relaxed max-w-sm mb-12"
              style={sans()}
            >
              Whether you're a manufacturer looking to export, a distributor
              seeking new products, or a buyer exploring private label
              opportunities — we're ready to talk.
            </p>

            <div className="space-y-0">
              {contactDetails.map((c, i) => (
                <a
                  key={i}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex items-start gap-5 py-6 border-b border-border group last:border-0"
                >
                  <span className="text-xl mt-0.5 shrink-0">{c.icon}</span>
                  <div>
                    <p
                      className="text-[0.6rem] uppercase tracking-widest text-[#3a3f4d] mb-1"
                      style={sans(500)}
                    >
                      {c.label}
                    </p>
                    <p
                      className="text-base text-[#f0ede8] group-hover:text-[#e8a020] transition-colors mb-0.5"
                      style={sans(500)}
                    >
                      {c.value}
                    </p>
                    <p className="text-xs text-muted-foreground" style={sans()}>
                      {c.sub}
                    </p>
                  </div>
                  <span className="ml-auto text-border group-hover:text-[#e8a020] transition-colors self-center text-sm">
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right — office photo, bright contrast against dark site */}
          <div className="relative min-h-120 overflow-hidden bg-[#f5f0e8]">
            <img
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=900&h=700&fit=crop&auto=format"
              alt="Modern Globex office with large windows"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Subtle amber tint overlay to tie into brand palette */}
            <div className="absolute inset-0 bg-[#e8a020]/10" />
            <div className="absolute bottom-8 left-8">
              <div className="bg-[#0d0f14]/80 backdrop-blur-sm border border-border px-5 py-4">
                <p
                  className="text-xs font-semibold text-[#e8a020]"
                  style={sans(600)}
                >
                  Victory Way Admirals Park
                </p>
                <p
                  className="text-xs text-muted-foreground mt-0.5"
                  style={sans()}
                >
                  Dartford, Kent DA2 6QD · United Kingdom
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
