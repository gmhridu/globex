'use client'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Phone, Mail, MapPin, Linkedin } from "lucide-react";
import ContactForm2 from "../contact-form/ContactForm2";

const ContactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <section className="bg-blue-50 py-16 md:py-24">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-start justify-between gap-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left w-full"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Have questions?</h2>
          <p className="text-lg text-gray-600 mb-8">
            We&apos;d love to hear from you! Whether you have a question about our services, want to learn more about how we can help expand your business, or are ready to take the next step in transforming your market reach, we&apos;re here to assist. Simply fill out the form below or reach out directly, and a member of our team will get back to you promptly.
          </p>
          <div className="space-y-4 grid grid-cols-2 md:grid-cols-1">
            <div className="flex items-center space-x-3">
              <MapPin className="text-green-500" />
              <p className="text-left">Our office<br />60 London Wall, London EC2M 5TQ</p>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="text-orange-500" />
              <p className="text-left">Send us an email<br />info@weareglobex.com</p>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="text-purple-500" />
              <p className="text-left">Call us<br />(+44) 203 829 9510</p>
            </div>
            <div className="flex items-center space-x-3">
              <Linkedin className="text-blue-600" />
              <p className="text-left">Join Us<br />LinkedIn</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ContactForm2 />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;