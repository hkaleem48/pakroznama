import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Matric Result 2026 — BISE Board Results by Roll Number",
  description: "How to check your Matric (SSC) result across Pakistani BISE boards.",
  alternates: { canonical: "/results/matric" },
};

export default function MatricResultsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 prose prose-invert">
      <h1>Matric (SSC) Result</h1>
      <p>
        Matric results are announced separately by each provincial BISE
        (Board of Intermediate and Secondary Education). Find your board's
        official result portal below once wired in — for now, check your
        board's official site directly using your roll number.
      </p>
      <p><a href="/results" className="text-emerald-400">← Back to all results</a></p>
    </div>
  );
}
