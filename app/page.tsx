import SimpleNav from "@/components/SimpleNav";
import SimpleHero from "@/components/SimpleHero";
import { AboutSection, ServicesSection, TestimonialSection, CTASection } from "@/components/SimpleSections";
import SimpleFooter from "@/components/SimpleFooter";

export default function Home() {
  return (
    <>
      <SimpleNav />
      <SimpleHero />
      <AboutSection />
      <ServicesSection />
      <TestimonialSection />
      <CTASection />
      <SimpleFooter />
    </>
  );
}