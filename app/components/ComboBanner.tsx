"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const products = [
  {
    src: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=700&auto=format&fit=crop",
    alt: "Smash burger in the box",
  },
  {
    src: "https://images.unsplash.com/photo-1576107232684-1279f390859f?q=80&w=700&auto=format&fit=crop",
    alt: "Golden fries in the box",
  },
  {
    src: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=80&w=700&auto=format&fit=crop",
    alt: "Shake in the box",
  },
];

export default function ComboBanner() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.88, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.35], [0.4, 1]);

  return (
    <section ref={ref} className="bg-coal px-5 py-24 md:py-32">
      <motion.div
        style={{ scale, opacity }}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-lg border-2 border-brick/60 bg-[#1a1511] p-8 shadow-[0_50px_100px_rgba(0,0,0,0.6)] md:p-14"
      >
        {/* box-lid star pattern */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.05] [background-image:radial-gradient(circle,#f2ecdf_1.5px,transparent_1.5px)] [background-size:28px_28px]" />

        <div className="relative text-center">
          <span className="mx-auto grid h-20 w-20 place-items-center rounded-full border-4 border-brick bg-flame font-display text-3xl text-coal">
            ★
          </span>
          <h2 className="font-display grunge mt-6 text-[clamp(3rem,8vw,6.5rem)] uppercase leading-none text-cream">
            All <span className="text-flame">★</span> Star
          </h2>
          <div className="mx-auto mt-3 flex max-w-sm items-center gap-4">
            <span className="h-0.5 flex-1 bg-brick" />
            <span className="font-display text-2xl uppercase tracking-[0.25em] text-flame">
              Burgers
            </span>
            <span className="h-0.5 flex-1 bg-brick" />
          </div>
          <p className="mt-5 text-xs font-bold uppercase tracking-[0.45em] text-cream/60">
            ★ Made Fresh · Made Bold ★
          </p>
        </div>

        {/* the combo tray */}
        <div className="relative mt-10 grid grid-cols-3 gap-4 md:gap-6">
          {products.map((p, i) => (
            <motion.div
              key={p.src}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: 0.6,
                delay: i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="overflow-hidden rounded border border-cream/15 bg-coal"
            >
              <img
                src={p.src}
                alt={p.alt}
                className="aspect-square w-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
