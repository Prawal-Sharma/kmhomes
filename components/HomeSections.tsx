"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { 
  FaHome, 
  FaShieldAlt, 
  FaHandshake, 
  FaQuoteLeft,
  FaArrowRight,
  FaCheckCircle 
} from "react-icons/fa";

export function IntroSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage/10 rounded-full mb-8">
            <FaCheckCircle className="w-4 h-4 text-sage" />
            <span className="text-sage font-medium text-sm uppercase tracking-wider">
              About KM Homes
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-serif font-light text-gray-900 mb-6">
            Professional Property Management
            <span className="block text-sage mt-2">You Can Trust</span>
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed">
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
      description: "Carefully selected and maintained homes in prime locations across the city",
    },
    {
      icon: FaShieldAlt,
      title: "Complete Protection",
      description: "Comprehensive insurance and security for property owners' peace of mind",
    },
    {
      icon: FaHandshake,
      title: "Trusted Partnership",
      description: "Long-term relationships built on reliability, transparency, and results",
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage/10 rounded-full mb-8">
            <span className="text-sage font-medium text-sm uppercase tracking-wider">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-serif font-light text-gray-900 mb-4">
            The KM Homes Difference
          </h2>
          <div className="w-24 h-1 bg-sage mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card group"
              >
                <div className="w-16 h-16 bg-sage/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-sage group-hover:scale-110 transition-all">
                  <Icon className="w-8 h-8 text-sage group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-serif text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/services" className="btn btn-primary">
            Explore Our Services
            <FaArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export function TestimonialPreview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="/images/kitchen.jpg"
              alt="Property Interior"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage/10 rounded-full mb-8">
              <FaQuoteLeft className="w-4 h-4 text-sage" />
              <span className="text-sage font-medium text-sm uppercase tracking-wider">
                Client Testimonial
              </span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-serif font-light text-gray-900 mb-8">
              Trusted by Property Owners
              <span className="block text-sage mt-2">Across Texas</span>
            </h2>
            
            <blockquote className="relative">
              <p className="text-xl text-gray-700 mb-6 leading-relaxed italic">
                &ldquo;Kris has consistently demonstrated a higher level of responsibility 
                and care for the property. His business operations reflect a high 
                degree of integrity and professionalism. I couldn&apos;t be happier 
                with the partnership.&rdquo;
              </p>
            </blockquote>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-sage/10 rounded-full flex items-center justify-center">
                <span className="text-sage font-bold text-xl">JD</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">John Davidson</p>
                <p className="text-gray-500">Property Owner, Dallas TX</p>
              </div>
            </div>

            <Link href="/testimonials" className="btn btn-secondary">
              Read More Reviews
              <FaArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="section-padding bg-gradient-to-br from-sage to-sage-dark">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl lg:text-5xl font-serif font-light text-white mb-6">
            Ready to Experience
            <span className="block mt-2">Professional Property Management?</span>
          </h2>
          
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Join property owners who trust KM Homes for reliable, 
            professional management that delivers consistent results.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn bg-white text-sage hover:bg-gray-100 px-8 py-4">
              Get Started Today
            </Link>
            <Link href="/faq" className="btn bg-transparent border-2 border-white text-white hover:bg-white hover:text-sage px-8 py-4">
              Learn More
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20">
            <div>
              <div className="text-3xl font-bold text-white mb-2">100%</div>
              <div className="text-white/80">On-Time Payments</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">1-4+</div>
              <div className="text-white/80">Year Partnerships</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-white/80">Support Available</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}