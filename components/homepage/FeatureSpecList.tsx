"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const standards = [
  "Dedicated design-build team",
  "Detailed scope and upfront planning",
  "Clear communication throughout the project",
  "Defined timelines and active project management",
  "Professional workmanship standards",
  "Respect for your home and daily routine",
];

const services = [
  "Kitchen remodeling",
  "Bathroom remodeling",
  "Whole-home remodeling",
  "Basement remodeling",
];

export default function FeatureSpecList() {
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
            What&apos;s included in every project.
          </h2>
          <p className="text-lg lg:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Clear expectations, thoughtful planning, and professional standards
            that apply to every project we take on.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Group 1: Our Standards (Primary Focus) */}
          <div>
            <h3 className="text-xl lg:text-2xl font-serif font-semibold text-neutral-900 mb-6">
              Our Standards
            </h3>
            <ul className="space-y-4">
              {standards.map((standard, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-neutral-700 leading-relaxed"
                >
                  <span className="text-primary-600 font-bold mt-1">•</span>
                  <span>{standard}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Group 2: Core Remodeling Services (Secondary) */}
          <div>
            <h3 className="text-xl lg:text-2xl font-serif font-semibold text-neutral-900 mb-6">
              Core Remodeling Services
            </h3>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-neutral-700 leading-relaxed"
                >
                  <span className="text-primary-600 font-bold mt-1">•</span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Optional CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/about"
            className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
          >
            See how our process works
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
