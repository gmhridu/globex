const HeroSection = () => {
  return (
    <section className="relative pt-24 min-h-[80vh] w-full flex items-center">
      {/* Secondary Background - Only at the very top (header area) */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-secondary z-0"></div>

      {/* Background Image - This will cover the main area */}
      <div
        className="absolute inset-0 bg-cover w-full bg-center z-10"
        style={{
          backgroundImage: "url('/assests/charity/hero.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Your content goes here with z-20 or higher */}
    </section>
  );
};

export default HeroSection;
