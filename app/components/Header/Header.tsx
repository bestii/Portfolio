import { FC } from 'react';

import './Header.scss';

const Header: FC = () => {
  return (
    <header className='header'>
      <nav className='nav-bar fixed top-0 z-40 w-full px-2 py-5 shadow-xl'>
        <div className='flex justify-between'>
          <div className='flex'>
            <div className='logo-container'>
              {/* Link to home */}
              <span className='font-bold'>Bestin John</span>
            </div>
          </div>
          <div className='flex align-middle'>
            <ol className='flex list-none justify-between'>
              <li className='mx-2'>
                <a className='cursor-pointer p-2'>About</a>
              </li>
              <li className='mx-2'>
                <a className='cursor-pointer p-2'>Experience</a>
              </li>
              <li className='mx-2'>
                <a className='cursor-pointer p-2'>Services</a>
              </li>
              <li className='mx-2'>
                <a className='cursor-pointer p-2'>Contact</a>
              </li>
            </ol>
          </div>
          <div className='hidden'></div>
        </div>
      </nav>
      <div className='empty-space'></div>
    </header>
  );
};

export default Header;
