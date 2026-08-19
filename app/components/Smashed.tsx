"use client";

import { useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

/*
 * The floating-burger video is a transparent-background WebM (AI-matted
 * frame by frame), and it does not autoplay — its timeline is driven by the
 * scroll position, so the burger assembles in mid-air as you scroll through
 * the pinned section and plays backward when you scroll back up.
 */
export default function Smashed() {
  const ref = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const targetTime = useRef(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // map section progress -> video timeline (finish a little early so the
  // assembled burger holds on screen before the section unpins)
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const vid = videoRef.current;
    if (!vid || !vid.duration) return;
    const p = Math.min(Math.max((v - 0.04) / 0.78, 0), 1);
    targetTime.current = p * (vid.duration - 0.06);
  });

  // ease the playhead toward the scroll target every frame for smooth scrubbing
  useEffect(() => {
    let raf: number;
    const tick = () => {
      const vid = videoRef.current;
      if (vid && vid.readyState >= 2) {
        const diff = targetTime.current - vid.currentTime;
        if (Math.abs(diff) > 0.02) {
          vid.currentTime = vid.currentTime + diff * 0.3;
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const textOpacity = useTransform(scrollYProgress, [0.35, 0.6], [0, 1]);
  const textX = useTransform(scrollYProgress, [0.35, 0.6], [60, 0]);
  const bgX = useTransform(scrollYProgress, [0, 1], ["4%", "-10%"]);

  return (
    <section ref={ref} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {/* warm glow behind the flying burger */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(45%_45%_at_35%_50%,rgba(238,118,35,0.14),transparent_70%)]" />

        {/* giant outlined watermark drifting behind */}
        <motion.span
          style={{ x: bgX }}
          className="outline-text font-display pointer-events-none absolute top-1/2 -translate-y-1/2 whitespace-nowrap text-[18vw] leading-none"
        >
          SMASHED TO ORDER
        </motion.span>

        <div className="mx-auto grid w-full max-w-6xl items-center gap-8 px-5 md:grid-cols-2">
          {/* scroll-scrubbed floating burger */}
          <div className="relative mx-auto h-[82vh] w-full max-w-[560px]">
            <video
              ref={videoRef}
              muted
              playsInline
              preload="auto"
              className="h-full w-full object-contain [filter:drop-shadow(0_30px_40px_rgba(0,0,0,0.6))]"
            >
              {/* Safari plays HEVC-with-alpha; Chrome/Firefox take the VP9 WebM */}
              <source
                src="/videos/space-burger.mov"
                type='video/mp4; codecs="hvc1"'
              />
              <source src="/videos/space-burger.webm" type="video/webm" />
            </video>
          </div>

          <motion.div style={{ opacity: textOpacity, x: textX }}>
            <div className="mb-6 h-1 w-24 bg-flame" />
            <h2 className="font-display grunge text-5xl uppercase text-cream md:text-6xl">
              Smashed to Order
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-cream/65">
              A quarter-pound smash patty with melted cheese, grilled onions,
              pickles, and house sauce — pressed hard on a screaming-hot
              griddle so every edge goes crispy.
            </p>
            <p className="mt-4 max-w-md text-base leading-relaxed text-cream/65">
              No heat lamps. No shortcuts. Your burger doesn&apos;t exist until
              you order it.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
