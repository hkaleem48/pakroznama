const PAPERS = [
  { name: "Dawn News", url: "https://www.dawn.com" },
  { name: "The News International", url: "https://www.thenews.com.pk" },
  { name: "Jang", url: "https://jang.com.pk" },
  { name: "Express Tribune", url: "https://tribune.com.pk" },
  { name: "Nawaiwaqt", url: "https://www.nawaiwaqt.com.pk" },
  { name: "Daily Ummat", url: "https://www.ummat.net" },
  { name: "Pakistan Observer", url: "https://pakobserver.net" },
  { name: "Ausaf", url: "https://dailyausaf.com" },
];

export default function NewspapersWidget() {
  return (
    <aside className="bg-zinc-900/70 border border-emerald-900/40 rounded-xl p-4">
      <h2 className="text-sm font-semibold text-emerald-400 uppercase tracking-wide mb-3">
        Today&apos;s Newspapers
      </h2>
      <ul className="space-y-2 text-sm">
        {PAPERS.map((p) => (
          <li key={p.url}>
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-gray-300 hover:text-emerald-400 flex items-center justify-between"
            >
              {p.name}
              <span className="text-xs text-gray-500">↗</span>
            </a>
          </li>
        ))}
      </ul>
      <p className="text-[11px] text-gray-500 mt-3">
        Links go directly to each publisher&apos;s official site. We don&apos;t host or reproduce their articles.
      </p>
    </aside>
  );
}
