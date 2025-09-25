"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const ImpactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <section className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Ready To Make an Impact?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-10">
            Join us in shaping the future! Whether you&apos;re looking to advance
            your career or bring fresh ideas to the table, we provide the
            platform and support to make it happen. Be part of a team where your
            contributions truly matter, and together, let&apos;s create lasting
            impact.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 ">
          <motion.div className="col-span-1 flex flex-wrap  gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="max-w-[280px] p-6 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                Our Mission
              </h3>
              <p className="text-gray-600">
                We are committed to driving innovation and delivering impactful
                solutions for our clients. Our mission is to create value
                through excellence, collaboration, and integrity, empowering
                businesses and people to thrive in an ever-changing world.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-[280px] p-6 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                Making an Impact
              </h3>
              <p className="text-gray-600">
                At Globex, we believe in the power of meaningful contributions.
                Whether through our services or community initiatives, we strive
                to make a lasting impact that benefits not only our clients but
                also the industries and communities we serve.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-[280px] p-6 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                Company Culture
              </h3>
              <p className="text-gray-600">
                Our culture is built on collaboration, inclusivity, and growth.
                We foster an environment where creativity and innovation are
                encouraged, and every team member has the opportunity to make a
                difference. Join us, and be part of a workplace where your voice
                is heard and your potential is nurtured.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="col-span-2 mt-8"
          >
            <Image
              src={"/assests/career/teams.jpg"}
              width={900}
              height={900}
              alt="Team"
              className="w-full rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
