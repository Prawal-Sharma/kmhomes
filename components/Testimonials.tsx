"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { siteContent } from "@/data/content";
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviews = siteContent.guestReviews;

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-neutral-900 mb-6">
            What Our Guests Say
          </h2>
          <div className="w-20 h-[1px] bg-primary mx-auto" />
        </motion.div>

        {/* Guest Reviews Carousel */}
        <div className="relative max-w-4xl mx-auto mb-20">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-neutral-50 to-white p-10 md:p-14 shadow-lg"
            >
              <FaQuoteLeft className="text-primary-light text-3xl mb-6" />
              
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-primary text-lg mr-1" />
                ))}
              </div>
              
              <p className="text-lg text-neutral-700 mb-8 italic leading-relaxed">
                {reviews[currentIndex].content}
              </p>
              
              <div className="border-t pt-6">
                <p className="font-semibold text-neutral-900 text-lg">
                  {reviews[currentIndex].name}
                </p>
                <p className="text-sm text-neutral-500">
                  {reviews[currentIndex].location} • {reviews[currentIndex].date}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={prevReview}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 p-3 bg-white shadow-md hover:shadow-lg transition-all duration-300 text-neutral-600 hover:text-primary"
            aria-label="Previous review"
          >
            <FaChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextReview}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 p-3 bg-white shadow-md hover:shadow-lg transition-all duration-300 text-neutral-600 hover:text-primary"
            aria-label="Next review"
          >
            <FaChevronRight className="w-5 h-5" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 h-2 bg-primary"
                    : "w-2 h-2 bg-neutral-300 hover:bg-neutral-400"
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Landlord Testimonial - Featured Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-r from-primary/5 to-primary-light/5 p-10 md:p-14 border-l-4 border-primary">
            <div className="mb-6">
              <h3 className="text-2xl font-serif text-neutral-900 mb-2">
                {siteContent.landlordTestimonial.title}
              </h3>
              <div className="flex items-center space-x-2">
                <span className="px-3 py-1 bg-primary text-white text-xs uppercase tracking-wider font-semibold">
                  Featured
                </span>
              </div>
            </div>
            
            <p className="text-neutral-700 leading-relaxed mb-8 text-lg">
              {siteContent.landlordTestimonial.content}
            </p>
            
            <div className="flex items-center justify-between border-t pt-6">
              <div>
                <p className="font-semibold text-neutral-900 text-lg">
                  {siteContent.landlordTestimonial.author}
                </p>
                <p className="text-sm text-neutral-500">
                  {siteContent.landlordTestimonial.location}
                </p>
              </div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-primary text-lg ml-1" />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}