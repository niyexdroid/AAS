"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const companies = [
  {
    name: "Company 1",
    logo: "https://via.placeholder.com/150x50/1f2937/d4af37?text=COMPANY",
  },
  {
    name: "Company 2",
    logo: "https://via.placeholder.com/150x50/1f2937/d4af37?text=BRAND",
  },
  {
    name: "Company 3",
    logo: "https://via.placeholder.com/150x50/1f2937/d4af37?text=CORP",
  },
  {
    name: "Company 4",
    logo: "https://via.placeholder.com/150x50/1f2937/d4af37?text=GROUP",
  },
  {
    name: "Company 5",
    logo: "https://via.placeholder.com/150x50/1f2937/d4af37?text=ENTERPRISE",
  },
  {
    name: "Company 6",
    logo: "https://via.placeholder.com/150x50/1f2937/d4af37?text=LIMITED",
  },
];

export default function TrustBar() {
  return (
    <section className="py-16 bg-navy-dark/50 border-y border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 text-sm uppercase tracking-wider mb-8"
        >
          Trusted by Reputable Organizations
        </motion.h3>

        {/* Auto-scrolling carousel */}
        <div className="relative overflow-hidden">
          <motion.div
            animate={{
              x: [0, -1600],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
            className="flex space-x-12"
          >
            {[...companies, ...companies, ...companies].map(
              (company, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-50 hover:opacity-100"
                >
                  <div className="w-32 h-12 relative flex items-center justify-center glass rounded-lg px-4">
                    <span className="text-gold/70 text-xs font-semibold whitespace-nowrap">
                      {company.name}
                    </span>
                  </div>
                </div>
              )
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
