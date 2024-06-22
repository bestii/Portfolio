import {
  IconDefinition,
  faDesktop,
  faMoon,
  faMugHot,
  faSun,
} from '@fortawesome/free-solid-svg-icons';

export const appTheme = {
  system: 'system',
  light: 'light',
  dark: 'dark',
  sepia: 'sepia',
} as const;

export type AppTheme = (typeof appTheme)[keyof typeof appTheme];
export const themes = Object.keys(appTheme);

export const ThemeToIcon: Record<string, IconDefinition> = {
  system: faDesktop,
  light: faSun,
  dark: faMoon,
  sepia: faMugHot,
};
