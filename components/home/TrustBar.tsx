"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const companies = [
  {
    name: "Alternative Bank",
    logo: "/Partners_Orgz/AlternativeBank.jpg",
  },
  {
    name: "BPS",
    logo: "/Partners_Orgz/bps.jpg",
  },
  {
    name: "BV",
    logo: "/Partners_Orgz/BV.jpg",
  },
  {
    name: "C45",
    logo: "/Partners_Orgz/c45.jpg",
  },
  {
    name: "Carloha",
    logo: "/Partners_Orgz/carloha.jpg",
  },
  {
    name: "EM",
    logo: "/Partners_Orgz/em.jpg",
  },
  {
    name: "FIF",
    logo: "/Partners_Orgz/fif.jpg",
  },
  {
    name: "Forte Oil (Ardova)",
    logo: "/Partners_Orgz/Forte Oil_Indicate Now Ardova Plc.jpg",
  },
  {
    name: "KidsCo",
    logo: "/Partners_Orgz/kidsco.jpg",
  },
  {
    name: "Old Mutual",
    logo: "/Partners_Orgz/old mutual.jpg",
  },
  {
    name: "Pacegate",
    logo: "/Partners_Orgz/pacegate.jpg",
  },
  {
    name: "PW MFB",
    logo: "/Partners_Orgz/PWmfb.jpg",
  },
  {
    name: "SM",
    logo: "/Partners_Orgz/sm.jpg",
  },
  {
    name: "Sterling",
    logo: "/Partners_Orgz/sterling.jpg",
  },
  {
    name: "TBC",
    logo: "/Partners_Orgz/tbc.jpg",
  },
  {
    name: "TM",
    logo: "/Partners_Orgz/tm.jpg",
  },
  {
    name: "Unilever",
    logo: "/Partners_Orgz/Unilever.jpg",
  },
  {
    name: "V",
    logo: "/Partners_Orgz/v.jpg",
  },
  {
    name: "VIK",
    logo: "/Partners_Orgz/VIK.jpg",
  },
];

export default function TrustBar() {
  const shouldReduceMotion = useReducedMotion();
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(marqueeRef, { margin: "-100px" });
  const shouldAnimate = !shouldReduceMotion && isInView;

  return (
    <section className="py-16 bg-navy-dark/50 border-y border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h3
          // initial={{ opacity: 0, y: 20 }}
          // whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 text-sm uppercase tracking-wider mb-8"
        >
          Partnered & Trusted by Reputable Organizations
        </motion.h3>

        {/* Auto-scrolling carousel */}
        <div className="relative overflow-hidden" ref={marqueeRef}>
          <motion.div
            animate={shouldAnimate ? { x: [0, -1600] } : { x: 0 }}
            transition={
              shouldAnimate
                ? {
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 30,
                      ease: "linear",
                    },
                  }
                : { duration: 0 }
            }
            className="flex space-x-12"
          >
            {[...companies, ...companies, ...companies].map(
              (company, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                >
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    width={128}
                    height={48}
                    className="w-32 h-12 object-contain"
                  />
                </div>
              ),
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
