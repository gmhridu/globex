"use client";

import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center text-center">
      {/* Background Image with Dark Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/assests/home/hero.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/60" /> {/* Overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6">
        <p className="uppercase tracking-[4px] text-sm text-gray-200 mb-4">
          Service
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
          Join Our Global Distributor <br />
          <span className="text-white">Network</span>
        </h1>
        <p className="text-base md:text-md text-gray-200 mt-6 leading-relaxed">
          At Globex, we actively invite distributors to join our platform and
          tell us what products they’re looking for in their markets. Whether
          you’re expanding your catalog or searching for unique, high-demand
          products, we’ll connect you with the right manufacturing partners
          ready to support your growth.
        </p>

        {/* CTA Button */}
        <div className="mt-10">
          <Link
            href="/contact"
            className="bg-yellow-400 text-black font-semibold px-8 py-3 rounded-full text-lg hover:bg-yellow-500 transition-all shadow-lg"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
