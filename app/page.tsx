import Hero from "@/components/homepage/Hero";
import OutcomeChips from "@/components/homepage/OutcomeChips";
import ProblemAgitation from "@/components/homepage/ProblemAgitation";
import MentorIntroduction from "@/components/homepage/MentorIntroduction";
import CoreBenefits from "@/components/homepage/CoreBenefits";
import SocialProof from "@/components/homepage/SocialProof";
import Process from "@/components/homepage/Process";
import FlexSection from "@/components/homepage/FlexSection";
import FeatureSpecList from "@/components/homepage/FeatureSpecList";
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
      name: "How long does a typical kitchen remodel take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most kitchen remodels take 8-12 weeks from start to finish, depending on scope and complexity. We provide a detailed timeline during the design phase, and we're committed to meeting those deadlines.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide fixed pricing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. After the design and scope phase, we provide a fixed-price contract with no surprise costs. All materials, labor, and permits are included in the estimate before construction begins.",
      },
    },
    {
      "@type": "Question",
      name: "What's included in your warranty?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our comprehensive 5-year warranty covers all workmanship, materials, and installation. This includes structural elements, finishes, fixtures, and appliances installed by our team.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to move out during the remodel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For most projects, you can stay in your home. We use dust containment systems and daily cleanup to minimize disruption. For whole-home renovations, we can discuss temporary living arrangements if needed.",
      },
    },
    {
      "@type": "Question",
      name: "How do you handle design decisions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our architect-led approach means you get professional design guidance throughout the process. We help you make informed decisions about materials, layouts, and finishes that align with your vision and budget.",
      },
    },
    {
      "@type": "Question",
      name: "What areas do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve Kansas City, MO, and surrounding suburbs including Overland Park, Leawood, Prairie Village, and more. Contact us to confirm service in your area.",
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
        <OutcomeChips />
        <ProblemAgitation />
        <MentorIntroduction />
        <CoreBenefits />
        <SocialProof />
        <Process />
        <FlexSection />
        <FeatureSpecList />
        <ServiceAreas />
        <FAQ />
        <FinalCTA />
      </div>
    </>
  );
}
