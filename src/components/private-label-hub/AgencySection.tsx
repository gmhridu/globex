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
    <section className="bg-gray-300/20 py-12">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-5xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-4xl font-bold mb-8 leading-tight">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{
                scale: 1,
                boxShadow: "0px 12px 35px rgba(0,0,0,0.1)",
              }}
              className="relative border-2 border-black hover:shadow-lg hover:border-secondary rounded-2xl p-8 bg-white/70 backdrop-blur-sm transition-all duration-300 hover:bg-white cursor-pointer group"
            >
              {/* Title + Icon */}
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-secondary transition-colors duration-300">
                  {service.title}
                </h3>
                <div className="w-12 h-12 rounded-full border-4 border-primary flex items-center justify-center bg-primary/10 text-2xl group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 font-medium leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                {service.description}
              </p>

              {/* Decorative border ring */}
              <span className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-secondary/50 transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgencySection;
