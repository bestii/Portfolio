import { ThemeToIcon, themes } from '@/app/settings';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './ThemeOptions.scss';

const ThemeOptions = () => {
  return (
    <ul className='theme-options'>
      {themes.map((theme) => (
        <li className='inline-block p-1' key={theme}>
          <FontAwesomeIcon
            icon={ThemeToIcon[theme]}
            className='feather'
            size='xl'
          />
        </li>
      ))}
    </ul>
  );
};

export default ThemeOptions;
