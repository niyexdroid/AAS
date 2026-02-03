"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/AnimatedSection";
import { Award, Shield, Wrench, Users } from "lucide-react";

const differences = [
  {
    icon: Award,
    title: "10+ Years of Expertise",
    description:
      "Proven track record in delivering exceptional automobile solutions across Nigeria.",
  },
  {
    icon: Shield,
    title: "OEM Franchise & Direct Interface With Auto Finance Options",
    description:
      "Direct relationships with Original Equipment Manufacturers for authentic parts and vehicles.",
  },
  {
    icon: Wrench,
    title: "The AAS Warranty",
    description:
      "Industry-leading AAS Value+ Warranty for complete peace of mind.",
  },
  {
    icon: Users,
    title: "End-to-End Solutions",
    description:
      "Comprehensive services from acquisition to maintenance and everything in between.",
  },
];

export default function DifferenceSection() {
  return (
    <section className="py-24 bg-navy-dark relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            The <span className="text-gradient">AAS Difference</span>
          </h2>
          <p className="text-lg text-gray-400">
            Why leading organizations and discerning individuals choose Automob
            Advisory Services
          </p>
        </FadeIn>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {differences.map((item, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <motion.div whileHover={{ y: -5 }} className="text-center group">
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-20 h-20 rounded-full glass glass-hover flex items-center justify-center group-hover:glow-gold transition-all"
                  >
                    <item.icon className="w-10 h-10 text-gold" />
                  </motion.div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
