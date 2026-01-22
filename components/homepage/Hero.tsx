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
      {/* Full-width visual background */}
      <div className="relative w-full h-[600px] lg:h-[700px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=1920&q=90"
          alt="Premium kitchen remodel in Kansas City"
          fill
          className="object-cover"
          sizes="100vw"
          loading="eager"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
        
        {/* Content overlay */}
        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-2xl text-white">
            {/* Eyebrow */}
            <p className="text-sm font-semibold text-white/90 mb-4 uppercase tracking-wide">
              Kansas City Design-Led Remodeling
            </p>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-6 text-balance leading-tight">
              Design-build remodeling that delivers on time, on budget, and on vision.
            </h1>

            {/* Subhead */}
            <p className="text-lg text-white/90 mb-10 leading-relaxed">
              Design-led remodeling for kitchens, bathrooms, whole-home renovations, additions, and exterior projects in Kansas City. One team, full accountability.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-primary-600 text-white px-8 py-4 rounded-md font-semibold text-base hover:bg-primary-700 transition-colors whitespace-nowrap min-h-[44px] shadow-lg hover:shadow-xl"
              >
                Schedule a Design Consultation
                <ArrowRight className="ml-2 w-5 h-5 flex-shrink-0" />
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-md font-semibold text-base hover:bg-white/20 transition-colors whitespace-nowrap min-h-[44px]"
              >
                View Our Work
              </Link>
            </div>

            {/* Trust Line */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/90">
              <div className="flex items-center gap-1.5">
                <span className="text-yellow-400">★★★★★</span>
                <span className="font-medium">4.9</span>
                <span className="text-white/70">Google</span>
              </div>
              <span className="text-white/40">·</span>
              <div className="flex items-center gap-1.5">
                <span className="font-medium">500+</span>
                <span className="text-white/70">projects</span>
              </div>
              <span className="text-white/40">·</span>
              <span className="text-white/70">Kansas City, MO</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Secondary content below hero image */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className={`group relative h-[200px] rounded-[12px] overflow-hidden bg-neutral-100 cursor-pointer transition-opacity duration-700 ${
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
                sizes="(max-width: 1024px) 50vw, 33vw"
                loading="lazy"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300"></div>
              
              {/* Content overlay - visible on hover */}
              <div className="absolute inset-0 flex flex-col justify-end p-4">
                <div className="transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white text-sm font-medium mb-1">
                    {project.location}
                  </p>
                  <p className="text-white/90 text-xs">
                    {project.type}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
