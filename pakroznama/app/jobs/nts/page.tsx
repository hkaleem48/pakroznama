import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NTS Jobs & Test Results 2026 — National Testing Service",
  description: "Latest NTS test announcements and result dates in Pakistan.",
  alternates: { canonical: "/jobs/nts" },
};

export default function NtsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 prose prose-invert">
      <h1>NTS Jobs &amp; Tests</h1>
      <p>
        The National Testing Service (NTS) conducts recruitment tests for
        many public and private sector organizations. Check current test
        schedules directly on{" "}
        <a href="https://www.nts.org.pk" target="_blank" rel="noopener noreferrer nofollow" className="text-emerald-400">nts.org.pk</a>.
      </p>
      <p><a href="/jobs" className="text-emerald-400">← Back to all jobs</a></p>
    </div>
  );
}
