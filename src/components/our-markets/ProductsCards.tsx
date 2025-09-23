import Image from "next/image";
import React from "react";

// Mock Next.js Image component for this demo

const ProductsCards = () => {
  const products = [
    {
      id: 1,
      title: "Agriculture",
      image: "/assests/our-markets/agriculture.jpg",
      alt: "Agriculture farming equipment",
    },
    {
      id: 2,
      title: "Beauty & Cosmetics",
      image: "/assests/our-markets/beauty-cosmetics.jpg",
      alt: "Beauty and cosmetics products",
    },
    {
      id: 3,
      title: "Cannabis",
      image: "/assests/our-markets/cannabis.jpg",
      alt: "Cannabis plant",
    },
    {
      id: 4,
      title: "Construction",
      image: "/assests/our-markets/construction.jpg",
      alt: "Construction equipment",
    },
    {
      id: 5,
      title: "Sports",
      image: "/assests/our-markets/sports.jpg",
      alt: "Sports equipment",
    },
    {
      id: 6,
      title: "Food & Hospitality",
      image: "/assests/our-markets/food-hospitality.jpg",
      alt: "Food and hospitality",
    },
    {
      id: 7,
      title: "Outdoor Recreation",
      image: "/assests/our-markets/outdoor-recreation.jpg",
      alt: "Outdoor recreation equipment",
    },
    {
      id: 8,
      title: "Toys & Baby",
      image: "/assests/our-markets/toys-baby.jpg",
      alt: "Toys & Baby",
    },
    {
      id: 9,
      title: "Veterinary & Pet Care",
      image: "/assests/our-markets/veterinary-pet-care.jpg",
      alt: "Veterinary & Pet Care",
    },
    {
      id: 10,
      title: "Tobacco",
      image: "/assests/our-markets/tobacco.jpg",
      alt: "Tobacco",
    },
    {
      id: 11,
      title: "Defense and Security",
      image: "/assests/our-markets/defense-security.jpg",
      alt: "Defense and Security",
    },
    {
      id: 12,
      title: "Mining",
      image: "/assests/our-markets/mining.jpg",
      alt: "Mining",
    },
  ];

  return (
    <section className="py-16 px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              style={{
                background:
                  "linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(240,248,255,0.8) 100%)",
                border: "2px solid transparent",
                backgroundClip: "padding-box",
                boxShadow: `
                  0 8px 32px rgba(0, 100, 200, 0.1),
                  inset 0 1px 0 rgba(255, 255, 255, 0.8),
                  inset 0 -1px 0 rgba(0, 100, 200, 0.1),
                  0 0 0 1px rgba(100, 150, 255, 0.2)
                `,
              }}
            >
              {/* Glossy border overlay */}
              <div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{
                  background:
                    "linear-gradient(145deg, rgba(100, 200, 255, 0.3) 0%, rgba(0, 100, 200, 0.1) 50%, rgba(200, 220, 255, 0.2) 100%)",
                  mixBlendMode: "overlay",
                }}
              />

              {/* Image container */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.alt}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />

                {/* Glossy overlay on image */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 50%, rgba(100,150,255,0.2) 100%)",
                  }}
                />
              </div>

              {/* Content */}
              <div className="relative p-6 bg-white/90 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-gray-800 text-center">
                  {product.title}
                </h3>
              </div>

              {/* Additional glossy highlight */}
              <div
                className="absolute top-0 left-0 w-full h-1"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(100, 200, 255, 0.6) 0%, rgba(200, 220, 255, 0.4) 50%, rgba(100, 200, 255, 0.6) 100%)",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsCards;
