import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "PakRoznama disclaimer regarding accuracy, government affiliation, and use of information.",
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 prose prose-invert">
      <h1>Disclaimer</h1>
      <h2>No government affiliation</h2>
      <p>
        PakRoznama is an independent, privately-run information platform.
        We are not affiliated with, endorsed by, or officially connected to
        the Government of Pakistan, NADRA, BISP, FPSC, PPSC, NTS, OGRA,
        NEPRA, or any provincial education board.
      </p>
      <h2>Accuracy of information</h2>
      <p>
        Rates, prices, and figures shown on this site (gold, silver,
        currency, petrol, electricity) are sourced from third-party feeds
        and are provided for general informational purposes only. They may
        differ from rates offered by your local bank, jeweller, or fuel
        provider. Always verify time-sensitive or financial figures with
        the official source before acting on them.
      </p>
      <h2>Government schemes and services</h2>
      <p>
        Information about programs like BISP 8171, NADRA CNIC, or passport
        applications is offered as a general guide only. We do not process
        applications, collect CNIC data, or issue official confirmations.
        For anything requiring your personal or identity data, use only
        the official government portal or SMS shortcode.
      </p>
      <h2>Financial and medical tools</h2>
      <p>
        Calculators (Zakat, BMI, loan/EMI, etc.) provide general estimates
        only and are not a substitute for professional financial, medical,
        or religious advice.
      </p>
      <h2>Contact</h2>
      <p>
        If you notice inaccurate information, please <a href="/contact" className="text-emerald-400">contact us</a> so we can correct it.
      </p>
    </div>
  );
}
