import { Star, Quote } from "lucide-react";

interface ServiceTestimonialsProps {
  serviceType: "kitchen" | "bathroom" | "whole-home";
}

const testimonials = {
  kitchen: [
    {
      name: "Sarah & Michael Chen",
      location: "Overland Park, KS",
      rating: 5,
      text: "Our kitchen remodel exceeded every expectation. The design process was collaborative, the timeline was accurate, and the final result is stunning. No budget surprises, no delays—just beautiful results.",
    },
    {
      name: "Jennifer Martinez",
      location: "Kansas City, MO",
      rating: 5,
      text: "The architect-led approach made all the difference. They helped us make decisions we wouldn't have thought of on our own. The kitchen is now the heart of our home.",
    },
  ],
  bathroom: [
    {
      name: "David Thompson",
      location: "Leawood, KS",
      rating: 5,
      text: "Our master bathroom is now a true retreat. The waterproofing is professional, the fixtures are premium, and the design is timeless. Worth every penny.",
    },
    {
      name: "Lisa & Robert Wilson",
      location: "Prairie Village, KS",
      rating: 5,
      text: "The bathroom remodel was seamless from start to finish. Clean process, beautiful results, and a warranty that gives us peace of mind.",
    },
  ],
  "whole-home": [
    {
      name: "Jennifer & Robert Thompson",
      location: "Leawood, KS",
      rating: 5,
      text: "We'd heard horror stories about whole-home remodels, but Gold Heart Homes made it seamless. Fixed pricing, clear communication, and a team that treated our home like their own.",
    },
    {
      name: "Michael & Sarah Davis",
      location: "Kansas City, MO",
      rating: 5,
      text: "The cohesive design throughout our home is exactly what we wanted. Every room flows beautifully, and the systems upgrades make our home more efficient and comfortable.",
    },
  ],
};

export default function ServiceTestimonials({
  serviceType,
}: ServiceTestimonialsProps) {
  const serviceTestimonials =
    testimonials[serviceType] || testimonials.kitchen;

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-neutral-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-neutral-600">
            Real testimonials from homeowners who chose Gold Heart Homes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-neutral-50 p-8 rounded-lg border border-neutral-200"
            >
              <Quote className="w-8 h-8 text-primary-600 mb-4" />
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-neutral-700 mb-6 italic">
                &quot;{testimonial.text}&quot;
              </p>
              <div>
                <div className="font-semibold text-neutral-900">
                  {testimonial.name}
                </div>
                <div className="text-sm text-neutral-600">
                  {testimonial.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
