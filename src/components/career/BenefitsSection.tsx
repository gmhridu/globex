'use client'
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
      description: "We offer a highly competitive salary package that reflects your skills, experience, and contribution to our success.",
    },
    {
      icon: "⏳",
      title: "Flexible Working Arrangements",
      description: "Enjoy a healthy work-life balance with flexible hours and remote working options tailored to support your personal and professional needs.",
    },
    {
      icon: "🎓",
      title: "Professional Development",
      description: "We invest in your growth with ongoing training, certifications, and career development opportunities to help you reach your full potential.",
    },
    {
      icon: "🏥",
      title: "Health & Dental",
      description: "Comprehensive health and dental coverage to keep you and your family well-protected and cared for.",
    },
    {
      icon: "🌴",
      title: "Paid Vacation",
      description: "Enjoy generous paid vacation time to relax, recharge, and maintain a healthy work-life balance.",
    },
    {
      icon: "💰",
      title: "Targeted Bonuses",
      description: "Achieve more with performance-driven bonuses that reward you for your hard work and dedication.",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Perks & Benefits</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex items-start space-x-4 p-6"
            >
              <div className="text-2xl mt-1">{benefit.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;