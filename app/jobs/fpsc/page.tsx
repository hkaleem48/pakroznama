import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FPSC Jobs & Test Schedule 2026 — Federal Public Service Commission",
  description: "Latest FPSC job announcements, test schedules, and result dates in Pakistan.",
  alternates: { canonical: "/jobs/fpsc" },
};

export default function FpscPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 prose prose-invert">
      <h1>FPSC Jobs in Pakistan</h1>
      <p>
        The Federal Public Service Commission (FPSC) runs recruitment for
        federal government positions, including the annual CSS exam.
        Listings here will pull from FPSC's official advertisement
        schedule — always apply and check test dates directly on{" "}
        <a href="https://www.fpsc.gov.pk" target="_blank" rel="noopener noreferrer nofollow" className="text-emerald-400">fpsc.gov.pk</a>.
      </p>
      <p><a href="/jobs" className="text-emerald-400">← Back to all jobs</a></p>
    </div>
  );
}
