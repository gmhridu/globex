"use client";

import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import Button from "../ui/Button";
import Link from "next/link";
import { Typewriter } from "react-typewriting-effect";
import "react-typewriting-effect/dist/index.css";

const words = ["Distributors", "Retailers", "OEMs", "Dealers"];

function RotatingWords() {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Typewriter
      key={index}
      string={words[index]}
      className="text-primary inline"
      cursor="|"
      cursorClassName="text-primary animate-pulse"
      stopBlinkinOnComplete={false}
      delay={80}
    />
  );
}

const HeroSection = () => {
  return (
    <section className="relative bg-secondary pt-16 sm:pt-20 md:pt-24 min-h-[70vh] sm:min-h-[75vh] md:min-h-[80vh] flex items-center overflow-hidden">
      {/* --- Background Video Layer --- */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/videos/homepage/heroVideo.mov"
        autoPlay
        loop
        muted
        preload="none"
        playsInline
      />

      {/* --- Overlay Layer --- */}
      <div className="absolute inset-0 hero-background z-0"></div>

      {/* --- Content Layer --- */}
      <div className="container relative z-10 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1300px]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[3.5rem] font-bold text-white leading-tight">
            Building Global Growth,
          </h1>

          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[3.5rem] font-bold text-white leading-tight mt-2 sm:mt-3 md:mt-4">
            Connecting Brands to <RotatingWords />
          </p>

          <p className="text-sm sm:text-base md:text-lg mt-4 sm:mt-5 md:mt-6 mb-4 sm:mb-5 md:mb-6 text-white leading-relaxed max-w-full sm:max-w-xl md:max-w-2xl">
            We help businesses expand, scale, and succeed in international
            markets with a results-driven strategy.
          </p>

          <Button className="group mt-2 inline-flex w-full sm:w-[200px] whitespace-nowrap items-center justify-center text-base sm:text-lg bg-primary text-black transition-all duration-300 hover:bg-white hover:text-black">
            <Link href="/contact" className="inline-flex items-center">
              GET IN TOUCH
              <ChevronRight className="h-5 w-5 transform translate-x-[-10px] opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-3 group-hover:opacity-100" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
