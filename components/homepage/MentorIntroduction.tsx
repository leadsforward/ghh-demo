"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const metrics = [
  { label: "Years in Business", value: "10+", subtext: "Established in Kansas City" },
  { label: "Combined Experience", value: "75+", subtext: "Years across our team" },
  { label: "Projects Completed", value: "500+", subtext: "Homes transformed" },
];

export default function MentorIntroduction() {
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
        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Image */}
          <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden bg-neutral-100">
            <Image
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
              alt="Gold Heart Homes team working on a project"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-neutral-900 mb-6">
              A team you can trust with your home.
            </h2>
            
            <div className="space-y-4 mb-8">
              <p className="text-lg text-neutral-700 leading-relaxed">
                We&apos;re a design-build firm, which means one team handles your
                project from concept to completion. No handoffs, no confusion,
                no surprises.
              </p>
              <p className="text-lg text-neutral-700 leading-relaxed">
                Our process is built on clear communication, thorough planning,
                and respect for your time and home. We show up prepared, work
                cleanly, and keep you informed every step of the way.
              </p>
            </div>

            {/* Metrics Grid - Reframed as Assurance Signals */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-neutral-200">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl lg:text-3xl font-serif font-bold text-neutral-900 mb-1">
                    {metric.value}
                  </div>
                  <div className="text-sm text-neutral-600 font-medium mb-1">
                    {metric.label}
                  </div>
                  {metric.subtext && (
                    <div className="text-xs text-neutral-500">
                      {metric.subtext}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
