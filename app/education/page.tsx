import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education in Pakistan — Admissions, Scholarships & Results",
  description: "Guides to university admissions, scholarships, and board results in Pakistan.",
  alternates: { canonical: "/education" },
};

export default function EducationPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 prose prose-invert">
      <h1>Education in Pakistan</h1>
      <p>
        This section will grow into a full directory of admissions
        calendars, scholarship listings, and past papers for major boards
        and universities. For now, start with exam results and roll number
        slip lookups.
      </p>
      <p>
        <a href="/results" className="text-emerald-400">
          Go to Results &amp; Roll Number Slips →
        </a>
      </p>
      <ul>
        <li><a href="/education/scholarships" className="text-emerald-400">Scholarships</a></li>
        <li><a href="/education/past-papers" className="text-emerald-400">Past Papers</a></li>
        <li><a href="/education/cadet-colleges" className="text-emerald-400">Cadet Colleges</a></li>
      </ul>
    </div>
  );
}
