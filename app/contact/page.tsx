"use client";

import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const mailtoHref = `mailto:hkaleem48@gmail.com?subject=${encodeURIComponent(
    `PakRoznama contact from ${name || "website visitor"}`
  )}&body=${encodeURIComponent(`${message}\n\nFrom: ${name} (${email})`)}`;

  return (
    <div className="max-w-xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-white mb-2">Contact Us</h1>
      <p className="text-gray-400 mb-8">
        Spotted an error, a broken link, or want to suggest a feature? Send us a message.
      </p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm text-gray-300 mb-1">Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-zinc-900 border border-emerald-900/40 rounded-lg px-3 py-2 text-white" />
        </div>
        <div>
          <label className="block text-sm text-gray-300 mb-1">Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-zinc-900 border border-emerald-900/40 rounded-lg px-3 py-2 text-white" />
        </div>
        <div>
          <label className="block text-sm text-gray-300 mb-1">Message</label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={5} className="w-full bg-zinc-900 border border-emerald-900/40 rounded-lg px-3 py-2 text-white" />
        </div>
        <a
          href={mailtoHref}
          className="inline-block bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2 rounded-lg text-sm font-medium"
        >
          Send via Email
        </a>
      </div>

      <p className="text-xs text-gray-500 mt-6">
        This opens your email app with the message pre-filled — we haven't
        wired up a backend form service yet. Once the site is live, connect
        a service like Formspree or a serverless email API for in-page
        submission with spam protection.
      </p>
    </div>
  );
}
