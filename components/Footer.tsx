"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";
import { FaTiktok, FaWhatsapp } from "react-icons/fa";
import WhatsAppButton from "./WhatsAppButton";

const services = [
  { name: "Auto Advisory", href: "/services/auto-advisory" },
  { name: "Vehicle Acquisition", href: "/services/vehicle-acquisition" },
  { name: "Fleet Maintenance", href: "/services/fleet-maintenance" },
  { name: "Vehicle Inspection", href: "/services/vehicle-inspection" },
];

const company = [
  { name: "About Us", href: "/about" },
  { name: "AAS Value+", href: "/value-plus" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative bg-navy-dark border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative h-12 w-32"
              >
                <Image
                  src="/logo.png"
                  alt="AAS Logo"
                  fill
                  className="object-contain mix-blend-lighten"
                  priority
                />
              </motion.div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium automobile solutions for corporate fleets and discerning
              individuals in Nigeria.
            </p>
            <div className="flex space-x-4 pt-4">
              <SocialLink
                href="https://instagram.com"
                icon={<Instagram className="w-5 h-5" />}
              />
              <SocialLink
                href="https://linkedin.com"
                icon={<Linkedin className="w-5 h-5" />}
              />
              <SocialLink
                href="https://facebook.com"
                icon={<Facebook className="w-5 h-5" />}
              />
              <SocialLink
                href="https://twitter.com"
                icon={<Twitter className="w-5 h-5" />}
              />
              <SocialLink
                href="https://tiktok.com"
                icon={<FaTiktok className="w-5 h-5" />}
              />
              <SocialLink
                href="https://whatsapp.com/channel"
                icon={<FaWhatsapp className="w-5 h-5" />}
              />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-gold transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-gold transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <span>
                  EML, 29 Ziatech Rd, Off Oregun, Ikeja, Lagos, Nigeria
                </span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <FaWhatsapp className="w-5 h-5 text-gold flex-shrink-0" />
                <a
                  href="https://wa.me/2348090548576?text=Hello,%20what%20help%20do%20you%20need%20with%20automobile(s)%20today?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  +234 809 054 8576
                </a>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <span>automobadvisory@outlook.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Niyexdroid Technologies. All rights
              reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-gray-500 hover:text-gold text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-500 hover:text-gold text-sm transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Automob Advisory Services",
            alternateName: "AAS",
            url: "https://automobadvisory.com",
            logo: "https://automobadvisory.com/logo.png",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+234-XXX-XXX-XXXX",
              contactType: "customer service",
              areaServed: "NG",
              availableLanguage: "en",
            },
            address: {
              "@type": "PostalAddress",
              addressLocality: "Lagos",
              addressCountry: "NG",
            },
            sameAs: [
              "https://www.facebook.com/automobadvisory",
              "https://www.instagram.com/automobadvisory",
              "https://www.linkedin.com/company/automobadvisory",
              "https://twitter.com/automobadvisory",
            ],
          }),
        }}
      />
    </footer>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1, y: -2 }}
      className="w-10 h-10 glass glass-hover rounded-full flex items-center justify-center text-gray-400 hover:text-gold transition-colors"
    >
      {icon}
    </motion.a>
  );
}
