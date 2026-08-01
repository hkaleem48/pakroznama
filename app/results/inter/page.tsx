import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inter Result 2026 — FA/FSc Board Results by Roll Number",
  description: "How to check your Intermediate (FA/FSc) result across Pakistani BISE boards.",
  alternates: { canonical: "/results/inter" },
};

export default function InterResultsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 prose prose-invert">
      <h1>Intermediate (FA/FSc) Result</h1>
      <p>
        Intermediate results are announced by your province's BISE board,
        typically a few weeks after Matric results. Check your board's
        official portal directly using your roll number.
      </p>
      <p><a href="/results" className="text-emerald-400">← Back to all results</a></p>
    </div>
  );
}
