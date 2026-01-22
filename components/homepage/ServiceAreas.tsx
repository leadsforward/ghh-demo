"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const primaryLocations = [
  "Jackson County, MO",
  "Clay County, MO",
  "Platte County, MO",
  "Cass County, MO",
  "Johnson County, KS",
  "Wyandotte County, KS",
];

export default function ServiceAreas() {
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
    <section className="bg-neutral-50 py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-neutral-900 mb-4">
            Proudly serving the Kansas City area.
          </h2>
          <p className="text-lg lg:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Design-build remodeling services across Kansas City and surrounding
            communities.
          </p>
        </div>

        <div
          ref={ref}
          className={`transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Primary Locations - Counties */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
            {primaryLocations.map((location, index) => (
              <div
                key={index}
                className="text-center lg:text-left"
                style={{
                  transitionDelay: `${index * 50}ms`,
                }}
              >
                <p className="text-neutral-700 font-medium">{location}</p>
              </div>
            ))}
          </div>

          {/* Secondary Locations - Cities */}
          <div className="text-center pt-6 border-t border-neutral-200">
            <p className="text-neutral-600 leading-relaxed">
              Serving Kansas City, Overland Park, Prairie Village, Leawood,
              Lee&apos;s Summit, Shawnee, Olathe, Lenexa, Liberty, and nearby
              communities.
            </p>
          </div>
        </div>

        {/* Optional CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/areas-served"
            className="inline-flex items-center text-sm text-neutral-500 hover:text-primary-600 transition-colors"
          >
            Contact us to confirm availability
            <ArrowRight className="ml-1 w-3 h-3" />
          </Link>
        </div>
      </div>
    </section>
  );
}
