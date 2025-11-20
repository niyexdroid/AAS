import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { servicesData } from "@/lib/data";
import { FadeIn } from "@/components/AnimatedSection";
import { ButtonWithArrow } from "@/components/Button";
import { Check, ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.title,
    description: service.fullDescription,
    openGraph: {
      title: `${service.title} | Automob Advisory Services`,
      description: service.fullDescription,
      images: [service.image],
    },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = servicesData.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-navy-dark overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/90 to-navy-dark" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <Link
              href="/services"
              className="inline-flex items-center text-gold hover:text-gold-light mb-6 transition-colors"
            >
              <ArrowLeft className="mr-2 w-5 h-5" />
              Back to Services
            </Link>

            <div className="max-w-4xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-20 h-20 glass rounded-full flex items-center justify-center">
                  <span className="text-4xl">{service.icon}</span>
                </div>
                <div>
                  <h1 className="text-4xl lg:text-6xl font-bold text-white">
                    {service.title}
                  </h1>
                </div>
              </div>
              <p className="text-xl text-gray-300">{service.description}</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Description */}
            <div className="lg:col-span-2 space-y-8">
              <FadeIn>
                <div className="glass rounded-2xl p-8">
                  <h2 className="text-3xl font-bold text-white mb-6">
                    Overview
                  </h2>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {service.fullDescription}
                  </p>
                </div>
              </FadeIn>

              {/* Benefits */}
              <FadeIn delay={0.1}>
                <div className="glass rounded-2xl p-8">
                  <h2 className="text-3xl font-bold text-white mb-6">
                    Key Benefits
                  </h2>
                  <ul className="space-y-4">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Check className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                        <span className="text-gray-300 text-lg">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              {/* Features */}
              <FadeIn delay={0.2}>
                <div className="glass rounded-2xl p-8">
                  <h2 className="text-3xl font-bold text-white mb-6">
                    What&apos;s Included
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-3 p-4 bg-white/5 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-gold rounded-full" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* CTA Card */}
              <FadeIn delay={0.3}>
                <div className="glass rounded-2xl p-6 text-center sticky top-24">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Ready to Get Started?
                  </h3>
                  <p className="text-gray-400 mb-6">
                    Let&apos;s discuss how this service can benefit your
                    organization. organization.
                  </p>
                  <ButtonWithArrow href="/contact" className="w-full mb-4">
                    Request a Quote
                  </ButtonWithArrow>
                  <a
                    href="tel:+234XXXXXXXXXX"
                    className="block text-gold hover:text-gold-light transition-colors"
                  >
                    Or call: +234 XXX XXX XXXX
                  </a>
                </div>
              </FadeIn>

              {/* Related Services */}
              <FadeIn delay={0.4}>
                <div className="glass rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Related Services
                  </h3>
                  <ul className="space-y-3">
                    {servicesData
                      .filter((s) => s.id !== service.id)
                      .slice(0, 3)
                      .map((relatedService) => (
                        <li key={relatedService.id}>
                          <Link
                            href={`/services/${relatedService.slug}`}
                            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                          >
                            <span className="text-2xl">
                              {relatedService.icon}
                            </span>
                            <span className="text-gray-300 text-sm group-hover:text-gold transition-colors">
                              {relatedService.shortTitle}
                            </span>
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-navy-dark">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Let&apos;s Optimize Your Automobile Assets
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Schedule a free consultation to learn how we can help you achieve
              your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ButtonWithArrow href="/contact" size="lg">
                Schedule Consultation
              </ButtonWithArrow>
              <ButtonWithArrow href="/services" variant="outline" size="lg">
                View All Services
              </ButtonWithArrow>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
