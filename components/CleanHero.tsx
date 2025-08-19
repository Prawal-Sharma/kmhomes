"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function CleanHero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-sage/10 rounded-full mb-8">
              <span className="w-2 h-2 bg-sage rounded-full"></span>
              <span className="text-sage font-medium text-sm">Trusted Property Management</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-serif font-light text-gray-900 mb-6">
              Your Home,
              <span className="block text-sage">Away From Home</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Professional property management serving modern professionals. 
              We provide meticulously managed properties for travel nurses, 
              consultants, and professionals who demand quality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/services" className="btn btn-primary">
                Explore Our Services
                <FaArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Schedule Consultation
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-sage">100%</div>
                <div className="text-sm text-gray-600">On-Time Payments</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-sage">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-sage">5★</div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/living-room.jpg"
                alt="Luxury Living Space"
                fill
                className="object-cover"
                priority
              />
              
              {/* Floating Card */}
              <div className="absolute bottom-8 left-8 bg-white p-6 rounded-xl shadow-xl max-w-xs">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-sage/10 rounded-lg flex items-center justify-center">
                    <span className="text-sage font-bold">KM</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Kris M.</div>
                    <div className="text-sm text-gray-500">Property Manager</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 italic">
                  &ldquo;We treat every property as if it were our own home.&rdquo;
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}