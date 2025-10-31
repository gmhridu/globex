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
    <section className="relative bg-secondary pt-24 min-h-[80vh] flex items-center overflow-hidden">
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
      <div className="container relative z-10 py-16 md:py-24">
        <div className="max-w-[1300px]">
          <h1 className="text-[3.5rem] font-bold text-white leading-tight">
            Building Global Growth,
            <br />
           Take one partner at a time out.
          </h1>

          <p className="text-[3.5rem] font-bold text-white leading-tight">
            Connecting Brands to <RotatingWords />
          </p>

          <p className="text-lg mt-6 mb-6 text-white leading-relaxed max-w-2xl">
            We help businesses expand, scale, and succeed in international
            markets with a results-driven strategy.
          </p>

          <Button className="group mt-2 inline-flex w-[200px] whitespace-nowrap items-center justify-center text-lg bg-primary text-black transition-all duration-300 hover:bg-white hover:text-black">
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
