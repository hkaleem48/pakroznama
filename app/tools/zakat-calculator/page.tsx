"use client";

import { useState } from "react";

const NISAB_GRAMS_GOLD = 87.48; // 7.5 tola, standard nisab threshold

export default function ZakatCalculator() {
  const [cash, setCash] = useState("");
  const [gold, setGold] = useState("");
  const [goldPricePerGram, setGoldPricePerGram] = useState("");
  const [debts, setDebts] = useState("");

  const cashVal = parseFloat(cash) || 0;
  const goldVal = parseFloat(gold) || 0;
  const goldPriceVal = parseFloat(goldPricePerGram) || 0;
  const debtsVal = parseFloat(debts) || 0;

  const goldValueInPkr = goldVal * goldPriceVal;
  const nisabValue = NISAB_GRAMS_GOLD * goldPriceVal;
  const totalWealth = cashVal + goldValueInPkr - debtsVal;
  const zakatDue = totalWealth >= nisabValue && totalWealth > 0 ? totalWealth * 0.025 : 0;
  const eligible = totalWealth >= nisabValue;

  return (
    <div className="max-w-2xl mx-auto px-4 py-10 text-white">
      <h1 className="text-3xl font-bold mb-2">Zakat Calculator</h1>
      <p className="text-gray-400 mb-8">
        Calculate your Zakat (2.5% of eligible wealth held above Nisab for one lunar year).
      </p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Cash & savings (PKR)</label>
          <input
            type="number"
            value={cash}
            onChange={(e) => setCash(e.target.value)}
            className="w-full bg-zinc-900 border border-emerald-900/40 rounded-lg px-3 py-2 text-white"
            placeholder="0"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Gold owned (grams)</label>
          <input
            type="number"
            value={gold}
            onChange={(e) => setGold(e.target.value)}
            className="w-full bg-zinc-900 border border-emerald-900/40 rounded-lg px-3 py-2 text-white"
            placeholder="0"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Current gold price per gram (PKR)</label>
          <input
            type="number"
            value={goldPricePerGram}
            onChange={(e) => setGoldPricePerGram(e.target.value)}
            className="w-full bg-zinc-900 border border-emerald-900/40 rounded-lg px-3 py-2 text-white"
            placeholder="e.g. 27000"
          />
          <p className="text-xs text-gray-500 mt-1">
            Check today&apos;s gold rate on our <a href="/rates" className="underline">Rates page</a>.
          </p>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Debts owed (PKR)</label>
          <input
            type="number"
            value={debts}
            onChange={(e) => setDebts(e.target.value)}
            className="w-full bg-zinc-900 border border-emerald-900/40 rounded-lg px-3 py-2 text-white"
            placeholder="0"
          />
        </div>
      </div>

      <div className="mt-8 border border-emerald-900/40 rounded-xl p-6 bg-zinc-900/50 bg-zinc-900/50 border border-emerald-900/40">
        <p className="text-sm text-gray-400">Nisab threshold (7.5 tola gold value)</p>
        <p className="text-xl font-semibold mb-3">
          {goldPriceVal ? `Rs ${nisabValue.toLocaleString()}` : "Enter gold price above"}
        </p>
        <p className="text-sm text-gray-400">Zakat eligible</p>
        <p className="text-xl font-semibold mb-3">{eligible ? "Yes" : "No"}</p>
        <p className="text-sm text-gray-400">Zakat due (2.5%)</p>
        <p className="text-3xl font-bold text-emerald-700">
          Rs {zakatDue.toLocaleString(undefined, { maximumFractionDigits: 0 })}
        </p>
      </div>

      <section className="prose max-w-none mt-10 text-sm text-gray-400">
        <h2>How Zakat is calculated</h2>
        <p>
          Zakat is due at 2.5% of total zakatable wealth (cash, gold, silver,
          and business assets, minus short-term debts) held for one full
          lunar year, provided the total meets or exceeds the Nisab
          threshold — the value of 87.48 grams of gold. This calculator is
          for general guidance; consult a scholar for your specific
          situation.
        </p>
      </section>
    </div>
  );
}
