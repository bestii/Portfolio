'use client';

import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, useEffect, useState } from 'react';
import './GoToTop.scss';

const GoToTop: FC = () => {
  const [showGoTop, setShowGoTop] = useState(false);

  const handleVisibleButton = () => {
    setShowGoTop(window.pageYOffset > 600);
  };

  const handleScrollUp = () => {
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleVisibleButton);
  }, []);

  return (
    <button
      className='go-to-top fixed z-50 cursor-pointer'
      onClick={handleScrollUp}
    >
      <div className='top-container rounded border text-center'>
        <FontAwesomeIcon icon={faArrowUp} />
      </div>
    </button>
  );
};

export default GoToTop;
