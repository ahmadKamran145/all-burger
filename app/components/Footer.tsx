"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer id="location" className="bg-ink px-5 pb-8 pt-24 text-cream">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display grunge text-center text-[clamp(3.5rem,12vw,10rem)] uppercase leading-none"
        >
          All <span className="text-flame">★</span> Star
        </motion.h2>

        <div className="mt-16 grid gap-10 border-t border-cream/15 pt-12 text-sm md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-flame">
              Location
            </h3>
            <p className="leading-relaxed text-cream/70">
              42 Clinton Ave
              <br />
              Brooklyn, NY 11205
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-flame">
              Hours
            </h3>
            <p className="leading-relaxed text-cream/70">
              Mon – Thu · 11:00 – 22:00
              <br />
              Fri – Sun · 11:00 – 23:30
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-flame">
              Follow
            </h3>
            <ul className="space-y-2 text-cream/70">
              <li>
                <a href="#" className="transition-colors hover:text-flame">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-flame">
                  TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-cream/15 pt-6 text-[11px] uppercase tracking-[0.2em] text-cream/40 md:flex-row">
          <span>© 2026 All Star Burgers</span>
          <span>Made Fresh · Made Bold</span>
        </div>
      </div>
    </footer>
  );
}
