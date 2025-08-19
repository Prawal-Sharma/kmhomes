"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaHome, FaShieldAlt, FaHandshake } from "react-icons/fa";

export function IntroSection() {
  return (
    <section className="section-padding bg-cream">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-serif text-neutral-900 mb-6">
            Professional Property Management
          </h2>
          <p className="text-lg leading-relaxed text-neutral-700">
            At KM Homes, we specialize in creating comfortable living experiences 
            for today&apos;s modern professionals. From travel nurses to consultants, 
            we provide meticulously managed properties that feel like home.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export function ValueSection() {
  const values = [
    {
      icon: FaHome,
      title: "Premium Properties",
      description: "Carefully selected and maintained homes in prime locations",
    },
    {
      icon: FaShieldAlt,
      title: "Complete Protection",
      description: "Comprehensive insurance and security for property owners",
    },
    {
      icon: FaHandshake,
      title: "Trusted Partnership",
      description: "Long-term relationships built on reliability and transparency",
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-neutral-900 mb-4">Why Choose Us</h2>
          <div className="w-20 h-px bg-primary mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-2xl text-neutral-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/services" className="btn-primary">
            Explore Our Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export function TestimonialPreview() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/kitchen.jpg"
          alt="Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-cream/95" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="font-serif text-neutral-900 mb-8">
            Trusted by Property Owners
          </h2>
          
          <blockquote className="text-xl italic text-neutral-700 mb-8 leading-relaxed">
            &ldquo;Kris has consistently demonstrated a higher level of responsibility 
            and care for the property. His business operations reflect a high 
            degree of integrity and professionalism.&rdquo;
          </blockquote>
          
          <p className="text-neutral-600 font-medium">
            — Current Landlord, Dallas TX
          </p>

          <div className="mt-10">
            <Link href="/testimonials" className="btn-outline">
              Read More Reviews
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
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
            Ready to Get Started?
          </h2>
          <p className="text-neutral-300 text-lg mb-10 max-w-2xl mx-auto">
            Join property owners who trust KM Homes for professional, 
            reliable property management that delivers results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary bg-white text-neutral-900 hover:bg-cream">
              Contact Us
            </Link>
            <Link href="/faq" className="btn-outline border-white text-white hover:bg-white hover:text-neutral-900">
              Learn More
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}