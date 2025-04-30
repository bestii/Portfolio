import { Coffee, Monitor, Moon, Sun, type LucideIcon } from "lucide-react";

export const appTheme = {
  system: "system",
  light: "light",
  dark: "dark",
  sepia: "sepia",
} as const;

export type AppTheme = (typeof appTheme)[keyof typeof appTheme];
export type PreferredOptions = Extract<AppTheme, "light" | "dark">;
export const themes = Object.keys(appTheme) as AppTheme[];

export const ThemeToIcon: Record<AppTheme, LucideIcon> = {
  system: Monitor,
  light: Sun,
  dark: Moon,
  sepia: Coffee,
};
