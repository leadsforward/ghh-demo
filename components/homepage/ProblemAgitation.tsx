"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const assurances = [
  {
    title: "Clear Scope and Investment Planning",
    description:
      "Detailed planning and selections upfront so your investment is understood before construction begins.",
  },
  {
    title: "Disciplined Timelines",
    description:
      "Realistic schedules, dedicated project management, and coordination that keeps your project moving.",
  },
  {
    title: "Thoughtful Pre-Construction Planning",
    description:
      "Permits, materials, and logistics handled before work starts — not figured out mid-project.",
  },
  {
    title: "Craftsmanship That Lasts",
    description:
      "Experienced trades, proven materials, and standards designed for long-term performance.",
  },
];

export default function ProblemAgitation() {
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
            A remodeling process built for clarity.
          </h2>
          <p className="text-lg lg:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Our design-build process removes the most common causes of stress by
            planning thoroughly, communicating clearly, and managing every
            detail.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 transition-opacity duration-1000 ${
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

        {/* Process Bridge Statement */}
        <div className="mt-12 lg:mt-16 text-center">
          <p className="text-lg text-neutral-700 mb-6 max-w-3xl mx-auto">
            From initial consultation to final walkthrough, one team is
            accountable for your project every step of the way.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
          >
            Learn About Our Process
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
