import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FinalCTA from "@/components/homepage/FinalCTA";

const projects: Record<
  string,
  {
    title: string;
    location: string;
    service: string;
    image: string;
    goal: string;
    constraints: string[];
    solution: string;
    timeline: string;
    materials: string[];
    outcome: string;
  }
> = {
  "modern-kitchen-overland-park": {
    title: "Modern Kitchen Transformation",
    location: "Overland Park, KS",
    service: "Kitchen Remodeling",
    image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=1200&q=80",
    goal: "Transform a 1980s kitchen into a modern, functional space that serves as the heart of the home. The homeowners wanted an open-concept design that flowed seamlessly into the living area, with premium finishes and smart storage solutions.",
    constraints: [
      "Existing structural walls limited layout options",
      "Budget of $85,000",
      "Timeline of 10 weeks (homeowners hosting holiday gathering)",
      "Need to maintain access to backyard during construction",
    ],
    solution:
      "We removed a non-load-bearing wall to create an open-concept layout, installed custom cabinetry with pull-out storage solutions, and selected quartz countertops for durability and beauty. Premium appliances were integrated seamlessly, and a large island became the focal point for both cooking and entertaining.",
    timeline: "10 weeks (completed on schedule)",
    materials: [
      "Custom soft-close cabinetry",
      "Quartz countertops",
      "Premium stainless steel appliances",
      "Hardwood flooring (refinished existing)",
      "Custom tile backsplash",
      "Under-cabinet LED lighting",
    ],
    outcome:
      "The kitchen now serves as the true heart of the home. The open-concept design creates a seamless flow between kitchen and living areas, and the smart storage solutions maximize every inch of space. The homeowners hosted their holiday gathering on schedule, and the kitchen has become their favorite room in the house.",
  },
  "spa-bathroom-leawood": {
    title: "Spa-Like Master Bathroom",
    location: "Leawood, KS",
    service: "Bathroom Remodeling",
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=1200&q=80",
    goal: "Create a spa-like retreat in the master bathroom with a walk-in shower, freestanding tub, and premium finishes. The homeowners wanted a space that felt luxurious yet functional for daily routines.",
    constraints: [
      "Limited square footage",
      "Existing plumbing locations",
      "Need for accessible design elements",
      "Timeline of 8 weeks",
    ],
    solution:
      "We redesigned the layout to maximize space efficiency, installed a large walk-in shower with multiple showerheads, and added a freestanding tub as a focal point. Premium tile work, custom vanity, and thoughtful lighting create a spa-like atmosphere.",
    timeline: "8 weeks (completed on schedule)",
    materials: [
      "Porcelain tile flooring and walls",
      "Frameless glass shower enclosure",
      "Premium plumbing fixtures",
      "Custom vanity with quartz top",
      "Heated floors",
      "Recessed and accent lighting",
    ],
    outcome:
      "The master bathroom now functions as a true retreat. The thoughtful layout maximizes every inch of space, and the premium finishes create a luxurious atmosphere. The homeowners use the space daily and appreciate the attention to detail in both design and execution.",
  },
  "whole-home-kansas-city": {
    title: "Whole-Home Renovation",
    location: "Kansas City, MO",
    service: "Whole-Home Remodeling",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    goal: "Comprehensive whole-home renovation with open-concept living, updated systems, and cohesive design throughout. The homeowners wanted to modernize their 1970s home while maintaining its character.",
    constraints: [
      "Homeowners staying in residence during construction",
      "Phased construction approach required",
      "Budget of $180,000",
      "Timeline of 16 weeks",
    ],
    solution:
      "We developed a phased construction plan that allowed the homeowners to remain in residence. We started with the kitchen and main living areas, then moved to bedrooms and bathrooms. All systems were updated, and cohesive design elements were applied throughout.",
    timeline: "16 weeks (completed on schedule)",
    materials: [
      "Hardwood flooring throughout",
      "Updated electrical and plumbing systems",
      "New windows and doors",
      "Custom cabinetry and built-ins",
      "Premium fixtures and finishes",
      "Energy-efficient HVAC system",
    ],
    outcome:
      "The whole-home renovation transformed the 1970s home into a modern, cohesive space. The phased approach allowed the homeowners to stay in residence with minimal disruption, and the updated systems ensure long-term performance. The home now reflects the homeowners' lifestyle and preferences.",
  },
};

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug];

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-20">
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link
              href="/projects"
              className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors mb-6"
            >
              <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
              Back to Projects
            </Link>
          </div>

          <div className="mb-12">
            <div className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-3">
              {project.service}
            </div>
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900 mb-4">
              {project.title}
            </h1>
            <div className="text-lg text-neutral-600">{project.location}</div>
          </div>

          <div className="relative h-[400px] lg:h-[600px] rounded-lg overflow-hidden mb-12 bg-neutral-100">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 mb-16">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-2xl lg:text-3xl font-serif font-semibold text-neutral-900 mb-4">
                  Project Goals
                </h2>
                <p className="text-lg text-neutral-700 leading-relaxed">
                  {project.goal}
                </p>
              </div>

              <div>
                <h2 className="text-2xl lg:text-3xl font-serif font-semibold text-neutral-900 mb-4">
                  Constraints & Challenges
                </h2>
                <ul className="space-y-3">
                  {project.constraints.map((constraint, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-neutral-700"
                    >
                      <span className="text-primary-600 font-bold mt-1">•</span>
                      <span className="leading-relaxed">{constraint}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl lg:text-3xl font-serif font-semibold text-neutral-900 mb-4">
                  Our Approach
                </h2>
                <p className="text-lg text-neutral-700 leading-relaxed">
                  {project.solution}
                </p>
              </div>

              <div>
                <h2 className="text-2xl lg:text-3xl font-serif font-semibold text-neutral-900 mb-4">
                  Results
                </h2>
                <p className="text-lg text-neutral-700 leading-relaxed">
                  {project.outcome}
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-neutral-50 rounded-lg p-6 border border-neutral-200">
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                  Project Details
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-semibold text-neutral-600 mb-1">
                      Timeline
                    </div>
                    <div className="text-neutral-900">{project.timeline}</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-neutral-600 mb-1">
                      Location
                    </div>
                    <div className="text-neutral-900">{project.location}</div>
                  </div>
                </div>
              </div>

              <div className="bg-neutral-50 rounded-lg p-6 border border-neutral-200">
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">
                  Materials & Finishes
                </h3>
                <ul className="space-y-2">
                  {project.materials.map((material, index) => (
                    <li
                      key={index}
                      className="text-neutral-700 text-sm leading-relaxed"
                    >
                      • {material}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FinalCTA />
    </div>
  );
}
