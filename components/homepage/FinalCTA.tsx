import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="bg-neutral-50 py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-neutral-900 mb-4">
            Ready to plan your remodel?
          </h2>
          <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
            A thoughtful conversation is the first step. We&apos;ll listen, answer
            questions, and help you understand what&apos;s possible for your home.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-primary-600 text-white px-8 py-4 rounded-md font-semibold text-base hover:bg-primary-700 transition-colors min-h-[44px] whitespace-nowrap"
          >
            Schedule a Design Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <p className="mt-4 text-sm text-neutral-500">
            Consultations are complimentary and pressure-free.
          </p>
        </div>
      </div>
    </section>
  );
}
