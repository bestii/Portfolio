import type { Metadata } from 'next';
import { Barlow } from 'next/font/google';
import { FC, PropsWithChildren } from 'react';
import './themes/globals.scss';

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal'],
  display: 'swap',
  variable: '--font-barlow',
});

// Add Roboto-mono font of needed.

export const metadata: Metadata = {
  title: 'Bestin John',
  description:
    'Portfolio of Bestin John. An enthusiastic frontend developer who loves to be creative at the same time explore new technologies Loves to travel and play cricket.',
  keywords:
    'Bestin John, Portfolio, Developer, HTML, CSS, JS, JQuery VueJS, NuxtJS, KnockoutJS, ReactJS, VueJS, Btech, CS, Computer Science, eCommerce, Web, Frontend, Bootstrap, experience, skills, computer science, engineering, developed skills,technische universität, kaiserslautern',
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang='en' className={`${barlow.variable} font-sans`}>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
