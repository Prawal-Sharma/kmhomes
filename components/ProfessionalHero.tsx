"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight, FaPlay } from "react-icons/fa";

export default function ProfessionalHero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 lg:pt-0 bg-gradient-to-br from-neutral-50 via-white to-sand/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-sage/10 rounded-full mb-6"
              >
                <span className="w-2 h-2 bg-sage rounded-full animate-pulse" />
                <span className="text-sage font-medium text-sm">Trusted Property Management</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-5xl lg:text-6xl xl:text-7xl font-serif font-light text-neutral-900 leading-[1.1] mb-6"
              >
                Your Home,
                <span className="block text-sage mt-2">Away From Home</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl text-neutral-600 mb-8 leading-relaxed max-w-xl"
              >
                Professional property management serving modern professionals. 
                We provide meticulously managed properties for travel nurses, 
                consultants, and professionals who demand quality.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <Link 
                  href="/services"
                  className="btn btn-primary inline-flex items-center justify-center gap-2 group"
                >
                  Explore Our Services
                  <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/contact"
                  className="btn btn-secondary inline-flex items-center justify-center"
                >
                  Schedule Consultation
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="grid grid-cols-3 gap-8"
              >
                <div>
                  <div className="text-3xl font-bold text-sage mb-1">100%</div>
                  <div className="text-sm text-neutral-600">On-Time Payments</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-sage mb-1">24/7</div>
                  <div className="text-sm text-neutral-600">Support Available</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-sage mb-1">5★</div>
                  <div className="text-sm text-neutral-600">Average Rating</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                {/* Main Image */}
                <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/living-room.jpg"
                    alt="Luxury Living Space"
                    fill
                    className="object-cover"
                    priority
                  />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform cursor-pointer group">
                      <FaPlay className="w-6 h-6 text-sage ml-1 group-hover:scale-110 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Floating Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl max-w-xs"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-sage/10 rounded-lg flex items-center justify-center">
                      <span className="text-sage font-bold text-lg">KM</span>
                    </div>
                    <div>
                      <div className="font-semibold text-neutral-900">Kris M.</div>
                      <div className="text-sm text-neutral-500">Property Manager</div>
                    </div>
                  </div>
                  <p className="text-sm text-neutral-600 italic">
                    &ldquo;We treat every property as if it were our own home.&rdquo;
                  </p>
                </motion.div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-72 h-72 bg-sage/5 rounded-full blur-3xl" />
                <div className="absolute -bottom-8 -right-8 w-96 h-96 bg-sand/30 rounded-full blur-3xl" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.6, 
          delay: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 1
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-neutral-500 uppercase tracking-wider">Scroll</span>
          <div className="w-6 h-10 border-2 border-neutral-300 rounded-full flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-sage rounded-full animate-bounce" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}