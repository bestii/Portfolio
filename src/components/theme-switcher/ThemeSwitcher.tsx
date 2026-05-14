"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { THEME, useTheme } from "@/providers/theme/ThemeProvider";

type ThemeSwitcherProps = {
  className?: string;
};

const ThemeSwitcher = ({ className = "" }: ThemeSwitcherProps) => {
  const { theme, toggle } = useTheme();
  const isDark = theme === THEME.DARK;

  return (
    <motion.button
      onClick={toggle}
      className={`relative inline-flex h-8 w-16 items-center rounded-full border border-slate-400/30 p-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60 ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      animate={{
        backgroundColor: isDark
          ? "rgba(30, 41, 59, 0.8)"
          : "rgba(241, 245, 249, 0.8)",
      }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          background: isDark
            ? "linear-gradient(90deg, rgba(15,23,42,0.6) 0%, rgba(30,41,59,0.4) 100%)"
            : "linear-gradient(90deg, rgba(241,245,249,0.6) 0%, rgba(226,232,240,0.4) 100%)",
        }}
        transition={{ duration: 0.4 }}
      />
      <motion.div
        className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full border border-white/20 shadow-lg"
        animate={{
          x: isDark ? 28 : 0,
          backgroundColor: isDark ? "rgb(15, 23, 42)" : "rgb(255, 255, 255)",
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
        }}
      >
        <motion.div
          key={theme}
          initial={{ opacity: 0, rotate: -180, y: 10 }}
          animate={{ opacity: 1, rotate: 0, y: 0 }}
          exit={{ opacity: 0, rotate: 180, y: -10 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25,
          }}
        >
          {isDark ? (
            <Moon size={14} className="text-slate-400" />
          ) : (
            <Sun size={14} className="text-amber-400" />
          )}
        </motion.div>
      </motion.div>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-3">
        <motion.div
          animate={{
            scale: isDark ? 0.8 : 1,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <Sun size={12} className="text-amber-300" />
        </motion.div>

        <motion.div
          animate={{
            scale: isDark ? 1 : 0.8,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
        >
          <Moon size={12} className="text-slate-400" />
        </motion.div>
      </div>
    </motion.button>
  );
};

export default ThemeSwitcher;
