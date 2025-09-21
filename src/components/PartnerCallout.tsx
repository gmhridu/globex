'use client'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Check, ChevronRight } from "lucide-react";
import Image from "next/image";

const PartnerCallout = () => {
  const benefits = [
    "A steady stream of high-quality leads and opportunities",
    "Gaining visibility with the most important prospects",
    "Sustainable growth driven by proven methods",
    "Building deeper connections with potential clients",
    "Gaining a competitive advantage in your industry",
    "More time dedicated to closing deals",
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <section className="bg-white py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left side - Image with Zoom In Animation */}
          <motion.div
            ref={ref}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="rounded-lg overflow-hidden shadow-xl"
          >
            <Image
              src="https://weareglobex.com/wp-content/uploads/2025/04/57-768x512-1.png"
              width={500}
              height={500}
              alt="Manufacturing workers"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right side - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Establish yourself as the trusted partner for your ideal
              manufacturing prospects.
            </h2>

            <p className="text-lg mb-8">
              Collaborating with We Are Globex is about more than just growth,
              it&apos;s about establishing a strong foundation for lasting success.
              This is the future your business is meant to have:
            </p>

            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 mr-3">
                    <Check className="h-6 w-6 text-primary" />
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
        </div>
      </div>
    </section>
  );
};

export default PartnerCallout;
