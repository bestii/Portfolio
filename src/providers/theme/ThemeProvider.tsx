"use client";

import {
  createContext,
  type ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

const THEME_KEY = "theme";

export const THEME = {
  DARK: "dark",
  LIGHT: "light",
} as const;

export type Theme = (typeof THEME)[keyof typeof THEME];

interface ThemeContextType {
  theme: Theme;
  setTheme: (t: Theme) => void;
  toggle: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const getSystemPrefersDark = () => {
  if (typeof window === "undefined" || !window.matchMedia) return null;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    try {
      const stored = localStorage.getItem(THEME_KEY);
      if (stored === THEME.LIGHT || stored === THEME.DARK) return stored;
      const systemPrefersDark = getSystemPrefersDark();
      if (systemPrefersDark === null) return THEME.DARK;
      return systemPrefersDark ? THEME.DARK : THEME.LIGHT;
    } catch {
      return THEME.DARK;
    }
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    let mq: MediaQueryList | null = null;
    try {
      const stored = localStorage.getItem(THEME_KEY);
      if (stored === THEME.LIGHT || stored === THEME.DARK) return; // user override
      if (typeof window === "undefined" || !window.matchMedia) return;
      mq = window.matchMedia("(prefers-color-scheme: dark)");
    } catch {
      return;
    }

    const handler = (e: MediaQueryListEvent) => {
      const next = e.matches ? THEME.DARK : THEME.LIGHT;
      setThemeState(next);
    };

    type LegacyMQ = MediaQueryList & {
      addListener?: (
        listener: (this: MediaQueryList, ev: MediaQueryListEvent) => void,
      ) => void;
      removeListener?: (
        listener: (this: MediaQueryList, ev: MediaQueryListEvent) => void,
      ) => void;
    };

    const legacy = mq as LegacyMQ | null;
    if (legacy) {
      if (typeof legacy.addEventListener === "function") {
        legacy.addEventListener("change", handler as EventListener);
      } else if (typeof legacy.addListener === "function") {
        legacy.addListener(handler);
      }
    }

    return () => {
      if (!legacy) return;
      if (typeof legacy.removeEventListener === "function") {
        legacy.removeEventListener("change", handler as EventListener);
      } else if (typeof legacy.removeListener === "function") {
        legacy.removeListener(handler);
      }
    };
  }, []);

  const setTheme = (t: Theme) => {
    setThemeState(t);
    try {
      localStorage.setItem(THEME_KEY, t);
    } catch {
      /* ignore */
    }
  };

  const toggle = () =>
    setTheme(theme === THEME.DARK ? THEME.LIGHT : THEME.DARK);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
};

export default ThemeProvider;
