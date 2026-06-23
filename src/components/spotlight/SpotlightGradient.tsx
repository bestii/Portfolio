"use client";

import { useRef } from "react";
import { useSpotlightPosition } from "./use-spotlight-position";

const SpotlightGradient = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  useSpotlightPosition(containerRef);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="page-gradient-bg pointer-events-none fixed inset-0 z-0"
    />
  );
};

export { SpotlightGradient };
