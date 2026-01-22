import { AlertTriangle } from "lucide-react";

interface Problem {
  title: string;
  description: string;
}

interface ProblemRisksProps {
  problems: Problem[];
}

export default function ProblemRisks({ problems }: ProblemRisksProps) {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-neutral-900 mb-4">
            The Risks of Waiting
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            These common problems only get worse with time. Addressing them now
            prevents costly repairs and improves your quality of life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-neutral-50 p-8 rounded-lg border border-neutral-200"
            >
              <AlertTriangle className="w-8 h-8 text-amber-500 mb-4" />
              <h3 className="text-xl font-serif font-semibold text-neutral-900 mb-3">
                {problem.title}
              </h3>
              <p className="text-neutral-600">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
