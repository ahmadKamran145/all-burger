"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const items = [
  {
    src: "https://images.unsplash.com/photo-1576107232684-1279f390859f?q=80&w=900&auto=format&fit=crop",
    alt: "Crispy golden fries",
    speed: 1,
    className:
      "left-[4%] top-[16%] w-40 -rotate-6 md:left-[10%] md:w-56",
  },
  {
    src: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=900&auto=format&fit=crop",
    alt: "Double smash burger",
    speed: 1.8,
    className:
      "right-[6%] top-[8%] w-44 rotate-3 md:right-[12%] md:w-64",
  },
  {
    src: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=900&auto=format&fit=crop",
    alt: "Thick milkshake",
    speed: 1.3,
    className:
      "bottom-[6%] left-[18%] w-36 rotate-6 md:left-[24%] md:w-48",
  },
];

export default function Stack() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  return (
    <section
      id="concept"
      ref={ref}
      className="relative overflow-hidden bg-cream py-40 md:py-56"
    >
      {/* floating products drifting at different speeds */}
      {items.map((item) => (
        <FloatingItem key={item.src} {...item} progress={scrollYProgress} />
      ))}

      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="mb-5 text-xs font-bold uppercase tracking-[0.35em] text-flame"
        >
          — The full court press
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, scale: 1.25, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-display grunge text-[clamp(3.5rem,10vw,8rem)] uppercase leading-none"
        >
          The Stack.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mt-6 max-w-md text-base leading-relaxed text-ink/60"
        >
          Burger. Fries. Sauce. Shake. Pick your starters and build a combo
          that plays all four quarters.
        </motion.p>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          href="#menu"
          className="mt-10 inline-block rounded bg-ink px-8 py-4 text-xs font-bold uppercase tracking-widest text-cream transition-colors hover:bg-flame"
        >
          Build My Combo
        </motion.a>
      </div>
    </section>
  );
}

function FloatingItem({
  src,
  alt,
  speed,
  className,
  progress,
}: (typeof items)[number] & {
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const y = useTransform(progress, [0, 1], [90 * speed, -90 * speed]);
  return (
    <motion.div style={{ y }} className={`absolute ${className}`}>
      <img
        src={src}
        alt={alt}
        className="aspect-square w-full rounded-2xl object-cover shadow-[0_25px_50px_rgba(23,19,15,0.25)]"
      />
    </motion.div>
  );
}
