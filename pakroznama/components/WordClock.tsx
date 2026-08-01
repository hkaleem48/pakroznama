"use client";

import { useEffect, useState } from "react";

const ONES = [
  "twelve", "one", "two", "three", "four", "five",
  "six", "seven", "eight", "nine", "ten", "eleven",
];

function toWords(date: Date): string {
  const h = date.getHours() % 12;
  const m = date.getMinutes();
  const hourWord = ONES[h];
  const nextHourWord = ONES[(h + 1) % 12];

  if (m === 0) return `${hourWord} o'clock`;
  if (m === 15) return `quarter past ${hourWord}`;
  if (m === 30) return `half past ${hourWord}`;
  if (m === 45) return `quarter to ${nextHourWord}`;
  if (m < 30) return `${m} minutes past ${hourWord}`;
  return `${60 - m} minutes to ${nextHourWord}`;
}

export default function WordClock() {
  const [label, setLabel] = useState<string | null>(null);

  useEffect(() => {
    const update = () => {
      const nowKarachi = new Date(
        new Date().toLocaleString("en-US", { timeZone: "Asia/Karachi" })
      );
      setLabel(toWords(nowKarachi));
    };
    update();
    const timer = setInterval(update, 15000);
    return () => clearInterval(timer);
  }, []);

  return (
    <p className="text-emerald-400 text-sm italic">
      {label ? `It's ${label} in Pakistan` : ""}
    </p>
  );
}
