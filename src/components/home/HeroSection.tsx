'use client'
import { ChevronRight, Sparkles, ArrowDown } from "lucide-react";
import { motion, easeOut, useScroll, useTransform, useSpring } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Button from "../ui/Button";
import Link from "next/link";

const HeroSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { scrollYProgress } = useScroll({
    offset: ["start start", "end start"]
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // 3D Parallax transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '100px']);

  // Smooth spring animations
  const smoothBackgroundY = useSpring(backgroundY, { stiffness: 100, damping: 30 });
  const smoothTextY = useSpring(textY, { stiffness: 50, damping: 25 });

  // 3D Animation variants
  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      rotateX: -90,
      z: -100
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      z: 0,
      transition: {
        duration: 1.2,
        ease: easeOut,
        staggerChildren: 0.1
      }
    }
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      rotateY: -180
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateY: 0,
      transition: { duration: 0.8, ease: easeOut }
    }
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 50, rotateX: 45 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.8, delay: 0.4, ease: easeOut }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.5, rotateY: -90 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: { duration: 0.8, delay: 0.8, ease: easeOut }
    }
  };

  const floatingElements = [
    { icon: Sparkles, delay: 0, x: -200, y: -100 },
    { icon: Sparkles, delay: 0.5, x: 200, y: -50 },
    { icon: Sparkles, delay: 1, x: -100, y: 100 },
  ];

  return (
    <section
      ref={ref}
      className="relative bg-secondary pt-16 md:pt-24 min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] flex items-center overflow-hidden"
      style={{ perspective: '1000px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 3D Animated Background with Parallax */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/assests/home/hero.jpg')",
          backgroundBlendMode: "overlay",
          y: smoothBackgroundY,
          scale: backgroundScale,
          rotateX: useTransform(scrollYProgress, [0, 1], [0, 5]),
        }}
        initial={{ scale: 1.2, opacity: 0, rotateY: -10 }}
        animate={{ scale: 1, opacity: 1, rotateY: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      {/* Enhanced Gradient Overlay with 3D effect */}
      <motion.div
        className="absolute inset-0 z-5"
        style={{
          background: useTransform(
            scrollYProgress,
            [0, 1],
            [
              'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)',
              'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.2) 100%)'
            ]
          ),
        }}
      />

      {/* Floating 3D Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute z-10 pointer-events-none"
          style={{
            x: element.x,
            y: element.y,
          }}
          initial={{ opacity: 0, scale: 0, rotateZ: 0 }}
          animate={{
            opacity: [0, 1, 1, 0],
            scale: [0, 1, 1, 0],
            rotateZ: [0, 360],
            y: [element.y, element.y - 50, element.y - 50, element.y - 100]
          }}
          transition={{
            duration: 4,
            delay: element.delay,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut"
          }}
        >
          <element.icon className="w-6 h-6 text-primary/60" />
        </motion.div>
      ))}

      {/* Main Content with 3D Transforms */}
      <div className="container relative z-20 py-8 md:py-16 lg:py-24 px-4 md:px-6">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            style={{
              y: smoothTextY,
              rotateX: useTransform(scrollYProgress, [0, 1], [0, -5]),
              z: useTransform(scrollYProgress, [0, 1], [0, 50])
            }}
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-4 md:mb-6"
              variants={titleVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              style={{
                transformStyle: 'preserve-3d',
                textShadow: '0 10px 30px rgba(0,0,0,0.5)'
              }}
            >
              {"Build Your".split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  className="inline-block"
                  style={{
                    transformOrigin: 'center bottom',
                  }}
                  whileHover={{
                    rotateY: [0, -10, 10, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
              <br />
              <motion.span
                className="text-primary ml-2 md:ml-3"
                variants={letterVariants}
                whileHover={{
                  scale: [1, 1.1, 1],
                  textShadow: ['0 0 0px rgba(59, 130, 246, 1)', '0 0 20px rgba(59, 130, 246, 1)', '0 0 0px rgba(59, 130, 246, 1)'],
                  transition: { duration: 0.5 }
                }}
              >
                Distribution
              </motion.span>
              <motion.span variants={letterVariants}>. </motion.span>
              <br />
              {"Accelerate Your".split("").map((char, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  className="inline-block"
                  whileHover={{
                    rotateY: [0, 10, -10, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
              <motion.span
                className="text-primary"
                variants={letterVariants}
                whileHover={{
                  scale: [1, 1.1, 1],
                  textShadow: ['0 0 0px rgba(59, 130, 246, 1)', '0 0 20px rgba(59, 130, 246, 1)', '0 0 0px rgba(59, 130, 246, 1)'],
                  transition: { duration: 0.5 }
                }}
              >
                {" "}Revenue
              </motion.span>
              <motion.span variants={letterVariants}>.</motion.span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-white/90 leading-relaxed max-w-4xl"
              variants={paragraphVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              style={{
                transform: `perspective(1000px) rotateX(${mousePosition.y * 2}deg) rotateY(${mousePosition.x * 2}deg)`,
                transformOrigin: 'center center'
              }}
            >
              We help businesses expand, scale, and succeed in international
              markets with a results-driven strategy.
            </motion.p>

            <motion.div
              variants={buttonVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                boxShadow: '0 20px 40px rgba(59, 130, 246, 0.4)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                style={{
                  transform: `perspective(1000px) rotateX(${mousePosition.y * 5}deg) rotateY(${mousePosition.x * 5}deg)`,
                }}
              >
                <Button
                  className="group mt-4 md:mt-8 inline-flex w-full sm:w-[220px] items-center justify-center text-base md:text-lg
            bg-primary text-black transition-all duration-500
            hover:bg-white hover:text-black hover:shadow-2xl hover:shadow-primary/40
            focus:ring-4 focus:ring-primary/50 relative overflow-hidden"
                >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
                <Link href="/contact" className="inline-flex items-center text-nowrap relative z-10">
                  GET IN TOUCH
                  <motion.div
                    className="ml-2"
                    whileHover={{ x: 5, rotate: 45 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronRight className="h-4 w-4 md:h-5 md:w-5" />
                  </motion.div>
                </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center text-white/70"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <ArrowDown className="w-6 h-6" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
