"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const BenefitsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const benefits = [
    {
      icon: "🔔",
      title: "Competitive Salary",
      description:
        "We offer a highly competitive salary package that reflects your skills, experience, and contribution to our success.",
    },
    {
      icon: "⏳",
      title: "Flexible Working Arrangements",
      description:
        "Enjoy a healthy work-life balance with flexible hours and remote working options tailored to support your personal and professional needs.",
    },
    {
      icon: "🎓",
      title: "Professional Development",
      description:
        "We invest in your growth with ongoing training, certifications, and career development opportunities to help you reach your full potential.",
    },
    {
      icon: "🏥",
      title: "Health & Dental",
      description:
        "Comprehensive health and dental coverage to keep you and your family well-protected and cared for.",
    },
    {
      icon: "🌴",
      title: "Paid Vacation",
      description:
        "Enjoy generous paid vacation time to relax, recharge, and maintain a healthy work-life balance.",
    },
    {
      icon: "💰",
      title: "Targeted Bonuses",
      description:
        "Achieve more with performance-driven bonuses that reward you for your hard work and dedication.",
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 leading-tight">
            Perks & Benefits
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            We value our team and believe great work deserves great rewards.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all shadow-sm"
            >
              <div className="text-3xl mt-1">{benefit.icon}</div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-1">
                  {benefit.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
