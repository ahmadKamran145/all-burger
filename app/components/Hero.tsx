"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const lines = ["BUILT LIKE", "AN ALL-STAR."];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yVideo = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, 70]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden bg-black pt-24 text-cream"
    >
      {/* cinematic burger footage, full bleed */}
      <motion.video
        style={{ y: yVideo }}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full scale-110 object-cover object-[72%_center]"
        src="/videos/burger-hero.mp4"
      />
      {/* legibility gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/15" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_50%_at_70%_55%,rgba(238,118,35,0.12),transparent_70%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-16">
        <motion.div style={{ y: yText }} className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="mb-4 text-xs font-bold uppercase tracking-[0.35em] text-flame"
          >
            — All Star Burgers
          </motion.p>

          <h1 className="font-display grunge text-[clamp(3.2rem,8.5vw,7.5rem)] leading-[0.95]">
            {lines.map((line, i) => (
              <span key={line} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "115%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.9,
                    delay: 0.15 + i * 0.13,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="mt-5 max-w-md text-base leading-relaxed text-cream/75"
          >
            Smash burgers, loaded fries, and shakes from Clinton Ave. Griddled
            loud, stacked high, gone fast.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#menu"
              className="rounded bg-flame px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition-transform hover:scale-105"
            >
              Order Now
            </a>
            <a
              href="#menu"
              className="rounded bg-cream px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-ink transition-transform hover:scale-105"
            >
              View Menu
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-8 text-xs font-bold uppercase tracking-[0.3em] text-flame/80"
          >
            Ready in 10–15 min
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
