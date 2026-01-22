import Image from "next/image";
import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";

interface ServiceHeroProps {
  service: {
    title: string;
    description: string;
    heroImage: string;
  };
}

export default function ServiceHero({ service }: ServiceHeroProps) {
  return (
    <section className="relative bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-yellow-400 text-yellow-400"
                />
              ))}
              <span className="text-neutral-700 font-medium ml-2">
                4.9/5 rating
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-serif font-bold text-neutral-900 mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-neutral-600 mb-8">{service.description}</p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-primary-600 text-white px-8 py-4 rounded-md font-semibold text-base hover:bg-primary-700 transition-colors min-h-[44px] whitespace-nowrap"
            >
              Schedule a Design Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
          <div className="relative h-[400px] lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src={service.heroImage}
              alt={`${service.title} by Gold Heart Homes`}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
