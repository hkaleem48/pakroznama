import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bank Jobs in Pakistan 2026 — HBL, UBL, MCB, NBP & More",
  description: "How to find and apply for banking sector jobs in Pakistan, government and private.",
  alternates: { canonical: "/jobs/bank-jobs" },
};

export default function BankJobsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 prose prose-invert">
      <h1>Bank Jobs in Pakistan</h1>
      <p>
        Major banks — HBL, UBL, MCB, Bank Alfalah, National Bank of
        Pakistan (NBP), and others — post openings on their own official
        careers pages, and NBP recruitment (as a state-owned bank) often
        also runs through NTS or FPSC-administered tests. Always apply
        through the bank's official careers portal rather than a
        third-party site claiming to process bank job applications.
      </p>
      <p><a href="/jobs" className="text-emerald-400">← Back to all jobs</a></p>
    </div>
  );
}
