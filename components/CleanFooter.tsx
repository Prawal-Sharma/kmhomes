import Link from "next/link";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function CleanFooter() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-sage rounded-xl flex items-center justify-center text-white font-bold text-lg">
                KM
              </div>
              <div>
                <div className="text-2xl font-serif">KM Homes</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">
                  Property Management
                </div>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Your Home Away From Home
            </p>
            <p className="text-sm text-gray-500">
              © 2025 KM Homes. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-sage transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-sage transition-colors">Services</Link></li>
              <li><Link href="/properties" className="text-gray-400 hover:text-sage transition-colors">Properties</Link></li>
              <li><Link href="/testimonials" className="text-gray-400 hover:text-sage transition-colors">Testimonials</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-sage transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-sage transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FaEnvelope className="w-5 h-5 text-sage mt-0.5" />
                <div>
                  <a href="mailto:karismathicllc@gmail.com" className="text-gray-400 hover:text-sage transition-colors">
                    karismathicllc@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FaPhone className="w-5 h-5 text-sage mt-0.5" />
                <div>
                  <a href="tel:817-614-1235" className="text-gray-400 hover:text-sage transition-colors">
                    817-614-1235
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="w-5 h-5 text-sage mt-0.5" />
                <div className="text-gray-400">
                  Plano, Texas
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            Professional Property Management
          </p>
        </div>
      </div>
    </footer>
  );
}