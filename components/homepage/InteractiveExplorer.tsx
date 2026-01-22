"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Future-ready interactive explorer - scaffolded for future enhancement
// Currently displays as static visual with data attributes for future JS interaction

interface InteractiveZone {
  id: string;
  name: string;
  area: string; // CSS area for positioning
  description: string;
}

const kitchenZones: InteractiveZone[] = [
  {
    id: "cabinets",
    name: "Cabinets",
    area: "cabinets",
    description: "Custom cabinetry and storage solutions",
  },
  {
    id: "countertops",
    name: "Countertops",
    area: "countertops",
    description: "Premium countertop materials and finishes",
  },
  {
    id: "backsplash",
    name: "Backsplash",
    area: "backsplash",
    description: "Design-forward tile and material options",
  },
  {
    id: "flooring",
    name: "Flooring",
    area: "flooring",
    description: "Durable, beautiful flooring selections",
  },
  {
    id: "fixtures",
    name: "Fixtures",
    area: "fixtures",
    description: "Premium fixtures and hardware",
  },
];

export default function InteractiveExplorer() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredZone, setHoveredZone] = useState<string | null>(null);
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
    <section className="bg-neutral-50 py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-neutral-900 mb-4">
            Explore Kitchen Design Elements
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Hover over different areas to learn about our design approach and material selections.
          </p>
        </div>

        <div
          ref={ref}
          className={`transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Interactive Kitchen Visual - Scaffolded for Future Enhancement */}
          <div className="relative bg-white rounded-[16px] overflow-hidden shadow-lg border border-neutral-200">
            <div className="relative h-[500px] lg:h-[600px] bg-neutral-100">
              <Image
                src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=1200&q=90"
                alt="Interactive kitchen design explorer - Gold Heart Homes"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 1280px"
                loading="lazy"
              />

              {/* Interactive Zones - Data attributes for future JS */}
              <div className="absolute inset-0 grid grid-cols-5 grid-rows-4 gap-2 p-4">
                {/* Cabinets Zone */}
                <div
                  data-zone="cabinets"
                  className="col-span-2 row-span-2 bg-primary-600/0 hover:bg-primary-600/10 transition-colors rounded cursor-pointer border-2 border-transparent hover:border-primary-600/50"
                  onMouseEnter={() => setHoveredZone("cabinets")}
                  onMouseLeave={() => setHoveredZone(null)}
                ></div>

                {/* Countertops Zone */}
                <div
                  data-zone="countertops"
                  className="col-span-3 row-span-1 bg-primary-600/0 hover:bg-primary-600/10 transition-colors rounded cursor-pointer border-2 border-transparent hover:border-primary-600/50"
                  onMouseEnter={() => setHoveredZone("countertops")}
                  onMouseLeave={() => setHoveredZone(null)}
                ></div>

                {/* Backsplash Zone */}
                <div
                  data-zone="backsplash"
                  className="col-span-3 row-span-1 bg-primary-600/0 hover:bg-primary-600/10 transition-colors rounded cursor-pointer border-2 border-transparent hover:border-primary-600/50"
                  onMouseEnter={() => setHoveredZone("backsplash")}
                  onMouseLeave={() => setHoveredZone(null)}
                ></div>

                {/* Flooring Zone */}
                <div
                  data-zone="flooring"
                  className="col-span-5 row-span-1 bg-primary-600/0 hover:bg-primary-600/10 transition-colors rounded cursor-pointer border-2 border-transparent hover:border-primary-600/50"
                  onMouseEnter={() => setHoveredZone("flooring")}
                  onMouseLeave={() => setHoveredZone(null)}
                ></div>

                {/* Fixtures Zone */}
                <div
                  data-zone="fixtures"
                  className="col-span-2 row-span-1 bg-primary-600/0 hover:bg-primary-600/10 transition-colors rounded cursor-pointer border-2 border-transparent hover:border-primary-600/50"
                  onMouseEnter={() => setHoveredZone("fixtures")}
                  onMouseLeave={() => setHoveredZone(null)}
                ></div>
              </div>

              {/* Zone Info Overlay - Appears on hover */}
              {hoveredZone && (
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-neutral-200 animate-fade-in">
                  {kitchenZones
                    .filter((z) => z.id === hoveredZone)
                    .map((zone) => (
                      <div key={zone.id}>
                        <h3 className="font-serif font-semibold text-neutral-900 mb-1">
                          {zone.name}
                        </h3>
                        <p className="text-sm text-neutral-600">
                          {zone.description}
                        </p>
                      </div>
                    ))}
                </div>
              )}
            </div>

            {/* Zone Labels - Subtle indicators */}
            <div className="p-6 bg-white border-t border-neutral-200">
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                {kitchenZones.map((zone) => (
                  <button
                    key={zone.id}
                    data-zone-id={zone.id}
                    className={`px-3 py-1.5 rounded-full border transition-colors ${
                      hoveredZone === zone.id
                        ? "bg-primary-50 border-primary-600 text-primary-700"
                        : "bg-neutral-50 border-neutral-200 text-neutral-600 hover:border-primary-300"
                    }`}
                    onMouseEnter={() => setHoveredZone(zone.id)}
                    onMouseLeave={() => setHoveredZone(null)}
                  >
                    {zone.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Future Enhancement Note (Hidden in production, visible for development) */}
          <p className="text-xs text-neutral-400 text-center mt-4">
            Interactive explorer scaffolded for future enhancement. Data attributes and structure ready for advanced interactions.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
      `}</style>
    </section>
  );
}
