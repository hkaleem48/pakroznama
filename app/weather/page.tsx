import type { Metadata } from "next";
import WeatherWidget from "@/components/WeatherWidget";

export const metadata: Metadata = {
  title: "Pakistan Weather Today — Live City Forecasts",
  description: "Live current weather for Karachi, Lahore, Islamabad, Peshawar and more.",
  alternates: { canonical: "/weather" },
};

export default function WeatherPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-white mb-2">Pakistan Weather Today</h1>
      <p className="text-gray-400 mb-8">
        Live current temperature and conditions, refreshed on page load.
      </p>
      <WeatherWidget />
      <p className="text-xs text-gray-500 mt-6">
        Weather data via Open-Meteo. More cities and an hourly/weekly forecast are next on the roadmap.
      </p>
    </div>
  );
}
