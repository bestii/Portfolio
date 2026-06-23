"use client";

import { useEffect, useRef, type RefObject } from "react";

const LERP_FACTOR = 0.1;
const IDLE_TIMEOUT_MS = 2000;

const ACCENT_COLORS: Record<string, string> = {
  light: "rgba(5, 150, 105, 0.35)",
  dark: "rgba(100, 255, 218, 0.35)",
};

export function lerp(current: number, target: number, factor: number): number {
  return current + (target - current) * factor;
}

function getAccentColor(): string {
  const theme = document.documentElement.getAttribute("data-theme");
  return ACCENT_COLORS[theme ?? "dark"] ?? ACCENT_COLORS.dark;
}

function applyGradient(
  el: HTMLElement,
  x: number,
  y: number,
  color: string,
) {
  el.style.backgroundImage = `radial-gradient(circle at ${x}% ${y}%, ${color} 0%, transparent 30%)`;
}

export function useSpotlightPosition(
  containerRef: RefObject<HTMLDivElement | null>,
) {
  const posRef = useRef({ x: 50, y: 50 });
  const targetRef = useRef({ x: 50, y: 50 });
  const rafRef = useRef<number | null>(null);
  const idleRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const isTouch = matchMedia("(pointer: coarse)").matches;
    const el = containerRef.current;
    if (!el) return;

    if (isTouch) {
      applyGradient(el, 50, 50, getAccentColor());
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      targetRef.current = {
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      };

      clearTimeout(idleRef.current!);
      idleRef.current = setTimeout(() => {
        targetRef.current = { x: 50, y: 50 };
      }, IDLE_TIMEOUT_MS);
    };

    const animate = () => {
      const pos = posRef.current;
      const target = targetRef.current;

      pos.x = lerp(pos.x, target.x, LERP_FACTOR);
      pos.y = lerp(pos.y, target.y, LERP_FACTOR);

      applyGradient(el, pos.x, pos.y, getAccentColor());

      rafRef.current = requestAnimationFrame(animate);
    };

    const onVisibilityChange = () => {
      if (document.hidden) {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      } else if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("visibilitychange", onVisibilityChange);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      clearTimeout(idleRef.current!);
    };
  }, [containerRef]);
}
