import { ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-secondary pt-24 min-h-[90vh] flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: "url('https://weareglobex.com/wp-content/uploads/2025/03/shutterstock_710558962-scaled.jpg ')",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="absolute inset-0 bg-secondary opacity-70"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 py-16 md:py-24">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Expand Your Manufacturing <br />
            Reach. Boost your revenue. <br />
            <span className="text-primary">Succeed.</span>
          </h1>
          
          <p className="mt-6 text-xl text-white max-w-2xl">
            We help businesses expand, scale, and succeed in international markets with a results-driven strategy.
          </p>
          <div className="mt-8 ">
            <a
              href="#contact"
              className="btn btn-primary group inline-flex items-center justify-center w-[220px] text-lg px-8 py-4 
               bg-primary text-black transition-all duration-300
               hover:bg-white hover:text-black"
            >
              <div className="relative z-10 whitespace-nowrap">GET IN TOUCH</div>

              <span
                className="transform translate-x-[-10px] opacity-0 
                 transition-all duration-300 ease-in-out 
                 group-hover:translate-x-3 group-hover:opacity-100"
              >
                <ChevronRight className="w-5 h-5" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;