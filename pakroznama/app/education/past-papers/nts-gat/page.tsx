import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NTS GAT Past Papers (Last 5 Years) — Preparation Guide",
  description: "How to find official NTS GAT past papers for graduate assessment test prep.",
  alternates: { canonical: "/education/past-papers/nts-gat" },
};

export default function PastPapersPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 prose prose-invert">
      <h1>NTS GAT Past Papers (Last 5 Years)</h1>
      <p>
        The NTS GAT (Graduate Assessment Test) is required for admission to many postgraduate programs in Pakistan, in General, Subject, and Management variants. Past papers help you calibrate your pace against the test time limits.
      </p>
      <h2>Where to find official past papers</h2>
      <p>
        We link to the official testing body's site rather than hosting
        scanned question papers ourselves, since past papers are typically
        copyrighted by the issuing board or university. Check the
        official website of the relevant testing authority for downloadable
        past papers, sample papers, or a syllabus breakdown covering the
        last several years.
      </p>
      <p><a href="/education/past-papers" className="text-emerald-400">← Back to Past Papers</a></p>
    </div>
  );
}
