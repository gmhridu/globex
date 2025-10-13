"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";
import { Typewriter } from "react-typewriting-effect";
import "react-typewriting-effect/dist/index.css";
import { useEffect, useState } from "react";

const AgencySection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    if (inView && !startAnimation) {
      const timer = setTimeout(() => setStartAnimation(true), 300);
      return () => clearTimeout(timer);
    }
  }, [inView, startAnimation]);

  const services = [
    {
      title: "Distributor Introductions",
      description:
        "Get matched with vetted distributors already in our global network — no cold outreach needed.",
      icon: <ArrowRight className="w-8 h-8 text-primary" />,
    },
    {
      title: "Warm Connections",
      description:
        "Connect directly with decision-makers and start meaningful conversations for you.",
      icon: <ArrowRight className="w-8 h-8 text-primary" />,
    },
    {
      title: "Distributor-Facing Content",
      description:
        "Present your brand with the right messaging, tailored for distributor interest and engagement.",
      icon: <ArrowRight className="w-8 h-8 text-primary" />,
    },
    {
      title: "Meeting Coordination",
      description:
        "Secure qualified meetings that bring prospects one step closer to closing.",
      icon: <ArrowRight className="w-8 h-8 text-primary" />,
    },
  ];

  return (
    <section className="bg-gray-300/20 py-16 md:py-24">
      <div className="container">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-6xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-[3.3rem] font-bold mb-8 leading-tight">
            Stop Guessing. Start Connecting.
            <br />
            The{" "}
            {startAnimation ? (
              <Typewriter
                onComplete={() => {}}
                string="Distributor Hub"
                className="text-primary inline"
                cursor="_"
                cursorClassName="text-primary"
                stopBlinkinOnComplete
              />
            ) : (
              <span className="text-primary inline">Distributor Hub</span>
            )}{" "}
            delivers real distributor relationships,
            <br />
            backed by strategy, not luck.
          </h2>
        </motion.div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="cursor-pointer border-2 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300 hover:border-amber-600 bg-white/60"
            >
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="mb-6 text-gray-700 font-medium">
                {service.description}
              </p>
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
