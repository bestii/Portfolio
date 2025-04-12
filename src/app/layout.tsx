import "~/styles/globals.css";

import { type Metadata, type Viewport } from "next";
import { Barlow } from "next/font/google";
import { TRPCReactProvider } from "~/trpc/react";
import { ChangeColorMode, Footer, Header } from "./_components";
import { ToastContainer } from "react-toastify";
import ThemeProvider from "./_provider/ThemeProvider";

const APP_NAME = "Bestin John";
const APP_DEFAULT_TITLE = "Bestin John Portfolio";
const APP_TITLE_TEMPLATE = "Bestin John - PWA App";
const APP_DESCRIPTION = "Bestin John Portfolio App";

export const metadata: Metadata = {
  title: "Bestin John",
  description:
    "Portfolio of Bestin John. An enthusiastic frontend developer who loves to be creative at the same time explore new technologies Loves to travel and play cricket.",
  keywords:
    "Bestin John, Portfolio, Developer, HTML, CSS, JS, JQuery VueJS, NuxtJS, KnockoutJS, ReactJS, VueJS, Btech, CS, Computer Science, eCommerce, Web, Frontend, Bootstrap, experience, skills, computer science, engineering, developed skills,technische universität, kaiserslautern",
  applicationName: APP_NAME,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal"],
  display: "swap",
  variable: "--font-barlow",
});

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${barlow.variable} font-sans`}>
      <body>
        <TRPCReactProvider>
          <ThemeProvider>
            <Header />
            <main>
              <ChangeColorMode />
              {children}
            </main>
            <ToastContainer />
            <Footer />
          </ThemeProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
