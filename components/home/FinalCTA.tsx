"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/AnimatedSection";
import { ButtonWithArrow } from "@/components/Button";
import { Phone, Calendar } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-navy via-navy-dark to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-gold/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/15 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Optimize Your{" "}
            <span className="text-gradient">Auto Assets?</span>
          </h2>

          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join 150+ corporate clients and hundreds of satisfied individuals
            who trust AAS for their automobile needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <ButtonWithArrow href="/contact" size="lg">
              <Calendar className="mr-2 w-5 h-5" />
              Schedule a Call Today
            </ButtonWithArrow>

            <a
              href="tel:+234XXXXXXXXXX"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-gold border-2 border-gold rounded-lg hover:bg-gold hover:text-navy transition-all duration-300 hover:scale-105"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Us Now
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 pt-12 border-t border-white/10">
            {[
              { value: "500+", label: "Vehicles Serviced" },
              { value: "150+", label: "Corporate Clients" },
              { value: "98%", label: "Satisfaction Rate" },
              { value: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl lg:text-4xl font-bold text-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
