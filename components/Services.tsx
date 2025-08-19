"use client";

import { motion } from "framer-motion";
import { siteContent } from "@/data/content";
import { 
  FaBroom, 
  FaTools, 
  FaClipboardCheck, 
  FaMoneyCheckAlt,
  FaPhoneAlt,
  FaChartLine 
} from "react-icons/fa";
import { IconType } from "react-icons";

export default function Services() {
  const iconMap: { [key: string]: IconType } = {
    "In-House Cleaning Team": FaBroom,
    "Trusted Handyman Network": FaTools,
    "Routine Inspections": FaClipboardCheck,
    "Consistent Cash Flow": FaMoneyCheckAlt,
    "Hands-On Communication": FaPhoneAlt,
    "Protecting & Growing Value": FaChartLine,
  };

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-white to-neutral-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-neutral-900 mb-6">
            {siteContent.whyUs.title}
          </h2>
          <div className="w-20 h-[1px] bg-primary mx-auto mb-8" />
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            {siteContent.whyUs.intro}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {siteContent.whyUs.benefits.map((benefit, index) => {
            const Icon = iconMap[benefit.title];
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="h-full bg-white p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-neutral-100 hover:border-primary-light">
                  <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-light/20 group-hover:bg-primary-light/30 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-4 font-sans">
                    {benefit.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="max-w-3xl mx-auto bg-primary-light/10 p-8 border-l-4 border-primary">
            <p className="text-lg text-neutral-700 italic leading-relaxed">
              {siteContent.whyUs.conclusion}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}