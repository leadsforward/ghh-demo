"use client";

import { useEffect, useRef, useState } from "react";

const assurances = [
  {
    title: "Design That Fits How You Live",
    description:
      "Thoughtful layouts, curated materials, and designs shaped around how you actually use your home.",
  },
  {
    title: "A Build Process You Can Trust",
    description:
      "One team, clear scope, and disciplined project management to avoid budget surprises and timeline drift.",
  },
  {
    title: "Respect for Your Home and Time",
    description:
      "Clean job sites, daily communication, and a livable remodeling approach that minimizes disruption.",
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
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {assurances.map((assurance, index) => (
            <div
              key={index}
              className="bg-white border border-neutral-200 p-8 lg:p-10 rounded-lg transition-opacity duration-700"
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <h3 className="text-xl lg:text-2xl font-serif font-semibold text-neutral-900 mb-4">
                {assurance.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {assurance.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
