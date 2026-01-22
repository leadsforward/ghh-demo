"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const featuredProjects = [
  {
    title: "Kitchen Remodeling",
    location: "Overland Park, KS",
    image: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=1200&q=90",
    alt: "Modern kitchen remodel in Overland Park, Kansas",
    href: "/services/kitchen-remodeling",
  },
  {
    title: "Whole-Home Remodel",
    location: "Leawood, KS",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=90",
    alt: "Whole-home renovation in Leawood, Kansas",
    href: "/services/whole-home-remodeling",
  },
];

export default function FeaturedWork() {
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
    <section className="bg-neutral-50 py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-neutral-900 mb-4">
            Featured Work
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Real projects from Kansas City homeowners.
          </p>
        </div>

        <div
          ref={ref}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {featuredProjects.map((project, index) => (
            <Link
              key={index}
              href={project.href}
              className="group block rounded-[16px] overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-[400px] lg:h-[500px] bg-neutral-100">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
              <div className="p-6 lg:p-8">
                <h3 className="text-2xl font-serif font-semibold text-neutral-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-neutral-600 mb-4">{project.location}</p>
                <div className="inline-flex items-center text-primary-600 font-semibold group-hover:text-primary-700 transition-colors">
                  View Project
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
          >
            View Our Work
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
