"use client";
import { motion, easeOut } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

const GrowthChallenges = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const [activeIndex, setActiveIndex] = useState<number | null>(-1);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const challenges = [
    {
      title: "Your pipeline is inconsistent and unpredictable",
      content:
        "Contract manufacturers frequently face challenges with unreliable referrals and outdated sales methods. At We Are Globex, our dedicated team uses data-driven targeting to deliver a steady stream of high-quality leads. We craft campaigns that resonate with your ideal buyers, helping you build strong, long-term partnerships.",
    },
    {
      title:
        "Having trouble cutting through the noise in a competitive market?",
      content:
        "In a market full of manufacturers competing for attention, it’s essential to stand out. At We Are Globex, we position your business as an industry leader by creating personalized outreach that highlights your unique strengths, whether it’s exceptional precision, fast turnaround times, or specialized expertise..",
    },
    {
      title: "Your reach is restricted to familiar or regional markets.",
      content:
        "Expand beyond geographic and industry limitations. Our data-driven strategy enables you to enter new markets, whether through regional growth or tapping into new sectors. We pinpoint the right prospects, qualify them, and ensure your sales team focuses on leads that are ready to take the next step.",
    },
  ];

  return (
    <section
      className="bg-secondary text-white py-20 px-6 rounded-3xl max-w-6xl mx-auto mt-18"
      ref={ref}
    >
      <div className="container">
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Overcome Your Growth Challenges
          </h2>
          <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            From CNC machining to injection molding, we help contract
            manufacturers and job shops win high-value opportunities, expand
            into new markets, and foster lasting client relationships. At We Are
            Globex, we drive consistent growth—without increasing your overhead.
          </p>
        </motion.div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {challenges.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUpVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className={`border rounded-lg p-5 transition-all ${
                activeIndex === index ? "bg-[#0A223D]" : "bg-transparent"
              }`}
            >
              <button
                className="w-full flex items-center justify-between text-left font-semibold text-lg"
                onClick={() => toggleAccordion(index)}
              >
                {item.title}
                {activeIndex === index ? (
                  <Minus className="text-[#F5A623]" />
                ) : (
                  <Plus className="text-[#F5A623]" />
                )}
              </button>
              {activeIndex === index && (
                <p className="mt-4 text-base text-gray-200">{item.content}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GrowthChallenges;
