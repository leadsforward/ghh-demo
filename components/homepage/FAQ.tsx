"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "What's the difference between remodeling and renovating?",
    answer:
      "Remodeling involves changing the structure, layout, or function of a space. Renovating typically means restoring or updating existing features. At Gold Heart Homes, we specialize in remodeling — transforming spaces to better fit how you live.",
  },
  {
    question: "How much does a home remodel typically cost?",
    answer:
      "Investment varies significantly based on scope, materials, and structural requirements. Most kitchen remodels range from $45,000 to $120,000+, while bathroom remodels typically range from $25,000 to $75,000+. We provide detailed estimates during the consultation phase, so you understand investment parameters before design work begins.",
  },
  {
    question: "Do you handle design, permits, and project management?",
    answer:
      "Yes. As a design-build firm, we handle everything from initial design through final completion. This includes design development, permit applications, material procurement, and day-to-day project management. One team, one point of contact, from start to finish.",
  },
  {
    question: "How long does a typical remodel take?",
    answer:
      "Timelines depend on project scope. Most kitchen remodels take 8–12 weeks, bathroom remodels take 6–10 weeks, and whole-home remodels take 12–24 weeks. We provide detailed timelines during the planning phase and keep you informed throughout the project.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve Kansas City, MO, and surrounding communities including Jackson County, Clay County, Platte County, Cass County, Johnson County, and Wyandotte County. This includes cities like Overland Park, Leawood, Prairie Village, Lee's Summit, Shawnee, Olathe, and Lenexa.",
  },
  {
    question: "Do you offer financing options?",
    answer:
      "Yes. We work with trusted lenders to offer flexible financing solutions that fit your budget and timeline. Options include home equity loans, home improvement loans, and milestone-based payment plans. We can discuss financing during your consultation.",
  },
  {
    question: "What should I expect during the process?",
    answer:
      "You'll work with a dedicated design-build team from consultation through completion. We handle planning, permits, and project management. You'll have regular communication, clear timelines, and a clean, organized job site. Our goal is to make the process predictable and straightforward.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-neutral-900 mb-4">
            Common questions, clearly answered.
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Clear, honest answers to help you feel confident moving forward.
          </p>
        </div>

        <div
          ref={ref}
          className={`space-y-3 transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-neutral-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-medium text-neutral-900 pr-4 leading-relaxed">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-neutral-500 flex-shrink-0 transition-transform" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-neutral-500 flex-shrink-0 transition-transform" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-5 bg-neutral-50 border-t border-neutral-200">
                  <p className="text-neutral-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Optional CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
          >
            Still have questions? Schedule a design consultation
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
