import Link from "next/link";
import Image from "next/image";

export default function SimpleHero() {
  return (
    <section className="relative bg-gray-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <div className="inline-block px-3 py-1 bg-sage/20 text-sage text-sm font-medium rounded-full mb-6">
              Trusted Property Management
            </div>
            
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6">
              Your Home,
              <span className="block text-sage">Away From Home</span>
            </h1>
            
            <p className="text-lg text-gray-600 mb-8">
              Professional property management serving modern professionals. 
              We provide meticulously managed properties for travel nurses, 
              consultants, and professionals who demand quality.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/services" 
                className="inline-block px-6 py-3 bg-sage text-white font-medium rounded-lg hover:bg-sage-dark transition-colors text-center"
              >
                Explore Services
              </Link>
              <Link 
                href="/contact" 
                className="inline-block px-6 py-3 border-2 border-sage text-sage font-medium rounded-lg hover:bg-sage hover:text-white transition-colors text-center"
              >
                Contact Us
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12">
              <div>
                <div className="text-2xl font-bold text-sage">100%</div>
                <div className="text-sm text-gray-600">On-Time Payments</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-sage">24/7</div>
                <div className="text-sm text-gray-600">Support</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-sage">5★</div>
                <div className="text-sm text-gray-600">Rating</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/images/living-room.jpg"
              alt="Modern Living Space"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}