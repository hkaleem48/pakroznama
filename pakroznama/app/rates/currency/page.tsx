import type { Metadata } from "next";
import RatesWidget from "@/components/RatesWidget";

export const metadata: Metadata = {
  title: "Currency Rates in Pakistan — USD, EUR, GBP, SAR to PKR",
  description: "Live currency exchange rates and converter for Pakistan.",
  alternates: { canonical: "/rates/currency" },
};

export default function CurrencyRatePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-white mb-2">Currency Rates in Pakistan</h1>
      <p className="text-gray-400 mb-8">
        Live USD to PKR rate with converter below. More currencies (EUR,
        GBP, SAR, AED) are next once the upstream feed is expanded.
      </p>
      <div className="max-w-sm">
        <RatesWidget />
      </div>
    </div>
  );
}
