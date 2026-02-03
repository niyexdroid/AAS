"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { mainServices } from "@/lib/data";
import { FadeIn } from "@/components/AnimatedSection";
import { ArrowRight } from "lucide-react";

export default function ServicesOverview() {
  return (
    <section className="py-24 bg-navy">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Our <span className="text-gradient">Premium Services</span>
          </h2>
          <p className="text-lg text-gray-400">
            Comprehensive automobile solutions tailored for company auto needs
            and discerning individuals
          </p>
        </FadeIn>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mainServices.map((service, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <Link href={service.link}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative h-full glass glass-hover rounded-2xl p-6 transition-all duration-300 hover:glow-gold"
                >
                  {/* Icon */}
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Arrow */}
                  <div className="flex items-center text-gold text-sm font-semibold group-hover:translate-x-2 transition-transform">
                    Learn more
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </div>

                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-gold/5 to-transparent" />
                </motion.div>
              </Link>
            </FadeIn>
          ))}
        </div>

        {/* View All Link */}
        <FadeIn delay={0.5} className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center text-gold font-semibold hover:text-gold-light transition-colors group"
          >
            View All Services
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
