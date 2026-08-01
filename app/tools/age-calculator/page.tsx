"use client";

import { useState } from "react";

export default function AgeCalculator() {
  const [dob, setDob] = useState("");

  let result: { years: number; months: number; days: number } | null = null;
  if (dob) {
    const birth = new Date(dob);
    const now = new Date();
    if (!isNaN(birth.getTime()) && birth <= now) {
      let years = now.getFullYear() - birth.getFullYear();
      let months = now.getMonth() - birth.getMonth();
      let days = now.getDate() - birth.getDate();
      if (days < 0) {
        months -= 1;
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
      }
      if (months < 0) {
        years -= 1;
        months += 12;
      }
      result = { years, months, days };
    }
  }

  return (
    <div className="max-w-xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-white mb-2">Age Calculator</h1>
      <p className="text-gray-400 mb-8">Enter your date of birth to calculate your exact age.</p>

      <label className="block text-sm font-medium text-gray-300 mb-1">Date of birth</label>
      <input
        type="date"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
        max={new Date().toISOString().split("T")[0]}
        className="w-full bg-zinc-900 border border-emerald-900/40 rounded-lg px-3 py-2 text-white"
      />

      {result && (
        <div className="mt-8 border border-emerald-900/40 rounded-xl p-6 bg-zinc-900/50">
          <p className="text-3xl font-bold text-emerald-400">
            {result.years} years, {result.months} months, {result.days} days
          </p>
        </div>
      )}
    </div>
  );
}
