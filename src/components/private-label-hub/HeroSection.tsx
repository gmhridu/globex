"use client";

import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import Button from "../ui/Button";
import Link from "next/link";
import { Typewriter } from "react-typewriting-effect";
import "react-typewriting-effect/dist/index.css";

const HeroSection = () => {
  // State to control second animation trigger
  const [showBrands, setShowBrands] = useState(false);

  return (
    <section className="relative bg-secondary pt-24 min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 hero-background"
        style={{
          backgroundImage:
            "url('/assests/tailored-solutions/private-label-hub/hero.jpg')",
          backgroundBlendMode: "overlay",
        }}
      ></div>

      {/* Content */}
      <div className="container relative z-10 py-16 md:py-24">
        <div className="max-w-[1300px]">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight">
            Where{" "}
            <Typewriter
              string="Private Label"
              className="text-primary inline"
              cursor="_"
              cursorClassName="text-primary"
              stopBlinkinOnComplete={true}
              onComplete={() => setShowBrands(true)}
            />{" "}
            Manufacturers <br />
            Meet the{" "}
            {!showBrands ? (
              <span className="text-primary inline">Right Brands.</span>
            ) : (
              <Typewriter
                string="Right Brands."
                className="text-primary inline"
                cursor="_"
                cursorClassName="text-primary"
                stopBlinkinOnComplete={true}
                delay={80}
              />
            )}
          </h1>

          <p className="text-lg mt-4 mb-6 text-white leading-relaxed">
            We facilitate{" "}
            <span className="text-primary">strategic introductions</span>{" "}
            between manufacturers <br />
            and brands looking to outsource production —{" "}
            <span className="text-primary ml-3">the right fit, every time</span>
          </p>

          <Button
            className="group mt-8 inline-flex w-[200px] whitespace-nowrap items-center justify-center text-lg
              bg-primary text-black transition-all duration-300
              hover:bg-white hover:text-black"
          >
            <Link href="/contact" className="inline-flex items-center">
              GET IN TOUCH
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
