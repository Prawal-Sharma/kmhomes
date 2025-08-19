"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { siteContent } from "@/data/content";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-neutral-900 mb-6">
            {siteContent.contact.title}
          </h2>
          <div className="w-20 h-[1px] bg-primary mx-auto mb-8" />
          <p className="text-lg text-neutral-600">
            {siteContent.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2 uppercase tracking-wider">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2 uppercase tracking-wider">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2 uppercase tracking-wider">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-300 resize-none"
                />
              </div>
              
              <button
                type="submit"
                className="w-full py-4 bg-primary text-white hover:bg-primary-dark transition-all duration-300 font-medium uppercase tracking-wider text-sm flex items-center justify-center group"
              >
                Send Message
                <FaPaperPlane className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-serif text-neutral-900 mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="w-12 h-12 rounded-full bg-primary-light/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-light/30 transition-colors">
                    <FaEnvelope className="text-primary w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <p className="font-medium text-neutral-900 mb-1">Email</p>
                    <a href={`mailto:${siteContent.contact.email}`} className="text-neutral-600 hover:text-primary transition-colors">
                      {siteContent.contact.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="w-12 h-12 rounded-full bg-primary-light/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-light/30 transition-colors">
                    <FaPhone className="text-primary w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <p className="font-medium text-neutral-900 mb-1">Phone</p>
                    <a href={`tel:${siteContent.contact.phone}`} className="text-neutral-600 hover:text-primary transition-colors">
                      {siteContent.contact.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="w-12 h-12 rounded-full bg-primary-light/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-light/30 transition-colors">
                    <FaMapMarkerAlt className="text-primary w-5 h-5" />
                  </div>
                  <div className="ml-4">
                    <p className="font-medium text-neutral-900 mb-1">Address</p>
                    <p className="text-neutral-600">
                      {siteContent.contact.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="h-80 bg-neutral-100 overflow-hidden shadow-lg">
              <iframe
                src={siteContent.contact.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="KM Homes Location"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}