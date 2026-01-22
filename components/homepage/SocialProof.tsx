"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

const testimonials = [
  {
    name: "Sarah & Michael Chen",
    location: "Overland Park, KS",
    project: "Kitchen Remodel",
    text: "Gold Heart Homes transformed our 1980s kitchen into a modern, functional space. The design process was collaborative, the timeline was accurate, and the final result exceeded our expectations. No budget surprises, no delays.",
    image: "https://goldhearthomes.com/wp-content/uploads/2022/06/remodeled-kitchen-with-new-appliances-kansas-city.jpg",
    alt: "Kitchen remodel project in Kansas City",
  },
  {
    name: "David Martinez",
    location: "Kansas City, MO",
    project: "Master Bathroom Remodel",
    text: "The team at Gold Heart Homes made all the difference. They helped us make decisions we wouldn't have thought of on our own. The build process was clean, organized, and respectful of our home. Worth every penny.",
    image: "https://goldhearthomes.com/wp-content/uploads/2022/06/new-bath-remodeling-job-kansas-city.jpg",
    alt: "Master bathroom remodel project in Kansas City",
  },
  {
    name: "Jennifer & Robert Thompson",
    location: "Kansas City, MO",
    project: "Interior Renovation",
    text: "We'd heard horror stories about remodeling, but Gold Heart Homes made it seamless. Competitive pricing, clear communication, and a team that treated our home like their own. Highly recommend!",
    image: "https://goldhearthomes.com/wp-content/uploads/2022/06/modern-living-room-remodel-kansas-city.jpg",
    alt: "Whole-home renovation project in Leawood",
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
    <section className="bg-neutral-50 py-20 lg:py-32">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-neutral-900 mb-4">
            Trusted by Kansas City Homeowners
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-yellow-500 text-lg">★★★★★</span>
            <span className="text-neutral-700 font-semibold">4.9</span>
            <span className="text-neutral-500">Google rating</span>
            <span className="text-neutral-300">·</span>
            <span className="text-neutral-700 font-semibold">127+</span>
            <span className="text-neutral-500">reviews</span>
          </div>
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
              className="group bg-white border border-neutral-200 rounded-[12px] overflow-hidden transition-all duration-300 hover:shadow-lg"
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Project Thumbnail */}
              <div className="relative h-[200px] bg-neutral-100">
                <Image
                  src={testimonial.image}
                  alt={testimonial.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                />
              </div>
              
              {/* Testimonial Content */}
              <div className="p-8 lg:p-10">
                <p className="text-neutral-700 mb-6 leading-relaxed italic">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
