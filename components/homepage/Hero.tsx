"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: "modern-kitchen-overland-park",
    image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&q=80",
    location: "Overland Park",
    type: "Kitchen Remodel",
    alt: "Modern kitchen remodel in Overland Park",
  },
  {
    id: "spa-bathroom-leawood",
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80",
    location: "Leawood",
    type: "Master Bathroom",
    alt: "Spa-like master bathroom in Leawood",
  },
  {
    id: "whole-home-kansas-city",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    location: "Mission Hills",
    type: "Whole-Home Remodel",
    alt: "Whole-home renovation in Mission Hills",
  },
];

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Copy + CTAs */}
          <div className="text-center lg:text-left">
            {/* Eyebrow - Clarity Layer */}
            <p className="text-sm font-semibold text-primary-600 mb-3 uppercase tracking-wide">
              Kansas City Design-Build Remodeling
            </p>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 mb-6 text-balance leading-tight">
              Homes designed to live beautifully.
            </h1>

            {/* Subhead - Slightly more specific while preserving keywords */}
            <p className="text-lg text-neutral-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              One team guides your kitchen, bathroom, or whole-home remodel from
              concept to completion. Kansas City&apos;s design-build approach
              with clear communication and thoughtful planning.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center sm:items-stretch">
              {/* Primary CTA */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-primary-600 text-white px-8 py-4 rounded-md font-semibold text-base hover:bg-primary-700 transition-colors whitespace-nowrap min-h-[44px] shadow-sm hover:shadow-md"
              >
                Schedule a Design Consultation
                <ArrowRight className="ml-2 w-5 h-5 flex-shrink-0" />
              </Link>

              {/* Secondary CTA */}
              <Link
                href="/projects"
                className="inline-flex items-center justify-center border-2 border-neutral-300 text-neutral-700 px-8 py-4 rounded-md font-semibold text-base hover:border-primary-600 hover:text-primary-600 transition-colors whitespace-nowrap min-h-[44px]"
              >
                View Recent Projects
              </Link>
            </div>

            {/* Trust Line - Authority Reinforcement */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-1 text-sm text-neutral-600 mt-8">
              <div className="flex items-center gap-1.5">
                <span className="text-yellow-500">★★★★★</span>
                <span className="font-medium">4.9</span>
                <span className="text-neutral-500">Google</span>
              </div>
              <span className="text-neutral-300">·</span>
              <div className="flex items-center gap-1.5">
                <span className="font-medium">500+</span>
                <span className="text-neutral-500">projects</span>
              </div>
              <span className="text-neutral-300">·</span>
              <span className="text-neutral-500">Kansas City, MO</span>
            </div>
          </div>

          {/* Right Column: 3-Project Visual Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 lg:grid-rows-3 gap-4">
            {projects.map((project, index) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className={`group relative h-[240px] sm:h-[200px] lg:h-[180px] rounded-[12px] overflow-hidden bg-neutral-100 cursor-pointer transition-opacity duration-700 ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 25vw"
                  loading={index === 0 ? "eager" : "lazy"}
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300"></div>
                
                {/* Content overlay - visible on hover */}
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <div className="transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-white text-sm font-medium mb-1">
                      {project.location}
                    </p>
                    <p className="text-white/90 text-xs mb-3">
                      {project.type}
                    </p>
                    <div className="flex items-center text-white text-xs font-semibold">
                      View Project
                      <ArrowRight className="ml-1 w-3 h-3" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
