"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { logoDark, logoLight, logoSepia } from "~/app/_assets";
import { useThemeContext } from "~/app/_contexts/ThemeContext";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
  alt?: string;
}

const Logo = ({
  width = 35,
  height = 35,
  className = "w-auto",
  alt = "Bestin John Logo",
}: LogoProps) => {
  const { selectedTheme, preference } = useThemeContext();
  const [logoSrc, setLogoSrc] = useState(logoDark);

  useEffect(() => {
    // Determine which logo to show based on theme
    const theme = selectedTheme === "system" ? preference : selectedTheme;

    if (theme === "light") {
      setLogoSrc(logoLight); // Light colored logo for dark backgrounds
    } else if (theme === "sepia") {
      setLogoSrc(logoSepia); // Sepia-optimized logo
    } else {
      setLogoSrc(logoDark); // Dark colored logo for light backgrounds
    }
  }, [selectedTheme, preference]);

  return (
    <div className="logo-container">
      <Image
        src={logoSrc}
        alt={alt}
        width={width}
        height={height}
        className={className}
      />
    </div>
  );
};

export default Logo;
