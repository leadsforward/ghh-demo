import { Shield, Check } from "lucide-react";

const warrantyCoverage = [
  "All workmanship and installation",
  "Materials and fixtures",
  "Structural elements",
  "Electrical and plumbing systems",
  "HVAC integration",
  "Waterproofing systems",
  "Finish materials",
];

export default function Warranties() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg border border-neutral-200 p-8 lg:p-10">
          <div className="flex items-center gap-4 mb-6">
            <Shield className="w-12 h-12 text-primary-600" />
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-neutral-900">
              Comprehensive 5-Year Warranty
            </h2>
          </div>
          <p className="text-xl text-neutral-600 mb-8 max-w-3xl">
            We stand behind our work with a comprehensive 5-year warranty that
            covers all aspects of your remodel. This isn't just a promise—it's
            a commitment to quality and your peace of mind.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {warrantyCoverage.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-700">{item}</span>
              </div>
            ))}
          </div>

          <div className="bg-neutral-50 rounded-lg p-6 border border-neutral-200">
            <p className="text-neutral-700 leading-relaxed">
              <strong>Warranty Process:</strong> If any covered issue arises
              during the warranty period, simply contact us. We'll schedule a
              prompt inspection and make necessary repairs at no cost to you.
              No questions, no hassles—just quality service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
