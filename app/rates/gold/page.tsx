import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gold Rate in Pakistan Today — 24K Per Tola & Gram",
  description: "Today's live gold rate in Pakistan, per tola and per gram, updated hourly.",
  alternates: { canonical: "/rates/gold" },
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

export default async function GoldRatePage() {
  const rates = await getRates();
  const gold = rates?.gold;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-white mb-2">Gold Rate in Pakistan Today</h1>
      <p className="text-gray-400 mb-8">
        Last updated: {rates?.updatedAt ? new Date(rates.updatedAt).toLocaleString("en-PK") : "—"}
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        <div className="border border-emerald-900/40 rounded-xl p-6 bg-zinc-900/50">
          <p className="text-sm text-gray-400">Per Tola (24K)</p>
          <p className="text-3xl font-bold text-emerald-400 mt-1">
            {gold?.available ? `Rs ${Math.round(gold.perTola).toLocaleString()}` : "Unavailable"}
          </p>
        </div>
        <div className="border border-emerald-900/40 rounded-xl p-6 bg-zinc-900/50">
          <p className="text-sm text-gray-400">Per Gram (24K)</p>
          <p className="text-3xl font-bold text-emerald-400 mt-1">
            {gold?.available ? `Rs ${Math.round(gold.perGram).toLocaleString()}` : "Unavailable"}
          </p>
        </div>
      </div>

      <section className="prose prose-invert max-w-none">
        <h2>How this rate is calculated</h2>
        <p>
          This rate converts the live international gold spot price (per
          troy ounce) into PKR per tola and per gram, using the current
          USD to PKR exchange rate. It reflects the international
          benchmark and may run slightly ahead of or behind your local
          jeweller&apos;s posted rate, which includes making charges and a
          local market premium.
        </p>
        <p>
          Want to know what your gold is worth?{" "}
          <a href="/tools/gold-calculator" className="text-emerald-400">Try the Gold Value Calculator →</a>
        </p>
      </section>
    </div>
  );
}
