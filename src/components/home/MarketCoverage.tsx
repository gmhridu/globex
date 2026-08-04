"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Globe,
  BarChart3,
  Users,
  Package,
  ShoppingCart,
  Handshake,
  ClipboardCheck,
  ArrowRight,
} from "lucide-react";

const marketRegions = [
  {
    icon: "/icons/By_Page/Homepage/europe-market.svg",
    fallbackIcon: Globe,
    title: "EUROPE",
    description: "Broad coverage across Western, Central and Eastern Europe.",
    linkText: "View Focus Markets",
    linkHref: "/our-markets",
  },
  {
    icon: "/icons/By_Page/Homepage/gcc-middle-east-market.svg",
    fallbackIcon: Globe,
    title: "GCC / MIDDLE EAST",
    description: "Deep access across GCC and key Middle East markets.",
    linkText: "View Focus Markets",
    linkHref: "/our-markets",
  },
  {
    icon: "/icons/By_Page/Homepage/hero-reporting-visibility.svg",
    fallbackIcon: BarChart3,
    title: "MARKET PRIORITISATION",
    description: "Data-led prioritisation to focus on the right markets first.",
    linkText: "View Our Approach",
    linkHref: "/the-distribution-hub",
  },
];

const commercialRoutes = [
  {
    icon: Users,
    title: "Master Distributor",
    description:
      "Deepened partners with scale, infrastructure and proven market reach.",
  },
  {
    icon: Users,
    title: "Cloclet Distributor",
    description:
      "Local distribution partners with deep market access and execution.",
  },
  {
    icon: Package,
    title: "Importer",
    description:
      "Experienced importers ensuring compliance, logistics and clearance.",
  },
  {
    icon: ShoppingCart,
    title: "Retail Buyer",
    description:
      "Connections to leading retailers and modern trade across key markets.",
  },
  {
    icon: Handshake,
    title: "Strategic Account",
    description:
      "B2B and institutional accounts for long-term, value-driven partnerships.",
  },
  {
    icon: ClipboardCheck,
    title: "Private Label Buyer",
    description:
      "Private label and OEM opportunities with trusted retail and brand partners.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export default function MarketCoverage() {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      {/* Section 1: Market Coverage */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
            Europe & Middle East Market Coverage
          </h2>

          <div className="rounded-2xl border border-primary/20 p-6 lg:p-8">
            {/* Title */}

            <div className="flex flex-col lg:flex-row items-center">
              {/* Left */}
              <div className="w-full lg:w-1/2">
                <Image
                  src="/assests/home/disruptor-map.png"
                  alt="Map"
                  width={900}
                  height={700}
                  className="w-full h-auto object-contain"
                />
              </div>

              {/* Right */}
              <div className="w-full lg:w-1/2">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                  {marketRegions.map((region) => (
                    <div
                      key={region.title}
                      className="bg-dark-800 border border-primary/20  p-6 flex flex-col h-[405.1px]"
                    >
                      {/* Icon */}
                      <div className="w-14 h-14 mb-6 flex items-center justify-start">
                        <Image
                          src={region.icon}
                          alt={region.title}
                          width={56}
                          height={56}
                          className="object-contain"
                        />
                      </div>

                      {/* Title */}
                      <h3 className="text-primary text-lg font-semibold uppercase leading-tight mb-4">
                        {region.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-300 text-[14px] flex-1 mb-8">
                        {region.description}
                      </p>

                      {/* Divider */}
                      <div className="w-20 h-px bg-primary/40 mb-6" />

                      {/* Link */}
                      <Link
                        href={region.linkHref}
                        className="inline-flex items-center gap-3 text-primary text-base font-medium transition-all text-nowrap duration-300 hover:gap-4"
                      >
                        <span>{region.linkText}</span>
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="bg-dark-900">
        <div className="container mx-auto px-4">
          <div className="h-px bg-primary/20" />
        </div>
      </div>

      {/* Section 2: Commercial Routes We Build */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Commercial Routes We Build
            </h2>
          </div>

          {/* Routes Grid */}
          <motion.div
            ref={ref2}
            initial="hidden"
            animate={inView2 ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-0"
          >
            {commercialRoutes.map((route) => {
              const Icon = route.icon;
              return (
                <motion.div
                  key={route.title}
                  variants={fadeInUp}
                  className="bg-dark-800 border border-primary/20 p-5 lg:p-6 text-center flex flex-col items-center h-full"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 mb-4 flex items-center justify-center">
                    <Icon className="w-12 h-12 text-primary stroke-[1.2]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-white text-base font-semibold mb-3 leading-snug">
                    {route.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {route.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
}
