"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/content";
import { HiArrowDown } from "react-icons/hi";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Multi-layer gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cream via-neutral-50 to-primary-light/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/30" />
      </div>
      
      {/* Geometric pattern overlay */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h50v50H0zM50 50h50v50H50z' fill='%23000000' /%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="font-serif text-neutral-900 mb-8 leading-tight">
            {siteContent.hero.title}
          </h1>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-[1px] bg-primary mx-auto mb-8"
          />
          
          <p className="text-xl md:text-2xl text-neutral-600 max-w-3xl mx-auto font-light leading-relaxed mb-12">
            {siteContent.hero.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#contact"
            className="px-8 py-4 bg-primary text-white hover:bg-primary-dark transition-all duration-300 font-medium uppercase tracking-wider text-sm shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get Started
          </a>
          <a
            href="#about"
            className="px-8 py-4 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 font-medium uppercase tracking-wider text-sm"
          >
            Learn More
          </a>
        </motion.div>
      </div>

      {/* Elegant scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center group">
          <span className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-3 font-medium">
            Discover
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <HiArrowDown className="w-5 h-5 text-primary group-hover:text-primary-dark transition-colors" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}