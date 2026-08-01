import { NextResponse } from "next/server";

// Live-updating rates endpoint.
// Currency: pulled from exchangerate.host (free, no key needed).
//
// Metals: expects an upstream response shaped like:
//   { "rates": { "USDXAU": <usd per troy oz gold>, "USDXAG": <usd per troy oz silver> } }
// Set METALS_API_URL as an env var to your provider's endpoint (the shape
// above matches common metals-rate providers). Until that env var is set,
// this route returns metals as unavailable rather than guessing — a wrong
// gold price is worse than none on a finance-adjacent page.

export const revalidate = 3600; // cache for 1 hour, matches how often rates realistically move

const TROY_OUNCE_IN_GRAMS = 31.1034768;
const TOLA_IN_GRAMS = 11.6638038;

async function getUsdToPkr(): Promise<number | null> {
  try {
    const res = await fetch(
      "https://api.exchangerate.host/latest?base=USD&symbols=PKR",
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;
    const data = await res.json();
    return data?.rates?.PKR ?? null;
  } catch {
    return null;
  }
}

async function getMetals(): Promise<{ usdPerOzGold: number; usdPerOzSilver: number } | null> {
  const url = process.env.METALS_API_URL;
  if (!url) return null;
  try {
    const res = await fetch(url, { next: { revalidate: 3600 } });
    if (!res.ok) return null;
    const data = await res.json();
    const usdPerOzGold = data?.rates?.USDXAU;
    const usdPerOzSilver = data?.rates?.USDXAG;
    if (!usdPerOzGold || !usdPerOzSilver) return null;
    return { usdPerOzGold, usdPerOzSilver };
  } catch {
    return null;
  }
}

export async function GET() {
  const [usdToPkr, metals] = await Promise.all([getUsdToPkr(), getMetals()]);

  const base = {
    success: true,
    updatedAt: new Date().toISOString(),
    currency: {
      usdToPkr,
      source: usdToPkr ? "exchangerate.host" : null,
    },
  };

  if (!metals || !usdToPkr) {
    return NextResponse.json({
      ...base,
      gold: { available: false, note: "Set METALS_API_URL env var to enable live gold/silver rates." },
      silver: { available: false, note: "Set METALS_API_URL env var to enable live gold/silver rates." },
    });
  }

  const goldPkrPerGram = (metals.usdPerOzGold / TROY_OUNCE_IN_GRAMS) * usdToPkr;
  const silverPkrPerGram = (metals.usdPerOzSilver / TROY_OUNCE_IN_GRAMS) * usdToPkr;

  return NextResponse.json({
    ...base,
    gold: {
      available: true,
      perGram: goldPkrPerGram,
      perTola: goldPkrPerGram * TOLA_IN_GRAMS,
      source: "live metals feed",
    },
    silver: {
      available: true,
      perGram: silverPkrPerGram,
      perTola: silverPkrPerGram * TOLA_IN_GRAMS,
      source: "live metals feed",
    },
  });
}

