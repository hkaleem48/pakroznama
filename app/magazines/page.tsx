import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Popular Pakistani Magazines — Official Sites & Digital Editions",
  description: "A directory of Pakistan's most-read magazines with links to their official websites and digital editions.",
  alternates: { canonical: "/magazines" },
};

const MAGAZINES = [
  { name: "Akhbar-e-Jehan", desc: "Weekly Urdu digest — fiction, current affairs, lifestyle.", url: "https://www.jang.com.pk" },
  { name: "Sunday Magazine (Jang Group)", desc: "Weekend features and lifestyle magazine.", url: "https://www.jang.com.pk" },
  { name: "Herald (Dawn)", desc: "Current affairs and long-form journalism.", url: "https://www.dawn.com" },
  { name: "Aurora (DAWN)", desc: "Pakistan's leading marketing & advertising magazine.", url: "https://aurora.dawn.com" },
  { name: "Mag The Weekly", desc: "Lifestyle, fashion, and entertainment weekly.", url: "https://jang.com.pk" },
];

export default function MagazinesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-white mb-2">Popular Pakistani Magazines</h1>
      <p className="text-gray-400 mb-8">
        A directory of widely-read Pakistani magazines, linking directly to
        each publisher&apos;s official site or digital edition. We don&apos;t host
        or redistribute magazine content ourselves — every copy belongs to
        its publisher.
      </p>
      <ul className="divide-y divide-emerald-900/30 border border-emerald-900/40 rounded-xl overflow-hidden">
        {MAGAZINES.map((m) => (
          <li key={m.name} className="p-4 hover:bg-zinc-900/50">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-200 font-medium">{m.name}</p>
                <p className="text-xs text-gray-500 mt-1">{m.desc}</p>
              </div>
              <a href={m.url} target="_blank" rel="noopener noreferrer nofollow" className="text-emerald-400 text-sm shrink-0 ml-4">
                Visit ↗
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
