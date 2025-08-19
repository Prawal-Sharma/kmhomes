"use client";

import Navigation from "@/components/Navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaClock, FaHandshake, FaHome, FaAward } from "react-icons/fa";

export default function AboutPage() {
  const stats = [
    { icon: FaClock, value: "24/7", label: "Support Available" },
    { icon: FaHandshake, value: "100%", label: "On-Time Payments" },
    { icon: FaHome, value: "1-4+", label: "Year Partnerships" },
    { icon: FaAward, value: "5★", label: "Average Rating" },
  ];

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/living-room.jpg"
            alt="About KM Homes"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white"
        >
          <h1 className="font-serif font-light mb-4">About KM Homes</h1>
          <p className="text-lg font-light max-w-2xl mx-auto px-6">
            Professional property management with a personal touch
          </p>
        </motion.div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-cream">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-neutral-900 mb-6">Our Story</h2>
              <p className="text-neutral-700 mb-6 leading-relaxed">
                KM Homes was founded with a simple vision: to bridge the gap between 
                property owners seeking reliable tenants and professionals needing 
                quality temporary housing.
              </p>
              <p className="text-neutral-700 mb-6 leading-relaxed">
                We specialize in serving today&apos;s modern professionals - travel nurses 
                on assignment, consultants working on projects, families navigating 
                insurance displacements, and professionals in transition.
              </p>
              <p className="text-neutral-700 leading-relaxed">
                Our approach goes beyond traditional property management. We maintain 
                properties to the highest standards, ensuring they remain valuable 
                assets while providing comfortable homes for our guests.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[500px] image-hover"
            >
              <Image
                src="/images/entrance.jpg"
                alt="Professional property management"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-neutral-900 mb-4">Our Values</h2>
            <div className="w-20 h-px bg-primary mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="font-serif text-2xl text-neutral-900 mb-4">
                Integrity
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Transparent communication and honest dealings with both property 
                owners and guests form the foundation of our business.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="font-serif text-2xl text-neutral-900 mb-4">
                Excellence
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                We maintain properties to the highest standards, ensuring they 
                remain valuable assets while providing exceptional living experiences.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="font-serif text-2xl text-neutral-900 mb-4">
                Partnership
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                We build long-term relationships with property owners, treating 
                their investments as if they were our own.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-neutral-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <Icon className="w-8 h-8 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-light text-white mb-2">
                    {stat.value}
                  </div>
                  <p className="text-neutral-400 text-sm uppercase tracking-wider">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}