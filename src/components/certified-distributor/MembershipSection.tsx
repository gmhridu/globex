"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "../ui/Button";

const fadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const MembershipSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      ref={ref}
      className="bg-white py-16 px-4 sm:px-6 lg:px-8 scroll-mt-20"
      id="membership"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          variants={fadeInVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
            Ready to Partner with Leading Manufacturers?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Become an approved distributor and gain exclusive access to our
            network of top manufacturers. Let’s grow together through meaningful
            partnerships.
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          className="bg-[#0F172A] rounded-2xl p-8 md:p-10 shadow-xl border border-blue-900/20"
          variants={fadeInVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
            {/* Left Column */}
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-white mb-6">
                Membership
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                The Globex network is open to trusted distributors who understand
                their local markets and are seeking new, high-quality products.
                Join a global ecosystem designed to help your business grow.
              </p>

              <Button
                href="/contact"
                className="bg-white text-black hover:bg-gray-100 font-semibold px-6 py-3 rounded-full transition-all duration-300 w-fit"
              >
                I WANT MORE INFORMATION
              </Button>
            </div>

            {/* Right Column */}
            <ul className="text-gray-300 space-y-4 list-disc pl-5 leading-relaxed">
              <li>
                <strong>Product Demand-Driven Sourcing:</strong> Tell us what
                categories you need, and we’ll connect you with the right
                manufacturers.
              </li>
              <li>
                <strong>Tailored Introductions:</strong> Match with suppliers
                whose products fit your catalog and market.
              </li>
              <li>
                <strong>First Look at New Products:</strong> Get priority access
                to export-ready goods before they hit broader markets.
              </li>
              <li>
                <strong>Dedicated Support Team:</strong> Collaborate with a
                Globex account manager to handle samples, terms, and logistics.
              </li>
              <li>
                <strong>Samples & Trials:</strong> Access discounted or free
                product samples to evaluate before ordering.
              </li>
              <li>
                <strong>Private Networking & Events:</strong> Attend Globex
                sessions to meet new suppliers and stay ahead of trends.
              </li>
              <li>
                <strong>Strategic Market Alignment:</strong> We match you with
                manufacturers that value your regional expertise and reach.
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MembershipSection;
