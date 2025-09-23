import { ChevronRight } from "lucide-react";
import Button from "../ui/Button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative bg-secondary pt-24 min-h-[80vh] flex items-center">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 hero-background2"
        style={{
          backgroundImage:
            "url('/assests/industries/advance-manufacturing/hero.jpg')",
          backgroundBlendMode: "overlay",
        }}
      ></div>

      {/* Content */}
      <div className="container relative z-10 py-16 md:py-24">
        <div className="max-w-[1300px]">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight whitespace-nowrap">
            Collaborate with Manufacturers <br />
            <span className="text-primary">Shaping Tomorrow’s Industry</span>
          </h1>
          <p className="text-xl mb-8 mt-2 text-white leading-relaxed">
            From IoT to manufacturing software, We Are Globex supports advanced
            manufacturing and Industry 4.0 solution providers in growing their
            pipeline and securing high-value opportunities. We implement
            strategies that highlight your innovations, improve lead quality,
            and drive sustainable business growth.
          </p>
          <p className="text-xl mb-3 mt-6 text-white leading-relaxed">
            Advanced Manufacturing & Industry 4.0
          </p>
          <Button
            className="group mt-3 inline-flex w-[220px] items-center justify-center text-lg
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
