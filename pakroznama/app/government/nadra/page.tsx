import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NADRA CNIC Status Check & Renewal Guide 2026",
  description: "How to check your NADRA CNIC application status and renew your ID card, using official channels.",
  alternates: { canonical: "/government/nadra" },
};

export default function NadraGuidePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 prose prose-invert">
      <h1>NADRA CNIC Status &amp; Renewal Guide</h1>
      <p>
        NADRA handles CNIC issuance, renewal, and modification. To check
        your application status, use your tracking ID via NADRA's official
        SMS service or the official NADRA website — avoid any third-party
        site asking you to enter your CNIC number for a "status check," as
        this is a common data-harvesting pattern.
      </p>
      <h2>How to renew your CNIC</h2>
      <ol>
        <li>Visit your nearest NADRA Registration Center or use NADRA's official online portal.</li>
        <li>Submit the renewal form with required documents.</li>
        <li>Pay the applicable fee based on urgency (normal, urgent, executive).</li>
        <li>Track your application using the tracking ID via NADRA's official SMS service.</li>
      </ol>
      <p>
        PakRoznama is an independent guide and is not affiliated with NADRA.
      </p>
    </div>
  );
}
