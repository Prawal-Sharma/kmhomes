"use client";

import Navigation from "@/components/Navigation";
import Image from "next/image";
import { motion } from "framer-motion";

const propertyImages = [
  { src: "/images/living-room.jpg", alt: "Modern Living Space" },
  { src: "/images/dining-room.jpg", alt: "Elegant Dining Area" },
  { src: "/images/kitchen.jpg", alt: "Contemporary Kitchen" },
  { src: "/images/bathroom-modern.jpg", alt: "Luxury Bathroom" },
  { src: "/images/entrance.jpg", alt: "Welcoming Entrance" },
];

export default function PropertiesPage() {
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
            <span className="inline-block text-primary uppercase tracking-[0.3em] text-sm font-medium mb-4">Our Portfolio</span>
            <h1 className="font-serif font-light text-neutral-900 mb-8">
              Premium Living Spaces
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed">
              Experience the quality and attention to detail that defines every 
              KM Homes managed property. Each space is carefully maintained to 
              provide comfort and style for today&apos;s professionals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {propertyImages.map((image, index) => (
              <motion.div
                key={image.alt}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative overflow-hidden group ${
                  index === 0 ? "md:col-span-2 lg:col-span-2 h-96" : "h-80"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-serif text-xl">{image.alt}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-neutral-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-neutral-900 mb-4">
              Property Features
            </h2>
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
              <h3 className="font-serif text-2xl text-neutral-900 mb-3">
                Prime Locations
              </h3>
              <p className="text-neutral-600">
                Strategically located properties near business districts, 
                medical centers, and transportation hubs.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="font-serif text-2xl text-neutral-900 mb-3">
                Fully Furnished
              </h3>
              <p className="text-neutral-600">
                Thoughtfully furnished spaces with everything needed for 
                comfortable short to medium-term stays.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="font-serif text-2xl text-neutral-900 mb-3">
                Professional Management
              </h3>
              <p className="text-neutral-600">
                24/7 support, regular maintenance, and professional cleaning 
                services ensure exceptional stays.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}