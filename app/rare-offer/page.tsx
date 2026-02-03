import Link from "next/link";

const WHATSAPP_LINK =
  "https://wa.me/2348090548576?text=Hello,%20what%20help%20do%20you%20need%20with%20automobile(s)%20today?";

export default function RareOfferPage() {
  return (
    <main className="min-h-screen bg-navy text-white pt-28 pb-16">
      <section className="max-w-6xl mx-auto px-4 space-y-10">
        <header className="space-y-4 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-gold">
            Limited Time
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold">
            Rare Offer for Discerning Drivers
          </h1>
          <p className="text-base sm:text-lg text-gray-200 max-w-3xl mx-auto">
            Premium, concierge-style automotive services crafted for clients who
            expect more—priority response, proactive maintenance, and
            white-glove support across every vehicle in your fleet.
          </p>
          <div className="flex justify-center gap-3">
            <Link
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gold text-navy font-semibold rounded-lg hover:bg-gold-light transition-all hover:shadow-lg hover:shadow-gold/50"
            >
              Chat With Us
            </Link>
            <Link
              href="/services"
              className="px-6 py-3 border border-white/20 text-white font-semibold rounded-lg hover:border-gold hover:text-gold transition-all"
            >
              Explore Pro Services
            </Link>
          </div>
        </header>

        <section className="grid gap-6 md:grid-cols-3">
          {[
            "Priority response & diagnostics",
            "Proactive maintenance scheduling",
            "Dedicated advisor access",
          ].map((item) => (
            <div
              key={item}
              className="glass p-6 rounded-xl border border-white/5"
            >
              <h3 className="text-xl font-semibold mb-2 text-gold">{item}</h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                Tailored attention with rapid turnaround, keeping your vehicles
                performing at their best while you stay in control.
              </p>
            </div>
          ))}
        </section>

        <section className="glass rounded-2xl border border-white/10 p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.2em] text-gold">
              White-Glove Access
            </p>
            <h2 className="text-2xl font-bold">
              Reserve your spot while availability lasts.
            </h2>
            <p className="text-gray-200 max-w-2xl">
              We cap enrollment to maintain concierge-level attention. Message
              us to secure priority onboarding and a bespoke service plan for
              your automobiles.
            </p>
          </div>
          <Link
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 bg-gold text-navy font-semibold rounded-lg hover:bg-gold-light transition-all hover:shadow-lg hover:shadow-gold/50 text-center"
          >
            Chat With Us Now
          </Link>
        </section>
      </section>
    </main>
  );
}
