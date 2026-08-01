import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Petrol Price in Pakistan Today — Latest OGRA Notified Rate",
  description: "Today's petrol and diesel price in Pakistan as notified by OGRA, updated fortnightly.",
  alternates: { canonical: "/rates/petrol" },
};

export default function PetrolPricePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-10 prose prose-invert">
      <h1>Petrol Price in Pakistan Today</h1>
      <p>
        Petrol and diesel prices in Pakistan are revised roughly every two
        weeks by OGRA (Oil and Gas Regulatory Authority), based on
        international crude prices and currency movement. A live feed for
        this page is next on our build list — for the current notified
        price, check the official OGRA announcement or your fuel provider's app.
      </p>
      <h2>Why petrol prices change every two weeks</h2>
      <p>
        The government reviews petroleum prices on the 1st and 16th of each
        month, factoring in the international oil price, exchange rate
        movement, and applicable taxes and levies.
      </p>
    </div>
  );
}
