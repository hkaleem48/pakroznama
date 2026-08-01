import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emergency Helplines in Pakistan — 1122, 15, Edhi & More",
  description: "A directory of Pakistan's official emergency helpline numbers: Rescue 1122, Police 15, Edhi Ambulance, and more.",
  alternates: { canonical: "/government/emergency-services" },
};

const SERVICES = [
  { name: "Rescue 1122", number: "1122", desc: "Emergency ambulance, fire, and rescue services (Punjab, KP, and expanding to other regions)." },
  { name: "Police Helpline", number: "15", desc: "Nationwide police emergency helpline." },
  { name: "Edhi Ambulance", number: "115", desc: "Pakistan's largest volunteer ambulance and emergency service network." },
  { name: "Motorway Police", number: "130", desc: "Emergency assistance on national highways and motorways." },
  { name: "Chhipa Ambulance", number: "1020", desc: "Ambulance and emergency service, primarily active in Sindh." },
  { name: "Fire Brigade", number: "16", desc: "Fire emergency services (where not covered by 1122)." },
];

export default function EmergencyServicesPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-white mb-2">Emergency Helplines in Pakistan</h1>
      <p className="text-gray-400 mb-8">
        Save these numbers — in a real emergency, dial directly rather than searching for a website.
      </p>
      <div className="grid sm:grid-cols-2 gap-4">
        {SERVICES.map((s) => (
          <div key={s.name} className="border border-emerald-900/40 rounded-xl p-5 bg-zinc-900/50">
            <div className="flex justify-between items-baseline">
              <h2 className="font-semibold text-white">{s.name}</h2>
              <span className="text-2xl font-bold text-emerald-400">{s.number}</span>
            </div>
            <p className="text-sm text-gray-400 mt-2">{s.desc}</p>
          </div>
        ))}
      </div>
      <p className="text-xs text-gray-500 mt-8">
        Availability of some services (like 1122) varies by province and district. PakRoznama is not affiliated with any emergency service provider — this page is for quick reference only.
      </p>
    </div>
  );
}
