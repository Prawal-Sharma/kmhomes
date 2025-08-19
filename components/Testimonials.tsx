"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { siteContent } from "@/data/content";

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
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-neutral-900 mb-4">
            Guest Reviews
          </h2>
          <div className="w-20 h-0.5 bg-primary mx-auto" />
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="bg-neutral-50 p-8 md:p-12 rounded-sm"
          >
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-primary text-xl">
                  ★
                </span>
              ))}
            </div>
            <p className="text-lg text-neutral-700 mb-6 italic leading-relaxed">
              &ldquo;{reviews[currentIndex].content}&rdquo;
            </p>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-neutral-900">
                  {reviews[currentIndex].name}
                </p>
                <p className="text-sm text-neutral-500">
                  {reviews[currentIndex].location} • {reviews[currentIndex].date}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <button
            onClick={prevReview}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 text-neutral-400 hover:text-neutral-600 transition-colors"
            aria-label="Previous review"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextReview}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 text-neutral-400 hover:text-neutral-600 transition-colors"
            aria-label="Next review"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-neutral-300 hover:bg-neutral-400"
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Landlord Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="bg-primary/5 border-l-4 border-primary p-8 md:p-12 rounded-sm">
            <h3 className="text-2xl font-semibold text-neutral-900 mb-6">
              {siteContent.landlordTestimonial.title}
            </h3>
            <p className="text-neutral-700 leading-relaxed mb-6">
              &ldquo;{siteContent.landlordTestimonial.content}&rdquo;
            </p>
            <div className="flex items-center">
              <div>
                <p className="font-semibold text-neutral-900">
                  {siteContent.landlordTestimonial.author}
                </p>
                <p className="text-sm text-neutral-500">
                  {siteContent.landlordTestimonial.location}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}