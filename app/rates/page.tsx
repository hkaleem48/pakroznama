import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Today's Gold, Dollar & Petrol Rate in Pakistan",
  description:
    "Check today's gold rate, USD to PKR exchange rate, and petrol price in Pakistan. Updated hourly.",
  alternates: { canonical: "/rates" },
};

async function getRates() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  try {
    const res = await fetch(`${base}/api/rates`, { next: { revalidate: 3600 } });
    return res.json();
  } catch {
    return { success: false };
  }
}

export default async function RatesPage() {
  const rates = await getRates();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is today's dollar rate in Pakistan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: rates?.currency?.usdToPkr
            ? `1 USD is currently around ${rates.currency.usdToPkr} PKR based on the latest available rate.`
            : "Rate data is temporarily unavailable, please check back shortly.",
        },
      },
      {
        "@type": "Question",
        name: "How often are these rates updated?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Currency rates on this page refresh hourly from live market data.",
        },
      },
    ],
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <h1 className="text-3xl font-bold mb-2">
        Today&apos;s Gold, Dollar &amp; Petrol Rate in Pakistan
      </h1>
      <p className="text-gray-400 mb-8">
        Last updated: {rates?.updatedAt ? new Date(rates.updatedAt).toLocaleString("en-PK") : "—"}
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        <div className="border border-emerald-900/40 rounded-xl p-6 bg-zinc-900/50">
          <h2 className="text-sm text-gray-400 uppercase tracking-wide">USD to PKR</h2>
          <p className="text-3xl font-bold mt-1">
            {rates?.currency?.usdToPkr ? `Rs ${Math.round(rates.currency.usdToPkr)}` : "Unavailable"}
          </p>
        </div>
        <div className="border border-emerald-900/40 rounded-xl p-6 bg-zinc-900/50">
          <h2 className="text-sm text-gray-400 uppercase tracking-wide">Gold (24k, per tola)</h2>
          <p className="text-3xl font-bold mt-1 text-gray-400">Connect metals API</p>
          <p className="text-xs text-gray-500 mt-1">
            {rates?.gold?.note}
          </p>
        </div>
      </div>

      <section className="prose prose-invert max-w-none">
        <h2>How this rate is calculated</h2>
        <p>
          The USD to PKR rate above is pulled directly from a live currency
          market feed and refreshes every hour. It reflects the interbank
          reference rate and may differ slightly from the rate offered by
          your local currency exchange or bank.
        </p>
      </section>
    </div>
  );
}
