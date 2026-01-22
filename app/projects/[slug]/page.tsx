import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FinalCTA from "@/components/homepage/FinalCTA";

const projects: Record<
  string,
  {
    title: string;
    location: string;
    neighborhood: string;
    service: string;
    date: string;
    heroImage: string;
    images: string[];
    summary: string;
    description: string;
  }
> = {
  "kitchen-remodel-kansas-city": {
    title: "Modern Kitchen Transformation",
    location: "Kansas City, MO",
    neighborhood: "Brookside",
    service: "Kitchen Remodeling",
    date: "2023",
    heroImage: "https://goldhearthomes.com/wp-content/uploads/2022/06/remodeled-kitchen-with-new-appliances-kansas-city.jpg",
    images: [
      "https://goldhearthomes.com/wp-content/uploads/2022/06/updated-kitchen-remodeling-kansas-city.jpg",
      "https://goldhearthomes.com/wp-content/uploads/2022/06/kitchen-kansas-city-updated-remodel.jpg",
      "https://goldhearthomes.com/wp-content/uploads/2022/06/breakfast-nook-remodel-kansas-city.jpg",
    ],
    summary: "Complete kitchen renovation with custom cabinetry, premium appliances, and thoughtful layout.",
    description: "This kitchen transformation modernized a dated space into a functional, beautiful heart of the home. Custom cabinetry, premium appliances, and thoughtful layout create a space that works for both daily living and entertaining.",
  },
  "bathroom-remodel-kansas-city": {
    title: "Spa-Like Master Bathroom",
    location: "Kansas City, MO",
    neighborhood: "Brookside",
    service: "Bathroom Remodeling",
    date: "2023",
    heroImage: "https://goldhearthomes.com/wp-content/uploads/2022/06/new-bath-remodeling-job-kansas-city.jpg",
    images: [
      "https://goldhearthomes.com/wp-content/uploads/2022/06/bathroom-rustic-wood-kansas-city.jpg",
    ],
    summary: "Master bathroom transformation with premium fixtures and custom tile work.",
    description: "A complete master bathroom renovation that transformed a dated space into a spa-like retreat. Premium fixtures, custom tile work, and thoughtful lighting create a luxurious yet functional space.",
  },
  "living-room-remodel-kansas-city": {
    title: "Modern Living Room Remodel",
    location: "Kansas City, MO",
    neighborhood: "Brookside",
    service: "Interior Remodeling",
    date: "2022",
    heroImage: "https://goldhearthomes.com/wp-content/uploads/2022/06/modern-living-room-remodel-kansas-city.jpg",
    images: [
      "https://goldhearthomes.com/wp-content/uploads/2022/06/living-room-remodeling-work-kansas-city.jpg",
      "https://goldhearthomes.com/wp-content/uploads/2022/06/living-room-kansas-city.jpg",
      "https://goldhearthomes.com/wp-content/uploads/2022/06/kansas-city-family-room-remodel.jpg",
    ],
    summary: "Open-concept living space with cohesive design and updated finishes.",
    description: "This living room remodel created an open, cohesive space that flows seamlessly throughout the home. Updated finishes, improved lighting, and thoughtful design make this the center of daily life.",
  },
  "basement-remodel-kansas-city": {
    title: "Finished Basement Transformation",
    location: "Kansas City, MO",
    neighborhood: "Brookside",
    service: "Basement Remodeling",
    date: "2022",
    heroImage: "https://goldhearthomes.com/wp-content/uploads/2022/06/basement-remodeling-kansas-city.jpg",
    images: [
      "https://goldhearthomes.com/wp-content/uploads/2022/06/den-remodel-in-kansas-city.jpg",
    ],
    summary: "Unused basement space transformed into functional living area.",
    description: "This basement remodel transformed unused space into a functional, comfortable living area. Proper finishes, lighting, and layout create a space the family uses daily.",
  },
  "brookside-blvd-project": {
    title: "Brookside Blvd Renovation",
    location: "Kansas City, MO",
    neighborhood: "Brookside",
    service: "Interior Remodeling",
    date: "2023",
    heroImage: "https://goldhearthomes.com/wp-content/uploads/2023/02/5401-Brookside-Blvd-26.jpg",
    images: [
      "https://goldhearthomes.com/wp-content/uploads/2023/02/5401-Brookside-Blvd-25.jpg",
      "https://goldhearthomes.com/wp-content/uploads/2023/02/5401-Brookside-Blvd-7.jpg",
      "https://goldhearthomes.com/wp-content/uploads/2023/02/5401-Brookside-Blvd-9-e1716403384140.jpg",
    ],
    summary: "Comprehensive interior renovation with updated finishes and cohesive design.",
    description: "A full interior renovation that updated finishes, improved layout, and created a cohesive design throughout. This project demonstrates our ability to handle comprehensive remodels while maintaining livability.",
  },
};

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug];

  if (!project) {
    notFound();
  }

  return (
    <div>
      {/* Full-width Hero Image */}
      <section className="relative bg-white">
        <div className="relative w-full h-[500px] lg:h-[700px] overflow-hidden">
          <Image
            src={project.heroImage}
            alt={project.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
          
          {/* Overlay Content */}
          <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-end pb-12">
            <div className="text-white">
              <div className="text-sm font-semibold text-white/90 uppercase tracking-wide mb-3">
                {project.service}
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold mb-4">
                {project.title}
              </h1>
              <div className="text-lg text-white/90">
                {project.location} · {project.date}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back Link */}
      <section className="bg-white border-b border-neutral-200">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/projects"
            className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
          >
            <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
            Back to Projects
          </Link>
        </div>
      </section>

      {/* Project Description */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-lg lg:text-xl text-neutral-700 leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="bg-neutral-50 py-12 lg:py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl lg:text-3xl font-serif font-semibold text-neutral-900 mb-8">
            Project Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {project.images.map((image, index) => (
              <div
                key={index}
                className="relative h-[300px] lg:h-[400px] rounded-[12px] overflow-hidden bg-neutral-100"
              >
                <Image
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-12 lg:py-16">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary-50 rounded-[16px] p-8 lg:p-12 text-center border border-primary-100">
            <h2 className="text-2xl lg:text-3xl font-serif font-bold text-neutral-900 mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg text-neutral-700 mb-8 max-w-2xl mx-auto">
              Schedule a complimentary design consultation to discuss your remodeling goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-primary-600 text-white px-8 py-4 rounded-md font-semibold text-base hover:bg-primary-700 transition-colors min-h-[44px]"
              >
                Schedule a Design Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center border-2 border-primary-600 text-primary-600 px-8 py-4 rounded-md font-semibold text-base hover:bg-primary-50 transition-colors min-h-[44px]"
              >
                Request a Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
