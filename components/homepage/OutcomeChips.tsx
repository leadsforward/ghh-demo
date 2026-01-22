"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const differentiators = [
  {
    title: "One Team, Full Accountability",
    description:
      "Design and construction under one roof. No handoffs, no confusion.",
    image: "https://goldhearthomes.com/wp-content/uploads/2022/09/005_1600x1067_mls.jpg",
    alt: "Professional design-build team in Kansas City",
  },
  {
    title: "Fixed Pricing, No Surprises",
    description:
      "Complete scope and pricing before construction begins.",
    image: "https://goldhearthomes.com/wp-content/uploads/2022/07/DSC_0005.jpg",
    alt: "Detailed planning and transparent pricing",
  },
  {
    title: "Respectful, Livable Remodeling",
    description:
      "Clean job sites and daily communication. You can stay in your home.",
    image: "https://goldhearthomes.com/wp-content/uploads/2022/09/006_1600x1067_mls.jpg",
    alt: "Clean, organized remodeling workspace",
  },
  {
    title: "5-Year Warranty",
    description:
      "Comprehensive coverage on workmanship, materials, and installation.",
    image: "https://goldhearthomes.com/wp-content/uploads/2022/06/kitchen-remodeling-kansas-city.jpg",
    alt: "Quality craftsmanship and warranty protection",
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
    <section className="bg-white py-20 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-neutral-900 mb-4">
            Why Homeowners Choose Gold Heart Homes
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Design-build remodeling that removes the stress from home renovation.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {differentiators.map((item, index) => (
            <div
              key={index}
              className="group bg-white border border-neutral-200 rounded-[12px] overflow-hidden hover:shadow-lg transition-all duration-300"
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Supporting Image */}
              <div className="relative h-[180px] bg-neutral-100">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  sizes="(max-width: 768px) 100vw, 25vw"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
              
              {/* Content */}
              <div className="p-6 lg:p-8">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                  <h3 className="text-lg lg:text-xl font-serif font-semibold text-neutral-900">
                    {item.title}
                  </h3>
                </div>
                <p className="text-neutral-600 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
