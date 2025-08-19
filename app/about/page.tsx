import SimpleNav from "@/components/SimpleNav";
import SimpleFooter from "@/components/SimpleFooter";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <SimpleNav />
      
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <Image
          src="/images/living-room.jpg"
          alt="About KM Homes"
          fill
          className="object-cover brightness-50"
        />
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">About KM Homes</h1>
          <p className="text-xl">Professional property management with a personal touch</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <p className="text-lg text-gray-600 mb-6">
            KM Homes was founded with a simple vision: to bridge the gap between property 
            owners seeking reliable tenants and professionals needing quality accommodations.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            We operate as a hands-on corporate housing company specializing in medium-term 
            furnished rentals. Our unique approach ensures properties are maintained to the 
            highest standards while providing owners with consistent, reliable income.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-600">
                To provide exceptional property management services that create value for 
                property owners and comfortable homes for professionals.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Our Values</h3>
              <p className="text-gray-600">
                Integrity, transparency, and excellence in every aspect of property 
                management and client relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SimpleFooter />
    </>
  );
}