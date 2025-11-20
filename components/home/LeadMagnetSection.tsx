"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/AnimatedSection";
import { Download, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/Button";

type FormData = {
  email: string;
  name: string;
};

export default function LeadMagnetSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    // Handle form submission
    console.log("Lead magnet signup:", data);
    alert("Thank you! Your guide will be sent to your email.");
    reset();
  };

  return (
    <section id="lead-magnet" className="py-24 bg-navy-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative glass rounded-3xl p-8 lg:p-12 overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/20 rounded-full blur-3xl" />

            <div className="relative z-10 max-w-3xl mx-auto text-center">
              {/* Icon */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="inline-flex items-center justify-center w-20 h-20 bg-gold/20 rounded-full mb-6"
              >
                <Download className="w-10 h-10 text-gold" />
              </motion.div>

              {/* Title */}
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Download Our <span className="text-gradient">Free Guide</span>
              </h2>

              <p className="text-xl text-gray-300 mb-8">
                5 Costly Mistakes to Avoid When Buying a Car & Changing Your
                Lubes
              </p>

              <p className="text-gray-400 mb-8">
                Get expert insights on vehicle acquisition and maintenance. Save
                thousands and avoid common pitfalls.
              </p>

              {/* Form */}
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="max-w-md mx-auto space-y-4"
              >
                <div>
                  <input
                    {...register("name", { required: "Name is required" })}
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold focus:bg-white/15 transition-all"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <input
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold focus:bg-white/15 transition-all"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <Button type="submit" size="lg" className="w-full">
                  <Download className="mr-2 w-5 h-5" />
                  Download Free Guide
                </Button>
              </form>

              <p className="mt-6 text-xs text-gray-500">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
