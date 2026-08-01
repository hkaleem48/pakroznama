import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cadet College Entry Test Past Papers (Last 5 Years) — Preparation Guide",
  description: "How to find official cadet college entry test past papers for exam prep.",
  alternates: { canonical: "/education/past-papers/cadet-college-entry-test" },
};

export default function PastPapersPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 prose prose-invert">
      <h1>Cadet College Entry Test Past Papers (Last 5 Years)</h1>
      <p>
        Cadet college entry tests generally cover English, Mathematics, and General Knowledge or Science, with the exact syllabus varying slightly by college and entry class.
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
