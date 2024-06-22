export const appTheme = {
  system: 'system',
  light: 'light',
  dark: 'dark',
  sepia: 'sepia',
} as const;

export type AppTheme = (typeof appTheme)[keyof typeof appTheme];
