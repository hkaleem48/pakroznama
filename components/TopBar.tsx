"use client";

import { useEffect, useState } from "react";

export default function TopBar() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (!now) {
    // Avoid hydration mismatch: render nothing time-dependent until mounted
    return <div className="h-9 bg-black/40" />;
  }

  const dateStr = now.toLocaleDateString("en-PK", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Asia/Karachi",
  });

  const timeStr = now.toLocaleTimeString("en-PK", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
    timeZone: "Asia/Karachi",
  });

  return (
    <div className="bg-black/40 border-b border-emerald-900/50 text-emerald-300 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 py-1.5 flex flex-wrap items-center justify-center sm:justify-between gap-x-4">
        <span>{dateStr}</span>
        <span className="font-mono tracking-wide">{timeStr} (PKT)</span>
      </div>
    </div>
  );
}
