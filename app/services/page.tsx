import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import FinalCTA from "@/components/homepage/FinalCTA";

const services = [
  {
    title: "Kitchen Remodeling",
    description:
      "Thoughtful layouts and premium materials that transform how you cook, gather, and live.",
    href: "/services/kitchen-remodeling",
    image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&q=80",
  },
  {
    title: "Bathroom Remodeling",
    description:
      "Spaces designed for daily routines and long-term performance, with attention to every detail.",
    href: "/services/bathroom-remodeling",
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80",
  },
  {
    title: "Whole-Home Remodeling",
    description:
      "Cohesive design and disciplined execution across your entire home, from concept to completion.",
    href: "/services/whole-home-remodeling",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900 mb-4">
              Our Services
            </h1>
            <p className="text-lg lg:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Focused expertise in the areas where thoughtful design and
              disciplined building matter most.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group bg-white border border-neutral-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6 lg:p-8">
                  <h2 className="text-2xl font-serif font-semibold text-neutral-900 mb-3">
                    {service.title}
                  </h2>
                  <p className="text-neutral-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center text-primary-600 font-semibold text-sm group-hover:gap-2 transition-all">
                    Learn More
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
