import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cadet Colleges in Pakistan — Admission Guide 2026",
  description: "A guide to Pakistan's major cadet colleges, admission process, and entry test structure.",
  alternates: { canonical: "/education/cadet-colleges" },
};

const COLLEGES = [
  "Cadet College Hasanabdal",
  "Cadet College Petaro",
  "Cadet College Kohat",
  "Cadet College Larkana",
  "Cadet College Sanghar",
  "Military College Jhelum",
];

export default function CadetCollegesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 prose prose-invert">
      <h1>Cadet Colleges in Pakistan</h1>
      <p>
        Cadet colleges offer a combination of academic education and
        military-style discipline, and are a common path for students
        aiming for future officer commissions in the armed forces. Major
        cadet colleges include:
      </p>
      <ul>
        {COLLEGES.map((c) => <li key={c}>{c}</li>)}
      </ul>
      <h2>Admission process</h2>
      <p>
        Admission is typically through a written entry test (covering
        English, Math, and General Knowledge/Science depending on the
        entry class), followed by an interview and medical test. Each
        college publishes its own prospectus and test dates on its
        official website — always verify directly there rather than
        through a third-party "admission guarantee" service.
      </p>
      <p>
        <a href="/education/past-papers/cadet-college-entry-test" className="text-emerald-400">
          Cadet College Entry Test — Past Papers Guide →
        </a>
      </p>
    </div>
  );
}
