import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeIn, ScaleIn } from "@/components/AnimatedSection";
import { ButtonWithArrow } from "@/components/Button";
import { Shield, Check, Award, FileCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "AAS Value+ Warranty",
  description:
    "The Gold Standard in Vehicle Assurance. Comprehensive warranty coverage backed by our rigorous VQIV inspection process. Drive with complete peace of mind.",
};

const features = [
  {
    icon: Shield,
    title: "Comprehensive Coverage",
    description:
      "Extensive protection covering major mechanical and electrical components for up to 12 months.",
  },
  {
    icon: FileCheck,
    title: "VQIV Certified",
    description:
      "Only vehicles passing our rigorous 200+ point inspection qualify for AAS Value+ coverage.",
  },
  {
    icon: Award,
    title: "OEM Parts Guarantee",
    description:
      "All repairs use genuine OEM parts, ensuring quality and maintaining your vehicle's value.",
  },
  {
    icon: Check,
    title: "Nationwide Support",
    description:
      "24/7 claims support and access to our network of certified service centers across Nigeria.",
  },
];

const coverageItems = [
  "Engine and transmission systems",
  "Electrical systems and components",
  "Cooling and heating systems",
  "Brake system components",
  "Steering and suspension",
  "Fuel system",
  "Air conditioning system",
  "Power accessories",
];

export default function ValuePlusPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-navy via-navy-dark to-black overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1625047509252-7cdd1b07da03?w=1920&q=80"
            alt="Vehicle inspection"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy/80" />
        </div>

        {/* Animated Gold Glow */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/15 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full mb-6">
              <Award className="w-5 h-5 text-gold" />
              <span className="text-sm text-gold">
                Premium Vehicle Warranty
              </span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              The <span className="text-gradient">Gold Standard</span> in
              Vehicle Assurance
            </h1>
            <p className="text-xl text-gray-300 mb-12">
              Drive with absolute confidence. AAS Value+ Warranty provides
              comprehensive coverage backed by our rigorous inspection process
              and genuine OEM parts guarantee.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ButtonWithArrow href="/services/vehicle-inspection" size="lg">
                Get VQIV Inspection
              </ButtonWithArrow>
              <ButtonWithArrow href="/contact" variant="outline" size="lg">
                Learn More
              </ButtonWithArrow>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* What is AAS Value+ */}
      <section className="py-20 bg-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  What is <span className="text-gradient">AAS Value+?</span>
                </h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p className="text-lg">
                    AAS Value+ is our premium warranty program that provides
                    comprehensive protection for your vehicle investment. Unlike
                    standard warranties, AAS Value+ is backed by our rigorous
                    Vehicle Quality Inspection & Valuation (VQIV) process.
                  </p>
                  <p>
                    Every vehicle must pass our 200+ point inspection before
                    qualifying for AAS Value+ coverage. This ensures that only
                    vehicles meeting our stringent quality standards receive
                    this gold-standard warranty protection.
                  </p>
                  <p>
                    With AAS Value+, you're not just getting warranty coverage –
                    you're getting complete peace of mind, knowing your vehicle
                    has been thoroughly inspected and any repairs will be
                    handled with genuine OEM parts by certified technicians.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="glass rounded-2xl p-8 lg:p-10">
                <div className="flex items-center justify-center w-32 h-32 mx-auto mb-6 bg-gold/20 rounded-full">
                  <Shield className="w-16 h-16 text-gold" />
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Coverage Duration
                  </h3>
                  <div className="text-5xl font-bold text-gold mb-2">
                    12 Months
                  </div>
                  <p className="text-gray-400">
                    Comprehensive protection with options to extend
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-navy-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Key <span className="text-gradient">Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need for complete vehicle protection
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <ScaleIn key={index} delay={index * 0.1}>
                <div className="glass glass-hover rounded-2xl p-6 text-center h-full">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gold/20 rounded-full flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* What's Covered */}
      <section className="py-20 bg-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FadeIn>
              <div className="glass rounded-2xl p-8 lg:p-10">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
                  What's Covered
                </h2>
                <ul className="space-y-4">
                  {coverageItems.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <Check className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="space-y-6">
                <div className="glass rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">
                    How to Qualify
                  </h3>
                  <ol className="space-y-3 text-gray-300">
                    <li className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold text-navy font-bold flex items-center justify-center text-sm">
                        1
                      </span>
                      <span>Schedule a VQIV inspection for your vehicle</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold text-navy font-bold flex items-center justify-center text-sm">
                        2
                      </span>
                      <span>Pass our comprehensive 200+ point inspection</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold text-navy font-bold flex items-center justify-center text-sm">
                        3
                      </span>
                      <span>
                        Receive your VQIV certificate and warranty options
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold text-navy font-bold flex items-center justify-center text-sm">
                        4
                      </span>
                      <span>Select your AAS Value+ coverage package</span>
                    </li>
                  </ol>
                </div>

                <div className="glass rounded-2xl p-6 bg-gold/5 border-gold/30">
                  <h3 className="text-xl font-bold text-white mb-3">
                    💡 Pro Tip
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Get your VQIV inspection before purchasing a used vehicle.
                    It can save you thousands in hidden repair costs and
                    qualifies you immediately for AAS Value+ coverage.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-dark">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Protect Your Investment Today
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Schedule your VQIV inspection and discover if your vehicle
              qualifies for AAS Value+ warranty coverage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ButtonWithArrow href="/services/vehicle-inspection" size="lg">
                Schedule VQIV Inspection
              </ButtonWithArrow>
              <ButtonWithArrow href="/contact" variant="outline" size="lg">
                Contact Us
              </ButtonWithArrow>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
