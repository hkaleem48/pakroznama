import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pakistan Army Jobs & Commission 2026 — Official Application Guide",
  description: "How to apply for Pakistan Army jobs and commissions through the official Join Pakistan Army portal.",
  alternates: { canonical: "/jobs/army" },
};

export default function ArmyJobsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 prose prose-invert">
      <h1>Pakistan Army Jobs &amp; Commission</h1>
      <p>
        All Pakistan Army recruitment — for officers (PMA Long Course,
        direct commissions) and other ranks — is handled exclusively
        through the official Join Pakistan Army portal. Applications are
        never processed through private agents or third-party websites;
        treat any site or individual claiming to guarantee selection for a
        fee as fraudulent.
      </p>
      <p>
        Apply and check eligibility criteria directly at{" "}
        <a href="https://www.joinpakarmy.gov.pk" target="_blank" rel="noopener noreferrer nofollow" className="text-emerald-400">joinpakarmy.gov.pk</a>.
      </p>
      <p><a href="/jobs" className="text-emerald-400">← Back to all jobs</a></p>
    </div>
  );
}
