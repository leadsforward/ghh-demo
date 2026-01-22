"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BeforeAfterGalleryProps {
  serviceType: "kitchen" | "bathroom" | "whole-home";
}

const galleryImages = {
  kitchen: [
    {
      before: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&q=80",
      after: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&q=80",
      caption: "Modern kitchen transformation with custom cabinetry and quartz countertops",
    },
    {
      before: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&q=80",
      after: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&q=80",
      caption: "Open-concept kitchen with island and premium appliances",
    },
  ],
  bathroom: [
    {
      before: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80",
      after: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80",
      caption: "Spa-like master bathroom with walk-in shower and freestanding tub",
    },
    {
      before: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80",
      after: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80",
      caption: "Modern bathroom with premium fixtures and custom tile work",
    },
  ],
  "whole-home": [
    {
      before: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      after: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      caption: "Complete home transformation with open-concept living",
    },
  ],
};

export default function BeforeAfterGallery({
  serviceType,
}: BeforeAfterGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = galleryImages[serviceType] || galleryImages.kitchen;

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-neutral-900 mb-4">
            Before & After Gallery
          </h2>
          <p className="text-xl text-neutral-600">
            See the transformation in our recent projects.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src={images[currentIndex].before}
                alt="Before"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute top-4 left-4 bg-white/90 px-4 py-2 rounded-md font-semibold text-neutral-900">
                Before
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src={images[currentIndex].after}
                alt="After"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute top-4 left-4 bg-primary-600 text-white px-4 py-2 rounded-md font-semibold">
                After
              </div>
            </div>
          </div>

          <p className="text-center text-neutral-600 mb-6">
            {images[currentIndex].caption}
          </p>

          {images.length > 1 && (
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={prevImage}
                className="p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <div className="flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex
                        ? "bg-primary-600"
                        : "bg-neutral-300"
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={nextImage}
                className="p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
