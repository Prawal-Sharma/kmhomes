"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { siteContent } from "@/data/content";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-neutral-900 mb-4">
            {siteContent.contact.title}
          </h2>
          <div className="w-20 h-0.5 bg-primary mx-auto mb-6" />
          <p className="text-lg text-neutral-600">
            {siteContent.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-neutral-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-neutral-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-primary text-white rounded-sm hover:bg-primary-dark transition-colors duration-200 font-medium uppercase tracking-wide text-sm"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-primary mr-3 mt-1">📧</span>
                  <div>
                    <p className="font-medium text-neutral-900">Email</p>
                    <a href={`mailto:${siteContent.contact.email}`} className="text-neutral-600 hover:text-primary transition-colors">
                      {siteContent.contact.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-primary mr-3 mt-1">📱</span>
                  <div>
                    <p className="font-medium text-neutral-900">Phone</p>
                    <a href={`tel:${siteContent.contact.phone}`} className="text-neutral-600 hover:text-primary transition-colors">
                      {siteContent.contact.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-primary mr-3 mt-1">📍</span>
                  <div>
                    <p className="font-medium text-neutral-900">Address</p>
                    <p className="text-neutral-600">
                      {siteContent.contact.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="h-64 bg-neutral-200 rounded-sm overflow-hidden">
              <iframe
                src={siteContent.contact.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="KM Homes Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}