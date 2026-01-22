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
  title: "Whole-Home Remodeling",
  description:
    "Transform your entire home with a cohesive, architect-led renovation. From structural changes to finish selections, we handle every detail of your whole-home remodel.",
  heroImage: "https://goldhearthomes.com/wp-content/uploads/2022/06/modern-living-room-remodel-kansas-city.jpg",
  problems: [
    {
      title: "Disconnected Spaces",
      description:
        "Your home feels like a collection of rooms rather than a cohesive whole. The flow is awkward, styles don't match, and the home doesn't reflect how you live.",
    },
    {
      title: "Outdated Systems",
      description:
        "Electrical, plumbing, and HVAC systems are aging. You're facing multiple system failures and the home doesn't meet modern efficiency standards.",
    },
    {
      title: "Lack of Functionality",
      description:
        "The home doesn't support your lifestyle. Whether it's an open-concept layout, home office space, or aging-in-place features, the home needs comprehensive updates.",
    },
  ],
  solutions: [
    {
      title: "Cohesive Design Vision",
      description:
        "We create a unified design language throughout your home. From architectural details to finish selections, every element works together to create a cohesive whole.",
    },
    {
      title: "System Upgrades",
      description:
        "We coordinate electrical, plumbing, HVAC, and structural updates as part of the renovation. Your home will be more efficient, safer, and future-ready.",
    },
    {
      title: "Phased Construction",
      description:
        "For whole-home remodels, we create a phased approach that allows you to live in your home during construction. Dust containment and daily cleanup minimize disruption.",
    },
    {
      title: "Project Management",
      description:
        "Complex whole-home remodels require expert coordination. We manage all trades, permits, inspections, and timelines so you don't have to.",
    },
  ],
  timeline: "12-24 weeks",
  investmentRange: "$150,000 - $500,000+",
};

export default function WholeHomeRemodelingPage() {
  return (
    <div className="pt-20">
      <ServiceHero service={serviceData} />
      <ProblemRisks problems={serviceData.problems} />
      <Solutions solutions={serviceData.solutions} />
      <BeforeAfterGallery serviceType="whole-home" />
      <ProcessTimeline timeline={serviceData.timeline} />
      <InvestmentFinancing range={serviceData.investmentRange} />
      <Warranties />
      <ServiceTestimonials serviceType="whole-home" />
      <ServiceFAQ serviceType="whole-home" />
      <CoverageMap />
      <ServiceCTA />
    </div>
  );
}
