"use client";

import { useEffect, useState } from "react";

export default function GoldCalculator() {
  const [grams, setGrams] = useState("1");
  const [perGram, setPerGram] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/rates")
      .then((r) => r.json())
      .then((d) => setPerGram(d?.gold?.available ? d.gold.perGram : null))
      .catch(() => setPerGram(null));
  }, []);

  const value = perGram ? (parseFloat(grams) || 0) * perGram : null;

  return (
    <div className="max-w-xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-white mb-2">Gold Value Calculator</h1>
      <p className="text-gray-400 mb-8">
        Find out what your gold is worth today, based on live 24K rates.
      </p>

      <label className="block text-sm text-gray-300 mb-1">Weight (grams)</label>
      <input
        type="number"
        value={grams}
        onChange={(e) => setGrams(e.target.value)}
        className="w-full bg-zinc-900 border border-emerald-900/40 rounded-lg px-3 py-2 text-white"
      />

      <div className="mt-8 border border-emerald-900/40 rounded-xl p-6 bg-zinc-900/50">
        <p className="text-sm text-gray-400">Estimated value (24K)</p>
        <p className="text-3xl font-bold text-emerald-400">
          {value !== null ? `Rs ${Math.round(value).toLocaleString()}` : "Live rate unavailable"}
        </p>
        <p className="text-xs text-gray-500 mt-2">
          Based on today&apos;s <a href="/rates/gold" className="text-emerald-400">gold rate</a>. Actual jeweller buy-back prices may be lower due to making-charge deductions.
        </p>
      </div>
    </div>
  );
}
