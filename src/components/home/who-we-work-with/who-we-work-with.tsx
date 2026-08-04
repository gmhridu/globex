import { sans, serif } from "@/lib/utils";

export function WhoWeWorkWith() {
  return (
    <section className="py-24 border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">

            <div>
              <span className="w-6 h-px bg-[#e8a020] block mb-6" />
              <h2 className="text-5xl uppercase leading-none mb-10" style={serif()}>
                Who We<br /><span className="text-[#e8a020]">Work With</span>
              </h2>
              <div className="space-y-4">
                {[
                  { label: 'SME Manufacturers', desc: 'Proven domestic product and sales record' },
                  { label: 'Europe & Middle East Focus', desc: 'You want distribution in these specific regions' },
                  { label: 'Growers to Growth', desc: 'You have budget and intent for international markets' },
                  { label: 'Will to Invest', desc: 'You can support new distribution with time and resources' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 py-5 border-b border-border">
                    <span className="text-[#e8a020] mt-1 text-xs shrink-0">→</span>
                    <div>
                      <p className="text-sm font-medium text-[#f0ede8] mb-1" style={sans(600)}>{item.label}</p>
                      <p className="text-sm text-muted-foreground" style={sans()}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span className="w-6 h-px bg-[#e8a020] block mb-6" />
              <h2 className="text-5xl uppercase leading-none mb-10" style={serif()}>
                What You<br /><span className="text-[#e8a020]">Need to Be Ready</span>
              </h2>
              <div className="space-y-4">
                {[
                  'Confirmed product specification and unit economics',
                  'Capacity for international orders and lead times',
                  'Agreement on target territories you want to pursue',
                  'Internal decision-maker engaged throughout',
                  'Marketing collateral, sales deck, and product samples',
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 py-5 border-b border-border">
                    <span className="text-[#e8a020] mt-0.5 text-xs shrink-0">✓</span>
                    <p className="text-sm text-secondary-foreground" style={sans()}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
