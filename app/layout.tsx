import { Footer, Header } from '@/app/components';
import type { Metadata } from 'next';
import { Barlow } from 'next/font/google';
import { FC, PropsWithChildren } from 'react';

import '@fortawesome/fontawesome-svg-core/styles.css';
import './themes/globals.scss';

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal'],
  display: 'swap',
  variable: '--font-barlow',
});

export const metadata: Metadata = {
  title: 'Bestin John',
  description:
    'Portfolio of Bestin John. An enthusiastic frontend developer who loves to be creative at the same time explore new technologies Loves to travel and play cricket.',
  keywords:
    'Bestin John, Portfolio, Developer, HTML, CSS, JS, JQuery VueJS, NuxtJS, KnockoutJS, ReactJS, VueJS, Btech, CS, Computer Science, eCommerce, Web, Frontend, Bootstrap, experience, skills, computer science, engineering, developed skills,technische universität, kaiserslautern',
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang='en' className={`${barlow.variable} dark-mode font-sans`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
