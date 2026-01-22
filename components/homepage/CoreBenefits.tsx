"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

// Interior Remodeling - Primary category with Kitchen featured
const interiorRemodeling = {
  category: "Interior Remodeling",
  description: "Complete interior renovations including kitchens, bathrooms, basements, and all interior finishes.",
  featured: {
    title: "Kitchen Remodeling",
    description: "Thoughtful layouts and premium materials that transform how you cook, gather, and live.",
    href: "/services/kitchen-remodeling",
    image: "https://goldhearthomes.com/wp-content/uploads/2022/06/updated-kitchen-remodeling-kansas-city.jpg",
    alt: "Kitchen remodeling project in Kansas City - Gold Heart Homes",
  },
  otherServices: [
    {
      title: "Bathroom Remodeling",
      description: "Spaces designed for daily routines and long-term performance.",
      href: "/services/bathroom-remodeling",
      image: "https://goldhearthomes.com/wp-content/uploads/2022/06/new-bath-remodeling-job-kansas-city.jpg",
      alt: "Bathroom remodeling project in Kansas City - Gold Heart Homes",
    },
    {
      title: "Basement Remodeling",
      description: "Transform unused space into functional living areas.",
      href: "/services/basement-remodeling",
      image: "https://goldhearthomes.com/wp-content/uploads/2022/06/basement-remodeling-kansas-city.jpg",
      alt: "Basement remodeling project in Kansas City - Gold Heart Homes",
    },
  ],
  interiorServices: [
    "Cabinets",
    "Countertops",
    "Flooring",
    "Interior Painting",
  ],
};

// Exterior Remodeling - Major service category
const exteriorRemodeling = {
  title: "Exterior Remodeling",
  description: "Roofing, siding, decking, fencing, hardscaping, pools, and exterior painting. Complete exterior renovations for curb appeal and structural integrity.",
  href: "/services/exteriors",
  image: "https://goldhearthomes.com/wp-content/uploads/2022/09/001_1600x1067_mls.jpg",
  alt: "Exterior remodeling project in Kansas City - Gold Heart Homes",
};

// Additional Services - All legitimate, not "extended"
const additionalServices = [
  {
    title: "Additions",
    description: "Thoughtful expansion that integrates seamlessly with your existing home.",
    href: "/services/additions",
    image: "https://goldhearthomes.com/wp-content/uploads/2022/09/003_1600x1067_mls.jpg",
    alt: "Home addition project in Kansas City - Gold Heart Homes",
  },
  {
    title: "3D Rendering",
    description: "Visualize your project before construction begins with detailed 3D renderings.",
    href: "/services/3d-rendering",
    image: "https://goldhearthomes.com/wp-content/uploads/2022/07/DSC_0001.jpg",
    alt: "3D rendering services in Kansas City - Gold Heart Homes",
  },
  {
    title: "Commercial Projects",
    description: "Commercial remodeling and renovation services for businesses.",
    href: "/services/commercial",
    image: "https://goldhearthomes.com/wp-content/uploads/2022/09/004_1600x1067_mls.jpg",
    alt: "Commercial remodeling project in Kansas City - Gold Heart Homes",
  },
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
    <section className="bg-white py-20 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-neutral-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Interior and exterior remodeling, additions, and commercial projects in Kansas City. Design-led approach with full-scope capability.
          </p>
        </div>

        <div
          ref={ref}
          className={`space-y-12 lg:space-y-16 transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Interior Remodeling - Kitchen Featured (Dominant) */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-2xl lg:text-3xl font-serif font-semibold text-neutral-900 mb-2">
                {interiorRemodeling.category}
              </h3>
              <p className="text-neutral-600 max-w-2xl mx-auto">
                {interiorRemodeling.description}
              </p>
            </div>

            {/* Featured Kitchen - Large and Dominant */}
            <Link
              href={interiorRemodeling.featured.href}
              className={`group block bg-white border-2 border-primary-200 rounded-[20px] overflow-hidden hover:border-primary-300 hover:shadow-2xl transition-all duration-500 mb-8 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Large Kitchen Image - Dominant Visual */}
                <div className="relative h-[450px] lg:h-[600px] bg-neutral-100 overflow-hidden">
                  <Image
                    src={interiorRemodeling.featured.image}
                    alt={interiorRemodeling.featured.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    loading="eager"
                    priority
                  />
                  <div className="absolute inset-0 bg-primary-600/0 group-hover:bg-primary-600/5 transition-colors duration-500"></div>
                  <div className="absolute top-8 left-8 bg-primary-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg">
                    Featured Service
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-10 lg:p-16 flex flex-col justify-center bg-gradient-to-br from-white to-neutral-50">
                  <h4 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900 mb-6 leading-tight">
                    {interiorRemodeling.featured.title}
                  </h4>
                  <p className="text-xl text-neutral-700 leading-relaxed mb-8">
                    {interiorRemodeling.featured.description}
                  </p>
                  <div className="inline-flex items-center text-primary-600 font-semibold group-hover:text-primary-700 transition-all">
                    <span className="border-b-2 border-primary-600 group-hover:border-primary-700 transition-colors">
                      View Kitchen Projects
                    </span>
                    <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Other Interior Services - Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-8">
              {interiorRemodeling.otherServices.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className={`group block bg-white border border-neutral-200 rounded-[16px] overflow-hidden hover:shadow-xl hover:border-primary-200 transition-all duration-500 ${
                    isVisible ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    transitionDelay: `${(index + 1) * 100}ms`,
                  }}
                >
                  <div className="relative h-[320px] bg-neutral-100 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.08]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                  </div>
                  <div className="p-8 lg:p-10">
                    <h4 className="text-2xl lg:text-3xl font-serif font-semibold text-neutral-900 mb-4">
                      {service.title}
                    </h4>
                    <p className="text-neutral-600 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="inline-flex items-center text-primary-600 font-semibold group-hover:text-primary-700 transition-all">
                      <span className="border-b border-primary-600 group-hover:border-primary-700 transition-colors">
                        Learn More
                      </span>
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Interior Service Details */}
            <div className="bg-neutral-50 rounded-lg p-6 border border-neutral-200">
              <p className="text-sm text-neutral-600 text-center mb-3">
                Also includes: {interiorRemodeling.interiorServices.join(", ")}
              </p>
              <Link
                href="/services/interiors"
                className="text-center block text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors"
              >
                View All Interior Services →
              </Link>
            </div>
          </div>

          {/* Exterior Remodeling - Major Service */}
          <div className="pt-8 border-t-2 border-neutral-300">
            <Link
              href={exteriorRemodeling.href}
              className={`group block bg-white border border-neutral-200 rounded-[16px] overflow-hidden hover:shadow-xl hover:border-primary-200 transition-all duration-500 ${
                isVisible ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-[400px] lg:h-[500px] bg-neutral-100 overflow-hidden">
                  <Image
                    src={exteriorRemodeling.image}
                    alt={exteriorRemodeling.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
                </div>
                <div className="p-10 lg:p-14 flex flex-col justify-center">
                  <h3 className="text-3xl lg:text-4xl font-serif font-bold text-neutral-900 mb-4">
                    {exteriorRemodeling.title}
                  </h3>
                  <p className="text-lg text-neutral-700 leading-relaxed mb-6">
                    {exteriorRemodeling.description}
                  </p>
                  <div className="inline-flex items-center text-primary-600 font-semibold group-hover:text-primary-700 transition-all">
                    <span className="border-b-2 border-primary-600 group-hover:border-primary-700 transition-colors">
                      Learn More
                    </span>
                    <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Additional Services - All Legitimate */}
          <div className="pt-8 border-t border-neutral-200">
            <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-6 text-center">
              Additional Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {additionalServices.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="group block bg-white border border-neutral-200 rounded-[12px] overflow-hidden hover:shadow-lg hover:border-primary-200 transition-all duration-300"
                >
                  <div className="relative h-[220px] bg-neutral-100 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
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
        </div>
      </div>
    </section>
  );
}
