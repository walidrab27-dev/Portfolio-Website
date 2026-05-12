"use client";

import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { ArrowDown, ArrowRight, Send } from "lucide-react";
import { MouseEvent } from "react";
import { HeroScene } from "@/components/scene";

export function Hero() {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(50);
  const y = useMotionValue(50);
  const smoothX = useSpring(x, { stiffness: 90, damping: 22 });
  const smoothY = useSpring(y, { stiffness: 90, damping: 22 });
  const spotlight = useMotionTemplate`radial-gradient(circle at ${smoothX}% ${smoothY}%, rgba(34, 211, 238, 0.16), transparent 34%)`;

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(((event.clientX - rect.left) / rect.width) * 100);
    y.set(((event.clientY - rect.top) / rect.height) * 100);
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden px-4 pt-24"
    >
      <motion.div aria-hidden className="absolute inset-0 z-0 bg-aurora-mesh" style={reduceMotion ? undefined : { background: spotlight }} />
      <HeroScene />
      <div className="noise-mask" />

      <div className="relative z-10 mx-auto grid w-[min(1180px,100%)] items-center gap-10 pb-14 pt-16 lg:grid-cols-[minmax(0,0.98fr)_minmax(320px,0.72fr)]">
        <div>
          <motion.div
            className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyan/25 bg-cyan/10 px-4 py-2 text-sm font-semibold text-cyan shadow-glow"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="h-2 w-2 rounded-full bg-mint shadow-[0_0_16px_rgba(52,211,153,0.85)]" />
            Creative frontend developer and UI/UX designer
          </motion.div>

          <motion.h1
            className="max-w-[780px] font-display text-[clamp(2.75rem,5.2vw,5rem)] font-black leading-[0.96] text-pearl text-balance"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.82, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            Designing immersive digital experiences with creativity and code.
          </motion.h1>

          <motion.p
            className="mt-7 max-w-2xl text-lg leading-8 text-mist md:text-xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.82, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
          >
            I build modern interfaces, interactive worlds, and premium user experiences shaped by design taste,
            motion, and frontend craft.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.82, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-pearl px-6 py-4 text-sm font-black text-void transition hover:bg-cyan"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/12 bg-white/[0.055] px-6 py-4 text-sm font-black text-pearl backdrop-blur-xl transition hover:border-violet/50 hover:bg-violet/15"
            >
              Contact Me
              <Send className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
            </a>
          </motion.div>
        </div>

        <motion.aside
          className="glass-panel relative ml-auto w-full max-w-[440px] rounded-2xl p-4"
          initial={{ opacity: 0, scale: 0.94, y: 32 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="rounded-xl border border-white/10 bg-void/70 p-5">
            <div className="mb-8 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-mist">Experience Core</span>
              <span className="rounded-full bg-mint/10 px-3 py-1 text-xs font-bold text-mint">Online</span>
            </div>
            <div className="space-y-5">
              {[
                ["UI/UX Systems", "93%"],
                ["Interactive Motion", "86%"],
                ["Frontend Logic", "90%"]
              ].map(([label, value]) => (
                <div key={label}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="text-pearl">{label}</span>
                    <span className="text-cyan">{value}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-cyan via-violet to-ember"
                      initial={{ width: 0 }}
                      animate={{ width: value }}
                      transition={{ duration: 1.2, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.aside>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-6 left-1/2 z-10 grid h-12 w-8 -translate-x-1/2 place-items-center rounded-full border border-white/15 bg-white/[0.045] text-cyan backdrop-blur-xl"
        animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.9, ease: "easeInOut" }}
      >
        <ArrowDown className="h-4 w-4" aria-hidden />
      </motion.a>
    </section>
  );
}
