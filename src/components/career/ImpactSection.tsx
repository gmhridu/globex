"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const ImpactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-gray-900">
            Ready To Make an Impact?
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Join us in shaping the future! Whether you&apos;re looking to advance
            your career or bring fresh ideas to the table, we provide the
            platform and support to make it happen. Be part of a team where your
            contributions truly matter, and together, let&apos;s create lasting
            impact.
          </p>
        </motion.div>

        {/* Image + Cards */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative w-full aspect-[6/3.2] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/assests/career/teams.jpg"
                alt="Team Collaboration"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>

          {/* Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Our Mission
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We are committed to driving innovation and delivering impactful
                solutions for our clients. Our mission is to create value
                through excellence, collaboration, and integrity.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Making an Impact
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                At Globex, we believe in the power of meaningful contributions.
                We strive to make a lasting difference for our clients,
                industries, and communities.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow sm:col-span-2">
              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Company Culture
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our culture is built on collaboration, inclusivity, and growth.
                We foster an environment where innovation thrives and every team
                member&apos;s voice matters.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
