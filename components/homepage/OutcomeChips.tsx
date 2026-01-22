"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const assurances = [
  {
    title: "Design That Fits How You Live",
    description:
      "Thoughtful layouts, curated materials, and designs shaped around how you actually use your home.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=90",
    alt: "Thoughtfully designed kitchen space",
  },
  {
    title: "A Build Process You Can Trust",
    description:
      "One team, clear scope, and disciplined project management to avoid budget surprises and timeline drift.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=90",
    alt: "Organized construction site with professional team",
  },
  {
    title: "Respect for Your Home and Time",
    description:
      "Clean job sites, daily communication, and a livable remodeling approach that minimizes disruption.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=90",
    alt: "Clean, organized remodeling workspace",
  },
];

export default function OutcomeChips() {
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
            Why Homeowners Choose Gold Heart Homes
          </h2>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {assurances.map((assurance, index) => (
            <div
              key={index}
              className="group bg-white border border-neutral-200 rounded-[12px] overflow-hidden hover:shadow-lg transition-all duration-300"
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Supporting Image */}
              <div className="relative h-[200px] bg-neutral-100">
                <Image
                  src={assurance.image}
                  alt={assurance.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
              
              {/* Content */}
              <div className="p-8 lg:p-10">
                <h3 className="text-xl lg:text-2xl font-serif font-semibold text-neutral-900 mb-4">
                  {assurance.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {assurance.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
