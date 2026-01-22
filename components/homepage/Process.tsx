"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Consultation & Project Planning",
    description:
      "We start with an in-depth consultation to understand your goals, evaluate your home, and define scope, priorities, and investment parameters before any design work begins.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    alt: "Design consultation and planning",
  },
  {
    title: "Design, Selections & Approval",
    description:
      "Our designers create detailed plans and guide material selections. You review and approve everything before construction starts, so there are no surprises later.",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&q=80",
    alt: "Design plans and material selections",
  },
  {
    title: "Build & Project Management",
    description:
      "Our team manages construction, schedules, and communication through completion, delivering a finished space you can enjoy with confidence.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    alt: "Organized construction site",
  },
];

export default function Process() {
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
            Our design-build process.
          </h2>
          <p className="text-lg lg:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            A proven approach that keeps your project organized, predictable,
            and thoughtfully managed from start to finish.
          </p>
        </div>

        <div
          ref={ref}
          className={`space-y-12 lg:space-y-16 transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              {/* Image */}
              <div
                className={`relative h-[300px] lg:h-[350px] rounded-lg overflow-hidden bg-neutral-100 ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={step.image}
                  alt={step.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>

              {/* Content */}
              <div
                className={`${index % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <div className="text-sm font-medium text-neutral-500 mb-2">
                  Step {index + 1}
                </div>
                <h3 className="text-2xl lg:text-3xl font-serif font-semibold text-neutral-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-lg text-neutral-700 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Optional CTA */}
        <div className="mt-16 text-center">
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
