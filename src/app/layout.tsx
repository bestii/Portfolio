import Header from "@/components/header/Header";
import NetworkingLinks from "@/components/networking-links/NetworkingLinks";
import { fetchCmsJson } from "@/lib/cms";
import { linksSchema } from "@/lib/schemas";
import ThemeProvider from "@/providers/theme/ThemeProvider";
import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

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
  icons: {
    icon: "/favicon.ico",
  },
  // manifest: "/manifest.json",
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

const RootLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const linksResult = await fetchCmsJson("/links.json", linksSchema);
  const links = linksResult.ok ? linksResult.data : null;

  return (
    <html
      lang="en"
      className={`${inter.variable} ${robotoMono.variable} h-full antialiased`}
    >
      <body className="relative isolate min-h-full flex flex-col">
        <ThemeProvider>
          <div
            aria-hidden="true"
            className="page-gradient-bg pointer-events-none fixed inset-0 z-0"
          />

          <div className="relative z-10 flex min-h-full flex-1 flex-col">
            <Header />
            {children}
            {links && (
              <NetworkingLinks socials={links.socials} email={links.email} />
            )}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
