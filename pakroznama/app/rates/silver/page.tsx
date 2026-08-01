import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Silver Rate in Pakistan Today — Per Tola & Gram",
  description: "Today's live silver rate in Pakistan, per tola and per gram, updated hourly.",
  alternates: { canonical: "/rates/silver" },
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

export default async function SilverRatePage() {
  const rates = await getRates();
  const silver = rates?.silver;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-white mb-2">Silver Rate in Pakistan Today</h1>
      <p className="text-gray-400 mb-8">
        Last updated: {rates?.updatedAt ? new Date(rates.updatedAt).toLocaleString("en-PK") : "—"}
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        <div className="border border-emerald-900/40 rounded-xl p-6 bg-zinc-900/50">
          <p className="text-sm text-gray-400">Per Tola</p>
          <p className="text-3xl font-bold text-emerald-400 mt-1">
            {silver?.available ? `Rs ${Math.round(silver.perTola).toLocaleString()}` : "Unavailable"}
          </p>
        </div>
        <div className="border border-emerald-900/40 rounded-xl p-6 bg-zinc-900/50">
          <p className="text-sm text-gray-400">Per Gram</p>
          <p className="text-3xl font-bold text-emerald-400 mt-1">
            {silver?.available ? `Rs ${Math.round(silver.perGram).toLocaleString()}` : "Unavailable"}
          </p>
        </div>
      </div>

      <section className="prose prose-invert max-w-none">
        <h2>How this rate is calculated</h2>
        <p>
          Converted from the live international silver spot price into PKR
          per tola and gram using the current USD to PKR rate. Local
          jeweller prices may vary slightly due to making charges.
        </p>
      </section>
    </div>
  );
}
