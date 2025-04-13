"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useThemeContext } from "~/app/_contexts/ThemeContext";
import { themes, ThemeToIcon } from "~/settings/application";
import styles from "./ThemeOptions.module.css";

const ThemeOptions = () => {
  const { selectedTheme, setSelectedTheme } = useThemeContext();

  return (
    <ul className="theme-options flex flex-wrap gap-2">
      {themes.map((theme) => (
        <li
          key={theme}
          className="inline-block cursor-pointer p-1"
          onClick={() => {
            setSelectedTheme(theme);
          }}
        >
          <FontAwesomeIcon
            icon={ThemeToIcon[theme]}
            className={`${styles.feather} ${
              selectedTheme === theme ? styles.preferred : ""
            }`}
            size="xl"
          />
        </li>
      ))}
    </ul>
  );
};

export default ThemeOptions;
