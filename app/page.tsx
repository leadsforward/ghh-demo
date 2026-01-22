import Hero from "@/components/homepage/Hero";
import FeaturedWork from "@/components/homepage/FeaturedWork";
import OutcomeChips from "@/components/homepage/OutcomeChips";
import Process from "@/components/homepage/Process";
import CoreBenefits from "@/components/homepage/CoreBenefits";
import InteractiveExplorer from "@/components/homepage/InteractiveExplorer";
import SocialProof from "@/components/homepage/SocialProof";
import FlexSection from "@/components/homepage/FlexSection";
import ServiceAreas from "@/components/homepage/ServiceAreas";
import FAQ from "@/components/homepage/FAQ";
import FinalCTA from "@/components/homepage/FinalCTA";
import StructuredData from "@/components/StructuredData";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Will I get surprise costs or budget overruns?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. We provide fixed pricing after the design phase. All materials, labor, and permits are included in your contract before construction begins.",
      },
    },
    {
      "@type": "Question",
      name: "How long will I be without a kitchen/bathroom?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most kitchen remodels take 8-12 weeks. Bathroom remodels take 6-10 weeks. We use dust containment and daily cleanup so you can stay in your home.",
      },
    },
    {
      "@type": "Question",
      name: "What if something goes wrong after completion?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our 5-year warranty covers all workmanship, materials, and installation. If any covered issue arises, we'll fix it at no cost to you.",
      },
    },
    {
      "@type": "Question",
      name: "Do you handle everything, or do I need to coordinate multiple contractors?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We handle everything. As a design-build firm, one team manages design, permits, construction, and project management from start to finish.",
      },
    },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Gold Heart Homes",
  description:
    "Architect-led residential remodeling in Kansas City. Design-forward kitchens, bathrooms, and whole-home renovations.",
  url: "https://goldhearthomes.com",
  telephone: "+19133792423",
  email: "dustin@goldhearthomes.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "11121 College Ave #1",
    addressLocality: "Kansas City",
    addressRegion: "MO",
    postalCode: "64137",
    addressCountry: "US",
  },
  areaServed: [
    "Kansas City, MO",
    "Independence, MO",
    "Lee's Summit, MO",
    "Overland Park, KS",
    "Shawnee, KS",
    "Olathe, KS",
    "Lenexa, KS",
    "Liberty, MO",
    "Jackson County, MO",
    "Clay County, MO",
    "Platte County, MO",
    "Cass County, MO",
    "Johnson County, KS",
    "Wyandotte County, KS",
  ],
  priceRange: "$$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "127",
  },
};

export default function HomePage() {
  return (
    <>
      <StructuredData data={faqSchema} />
      <StructuredData data={localBusinessSchema} />
      <div className="pt-20">
        <Hero />
        <FeaturedWork />
        <OutcomeChips />
        <Process />
        <CoreBenefits />
        <InteractiveExplorer />
        <SocialProof />
        <FlexSection />
        <ServiceAreas />
        <FAQ />
        <FinalCTA />
      </div>
    </>
  );
}
