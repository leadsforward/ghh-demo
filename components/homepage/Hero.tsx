"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
    
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    
    // Subtle parallax effect (disabled if reduced motion)
    const handleScroll = () => {
      if (!prefersReducedMotion && heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setScrollY(window.scrollY);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prefersReducedMotion]);

  return (
    <section ref={heroRef} className="relative bg-white">
      {/* Full-width visual background with subtle parallax */}
      <div className="relative w-full h-[600px] lg:h-[750px] overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            transform: prefersReducedMotion ? "none" : `translateY(${scrollY * 0.3}px)`,
            willChange: prefersReducedMotion ? "auto" : "transform",
          }}
        >
          <Image
            src="https://goldhearthomes.com/wp-content/uploads/2022/06/remodeled-kitchen-with-new-appliances-kansas-city.jpg"
            alt="Premium kitchen remodel in Kansas City - Gold Heart Homes"
            fill
            className="object-cover scale-105"
            sizes="100vw"
            loading="eager"
            priority
          />
        </div>
        
        {/* Enhanced gradient overlay with vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_rgba(0,0,0,0.3)_100%)]"></div>
        
        {/* Content overlay with fade-in animation */}
        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div
            className={`max-w-2xl text-white transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
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
              Interior and exterior remodeling, additions, and commercial projects in Kansas City. Design-led approach with full-scope capability. One team, full accountability.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center bg-primary-600 text-white px-8 py-4 rounded-md font-semibold text-base hover:bg-primary-700 transition-all whitespace-nowrap min-h-[44px] shadow-lg hover:shadow-xl"
              >
                Schedule a Design Consultation
                <ArrowRight className="ml-2 w-5 h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-md font-semibold text-base hover:bg-white/20 hover:border-white/50 transition-all whitespace-nowrap min-h-[44px]"
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
    </section>
  );
}
