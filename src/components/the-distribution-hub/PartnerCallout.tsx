"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Button from "../ui/Button";
import Link from "next/link";

const PartnerCallout = () => {
  const benefits = [
    "Fast-tracked access to decision-makers already within our trusted network",
    "Qualified distributor meetings aligned with your category, pricing, and market goals",
    "Stronger brand positioning through warm introductions, not unsolicited pitches",
    "Stronger, longer-lasting distributor relationships",
    "More time closing deals, less time chasing leads",
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <section className="bg-white py-8 sm:py-10 md:py-12 lg:py-16">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start">
          {/* Left side - Image with Zoom In Animation */}
          <motion.div
            ref={ref}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="w-full"
          >
            <img
              src="/assests/tailored-solutions/distributor-hub/engineer-worker-wearing-safety-uniform.jpg"
              width={620}
              height={355}
              alt="Manufacturing workers"
              className="w-full h-auto sm:h-[250px] md:h-[300px] lg:h-[355px] object-cover rounded-xl sm:rounded-2xl"
            />
          </motion.div>

          {/* Right side - Content */}
          <div className="w-full">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-3 sm:mb-4 leading-tight">
              Trusted Introductions. Real Results.
            </h2>

            <p className="text-sm sm:text-base md:text-md lg:text-md font-semibold mb-3 sm:mb-4 md:mb-4 leading-relaxed">
              When you partner with Globex, you&apos;re tapping into a ready-made
              network of distributors — no cold outreach, no guesswork.
            </p>

            <ul className="space-y-2 sm:space-y-2.5 md:space-y-3 text-sm sm:text-base md:text-md lg:text-md font-semibold mb-6 sm:mb-7 md:mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 mr-2 sm:mr-3 mt-0.5">•</div>
                  <span className="leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>

            <Button
              size="sm"
              className="group inline-flex w-full sm:w-auto whitespace-normal sm:whitespace-nowrap items-center justify-center
                text-sm sm:text-base md:text-lg px-4 sm:px-6 py-3 sm:py-2
                bg-primary text-black transition-all duration-300
                hover:bg-white hover:text-black"
            >
              <Link href="/contact" className="inline-flex items-center text-center sm:text-left">
                <span className="block sm:inline">See If You Qualify for the Distributor Program</span>
                <ChevronRight
                  className="hidden sm:block h-4 w-4 sm:h-5 sm:w-5 transform translate-x-[-10px] opacity-0
                    transition-all duration-300 ease-in-out
                    group-hover:translate-x-3 group-hover:opacity-100 ml-1"
                />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerCallout;
