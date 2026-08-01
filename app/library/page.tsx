import type { Metadata } from "next";
import { books, gutenbergSearchUrl } from "@/lib/libraryBooks";

export const metadata: Metadata = {
  title: "Free Book Library — Public Domain Classics",
  description: "A curated library of public-domain classic books, legally free to read via Project Gutenberg.",
  alternates: { canonical: "/library" },
};

export default function LibraryPage() {
  const categories = Array.from(new Set(books.map((b) => b.category)));

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-white mb-2">Free Book Library</h1>
      <p className="text-gray-400 mb-4">
        A curated collection of public-domain classics — legally free to
        read because their copyright has expired, not because we&apos;ve
        uploaded anyone&apos;s copyrighted work. Each title links to Project
        Gutenberg, the largest legal public-domain library online.
      </p>
      <p className="text-gray-400 mb-8">
        Looking for Urdu literature and poetry? <a href="https://www.rekhta.org" target="_blank" rel="noopener noreferrer nofollow" className="text-emerald-400">Rekhta.org</a> offers a large legal, free collection of Urdu classics and poetry.
      </p>

      {categories.map((cat) => (
        <div key={cat} className="mb-8">
          <h2 className="text-lg font-semibold text-emerald-400 mb-3">{cat}</h2>
          <div className="grid sm:grid-cols-2 gap-2">
            {books.filter((b) => b.category === cat).map((b) => (
              <a
                key={b.title}
                href={gutenbergSearchUrl(b.title)}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="border border-emerald-900/40 rounded-lg px-3 py-2 text-sm hover:border-emerald-500"
              >
                <span className="text-gray-200">{b.title}</span>
                <span className="text-gray-500 block text-xs">{b.author}</span>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
