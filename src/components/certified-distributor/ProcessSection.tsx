"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "../ui/Button";
import Link from "next/link";
import { useState } from "react";

const fadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

// Accordion Item Component
const AccordionItem = ({
  title,
  content,
  isOpen,
  onClick,
}: {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div className="border border-gray-200 rounded-lg mb-3 overflow-hidden shadow-sm">
      <button
        className="w-full px-5 py-3 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
        onClick={onClick}
      >
        <h3 className="font-medium text-gray-800 text-base md:text-lg">
          {title}
        </h3>
        <span
          className={`text-gray-400 text-lg transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          +
        </span>
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" as const }}
        className="px-5 pb-4 bg-white"
      >
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          {content}
        </p>
      </motion.div>
    </div>
  );
};

const ProcessSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const steps = [
    {
      title: "Initial Assessment",
      content:
        "We start with an internal review to understand the requirements for new distributors. This includes analyzing market reach, credibility, and alignment with Globex’s mission to deliver sustainable, growth-focused partnerships.",
    },
    {
      title: "Distributor Research & Shortlisting",
      content:
        "Our team identifies potential distributor partners using data-driven insights and regional expertise, creating a curated shortlist of high-potential candidates.",
    },
    {
      title: "Due Diligence & Compatibility Check",
      content:
        "Before onboarding, we conduct detailed due diligence—financial, compliance, and cultural alignment—to ensure mutual growth and long-term partnership stability.",
    },
    {
      title: "Onboarding & Partnership Development",
      content:
        "After approval, we guide you through onboarding, provide training and platform access, and assign a dedicated account manager to help shape growth strategies.",
    },
  ];

  return (
    <section ref={ref} className="py-12 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Left Column - Accordion Steps */}
          <div className="lg:col-span-2">
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-gray-900">
              How the Process Works
            </h2>

            <div className="flex flex-col justify-between h-full">
              {steps.map((step, index) => (
                <AccordionItem
                  key={index}
                  title={step.title}
                  content={step.content}
                  isOpen={openIndex === index}
                  onClick={() => toggleAccordion(index)}
                />
              ))}
            </div>
          </div>

          {/* Right Column - Contact Sidebar */}
          <motion.div
            className="bg-blue-50 p-6 md:p-8 rounded-2xl border border-blue-100 shadow-sm flex flex-col justify-between h-[370px]"
            variants={fadeInVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">
                Have More Questions About Our Distributor Membership?
              </h3>
              <p className="text-gray-700 text-sm md:text-base mb-6 leading-relaxed">
                Our distributor membership offers exclusive access to
                world-class manufacturers, dedicated account support, and global
                networking opportunities. Let’s discuss how Globex can help your
                business expand and thrive.
              </p>
            </div>

            <Link href="/contact" className="block mt-auto">
              <Button
                className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-2.5 md:px-8 md:py-3
            rounded-full w-full md:w-auto transition-all duration-300 shadow-sm hover:shadow-md"
              >
                CONTACT GLOBEX
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
