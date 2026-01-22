"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Consultation",
    description: "We understand your goals and define scope before design begins.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    alt: "Design consultation in Kansas City",
  },
  {
    title: "Design & Planning",
    description: "Detailed plans and material selections. You approve everything before construction.",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&q=80",
    alt: "Design planning and material selection",
  },
  {
    title: "Construction",
    description: "One team manages your project from start to finish with clear communication.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    alt: "Professional construction management",
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
    <section className="bg-neutral-50 py-20 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-neutral-900 mb-4">
            Our Design-Led Process
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Upfront scope, collaborative design, and full accountability from start to finish.
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
                <div className="text-sm font-medium text-primary-600 mb-2">
                  {index + 1} of 3
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

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/about"
            className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
          >
            Learn more about our process
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
