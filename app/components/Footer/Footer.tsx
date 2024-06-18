import { GoToTop, SocialLinks } from '@/app/components';
import { FC } from 'react';

import './Footer.scss';

const Footer: FC = () => {
  const copyrightYear = new Date().getFullYear();

  return (
    <footer className='copyright-footer py-2 text-center text-sm sm:text-base'>
      <SocialLinks />
      <GoToTop />
      <p className='my-3'>
        {`Bestin John © Copyright ${copyrightYear}. All Rights Reserved.`}
      </p>
      <p className='hidden'>
        <span>
          This is a NextJS version of the design inspired from the open-source
          project
        </span>
        <a href='https://github.com/manussakis/leeneon'>leeneon</a>
      </p>
    </footer>
  );
};

export default Footer;
