'use client';

import { faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, useState } from 'react';

import './ChangeColorMode.scss';

const ChangeColorMode: FC = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleSettings = () => {
    setOpen((prev) => !prev);
  };
  return (
    <aside
      className={`settings-menu fixed right-0 top-1/4 z-20 flex items-start ${isOpen ? 'open' : ''}`}
    >
      <button
        className='settings-toggle z-10 select-none'
        aria-label='Close theme options dialog'
        aria-expanded='true'
        aria-controls='settings'
        onClick={toggleSettings}
      >
        <FontAwesomeIcon icon={faGear} />
      </button>
      <div id='settings' className='settings-menu-options w-60 p-4'>
        <ul>
          <li className='inline-block p-1'></li>
        </ul>
        <div className='text-center'>
          <span>
            color mode: <strong>{'$colorMode.preference'}</strong>
          </span>
          <p>
            (<em>{'$colorMode.value'}</em> mode detected)
          </p>
        </div>
      </div>
    </aside>
  );
};

export default ChangeColorMode;
