import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Free Online Calculators — Zakat, Age, Loan & Unit Converter",
  description: "Free tools: Zakat calculator, age calculator, loan/EMI calculator, and unit converter.",
  alternates: { canonical: "/tools" },
};

const TOOLS = [
  { href: "/tools/zakat-calculator", title: "Zakat Calculator", desc: "Calculate your annual Zakat." },
  { href: "/tools/gold-calculator", title: "Gold Value Calculator", desc: "Find out what your gold is worth today." },
  { href: "/tools/age-calculator", title: "Age Calculator", desc: "Find your exact age in years, months, days." },
  { href: "/tools/loan-calculator", title: "Loan / EMI Calculator", desc: "Calculate monthly installments." },
  { href: "/tools/electricity-bill-calculator", title: "Electricity Bill Estimator", desc: "Estimate your bill from units used." },
  { href: "/tools/unit-converter", title: "Unit Converter", desc: "Convert length, weight, and volume units." },
  { href: "/tools/bmi-calculator", title: "BMI Calculator", desc: "Check your Body Mass Index." },
  { href: "/tools/percentage-calculator", title: "Percentage Calculator", desc: "Calculate exam or test percentage." },
  { href: "/tools/date-calculator", title: "Date Difference Calculator", desc: "Find days between two dates." },
];

export default function ToolsIndex() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-white mb-6">Free Tools</h1>
      <div className="grid sm:grid-cols-2 gap-4">
        {TOOLS.map((t) => (
          <Link key={t.href} href={t.href} className="border border-emerald-900/40 rounded-xl p-5 hover:border-emerald-500">
            <h2 className="font-semibold text-white">{t.title}</h2>
            <p className="text-sm text-gray-400 mt-1">{t.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
