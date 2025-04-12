'use client';

import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { type FC, useEffect, useState } from 'react';

//import './GoToTop.scss';

const GoToTop: FC = () => {
  const [showGoTop, setShowGoTop] = useState(false);

  const handleVisibleButton = () => {
    setShowGoTop(window.scrollY > 600);
  };

  const handleScrollUp = () => {
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleVisibleButton);
  }, []);

  return (
    <>
      {showGoTop ? (
        <div className='go-to-top animate-fadeIn fixed z-50 text-center'>
          <button
            className='back-to-top-btn cursor-pointer rounded border px-3 py-2'
            onClick={handleScrollUp}
          >
            <FontAwesomeIcon
              icon={faArrowUp}
              className='back-to-top-icon'
              size='lg'
            />
          </button>
        </div>
      ) : null}
    </>
  );
};

export default GoToTop;
