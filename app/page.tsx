import { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import TrustBar from "@/components/home/TrustBar";
import ServicesOverview from "@/components/home/ServicesOverview";
import DifferenceSection from "@/components/home/DifferenceSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import LeadMagnetSection from "@/components/home/LeadMagnetSection";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Home",
  description:
    "End the burden of Auto Asset Acquisition, Ownership, Utility, Management & Replacement. Comprehensive automobile solutions for corporate fleets and discerning individuals in Nigeria.",
  openGraph: {
    title: "Automob Advisory Services | Premium Auto Solutions in Nigeria",
    description:
      "End the burden of Auto Asset Acquisition, Ownership, Utility, Management & Replacement.",
    images: ["/og-home.jpg"],
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ServicesOverview />
      <DifferenceSection />
      <TestimonialsSection />
      <LeadMagnetSection />
      <FinalCTA />
    </>
  );
}
