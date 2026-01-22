"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Kitchen Remodeling",
    description:
      "Thoughtful layouts and premium materials that transform how you cook, gather, and live.",
    href: "/services/kitchen-remodeling",
    cta: "View Kitchen Projects",
  },
  {
    title: "Bathroom Remodeling",
    description:
      "Spaces designed for daily routines and long-term performance, with attention to every detail.",
    href: "/services/bathroom-remodeling",
    cta: "View Bathroom Projects",
  },
  {
    title: "Whole-Home Remodeling",
    description:
      "Cohesive design and disciplined execution across your entire home, from concept to completion.",
    href: "/services/whole-home-remodeling",
    cta: "View Whole-Home Projects",
  },
  {
    title: "Additions & Major Renovations",
    description:
      "Thoughtful expansion and structural changes that integrate seamlessly with your existing home.",
    href: "/services/additions",
    cta: "View Addition Projects",
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
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-neutral-900 mb-4">
            Our core remodeling services.
          </h2>
          <p className="text-lg lg:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Focused expertise in the areas where thoughtful design and disciplined
            building matter most.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white border border-neutral-200 p-8 lg:p-10 rounded-lg transition-opacity duration-700"
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <h3 className="text-xl lg:text-2xl font-serif font-semibold text-neutral-900 mb-4">
                {service.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <Link
                href={service.href}
                className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
              >
                {service.cta}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
