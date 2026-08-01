import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About PakRoznama",
  description: "Learn about PakRoznama, Pakistan's daily info hub for rates, jobs, results, and more.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 prose prose-invert">
      <h1>About PakRoznama</h1>
      <p>
        PakRoznama is an independent, daily-use information platform built
        for Pakistan — one place to check today's gold, silver and
        currency rates, understand government programs like BISP 8171,
        browse jobs and exam results, and use free everyday calculators.
      </p>
      <p>
        We are not affiliated with the Government of Pakistan, NADRA,
        BISP, FPSC, PPSC, NTS, or any board or testing body mentioned on
        this site. Where we reference official processes, we link directly
        to the relevant government source rather than reproducing or
        substituting for it.
      </p>
      <h2>Our approach</h2>
      <ul>
        <li>We show live data where we have a verified source, and clearly mark anything unavailable rather than guessing.</li>
        <li>We link to official government portals for anything involving personal data (CNIC, passport, NADRA) rather than building our own lookup tools.</li>
        <li>We don't reproduce copyrighted news articles — our newspaper section links directly to publishers.</li>
      </ul>
    </div>
  );
}
