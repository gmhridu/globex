"use client";
import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import GlobexLogo from "./GlobexLogo";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-secondary shadow-lg py-6" : "bg-transparent py-4"
      }`}
    >
      <div className="container flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <GlobexLogo className="h-12 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About Us</NavLink>

          <div className="relative group">
            <button className="text-white font-medium flex items-center">
              Who We Help <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="py-1">
                <a
                  href="/industry-1"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Manufacturing
                </a>
                <a
                  href="/industry-2"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Industrial Services
                </a>
                <a
                  href="/industry-3"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Supply Chain
                </a>
              </div>
            </div>
          </div>

          <NavLink href="/charity">Charity</NavLink>
          <NavLink href="/careers">Careers</NavLink>
          <NavLink href="/contact">Contact</NavLink>

          <div className="relative group">
            <button className="text-white font-medium flex items-center">
              Partner Login <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="py-1">
                <a
                  href="/client-login"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Client Portal
                </a>
                <a
                  href="/partner-login"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Partner Portal
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-secondary">
          <div className="container py-4 space-y-4">
            <Link href="/" className="block text-white font-medium">
              Home
            </Link>
            <Link href="/about" className="block text-white font-medium">
              About Us
            </Link>
            <Link href="/who-we-help" className="block text-white font-medium">
              Who We Help
            </Link>
            <Link href="/charity" className="block text-white font-medium">
              Charity
            </Link>
            <Link href="/careers" className="block text-white font-medium">
              Careers
            </Link>
            <Link href="/contact" className="block text-white font-medium">
              Contact
            </Link>
            <Link href="/login" className="block text-white font-medium">
              Partner Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    className="text-white font-medium hover:text-primary transition-colors"
  >
    {children}
  </a>
);

export default Navbar;
