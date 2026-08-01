import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prayer Times in Pakistan — Namaz Timings by City",
  description: "Daily Fajr, Zuhr, Asr, Maghrib and Isha prayer timings for cities across Pakistan.",
  alternates: { canonical: "/prayer-times" },
};

export default function PrayerTimesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 prose prose-invert">
      <h1>Prayer Times in Pakistan</h1>
      <p>
        City-specific Fajr, Zuhr, Asr, Maghrib, and Isha timings will be
        wired up here from a live prayer-times API (e.g. Aladhan API, which
        offers a free tier), calculated per city&apos;s coordinates.
      </p>
    </div>
  );
}
