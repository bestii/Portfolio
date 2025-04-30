"use client";

import { useThemeContext } from "~/app/_contexts/ThemeContext";
import { themes, ThemeToIcon } from "~/settings/application";
import styles from "./ThemeOptions.module.css";

const ThemeOptions = () => {
  const { selectedTheme, setSelectedTheme } = useThemeContext();

  return (
    <ul className="theme-options flex flex-wrap gap-1">
      {themes.map((theme) => {
        const Icon = ThemeToIcon[theme];
        return (
          <li
            key={theme}
            className="inline-block cursor-pointer p-1"
            onClick={() => setSelectedTheme(theme)}
          >
            <Icon
              size={40}
              className={`${styles.feather} ${
                selectedTheme === theme ? styles.preferred : ""
              }`}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ThemeOptions;
