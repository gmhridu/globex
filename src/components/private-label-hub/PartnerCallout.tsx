"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Button from "../ui/Button";
import Link from "next/link";

const PartnerCallout = () => {
  const benefits = [
    "Connect with brands actively looking for private label partners",
    "Build a steady flow of qualified opportunities aligned with your MOQs and categories",
    "Gain visibility in the markets where your products are in demand",
    "Spend more time onboarding clients — and less time chasing cold leads"
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
            <Image
              src="/assests/tailored-solutions/private-label-hub/portrait-of-confident-female-worker.jpg"
              width={300}
              height={300}
              alt="Manufacturing workers"
              className=" w-[620px] h-[400px] object-center rounded-lg"
              priority={true}
            />
          </motion.div>

          {/* Right side - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">
              What You Can Expect from the Private Label Hub
            </h2>

            <p className="text-md font-semibold mb-2">
              When you work with Globex, we don’t just send leads — we deliver
              real, qualified brand opportunities that match your manufacturing
              strengths.
            </p>
            <p className="text-md font-semibold mb-3">
              With our private label matchmaking, you’ll:
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
