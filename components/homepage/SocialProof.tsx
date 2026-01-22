"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const testimonials = [
  {
    name: "Sarah & Michael Chen",
    location: "Overland Park, KS",
    project: "Kitchen Remodel",
    text: "Gold Heart Homes transformed our 1980s kitchen into a modern, functional space. The design process was collaborative, the timeline was accurate, and the final result exceeded our expectations. No budget surprises, no delays.",
  },
  {
    name: "David Martinez",
    location: "Kansas City, MO",
    project: "Master Bathroom Remodel",
    text: "The team at Gold Heart Homes made all the difference. They helped us make decisions we wouldn't have thought of on our own. The build process was clean, organized, and respectful of our home. Worth every penny.",
  },
  {
    name: "Jennifer & Robert Thompson",
    location: "Leawood, KS",
    project: "Whole-Home Renovation",
    text: "We'd heard horror stories about remodeling, but Gold Heart Homes made it seamless. Competitive pricing, clear communication, and a team that treated our home like their own. Highly recommend!",
  },
];

export default function SocialProof() {
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
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-neutral-900 mb-3">
            Trusted by homeowners across Kansas City.
          </h2>
          <div className="flex items-center justify-center gap-1 mb-4">
            <span className="text-neutral-600 text-sm">★★★★★</span>
            <span className="text-neutral-500 text-sm">4.9 rating</span>
          </div>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed mb-4">
            Home remodeling is personal. These are a few words from homeowners
            who trusted us with their homes — and their peace of mind.
          </p>
          <Link
            href="/reviews"
            className="inline-flex items-center text-sm text-neutral-500 hover:text-primary-600 transition-colors"
          >
            See more reviews
            <ExternalLink className="ml-1 w-3 h-3" />
          </Link>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border border-neutral-200 p-8 lg:p-10 rounded-lg transition-all duration-300 hover:shadow-md lg:hover:shadow-lg"
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <p className="text-neutral-700 mb-8 leading-relaxed italic">
                &quot;{testimonial.text}&quot;
              </p>
              <div className="border-t border-neutral-200 pt-6">
                <div className="font-semibold text-neutral-900 mb-1">
                  {testimonial.name}
                </div>
                <div className="text-sm text-neutral-600">
                  {testimonial.location} · {testimonial.project}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
