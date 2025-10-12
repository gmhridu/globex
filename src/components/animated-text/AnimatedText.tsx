"use client";

import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AnimatedTextProps {
  text: string;
  delay?: number;
  className?: string;
}

export const AnimatedText = ({
  text,
  delay = 0,
  className,
}: AnimatedTextProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const letters = text.split("");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12, // Reduced stagger for tighter timing
        delayChildren: delay,
      },
    },
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 12, // Smoother damping
        stiffness: 150, // Lower stiffness for less bounce
        mass: 0.8, // Slightly heavier for smoother movement
        duration: 1, // Added duration as fallback
      },
    },
    hidden: {
      opacity: 0,
      y: 20, // Reduced initial offset
      scale: 0.95, // Closer to final scale
      rotateX: -45, // Reduced rotation for smoother entry
    },
  };

  return (
    <motion.span
      ref={ref}
      className={className}
      variants={container}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.span>
  );
};
