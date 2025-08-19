"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-neutral-900 mb-4">
            {siteContent.about.title}
          </h2>
          <div className="w-20 h-0.5 bg-primary mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-lg leading-relaxed text-neutral-600 text-center">
            {siteContent.about.content}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl font-light text-primary mb-2">24/7</div>
            <p className="text-neutral-600">Support Available</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-light text-primary mb-2">100%</div>
            <p className="text-neutral-600">On-Time Payments</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-light text-primary mb-2">1-4+</div>
            <p className="text-neutral-600">Year Partnerships</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}