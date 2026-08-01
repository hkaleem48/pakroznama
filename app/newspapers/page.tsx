import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pakistan Newspapers Today — Dawn, Jang, The News & More",
  description: "Links to today's editions of major Pakistani newspapers, in one place.",
  alternates: { canonical: "/newspapers" },
};

const PAPERS = [
  { name: "Dawn News", url: "https://www.dawn.com", lang: "English" },
  { name: "The News International", url: "https://www.thenews.com.pk", lang: "English" },
  { name: "Jang", url: "https://jang.com.pk", lang: "Urdu" },
  { name: "Express Tribune", url: "https://tribune.com.pk", lang: "English" },
  { name: "Nawaiwaqt", url: "https://www.nawaiwaqt.com.pk", lang: "Urdu" },
  { name: "Business Recorder", url: "https://www.brecorder.com", lang: "English" },
  { name: "Daily Ummat", url: "https://www.ummat.net", lang: "Urdu" },
  { name: "Pakistan Observer", url: "https://pakobserver.net", lang: "English" },
  { name: "Ausaf", url: "https://dailyausaf.com", lang: "Urdu" },
];

export default function NewspapersPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-white mb-2">Pakistan Newspapers Today</h1>
      <p className="text-gray-400 mb-8">
        Direct links to major Pakistani newspapers&apos; official sites. We
        don&apos;t reproduce their articles — click through to read the
        original reporting.
      </p>
      <ul className="divide-y divide-emerald-900/30 border border-emerald-900/40 rounded-xl overflow-hidden">
        {PAPERS.map((p) => (
          <li key={p.url} className="p-4 flex justify-between items-center hover:bg-zinc-900/50">
            <span className="text-gray-200">{p.name}</span>
            <span className="text-xs text-gray-500 mr-3">{p.lang}</span>
            <a href={p.url} target="_blank" rel="noopener noreferrer nofollow" className="text-emerald-400 text-sm">
              Visit ↗
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
