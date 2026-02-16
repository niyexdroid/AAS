import { Metadata } from "next";
import Image from "next/image";
import { FadeIn, ScaleIn } from "@/components/AnimatedSection";
import { ButtonWithArrow } from "@/components/Button";
import { Award, Users, Target, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Automob Advisory Services - Nigeria's premier automobile advisory and management company with 5+ years of expertise in corporate fleet management and individual vehicle solutions.",
};

const values = [
  {
    icon: Award,
    title: "Excellence",
    description:
      "We maintain the highest standards in every service we deliver, ensuring superior quality and reliability.",
  },
  {
    icon: Users,
    title: "Client-Centric",
    description:
      "Your success is our priority. We tailor solutions to meet your specific automotive needs and challenges.",
  },
  {
    icon: Target,
    title: "Innovation",
    description:
      "We leverage cutting-edge technology and industry best practices to optimize your automobile assets.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description:
      "Transparency, honesty, and ethical practices form the foundation of everything we do.",
  },
];

const team = [
  {
    name: "Abayomi Abass Oko-osi",
    role: "Founder & Lead Partner",
    image: "/yomi.jpeg",
  },
  {
    name: "Engr. Bashir Cousim",
    role: "Chief Technical Officer & Partner",
    image: "/cousim.jpeg",
  },
  {
    name: "Adegbola Adeniyi",
    role: "Head of Transformation & Innovation",
    image: "/niyi%20pass.jpeg",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-navy-dark overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920&q=80"
            alt="Professional team"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy/80" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              About <span className="text-gradient">AAS</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transforming automobile asset management in Nigeria with
              expertise, innovation, and unwavering commitment to excellence.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <FadeIn>
              <div className="glass rounded-2xl p-8 lg:p-10 h-full">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  To revolutionize automobile asset acquisition, ownership, and
                  management in Nigeria by providing comprehensive, reliable,
                  and innovative solutions that drive operational excellence and
                  cost efficiency for businesses and individuals.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="glass rounded-2xl p-8 lg:p-10 h-full">
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                  Our Vision
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  To be West Africa&apos;s most trusted and comprehensive
                  automobile advisory service, setting the standard for
                  excellence in fleet management, vehicle acquisition, and
                  automotive consulting.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-navy-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Our <span className="text-gradient">Story</span>
                </h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p className="text-lg">
                    Automob Advisory Services was founded with a singular
                    vision: to end the burden of automobile asset management for
                    Nigerian businesses and individuals.
                  </p>
                  <p>
                    With over 5 years of industry experience, we&apos;ve grown
                    from a small advisory firm to a comprehensive automobile
                    solutions provider, serving 50+ corporate clients and
                    hundreds of satisfied individual customers.
                  </p>
                  <p>
                    Our team of certified automotive professionals brings
                    together expertise in fleet management, vehicle acquisition,
                    OEM relationships, and technical services to deliver
                    unmatched value to our clients.
                  </p>
                  <p>
                    Today, we&apos;re proud to be Nigeria&apos;s trusted partner
                    for everything automobile – from strategic consulting to
                    hands-on maintenance, backed by our industry-leading AAS
                    Value+ Warranty.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="relative h-96 lg:h-full min-h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80"
                  alt="Our story"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <ScaleIn key={index} delay={index * 0.1}>
                <div className="glass glass-hover rounded-2xl p-6 text-center h-full">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gold/20 rounded-full flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 text-sm">{value.description}</p>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team (Optional) */}
      <section className="py-20 bg-navy-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Meet Our <span className="text-gradient">Leadership</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Industry experts driving automotive excellence in Nigeria
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <ScaleIn key={index} delay={index * 0.1}>
                <div className="glass glass-hover rounded-2xl overflow-hidden group">
                  <div className="relative h-80">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />
                  </div>
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {member.name}
                    </h3>
                    <p className="text-gold text-sm">{member.role}</p>
                  </div>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Join 50+ satisfied corporate clients and 500+ individuals to
              explore the AAS Difference.
            </p>
            <ButtonWithArrow href="/contact" size="lg">
              Get in Touch
            </ButtonWithArrow>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
