import Link from "next/link";
import Image from "next/image";

export function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Professional Property Management You Can Trust
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At KM Homes, we specialize in creating comfortable living experiences 
            for today&apos;s modern professionals. From travel nurses to consultants, 
            we provide meticulously managed properties that feel like home.
          </p>
        </div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  const services = [
    {
      title: "Premium Properties",
      description: "Carefully selected and maintained homes in prime locations",
      icon: "🏠",
    },
    {
      title: "Complete Protection",
      description: "Comprehensive insurance and security for property owners",
      icon: "🛡️",
    },
    {
      title: "Trusted Partnership",
      description: "Long-term relationships built on reliability and results",
      icon: "🤝",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose KM Homes
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/services" 
            className="inline-block px-6 py-3 bg-sage text-white font-medium rounded-lg hover:bg-sage-dark transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}

export function TestimonialSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/images/kitchen.jpg"
              alt="Property Interior"
              fill
              className="object-cover"
            />
          </div>
          
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Trusted by Property Owners Across Texas
            </h2>
            
            <blockquote className="text-lg text-gray-700 italic mb-6">
              &ldquo;Kris has consistently demonstrated a higher level of responsibility 
              and care for the property. His business operations reflect a high degree 
              of integrity and professionalism.&rdquo;
            </blockquote>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-sage/20 rounded-full flex items-center justify-center">
                <span className="text-sage font-bold">JD</span>
              </div>
              <div>
                <div className="font-semibold text-gray-900">John Davidson</div>
                <div className="text-gray-600">Property Owner, Dallas TX</div>
              </div>
            </div>
            
            <Link 
              href="/testimonials" 
              className="inline-block px-6 py-3 border-2 border-sage text-sage font-medium rounded-lg hover:bg-sage hover:text-white transition-colors"
            >
              Read More Reviews
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CTASection() {
  return (
    <section className="py-20 bg-sage">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
          Ready to Experience Professional Property Management?
        </h2>
        
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Join property owners who trust KM Homes for reliable, professional 
          management that delivers consistent results.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/contact" 
            className="inline-block px-8 py-4 bg-white text-sage font-bold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get Started Today
          </Link>
          <Link 
            href="/faq" 
            className="inline-block px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-sage transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}