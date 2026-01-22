import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FinalCTA from "@/components/homepage/FinalCTA";

const resources = [
  {
    title: "Kitchen Remodeling Guide",
    description:
      "Everything you need to know about planning and executing a successful kitchen remodel, from design to completion.",
    type: "Guide",
  },
  {
    title: "Bathroom Remodeling Checklist",
    description:
      "A comprehensive checklist to help you plan your bathroom remodel, including design considerations and material selections.",
    type: "Checklist",
  },
  {
    title: "Understanding Remodeling Costs",
    description:
      "Learn about the factors that influence remodeling costs and how to budget effectively for your project.",
    type: "Article",
  },
  {
    title: "Design Trends for 2024",
    description:
      "Explore current design trends in residential remodeling, from materials to layouts to color palettes.",
    type: "Article",
  },
];

export default function ResourcesPage() {
  return (
    <div className="pt-20">
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900 mb-4">
              Resources
            </h1>
            <p className="text-lg lg:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Helpful guides, articles, and resources to help you plan your
              remodeling project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {resources.map((resource, index) => (
              <div
                key={index}
                className="bg-white border border-neutral-200 p-8 lg:p-10 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="text-sm font-semibold text-primary-600 uppercase tracking-wide mb-3">
                  {resource.type}
                </div>
                <h2 className="text-2xl font-serif font-semibold text-neutral-900 mb-3">
                  {resource.title}
                </h2>
                <p className="text-neutral-600 mb-4 leading-relaxed">
                  {resource.description}
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                >
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FinalCTA />
    </div>
  );
}
