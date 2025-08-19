import Link from "next/link";

export default function SimpleFooter() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="bg-sage text-white font-bold text-xl w-10 h-10 rounded-lg flex items-center justify-center mr-3">
                KM
              </div>
              <span className="text-xl font-semibold">KM Homes</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your Home Away From Home
            </p>
            <p className="text-sm text-gray-500">
              © 2025 KM Homes. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
              <li><Link href="/services" className="text-gray-400 hover:text-white">Services</Link></li>
              <li><Link href="/properties" className="text-gray-400 hover:text-white">Properties</Link></li>
              <li><Link href="/testimonials" className="text-gray-400 hover:text-white">Testimonials</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="mailto:karismathicllc@gmail.com" className="hover:text-white">
                  karismathicllc@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:817-614-1235" className="hover:text-white">
                  817-614-1235
                </a>
              </li>
              <li>Plano, Texas</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}