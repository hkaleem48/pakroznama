"use client";

import { useState } from "react";

const UNITS: Record<string, Record<string, number>> = {
  length: { meter: 1, kilometer: 1000, mile: 1609.34, foot: 0.3048, inch: 0.0254 },
  weight: { kilogram: 1, gram: 0.001, pound: 0.453592, tola: 0.011664 },
  volume: { liter: 1, milliliter: 0.001, gallon: 3.78541 },
};

export default function UnitConverter() {
  const [category, setCategory] = useState<keyof typeof UNITS>("length");
  const units = Object.keys(UNITS[category]);
  const [from, setFrom] = useState(units[0]);
  const [to, setTo] = useState(units[1]);
  const [value, setValue] = useState("1");

  const val = parseFloat(value) || 0;
  const base = val * UNITS[category][from];
  const result = base / UNITS[category][to];

  function handleCategoryChange(c: keyof typeof UNITS) {
    setCategory(c);
    const u = Object.keys(UNITS[c]);
    setFrom(u[0]);
    setTo(u[1]);
  }

  return (
    <div className="max-w-xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-white mb-2">Unit Converter</h1>
      <p className="text-gray-400 mb-8">Convert length, weight, and volume units instantly.</p>

      <div className="flex gap-2 mb-4">
        {(Object.keys(UNITS) as (keyof typeof UNITS)[]).map((c) => (
          <button
            key={c}
            onClick={() => handleCategoryChange(c)}
            className={`px-3 py-1 rounded-full text-sm capitalize border ${
              category === c ? "bg-emerald-600 border-emerald-600 text-white" : "border-emerald-900/40 text-gray-300"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div>
          <input type="number" value={value} onChange={(e) => setValue(e.target.value)} className="w-full bg-zinc-900 border border-emerald-900/40 rounded-lg px-3 py-2 text-white mb-2" />
          <select value={from} onChange={(e) => setFrom(e.target.value)} className="w-full bg-zinc-900 border border-emerald-900/40 rounded-lg px-3 py-2 text-white capitalize">
            {units.map((u) => <option key={u} value={u}>{u}</option>)}
          </select>
        </div>
        <div>
          <p className="text-2xl font-bold text-emerald-400 mb-2">{result.toLocaleString(undefined, { maximumFractionDigits: 4 })}</p>
          <select value={to} onChange={(e) => setTo(e.target.value)} className="w-full bg-zinc-900 border border-emerald-900/40 rounded-lg px-3 py-2 text-white capitalize">
            {units.map((u) => <option key={u} value={u}>{u}</option>)}
          </select>
        </div>
      </div>
    </div>
  );
}
