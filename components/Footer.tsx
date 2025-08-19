import Image from "next/image";
import { siteContent } from "@/data/content";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-300 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Tagline */}
          <div>
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
            <p className="text-sm italic">
              {siteContent.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-sm hover:text-white transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#faq" className="text-sm hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${siteContent.contact.email}`}
                  className="text-sm hover:text-white transition-colors"
                >
                  {siteContent.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteContent.contact.phone}`}
                  className="text-sm hover:text-white transition-colors"
                >
                  {siteContent.contact.phone}
                </a>
              </li>
              <li className="text-sm">
                {siteContent.contact.address.split(",")[0]},<br />
                {siteContent.contact.address.split(",").slice(1).join(",")}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8">
          <p className="text-center text-sm">
            © {currentYear} KM Homes. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}