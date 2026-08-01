import Link from "next/link";
import NewspapersWidget from "@/components/NewspapersWidget";
import RatesWidget from "@/components/RatesWidget";
import WeatherWidget from "@/components/WeatherWidget";
import WordClock from "@/components/WordClock";

const CATEGORIES = [
  { href: "/rates", title: "Daily Rates", desc: "Gold, silver, currency & petrol — live." },
  { href: "/government/8171", title: "8171 BISP Check", desc: "How to check your Ehsaas/BISP status." },
  { href: "/jobs", title: "Jobs", desc: "Government & private listings, updated daily." },
  { href: "/results", title: "Results & Roll Slips", desc: "Exam results and roll number lookups." },
  { href: "/newspapers", title: "Newspapers", desc: "Today's headlines from major Pakistani papers." },
  { href: "/city", title: "Cities", desc: "Rates, weather & jobs by city." },
  { href: "/education", title: "Education", desc: "Admissions, scholarships, cadet colleges & past papers." },
  { href: "/tools", title: "Free Tools", desc: "Zakat, loan, age & unit calculators." },
  { href: "/weather", title: "Weather", desc: "Live weather across Pakistan." },
  { href: "/blog", title: "Blog", desc: "Guides on rates, jobs, results & more." },
  { href: "/magazines", title: "Magazines", desc: "Popular Pakistani magazines, official links." },
  { href: "/library", title: "Free Book Library", desc: "60+ public-domain classics, free & legal." },
  { href: "/government/emergency-services", title: "Emergency Helplines", desc: "1122, Police 15, Edhi & more." },
];

export default function HomePage() {
  return (
    <div>
      <section className="aurora-bg border-b border-emerald-900/40">
        <div className="max-w-7xl mx-auto px-4 py-10 relative z-10">
          <div className="mb-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-1">
              Pakistan&apos;s Daily Info Hub
            </h1>
            <WordClock />
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-5">
            <NewspapersWidget />
            <WeatherWidget />
            <RatesWidget />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-xl font-semibold text-white mb-6">Explore</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {CATEGORIES.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="border border-emerald-900/40 rounded-xl p-4 hover:border-emerald-500 transition-colors bg-zinc-900/40"
            >
              <h3 className="font-semibold text-white text-sm">{c.title}</h3>
              <p className="text-xs text-gray-400 mt-1">{c.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
