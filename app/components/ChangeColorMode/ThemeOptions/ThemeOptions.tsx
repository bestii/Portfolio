'use client';

import { useThemeContext } from '@/app/contexts';
import { AppTheme, ThemeToIcon, themes } from '@/app/settings';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './ThemeOptions.scss';

const ThemeOptions = () => {
  const { selectedTheme, setSelectedTheme } = useThemeContext();
  return (
    <ul className='theme-options'>
      {themes.map((theme) => (
        <li
          className='inline-block p-1'
          key={theme}
          onClick={() => {
            setSelectedTheme(theme as AppTheme);
          }}
        >
          <FontAwesomeIcon
            icon={ThemeToIcon[theme]}
            className={`feather ${selectedTheme === theme ? 'preferred' : ''}`}
            size='xl'
          />
        </li>
      ))}
    </ul>
  );
};

export default ThemeOptions;
