import { ChangeColorMode, Footer, Header } from '@/app/components';
import { ReactQueryProvider, ThemeProvider } from '@/app/providers';
import '@fortawesome/fontawesome-svg-core/styles.css';
import type { Metadata, Viewport } from 'next';
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

const APP_NAME = 'PWA App';
const APP_DEFAULT_TITLE = 'My Awesome PWA App';
const APP_TITLE_TEMPLATE = '%s - PWA App';
const APP_DESCRIPTION = 'Best PWA app in the world!';

export const metadata: Metadata = {
  title: 'Bestin John',
  description:
    'Portfolio of Bestin John. An enthusiastic frontend developer who loves to be creative at the same time explore new technologies Loves to travel and play cricket.',
  keywords:
    'Bestin John, Portfolio, Developer, HTML, CSS, JS, JQuery VueJS, NuxtJS, KnockoutJS, ReactJS, VueJS, Btech, CS, Computer Science, eCommerce, Web, Frontend, Bootstrap, experience, skills, computer science, engineering, developed skills,technische universität, kaiserslautern',
  applicationName: APP_NAME,
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: 'summary',
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: '#FFFFFF',
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang='en' className={`${barlow.variable} font-sans`}>
      <ReactQueryProvider>
        <ThemeProvider>
          <Header />
          <main>
            <ChangeColorMode />
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </ReactQueryProvider>
    </html>
  );
};

export default RootLayout;
