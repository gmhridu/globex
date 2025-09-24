'use client'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { Phone, Mail, MapPin, Linkedin } from "lucide-react";
import CountryList, { Country } from 'country-list-with-dial-code-and-flag';

const ContactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const countryList = CountryList.getAll()
        .sort((a, b) => a.name.localeCompare(b.name));
      setCountries(countryList);
    } catch (error) {
      console.error('Error loading countries:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <section className="bg-blue-50 py-16 md:py-24">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-start justify-between gap-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center lg:text-left max-w-xl"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Have questions?</h2>
          <p className="text-lg text-gray-600 mb-8">
            We'd love to hear from you! Whether you have a question about our services, want to learn more about how we can help expand your business, or are ready to take the next step in transforming your market reach, we're here to assist. Simply fill out the form below or reach out directly, and a member of our team will get back to you promptly.
          </p>
          <div className="space-y-4">
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
          className="bg-white p-6 rounded-lg shadow-lg w-full lg:w-96"
        >
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="w-full sm:w-1/2">
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input type="text" placeholder="First Name" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div className="w-full sm:w-1/2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input type="text" placeholder="Last Name" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="w-full sm:w-1/2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Email <span className="text-red-500">*</span></label>
                <input type="email" placeholder="Email Address" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>
              <div className="w-full sm:w-1/2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone/Mobile</label>
                <div className="flex">
                  <select 
                    className="w-1/3 p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    disabled={loading}
                    defaultValue="+880"
                  >
                    {loading ? (
                      <option>Loading...</option>
                    ) : (
                      countries.map((country: any, index) => (
                        <option key={`${country.code}-${index}`} value={country.dial_code}>
                          {country.flag} {country.dial_code}
                        </option>
                      ))
                    )}
                  </select>
                  <input 
                    type="tel" 
                    placeholder="Mobile Number" 
                    className="w-2/3 p-3 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                  />
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <input type="text" placeholder="Subject" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Message <span className="text-red-500">*</span></label>
              <textarea placeholder="Your Message" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required rows={4}></textarea>
            </div>
            <button className="w-full bg-gray-800 text-white p-3 rounded-lg hover:bg-gray-700 transition-colors">
              Submit Form
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;