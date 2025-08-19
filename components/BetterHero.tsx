"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function BetterHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Split Layout Container */}
      <div className="container mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white"
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block text-primary uppercase tracking-[0.3em] text-sm font-medium mb-6"
            >
              Welcome to KM Homes
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-serif text-5xl lg:text-6xl xl:text-7xl font-light mb-6 leading-tight"
            >
              Your Home,
              <span className="block text-primary">Away From Home</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-neutral-300 mb-10 leading-relaxed max-w-xl"
            >
              Professional property management serving modern professionals. 
              From travel nurses to consultants, we provide meticulously 
              managed properties that feel like home.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link 
                href="/services" 
                className="inline-block px-8 py-4 bg-primary text-white font-medium uppercase tracking-wider text-sm hover:bg-primary-dark transform hover:-translate-y-1 transition-all duration-300 text-center"
              >
                Explore Services
              </Link>
              <Link 
                href="/contact" 
                className="inline-block px-8 py-4 border-2 border-white text-white font-medium uppercase tracking-wider text-sm hover:bg-white hover:text-neutral-900 transform hover:-translate-y-1 transition-all duration-300 text-center"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>

          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-4"
              >
                <div className="relative h-64 overflow-hidden rounded-lg shadow-2xl">
                  <Image
                    src="/images/living-room.jpg"
                    alt="Modern Living Space"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="relative h-48 overflow-hidden rounded-lg shadow-2xl">
                  <Image
                    src="/images/kitchen.jpg"
                    alt="Contemporary Kitchen"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="space-y-4 mt-8"
              >
                <div className="relative h-48 overflow-hidden rounded-lg shadow-2xl">
                  <Image
                    src="/images/dining-room.jpg"
                    alt="Elegant Dining"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="relative h-64 overflow-hidden rounded-lg shadow-2xl">
                  <Image
                    src="/images/entrance.jpg"
                    alt="Welcoming Entrance"
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </motion.div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}