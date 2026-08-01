import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pakistan Exam Results & Roll Number Slip Search",
  description:
    "Find board, university, FPSC/PPSC test results and roll number slips in Pakistan.",
  alternates: { canonical: "/results" },
};

export default function ResultsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 prose prose-invert">
      <h1>Exam Results &amp; Roll Number Slips</h1>
      <p>
        This section will host result lookups for major boards and testing
        bodies. Each result source (BISE boards, FPSC, PPSC, NTS) has its own
        official data endpoint or downloadable gazette — before wiring in
        live lookups, each source needs a quick ToS check, same as the 8171
        page.
      </p>
      <p className="text-sm text-gray-500">
        Next build step: connect this to your first real result source once confirmed.
      </p>
      <p className="mt-4">
        <a href="/results/matric" className="text-emerald-400">Matric Result →</a>
        {" · "}
        <a href="/results/inter" className="text-emerald-400">Inter Result →</a>
      </p>
    </div>
  );
}
