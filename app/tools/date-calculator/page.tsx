"use client";

import { useState } from "react";

export default function DateCalculator() {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  let diffDays: number | null = null;
  if (start && end) {
    const s = new Date(start);
    const e = new Date(end);
    if (!isNaN(s.getTime()) && !isNaN(e.getTime())) {
      diffDays = Math.round((e.getTime() - s.getTime()) / (1000 * 60 * 60 * 24));
    }
  }

  return (
    <div className="max-w-xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-white mb-2">Date Difference Calculator</h1>
      <p className="text-gray-400 mb-8">Find the number of days between two dates.</p>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-300 mb-1">Start date</label>
          <input type="date" value={start} onChange={(e) => setStart(e.target.value)} className="w-full bg-zinc-900 border border-emerald-900/40 rounded-lg px-3 py-2 text-white" />
        </div>
        <div>
          <label className="block text-sm text-gray-300 mb-1">End date</label>
          <input type="date" value={end} onChange={(e) => setEnd(e.target.value)} className="w-full bg-zinc-900 border border-emerald-900/40 rounded-lg px-3 py-2 text-white" />
        </div>
      </div>

      <div className="mt-8 border border-emerald-900/40 rounded-xl p-6 bg-zinc-900/50">
        <p className="text-sm text-gray-400">Difference</p>
        <p className="text-3xl font-bold text-emerald-400">
          {diffDays !== null ? `${Math.abs(diffDays)} days` : "—"}
        </p>
      </div>
    </div>
  );
}
