"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Check, Minus } from "lucide-react";
import { ArrowRight } from "lucide-react";

const comparisons = [
  {
    feature: "Experienced, dedicated project team",
    ourApproach: true,
    industryNorms: true,
  },
  {
    feature: "Clear scope and upfront planning",
    ourApproach: true,
    industryNorms: false,
  },
  {
    feature: "Defined timelines and active project management",
    ourApproach: true,
    industryNorms: false,
  },
  {
    feature: "Consistent communication throughout the build",
    ourApproach: true,
    industryNorms: false,
  },
  {
    feature: "Custom designs tailored to the home",
    ourApproach: true,
    industryNorms: false,
  },
  {
    feature: "Standards for long-term workmanship",
    ourApproach: true,
    industryNorms: true,
  },
  {
    feature: "Transparent, documented decisions",
    ourApproach: true,
    industryNorms: false,
  },
];

export default function FlexSection() {
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
            A more thoughtful approach to remodeling.
          </h2>
          <p className="text-lg lg:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Clear communication, disciplined planning, and respect for your home
            aren't extras — they're built into how we work.
          </p>
        </div>

        {/* Optional Intro Text */}
        <div className="mb-8 text-center">
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Most remodeling frustrations come down to planning and communication.
            Here's how our approach compares.
          </p>
        </div>

        <div
          ref={ref}
          className={`bg-white border border-neutral-200 rounded-lg overflow-hidden transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-neutral-50 border-b border-neutral-200">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-neutral-900">
                    What matters during a remodel
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-neutral-900">
                    Our Approach
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-neutral-900">
                    Industry Norms
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-neutral-100 last:border-0 bg-white hover:bg-neutral-50/50 transition-colors"
                  >
                    <td className="px-6 py-5 text-neutral-700 font-medium">
                      {row.feature}
                    </td>
                    <td className="px-6 py-5 text-center">
                      {row.ourApproach ? (
                        <Check className="w-5 h-5 text-primary-600 mx-auto" />
                      ) : (
                        <Minus className="w-5 h-5 text-neutral-300 mx-auto" />
                      )}
                    </td>
                    <td className="px-6 py-5 text-center">
                      {row.industryNorms ? (
                        <div className="w-2 h-2 rounded-full bg-neutral-400 mx-auto"></div>
                      ) : (
                        <Minus className="w-5 h-5 text-neutral-300 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Optional CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
          >
            Schedule a Design Consultation
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
