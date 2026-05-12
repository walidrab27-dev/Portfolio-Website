"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const smoothX = useSpring(x, { stiffness: 420, damping: 34 });
  const smoothY = useSpring(y, { stiffness: 420, damping: 34 });

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    setEnabled(canHover);
    if (!canHover) return undefined;

    const onMove = (event: PointerEvent) => {
      x.set(event.clientX - 13);
      y.set(event.clientY - 13);
    };

    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[90] h-7 w-7 rounded-full border border-cyan/60 bg-cyan/10 mix-blend-screen"
      style={{ x: smoothX, y: smoothY }}
      aria-hidden
    />
  );
}
