'use client'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";

const AgencySection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const services = [
    {
      title: "The Distributor Hub",
      description:
        "Expand into new markets by tapping into our network of vetted distributors worldwide.",
      icon: <ArrowRight className="w-8 h-8 text-primary" />,
    },
    {
      title: "The Private Label Hub",
      description:
        "Connect with brands actively seeking private label partners — no cold outreach, just real opportunities.",
      icon: <ArrowRight className="w-8 h-8 text-primary" />,
    },
    {
      title: "The Contract Mfg Hub",
      description:
        "Get discovered by brands actively searching for trusted contract manufacturing partners. No cold calls—just qualified leads, ready to build.",
      icon: <ArrowRight className="w-8 h-8 text-primary" />,
    },
  ];

  return (
    <section className="bg-gray-300/20 py-16 md:py-24">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-[3.3rem] font-bold mb-8">
            We&apos;re A <span className="text-primary">Growth Agency</span> Built For Manufacturing.
          </h2>

          <p className="text-lg font-semibold text-right text-balance">
            With extensive experience helping manufacturing suppliers navigate growth challenges, we specialize
            in crafting strategies tailored to your industry. By combining our in-depth sector knowledge with
            proven approaches, we enable your business to connect with the right prospects, expand into new
            markets, and build a strong, sustainable sales pipeline.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="border-2 border-black rounded-lg p-8 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="mb-6 text-gray-600">{service.description}</p>
              <div className="w-12 h-12 rounded-full border-4 border-primary flex items-center justify-center">
                <span>{service.icon}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgencySection;
