"use client";

import { motion } from "framer-motion";

const cities = [
  { left: "22%", top: "28%" }, // UK
  { left: "33%", top: "24%" }, // Germany
  { left: "42%", top: "34%" }, // Italy
  { left: "55%", top: "30%" }, // Turkey
  { left: "63%", top: "44%" }, // Saudi
  { left: "50%", top: "48%" }, // Egypt
];

const HeroMap = () => {
  return (
    <div className="absolute inset-0">
      {/* Map Background */}
      <motion.img
        initial={{ opacity: 0, scale: 1.08 }}
        animate={{ opacity: 0.28, scale: 1 }}
        transition={{ duration: 1.4 }}
        src="/assests/home/world-map-dark.svg"
        alt="Map"
        className="absolute right-0 top-12 h-[85%] w-full object-contain select-none pointer-events-none"
      />

      {/* Glow */}
      <div className="absolute right-20 top-24 h-162.5 w-162.5 rounded-full bg-[#D9A441]/10 blur-[120px]" />

      {/* Animated Routes */}
      <svg viewBox="0 0 1000 700" className="absolute inset-0 h-full w-full">
        <defs>
          <linearGradient id="goldRoute">
            <stop offset="0%" stopColor="#8A6120" />
            <stop offset="50%" stopColor="#F4C96B" />
            <stop offset="100%" stopColor="#D9A441" />
          </linearGradient>
        </defs>

        {[
          "M220 190 C300 170 350 180 430 220",
          "M430 220 C520 250 560 230 610 200",
          "M610 200 C690 240 710 300 670 390",
          "M430 220 C470 300 490 360 520 430",
          "M520 430 C610 390 690 360 760 410",
        ].map((path, i) => (
          <motion.path
            key={i}
            d={path}
            stroke="url(#goldRoute)"
            strokeWidth="2.5"
            fill="transparent"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2.5,
              delay: i * 0.35,
            }}
          />
        ))}
      </svg>

      {/* Cities */}
      {cities.map((city, index) => (
        <motion.div
          key={index}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: index * 0.25,
          }}
          className="absolute"
          style={{
            left: city.left,
            top: city.top,
          }}
        >
          <motion.div
            animate={{
              scale: [1, 2.2, 1],
              opacity: [0.6, 0, 0.6],
            }}
            transition={{
              repeat: Infinity,
              duration: 2.4,
            }}
            className="absolute h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D9A441]"
          />

          <div className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#F4C96B] bg-[#D9A441] shadow-[0_0_18px_#F4C96B]" />
        </motion.div>
      ))}

      {/* Floating Glow Orbs */}
      {[1, 2, 3].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [-8, 8, -8],
            opacity: [0.25, 0.45, 0.25],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
          }}
          className="absolute rounded-full bg-[#D9A441]"
          style={{
            width: 180 - i * 40,
            height: 180 - i * 40,
            right: `${18 + i * 10}%`,
            top: `${18 + i * 12}%`,
            filter: "blur(70px)",
          }}
        />
      ))}

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />
    </div>
  );
};

export default HeroMap;
