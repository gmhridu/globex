"use client";

import { ChevronRight } from "lucide-react";
import Button from "../ui/Button";
import Link from "next/link";
import { Typewriter } from "react-typewriting-effect";
import "react-typewriting-effect/dist/index.css";

const HeroSection = () => {
  return (
    <section className="relative bg-secondary pt-24 min-h-[80vh] flex items-center">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 hero-background2"
        style={{
          backgroundImage:
            "url('/assests/industries/facility-industrial/hero.jpg')",
          backgroundBlendMode: "overlay",
        }}
      ></div>

      {/* Content */}
      <div className="container relative z-10 py-16 md:py-24">
        <div className="max-w-[1300px]">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight">
            Expand your reach and grow <br />
            <Typewriter
              string="Your Facility Management Company."
              cursor="_"
              cursorClassName="text-primary"
              stopBlinkinOnComplete={true}
              className="text-primary"
            />
          </h1>
          <p className="text-lg mt-4 mb-6 text-white leading-relaxed">
            From energy efficiency to facility contracting, We Are Globex helps
            service providers connect with manufacturers who value your
            expertise. We deliver tailored strategies that enhance your
            pipeline, improve lead quality, and drive sustainable growth
            opportunities.
          </p>
          <Button
            size="md"
            className="group inline-flex w-full sm:w-auto whitespace-normal sm:whitespace-nowrap items-center justify-center
                text-sm sm:text-base md:text-lg px-4 sm:px-6 py-3 sm:py-2
                bg-primary text-black transition-all duration-300
                hover:bg-white hover:text-black"
          >
            <Link href="/contact" className="inline-flex items-center">
              Identify My Ideal Industrial Clients
              <ChevronRight
                className="h-5 w-5 transform translate-x-[-10px] opacity-0
            transition-all duration-300 ease-in-out
            group-hover:translate-x-3 group-hover:opacity-100"
              />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
