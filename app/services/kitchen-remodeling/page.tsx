import ServiceHero from "@/components/services/ServiceHero";
import ProblemRisks from "@/components/services/ProblemRisks";
import Solutions from "@/components/services/Solutions";
import BeforeAfterGallery from "@/components/services/BeforeAfterGallery";
import ProcessTimeline from "@/components/services/ProcessTimeline";
import InvestmentFinancing from "@/components/services/InvestmentFinancing";
import Warranties from "@/components/services/Warranties";
import ServiceTestimonials from "@/components/services/ServiceTestimonials";
import ServiceFAQ from "@/components/services/ServiceFAQ";
import CoverageMap from "@/components/services/CoverageMap";
import ServiceCTA from "@/components/services/ServiceCTA";

const serviceData = {
  title: "Kitchen Remodeling",
  description:
    "Transform your kitchen into a functional, beautiful space that matches your lifestyle. Architect-led design, premium materials, and clean build process.",
  heroImage: "https://goldhearthomes.com/wp-content/uploads/2022/06/remodeled-kitchen-with-new-appliances-kansas-city.jpg",
  problems: [
    {
      title: "Outdated Layout",
      description:
        "Your kitchen doesn't flow with how you actually cook and entertain. The work triangle is broken, storage is inefficient, and the space feels cramped.",
    },
    {
      title: "Worn-Out Surfaces",
      description:
        "Countertops are dated, cabinets are showing wear, and appliances are inefficient. The kitchen looks tired and doesn't reflect your style.",
    },
    {
      title: "Poor Functionality",
      description:
        "Lack of prep space, inadequate storage, and poor lighting make cooking a chore rather than a joy. The kitchen doesn't support your lifestyle.",
    },
  ],
  solutions: [
    {
      title: "Custom Layout Design",
      description:
        "We analyze your cooking habits, traffic patterns, and storage needs to create a layout that works for your lifestyle. Every inch is optimized for function and flow.",
    },
    {
      title: "Premium Material Selection",
      description:
        "From quartz countertops to custom cabinetry, we help you select materials that balance beauty, durability, and budget. No compromises on quality.",
    },
    {
      title: "Smart Storage Solutions",
      description:
        "Pull-out pantries, corner solutions, and custom organizers maximize every inch of space. Your kitchen will feel larger and more organized.",
    },
    {
      title: "Professional Installation",
      description:
        "Our licensed team handles everything from plumbing and electrical to final finishes. Permits, inspections, and quality control are all included.",
    },
  ],
  timeline: "8-12 weeks",
  investmentRange: "$45,000 - $120,000+",
};

export default function KitchenRemodelingPage() {
  return (
    <div className="pt-20">
      <ServiceHero service={serviceData} />
      <ProblemRisks problems={serviceData.problems} />
      <Solutions solutions={serviceData.solutions} />
      <BeforeAfterGallery serviceType="kitchen" />
      <ProcessTimeline timeline={serviceData.timeline} />
      <InvestmentFinancing range={serviceData.investmentRange} />
      <Warranties />
      <ServiceTestimonials serviceType="kitchen" />
      <ServiceFAQ serviceType="kitchen" />
      <CoverageMap />
      <ServiceCTA />
    </div>
  );
}
