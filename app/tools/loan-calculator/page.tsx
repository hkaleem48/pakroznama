"use client";

import { useState } from "react";

export default function LoanCalculator() {
  const [principal, setPrincipal] = useState("100000");
  const [rate, setRate] = useState("12");
  const [months, setMonths] = useState("12");

  const p = parseFloat(principal) || 0;
  const annualRate = parseFloat(rate) || 0;
  const n = parseFloat(months) || 0;
  const r = annualRate / 12 / 100;

  const emi = r > 0 && n > 0 ? (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1) : n > 0 ? p / n : 0;
  const totalPayment = emi * n;
  const totalInterest = totalPayment - p;

  return (
    <div className="max-w-xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-white mb-2">Loan / EMI Calculator</h1>
      <p className="text-gray-400 mb-8">Calculate your monthly installment on any loan.</p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm text-gray-300 mb-1">Loan amount (PKR)</label>
          <input type="number" value={principal} onChange={(e) => setPrincipal(e.target.value)} className="w-full bg-zinc-900 border border-emerald-900/40 rounded-lg px-3 py-2 text-white" />
        </div>
        <div>
          <label className="block text-sm text-gray-300 mb-1">Annual interest rate (%)</label>
          <input type="number" value={rate} onChange={(e) => setRate(e.target.value)} className="w-full bg-zinc-900 border border-emerald-900/40 rounded-lg px-3 py-2 text-white" />
        </div>
        <div>
          <label className="block text-sm text-gray-300 mb-1">Loan term (months)</label>
          <input type="number" value={months} onChange={(e) => setMonths(e.target.value)} className="w-full bg-zinc-900 border border-emerald-900/40 rounded-lg px-3 py-2 text-white" />
        </div>
      </div>

      <div className="mt-8 border border-emerald-900/40 rounded-xl p-6 bg-zinc-900/50 space-y-2">
        <p className="text-sm text-gray-400">Monthly installment</p>
        <p className="text-3xl font-bold text-emerald-400">Rs {emi.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
        <p className="text-sm text-gray-400 pt-2">Total interest: Rs {totalInterest.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
        <p className="text-sm text-gray-400">Total payment: Rs {totalPayment.toLocaleString(undefined, { maximumFractionDigits: 0 })}</p>
      </div>
    </div>
  );
}
