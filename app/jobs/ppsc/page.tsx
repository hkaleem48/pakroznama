import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PPSC Jobs & Test Schedule 2026 — Punjab Public Service Commission",
  description: "Latest PPSC job announcements and test schedules in Punjab, Pakistan.",
  alternates: { canonical: "/jobs/ppsc" },
};

export default function PpscPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 prose prose-invert">
      <h1>PPSC Jobs in Punjab</h1>
      <p>
        The Punjab Public Service Commission (PPSC) recruits for provincial
        government positions across Punjab. Always verify test schedules
        and apply directly via{" "}
        <a href="https://www.ppsc.gop.pk" target="_blank" rel="noopener noreferrer nofollow" className="text-emerald-400">ppsc.gop.pk</a>.
      </p>
      <p><a href="/jobs" className="text-emerald-400">← Back to all jobs</a></p>
    </div>
  );
}
