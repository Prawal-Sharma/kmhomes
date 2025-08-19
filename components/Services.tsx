"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/content";

const iconMap: { [key: string]: string } = {
  "In-House Cleaning Team": "🏠",
  "Trusted Handyman Network": "🔧",
  "Routine Inspections": "🔍",
  "Consistent Cash Flow": "💰",
  "Hands-On Communication": "📞",
  "Protecting & Growing Value": "📈",
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-neutral-100/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-neutral-900 mb-4">
            {siteContent.whyUs.title}
          </h2>
          <div className="w-20 h-0.5 bg-primary mx-auto mb-6" />
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
            {siteContent.whyUs.intro}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteContent.whyUs.benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-3xl mb-4">{iconMap[benefit.title]}</div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-neutral-700 max-w-3xl mx-auto italic">
            {siteContent.whyUs.conclusion}
          </p>
        </motion.div>
      </div>
    </section>
  );
}