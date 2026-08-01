import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jobs on Mustakbil.com — Pakistan Job Search Guide",
  description: "How to search government and private jobs on Mustakbil.com.",
  alternates: { canonical: "/jobs/mustakbil" },
};

export default function MustakbilPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 prose prose-invert">
      <h1>Jobs via Mustakbil.com</h1>
      <p>
        Mustakbil.com aggregates both government and private job listings
        across Pakistan, with newspaper job-ad archives searchable by
        category and city. Browse current listings directly on{" "}
        <a href="https://www.mustakbil.com" target="_blank" rel="noopener noreferrer nofollow" className="text-emerald-400">mustakbil.com</a>.
      </p>
      <p><a href="/jobs" className="text-emerald-400">← Back to all jobs</a></p>
    </div>
  );
}
