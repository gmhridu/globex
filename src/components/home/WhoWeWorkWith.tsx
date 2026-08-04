"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Factory,
  Shield,
  Handshake,
  TrendingUp,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

const whoWeWorkWith = [
  {
    icon: Factory,
    title: "DELLA MANUFACTURERS FIT",
    description: "Manufacturers with a proven product and market demand.",
  },
  {
    icon: Shield,
    title: "EUROPE AND MIDDLE EAST FOCUS",
    description: "Companies ready for European and Middle Eastern markets.",
  },
  {
    icon: Handshake,
    title: "DEDICATED TO GROWTH",
    description: "Dedicated to long-term international partnerships.",
  },
  {
    icon: TrendingUp,
    title: "WILLINGNESS TO INVEST",
    description:
      "Willingness to invest in market entry and partner development.",
  },
];

const whatNeedsToBeReady = [
  "Clear product information and commercial terms.",
  "Samples or demo units available.",
  "Alignment on target markets and go-to-market routes.",
  "Internal decision-maker engagement confirmed.",
];

const faqs = [
  {
    question: "Which markets do you cover?",
    answer:
      "We focus on Europe and the Middle East, with deep coverage across Western, Central, and Eastern Europe as well as GCC and key Middle Eastern markets.",
  },
  {
    question: "How is Globex different from a sales agent?",
    answer:
      "Unlike sales agents, we provide comprehensive market entry support including distributor identification, qualification, negotiation support, and ongoing partnership management.",
  },
  {
    question: "What types of companies do you work with?",
    answer:
      "We work with manufacturers and brands looking to expand into European and Middle Eastern markets, particularly those with proven products and commercial readiness.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Initial market assessments typically take 2-4 weeks, with distributor introductions and meetings occurring within 4-8 weeks. Full market entry support spans 3-6 months.",
  },
  {
    question: "What are the costs involved?",
    answer:
      "We offer flexible engagement models tailored to your needs. Contact us for a consultation to discuss pricing based on your specific market entry requirements.",
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
    transition: { staggerChildren: 0.1 },
  },
};

export default function WhoWeWorkWith() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      {/* Section 1: Three Column Info */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            ref={ref1}
            initial="hidden"
            animate={inView1 ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12"
          >
            {/* Column 1: Who We Work With */}
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl lg:text-4xl font-bold mb-8">
                <span className="text-primary">Who</span>{" "}
                <span className="">We Work With</span>
              </h2>
              <div className="space-y-6">
                {whoWeWorkWith.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="w-10 h-10 flex items-center justify-center shrink-0">
                        <Icon className="w-8 h-8 text-primary stroke-[1.2]" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider mb-1">
                          {item.title}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Column 2: What Needs to Be Ready */}
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl lg:text-4xl font-bold mb-8">
                <span className="text-primary">What</span>{" "}
                <span className="">Needs to Be Ready</span>
              </h2>
              <div className="space-y-6">
                {whatNeedsToBeReady.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Column 3: FAQ */}
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl lg:text-4xl font-bold mb-8">
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border border-gray-500 rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() =>
                        setOpenFaq(openFaq === index ? null : index)
                      }
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-white/5 transition-colors"
                    >
                      <span className="text-sm font-medium pr-4">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-primary shrink-0 transition-transform duration-300 ${
                          openFaq === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openFaq === index ? "max-h-40" : "max-h-0"
                      }`}
                    >
                      <p className="px-4 pb-4 text-gray-500 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 2: CTA with Map Background */}
      <section className="relative bg-dark-900 py-16 lg:py-24 overflow-hidden">
        {/* Background Map Image */}
        <div className="absolute inset-0">
          <Image
            src="/assests/home/disruptor-map.png"
            alt="Global network map"
            fill
            className="object-cover opacity-40"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-linear-to-r from-dark-900 via-dark-900/90 to-dark-900/70" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            ref={ref2}
            initial="hidden"
            animate={inView2 ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
          >
            {/* Left: Text */}
            <motion.div variants={fadeInUp}>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Let&apos;s Build Your Next Market
                <span className="text-primary">—Together.</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
                We&apos;ll assess your product, distribution and expansion
                potential and map the fastest path to market.
              </p>
            </motion.div>

            {/* Right: Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row lg:flex-col gap-4 lg:items-end"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-primary text-dark-900 font-semibold px-8 py-4 rounded-full text-sm hover:bg-white transition-colors duration-300 w-fit"
              >
                Book a Market Entry Review
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 bg-transparent border border-primary text-primary font-semibold px-8 py-4 rounded-full text-sm hover:bg-primary hover:text-dark-900 transition-colors duration-300 w-fit"
              >
                Request a Commercial Fit Review
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
