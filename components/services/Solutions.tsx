"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Check } from "lucide-react";

interface Solution {
  title: string;
  description: string;
}

interface SolutionsProps {
  solutions: Solution[];
}

export default function Solutions({ solutions }: SolutionsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleSolution = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-neutral-50 py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-neutral-900 mb-4">
            Our Solutions
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            How we address your specific challenges with architect-led design
            and premium execution.
          </p>
        </div>

        <div className="space-y-4">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-neutral-200 overflow-hidden"
            >
              <button
                onClick={() => toggleSolution(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <div className="flex items-center gap-4">
                  <Check className="w-6 h-6 text-primary-600 flex-shrink-0" />
                  <span className="text-xl font-serif font-semibold text-neutral-900">
                    {solution.title}
                  </span>
                </div>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-neutral-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-neutral-600 flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-neutral-50 border-t border-neutral-200">
                  <p className="text-neutral-700">{solution.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
