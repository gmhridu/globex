"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Globe,
  Users,
  Handshake,
  Target,
  UserCheck,
  TrendingUp,
  BarChart3,
  Clock,
  ArrowRight,
  Mail,
  FileText,
  CalendarCheck,
  LineChart,
} from "lucide-react";

const whatWeDoSteps = [
  {
    number: "01",
    icon: Globe,
    title: "Market Intelligence",
    description:
      "Deep research on markets, channels, and competitive landscape.",
  },
  {
    number: "02",
    icon: Users,
    title: "Market Prioritisation",
    description:
      "We locate and rate markets and channels with the highest potential fit.",
  },
  {
    number: "03",
    icon: UserCheck,
    title: "Distributor & Buyer Mapping",
    description:
      "Identify and map the right partners with reach, capability, and alignment.",
  },
  {
    number: "04",
    icon: Target,
    title: "Targeted Outreach",
    description:
      "We introduce your value through tailored messaging to decision-makers.",
  },
  {
    number: "05",
    icon: Handshake,
    title: "Qualification & Alignment",
    description:
      "We qualify interest, capability, and commercial terms on both sides.",
  },
  {
    number: "06",
    icon: TrendingUp,
    title: "Commercial Follow-Through",
    description:
      "We support meetings, negotiation, and next steps to move opportunities forward.",
  },
];

const howItWorksSteps = [
  {
    number: 1,
    icon: LineChart,
    title: "Commercial Fit Review",
    description:
      "We assess your product, market readiness and commercial objectives.",
    timeline: "1–2 WEEKS",
  },
  {
    number: 2,
    icon: Target,
    title: "Market & Channel Prioritisation",
    description:
      "We identify the right markets and channels with the strongest fit.",
    timeline: "1–3 WEEKS",
  },
  {
    number: 3,
    icon: Users,
    title: "Distributor & Buyer Mapping",
    description:
      "We map and qualify distributors and buyers that match your goals.",
    timeline: "2–4 WEEKS",
  },
  {
    number: 4,
    icon: Mail,
    title: "Outreach & Qualification",
    description:
      "We engage, qualify and validate interest and commercial terms.",
    timeline: "2–4 WEEKS",
  },
  {
    number: 5,
    icon: CalendarCheck,
    title: "Introductions & Meetings",
    description:
      "We introduce you to pre-qualified partners and facilitate meetings.",
    timeline: "2–6 WEEKS",
  },
  {
    number: 6,
    icon: FileText,
    title: "Appointment & PO Support",
    description:
      "We support negotiations, agreements, and initial POs to accelerate start.",
    timeline: "2–8 WEEKS",
  },
];

const summaryBoxes = [
  {
    icon: Globe,
    title: "WHAT GLOBEX DOES",
    description:
      "Strategy, research, mapping, outreach, introductions and deal support.",
  },
  {
    icon: Users,
    title: "WHAT YOU PROVIDE",
    description:
      "Product details, pricing guidance, sample availability and alignment.",
  },
  {
    icon: BarChart3,
    title: "WHAT YOU RECEIVE",
    description:
      "Qualified partners, sales opportunities and market access that scales.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function DistributorProcess() {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <>
      {/* Section 1: What Globex Actually Does */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              What Globex Actually Does
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
              Distributor Development, Not Database Delivery.
            </h2>
            <p className="text-gray-500 text-base sm:text-lg max-w-3xl mx-auto">
              We identify suitable organisations, approach decision-makers,
              qualify commercial fit, and support the opportunity after the
              introduction.
            </p>
          </div>

          {/* Steps Grid */}
          <motion.div
            ref={ref1}
            variants={containerVariants}
            initial="hidden"
            animate={inView1 ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 lg:gap-0"
          >
            {whatWeDoSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  variants={itemVariants}
                  className="relative group"
                >
                  <div className="relative bg-dark-800 border border-primary/20 p-5 lg:p-6 h-full transition-all duration-300 hover:border-primary/50">
                    {/* Number */}
                    <span className="text-primary text-sm font-bold tracking-wider">
                      {step.number}
                    </span>

                    {/* Icon */}
                    <div className="my-4">
                      <Icon className="w-10 h-10 text-primary stroke-[1.5]" />
                    </div>

                    {/* Title */}
                    <h3 className="text-white text-lg font-semibold mb-3 leading-snug">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow between cards (hidden on mobile and last item) */}
                  {index < whatWeDoSteps.length - 1 && (
                    <div className="hidden lg:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 items-center justify-center">
                      <ArrowRight className="w-5 h-5 text-primary" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="bg-dark-900">
        <div className="container mx-auto px-4">
          <div className="h-px bg-primary/20" />
        </div>
      </div>

      {/* Section 2: How It Works */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <p className="text-primary text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] mb-4">
              How It Works
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              A Proven Process. Global Results.
            </h2>
          </div>

          {/* Timeline Steps */}
          <motion.div
            ref={ref2}
            variants={containerVariants}
            initial="hidden"
            animate={inView2 ? "visible" : "hidden"}
            className="relative"
          >
            {/* Timeline Line (desktop only) */}
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-primary/30" />

            {/* Steps Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-0">
              {howItWorksSteps.map((step) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.number}
                    variants={itemVariants}
                    className="relative"
                  >
                    {/* Circle Number (desktop) */}
                    <div className="hidden lg:flex absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full border-2 border-primary bg-dark-900 items-center justify-center z-10">
                      <span className="text-primary text-sm font-bold">
                        {step.number}
                      </span>
                    </div>

                    {/* Card Content */}
                    <div className="bg-dark-800 border border-primary/20 p-5 lg:p-6 lg:pt-12 h-full transition-all duration-300 hover:border-primary/50">
                      {/* Circle Number (mobile) */}
                      <div className="lg:hidden flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-full border-2 border-primary flex items-center justify-center shrink-0">
                          <span className="text-primary text-sm font-bold">
                            {step.number}
                          </span>
                        </div>
                      </div>

                      {/* Icon */}
                      <div className="mb-4">
                        <Icon className="w-10 h-10 text-primary stroke-[1.5]" />
                      </div>

                      {/* Title */}
                      <h3 className="text-white text-lg font-semibold mb-3 leading-snug">
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-400 text-sm leading-relaxed mb-4">
                        {step.description}
                      </p>

                      {/* Timeline Badge */}
                      <div className="flex items-center gap-2 text-primary">
                        <Clock className="w-4 h-4" />
                        <span className="text-xs font-bold uppercase tracking-wider">
                          {step.timeline}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <div className="bg-dark-900">
        <div className="container mx-auto px-4">
          <div className="h-px bg-primary/20" />
        </div>
      </div>

      {/* Section 3: Summary Boxes */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            ref={ref3}
            variants={containerVariants}
            initial="hidden"
            animate={inView3 ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {summaryBoxes.map((box) => {
              const Icon = box.icon;
              return (
                <motion.div
                  key={box.title}
                  variants={itemVariants}
                  className="bg-dark-800 border border-primary/20 p-6 lg:p-8 transition-all duration-300 hover:border-primary/50"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0">
                      <Icon className="w-10 h-10 text-primary stroke-[1.5]" />
                    </div>
                    <div>
                      <h3 className="text-primary text-sm font-bold uppercase tracking-wider mb-2">
                        {box.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {box.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
    </>
  );
}
