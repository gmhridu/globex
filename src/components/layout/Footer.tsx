"use client";

import Link from "next/link";
import { Linkedin } from "lucide-react";
import GlobexLogo from "../GlobexLogo";

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
      {/* Main Footer */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-3">
              <Link href="/" className="block mb-4">
                <GlobexLogo />
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
