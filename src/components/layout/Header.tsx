"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import GlobexLogo from "../home/GlobexLogo";

interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

const navigation: NavigationItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Tailored Solutions",
    href: "#",
    children: [
      {
        label: "The Distribution Hub",
        href: "/the-distribution-hub",
      },
      {
        label: "The Private-Label Hub",
        href: "/private-label-hub",
      },
      {
        label: "The Contract-Manufacturing Hub",
        href: "/contract-manufacturing",
      },
    ],
  },
  {
    label: "Industries",
    href: "#",
    children: [
      {
        label: "Manufacturing",
        href: "/general-manufacturing",
      },
      {
        label: "Contract Manufacturing",
        href: "/contract-manufacturing",
      },
      {
        label: "Advanced Manufacturing Industry 4.0",
        href: "/advanced-manufacturing-industry",
      },
      {
        label: "Automation Solutions",
        href: "/automation-solutions",
      },
      {
        label: "Facility Industrial Services",
        href: "/facility-industrial-services",
      },
    ],
  },
  {
    label: "Our Markets",
    href: "/our-markets",
  },
  {
    label: "Charity",
    href: "/shooting-star",
  },
  {
    label: "Careers",
    href: "/career",
  },
  {
    label: "Blogs",
    href: "/blogs"
  },
  {
    label: "Contact",
    href: "/contact",
  },
  {
    label: "For Distributors",
    href: "/certified-distributor",
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleDropdown = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-secondary shadow-lg py-6" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <GlobexLogo className="h-12 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.label} className="relative group">
                {item.children ? (
                  <div>
                    <button
                      className={`flex items-center space-x-1 font-semibold text-base transition-colors duration-200 ${
                        isScrolled
                          ? "text-white hover:text-primary-500"
                          : "text-white hover:text-primary-400"
                      }`}
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100 py-2"
                          onMouseEnter={() => setActiveDropdown(item.label)}
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-4 py-2 text-gray-800 hover:bg-gray-50 hover:text-primary-500 transition-colors duration-200"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`font-semibold text-base transition-colors duration-200 ${
                      isScrolled
                        ? "text-white hover:text-primary-500"
                        : "text-white hover:text-primary-400"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 rounded-md transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X
                className={`w-6 h-6 text-white`}
              />
            ) : (
              <Menu
                className={`w-6 h-6 text-white`}
              />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-white rounded-lg shadow-lg mt-4 border border-gray-100"
            >
              <div className="py-4">
                {navigation.map((item) => (
                  <div key={item.label}>
                    {item.children ? (
                      <div>
                        <button
                          onClick={() => handleDropdown(item.label)}
                          className="flex items-center justify-between w-full px-4 py-3 text-gray-900 hover:bg-gray-50 font-medium"
                        >
                          <span>{item.label}</span>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              activeDropdown === item.label
                                ? "rotate-180"
                                : "rotate-0"
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.label && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden bg-gray-50"
                            >
                              {item.children.map((child) => (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className="block px-6 py-2 text-gray-700 hover:bg-gray-100 hover:text-primary-500"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {child.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="block px-4 py-3 text-gray-900 hover:bg-gray-50 hover:text-primary-500 font-medium"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
