'use client';

import { ThemeContext } from '@/app/contexts';
import { AppTheme } from '@/app/settings';
import { FC, PropsWithChildren, useMemo, useState } from 'react';

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [selectedTheme, setTheme] = useState<AppTheme>('dark');

  const setSelectedTheme = (theme: AppTheme) => {
    if (theme === 'system') return;
    setTheme(theme);
  };

  const contextValues = useMemo(
    () => ({
      selectedTheme,
      setSelectedTheme,
    }),
    [selectedTheme]
  );

  return (
    <ThemeContext.Provider value={contextValues}>
      <body className={`${selectedTheme}-mode`}>{children}</body>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
