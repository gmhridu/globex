"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";
import { Typewriter } from "react-typewriting-effect";
import "react-typewriting-effect/dist/index.css";

const AgencySection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const [startAnimation, setStartAnimation] = useState(false);

  // Trigger typewriter only when section is in view
  useEffect(() => {
    if (inView && !startAnimation) {
      setStartAnimation(true);
    }
  }, [inView, startAnimation]);

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
      title: "The Contract MFG Hub",
      description:
        "Get discovered by brands actively searching for trusted contract manufacturing partners. No cold calls—just qualified leads, ready to build.",
      icon: <ArrowRight className="w-8 h-8 text-primary" />,
    },
  ];

  return (
    <section className="bg-gray-300/20 py-12">
      <div className="container">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-8 leading-tight">
            We&apos;re A{" "}
            {startAnimation ? (
              <Typewriter
                string="Growth Agency"
                className="text-primary"
                cursor="_"
                cursorClassName="text-primary"
                delay={200}
                stopBlinkinOnComplete
              />
            ) : (
              <span className="text-primary">Growth Agency</span>
            )}{" "}
            Built For Manufacturing.
          </h2>

          <p className="text-md font-semibold text-balance text-gray-700">
            With extensive experience helping manufacturing suppliers navigate
            growth challenges, we specialize in crafting strategies tailored to
            your industry. By combining our in-depth sector knowledge with
            proven approaches, we enable your business to connect with the right
            prospects, expand into new markets, and build a strong, sustainable
            sales pipeline.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.2, delay: index * 0.2 }}
              whileHover={{
                scale: 1,
                boxShadow: "0px 10px 30px rgba(0,0,0,0.12)",
              }}
              className="relative border-2 border-black hover:border-[var(--hover-color)] rounded-2xl p-8 bg-white/70 backdrop-blur-sm transition-all duration-300 hover:bg-white cursor-pointer"
              style={{ "--hover-color": "#031325" } as React.CSSProperties}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">
                  {service.title}
                </h3>
                <div className="w-12 h-12 rounded-full border-4 border-primary flex items-center justify-center bg-primary/10 text-2xl">
                  {service.icon}
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>

              {/* Decorative hover effect ring */}
              <span className="absolute inset-0 rounded-2xl border-2 border-transparent hover:border-secondary/50 transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgencySection;
