import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Private Sector Jobs on Rozee.pk — How to Search & Apply",
  description: "How to find private sector jobs in Pakistan using Rozee.pk, one of the country's largest job portals.",
  alternates: { canonical: "/jobs/rozee-pk" },
};

export default function RozeePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 prose prose-invert">
      <h1>Private Sector Jobs via Rozee.pk</h1>
      <p>
        Rozee.pk is one of Pakistan's largest private-sector job portals,
        covering IT, marketing, finance, and corporate roles across major
        cities. Create a profile, upload your CV, and set up job alerts
        directly on{" "}
        <a href="https://www.rozee.pk" target="_blank" rel="noopener noreferrer nofollow" className="text-emerald-400">rozee.pk</a>.
      </p>
      <p><a href="/jobs" className="text-emerald-400">← Back to all jobs</a></p>
    </div>
  );
}
