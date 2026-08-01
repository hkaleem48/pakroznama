"use client";

import { useEffect, useState } from "react";

type RatesResponse = {
  success: boolean;
  updatedAt?: string;
  currency?: { usdToPkr: number | null; source: string | null };
  gold?: { available: boolean; perTola?: number; perGram?: number; note?: string };
  silver?: { available: boolean; perTola?: number; perGram?: number; note?: string };
};

export default function RatesWidget() {
  const [data, setData] = useState<RatesResponse | null>(null);
  const [amount, setAmount] = useState("1");

  useEffect(() => {
    fetch("/api/rates")
      .then((r) => r.json())
      .then(setData)
      .catch(() => setData({ success: false }));
  }, []);

  const usdToPkr = data?.currency?.usdToPkr ?? null;
  const converted = usdToPkr ? (parseFloat(amount) || 0) * usdToPkr : null;

  return (
    <aside className="bg-zinc-900/70 border border-emerald-900/40 rounded-xl p-4 space-y-4">
      <div>
        <h2 className="text-sm font-semibold text-emerald-400 uppercase tracking-wide mb-3">
          Live Rates
        </h2>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-400">USD → PKR</span>
            <span className="font-mono text-white">
              {usdToPkr ? `Rs ${Math.round(usdToPkr)}` : "…"}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Gold (24k/tola)</span>
            <span className="font-mono text-white">
              {data?.gold?.available && data.gold.perTola
                ? `Rs ${Math.round(data.gold.perTola).toLocaleString()}`
                : <span className="text-gray-500 text-xs">unavailable</span>}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Silver (per tola)</span>
            <span className="font-mono text-white">
              {data?.silver?.available && data.silver.perTola
                ? `Rs ${Math.round(data.silver.perTola).toLocaleString()}`
                : <span className="text-gray-500 text-xs">unavailable</span>}
            </span>
          </div>
        </div>
        <a href="/rates" className="text-xs text-emerald-500 hover:underline block mt-2">
          View all rates →
        </a>
      </div>

      <div className="border-t border-emerald-900/40 pt-4">
        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
          Quick Converter
        </h3>
        <div className="flex items-center gap-2 text-sm">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-20 bg-black/40 border border-emerald-900/40 rounded px-2 py-1 text-white"
          />
          <span className="text-gray-400">USD =</span>
        </div>
        <p className="mt-2 font-mono text-emerald-400">
          {converted !== null ? `Rs ${converted.toLocaleString(undefined, { maximumFractionDigits: 0 })}` : "—"}
        </p>
      </div>
    </aside>
  );
}
