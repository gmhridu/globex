"use client";
import { motion, easeOut } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "../ui/Button";
import Link from "next/link";

// 添加AdvantageCard的props类型定义
interface AdvantageCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  number: string;
}

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const AdvantageCard = ({ icon, title, description, number }: AdvantageCardProps) => (
  <motion.div
    className="bg-[#0F172A] p-6 rounded-xl border border-blue-900/20 hover:border-blue-500/30 transition-all duration-300"
    variants={fadeInUpVariants}
  >
    <div className="flex justify-between items-start mb-4">
      <div className="text-white">{icon}</div>
      <div className="w-8 h-8 flex items-center justify-center bg-blue-900/30 text-white rounded-full text-sm font-bold border border-blue-500/20">
        {number}
      </div>
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
  </motion.div>
);

const AdvantagesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const benefits = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 5H5a2 2 0 00-2 2v10a2 2 0 002 2h10v2a2 2 0 002 2h4a2 2 0 002-2v-4h2a2 2 0 002-2V7a2 2 0 00-2-2h-4V3a2 2 0 00-2-2zM9 17V7h6v10H9z" />
        </svg>
      ),
      title: "Tell Us What You Need",
      description:
        "Let us know what product categories you’re actively looking for, and we’ll match you with top-tier manufacturers ready to supply your region.",
      number: "01",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-2 15l-2-2m-4-4l2 2m2-2l2 2m2 2l2 2M12 14c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z" />
        </svg>
      ),
      title: "Priority Matching with New Manufacturing Partners",
      description:
        "Be the first to hear about new supplier opportunities and negotiate directly on terms like pricing, exclusivity, and lead times.",
      number: "02",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17 20h-2c-1.103 0-2-.897-2-2v-2c0-1.103.897-2 2-2h2c1.103 0 2 .897 2 2v2c0 1.103-.897 2-2 2zm-2-8h-2c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2zm-6 12c-1.103 0-2-.897-2-2v-2c0-1.103.897-2 2-2s2 .897 2 2v2c0 1.103-.897 2-2 2zm0-8c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm10 0c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zm-6-8c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z" />
        </svg>
      ),
      title: "Exclusive Access to Growth Opportunities",
      description:
        "Participate in private matchmaking sessions, product showcases, and tailored introductions based on your portfolio and market.",
      number: "03",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
          <path d="M15 14c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm-5 0c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm-2-5c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4V5c0-1.103-.897-2-2-2H6c-1.103 0-2 .897-2 2v4z" />
        </svg>
      ),
      title: "Support from a Dedicated Team",
      description:
        "Work with a dedicated Globex account manager who will help connect you to brands aligned with your business goals.",
      number: "04",
    },
  ];

  return (
    <section className="bg-[#020617] py-16" ref={ref}>
      <div className="container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h3 className="text-xs uppercase text-gray-400 font-semibold mb-2">
              Benefits of Joining the Globex Distribution Network
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold text-white">ADVANTAGES</h2>
          </div>
          <div className="mt-6 md:mt-0">
            <Button
              className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full transition-all duration-300"
            >
              <Link href="/contact">CONTACT GLOBEX</Link>
            </Button>
          </div>
        </div>

        {/* Grid of Advantages */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {benefits.map((benefit, index) => (
            <AdvantageCard key={index} {...benefit} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AdvantagesSection;