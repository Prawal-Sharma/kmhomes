"use client";

import Navigation from "@/components/Navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  FaBroom, 
  FaTools, 
  FaClipboardCheck, 
  FaMoneyCheckAlt,
  FaPhoneAlt,
  FaChartLine 
} from "react-icons/fa";

const services = [
  {
    icon: FaBroom,
    title: "In-House Cleaning Team",
    description: "Every property is cleaned and maintained more frequently than traditional rentals, ensuring it stays in excellent condition.",
    image: "/images/bathroom-modern.jpg",
  },
  {
    icon: FaTools,
    title: "Trusted Handyman Network",
    description: "Direct connections to plumbers, HVAC specialists, electricians, and landscapers for quick, cost-effective solutions.",
    image: "/images/kitchen.jpg",
  },
  {
    icon: FaClipboardCheck,
    title: "Routine Inspections",
    description: "Regular check-ins mean small problems never turn into big ones, keeping your property in top shape.",
    image: "/images/entrance.jpg",
  },
  {
    icon: FaMoneyCheckAlt,
    title: "Consistent Cash Flow",
    description: "Rent is paid on time, every time. Evictions are not part of our model.",
    image: "/images/living-room.jpg",
  },
  {
    icon: FaPhoneAlt,
    title: "Hands-On Communication",
    description: "You'll always have a direct line to us for updates, questions, or concerns.",
    image: "/images/dining-room.jpg",
  },
  {
    icon: FaChartLine,
    title: "Protecting & Growing Value",
    description: "Our approach ensures your property isn't just maintained — it's enhanced over time.",
    image: "/images/kitchen.jpg",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-40 pb-24 bg-gradient-to-b from-white to-neutral-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block text-primary uppercase tracking-[0.3em] text-sm font-medium mb-4">What We Do</span>
            <h1 className="font-serif font-light text-neutral-900 mb-8">
              Our Services
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed">
              We go beyond traditional property management by putting systems in 
              place that protect your investment and maximize its long-term value.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <div>
                      <Icon className="w-10 h-10 text-primary mb-4" />
                      <h3 className="font-serif text-2xl text-neutral-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-neutral-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="section-padding bg-neutral-900">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="font-serif text-white mb-6">Our Commitment</h2>
            <p className="text-lg text-neutral-300 leading-relaxed mb-8">
              At KM Homes, our goal is simple: give owners confidence that their 
              property is cared for like it&apos;s our own while delivering reliable returns. 
              We operate on a fixed rent model with no hidden fees or management costs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary bg-white text-neutral-900 hover:bg-cream">
                Get Started
              </a>
              <a href="/faq" className="btn-outline border-white text-white hover:bg-white hover:text-neutral-900">
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}