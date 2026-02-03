"use client";

import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/lib/data";
import { FadeIn } from "@/components/AnimatedSection";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function TestimonialsSection() {
  const [startIndex, setStartIndex] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setStartIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const goToNext = () => {
    setStartIndex((prev) => (prev + 1) % testimonials.length);
  };

  // Get 3 consecutive testimonials
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(startIndex + i) % testimonials.length]);
    }
    return visible;
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-lg text-gray-400">
            Trusted by corporate fleets and individual car owners across Nigeria
          </p>
        </FadeIn>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-20 w-12 h-12 rounded-full bg-gold/10 hover:bg-gold/20 backdrop-blur-sm border border-gold/20 flex items-center justify-center transition-all group"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="w-6 h-6 text-gold group-hover:scale-110 transition-transform" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-20 w-12 h-12 rounded-full bg-gold/10 hover:bg-gold/20 backdrop-blur-sm border border-gold/20 flex items-center justify-center transition-all group"
            aria-label="Next testimonials"
          >
            <ChevronRight className="w-6 h-6 text-gold group-hover:scale-110 transition-transform" />
          </button>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {visibleTestimonials.map((testimonial, index) => {
                const globalIndex = (startIndex + index) % testimonials.length;
                return (
                  <motion.div
                    key={`${globalIndex}-${startIndex}`}
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    className="glass rounded-2xl p-6 relative flex flex-col"
                  >
                    {/* Quote Icon */}
                    <Quote className="absolute top-4 right-4 w-10 h-10 text-gold/20" />

                    {/* Rating */}
                    <div className="flex space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                      ))}
                    </div>

                    {/* Content */}
                    <p className="text-gray-300 text-sm leading-relaxed mb-6 italic flex-grow">
                      &quot;{testimonial.content}&quot;
                    </p>

                    {/* Author */}
                    <div className="flex items-center mt-auto">
                      <div>
                        <div className="font-semibold text-white">
                          {testimonial.name}
                        </div>
                        <div className="text-xs text-gray-400">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>

                    {/* Decorative border */}
                    <div className="absolute inset-0 rounded-2xl border border-gold/10" />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setStartIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === startIndex
                    ? "w-8 bg-gold"
                    : "w-2 bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Go to testimonial set ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
