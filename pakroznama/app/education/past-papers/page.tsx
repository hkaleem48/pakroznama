import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Past Papers Pakistan — Matric, Inter & Entry Test Papers",
  description: "Find past papers for Matric, Intermediate, and university entry tests in Pakistan.",
  alternates: { canonical: "/education/past-papers" },
};

export default function PastPapersPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 prose prose-invert">
      <h1>Past Papers</h1>
      <p>
        Each board publishes past papers on its own official site — we
        link directly rather than reproducing copyrighted question
        content. Browse by test category:
      </p>
      <ul>
        <li><a href="/education/past-papers/mdcat" className="text-emerald-400">MDCAT Past Papers</a></li>
        <li><a href="/education/past-papers/ecat" className="text-emerald-400">ECAT Past Papers</a></li>
        <li><a href="/education/past-papers/nts-gat" className="text-emerald-400">NTS GAT Past Papers</a></li>
        <li><a href="/education/past-papers/ppsc" className="text-emerald-400">PPSC Past Papers</a></li>
        <li><a href="/education/past-papers/cadet-college-entry-test" className="text-emerald-400">Cadet College Entry Test Past Papers</a></li>
      </ul>
    </div>
  );
}
