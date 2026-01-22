"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ServiceFAQProps {
  serviceType: "kitchen" | "bathroom" | "whole-home";
}

const faqs = {
  kitchen: [
    {
      question: "How long does a kitchen remodel typically take?",
      answer:
        "Most kitchen remodels take 8-12 weeks from start to finish. This includes design, permits, material ordering, and construction. We provide a detailed timeline during the design phase.",
    },
    {
      question: "Can I stay in my home during the kitchen remodel?",
      answer:
        "Yes, most clients stay in their homes during kitchen remodels. We set up a temporary kitchen area and use dust containment systems to minimize disruption. Daily cleanup keeps the rest of your home livable.",
    },
    {
      question: "Do you handle permits and inspections?",
      answer:
        "Yes, we handle all permits, inspections, and code compliance. This is included in our fixed-price contract, so you don't have to worry about the administrative side of the project.",
    },
    {
      question: "What's included in the kitchen remodel price?",
      answer:
        "Our fixed-price contracts include design, permits, all materials, labor, appliances (if specified), and final cleanup. We provide detailed estimates so you know exactly what's included before construction begins.",
    },
  ],
  bathroom: [
    {
      question: "How long does a bathroom remodel take?",
      answer:
        "Most bathroom remodels take 6-10 weeks, depending on scope. This includes design, permits, waterproofing, fixture installation, and final finishes. We provide a detailed timeline during the design phase.",
    },
    {
      question: "Do you provide waterproofing guarantees?",
      answer:
        "Yes, we use industry-leading waterproofing systems and provide comprehensive warranties. Proper waterproofing is critical for bathroom longevity, and we take it seriously.",
    },
    {
      question: "Can you work with existing plumbing locations?",
      answer:
        "We can work with existing plumbing, but we'll assess whether relocating fixtures would improve functionality. We'll discuss options during the design phase and provide cost estimates for any changes.",
    },
    {
      question: "What fixtures and materials do you recommend?",
      answer:
        "We work with premium brands and help you select fixtures and materials that balance beauty, durability, and budget. We provide recommendations based on your style preferences and usage patterns.",
    },
  ],
  "whole-home": [
    {
      question: "How do you handle whole-home remodels?",
      answer:
        "We create a phased approach that allows you to live in your home during construction. We use dust containment, daily cleanup, and careful scheduling to minimize disruption. For extensive remodels, we can discuss temporary living arrangements.",
    },
    {
      question: "Do you coordinate all trades and systems?",
      answer:
        "Yes, we manage all trades, permits, inspections, and system upgrades. This includes electrical, plumbing, HVAC, and structural work. You have one point of contact for the entire project.",
    },
    {
      question: "How long does a whole-home remodel take?",
      answer:
        "Whole-home remodels typically take 12-24 weeks, depending on scope. We provide a detailed timeline during the design phase and update you regularly throughout construction.",
    },
    {
      question: "Can you work on one area at a time?",
      answer:
        "Yes, we can phase the work to allow you to live in your home comfortably. We'll discuss phasing options during the design phase and create a schedule that works for your lifestyle.",
    },
  ],
};

export default function ServiceFAQ({ serviceType }: ServiceFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const serviceFaqs = faqs[serviceType] || faqs.kitchen;

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-neutral-50 py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-neutral-900 mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {serviceFaqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-neutral-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-neutral-900 pr-4">
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-neutral-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-neutral-600 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-neutral-50 border-t border-neutral-200">
                  <p className="text-neutral-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
