import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FinalCTA from "@/components/homepage/FinalCTA";

const values = [
  {
    title: "Design-Build Approach",
    description:
      "One team handles your project from concept to completion. No handoffs, no confusion, no surprises.",
  },
  {
    title: "Thoughtful Planning",
    description:
      "Detailed scope and upfront planning ensure your investment is understood before construction begins.",
  },
  {
    title: "Clear Communication",
    description:
      "Regular updates, defined timelines, and active project management keep your project moving forward.",
  },
  {
    title: "Respect for Your Home",
    description:
      "Clean job sites, daily communication, and a livable remodeling approach that minimizes disruption.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900 mb-4">
              About Gold Heart Homes
            </h1>
            <p className="text-lg lg:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              A Kansas City design-build firm specializing in kitchens, bathrooms,
              and whole-home remodels with one team guiding every detail.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
            <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden bg-neutral-100">
              <Image
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                alt="Gold Heart Homes team working on a project"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-6">
                A team you can trust with your home.
              </h2>
              <div className="space-y-4">
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
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-neutral-900 mb-12 text-center">
              How we work.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white border border-neutral-200 p-8 lg:p-10 rounded-lg"
                >
                  <h3 className="text-xl lg:text-2xl font-serif font-semibold text-neutral-900 mb-4">
                    {value.title}
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <FinalCTA />
    </div>
  );
}
