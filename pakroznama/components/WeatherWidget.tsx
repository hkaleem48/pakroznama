"use client";

import { useEffect, useState } from "react";

const CITIES = [
  { name: "Karachi", lat: 24.8607, lon: 67.0011 },
  { name: "Lahore", lat: 31.5497, lon: 74.3436 },
  { name: "Islamabad", lat: 33.6844, lon: 73.0479 },
  { name: "Peshawar", lat: 34.0151, lon: 71.5249 },
];

type CityWeather = { name: string; tempC: number | null; code: number | null };

// WMO weather codes -> short label (subset covering common Pakistan conditions)
function codeToLabel(code: number | null): string {
  if (code === null) return "—";
  if (code === 0) return "Clear";
  if ([1, 2, 3].includes(code)) return "Partly cloudy";
  if ([45, 48].includes(code)) return "Fog";
  if ([51, 53, 55, 61, 63, 65].includes(code)) return "Rain";
  if ([71, 73, 75].includes(code)) return "Snow";
  if ([95, 96, 99].includes(code)) return "Thunderstorm";
  return "—";
}

export default function WeatherWidget() {
  const [data, setData] = useState<CityWeather[]>(
    CITIES.map((c) => ({ name: c.name, tempC: null, code: null }))
  );

  useEffect(() => {
    let cancelled = false;

    Promise.all(
      CITIES.map(async (c) => {
        try {
          const res = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${c.lat}&longitude=${c.lon}&current=temperature_2m,weather_code`
          );
          const json = await res.json();
          return {
            name: c.name,
            tempC: json?.current?.temperature_2m ?? null,
            code: json?.current?.weather_code ?? null,
          };
        } catch {
          return { name: c.name, tempC: null, code: null };
        }
      })
    ).then((results) => {
      if (!cancelled) setData(results);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <aside className="bg-zinc-900/70 border border-emerald-900/40 rounded-xl p-4">
      <h2 className="text-sm font-semibold text-emerald-400 uppercase tracking-wide mb-3">
        Weather Now
      </h2>
      <ul className="space-y-2 text-sm">
        {data.map((c) => (
          <li key={c.name} className="flex justify-between">
            <span className="text-gray-300">{c.name}</span>
            <span className="font-mono text-white">
              {c.tempC !== null ? `${Math.round(c.tempC)}°C` : "…"}
              <span className="text-gray-500 ml-2 text-xs">{codeToLabel(c.code)}</span>
            </span>
          </li>
        ))}
      </ul>
      <a href="/weather" className="text-xs text-emerald-500 hover:underline block mt-3">
        View full forecast →
      </a>
    </aside>
  );
}
