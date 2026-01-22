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
  title: "Bathroom Remodeling",
  description:
    "Create a spa-like retreat in your home. Premium fixtures, thoughtful layouts, and waterproofing that lasts. Architect-led design for bathrooms that function beautifully.",
  heroImage: "https://goldhearthomes.com/wp-content/uploads/2022/06/new-bath-remodeling-job-kansas-city.jpg",
  problems: [
    {
      title: "Outdated Fixtures & Finishes",
      description:
        "Your bathroom feels dated and doesn't match the rest of your home. Tiles are cracked, fixtures are inefficient, and the space lacks the spa-like feel you want.",
    },
    {
      title: "Poor Layout & Storage",
      description:
        "The bathroom layout doesn't work for your needs. Lack of storage, cramped spaces, and poor lighting make daily routines frustrating.",
    },
    {
      title: "Water Damage & Mold Risk",
      description:
        "Old plumbing, inadequate waterproofing, and worn-out seals create ongoing maintenance issues and potential water damage to your home.",
    },
  ],
  solutions: [
    {
      title: "Spa-Inspired Design",
      description:
        "We design bathrooms that feel like retreats. Thoughtful material selection, proper lighting, and layouts that maximize both function and relaxation.",
    },
    {
      title: "Premium Waterproofing",
      description:
        "Professional waterproofing systems protect your home. We use industry-leading materials and techniques to ensure your bathroom stays dry for decades.",
    },
    {
      title: "Efficient Fixtures",
      description:
        "Modern, water-efficient fixtures reduce utility costs while improving performance. From rain showers to smart toilets, we help you choose what fits your lifestyle.",
    },
    {
      title: "Custom Storage Solutions",
      description:
        "Built-in vanities, medicine cabinets, and niche storage maximize space. Every inch is designed to keep your bathroom organized and clutter-free.",
    },
  ],
  timeline: "6-10 weeks",
  investmentRange: "$25,000 - $75,000+",
};

export default function BathroomRemodelingPage() {
  return (
    <div className="pt-20">
      <ServiceHero service={serviceData} />
      <ProblemRisks problems={serviceData.problems} />
      <Solutions solutions={serviceData.solutions} />
      <BeforeAfterGallery serviceType="bathroom" />
      <ProcessTimeline timeline={serviceData.timeline} />
      <InvestmentFinancing range={serviceData.investmentRange} />
      <Warranties />
      <ServiceTestimonials serviceType="bathroom" />
      <ServiceFAQ serviceType="bathroom" />
      <CoverageMap />
      <ServiceCTA />
    </div>
  );
}
