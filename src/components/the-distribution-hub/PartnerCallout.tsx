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
    <section className="bg-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left side - Image with Zoom In Animation */}
          <motion.div
            ref={ref}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className=""
          >
            <img
              src="/assests/tailored-solutions/distributor-hub/engineer-worker-wearing-safety-uniform.jpg"
              width={500}
              height={500}
              alt="Manufacturing workers"
              className="w-[620px] h-[355px] object-cover rounded-2xl"
            />
          </motion.div>

          {/* Right side - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
              Trusted Introductions. Real Results.
            </h2>

            <p className="text-md font-semibold mb-4">
              When you partner with Globex, you&apos;re tapping into a ready-made
              network of distributors — no cold outreach, no guesswork.
            </p>

            <ul className="space-y-1 text-md font-semibold mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <div className="flex-shrink-0 mr-3">•</div>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <Button
              className="group inline-flex w-[180px] whitespace-nowrap items-center justify-center text-lg
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
        </div>
      </div>
    </section>
  );
};

export default PartnerCallout;
