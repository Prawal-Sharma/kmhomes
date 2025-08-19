import Navigation from "@/components/Navigation";
import HeroSlideshow from "@/components/HeroSlideshow";
import { IntroSection, ValueSection, TestimonialPreview, CTASection } from "@/components/HomeSections";
import LuxuryFooter from "@/components/LuxuryFooter";

export default function Home() {
  return (
    <>
      <Navigation />
      <HeroSlideshow />
      <IntroSection />
      <ValueSection />
      <TestimonialPreview />
      <CTASection />
      <LuxuryFooter />
    </>
  );
}