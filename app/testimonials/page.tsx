"use client";

import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { siteContent } from "@/data/content";

export default function TestimonialsPage() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-cream">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-serif font-light text-neutral-900 mb-6">
              Client Testimonials
            </h1>
            <p className="text-lg text-neutral-700 leading-relaxed">
              Hear from property owners and guests who have experienced 
              the KM Homes difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Landlord Testimonial */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 p-12 border-l-4 border-primary">
              <div className="flex items-center mb-6">
                <FaQuoteLeft className="text-4xl text-primary/30 mr-4" />
                <div>
                  <h2 className="font-serif text-3xl text-neutral-900">
                    {siteContent.landlordTestimonial.title}
                  </h2>
                  <span className="inline-block mt-2 px-3 py-1 bg-primary text-white text-xs uppercase tracking-wider font-medium">
                    Featured Review
                  </span>
                </div>
              </div>
              
              <p className="text-lg text-neutral-700 leading-relaxed mb-8 italic">
                &ldquo;{siteContent.landlordTestimonial.content}&rdquo;
              </p>
              
              <div className="flex items-center justify-between border-t pt-6">
                <div>
                  <p className="font-semibold text-neutral-900">
                    {siteContent.landlordTestimonial.author}
                  </p>
                  <p className="text-neutral-500">
                    {siteContent.landlordTestimonial.location}
                  </p>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-primary text-xl" />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Guest Reviews Grid */}
      <section className="section-padding bg-neutral-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-neutral-900 mb-4">Guest Reviews</h2>
            <div className="w-20 h-px bg-primary mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {siteContent.guestReviews.map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-primary text-sm" />
                  ))}
                </div>
                
                <p className="text-neutral-700 mb-6 leading-relaxed italic">
                  &ldquo;{review.content}&rdquo;
                </p>
                
                <div className="border-t pt-4">
                  <p className="font-semibold text-neutral-900">
                    {review.name}
                  </p>
                  <p className="text-sm text-neutral-500">
                    {review.location} • {review.date}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-neutral-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="font-serif text-white mb-6">
              Join Our Success Stories
            </h2>
            <p className="text-neutral-300 text-lg mb-10 max-w-2xl mx-auto">
              Experience the peace of mind that comes with professional 
              property management.
            </p>
            <a href="/contact" className="btn-primary bg-white text-neutral-900 hover:bg-cream">
              Get Started Today
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}