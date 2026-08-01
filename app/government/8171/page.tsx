import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "8171 BISP / Ehsaas Program Check — How to Check Your Status",
  description:
    "Learn how to check your BISP 8171 Ehsaas program eligibility and payment status by CNIC, step by step, using the official government channels.",
  alternates: { canonical: "/government/8171" },
};

export default function BispCheckPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I check my 8171 BISP status?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Send your 13-digit CNIC number (without dashes) via SMS to 8171, or check status at the official BISP web portal.",
        },
      },
    ],
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 prose prose-invert">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <h1>How to Check Your 8171 BISP / Ehsaas Status</h1>
      <p>
        The 8171 program lets you check your BISP (Benazir Income Support
        Programme) eligibility and payment status directly by CNIC. Here is
        how to do it safely, using only official government channels.
      </p>

      <h2>Method 1: SMS</h2>
      <ol>
        <li>Open your phone&apos;s messaging app.</li>
        <li>Type your 13-digit CNIC number, without dashes.</li>
        <li>Send it to <strong>8171</strong>.</li>
        <li>You&apos;ll receive your eligibility and payment status by SMS reply.</li>
      </ol>

      <h2>Method 2: Official Web Portal</h2>
      <p>
        Visit the official BISP 8171 web portal directly — never enter your
        CNIC on a third-party site claiming to show your balance instantly,
        as this is a common scam pattern. We link only to the verified
        government source below.
      </p>

      <p>
        <strong>Note:</strong> RozanaPK does not process, store, or check
        CNIC data ourselves — we are not affiliated with BISP or the
        Government of Pakistan. This page is an independent guide only.
      </p>
    </div>
  );
}
