"use client";

import { useEffect, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const supportsFinePointer = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    ).matches;

    // Keep touch scrolling native so it stays immediate and doesn't compete
    // with the browser's own touch momentum.
    if (prefersReducedMotion || !supportsFinePointer) return;

    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      anchors: true,
      // A slightly higher lerp follows wheel input more quickly, reducing the
      // delayed, floaty feel while retaining smooth desktop scrolling.
      lerp: 0.16,
      smoothWheel: true,
    });

    const updateScrollTrigger = () => ScrollTrigger.update();
    const updateLenis = (time: number) => lenis.raf(time * 1000);

    lenis.on("scroll", updateScrollTrigger);
    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.off("scroll", updateScrollTrigger);
      gsap.ticker.remove(updateLenis);
      gsap.ticker.lagSmoothing(500, 33);
      lenis.destroy();
    };
  }, []);

  return children;
}
