"use client";

import { motion } from "framer-motion";
import { Menu, Volume2, VolumeX, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems } from "@/lib/data";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleSound = () => {
    setSoundEnabled((current) => {
      const next = !current;
      if (next && typeof window !== "undefined") {
        const AudioContextClass = window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
        if (AudioContextClass) {
          const audioContext = new AudioContextClass();
          const oscillator = audioContext.createOscillator();
          const gain = audioContext.createGain();
          oscillator.frequency.value = 528;
          gain.gain.setValueAtTime(0.0001, audioContext.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.035, audioContext.currentTime + 0.02);
          gain.gain.exponentialRampToValueAtTime(0.0001, audioContext.currentTime + 0.32);
          oscillator.connect(gain).connect(audioContext.destination);
          oscillator.start();
          oscillator.stop(audioContext.currentTime + 0.34);
        }
      }
      return next;
    });
  };

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-white/10 bg-void/72 shadow-2xl shadow-black/30 backdrop-blur-xl" : "bg-transparent"
      }`}
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="mx-auto flex h-20 w-[min(1180px,calc(100%-32px))] items-center justify-between">
        <a href="#hero" className="group flex items-center gap-3" aria-label="Walid Rabei home">
          <span className="grid h-10 w-10 place-items-center rounded-lg border border-cyan/30 bg-cyan/10 font-display text-sm font-black text-cyan shadow-glow">
            WR
          </span>
          <span className="hidden text-sm font-semibold text-pearl sm:block">
            Walid <span className="text-mist">Rabei</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.045] p-1 backdrop-blur-xl md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-mist transition hover:bg-white/10 hover:text-pearl"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleSound}
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/[0.055] text-mist transition hover:border-cyan/40 hover:text-cyan"
            aria-label={soundEnabled ? "Disable sound" : "Enable sound"}
          >
            {soundEnabled ? <Volume2 className="h-4 w-4" aria-hidden /> : <VolumeX className="h-4 w-4" aria-hidden />}
          </button>
          <a
            href="#contact"
            className="hidden rounded-lg bg-pearl px-4 py-2.5 text-sm font-bold text-void transition hover:bg-cyan sm:inline-flex"
          >
            Let&apos;s Talk
          </a>
          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/[0.055] text-pearl md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          </button>
        </div>
      </nav>

      {open ? (
        <motion.div
          className="mx-auto mb-4 grid w-[min(1180px,calc(100%-32px))] gap-2 rounded-xl border border-white/10 bg-ink/95 p-3 shadow-2xl backdrop-blur-xl md:hidden"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-3 text-sm font-semibold text-mist transition hover:bg-white/10 hover:text-pearl"
            >
              {item.label}
            </a>
          ))}
        </motion.div>
      ) : null}
    </motion.header>
  );
}
