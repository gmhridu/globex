const HeroSection = () => {
  return (
    <section className="relative bg-secondary pt-24 min-h-[60vh] flex items-center">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 hero-background2"
        style={{
          backgroundImage: "url('/assests/privacy-policy/heroImage.jpg')",
          backgroundBlendMode: "overlay",
        }}
      ></div>

      {/* Content */}
      <div className="container relative z-10 py-16 md:py-24">
        <div className="max-w-[1300px]">
          <h1 className="text-primary text-4xl md:text-5xl text-center">
            GDPR Statement
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
