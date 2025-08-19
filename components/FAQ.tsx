"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { siteContent } from "@/data/content";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-gradient-to-b from-neutral-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-neutral-900 mb-6">
            {siteContent.faq.title}
          </h2>
          <div className="w-20 h-[1px] bg-primary mx-auto" />
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {siteContent.faq.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-neutral-50 transition-colors group"
              >
                <span className="font-medium text-neutral-900 pr-4 text-lg">
                  {item.question}
                </span>
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-light/20 group-hover:bg-primary-light/30 flex items-center justify-center transition-colors">
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
                  >
                    <div className="px-8 pb-6 text-neutral-600 leading-relaxed border-t border-neutral-100 pt-4">
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
  );
}