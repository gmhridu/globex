import { sans, serif } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export function TwoSolutions() {
  return (
    <section id="solutions" className="border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Distribution Hub */}
          <div className="relative overflow-hidden group p-12 lg:p-16 border-r border-border cursor-pointer">
            <Image
              src={
                "https://images.unsplash.com/photo-1647427060118-4911c9821b82?w=800&h=600&fit=crop&auto=format"
              }
              alt="Manufacturing production line"
              fill
              className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-18 transition-opacity duration-500"
            />

            <div className="relative">
              <div className="w-6 h-px bg-[#e8a020] mb-6" />
              <h2
                className="text-5xl lg:text-6xl uppercase leading-none mb-6"
                style={serif()}
              >
                Distribution
                <br />
                <span className="text-[#e8a020]">Hub</span>
              </h2>
              <p
                className="text-sm text-muted-foreground max-w-xs leading-relaxed mb-8"
                style={sans()}
              >
                We identify, qualify, and onboard distributors across Europe and
                the Middle East — then stay engaged until they're performing.
              </p>
              <Link
                href={"/the-distribution-hub"}
                className="inline-block text-[0.65rem] uppercase tracking-widest text-[#e8a020] border-b border-[#e8a020]/40 pb-0.5 group-hover:border-[#e8a020] transition-colors"
                style={sans(600)}
              >
                View Focus Markets →
              </Link>
            </div>
          </div>

          {/* Private Label Hub */}
          <div className="relative overflow-hidden group p-12 lg:p-16 cursor-pointer">
            <Image
              src="https://images.unsplash.com/photo-1717386255773-1e3037c81788?w=800&h=600&fit=crop&auto=format"
              alt="Industrial manufacturing facility"
              fill
              className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-18 transition-opacity duration-500"
            />
            <div className="relative">
              <div className="w-6 h-px bg-[#e8a020] mb-6" />
              <h2
                className="text-5xl lg:text-6xl uppercase leading-none mb-6"
                style={serif()}
              >
                Private Label
                <br />
                <span className="text-[#e8a020]">Hub</span>
              </h2>
              <p
                className="text-sm text-muted-foreground max-w-xs leading-relaxed mb-8"
                style={sans()}
              >
                We connect manufacturers with regional buyers seeking private
                label supply — and manage the commercial relationship from brief
                to first order.
              </p>
              <Link
                href={"/private-label-hub"}
                className="inline-block text-[0.65rem] uppercase tracking-widest text-[#e8a020] border-b border-[#e8a020]/40 pb-0.5 group-hover:border-[#e8a020] transition-colors"
                style={sans(600)}
              >
                View Our Approach →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
