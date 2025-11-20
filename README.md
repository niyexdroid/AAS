# Automob Advisory Services (AAS) Website

A production-ready, ultra-modern, luxury automobile advisory services website built with Next.js 14+, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Stack**: Next.js 14+ with App Router, TypeScript, Tailwind CSS
- **Smooth Animations**: Framer Motion for all scroll-triggered effects and micro-interactions
- **Fully Responsive**: Mobile-first design that looks stunning on all devices
- **SEO Optimized**: Perfect metadata, Open Graph tags, and JSON-LD structured data
- **Performance**: Optimized images, lazy loading, targeting LCP < 2s
- **Luxury Design**: Glassmorphism, dark mode with gold accents (#d4af37)

## 📦 Tech Stack

- **Framework**: Next.js 14.2.18
- **Language**: TypeScript 5.6.3
- **Styling**: Tailwind CSS 3.4.14
- **Animations**: Framer Motion 11.11.7
- **Forms**: React Hook Form 7.53.0
- **Icons**: Lucide React 0.454.0
- **Image Optimization**: Next.js Image component with Unsplash/Pexels

## 🏗️ Project Structure

```
aas/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── blog/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── services/
│   │   ├── [slug]/
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── value-plus/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── home/
│   │   ├── DifferenceSection.tsx
│   │   ├── FinalCTA.tsx
│   │   ├── HeroSection.tsx
│   │   ├── LeadMagnetSection.tsx
│   │   ├── ServicesOverview.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── TrustBar.tsx
│   ├── AnimatedSection.tsx
│   ├── AnimatePresence.tsx
│   ├── Button.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   └── WhatsAppButton.tsx
├── lib/
│   └── data.ts
├── next.config.mjs
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## 🎨 Pages

### Home Page (/)

- **Hero Section**: Full viewport with animated gradients and CTAs
- **Trust Bar**: Auto-scrolling company logos carousel
- **Services Overview**: 4 main service cards with hover effects
- **The AAS Difference**: Icon-based feature highlights
- **Testimonials**: Client reviews with ratings
- **Lead Magnet**: Email capture form for free guide
- **Final CTA**: Conversion-optimized call-to-action

### Services (/services)

- Services overview with all 10 services
- Beautiful grid layout with images
- Links to individual service pages

### Individual Service Pages (/services/[slug])

Dynamic routes for 10 services:

1. Auto Advisory
2. Auto Training
3. Vehicle Acquisition
4. Trade & Upgrades
5. Driver Support
6. Fleet Maintenance
7. Genuine Parts
8. Vehicle Inspection (VQIV)
9. Fleet Audit (VFPDA)
10. Smart Accessories

### About (/about)

- Mission & Vision
- Company Story
- Core Values
- Leadership Team

### AAS Value+ (/value-plus)

- Premium warranty program
- Coverage details
- Qualification process
- Key features

### Contact (/contact)

- Contact form with validation
- Contact information cards
- Google Maps integration
- Real-time form submission

### Blog (/blog)

- Featured post highlight
- Blog post grid
- Newsletter subscription

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. **Navigate to project directory**:

   ```bash
   cd c:\Users\Niyexdroid\Documents\Projects\aas
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run development server**:

   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Design System

### Colors

- **Navy Dark**: `#020617` - Primary dark background
- **Navy**: `#0f172a` - Secondary background
- **Navy Light**: `#1e293b` - Lighter elements
- **Gold**: `#d4af37` - Primary accent
- **Gold Light**: `#f4d466` - Hover states
- **Gold Dark**: `#b8941f` - Darker accents

### Typography

- **Font**: Inter (system fallback)
- **Headings**: Bold, varying sizes (4xl to 7xl)
- **Body**: Regular, 16px base

### Components

- **Glass**: `bg-white/5 backdrop-blur-xl border border-white/10`
- **Glass Hover**: Enhanced opacity and border on hover
- **Text Gradient**: Gold gradient for emphasis
- **Glow Effects**: Gold shadow for premium feel

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔍 SEO Features

- Dynamic metadata for all pages
- Open Graph tags
- Twitter Card tags
- JSON-LD structured data
- Sitemap generation ready
- Optimized meta descriptions
- Proper heading hierarchy

## 🎭 Animation Library

All animations use Framer Motion:

- **FadeIn**: Opacity + Y-axis scroll reveal
- **ScaleIn**: Opacity + Scale scroll reveal
- **SlideIn**: Directional slide animations
- **Hover Effects**: Scale, lift, and glow
- **Page Transitions**: Smooth route changes

## 📞 Contact Information

- **Phone**: +234 XXX XXX XXXX
- **Email**: info@automobadvisory.com
- **Location**: Lagos, Nigeria
- **Hours**: Mon-Fri: 8AM-6PM, Sat: 9AM-4PM

## 🔧 Customization

### Update Contact Info

Edit `components/Footer.tsx` and `app/contact/page.tsx`

### Modify Services

Edit `lib/data.ts` to update service content

### Change Brand Colors

Edit `tailwind.config.ts` color definitions

### Update Images

Replace Unsplash URLs in components with your own hosted images

## 📊 Performance Targets

- **LCP**: < 2s (Largest Contentful Paint)
- **FID**: < 100ms (First Input Delay)
- **CLS**: < 0.1 (Cumulative Layout Shift)
- **Lighthouse Score**: 90+ across all metrics

## 🛠️ Technologies

- **Next.js 14.2.18**: React framework with App Router
- **React 18.3.1**: UI library
- **TypeScript 5.6.3**: Type safety
- **Tailwind CSS 3.4.14**: Utility-first CSS
- **Framer Motion 11.11.7**: Animation library
- **React Hook Form 7.53.0**: Form management
- **Lucide React 0.454.0**: Icon library

## 📝 License

Private project for Automob Advisory Services.

## 👥 Support

For support, email support@automobadvisory.com or visit our contact page.

---

Built with ❤️ by the AAS Development Team
