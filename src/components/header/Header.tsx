"use client";

import logoDark from "@/assets/logos/logo-dark.png";
import logoLight from "@/assets/logos/logo-light.png";
import ThemeSwitcher from "@/components/theme-switcher/ThemeSwitcher";
import { THEME, useTheme } from "@/providers/theme/ThemeProvider";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { navItems } from "./navItems";

const Header = ({ mobileMenu }: { mobileMenu: ReactNode }) => {
  const { theme } = useTheme();
  const currentLogo = theme === THEME.DARK ? logoDark : logoLight;

  return (
    <header className="sticky top-0 z-50 backdrop-blur shadow-xl">
      <div className="md:px-12.5 px-6 py-2 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src={currentLogo} alt="Bestin John" width={40} height={40} />
          <span className="sr-only">Bestin John</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-[13px] font-mono">
          {navItems.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              data-index={`0${i + 1}.`}
              className="transition-colors before:content-[attr(data-index)] before:mr-1 before:text-(--accent)"
            >
              {item.label}
            </a>
          ))}
          <ThemeSwitcher />
        </nav>
        {mobileMenu}
      </div>
    </header>
  );
};

export default Header;
