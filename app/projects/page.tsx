"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Grid3x3, MapPin } from "lucide-react";
import FinalCTA from "@/components/homepage/FinalCTA";

// Type definition for projects
type Project = {
  id: string;
  title: string;
  location: string;
  neighborhood: string;
  service: string;
  date: string;
  image: string;
  images: string[];
  summary: string;
  hasBeforeAfter: boolean;
  lat: number;
  lng: number;
};

// Unified projects data - shared by gallery and map
const projects: Project[] = [
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

// Custom Before/After Toggle Component
function BeforeAfterToggle({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className={`relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
        checked
          ? "bg-primary-600 text-white"
          : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
      }`}
      aria-label="Show before and after"
    >
      <span className="relative inline-flex items-center">
        <span
          className={`inline-block w-9 h-5 rounded-full transition-colors duration-200 ${
            checked ? "bg-white/30" : "bg-neutral-300"
          }`}
        >
          <span
            className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-200 ${
              checked ? "translate-x-4" : "translate-x-0"
            }`}
          />
        </span>
      </span>
      <span>Show before & after</span>
    </button>
  );
}

// Styled Static Map Preview Component
function MapPreview({ projects }: { projects: Project[] }) {
  return (
    <div className="relative w-full h-[600px] bg-gradient-to-br from-neutral-50 via-neutral-100 to-neutral-50 rounded-[16px] overflow-hidden border border-neutral-200 shadow-inner">
      {/* Subtle map texture */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="w-full h-full"
          viewBox="0 0 800 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="mapGrid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-neutral-400"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mapGrid)" />
        </svg>
      </div>

      {/* Kansas City Metro Area Visualization */}
      <div className="absolute inset-0 flex items-center justify-center p-12">
        <div className="relative w-full h-full max-w-2xl">
          {/* Simplified KC metro boundary */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 400 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M80 60 L180 45 L280 60 L320 140 L280 220 L180 235 L80 220 L40 140 Z"
              fill="rgba(0, 70, 135, 0.08)"
              stroke="rgba(0, 70, 135, 0.2)"
              strokeWidth="2"
            />
            {/* Major roads */}
            <path
              d="M40 140 L360 140"
              stroke="rgba(0, 70, 135, 0.15)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
            <path
              d="M200 20 L200 280"
              stroke="rgba(0, 70, 135, 0.15)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
          </svg>

          {/* Project pin markers with hover states */}
          {projects.map((project, index) => {
            const angle = (index * 360) / projects.length;
            const radius = 90;
            const centerX = 200;
            const centerY = 150;
            const x = centerX + radius * Math.cos((angle * Math.PI) / 180);
            const y = centerY + radius * Math.sin((angle * Math.PI) / 180);

            return (
              <div
                key={project.id}
                className="absolute group"
                style={{
                  left: `${(x / 400) * 100}%`,
                  top: `${(y / 300) * 100}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                {/* Pin marker */}
                <div className="relative">
                  <div className="w-4 h-4 bg-primary-600 rounded-full border-2 border-white shadow-lg cursor-pointer hover:scale-125 transition-all duration-200 hover:shadow-xl" />
                  <div className="absolute -top-1 -left-1 w-6 h-6 bg-primary-600/20 rounded-full animate-ping" />
                  
                  {/* Tooltip on hover */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                    <div className="bg-neutral-900 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg">
                      {project.title}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-px">
                        <div className="border-4 border-transparent border-t-neutral-900" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Subtle location label */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-neutral-700 border border-neutral-200/50 shadow-sm">
          Kansas City metro area
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const [viewMode, setViewMode] = useState<"gallery" | "map">("gallery");
  const [selectedFilter, setSelectedFilter] = useState("All Projects");
  const [showBeforeAfter, setShowBeforeAfter] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const filterBarRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const filteredProjects =
    selectedFilter === "All Projects"
      ? projects
      : projects.filter((p) => p.service === selectedFilter);

  // Handle sticky filter bar
  useEffect(() => {
    const handleScroll = () => {
      if (filterBarRef.current) {
        const rect = filterBarRef.current.getBoundingClientRect();
        setIsSticky(rect.top <= 80);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

      {/* Refined Filter Bar */}
      <section
        ref={filterBarRef}
        className={`bg-white border-b border-neutral-200 sticky top-20 z-40 transition-all duration-200 ${
          isSticky ? "shadow-sm" : ""
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex flex-wrap items-center gap-4 transition-all duration-200 ${
              isSticky ? "py-3" : "py-4"
            }`}
          >
            {/* LEFT: View Toggle */}
            <div className="flex items-center gap-2 bg-neutral-100 rounded-full p-1">
              <button
                onClick={() => setViewMode("gallery")}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
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
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  viewMode === "map"
                    ? "bg-white text-neutral-900 shadow-sm"
                    : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                <MapPin className="w-4 h-4 inline-block mr-2" />
                Map
              </button>
            </div>

            {/* CENTER: Project Type Filters */}
            <div className="flex flex-wrap items-center gap-2 flex-1 justify-center">
              {serviceFilters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedFilter === filter
                      ? "bg-primary-600 text-white"
                      : "bg-neutral-100 text-neutral-700 hover:bg-neutral-200"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* RIGHT: Before/After Toggle */}
            {viewMode === "gallery" && (
              <div className="flex items-center">
                <BeforeAfterToggle
                  checked={showBeforeAfter}
                  onChange={setShowBeforeAfter}
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Content with smooth transitions */}
      <div ref={contentRef} className="relative min-h-[600px]">
        {/* Gallery View */}
        <div
          className={`transition-all duration-200 ease-in-out ${
            viewMode === "gallery"
              ? "opacity-100 translate-y-0 relative"
              : "opacity-0 translate-y-2 absolute inset-0 pointer-events-none"
          }`}
        >
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
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
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
        </div>

        {/* Map View */}
        <div
          className={`transition-all duration-200 ease-in-out ${
            viewMode === "map"
              ? "opacity-100 translate-y-0 relative"
              : "opacity-0 -translate-y-2 absolute inset-0 pointer-events-none"
          }`}
        >
          <section className="bg-white py-16 lg:py-24">
            <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
              <MapPreview projects={filteredProjects} />
              
              {/* Project list below map */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <Link
                    key={project.id}
                    href={`/projects/${project.id}`}
                    className="group block bg-white border border-neutral-200 rounded-lg p-4 hover:shadow-lg hover:border-primary-600/20 transition-all duration-200"
                  >
                    <h3 className="font-serif font-semibold text-neutral-900 mb-1 group-hover:text-primary-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-neutral-600 mb-2">{project.service}</p>
                    <p className="text-xs text-neutral-500">{project.location}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>

      <FinalCTA />
    </div>
  );
}
