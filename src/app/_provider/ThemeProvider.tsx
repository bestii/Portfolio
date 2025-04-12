"use client";

import {
  type FC,
  type PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useLocalStorage } from "usehooks-ts";
import type { AppTheme, PreferredOptions } from "~/settings/application";
import { ThemeContext } from "../_contexts/ThemeContext";

const LOCAL_STORAGE_KEY = "theme-mode";

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [preference, setPreference] = useState<PreferredOptions>("");
  const [selectedTheme, setTheme] = useLocalStorage<AppTheme>(
    LOCAL_STORAGE_KEY,
    "system",
  );

  const getPreference = useCallback(() => {
    if (typeof window === "undefined") return "dark";
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)",
    );
    const isDarkMode = darkModeMediaQuery.matches;
    return isDarkMode ? "dark" : "light";
  }, []);

  useEffect(() => {
    if (selectedTheme === "system") {
      setPreference(getPreference());
    }
  }, [getPreference, selectedTheme, setTheme]);

  const setSelectedTheme = useCallback(
    (theme: AppTheme) => {
      if (theme === "system") {
        setPreference(getPreference());
      } else {
        setPreference("");
      }
      setTheme(theme);
    },
    [getPreference, setTheme],
  );

  const themeClassPrefix = useMemo(() => {
    if (selectedTheme === "system") {
      return getPreference();
    }
    return selectedTheme;
  }, [getPreference, selectedTheme]);

  const contextValues = useMemo(
    () => ({
      selectedTheme,
      setSelectedTheme,
      preference,
    }),
    [preference, selectedTheme, setSelectedTheme],
  );

  return (
    <ThemeContext.Provider value={contextValues}>
      <body className={`${themeClassPrefix}-mode`}>{children}</body>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
