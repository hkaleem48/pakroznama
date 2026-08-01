import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MDCAT Past Papers (Last 5 Years) — Preparation Guide",
  description: "How to find and use official MDCAT past papers for medical college entry test prep.",
  alternates: { canonical: "/education/past-papers/mdcat" },
};

export default function PastPapersPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 prose prose-invert">
      <h1>MDCAT Past Papers (Last 5 Years)</h1>
      <p>
        MDCAT (Medical and Dental College Admission Test) is conducted provincially by respective health authorities. Past papers from previous years are a useful prep resource, since question style and syllabus weight tend to stay consistent year over year.
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
