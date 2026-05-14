"use client";
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function ReviewsPage() {
  const yearsInBusiness = new Date().getFullYear() - 1998;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": "Best Auto Repair",
    "description": "See recent work, customer stories, our promise, and how to get in touch.",
    "url": "https://bestautorepairpdx.com/reviews",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "4222 NE Martin Luther King Jr Blvd",
      "addressLocality": "Portland",
      "addressRegion": "OR",
      "postalCode": "97211"
    },
    "telephone": "(503) 287-5715"
  };

  return (
    <>
      <Head>
        <title>Our Work & Customer Stories | Best Auto Repair Portland | Auto Repair</title>
        <meta name="description" content="Not many reviews? No problem. Explore our recent work, real customer stories, and our 12-month/12,000-mile warranty. Serving Portland drivers since 1998." />
        <meta name="keywords" content="auto repair Portland, Best Auto Repair work, customer stories, Portland mechanics, ASE certified, warranty" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Our Work & Customer Stories | Best Auto Repair Portland" />
        <meta property="og:description" content="See recent work, customer stories, and our promise. Family-owned auto repair in Portland since 1998." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bestautorepairpdx.com/reviews" />
        <meta property="og:image" content="/logo.png" />
        <link rel="canonical" href="https://bestautorepairpdx.com/reviews" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      </Head>

      <main className="bg-gray-50">
        {/* Section 1: Intro */}
        <section className="bg-black text-white py-16">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide mb-4">OUR WORK SPEAKS FOR ITSELF</h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              At <span className="font-semibold">Best Auto Repair</span>, we know your car is more than just transportation — it’s your daily freedom. That’s why we treat every repair as if it were our own. For over {yearsInBusiness}+ years, we’ve been helping drivers in Portland get back on the road safely and confidently.
            </p>
          </div>
        </section>

        {/* Section 2: Before & After Highlights / Recent Work */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Recent Work in the Shop</h2>
            <p className="text-gray-600">Showcasing real fixes we handle every day.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="p-6 card-angled overflow-hidden" style={{ background: 'linear-gradient(to top, rgba(135,135,135,0.15), rgba(196,196,196,0))' }}>
              <h3 className="font-semibold text-gray-900 mb-2">Brake Replacement</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Customer arrived with squealing brakes. We replaced worn pads and rotors, restoring confident, safe stopping power.</p>
            </div>
            <div className="p-6 card-angled overflow-hidden" style={{ background: 'linear-gradient(to top, rgba(135,135,135,0.15), rgba(196,196,196,0))' }}>
              <h3 className="font-semibold text-gray-900 mb-2">Engine Diagnostics</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Check engine light diagnosed and resolved within 24 hours — no unnecessary parts, no guesswork.</p>
            </div>
            <div className="p-6 card-angled overflow-hidden" style={{ background: 'linear-gradient(to top, rgba(135,135,135,0.15), rgba(196,196,196,0))' }}>
              <h3 className="font-semibold text-gray-900 mb-2">Transmission Repair</h3>
              <p className="text-gray-700 text-sm leading-relaxed">Family van was slipping gears. After repair and service, it now shifts smoothly like new.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="w-full h-56 relative card-angled overflow-hidden">
              <Image src="/brake_replacement.png" alt="Brake Replacement" fill sizes="33vw" className="object-cover" />
            </div>
            <div className="w-full h-56 relative card-angled overflow-hidden">
              <Image src="/Engine_Diagnostics.png" alt="Engine Diagnostics" fill sizes="33vw" className="object-cover" />
            </div>
            <div className="w-full h-56 relative card-angled overflow-hidden">
              <Image src="/transmission_repair.png" alt="Transmission Repair" fill sizes="33vw" className="object-cover" />
            </div>
          </div>
        </section>

        {/* Section 3: Customer Stories */}
        <section className="bg-white py-16">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Customer Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 card-angled overflow-hidden" style={{ background: 'linear-gradient(to top, rgba(135,135,135,0.12), rgba(196,196,196,0))' }}>
                <div className="text-4xl text-gray-300 leading-none mb-3">“</div>
                <p className="text-gray-700 mb-4">The team explained everything clearly and got me back on the road quickly.</p>
                <p className="text-sm text-gray-600">— Local Customer, Portland</p>
              </div>
              <div className="p-6 card-angled overflow-hidden" style={{ background: 'linear-gradient(to top, rgba(135,135,135,0.12), rgba(196,196,196,0))' }}>
                <div className="text-4xl text-gray-300 leading-none mb-3">“</div>
                <p className="text-gray-700 mb-4">Fair pricing and honest advice. I’ll be bringing my truck back here.</p>
                <p className="text-sm text-gray-600">— Longtime Customer</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Our Promise / Guarantee */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Promise</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 text-center card-angled overflow-hidden bg-white">
                <div className="text-2xl mb-2">🚘</div>
                <p className="font-semibold text-gray-900">12-Month / 12,000-Mile Warranty</p>
              </div>
              <div className="p-6 text-center card-angled overflow-hidden bg-white">
                <div className="text-2xl mb-2">🛠️</div>
                <p className="font-semibold text-gray-900">Certified Mechanics You Can Trust</p>
              </div>
              <div className="p-6 text-center card-angled overflow-hidden bg-white">
                <div className="text-2xl mb-2">💡</div>
                <p className="font-semibold text-gray-900">Clear, Honest Explanations Before Work Begins</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Stats & Credibility */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Why Local Drivers Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 text-center card-angled overflow-hidden" style={{ background: 'linear-gradient(to top, rgba(135,135,135,0.12), rgba(196,196,196,0))' }}>
                <p className="text-lg font-semibold text-gray-900">Serving Portland since 1998</p>
              </div>
              <div className="p-6 text-center card-angled overflow-hidden" style={{ background: 'linear-gradient(to top, rgba(135,135,135,0.12), rgba(196,196,196,0))' }}>
                <p className="text-lg font-semibold text-gray-900">Over 1,000 vehicles repaired</p>
              </div>
              <div className="p-6 text-center card-angled overflow-hidden" style={{ background: 'linear-gradient(to top, rgba(135,135,135,0.12), rgba(196,196,196,0))' }}>
                <p className="text-lg font-semibold text-gray-900">Family-owned and operated</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Call-to-Action */}
        <section className="bg-black text-white py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to get your car running like new?</h2>
            <p className="text-xl text-gray-300 mb-8">Call now or schedule service online — we’ll take it from here.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <span className="btn-wrapper">
                <a href="tel:+15032875715" className="font-bold py-3 px-8 transition-colors btn-angled">CALL (503) 287-5715</a>
              </span>
              <span className="btn-wrapper">
                <a href="/contact" className="font-bold py-3 px-8 transition-colors btn-angled">SCHEDULE SERVICE</a>
              </span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
