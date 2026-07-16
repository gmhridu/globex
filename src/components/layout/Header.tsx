"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import GlobexLogo from "../home/GlobexLogo";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

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
    href: "/blogs",
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
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <button
                className="lg:hidden p-2 rounded-md transition-colors duration-200"
                aria-label="Toggle mobile menu"
              >
                <Menu className="w-8 h-8 text-white" />
              </button>
            </SheetTrigger>
            <SheetContent side="full" className="bg-secondary border-none p-0">
              <SheetHeader>
                <SheetTitle className="sr-only">Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col h-full bg-secondary pt-20 pb-10 px-6 overflow-y-auto">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-6">
                  <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                    <GlobexLogo className="h-10 w-auto" />
                  </Link>
                </div>

                {/* Mobile Navigation Links */}
                <nav className="flex flex-col space-y-2">
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
                    >
                      {item.children ? (
                        <div className="flex flex-col">
                          <button
                            onClick={() => handleDropdown(item.label)}
                            className="flex items-center justify-between w-full py-4 text-xl font-bold text-white group"
                          >
                            <span className="group-hover:text-primary-400 transition-colors uppercase tracking-wider">
                              {item.label}
                            </span>
                            <ChevronDown
                              className={`w-5 h-5 transition-transform duration-300 ${
                                activeDropdown === item.label
                                  ? "rotate-180 text-primary-400"
                                  : "rotate-0 text-white/50"
                              }`}
                            />
                          </button>
                          <AnimatePresence>
                            {activeDropdown === item.label && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{
                                  duration: 0.3,
                                  ease: "easeInOut",
                                }}
                                className="overflow-hidden bg-white/5 rounded-xl mt-1"
                              >
                                <div className="py-2 flex flex-col">
                                  {item.children.map((child, childIndex) => (
                                    <motion.div
                                      key={child.href}
                                      initial={{ opacity: 0, x: -10 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{
                                        delay: 0.1 + childIndex * 0.03,
                                      }}
                                    >
                                      <Link
                                        href={child.href}
                                        className="block px-6 py-3 text-white/80 hover:text-primary-400 hover:bg-white/5 transition-all"
                                        onClick={() =>
                                          setIsMobileMenuOpen(false)
                                        }
                                      >
                                        {child.label}
                                      </Link>
                                    </motion.div>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className="block py-4 text-xl font-bold text-white hover:text-primary-400 transition-all uppercase tracking-wider"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </nav>

                {/* Mobile Menu Footer/Contact */}
                <motion.div
                  className="mt-auto pt-10 border-t border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <p className="text-white/50 text-sm mb-4 uppercase tracking-widest font-semibold text-center">
                    Get in Touch
                  </p>
                  <div className="flex flex-col space-y-4 items-center">
                    <Link
                      href="/contact"
                      className="w-full bg-primary-500 text-white text-center py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-primary-600 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Request a Quote
                    </Link>
                  </div>
                </motion.div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
