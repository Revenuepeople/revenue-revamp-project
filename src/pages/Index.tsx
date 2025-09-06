
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CtaSection from "@/components/CtaSection";
import ContactSection from "@/components/ContactSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RevenueApproach from "@/components/RevenueApproach";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <MissionSection />
        <RevenueApproach />
        <ServicesSection />
        <AboutSection />
        <TestimonialsSection />
        <CtaSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
