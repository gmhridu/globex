"use client";
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

  const services = [
    {
      title: "Warm Introductions",
      description:
        "Get matched with brands actively searching for private label partners. We tap into our global network and deliver opportunities that match your capabilities, MOQs, and category.",
      icon: <ArrowRight className="w-8 h-8 text-primary" />,
    },
    {
      title: "Verified Buyer Engagement",
      description:
        "We qualify every lead before it ever reaches you. No time wasted. Every brand we introduce has budget, intent, and a genuine interest in outsourcing.",
      icon: <ArrowRight className="w-8 h-8 text-primary" />,
    },
    {
      title: "Appointment Setting",
      description:
        "We schedule and facilitate qualified brand meetings. You show up to sell. We handle the rest, including briefing, positioning, and follow-ups if needed.",
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
          className="text-center max-w-8xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-[3.3rem] font-bold mb-8">
            We Connect{" "}
            {inView ? (
              <Typewriter
                string="Private Label Manufacturers"
                cursor="_"
                cursorClassName="text-primary"
                stopBlinkinOnComplete={true}
                className="text-primary"
              />
            ) : (
              <span className="text-primary inline-block">Private Label Manufacturers</span>
            )}{" "}
            with the Brands That Are Ready to Buy.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="cursor-pointer border-2 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300 hover:border-amber-600"
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
