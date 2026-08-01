import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pakistan Cities — Rates, Weather & Jobs by City",
  description: "Browse gold rates, weather, and jobs for major Pakistani cities.",
  alternates: { canonical: "/city" },
};

const CITIES = [
  "karachi", "lahore", "islamabad", "faisalabad",
  "rawalpindi", "multan", "peshawar", "quetta",
];

export default function CityIndex() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-white mb-6">Browse by City</h1>
      <div className="grid sm:grid-cols-3 gap-3">
        {CITIES.map((slug) => (
          <Link
            key={slug}
            href={`/city/${slug}`}
            className="border border-emerald-900/40 rounded-lg p-3 text-center capitalize hover:border-emerald-500 text-gray-200"
          >
            {slug}
          </Link>
        ))}
      </div>
    </div>
  );
}
