'use client'
import { ChevronRight, Dot } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const benefits = [
  "Struggling to keep up with competitors who have more robust pipelines",
  "Lost opportunities to grow in new markets",
  "Resources squandered on unqualified leads",
  "Stagnant or declining sales",
];

const ClientChallenges = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <section className="bg-white py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left side - Content */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Rise above the typical challenges that define others.
            </h2>

            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 mr-3">
                    <Dot className="h-6 w-6 text-primary" />
                  </div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 ">
              <a
                href="#contact"
                className="btn btn-primary group inline-flex items-center justify-center w-[220px] text-lg px-8 py-4 
               bg-primary text-black transition-all duration-300
               hover:bg-secondary hover:text-white"
              >
                <span className="relative z-10">LETS TALK</span>

                <span
                  className="transform translate-x-[-10px] opacity-0 
                 transition-all duration-300 ease-in-out 
                 group-hover:translate-x-3 group-hover:opacity-100"
                >
                  <ChevronRight className="w-5 h-5" />
                </span>
              </a>
            </div>
          </div>

          {/* Right side - Image with Zoom-in Animation */}
          <motion.div
            ref={ref}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="rounded-lg overflow-hidden shadow-xl"
          >
            <Image
              src="https://weareglobex.com/wp-content/uploads/2025/05/envato-labs-ai-680637bf-4a09-470e-b44b-ed4e781a6962.png"
              width={500}
              height={500}
              alt="Manufacturing facility"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientChallenges;
