"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  {
    name: "PayPal",
    logo: "/images/partners/paypal.png",
    width: 120,
    height: 40,
  },
  {
    name: "Toast",
    logo: "/images/partners/toast.svg",
    width: 100,
    height: 35,
  },
  {
    name: "GoCardless",
    logo: "/images/partners/gocardless.png",
    width: 140,
    height: 30,
  },
  {
    name: "Shopify",
    logo: "/images/partners/shopify.webp",
    width: 120,
    height: 40,
  },
  {
    name: "Samsung",
    logo: "/images/partners/samsung.png",
    width: 130,
    height: 35,
  },
  {
    name: "Anthropic",
    logo: "/images/partners/anthropic.png",
    width: 110,
    height: 30,
  },
  {
    name: "MSI",
    logo: "/images/partners/msi.png",
    width: 80,
    height: 40,
  },
  {
    name: "Clay",
    logo: "/images/partners/clay.png",
    width: 90,
    height: 30,
  },
  {
    name: "Notion",
    logo: "/images/partners/notion.svg",
    width: 100,
    height: 35,
  },
];

export default function PartnersSection() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Partners</h2>
        </motion.div>

        {/* Desktop Logo Grid */}
        <div className="hidden md:grid grid-cols-5 gap-8 items-center justify-items-center">
          {partners.slice(0, 5).map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center justify-center h-16 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={partner.width}
                height={partner.height}
                className="max-h-12 w-auto object-contain"
              />
            </motion.div>
          ))}
        </div>

        <div className="hidden md:grid grid-cols-4 gap-8 items-center justify-items-center mt-8">
          {partners.slice(5).map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index + 5) * 0.1 }}
              className="flex items-center justify-center h-16 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                width={partner.width}
                height={partner.height}
                className="max-h-12 w-auto object-contain"
              />
            </motion.div>
          ))}
        </div>

        {/* Mobile Scrolling Carousel */}
        <div className="md:hidden relative overflow-hidden">
          <motion.div
            animate={{
              x: [0, -100 * partners.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
            className="flex space-x-12 w-max"
          >
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex items-center justify-center h-16 flex-shrink-0 grayscale opacity-70"
              >
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={partner.width}
                  height={partner.height}
                  className="max-h-10 w-auto object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
