import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FinalCTA from "@/components/homepage/FinalCTA";

const areas = [
  {
    city: "Kansas City",
    state: "MO",
    description: "Serving all neighborhoods in Kansas City, Missouri",
  },
  {
    city: "Overland Park",
    state: "KS",
    description: "Premium remodeling services throughout Overland Park",
  },
  {
    city: "Leawood",
    state: "KS",
    description: "Architect-led remodels in Leawood",
  },
  {
    city: "Prairie Village",
    state: "KS",
    description: "Kitchen, bathroom, and whole-home renovations",
  },
  {
    city: "Shawnee",
    state: "KS",
    description: "Full-service remodeling in Shawnee",
  },
  {
    city: "Lenexa",
    state: "KS",
    description: "Design-forward remodels in Lenexa",
  },
  {
    city: "Olathe",
    state: "KS",
    description: "Premium residential remodeling services",
  },
  {
    city: "Mission Hills",
    state: "KS",
    description: "Luxury home renovations in Mission Hills",
  },
  {
    city: "Fairway",
    state: "KS",
    description: "Architect-led design and construction",
  },
  {
    city: "Roeland Park",
    state: "KS",
    description: "Complete remodeling services",
  },
];

export default function AreasServedPage() {
  return (
    <div className="pt-20">
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900 mb-4">
              Areas We Serve
            </h1>
            <p className="text-lg lg:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Design-build remodeling services across Kansas City and surrounding
              communities.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-serif font-semibold text-neutral-900 mb-6 text-center">
              Primary Service Areas
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
              {[
                "Jackson County, MO",
                "Clay County, MO",
                "Platte County, MO",
                "Cass County, MO",
                "Johnson County, KS",
                "Wyandotte County, KS",
              ].map((county, index) => (
                <div
                  key={index}
                  className="text-center lg:text-left p-4 bg-neutral-50 rounded-lg"
                >
                  <p className="text-neutral-700 font-medium text-sm">
                    {county}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area, index) => (
              <div
                key={index}
                className="bg-white border border-neutral-200 p-6 rounded-lg"
              >
                <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-2">
                  {area.city}, {area.state}
                </h3>
                <p className="text-neutral-600">{area.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-neutral-600 mb-4">
              Serving Kansas City, Overland Park, Prairie Village, Leawood,
              Lee's Summit, Shawnee, Olathe, Lenexa, Liberty, and nearby
              communities.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
            >
              Contact us to confirm availability
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
      <FinalCTA />
    </div>
  );
}
