import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/blogPosts";

export const metadata: Metadata = {
  title: "Blog — Guides on Rates, Jobs, Results & Government Services",
  description: "Practical guides on gold rates, Zakat, BISP 8171, government jobs, results, and more for Pakistan.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-white mb-2">Blog</h1>
      <p className="text-gray-400 mb-8">
        Practical, plain-language guides on the things Pakistanis check every day.
      </p>

      <div className="space-y-5">
        {posts.map((p) => (
          <Link
            key={p.slug}
            href={`/blog/${p.slug}`}
            className="block border border-emerald-900/40 rounded-xl p-5 hover:border-emerald-500"
          >
            <h2 className="font-semibold text-white text-lg">{p.title}</h2>
            <p className="text-sm text-gray-400 mt-1">{p.description}</p>
            <p className="text-xs text-gray-500 mt-2">
              {new Date(p.date).toLocaleDateString("en-PK", { year: "numeric", month: "long", day: "numeric" })} · {p.readTime}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
