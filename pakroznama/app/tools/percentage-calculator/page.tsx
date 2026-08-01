"use client";

import { useState } from "react";

export default function PercentageCalculator() {
  const [obtained, setObtained] = useState("850");
  const [total, setTotal] = useState("1100");

  const o = parseFloat(obtained) || 0;
  const t = parseFloat(total) || 0;
  const pct = t > 0 ? (o / t) * 100 : 0;

  return (
    <div className="max-w-xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-white mb-2">Percentage Calculator</h1>
      <p className="text-gray-400 mb-8">
        Calculate your exam or test percentage from marks obtained and total marks.
      </p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm text-gray-300 mb-1">Marks obtained</label>
          <input type="number" value={obtained} onChange={(e) => setObtained(e.target.value)} className="w-full bg-zinc-900 border border-emerald-900/40 rounded-lg px-3 py-2 text-white" />
        </div>
        <div>
          <label className="block text-sm text-gray-300 mb-1">Total marks</label>
          <input type="number" value={total} onChange={(e) => setTotal(e.target.value)} className="w-full bg-zinc-900 border border-emerald-900/40 rounded-lg px-3 py-2 text-white" />
        </div>
      </div>

      <div className="mt-8 border border-emerald-900/40 rounded-xl p-6 bg-zinc-900/50">
        <p className="text-sm text-gray-400">Percentage</p>
        <p className="text-3xl font-bold text-emerald-400">{pct.toFixed(2)}%</p>
      </div>
    </div>
  );
}
