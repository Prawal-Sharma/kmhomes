import Link from "next/link";
import Image from "next/image";
import { siteContent } from "@/data/content";

export default function LuxuryFooter() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { href: "/about", label: "About Us" },
      { href: "/services", label: "Services" },
      { href: "/properties", label: "Properties" },
    ],
    support: [
      { href: "/testimonials", label: "Testimonials" },
      { href: "/faq", label: "FAQ" },
      { href: "/contact", label: "Contact" },
    ],
  };

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/logo-transparent.png"
                  alt="KM Homes"
                  fill
                  className="object-contain brightness-0 invert"
                />
              </div>
              <span className="text-lg font-light tracking-wider text-white font-serif">
                KM HOMES
              </span>
            </div>
            <p className="text-sm leading-relaxed text-neutral-400">
              {siteContent.tagline}
            </p>
          </div>

          {/* Company Links */}
          <div className="md:col-span-1">
            <h3 className="text-white font-medium mb-4 text-sm uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div className="md:col-span-1">
            <h3 className="text-white font-medium mb-4 text-sm uppercase tracking-wider">
              Support
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-neutral-400 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-1">
            <h3 className="text-white font-medium mb-4 text-sm uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${siteContent.contact.email}`}
                  className="text-sm text-neutral-400 hover:text-white transition-colors duration-300"
                >
                  {siteContent.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteContent.contact.phone}`}
                  className="text-sm text-neutral-400 hover:text-white transition-colors duration-300"
                >
                  {siteContent.contact.phone}
                </a>
              </li>
              <li className="text-sm text-neutral-400">
                Plano, Texas
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-xs text-neutral-500">
              © {currentYear} KM Homes. All rights reserved.
            </p>
            <p className="text-xs text-neutral-500">
              Professional Property Management
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}