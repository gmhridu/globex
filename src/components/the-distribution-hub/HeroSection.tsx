"use client";

import { ChevronRight } from "lucide-react";
import Button from "../ui/Button";
import Link from "next/link";
import { Typewriter } from "react-typewriting-effect";
import "react-typewriting-effect/dist/index.css";
import { useInView } from "react-intersection-observer";
import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.4 });
  const [startAnimation, setStartAnimation] = useState(false);
  const [showMiddleEast, setShowMiddleEast] = useState(false);

  useEffect(() => {
    if (inView) {
      // slight delay for smooth appearance
      const timer = setTimeout(() => setStartAnimation(true), 300);
      return () => clearTimeout(timer);
    }
  }, [inView]);

  return (
    <section
      ref={ref}
      className="relative bg-secondary pt-24 min-h-[80vh] flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 hero-background"
        style={{
          backgroundImage:
            "url('/assests/tailored-solutions/distributor-hub/hero.jpg')",
          backgroundBlendMode: "overlay",
        }}
      ></div>

      {/* Content */}
      <div className="container relative z-10 py-16 md:py-24">
        <div className="max-w-[1300px]">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight">
            Powering Distribution Across
            {startAnimation ? (
              <Typewriter
                onComplete={() => {
                  setShowMiddleEast(true);
                }}
                string="Europe"
                className="text-primary ml-3 inline"
                cursor="_"
                cursorClassName="text-primary"
                stopBlinkinOnComplete
              />
            ) : (
              <span className="text-primary ml-3 inline">Europe</span>
            )}{" "}
            <br />
            & the
            {showMiddleEast ? (
              <Typewriter
                onComplete={() => {}}
                string="Middle East"
                className="text-primary ml-3 inline"
                cursor="_"
                cursorClassName="text-primary"
                stopBlinkinOnComplete
                delay={80}
              />
            ) : (
              <span className="text-primary ml-3 inline">Middle East</span>
            )}
          </h1>

          <p className="text-lg mt-4 mb-6 text-white leading-relaxed">
            Welcome to the{" "}
            <span className="text-primary">Distributor Hub,</span> your gateway
            to connecting with qualified distributors, importers, and key market
            partners
            <br />
            across Europe and the Middle East
          </p>

          <Button
            className="group mt-8 inline-flex w-[200px] items-center justify-center text-lg
        bg-primary whitespace-nowrap text-black transition-all duration-300
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
