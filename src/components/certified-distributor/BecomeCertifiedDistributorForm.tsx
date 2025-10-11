"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ContactForm2 from "../contact-form/ContactForm2";

const fadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const BecomeCertifiedDistributorForm = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // const handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({ ...prev, [name]: value }));
  // };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // In a real app, you'd send this data to your backend
  //   console.log("Form submitted:", formData);
  //   alert("Thank you! Our team will contact you shortly.");
  // };

  return (
    <section className="bg-[#0F172A] py-16" ref={ref}>
      <div className="container">
        <motion.div
          className="max-w-4xl mx-auto rounded-2xl p-8 md:p-10 shadow-lg"
          variants={fadeInVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Become a Certified Distributor
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join our exclusive network of distributors and connect with
              leading manufacturers.
              <br />
              Fill out the below to register your company with Globex.
            </p>
          </div>

          <ContactForm2 />
        </motion.div>
      </div>
    </section>
  );
};

export default BecomeCertifiedDistributorForm;
