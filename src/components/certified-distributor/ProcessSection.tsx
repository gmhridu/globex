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
const AccordionItem = ({ title, content, isOpen, onClick }: { title: string; content: string; isOpen: boolean; onClick: () => void; }) => {
  return (
    <div className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
      <button
        className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors"
        onClick={onClick}
      >
        <h3 className="font-semibold text-gray-800">{title}</h3>
        <span className={`text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          +
        </span>
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" as const }}
        className="px-6 pb-4 bg-white"
      >
        <p className="text-gray-600 leading-relaxed">{content}</p>
      </motion.div>
    </div>
  );
};

const ProcessSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // State for accordion
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const steps = [
    {
      title: "Initial Assessment",
      content:
        "The process starts with an internal assessment by Globex to identify the specific requirements and expectations for the distributors we seek to onboard. We evaluate factors such as market reach, industry reputation, and alignment with Globex's mission of delivering sustainable, growth-oriented solutions. This step ensures we understand the core objectives before moving forward.",
    },
    {
      title: "Distributor Research & Shortlisting",
      content:
        "We conduct targeted research to identify potential distributor partners who match our criteria. Our team analyzes market data, regional expertise, and product fit to create a curated shortlist of high-potential candidates.",
    },
    {
      title: "Due Diligence & Compatibility Check",
      content:
        "Before finalizing any partnership, we perform comprehensive due diligence including financial health checks, compliance verification, and cultural alignment assessments to ensure long-term compatibility and mutual success.",
    },
    {
      title: "Onboarding & Partnership Development",
      content:
        "Once approved, we initiate a structured onboarding program that includes training, access to our platform, and dedicated account management. We work closely with you to develop customized growth strategies and connect you with manufacturers aligned with your goals.",
    },
  ];

  return (
    <section className="py-16 bg-white" ref={ref}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Process Steps */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-8">How the process works</h2>

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

          {/* Right Column - Contact Sidebar */}
          <motion.div
            className="bg-blue-50 p-6 rounded-xl"
            variants={fadeInVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h3 className="text-xl font-bold mb-4">
              Have More Questions About Our Distributor Membership?
            </h3>
            <p className="text-gray-600 mb-6">
              Our dedicated membership service for distributors offers exclusive benefits, tailored support, and access to our global network. If you’d like to learn more, or have any further questions, we’re here to help.
            </p>
            <Button
              
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full w-full transition-all duration-300"
            >
              <Link href="/contact">CONTACT GLOBEX</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;