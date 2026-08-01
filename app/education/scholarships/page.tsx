import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scholarships in Pakistan 2026 — HEC, PEEF & International",
  description: "Government and international scholarships available to Pakistani students.",
  alternates: { canonical: "/education/scholarships" },
};

export default function ScholarshipsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 prose prose-invert">
      <h1>Scholarships for Pakistani Students</h1>
      <p>
        Major scholarship sources include HEC need-based and merit
        scholarships, provincial programs like PEEF (Punjab), and
        international options like Chevening, Fulbright, and DAAD. A
        structured, regularly-updated listing is next on our roadmap —
        always verify deadlines on the official HEC or program website
        before applying.
      </p>
    </div>
  );
}
