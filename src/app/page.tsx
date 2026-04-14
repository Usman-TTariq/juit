import { Certifications } from "@/components/Certifications";
import { CommonInquiries } from "@/components/CommonInquiries";
import { GlobalPartners } from "@/components/GlobalPartners";
import { Hero } from "@/components/Hero";
import { ImpactAtScale } from "@/components/ImpactAtScale";
import { PakistanAdvantage } from "@/components/PakistanAdvantage";
import { PartnerTestimonials } from "@/components/PartnerTestimonials";
import { ScaleCta } from "@/components/ScaleCta";
import { SixPillars } from "@/components/SixPillars";

export default function Home() {
  return (
    <>
      <Hero />
      <GlobalPartners />
      <SixPillars />
      <ImpactAtScale />
      <PakistanAdvantage />
      <PartnerTestimonials />
      <Certifications />
      <CommonInquiries />
      <ScaleCta />
    </>
  );
}
