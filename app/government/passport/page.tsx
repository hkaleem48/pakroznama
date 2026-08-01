import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pakistan Passport Status Check & Application Guide 2026",
  description: "How to check your Pakistan passport application status and apply online, using official DGIP channels.",
  alternates: { canonical: "/government/passport" },
};

export default function PassportGuidePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 prose prose-invert">
      <h1>Pakistan Passport Status &amp; Application Guide</h1>
      <p>
        Passport applications and status tracking are handled by the
        Directorate General of Immigration &amp; Passports (DGIP). To check
        your application status, use your tracking ID on the official
        DGIP portal — never enter personal documents or CNIC details on a
        third-party site claiming to "track" your passport for you.
      </p>
      <h2>How to apply</h2>
      <ol>
        <li>Create an account on the official DGIP online portal.</li>
        <li>Fill out the passport application form and upload required documents.</li>
        <li>Pay the applicable fee and book your Passport Office appointment.</li>
        <li>Track your application status using the tracking ID issued after submission.</li>
      </ol>
      <p>
        PakRoznama is an independent guide and is not affiliated with DGIP or NADRA.
      </p>
    </div>
  );
}
