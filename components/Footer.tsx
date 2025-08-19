import Image from "next/image";
import { siteContent } from "@/data/content";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Services" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo & Tagline */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/images/logo-transparent.png"
                alt="KM Homes"
                width={40}
                height={40}
                className="object-contain brightness-0 invert"
              />
              <span className="text-xl font-semibold text-white">
                KM Homes
              </span>
            </div>
            <p className="text-sm leading-relaxed text-neutral-400 italic">
              {siteContent.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="text-sm text-neutral-400 hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact Information
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-primary w-4 h-4" />
                <a
                  href={`mailto:${siteContent.contact.email}`}
                  className="text-sm text-neutral-400 hover:text-primary transition-colors duration-300"
                >
                  {siteContent.contact.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="text-primary w-4 h-4" />
                <a
                  href={`tel:${siteContent.contact.phone}`}
                  className="text-sm text-neutral-400 hover:text-primary transition-colors duration-300"
                >
                  {siteContent.contact.phone}
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-primary w-4 h-4 mt-0.5" />
                <p className="text-sm text-neutral-400">
                  {siteContent.contact.address}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-neutral-500">
              © {currentYear} KM Homes. All rights reserved.
            </p>
            <p className="text-xs text-neutral-600">
              Professional Property Management in Plano, Texas
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}