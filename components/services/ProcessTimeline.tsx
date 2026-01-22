import { Calendar, CheckCircle2 } from "lucide-react";

interface ProcessTimelineProps {
  timeline: string;
}

const phases = [
  {
    phase: "Design & Planning",
    duration: "2-4 weeks",
    tasks: [
      "Initial consultation and site assessment",
      "Design development and 3D visualizations",
      "Material and finish selections",
      "Detailed scope of work and fixed-price contract",
    ],
  },
  {
    phase: "Permits & Preparation",
    duration: "1-2 weeks",
    tasks: [
      "Permit applications and approvals",
      "Material ordering and delivery",
      "Site preparation and protection",
    ],
  },
  {
    phase: "Construction",
    duration: "Varies by project",
    tasks: [
      "Demolition and structural work",
      "Rough-in (electrical, plumbing, HVAC)",
      "Installation of finishes and fixtures",
      "Daily cleanup and site organization",
    ],
  },
  {
    phase: "Final Walkthrough",
    duration: "1 week",
    tasks: [
      "Final inspections and approvals",
      "Punch list completion",
      "Final walkthrough and warranty orientation",
    ],
  },
];

export default function ProcessTimeline({ timeline }: ProcessTimelineProps) {
  return (
    <section className="bg-neutral-50 py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-neutral-900 mb-4">
            Process & Timeline
          </h2>
          <div className="inline-flex items-center gap-2 bg-primary-100 px-6 py-3 rounded-full">
            <Calendar className="w-5 h-5 text-primary-700" />
            <span className="text-lg font-semibold text-primary-900">
              Typical Timeline: {timeline}
            </span>
          </div>
        </div>

        <div className="space-y-8">
          {phases.map((phase, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg border border-neutral-200"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-xl font-serif font-bold text-primary-700">
                    {index + 1}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-semibold text-neutral-900">
                    {phase.phase}
                  </h3>
                  <p className="text-neutral-600">{phase.duration}</p>
                </div>
              </div>
              <ul className="space-y-2 pl-16">
                {phase.tasks.map((task, taskIndex) => (
                  <li
                    key={taskIndex}
                    className="flex items-start gap-3 text-neutral-700"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
