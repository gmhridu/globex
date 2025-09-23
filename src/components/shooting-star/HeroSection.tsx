const HeroSection = () => {
  return (
    <section className="relative bg-secondary pt-24 min-h-[80vh] w-full flex items-center">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover w-full bg-center z-0"
        style={{
          backgroundImage: "url('/assests/charity/hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </section>
  );
};

export default HeroSection;
