'use client'
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

interface Partner {
  name: string;
  logo: string;
}

interface PartnerLogoItemProps {
  partner: Partner;
  index: number;
}

interface PaginationDotsProps {
  total: number;
  currentIndex: number;
  onDotClick: (index: number) => void;
}

const PARTNERS: Partner[] = [
  { name: 'Slack', logo: '/assests/home/slack.webp' },
  { name: 'Samsung', logo: '/assests/home/samsung.png' },
  { name: 'Anthropic', logo: '/assests/home/anthropic.png' },
  { name: 'MSI', logo: '/assests/home/msi.png' },
  { name: 'HubSpot', logo: '/assests/home/hubspot.png' },
  { name: 'Toast', logo: '/assests/home/toast.svg' },
];

const useCarousel = (items: Partner[], interval: number = 3000) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Set initial window width
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [items.length, interval]);

  const visibleItems = (() => {
    // Responsive number of items based on screen size
    const getItemsPerView = () => {
      if (windowWidth < 640) return 2; // Mobile
      if (windowWidth < 768) return 3; // Tablet
      if (windowWidth < 1024) return 4; // Small desktop
      return 5; // Large desktop
    };

    const itemsPerView = getItemsPerView();
    const start = currentIndex;
    const end = start + itemsPerView;
    const visible = items.slice(start, end);

    // Fill remaining slots if needed
    if (visible.length < itemsPerView) {
      visible.push(...items.slice(0, itemsPerView - visible.length));
    }
    return visible;
  })();

  return { currentIndex, setCurrentIndex, visibleItems, windowWidth };
};

const PartnerLogoItem: React.FC<PartnerLogoItemProps> = ({ partner, index }) => (
  <motion.div
    key={`${partner.name}-${index}`}
    className="w-20 sm:w-24 md:w-[140px] lg:w-[180px] p-1 sm:p-2 md:p-4 flex justify-center items-center relative flex-shrink-0"
    initial={{ opacity: 0, y: 50, rotateX: -45, z: -50 }}
    animate={{ opacity: 1, y: 0, rotateX: 0, z: 0 }}
    transition={{
      duration: 0.8,
      delay: index * 0.1,
      type: "spring",
      stiffness: 100
    }}
    whileHover={{
      scale: 1.05,
      rotateY: 10,
      rotateX: -8,
      z: 30,
      transition: { duration: 0.3, type: "spring", stiffness: 300 }
    }}
    whileTap={{ scale: 0.9 }}
    style={{
      transformStyle: 'preserve-3d',
      perspective: '1000px'
    }}
  >
    {/* 3D Shadow effect */}
    <motion.div
      className="absolute inset-0 bg-primary/20 rounded-lg blur-xl"
      style={{
        transform: 'translateZ(-10px) scale(0.9)',
        opacity: 0
      }}
      whileHover={{
        opacity: 0.3,
        scale: 1.1,
        transition: { duration: 0.3 }
      }}
    />

    {/* Logo container with 3D effect */}
    <motion.div
      className="relative z-10 p-2 sm:p-3 md:p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20"
      whileHover={{
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderColor: 'rgba(59, 130, 246, 0.5)',
        boxShadow: '0 20px 40px rgba(59, 130, 246, 0.3)'
      }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        whileHover={{
          filter: 'brightness(1.2) contrast(1.1)',
          transition: { duration: 0.2 }
        }}
      >
        <Image
          src={partner.logo}
          alt={`${partner.name} logo`}
          width={180}
          height={80}
          className="h-8 sm:h-10 md:h-16 lg:h-20 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-500"
          loading="lazy"
          decoding="async"
        />
      </motion.div>
    </motion.div>

    {/* Reflection effect */}
    <motion.div
      className="absolute bottom-0 left-0 right-0 h-2 sm:h-3 md:h-4 bg-gradient-to-t from-white/20 to-transparent rounded-b-lg"
      style={{ transform: 'translateY(100%)' }}
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    />
  </motion.div>
);

const PaginationDots: React.FC<PaginationDotsProps> = ({ total, currentIndex, onDotClick }) => (
  <div className="flex justify-center mt-6 sm:mt-8 md:mt-12">
    <div className="flex space-x-2 sm:space-x-3 p-2 sm:p-3 md:p-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20" role="tablist">
      {Array.from({ length: total }).map((_, i) => (
        <motion.button
          key={i}
          onClick={() => onDotClick(i)}
          className={`relative h-2 w-2 sm:h-3 sm:w-3 rounded-full transition-all duration-500 ${
            i === currentIndex
              ? 'bg-primary shadow-lg shadow-primary/50'
              : 'bg-gray-400 hover:bg-gray-300'
          }`}
          role="tab"
          aria-selected={i === currentIndex}
          aria-label={`Go to partner slide ${i + 1}`}
          tabIndex={0}
          whileHover={{
            scale: 1.25,
            boxShadow: i === currentIndex
              ? '0 0 15px rgba(59, 130, 246, 0.8)'
              : '0 0 10px rgba(156, 163, 175, 0.5)'
          }}
          whileTap={{ scale: 0.8 }}
          animate={{
            scale: i === currentIndex ? 1.15 : 1,
            backgroundColor: i === currentIndex
              ? 'rgb(59, 130, 246)'
              : 'rgb(156, 163, 175)'
          }}
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Active dot glow effect */}
          {i === currentIndex && (
            <motion.div
              className="absolute inset-0 rounded-full bg-primary"
              initial={{ scale: 1, opacity: 0.7 }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.7, 0.3, 0.7]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          )}
        </motion.button>
      ))}
    </div>
  </div>
);

const PartnerLogos: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const { currentIndex, setCurrentIndex, visibleItems, windowWidth } = useCarousel(PARTNERS);

  return (
    <section
      className="bg-gradient-to-br from-slate-300/20 via-slate-200/10 to-slate-300/20 py-8 sm:py-12 md:py-16 lg:py-20 relative overflow-hidden"
      aria-label="Partner logos carousel"
      style={{ perspective: '1200px' }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 border border-primary rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-12 sm:w-18 md:w-24 h-12 sm:h-18 md:h-24 border border-primary rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 border border-primary rounded-full"></div>
      </div>

      <div className="container mx-auto px-2 sm:px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30, rotateX: -15 }}
          animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-8 sm:mb-12 md:mb-16 text-gray-900"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Trusted by <span className="text-primary">Industry Leaders</span>
          </motion.h2>

          <div className="relative overflow-hidden px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="flex justify-center items-center gap-2 sm:gap-4 md:gap-6 lg:gap-12"
                initial={{
                  opacity: 0,
                  x: 50,
                  rotateY: -20,
                  scale: 0.95
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  rotateY: 0,
                  scale: 1
                }}
                exit={{
                  opacity: 0,
                  x: -50,
                  rotateY: 20,
                  scale: 0.95
                }}
                transition={{
                  duration: 0.6,
                  ease: 'easeInOut',
                  type: "spring",
                  stiffness: 120
                }}
                role="tabpanel"
                aria-label={`Partner logos slide ${currentIndex + 1}`}
                style={{
                  transformStyle: 'preserve-3d',
                  minWidth: 'max-content'
                }}
              >
                {visibleItems.map((partner, index) => (
                  <PartnerLogoItem
                    key={`${partner.name}-${currentIndex}-${index}`}
                    partner={partner}
                    index={index}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <PaginationDots
              total={PARTNERS.length}
              currentIndex={currentIndex}
              onDotClick={setCurrentIndex}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerLogos;
