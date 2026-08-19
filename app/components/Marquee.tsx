"use client";

const items = [
  "Smash Burgers",
  "Loaded Fries",
  "Thick Shakes",
  "Made Fresh",
  "Made Bold",
];

export default function Marquee() {
  const row = items.map((t) => `${t} ★ `).join("");
  return (
    <div
      aria-hidden="true"
      className="overflow-hidden border-y-4 border-ink bg-flame py-3"
    >
      <div className="animate-marquee inline-block whitespace-nowrap">
        <span className="font-display text-2xl uppercase tracking-wide text-ink md:text-3xl">
          {row}
        </span>
        <span className="font-display text-2xl uppercase tracking-wide text-ink md:text-3xl">
          {row}
        </span>
      </div>
    </div>
  );
}
