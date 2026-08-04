"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Compass,
  UserCheck,
  Globe,
  RotateCcw,
  Target,
  BarChart3,
  CheckCircle2,
  MapPin,
  Users,
  DollarSign,
  ArrowUpRight,
  Factory,
} from "lucide-react";

const features = [
  {
    icon: Compass,
    title: "Execution Over Advice",
    description:
      "We roll up our sleeves and deliver hands-on support from strategy to market entry.",
  },
  {
    icon: UserCheck,
    title: "Mariner Qualification",
    description:
      "We pre-qualify trusted distributors, importers and partners to reduce risk and save time.",
  },
  {
    icon: Globe,
    title: "Europe & Middle East Focus",
    description:
      "Deep expertise and connections across key markets in Europe and the Middle East.",
  },
  {
    icon: RotateCcw,
    title: "Ongoing Follow-Through",
    description:
      "We stay engaged throughout the process to ensure momentum and results.",
  },
  {
    icon: Target,
    title: "Selective Intake",
    description:
      "We take on a limited number of clients to deliver senior attention and real outcomes.",
  },
  {
    icon: BarChart3,
    title: "Reporting Transparency",
    description:
      "Clear reporting and visibility at every stage so you always know what\u2019s next.",
  },
];

const approachItems = [
  "Market & competitor assessment across DACH & Benelux",
  "Identified and pre-qualified distribution partners",
  "Introduced through targeted executive meetings",
  "Negotiated commercial terms and launch plan",
  "Ongoing support through onboarding and first orders",
];

const stats = [
  {
    icon: Globe,
    label: "TARGET MARKETS",
    value: "Germany, Netherlands, Belgium, UAE",
    isText: true,
  },
  {
    icon: Users,
    label: "MEETINGS GENERATED",
    value: "17",
    subtitle: "Qualified Executive Meetings",
  },
  {
    icon: DollarSign,
    label: "PIPELINE CREATED",
    value: "$3.4M",
    subtitle: "In Qualified Opportunities",
  },
  {
    icon: ArrowUpRight,
    label: "NEXT STEP",
    value: "Partner onboarding and launch in Q2",
    isText: true,
  },
];

const targetMarkets = [
  "Europe & Middle East Focus",
  "Deep expertise and connections across key markets",
  "DACH & Benelux regions",
  "Compliance-driven market entry",
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export default function ExecutionOverAdvice() {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      {/* Section 1: Execution Over Advice */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              How It Works
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-900 mb-4">
              Execution Over Advice.
            </h2>
          </div>

          {/* Features Grid */}
          <motion.div
            ref={ref1}
            initial="hidden"
            animate={inView1 ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 lg:gap-0"
          >
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  variants={fadeInUp}
                  className="bg-white border border-primary/30 p-5 lg:p-6 flex flex-col items-center text-center h-full"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 mb-4 flex items-center justify-center">
                    <Icon className="w-12 h-12 text-primary stroke-[1.2]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-dark-900 text-base font-semibold mb-3 leading-snug">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="bg-white">
        <div className="container mx-auto px-4">
          <div className="h-px bg-gray-200" />
        </div>
      </div>

      {/* Section 2: Featured Case Study */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-10 lg:mb-14">
            <p className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              Featured Case Study / Results
            </p>
            <h2 className="text-3xl sm:text-4xl  font-bold text-dark-900 mb-4">
              Proven Results for North American Manufacturers.
            </h2>
          </div>

          <motion.div
            ref={ref2}
            initial="hidden"
            animate={inView2 ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {/* Column 1: Image */}
            <motion.div
              variants={fadeInUp}
              className="relative rounded-lg overflow-hidden aspect-4/3"
            >
              <Image
                src="/assests/industries/manufacturing/hero.webp"
                alt="Industrial manufacturing facility"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              {/* Overlay Label */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark-900/90 to-transparent px-5 py-4">
                <div className="flex items-center gap-3">
                  <Factory className="w-7 h-7 text-primary" />
                  <div>
                    <p className="text-white text-xs font-bold uppercase tracking-wider">
                      Industrial Components Manufacturer
                    </p>
                    <p className="text-primary text-xs">Midwest, USA</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Column 2: The Challenge */}
            <motion.div
              variants={fadeInUp}
              className="bg-gray-50 border border-gray-100 rounded-lg p-6 lg:p-8 flex flex-col justify-center"
            >
              <div>
                <h3 className="text-dark-900 text-lg font-bold uppercase tracking-wider mb-3">
                  The Challenge
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Needed to enter Europe with a compliance-driven component and
                  build a channel without the infrastructure or local presence.
                </p>
              </div>
            </motion.div>

            {/* Column 3: Target Market / Stats */}
            <motion.div
              variants={fadeInUp}
              className="bg-gray-50 border border-gray-100 rounded-lg p-6 lg:p-8 flex flex-col justify-center"
            >
              <div>
                <h3 className="text-dark-900 text-lg font-bold uppercase tracking-wider mb-4">
                  Target Market
                </h3>
                <ul className="space-y-3">
                  {targetMarkets.map((market, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-gray-500 text-sm leading-relaxed">
                        {market}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>

          {/* Optional: Approach section below */}
          <motion.div
            variants={fadeInUp}
            className="mt-6 bg-gray-50 border border-gray-100 rounded-lg p-6 lg:p-8"
          >
            <h3 className="text-dark-900 text-lg font-bold uppercase tracking-wider mb-4">
              Our Approach
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {approachItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-gray-500 text-sm leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>
    </>
  );
}
