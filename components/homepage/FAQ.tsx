"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const faqs = [
  {
    question: "Will I get surprise costs or budget overruns?",
    answer:
      "No. We provide fixed pricing after the design phase. All materials, labor, and permits are included in your contract before construction begins.",
  },
  {
    question: "How long will I be without a kitchen/bathroom?",
    answer:
      "Most kitchen remodels take 8–12 weeks. Bathroom remodels take 6–10 weeks. We use dust containment and daily cleanup so you can stay in your home.",
  },
  {
    question: "What if something goes wrong after completion?",
    answer:
      "Our 5-year warranty covers all workmanship, materials, and installation. If any covered issue arises, we&apos;ll fix it at no cost to you.",
  },
  {
    question: "Do you handle everything, or do I need to coordinate multiple contractors?",
    answer:
      "We handle everything. As a design-build firm, one team manages design, permits, construction, and project management from start to finish.",
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
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-neutral-900 mb-4">
            Frequently Asked Questions
          </h2>
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
