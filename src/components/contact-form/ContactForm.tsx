"use client";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useInView } from "react-intersection-observer";

const ContactForm = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <section className="bg-white py-16 md:py-24">
      <div
        className="container"
        style={{
          backgroundImage:
            "url('/assests/contact-form/white-map-background.jpg')",
          backgroundBlendMode: "overlay",
          opacity: 0.9,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-bold mb-6">
              Speak to an international business advisor
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Get in touch to find out how we can help you achieve your
              international expansion goals.
            </p>
            <div className="mt-8 ">
              <a
                href="#contact"
                className="btn btn-primary group inline-flex items-center justify-center  text-lg px-8 py-4
               bg-primary text-black transition-all duration-300
               hover:bg-secondary hover:text-white"
              >
                <span className="relative z-10">GET STARTED NOW!</span>

                <span
                  className="transform translate-x-[-10px] opacity-0
                 transition-all duration-300 ease-in-out
                 group-hover:translate-x-3 group-hover:opacity-100"
                >
                  <ChevronRight className="w-5 h-5" />
                </span>
              </a>
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg shadow-md border p-8"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 p-1 border block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                    placeholder="Enter Your First Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="mt-1 p-1 border block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                    placeholder="Enter Your Last Name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Company
                  </label>
                  <input
                    type="text"
                    className="mt-1 p-1 border block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                    placeholder="Company"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    className="mt-1 p-1 border block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                    placeholder="Email Address"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone/Mobile
                </label>
                <input
                  type="tel"
                  className="mt-1 p-1 border block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                  placeholder="Mobile Number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Which of these describes you best?
                </label>
                <select className="mt-1 p-2 border block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50">
                  <option>
                    The idea of going international is new to me and I
                    haven&apos;t given it much thought
                  </option>
                  <option>
                    I&apos;m actively looking to expand internationally
                  </option>
                  <option>
                    We&apos;re already international but looking to grow further
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Tell us more
                </label>
                <textarea
                  rows={4}
                  className="mt-1 p-1 border block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                  placeholder="Tell us more"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full btn btn-primary hover:bg-secondary text-lg px-8 py-4 bg-primary text-black hover:text-white transition-all duration-300"
              >
                Submit Form
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
