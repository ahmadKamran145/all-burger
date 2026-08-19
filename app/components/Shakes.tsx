"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const SHAKE_IMG =
  "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=80&w=1000&auto=format&fit=crop";

export default function Shakes() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yImg = useTransform(scrollYProgress, [0, 1], [70, -70]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-coal px-5 py-24 text-cream md:py-36"
    >
      {/* faint watermark */}
      <span className="outline-text font-display pointer-events-none absolute left-1/2 top-8 -translate-x-1/2 whitespace-nowrap text-[13vw] leading-none">
        OVERTIME
      </span>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <motion.div style={{ y: yImg }} className="order-2 md:order-1">
          <img
            src={SHAKE_IMG}
            alt="Thick strawberry milkshake"
            className="mx-auto aspect-[4/5] w-full max-w-[420px] rounded-2xl object-cover shadow-[0_40px_80px_rgba(0,0,0,0.55)]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 md:order-2"
        >
          <div className="mb-6 h-1 w-24 bg-flame" />
          <h2 className="font-display grunge text-5xl uppercase md:text-6xl">
            Overtime Shakes
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-cream/65">
            Cookies-and-cream, caramel biscuit, and strawberry — blended thick
            enough to survive all four quarters and then some.
          </p>
          <p className="mt-4 max-w-md text-base leading-relaxed text-cream/65">
            Real ice cream, real toppings, spoon-first engineering.
          </p>
          <a
            href="#menu"
            className="mt-9 inline-block rounded bg-flame px-8 py-4 text-xs font-bold uppercase tracking-widest text-white transition-transform hover:scale-105"
          >
            Shake It Up
          </a>
        </motion.div>
      </div>
    </section>
  );
}
