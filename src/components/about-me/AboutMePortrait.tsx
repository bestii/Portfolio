"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

import portraitImage from "@/assets/images/portrait.png";

const AboutMePortrait = () => {
  const prefersReducedMotion = useReducedMotion();

  const transition = prefersReducedMotion
    ? { duration: 0 }
    : { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const };

  return (
    <motion.div
      className="group relative mx-auto w-full max-w-md"
      initial="rest"
      animate="rest"
      whileHover={prefersReducedMotion ? undefined : "hover"}
    >
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 rounded-2xl border-2 border-(--color-accent)"
        variants={{
          rest: { x: 20, y: 20 },
          hover: { x: 28, y: 28 },
        }}
        transition={transition}
      />

      <motion.div
        className="relative overflow-hidden rounded-2xl bg-(--color-bg-secondary) shadow-2xl shadow-black/20 ring-1 ring-white/10"
        variants={{
          rest: { x: 0, y: 0 },
          hover: { x: -4, y: -4 },
        }}
        transition={transition}
      >
        <motion.div
          variants={{
            rest: {
              filter: "grayscale(1) saturate(0) contrast(1.1)",
            },
            hover: {
              filter: "grayscale(0) saturate(1) contrast(1)",
            },
          }}
          transition={transition}
        >
          <Image
            src={portraitImage}
            alt="Portrait of Bestin John"
            className="h-auto w-full object-cover"
            priority={false}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default AboutMePortrait;
