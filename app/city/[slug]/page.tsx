import type { Metadata } from "next";
import { notFound } from "next/navigation";

const CITIES: Record<string, { name: string; province: string; population: string }> = {
  karachi: { name: "Karachi", province: "Sindh", population: "~16 million" },
  lahore: { name: "Lahore", province: "Punjab", population: "~13 million" },
  islamabad: { name: "Islamabad", province: "Federal Capital", population: "~1.1 million" },
  faisalabad: { name: "Faisalabad", province: "Punjab", population: "~3.7 million" },
  rawalpindi: { name: "Rawalpindi", province: "Punjab", population: "~2.1 million" },
  multan: { name: "Multan", province: "Punjab", population: "~2 million" },
  peshawar: { name: "Peshawar", province: "Khyber Pakhtunkhwa", population: "~2 million" },
  quetta: { name: "Quetta", province: "Balochistan", population: "~1.1 million" },
};

export function generateStaticParams() {
  return Object.keys(CITIES).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const city = CITIES[params.slug];
  if (!city) return {};
  return {
    title: `${city.name} — Gold Rate, Weather, Jobs & Info Today`,
    description: `Today's gold rate, weather, and latest jobs in ${city.name}, ${city.province}. Updated daily on PakRoznama.`,
    alternates: { canonical: `/city/${params.slug}` },
  };
}

export default function CityPage({ params }: { params: { slug: string } }) {
  const city = CITIES[params.slug];
  if (!city) return notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-white mb-1">{city.name}</h1>
      <p className="text-gray-400 mb-8">
        {city.province} · Population {city.population}
      </p>

      <div className="grid sm:grid-cols-3 gap-4 mb-10">
        <a href="/rates" className="border border-emerald-900/40 rounded-xl p-4 hover:border-emerald-500">
          <p className="text-sm text-gray-400">Gold &amp; Currency Rates</p>
          <p className="text-emerald-400 text-sm mt-1">View today&apos;s rates →</p>
        </a>
        <a href="/weather" className="border border-emerald-900/40 rounded-xl p-4 hover:border-emerald-500">
          <p className="text-sm text-gray-400">Weather in {city.name}</p>
          <p className="text-emerald-400 text-sm mt-1">Check forecast →</p>
        </a>
        <a href="/jobs" className="border border-emerald-900/40 rounded-xl p-4 hover:border-emerald-500">
          <p className="text-sm text-gray-400">Jobs in {city.name}</p>
          <p className="text-emerald-400 text-sm mt-1">Browse listings →</p>
        </a>
      </div>

      <section className="prose prose-invert max-w-none text-gray-300 text-sm">
        <p>
          {city.name} is one of {city.province}&apos;s major cities. This page
          links out to live rate, weather and job data relevant to
          {" "}{city.name} residents — each section pulls from the same live
          data source used across PakRoznama, filtered to what matters
          locally.
        </p>
      </section>
    </div>
  );
}
