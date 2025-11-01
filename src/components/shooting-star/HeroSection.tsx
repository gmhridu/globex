"use client"

const HeroSection = () => {
  return (
    <section className="relative pt-16 sm:pt-20 md:pt-24 min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] w-full flex items-center">
      {/* Secondary Background - Only at the very top (header area) */}
      <div className="absolute top-0 left-0 right-0 h-16 sm:h-20 md:h-24 bg-secondary z-0"></div>

      {/* Background Image - Responsive for all devices */}
      <div
        className="absolute inset-0 w-full bg-cover bg-center sm:bg-cover md:bg-contain lg:bg-contain bg-no-repeat z-10"
        style={{
          backgroundImage: "url('/assests/charity/hero.png')",
        }}
      ></div>

      {/* Your content goes here with z-20 or higher */}
    </section>
  );
};

export default HeroSection;
