"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 group">
            <Image
              src="/images/logo-transparent.png"
              alt="KM Homes"
              width={45}
              height={45}
              className="object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span className="text-xl font-semibold text-neutral-900 tracking-tight">
              KM Homes
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-neutral-700 hover:text-primary font-medium text-sm uppercase tracking-wider transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-neutral-700 hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <HiX className="w-6 h-6" />
            ) : (
              <HiMenu className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 overflow-hidden"
            >
              <ul className="flex flex-col space-y-4 py-4 border-t border-neutral-200">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-neutral-700 hover:text-primary font-medium text-sm uppercase tracking-wider transition-colors duration-300 px-2"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}