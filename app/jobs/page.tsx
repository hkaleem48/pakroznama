import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Latest Government & Private Jobs in Pakistan",
  description:
    "Browse the latest FPSC, PPSC, NTS, and private sector job listings in Pakistan, updated daily.",
  alternates: { canonical: "/jobs" },
};

// NOTE: this array is a structural placeholder so the page and its schema
// render correctly. Before launch, wire this to a real source — most job
// boards (FPSC, PPSC, NTS) publish structured listings you can pull via
// their public results/ads pages; always link "Apply" back to the official
// posting rather than hosting an application form yourself.
const sampleJobs = [
  {
    slug: "fpsc-css-2026",
    title: "FPSC CSS Competitive Examination 2026",
    org: "Federal Public Service Commission",
    lastDate: "2026-09-15",
    location: "Pakistan (Nationwide)",
  },
];

export default function JobsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-white">
      <h1 className="text-3xl font-bold mb-2">Latest Jobs in Pakistan</h1>
      <p className="text-gray-400 mb-8">
        Government and private job listings, updated daily. Always apply
        through the official link provided.
      </p>

      <div className="flex gap-3 mb-8 text-sm flex-wrap">
        <a href="/jobs/fpsc" className="border border-emerald-900/40 rounded-full px-3 py-1 hover:border-emerald-500">FPSC</a>
        <a href="/jobs/ppsc" className="border border-emerald-900/40 rounded-full px-3 py-1 hover:border-emerald-500">PPSC</a>
        <a href="/jobs/nts" className="border border-emerald-900/40 rounded-full px-3 py-1 hover:border-emerald-500">NTS</a>
        <a href="/jobs/rozee-pk" className="border border-emerald-900/40 rounded-full px-3 py-1 hover:border-emerald-500">Rozee.pk</a>
        <a href="/jobs/mustakbil" className="border border-emerald-900/40 rounded-full px-3 py-1 hover:border-emerald-500">Mustakbil</a>
        <a href="/jobs/bank-jobs" className="border border-emerald-900/40 rounded-full px-3 py-1 hover:border-emerald-500">Bank Jobs</a>
        <a href="/jobs/army" className="border border-emerald-900/40 rounded-full px-3 py-1 hover:border-emerald-500">Army</a>
        <a href="/jobs/police" className="border border-emerald-900/40 rounded-full px-3 py-1 hover:border-emerald-500">Police</a>
      </div>

      <div className="space-y-4">
        {sampleJobs.map((job) => {
          const jobSchema = {
            "@context": "https://schema.org",
            "@type": "JobPosting",
            title: job.title,
            hiringOrganization: { "@type": "Organization", name: job.org },
            jobLocation: {
              "@type": "Place",
              address: { "@type": "PostalAddress", addressCountry: "PK" },
            },
            validThrough: job.lastDate,
          };
          return (
            <div key={job.slug} className="border border-emerald-900/40 rounded-xl p-5 bg-zinc-900/50">
              <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jobSchema) }}
              />
              <h2 className="font-semibold text-lg">{job.title}</h2>
              <p className="text-sm text-gray-500">{job.org} · {job.location}</p>
              <p className="text-sm text-gray-500">Last date to apply: {job.lastDate}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
