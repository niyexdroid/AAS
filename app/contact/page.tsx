"use client";

import { useState } from "react";
import { Metadata } from "next";
import { FadeIn, ScaleIn } from "@/components/AnimatedSection";
import { Button } from "@/components/Button";
import { useForm } from "react-hook-form";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  message: string;
};

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+234 XXX XXX XXXX", "+234 XXX XXX XXXX"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@automobadvisory.com", "support@automobadvisory.com"],
  },
  {
    icon: MapPin,
    title: "Office",
    details: ["Lagos, Nigeria", "Ikeja GRA"],
  },
  {
    icon: Clock,
    title: "Hours",
    details: ["Mon - Fri: 8AM - 6PM", "Sat: 9AM - 4PM"],
  },
];

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission
    setTimeout(() => {
      console.log("Form data:", data);
      setIsSubmitting(false);
      setSubmitStatus("success");
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-navy-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Get in <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to optimize your automobile assets? Let&apos;s discuss how
              we can help you achieve your goals.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <ScaleIn key={index} delay={index * 0.1}>
                <div className="glass glass-hover rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 bg-gold/20 rounded-full flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <div className="space-y-1">
                    {item.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-400 text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Form and Map */}
      <section className="py-20 bg-navy-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <FadeIn>
              <div className="glass rounded-2xl p-8 lg:p-10">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Send Us a Message
                </h2>
                <p className="text-gray-400 mb-8">
                  Fill out the form below and we&apos;ll get back to you within
                  24 hours.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        {...register("name", { required: "Name is required" })}
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold focus:bg-white/15 transition-all"
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-400">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                          },
                        })}
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold focus:bg-white/15 transition-all"
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-400">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Phone Number *
                      </label>
                      <input
                        {...register("phone", {
                          required: "Phone is required",
                        })}
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold focus:bg-white/15 transition-all"
                        placeholder="+234 XXX XXX XXXX"
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-400">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Company (Optional)
                      </label>
                      <input
                        {...register("company")}
                        type="text"
                        id="company"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold focus:bg-white/15 transition-all"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Service of Interest *
                    </label>
                    <select
                      {...register("service", {
                        required: "Please select a service",
                      })}
                      id="service"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-gold focus:bg-white/15 transition-all"
                    >
                      <option value="">Select a service</option>
                      <option value="auto-advisory">Auto Advisory</option>
                      <option value="vehicle-acquisition">
                        Vehicle Acquisition
                      </option>
                      <option value="fleet-maintenance">
                        Fleet Maintenance
                      </option>
                      <option value="vehicle-inspection">
                        Vehicle Inspection (VQIV)
                      </option>
                      <option value="fleet-audit">Fleet Audit (VFPDA)</option>
                      <option value="driver-support">Driver Support</option>
                      <option value="genuine-parts">Genuine Parts</option>
                      <option value="smart-accessories">
                        Smart Accessories
                      </option>
                      <option value="training">Training</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.service && (
                      <p className="mt-1 text-sm text-red-400">
                        {errors.service.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      {...register("message", {
                        required: "Message is required",
                      })}
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold focus:bg-white/15 transition-all resize-none"
                      placeholder="Tell us about your needs..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-400">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>

                  {submitStatus === "success" && (
                    <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 text-sm">
                      Thank you! We&apos;ve received your message and will get
                      back to you soon.
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-sm">
                      Something went wrong. Please try again or contact us
                      directly.
                    </div>
                  )}
                </form>
              </div>
            </FadeIn>

            {/* Map */}
            <FadeIn delay={0.2}>
              <div className="glass rounded-2xl overflow-hidden h-full min-h-[600px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.2344788178087!2d3.3515126!3d6.6138765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b92f12ad30755%3A0x3f5a6c2e33a00dc2!2sIkeja%20GRA%2C%20Lagos!5e0!3m2!1sen!2sng!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="AAS Office Location"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
