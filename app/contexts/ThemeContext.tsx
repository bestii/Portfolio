'use client';

import { AppTheme } from '@/app/settings';
import { createContext, useContext } from 'react';

type ThemeContextType = {
  selectedTheme: AppTheme;
  setSelectedTheme: (theme: AppTheme) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  selectedTheme: 'system',
  setSelectedTheme: () => {},
});

export const useThemeContext = () => useContext(ThemeContext);
