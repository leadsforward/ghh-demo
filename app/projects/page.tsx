"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Grid3x3, MapPin, Filter } from "lucide-react";
import FinalCTA from "@/components/homepage/FinalCTA";

// Unified projects data - shared by gallery and map
const projects = [
  {
    id: "kitchen-remodel-kansas-city",
    title: "Modern Kitchen Transformation",
    location: "Kansas City, MO",
    neighborhood: "Brookside",
    service: "Kitchen Remodeling",
    date: "2023",
    image: "https://goldhearthomes.com/wp-content/uploads/2022/06/remodeled-kitchen-with-new-appliances-kansas-city.jpg",
    images: [
      "https://goldhearthomes.com/wp-content/uploads/2022/06/updated-kitchen-remodeling-kansas-city.jpg",
      "https://goldhearthomes.com/wp-content/uploads/2022/06/kitchen-kansas-city-updated-remodel.jpg",
      "https://goldhearthomes.com/wp-content/uploads/2022/06/breakfast-nook-remodel-kansas-city.jpg",
    ],
    summary: "Complete kitchen renovation with custom cabinetry, premium appliances, and thoughtful layout that transforms daily living.",
    hasBeforeAfter: true,
    lat: 39.0392,
    lng: -94.5786,
  },
  {
    id: "bathroom-remodel-kansas-city",
    title: "Spa-Like Master Bathroom",
    location: "Kansas City, MO",
    neighborhood: "Brookside",
    service: "Bathroom Remodeling",
    date: "2023",
    image: "https://goldhearthomes.com/wp-content/uploads/2022/06/new-bath-remodeling-job-kansas-city.jpg",
    images: [
      "https://goldhearthomes.com/wp-content/uploads/2022/06/bathroom-rustic-wood-kansas-city.jpg",
    ],
    summary: "Master bathroom transformation with premium fixtures, custom tile work, and professional waterproofing.",
    hasBeforeAfter: false,
    lat: 39.0392,
    lng: -94.5786,
  },
  {
    id: "living-room-remodel-kansas-city",
    title: "Modern Living Room Remodel",
    location: "Kansas City, MO",
    neighborhood: "Brookside",
    service: "Interior Remodeling",
    date: "2022",
    image: "https://goldhearthomes.com/wp-content/uploads/2022/06/modern-living-room-remodel-kansas-city.jpg",
    images: [
      "https://goldhearthomes.com/wp-content/uploads/2022/06/living-room-remodeling-work-kansas-city.jpg",
      "https://goldhearthomes.com/wp-content/uploads/2022/06/living-room-kansas-city.jpg",
      "https://goldhearthomes.com/wp-content/uploads/2022/06/kansas-city-family-room-remodel.jpg",
    ],
    summary: "Open-concept living space with cohesive design, updated finishes, and improved flow throughout.",
    hasBeforeAfter: true,
    lat: 39.0392,
    lng: -94.5786,
  },
  {
    id: "basement-remodel-kansas-city",
    title: "Finished Basement Transformation",
    location: "Kansas City, MO",
    neighborhood: "Brookside",
    service: "Basement Remodeling",
    date: "2022",
    image: "https://goldhearthomes.com/wp-content/uploads/2022/06/basement-remodeling-kansas-city.jpg",
    images: [
      "https://goldhearthomes.com/wp-content/uploads/2022/06/den-remodel-in-kansas-city.jpg",
    ],
    summary: "Unused basement space transformed into functional living area with proper finishes and lighting.",
    hasBeforeAfter: false,
    lat: 39.0392,
    lng: -94.5786,
  },
  {
    id: "brookside-blvd-project",
    title: "Brookside Blvd Renovation",
    location: "Kansas City, MO",
    neighborhood: "Brookside",
    service: "Interior Remodeling",
    date: "2023",
    image: "https://goldhearthomes.com/wp-content/uploads/2023/02/5401-Brookside-Blvd-26.jpg",
    images: [
      "https://goldhearthomes.com/wp-content/uploads/2023/02/5401-Brookside-Blvd-25.jpg",
      "https://goldhearthomes.com/wp-content/uploads/2023/02/5401-Brookside-Blvd-7.jpg",
      "https://goldhearthomes.com/wp-content/uploads/2023/02/5401-Brookside-Blvd-9-e1716403384140.jpg",
    ],
    summary: "Comprehensive interior renovation with updated finishes, improved layout, and cohesive design throughout.",
    hasBeforeAfter: true,
    lat: 39.0392,
    lng: -94.5786,
  },
];

const serviceFilters = [
  "All Projects",
  "Kitchen Remodeling",
  "Bathroom Remodeling",
  "Basement Remodeling",
  "Interior Remodeling",
  "Exterior Remodeling",
];

export default function ProjectsPage() {
  const [viewMode, setViewMode] = useState<"gallery" | "map">("gallery");
  const [selectedFilter, setSelectedFilter] = useState("All Projects");
  const [showBeforeAfter, setShowBeforeAfter] = useState(false);

  const filteredProjects =
    selectedFilter === "All Projects"
      ? projects
      : projects.filter((p) => p.service === selectedFilter);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-white">
        <div className="relative w-full h-[400px] lg:h-[500px] overflow-hidden">
          <Image
            src="https://goldhearthomes.com/wp-content/uploads/2022/06/remodeled-kitchen-with-new-appliances-kansas-city.jpg"
            alt="Gold Heart Homes project gallery"
            fill
            className="object-cover"
            sizes="100vw"
            loading="eager"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
          <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-12">
            <div className="text-white">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-4">
                Our Projects
              </h1>
              <p className="text-lg text-white/90 max-w-2xl">
                Real transformations from Kansas City homeowners. Browse our work by project type or explore on the map.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Controls Bar */}
      <section className="bg-white border-b border-neutral-200 sticky top-20 z-40">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            {/* View Toggle */}
            <div className="flex items-center gap-2 bg-neutral-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode("gallery")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  viewMode === "gallery"
                    ? "bg-white text-neutral-900 shadow-sm"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                <Grid3x3 className="w-4 h-4 inline-block mr-2" />
                Gallery
              </button>
              <button
                onClick={() => setViewMode("map")}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  viewMode === "map"
                    ? "bg-white text-neutral-900 shadow-sm"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                <MapPin className="w-4 h-4 inline-block mr-2" />
                Map
              </button>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-2">
              <Filter className="w-4 h-4 text-neutral-500" />
              {serviceFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    selectedFilter === filter
                      ? "bg-primary-600 text-white"
                      : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Before/After Toggle */}
            {viewMode === "gallery" && (
              <label className="flex items-center gap-2 text-sm text-neutral-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={showBeforeAfter}
                  onChange={(e) => setShowBeforeAfter(e.target.checked)}
                  className="w-4 h-4 text-primary-600 rounded"
                />
                Show Before/After
              </label>
            )}
          </div>
        </div>
      </section>

      {/* Gallery View */}
      {viewMode === "gallery" && (
        <section className="bg-white py-16 lg:py-24">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {filteredProjects.map((project) => (
                <Link
                  key={project.id}
                  href={`/projects/${project.id}`}
                  className="group block bg-white border border-neutral-200 rounded-[16px] overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative h-[300px] bg-neutral-100 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                    {project.hasBeforeAfter && showBeforeAfter && (
                      <div className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Before/After
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-primary-600 font-semibold mb-2">
                      {project.service}
                    </div>
                    <h2 className="text-xl font-serif font-semibold text-neutral-900 mb-2">
                      {project.title}
                    </h2>
                    <div className="text-sm text-neutral-600 mb-3">
                      {project.location} · {project.date}
                    </div>
                    <p className="text-neutral-700 mb-4 leading-relaxed text-sm">
                      {project.summary}
                    </p>
                    <div className="flex items-center text-primary-600 font-semibold text-sm group-hover:gap-2 transition-all">
                      View Project
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Map View - Scaffolded for future implementation */}
      {viewMode === "map" && (
        <section className="bg-neutral-50 py-16 lg:py-24">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-[16px] border border-neutral-200 p-12 text-center">
              <MapPin className="w-16 h-16 text-primary-600 mx-auto mb-4" />
              <h2 className="text-2xl font-serif font-semibold text-neutral-900 mb-4">
                Interactive Project Map
              </h2>
              <p className="text-neutral-600 max-w-2xl mx-auto mb-6">
                Explore our projects by location on an interactive map of the Kansas City metro area. This feature is coming soon.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    className="bg-neutral-50 rounded-lg p-4 border border-neutral-200"
                    data-project-id={project.id}
                    data-lat={project.lat}
                    data-lng={project.lng}
                  >
                    <h3 className="font-semibold text-neutral-900 mb-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-neutral-600">{project.location}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-neutral-400 mt-6">
                Map view scaffolded for future interactive implementation. Data attributes ready for map integration.
              </p>
            </div>
          </div>
        </section>
      )}

      <FinalCTA />
    </div>
  );
}
