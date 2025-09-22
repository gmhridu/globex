import { ChevronRight } from "lucide-react";
import Button from "../ui/Button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative bg-secondary pt-24 min-h-[80vh] flex items-center">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('/assests/tailored-solutions/private-label-hub/hero.jpg')",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0, 0, 0, 0.66) !important",
        }}
      ></div>

      {/* Content */}
      <div className="container relative z-10 py-16 md:py-24">
        <div className="max-w-[1300px]">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight whitespace-nowrap">
            Where
            <span className="text-primary ml-3">Private Label</span>{" "}
            Manufacturers
            <br /> Meet the
            <span className="text-primary">Right Brands</span>.
          </h1>
          <p className="text-xl mb-6 mt-2 text-white leading-relaxed">
            We facilitate{" "}
            <span className="text-primary">strategic introductions</span>{" "}
            between manufacturers <br />
            and brands looking to outsource production —{" "}
            <span className="text-primary ml-3">the right fit, every time</span>
          </p>
          <Button
            className="group mt-8 inline-flex w-[220px] items-center justify-center text-lg
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
