import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { servicesData } from "@/lib/data";
import { FadeIn, ScaleIn } from "@/components/AnimatedSection";
import { ButtonWithArrow } from "@/components/Button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Your End-to-End Automobile Solution Partner. From strategic advisory to maintenance, we provide comprehensive automotive services for businesses and individuals in Nigeria.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-navy via-navy-dark to-black overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1920&q=80"
            alt="Professional auto services"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy/80" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Your End-to-End{" "}
              <span className="text-gradient">Automobile Solution</span> Partner
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From strategic advisory to fleet management, vehicle acquisition
              to maintenance – we handle every aspect of your automobile needs
              with unmatched expertise and reliability.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesData.map((service, index) => (
              <ScaleIn key={service.id} delay={index * 0.05}>
                <Link href={`/services/${service.slug}`}>
                  <div className="group relative glass glass-hover rounded-2xl overflow-hidden h-full hover:glow-gold transition-all duration-300">
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />

                      {/* Icon Overlay */}
                      <div className="absolute top-4 left-4 w-16 h-16 glass rounded-full flex items-center justify-center">
                        <span className="text-3xl">{service.icon}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gold transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 mb-4 line-clamp-2">
                        {service.description}
                      </p>
                      <div className="flex items-center text-gold font-semibold group-hover:translate-x-2 transition-transform">
                        Learn more
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 border-2 border-gold/0 group-hover:border-gold/30 rounded-2xl transition-all duration-300" />
                  </div>
                </Link>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-dark">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Every business has unique automotive needs. Let's discuss how we
              can tailor our services to optimize your fleet operations.
            </p>
            <ButtonWithArrow href="/contact" size="lg">
              Schedule a Consultation
            </ButtonWithArrow>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
