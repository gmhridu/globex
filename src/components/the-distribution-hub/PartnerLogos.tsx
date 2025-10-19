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
  { name: 'Slack', logo: 'https://weareglobex.com/wp-content/uploads/2025/02/eyJ3IjoyMDQ4LCJoIjoyMDQ4LCJzY29wZSI6ImFwcCJ9-1280x458.webp' },
  { name: 'Samsung', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg' },
  { name: 'Anthropic', logo: 'https://weareglobex.com/wp-content/uploads/2025/03/Anthropic_Logo_1.png' },
  { name: 'MSI', logo: 'https://weareglobex.com/wp-content/uploads/2025/03/msi-logo_b.png' },
  { name: 'HubSpot', logo: 'https://weareglobex.com/wp-content/uploads/2025/03/5842a629a6515b1e0ad75afa.png' },
  { name: 'Toast', logo: 'https://weareglobex.com/wp-content/uploads/2024/10/Toast-color-logo.svg' },
];

const useCarousel = (items: Partner[], interval: number = 3000) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [items.length, interval]);

  const visibleItems = (() => {
    const start = currentIndex;
    const end = start + 5;
    const visible = items.slice(start, end);
    if (visible.length < 5) {
      visible.push(...items.slice(0, 5 - visible.length));
    }
    return visible;
  })();

  return { currentIndex, setCurrentIndex, visibleItems };
};

const PartnerLogoItem: React.FC<PartnerLogoItemProps> = ({ partner, index }) => (
  <motion.div
    key={`${partner.name}-${index}`}
    className="w-[140px] md:w-[180px] p-2 md:p-4 flex justify-center items-center"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.08 }}
  >
    <Image
      src={partner.logo}
      alt={`${partner.name} logo`}
      width={180}
      height={80}
      className="h-16 md:h-20 w-auto object-contain"
      loading="lazy"
      decoding="async"
    />
  </motion.div>
);

const PaginationDots: React.FC<PaginationDotsProps> = ({ total, currentIndex, onDotClick }) => (
  <div className="flex justify-center mt-8">
    <div className="flex space-x-2" role="tablist">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onDotClick(i)}
          className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
            i === currentIndex ? 'bg-primary' : 'bg-gray-300'
          }`}
          role="tab"
          aria-selected={i === currentIndex}
          aria-label={`Go to partner slide ${i + 1}`}
          tabIndex={0}
        />
      ))}
    </div>
  </div>
);

const PartnerLogos: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  const { currentIndex, setCurrentIndex, visibleItems } = useCarousel(PARTNERS);

  return (
    <section className="bg-slate-300/20 py-10" aria-label="Partner logos carousel">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-3xl font-bold mb-12">Our Partners</h2>

          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                className="flex justify-center items-center gap-6 md:gap-12"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                role="tabpanel"
                aria-label={`Partner logos slide ${currentIndex + 1}`}
              >
                {visibleItems.map((partner, index) => (
                  <PartnerLogoItem key={`${partner.name}-${index}`} partner={partner} index={index} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <PaginationDots
            total={PARTNERS.length}
            currentIndex={currentIndex}
            onDotClick={setCurrentIndex}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default PartnerLogos;
