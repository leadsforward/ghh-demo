"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

// Primary Services - Image-led, featured
const primaryServices = [
  {
    title: "Kitchen Remodeling",
    description: "Thoughtful layouts and premium materials that transform how you cook, gather, and live.",
    href: "/services/kitchen-remodeling",
    image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=1200&q=90",
    alt: "Kitchen remodeling in Kansas City",
    featured: true,
  },
  {
    title: "Bathroom Remodeling",
    description: "Spaces designed for daily routines and long-term performance.",
    href: "/services/bathroom-remodeling",
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=1200&q=90",
    alt: "Bathroom remodeling in Kansas City",
    featured: false,
  },
  {
    title: "Whole-Home Remodeling",
    description: "Cohesive design and disciplined execution across your entire home.",
    href: "/services/whole-home-remodeling",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=90",
    alt: "Whole-home remodeling in Kansas City",
    featured: false,
  },
];

// Secondary Services - Prominent but visually quieter
const secondaryServices = [
  {
    title: "Home Additions",
    description: "Thoughtful expansion that integrates seamlessly with your existing home.",
    href: "/services/additions",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=90",
    alt: "Home additions in Kansas City",
  },
  {
    title: "Exterior Remodeling",
    description: "Curb appeal and structural integrity with premium materials and craftsmanship.",
    href: "/services/exteriors",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=90",
    alt: "Exterior remodeling in Kansas City",
  },
];

// Extended Capabilities - Links only
const extendedCapabilities = [
  { name: "Interior Renovations", href: "/services/interiors" },
  { name: "3D Rendering", href: "/services/3d-rendering" },
  { name: "Outdoor Living / Pools", href: "/services/pools" },
  { name: "Commercial Projects", href: "/services/commercial" },
];

export default function CoreBenefits() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-neutral-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Design-led remodeling for kitchens, bathrooms, whole-home renovations, additions, and exterior projects in Kansas City.
          </p>
        </div>

        <div
          ref={ref}
          className={`space-y-8 lg:space-y-12 transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Primary Services - Kitchen Featured */}
          {primaryServices
            .filter((s) => s.featured)
            .map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className={`group block bg-white border-2 border-primary-100 rounded-[16px] overflow-hidden hover:border-primary-200 hover:shadow-xl transition-all duration-300 ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Large Kitchen Image */}
                  <div className="relative h-[400px] lg:h-[500px] bg-neutral-100">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      loading="eager"
                      priority
                    />
                    <div className="absolute top-6 left-6 bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Featured Service
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h3 className="text-3xl lg:text-4xl font-serif font-bold text-neutral-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="inline-flex items-center text-primary-600 font-semibold group-hover:text-primary-700 transition-colors">
                      View Kitchen Projects
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}

          {/* Other Primary Services - Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {primaryServices
              .filter((s) => !s.featured)
              .map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className={`group block bg-white border border-neutral-200 rounded-[12px] overflow-hidden hover:shadow-lg transition-all duration-300 ${
                    isVisible ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    transitionDelay: `${(index + 1) * 100}ms`,
                  }}
                >
                  {/* Service Image */}
                  <div className="relative h-[280px] bg-neutral-100">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      loading="lazy"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-8 lg:p-10">
                    <h3 className="text-xl lg:text-2xl font-serif font-semibold text-neutral-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="inline-flex items-center text-primary-600 font-semibold group-hover:text-primary-700 transition-colors">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
          </div>

          {/* Secondary Services - Prominent but Quieter */}
          <div className="pt-12 border-t border-neutral-200">
            <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-6 text-center">
              Additional Remodeling Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {secondaryServices.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="group block bg-white border border-neutral-200 rounded-[12px] overflow-hidden hover:shadow-md transition-all duration-300"
                >
                  <div className="relative h-[200px] bg-neutral-100">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-serif font-semibold text-neutral-900 mb-2">
                      {service.title}
                    </h4>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Extended Capabilities - Links Only */}
          <div className="pt-8 border-t border-neutral-200">
            <p className="text-sm text-neutral-600 mb-4 text-center">
              Extended capabilities:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {extendedCapabilities.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors"
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
