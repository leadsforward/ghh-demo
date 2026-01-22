import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import FinalCTA from "@/components/homepage/FinalCTA";

const projects = [
  {
    id: "modern-kitchen-overland-park",
    title: "Modern Kitchen Transformation",
    location: "Overland Park, KS",
    service: "Kitchen Remodeling",
    image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&q=80",
    excerpt:
      "Complete kitchen renovation with custom cabinetry, quartz countertops, and premium appliances. Open-concept design that flows seamlessly into the living area.",
  },
  {
    id: "spa-bathroom-leawood",
    title: "Spa-Like Master Bathroom",
    location: "Leawood, KS",
    service: "Bathroom Remodeling",
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80",
    excerpt:
      "Master bathroom transformation with walk-in shower, freestanding tub, and custom tile work. Premium fixtures and professional waterproofing throughout.",
  },
  {
    id: "whole-home-kansas-city",
    title: "Whole-Home Renovation",
    location: "Kansas City, MO",
    service: "Whole-Home Remodeling",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    excerpt:
      "Comprehensive whole-home renovation with open-concept living, updated systems, and cohesive design throughout. Phased construction allowed homeowners to stay in residence.",
  },
];

export default function ProjectsPage() {
  return (
    <div className="pt-20">
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900 mb-4">
              Our Work
            </h1>
            <p className="text-lg lg:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Editorial case studies of our recent work. Each project tells a
              story of transformation, from initial goals to final results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="group bg-white border border-neutral-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary-600 font-semibold mb-2">
                    {project.service}
                  </div>
                  <h2 className="text-2xl font-serif font-semibold text-neutral-900 mb-2">
                    {project.title}
                  </h2>
                  <div className="text-sm text-neutral-600 mb-4">
                    {project.location}
                  </div>
                  <p className="text-neutral-700 mb-4 leading-relaxed">
                    {project.excerpt}
                  </p>
                  <div className="flex items-center text-primary-600 font-semibold text-sm group-hover:gap-2 transition-all">
                    View Case Study
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <FinalCTA />
    </div>
  );
}
