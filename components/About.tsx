"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/content";
import { FaClock, FaHandshake, FaHome } from "react-icons/fa";

export default function About() {
  const stats = [
    { icon: FaClock, value: "24/7", label: "Support Available" },
    { icon: FaHandshake, value: "100%", label: "On-Time Payments" },
    { icon: FaHome, value: "1-4+", label: "Year Partnerships" },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-neutral-900 mb-6">
            {siteContent.about.title}
          </h2>
          <div className="w-20 h-[1px] bg-primary mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-20"
        >
          <p className="text-lg leading-relaxed text-neutral-600 text-center">
            {siteContent.about.content}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-light/20 group-hover:bg-primary-light/30 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-light text-primary mb-2">
                  {stat.value}
                </div>
                <p className="text-neutral-600 text-sm uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}