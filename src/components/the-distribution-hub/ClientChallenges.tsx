"use client";
import { ChevronRight, Dot } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Button from "../ui/Button";
import Link from "next/link";

const benefits = [
  "Missing out on global opportunities because you’re not plugged into the right networks",
  "Delays in market entry while your competitors move faster with local partners",
  "Time wasted chasing cold leads instead of focusing on warm, qualified ones",
  "Struggling to build traction without distributors who truly understand your product",
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
              What’s at Risk Without the <br />
              Right Distribution Partner <br />
              Strategy?
            </h2>

            <ul className="space-y-1 text-lg font-semibold mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 mr-3">•</div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <Button
              className="group inline-flex w-[220px] items-center justify-center text-lg
        bg-primary text-black transition-all duration-300
        hover:bg-white hover:text-black"
            >
              <Link href="/contact" className="inline-flex items-center">
                LETS TALK
                <ChevronRight
                  className="h-5 w-5 transform translate-x-[-10px] opacity-0
            transition-all duration-300 ease-in-out
            group-hover:translate-x-3 group-hover:opacity-100"
                />
              </Link>
            </Button>
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
              src="/assests/tailored-solutions/distributor-hub/envato-labs-ai.png"
              width={500}
              height={500}
              alt="Manufacturing facility"
              className="w-full h-[400px] object-cover rounded-3xl"
              priority={true}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientChallenges;
