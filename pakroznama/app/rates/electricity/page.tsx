import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electricity Tariff in Pakistan — Per Unit Rate by Slab",
  description: "Electricity per-unit tariff rates in Pakistan by consumption slab, and how NEPRA sets them.",
  alternates: { canonical: "/rates/electricity" },
};

export default function ElectricityTariffPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 prose prose-invert">
      <h1>Electricity Tariff in Pakistan</h1>
      <p>
        Electricity rates in Pakistan are set by NEPRA and vary by DISCO
        (your regional distribution company) and consumption slab. Because
        these change with fuel cost adjustments almost monthly, we don't
        hardcode a number here — check your latest bill or your DISCO's
        official notification for the current per-unit rate, then use our{" "}
        <a href="/tools/electricity-bill-calculator" className="text-emerald-400">
          Electricity Bill Estimator
        </a>{" "}
        to estimate your next bill.
      </p>
    </div>
  );
}
