"use client";

import Navigation from "@/components/Navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { siteContent } from "@/data/content";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-neutral-700 leading-relaxed">
              Everything you need to know about our property management services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            {siteContent.faq.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="mb-4"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full bg-neutral-50 hover:bg-neutral-100 transition-colors duration-300 p-6 text-left flex justify-between items-center group"
                >
                  <span className="font-medium text-lg text-neutral-900 pr-4">
                    {item.question}
                  </span>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                    {openIndex === index ? (
                      <FaMinus className="w-3 h-3 text-primary" />
                    ) : (
                      <FaPlus className="w-3 h-3 text-primary" />
                    )}
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 bg-neutral-50 text-neutral-600 leading-relaxed">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Questions */}
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
              Still Have Questions?
            </h2>
            <p className="text-neutral-300 text-lg mb-10 max-w-2xl mx-auto">
              We&apos;re here to help. Contact us directly and we&apos;ll be happy to 
              discuss how KM Homes can work for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary bg-white text-neutral-900 hover:bg-cream">
                Contact Us
              </a>
              <a href="tel:817-614-1235" className="btn-outline border-white text-white hover:bg-white hover:text-neutral-900">
                Call 817-614-1235
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}