"use client";

import Link from "next/link";
import Image from "next/image";
import { Linkedin } from "lucide-react";

const footerLinks = {
  main: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Careers", href: "/career" },
  ],
  services: [
    { label: "The Distribution Hub", href: "/the-distribution-hub" },
    { label: "The Private-Label Hub", href: "/private-label-hub" },
    { label: "The Contract MFG Hub", href: "/contract-manufacturing" },
  ],
  company: [
    { label: "Contact", href: "/contact" },
    { label: "Charity", href: "/shooting-star" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "GDPR Statement", href: "/gdpr-statement" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-white">
      {/* CTA Section */}
      <div className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div
            className="bg-white rounded-3xl p-16 bg-cover bg-center relative overflow-hidden"
            style={{
              backgroundImage: "url('/images/white-map-background.jpg')",
            }}
          >
            <div className="absolute inset-0 bg-white/90"></div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-4xl lg:text-6xl font-bold text-dark-900 leading-tight mb-4">
                  Speak to an international
                  <br />
                  business advisor
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Get in touch to find out how we can help you achieve your
                  international expansion goals.
                </p>
                <Link href="/contact" className="btn btn-primary inline-flex">
                  Get Started Now!
                </Link>
              </div>

              {/* Contact Form */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="Enter Your First Name"
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        placeholder="Enter Your Last Name"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        placeholder="Company"
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email Address"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone/Mobile
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Mobile Number"
                      className="form-input"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Which of these describes you best?
                    </label>
                    <select
                      id="description"
                      name="description"
                      className="form-input form-select"
                    >
                      <option value="">- Select -</option>
                      <option value="new">
                        The idea of going international is new to me and I
                        haven&apos;t given it much thought until now
                      </option>
                      <option value="thinking">
                        I&apos;ve thought of going international for some time
                        but it seems hard and I don&apos;t know where to start
                      </option>
                      <option value="tried">
                        I&apos;ve tried expanding my business overseas but with
                        no or limited success
                      </option>
                      <option value="already">
                        I&apos;m already in international markets and I want to
                        go faster
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Tell us more
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell us more"
                      rows={3}
                      className="form-input form-textarea"
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary w-full">
                    Submit Form
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-3">
              <Link href="/" className="block mb-4">
                <Image
                  src="/images/logo-white.png"
                  alt="We Are Globex"
                  width={200}
                  height={51}
                  className="h-12 w-auto"
                />
              </Link>
              <p className="text-primary-500 font-semibold text-lg mb-4">
                A Growth Agency built for Manufacturing
              </p>
              <p className="text-gray-300 leading-relaxed">
                We help manufacturers scale faster by delivering qualified
                opportunities, strategic expansion support, and global partner
                connections – so you can focus on production while we fuel your
                growth.
              </p>
            </div>

            {/* Main Links */}
            <div>
              <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
                Main
              </h4>
              <ul className="space-y-2">
                {footerLinks.main.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
                Services
              </h4>
              <ul className="space-y-2">
                {footerLinks.services.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4">
                Company
              </h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 <span className="text-gray-500">•</span> We Are Globex ™️
            </div>

            <div className="flex items-center space-x-4">
              <Link
                href="https://www.linkedin.com/company/weareglobex/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-primary-500 rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
