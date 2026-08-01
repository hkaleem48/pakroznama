import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Police Jobs & Recruitment in Pakistan 2026 — Provincial Guide",
  description: "How police recruitment works across Pakistan's provincial police departments.",
  alternates: { canonical: "/jobs/police" },
};

export default function PoliceJobsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 prose prose-invert">
      <h1>Police Jobs in Pakistan</h1>
      <p>
        Police recruitment is handled provincially — Punjab Police, Sindh
        Police, KP Police, and Balochistan Police each run their own
        recruitment drives and physical/written test schedules, usually
        announced on their official department websites. Islamabad also
        recruits separately for Islamabad Capital Police.
      </p>
      <p>
        Always verify a recruitment announcement on the relevant
        provincial police department's official website before applying
        or paying any fee.
      </p>
      <p><a href="/jobs" className="text-emerald-400">← Back to all jobs</a></p>
    </div>
  );
}
