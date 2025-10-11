"use client";
import { motion, easeOut } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "../ui/Button";

const fadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const MembershipSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="bg-white py-16" ref={ref}>
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Partner with Leading Manufacturers?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We’d love to get to know you better! Become an approved distributor and gain exclusive access to our network of top manufacturers.
          </p>
        </div>

        {/* Main Card */}
        <motion.div
          className="bg-[#0F172A] rounded-2xl p-8 md:p-10 shadow-lg border border-blue-900/20"
          variants={fadeInVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Left Column - Title & CTA */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">Membership</h3>
              <Button
                href="/contact"
                className="bg-white text-black hover:bg-gray-100 font-semibold px-6 py-2 rounded-full transition-all duration-300"
              >
                I WANT MORE INFORMATION
              </Button>
            </div>

            {/* Right Column - Description & Bullet Points */}
            <div className="text-gray-300 space-y-4">
              <p className="mb-4">
                The Globex network is open to trusted distributors who understand their local markets and are actively seeking new, high-quality products. Our membership is designed to give you a voice—tell us what your market needs, and we’ll connect you directly with manufacturers ready to support your growth.
              </p>

              <ul className="space-y-3 list-disc pl-5">
                <li><strong>Product Demand-Driven Sourcing:</strong> Let us know the product categories you’re looking for, and we’ll source manufacturers aligned with your region’s needs.</li>
                <li><strong>Tailored Introductions to Manufacturers:</strong> Get matched with suppliers whose products suit your catalog and market—helping you build meaningful, profitable partnerships.</li>
                <li><strong>First Look at New Products:</strong> Be the first to hear about export-ready products before they reach broader markets, giving you a head start on distribution.</li>
                <li><strong>Dedicated Support Team:</strong> Work with a Globex account manager who will help coordinate samples, communication, and commercial terms.</li>
                <li><strong>Samples & Trials:</strong> Gain access to discounted or free product samples, allowing you to test products before placing larger orders.</li>
                <li><strong>Private Networking & Trade Access:</strong> Attend Globex-hosted events, webinars, and closed-door sessions to meet new suppliers and stay ahead of industry trends.</li>
                <li><strong>Strategic Market Alignment:</strong> We prioritize distributors by region and product type—ensuring you’re matched with manufacturers who value your expertise and reach.</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MembershipSection;
