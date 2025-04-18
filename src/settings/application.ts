import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faDesktop,
  faMoon,
  faMugHot,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

export const appTheme = {
  system: "system",
  light: "light",
  dark: "dark",
  sepia: "sepia",
} as const;

export type AppTheme = (typeof appTheme)[keyof typeof appTheme];
export type PreferredOptions = Extract<AppTheme, "light" | "dark">;
export const themes = Object.keys(appTheme) as AppTheme[];

export const ThemeToIcon: Record<AppTheme, IconProp> = {
  system: faDesktop,
  light: faSun,
  dark: faMoon,
  sepia: faMugHot,
};
