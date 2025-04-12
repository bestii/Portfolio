"use client";

import { createContext, useContext } from "react";
import type { AppTheme, PreferredOptions } from "~/settings/application";

type ThemeContextType = {
  selectedTheme: AppTheme;
  preference: PreferredOptions;
  setSelectedTheme: (theme: AppTheme) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  selectedTheme: "system",
  preference: "",
  setSelectedTheme: () => ({}),
});

export const useThemeContext = () => useContext(ThemeContext);
