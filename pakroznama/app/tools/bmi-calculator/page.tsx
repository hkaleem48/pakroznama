"use client";

import { useState } from "react";

export default function BmiCalculator() {
  const [height, setHeight] = useState("170");
  const [weight, setWeight] = useState("70");

  const h = (parseFloat(height) || 0) / 100;
  const w = parseFloat(weight) || 0;
  const bmi = h > 0 ? w / (h * h) : 0;

  let category = "";
  if (bmi > 0) {
    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 25) category = "Normal weight";
    else if (bmi < 30) category = "Overweight";
    else category = "Obese";
  }

  return (
    <div className="max-w-xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-white mb-2">BMI Calculator</h1>
      <p className="text-gray-400 mb-8">Calculate your Body Mass Index.</p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm text-gray-300 mb-1">Height (cm)</label>
          <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} className="w-full bg-zinc-900 border border-emerald-900/40 rounded-lg px-3 py-2 text-white" />
        </div>
        <div>
          <label className="block text-sm text-gray-300 mb-1">Weight (kg)</label>
          <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} className="w-full bg-zinc-900 border border-emerald-900/40 rounded-lg px-3 py-2 text-white" />
        </div>
      </div>

      <div className="mt-8 border border-emerald-900/40 rounded-xl p-6 bg-zinc-900/50">
        <p className="text-sm text-gray-400">Your BMI</p>
        <p className="text-3xl font-bold text-emerald-400">{bmi > 0 ? bmi.toFixed(1) : "—"}</p>
        <p className="text-sm text-gray-400 mt-1">{category}</p>
      </div>
      <p className="text-xs text-gray-500 mt-4">
        BMI is a general screening tool, not a diagnosis. Consult a doctor for a full health assessment.
      </p>
    </div>
  );
}
