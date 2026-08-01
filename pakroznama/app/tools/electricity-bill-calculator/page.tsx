"use client";

import { useState } from "react";

export default function ElectricityBillCalculator() {
  const [units, setUnits] = useState("300");
  const [ratePerUnit, setRatePerUnit] = useState("45");

  const u = parseFloat(units) || 0;
  const r = parseFloat(ratePerUnit) || 0;
  const estimate = u * r;

  return (
    <div className="max-w-xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-white mb-2">Electricity Bill Estimator</h1>
      <p className="text-gray-400 mb-8">
        Estimate your bill from units consumed and your per-unit rate.
      </p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm text-gray-300 mb-1">Units consumed (kWh)</label>
          <input type="number" value={units} onChange={(e) => setUnits(e.target.value)} className="w-full bg-zinc-900 border border-emerald-900/40 rounded-lg px-3 py-2 text-white" />
        </div>
        <div>
          <label className="block text-sm text-gray-300 mb-1">Rate per unit (PKR)</label>
          <input type="number" value={ratePerUnit} onChange={(e) => setRatePerUnit(e.target.value)} className="w-full bg-zinc-900 border border-emerald-900/40 rounded-lg px-3 py-2 text-white" />
          <p className="text-xs text-gray-500 mt-1">
            Check your latest per-unit rate on <a href="/rates/electricity" className="text-emerald-400">our tariff page</a> — DISCO slab rates change frequently, so we don&apos;t hardcode a number here.
          </p>
        </div>
      </div>

      <div className="mt-8 border border-emerald-900/40 rounded-xl p-6 bg-zinc-900/50">
        <p className="text-sm text-gray-400">Estimated bill (before taxes &amp; fixed charges)</p>
        <p className="text-3xl font-bold text-emerald-400">Rs {estimate.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
      </div>
      <p className="text-xs text-gray-500 mt-4">
        Actual bills include taxes, fixed charges, and fuel price adjustments not captured here — use this for a rough estimate only.
      </p>
    </div>
  );
}
