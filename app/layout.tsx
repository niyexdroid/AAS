import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://automobadvisory.com"),
  title: {
    default: "Automob Advisory Services | Premium Auto Solutions in Nigeria",
    template: "%s | Automob Advisory Services",
  },
  description:
    "End the burden of Auto Asset Acquisition, Ownership, Utility, Management & Replacement. Comprehensive automobile solutions for corporate fleets and discerning individuals in Nigeria.",
  keywords: [
    "automobile advisory",
    "fleet management Nigeria",
    "vehicle acquisition",
    "auto consulting",
    "car maintenance Nigeria",
    "OEM parts",
    "vehicle inspection",
    "corporate fleet",
    "Lagos auto services",
  ],
  authors: [{ name: "Automob Advisory Services" }],
  creator: "Automob Advisory Services",
  publisher: "Automob Advisory Services",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://automobadvisory.com",
    siteName: "Automob Advisory Services",
    title: "Automob Advisory Services | Premium Auto Solutions in Nigeria",
    description:
      "End the burden of Auto Asset Acquisition, Ownership, Utility, Management & Replacement. Comprehensive automobile solutions for corporate fleets and discerning individuals in Nigeria.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Automob Advisory Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Automob Advisory Services | Premium Auto Solutions in Nigeria",
    description:
      "End the burden of Auto Asset Acquisition, Ownership, Utility, Management & Replacement.",
    images: ["/og-image.jpg"],
    creator: "@AutomobAdvisory",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
