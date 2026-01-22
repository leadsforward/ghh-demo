import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FinalCTA from "@/components/homepage/FinalCTA";

const financingOptions = [
  {
    title: "Home Equity Loans",
    description:
      "Use your home's equity to finance your remodel with competitive rates and flexible terms. Home equity loans typically offer lower interest rates than unsecured loans.",
    benefits: [
      "Lower interest rates",
      "Tax-deductible interest (consult your tax advisor)",
      "Flexible repayment terms",
      "Borrow up to 85% of home equity",
    ],
  },
  {
    title: "Home Improvement Loans",
    description:
      "Unsecured loans specifically designed for home renovations. Quick approval, no equity required, and funds can be used for any remodeling project.",
    benefits: [
      "No equity required",
      "Quick approval process",
      "Fixed interest rates",
      "Flexible loan amounts",
    ],
  },
  {
    title: "Milestone-Based Payment Plans",
    description:
      "Our payment schedules align with project milestones, not arbitrary deadlines. This ensures you only pay for completed work and helps manage cash flow.",
    benefits: [
      "Pay only for completed work",
      "Transparent payment schedule",
      "No upfront payments required",
      "Aligned with project progress",
    ],
  },
];

export default function FinancingPage() {
  return (
    <div className="pt-20">
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900 mb-4">
              Financing Options
            </h1>
            <p className="text-lg lg:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Flexible financing solutions to make your remodel possible. We
              work with trusted lenders to offer options that fit your budget
              and timeline.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 mb-12">
            {financingOptions.map((option, index) => (
              <div
                key={index}
                className="bg-white border border-neutral-200 p-8 lg:p-10 rounded-lg"
              >
                <h2 className="text-xl lg:text-2xl font-serif font-semibold text-neutral-900 mb-4">
                  {option.title}
                </h2>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  {option.description}
                </p>
                <ul className="space-y-3">
                  {option.benefits.map((benefit, benefitIndex) => (
                    <li
                      key={benefitIndex}
                      className="flex items-start gap-3 text-neutral-700"
                    >
                      <span className="text-primary-600 font-bold mt-1">•</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-neutral-50 rounded-lg p-8 lg:p-12 border border-neutral-200">
            <h2 className="text-2xl lg:text-3xl font-serif font-bold text-neutral-900 mb-6 text-center">
              How It Works
            </h2>
            <div className="space-y-6 max-w-3xl mx-auto">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-serif font-bold text-primary-700">
                    1
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    Initial Consultation
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    During your consultation, we discuss your project goals,
                    budget, and timeline. We'll help you understand investment
                    ranges and financing options that might work for you.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-serif font-bold text-primary-700">
                    2
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    Design & Estimate
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Once we develop the design and scope, we provide a
                    fixed-price contract. This gives you a clear investment
                    amount to discuss with lenders.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-serif font-bold text-primary-700">
                    3
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    Financing Application
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    We can connect you with trusted lenders, or you can work
                    with your preferred financial institution. Many lenders
                    offer pre-approval within 24-48 hours.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-serif font-bold text-primary-700">
                    4
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    Project Begins
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    Once financing is secured, we begin construction. Our
                    milestone-based payment schedule aligns with project progress
                    and your financing terms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FinalCTA />
    </div>
  );
}
