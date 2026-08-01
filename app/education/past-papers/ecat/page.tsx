import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ECAT Past Papers (Last 5 Years) — Preparation Guide",
  description: "How to find and use official ECAT past papers for engineering university entry test prep.",
  alternates: { canonical: "/education/past-papers/ecat" },
};

export default function PastPapersPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 prose prose-invert">
      <h1>ECAT Past Papers (Last 5 Years)</h1>
      <p>
        ECAT (Engineering College Admission Test) is conducted by UET Lahore for admission to engineering universities across Punjab. Reviewing several years of past papers helps you understand the balance between Math, Physics, and Chemistry sections.
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
