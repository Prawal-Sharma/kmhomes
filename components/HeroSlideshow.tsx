"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const slides = [
  {
    image: "/images/living-room.jpg",
    title: "Your Home",
    subtitle: "Away From Home",
  },
  {
    image: "/images/dining-room.jpg",
    title: "Luxury",
    subtitle: "Living Redefined",
  },
  {
    image: "/images/entrance.jpg",
    title: "Professional",
    subtitle: "Property Management",
  },
];

export default function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Image Slideshow */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container mx-auto px-6 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-white font-serif font-light mb-6">
                <span className="block text-3xl md:text-4xl lg:text-5xl">{slides[currentSlide].title}</span>
                <span className="block text-2xl md:text-3xl lg:text-4xl mt-3 opacity-90">
                  {slides[currentSlide].subtitle}
                </span>
              </h1>
              <p className="text-white/80 text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 leading-relaxed">
                Professional property management serving modern professionals
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/services" className="btn-primary bg-white text-neutral-900 hover:bg-cream">
                  Our Services
                </Link>
                <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-neutral-900">
                  Get in Touch
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1 transition-all duration-500 ${
              index === currentSlide
                ? "w-12 bg-white"
                : "w-6 bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}