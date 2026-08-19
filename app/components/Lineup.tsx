"use client";

import { motion, type Variants } from "framer-motion";

const burgers = [
  {
    name: "Free Throw",
    desc: "Classic smash patty, American cheese, pickles, diced onions, house sauce on a toasted potato bun.",
    img: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=900&auto=format&fit=crop",
    prices: [
      ["Single", "$7.45"],
      ["Double", "$10.35"],
      ["Triple", "$13.75"],
    ],
  },
  {
    name: "Layup",
    desc: "Double bacon, sharp cheddar, crispy onions, and a sweet-smoky glaze that finishes strong at the rim.",
    img: "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?q=80&w=900&auto=format&fit=crop",
    prices: [
      ["Single", "$9.10"],
      ["Double", "$13.75"],
      ["Triple", "$16.05"],
    ],
  },
  {
    name: "Hook Shot",
    desc: "Any burger plus loaded fries, a dip of your choice, and a drink. The full combo, boxed and buzzing.",
    img: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=900&auto=format&fit=crop",
    prices: [
      ["Single", "$11.90"],
      ["Double", "$14.90"],
      ["Combo", "$19.50"],
    ],
  },
];

const stamp: Variants = {
  hidden: { opacity: 0, scale: 1.3, filter: "blur(7px)" },
  show: (i: number) => ({
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      delay: i * 0.13,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Lineup() {
  return (
    <section id="menu" className="bg-cream px-5 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, scale: 1.25, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-display grunge text-center text-[clamp(3.5rem,10vw,8rem)] uppercase leading-none"
        >
          The Lineup.
        </motion.h2>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {burgers.map((b, i) => (
            <motion.article
              key={b.name}
              custom={i}
              variants={stamp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="flex flex-col overflow-hidden rounded-lg border border-ink/15 bg-white/40 shadow-[0_18px_40px_rgba(23,19,15,0.12)]"
            >
              <div className="overflow-hidden">
                <img
                  src={b.img}
                  alt={`${b.name} burger`}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="glitch-hover font-display cursor-default text-3xl uppercase tracking-wide">
                  {b.name}{" "}
                  <span className="text-flame">Burger</span>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/60">
                  {b.desc}
                </p>

                <dl className="mt-6 space-y-2">
                  {b.prices.map(([size, price]) => (
                    <div
                      key={size}
                      className="flex items-baseline gap-2 text-sm"
                    >
                      <dt className="font-semibold uppercase tracking-widest text-ink/70">
                        {size}
                      </dt>
                      <span className="flex-1 border-b border-dotted border-ink/30" />
                      <dd className="font-display text-lg">{price}</dd>
                    </div>
                  ))}
                </dl>

                <button className="mt-8 rounded border-2 border-ink px-5 py-3 text-xs font-bold uppercase tracking-widest transition-colors hover:bg-flame hover:text-white hover:border-flame">
                  Order Now
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
