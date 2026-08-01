import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PPSC Past Papers (Last 5 Years) — Preparation Guide",
  description: "How to find official PPSC past papers for Punjab Public Service Commission exam prep.",
  alternates: { canonical: "/education/past-papers/ppsc" },
};

export default function PastPapersPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 prose prose-invert">
      <h1>PPSC Past Papers (Last 5 Years)</h1>
      <p>
        PPSC written tests vary by post but often share a similar General Knowledge and English component. Past papers for your specific post category are the most relevant prep material.
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
