import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FadeIn, ScaleIn } from "@/components/AnimatedSection";
import { ArrowRight, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights, tips, and updates on automobile management, fleet optimization, and vehicle maintenance from the experts at AAS.",
};

// Placeholder blog posts
const posts = [
  {
    id: 1,
    title: "5 Costly Mistakes to Avoid When Buying a Car in Nigeria",
    excerpt:
      "Learn from the experts about common pitfalls in vehicle acquisition and how to avoid them to save thousands of naira.",
    image:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80",
    category: "Vehicle Acquisition",
    date: "Nov 15, 2025",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Fleet Management Best Practices for Nigerian Businesses",
    excerpt:
      "Discover proven strategies to optimize your corporate fleet operations, reduce costs, and improve vehicle reliability.",
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
    category: "Fleet Management",
    date: "Nov 10, 2025",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "Understanding OEM Parts vs. Aftermarket: What You Need to Know",
    excerpt:
      "A comprehensive guide to making informed decisions about vehicle parts and their impact on performance and longevity.",
    image:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
    category: "Maintenance",
    date: "Nov 5, 2025",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "The Complete Vehicle Inspection Checklist Before Purchase",
    excerpt:
      "Don't buy blind! Use this professional checklist to evaluate any vehicle before making a purchase decision.",
    image:
      "https://images.unsplash.com/photo-1625047509252-7cdd1b07da03?w=800&q=80",
    category: "Inspection",
    date: "Oct 28, 2025",
    readTime: "8 min read",
  },
  {
    id: 5,
    title: "How to Extend Your Vehicle Lifespan: Expert Maintenance Tips",
    excerpt:
      "Simple maintenance habits that can add years to your vehicle's life and save you money in the long run.",
    image:
      "https://images.unsplash.com/photo-1632823469564-e287d2825c1e?w=800&q=80",
    category: "Maintenance",
    date: "Oct 20, 2025",
    readTime: "5 min read",
  },
  {
    id: 6,
    title: "Smart Auto Accessories That Actually Add Value",
    excerpt:
      "From GPS trackers to dash cams, discover which automotive tech upgrades provide real ROI for your investment.",
    image:
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80",
    category: "Technology",
    date: "Oct 15, 2025",
    readTime: "6 min read",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-navy-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Insights & <span className="text-gradient">Resources</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert advice, industry insights, and practical tips for
              optimizing your automobile assets.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-navy">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <Link href={`/blog/${posts[0].id}`}>
              <div className="glass glass-hover rounded-2xl overflow-hidden group cursor-pointer">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative h-80 lg:h-auto">
                    <Image
                      src={posts[0].image}
                      alt={posts[0].title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="px-3 py-1 bg-gold/20 text-gold text-xs font-semibold rounded-full">
                        Featured
                      </span>
                      <span className="text-gray-400 text-sm">
                        {posts[0].category}
                      </span>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-gold transition-colors">
                      {posts[0].title}
                    </h2>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {posts[0].excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {posts[0].date}
                        </span>
                        <span>{posts[0].readTime}</span>
                      </div>
                      <div className="flex items-center text-gold font-semibold group-hover:translate-x-2 transition-transform">
                        Read more
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-navy-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post, index) => (
              <ScaleIn key={post.id} delay={index * 0.1}>
                <Link href={`/blog/${post.id}`}>
                  <div className="glass glass-hover rounded-2xl overflow-hidden h-full group cursor-pointer">
                    <div className="relative h-48">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 glass text-white text-xs font-semibold rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {post.date}
                        </span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-navy">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <div className="glass rounded-2xl p-8 lg:p-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Stay Updated
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Subscribe to our newsletter for the latest insights, tips, and
                exclusive offers.
              </p>
              <form className="max-w-md mx-auto flex gap-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-6 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold focus:bg-white/15 transition-all"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gold text-navy font-semibold rounded-lg hover:bg-gold-light transition-all hover:scale-105"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
