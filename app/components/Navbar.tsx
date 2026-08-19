"use client";

import { motion } from "framer-motion";

const links = ["Menu", "Concept", "Location"];

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-cream/95 backdrop-blur"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-flame font-display text-lg leading-none text-cream">
            ★
          </span>
          <span className="font-display text-lg tracking-wide">
            ALL STAR BURGERS
          </span>
        </a>

        <ul className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.2em] md:flex">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="transition-colors hover:text-flame"
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#menu"
          className="rounded bg-flame px-4 py-2 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-ink"
        >
          Order Now
        </a>
      </nav>
    </motion.header>
  );
}
