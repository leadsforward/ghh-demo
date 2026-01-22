import Link from "next/link";
import { DollarSign, CreditCard, ArrowRight } from "lucide-react";

interface InvestmentFinancingProps {
  range: string;
}

const financingOptions = [
  {
    title: "Home Equity Loans",
    description:
      "Use your home's equity to finance your remodel with competitive rates and flexible terms.",
  },
  {
    title: "Home Improvement Loans",
    description:
      "Unsecured loans specifically designed for home renovations, with quick approval and no equity required.",
  },
  {
    title: "Payment Plans",
    description:
      "Milestone-based payment schedules that align with project progress, not arbitrary deadlines.",
  },
];

export default function InvestmentFinancing({
  range,
}: InvestmentFinancingProps) {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-neutral-900 mb-4">
            Investment & Financing
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Transparent pricing and flexible financing options to make your
            remodel possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div className="bg-neutral-50 p-8 rounded-lg border border-neutral-200">
            <DollarSign className="w-12 h-12 text-primary-600 mb-4" />
            <h3 className="text-2xl font-serif font-semibold text-neutral-900 mb-4">
              Investment Range
            </h3>
            <p className="text-3xl font-bold text-primary-700 mb-4">{range}</p>
            <p className="text-neutral-600">
              Final investment depends on scope, materials, and structural
              requirements. We provide detailed estimates during the design phase
              so you know exactly what to expect before construction begins.
            </p>
          </div>

          <div className="bg-neutral-50 p-8 rounded-lg border border-neutral-200">
            <CreditCard className="w-12 h-12 text-primary-600 mb-4" />
            <h3 className="text-2xl font-serif font-semibold text-neutral-900 mb-4">
              Financing Options
            </h3>
            <p className="text-neutral-600 mb-6">
              We work with trusted lenders to offer flexible financing solutions
              that fit your budget and timeline.
            </p>
            <Link
              href="/financing"
              className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
            >
              Learn More About Financing
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {financingOptions.map((option, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg border border-neutral-200"
            >
              <h4 className="text-lg font-semibold text-neutral-900 mb-2">
                {option.title}
              </h4>
              <p className="text-neutral-600 text-sm">{option.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
