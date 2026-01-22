import { MapPin } from "lucide-react";

const areas = [
  "Kansas City, MO",
  "Overland Park, KS",
  "Leawood, KS",
  "Prairie Village, KS",
  "Shawnee, KS",
  "Lenexa, KS",
  "Olathe, KS",
  "Mission Hills, KS",
  "Fairway, KS",
  "Roeland Park, KS",
];

export default function CoverageMap() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-neutral-900 mb-4">
            Areas We Serve
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Proudly serving Kansas City and surrounding suburbs.
          </p>
        </div>

        <div className="bg-neutral-50 rounded-lg border border-neutral-200 p-8 lg:p-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {areas.map((area, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-neutral-700"
              >
                <MapPin className="w-4 h-4 text-primary-600 flex-shrink-0" />
                <span>{area}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-neutral-600 mt-8">
            Don&apos;t see your area?{" "}
            <a
              href="/contact"
              className="text-primary-600 hover:text-primary-700 font-semibold"
            >
              Contact us
            </a>{" "}
            to confirm service availability.
          </p>
        </div>
      </div>
    </section>
  );
}
