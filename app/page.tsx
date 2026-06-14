import HeroSection from "@/components/HeroSection";
import PricingCards from "@/components/PricingCards";
import SportsAnimation from "@/components/SportsAnimation";
import StreamingLogos from "@/components/StreamingLogos";
import Testimonials from "@/components/Testimonials";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SportsAnimation />
      <StreamingLogos />
      <PricingCards />
      <Testimonials />
    </>
  );
}
