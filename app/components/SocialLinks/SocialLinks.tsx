import {
  faFacebookF as facebookIcon,
  faGithub as githubIcon,
  faInstagram as instagramIcon,
  faLinkedinIn as linkedinIcon,
  faXTwitter as twitterIcon,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';

import './SocialLinks.scss';

const SocialLinks: FC = () => {
  return (
    <div className='site-social-links-footer fixed bottom-0 right-3.5 mb-5 hidden flex-col items-center justify-center pb-24 md:block'>
      <a
        className='social-link invisible mb-1 flex h-11 w-11 items-center justify-center rounded-full leading-10'
        href='https://www.youtube.com/channel/UCAQ_qW6iR2BojA25aDwZ7ow'
        aria-label='Youtube'
        target='_blank'
        rel='noopener
      noreferrer'
      ></a>
      <a
        className='social-link mb-1 flex h-11 w-11 items-center justify-center rounded-full leading-10'
        href='https://www.facebook.com/bestinjohn'
        aria-label='Facebook'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FontAwesomeIcon icon={facebookIcon} className='social-icon' />
      </a>
      <a
        className='social-link mb-1 flex h-11 w-11 items-center justify-center rounded-full leading-10'
        href='https://github.com/bestii'
        aria-label='GitHub'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FontAwesomeIcon icon={githubIcon} className='social-icon' />
      </a>
      <a
        className='social-link mb-1 flex h-11 w-11 items-center justify-center rounded-full leading-10'
        href='https://www.instagram.com/iambestin/'
        aria-label='Instagram'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FontAwesomeIcon icon={instagramIcon} className='social-icon' />
      </a>
      <a
        className='social-link mb-1 flex h-11 w-11 items-center justify-center rounded-full leading-10'
        href='https://twitter.com/_bestinjohn'
        aria-label='Twitter'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FontAwesomeIcon
          icon={twitterIcon}
          height={20}
          width={20}
          className='social-icon'
        />
      </a>
      <a
        className='social-link mb-1 flex h-11 w-11 items-center justify-center rounded-full leading-10'
        href='https://www.linkedin.com/in/bestin-john/'
        aria-label='LinkedIn'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FontAwesomeIcon icon={linkedinIcon} className='social-icon' />
      </a>
      <span
        className='social-links-line absolute bottom-0 left-2/4 h-20'
        aria-hidden='true'
      ></span>
    </div>
  );
};

export default SocialLinks;
