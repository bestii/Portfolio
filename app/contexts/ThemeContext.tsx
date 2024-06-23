'use client';

import { AppTheme, PreferredOptions } from '@/app/settings';
import { createContext, useContext } from 'react';

type ThemeContextType = {
  selectedTheme: AppTheme;
  preference: PreferredOptions;
  setSelectedTheme: (theme: AppTheme) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  selectedTheme: 'system',
  preference: '',
  setSelectedTheme: () => {},
});

export const useThemeContext = () => useContext(ThemeContext);
