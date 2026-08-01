import type { Metadata } from "next";
import "./globals.css";
import TopBar from "@/components/TopBar";

const SITE_URL = "https://pakroznama.vercel.app"; // update once custom domain is live
const SITE_NAME = "PakRoznama";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Daily Gold, Silver, Currency Rates, News, Jobs & Results in Pakistan`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "PakRoznama: today's gold, silver & currency rates with converter, BISP 8171 check, jobs, results, newspapers, city guides and free tools for Pakistan — updated live.",
  keywords: [
    "gold rate today pakistan",
    "silver rate pakistan",
    "dollar rate today",
    "currency converter pakistan",
    "8171 bisp check",
    "jobs in pakistan",
    "pakistan results",
    "pakistan newspapers today",
  ],
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Pakistan's Daily Info Hub`,
    description:
      "Live gold, silver & currency rates, BISP 8171 check, jobs, results and newspapers — all in one place.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  alternates: { canonical: SITE_URL },
  verification: {
    google: "1blLQiIOMMcdwHKlYkmjTHU_Gzirv9yXl2KC1vRZzQA",
  },
};

const CATEGORIES = [
  { href: "/rates", label: "Rates" },
  { href: "/government/8171", label: "8171 Check" },
  { href: "/jobs", label: "Jobs" },
  { href: "/results", label: "Results" },
  { href: "/newspapers", label: "Newspapers" },
  { href: "/city", label: "Cities" },
  { href: "/education", label: "Education" },
  { href: "/tools", label: "Tools" },
  { href: "/weather", label: "Weather" },
  { href: "/blog", label: "Blog" },
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  };
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      </head>
      <body className="antialiased bg-[#08110c] text-[#e7f5ec] min-h-screen">
        <TopBar />
        <header className="border-b border-emerald-900/40 sticky top-0 bg-[#08110c]/95 backdrop-blur z-50">
          <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
            <a href="/" className="font-bold text-xl text-emerald-400">
              Pak<span className="text-white">Roznama</span>
            </a>
            <div className="hidden lg:flex gap-5 text-sm font-medium text-gray-300">
              {CATEGORIES.map((c) => (
                <a key={c.href} href={c.href} className="hover:text-emerald-400">
                  {c.label}
                </a>
              ))}
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="border-t border-emerald-900/40 mt-16 py-8 text-sm text-gray-500">
          <div className="max-w-7xl mx-auto px-4">
            <p>
              PakRoznama is an independent information platform, not
              affiliated with the Government of Pakistan, NADRA, or BISP.
              Always verify critical information on the official source
              before acting on it.
            </p>
            <p className="mt-2">© {new Date().getFullYear()} PakRoznama. All rights reserved.</p>
            <div className="flex gap-4 mt-3 text-xs">
              <a href="/about" className="hover:text-emerald-400">About</a>
              <a href="/disclaimer" className="hover:text-emerald-400">Disclaimer</a>
              <a href="/contact" className="hover:text-emerald-400">Contact</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
