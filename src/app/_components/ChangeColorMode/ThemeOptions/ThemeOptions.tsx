"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import "./ThemeOptions.scss";
import { useThemeContext } from "~/app/_contexts/ThemeContext";
import { themes, ThemeToIcon } from "~/settings/application";

const ThemeOptions = () => {
  const { selectedTheme, setSelectedTheme } = useThemeContext();

  return (
    <ul className="theme-options">
      {themes.map((theme) => (
        <li
          className="inline-block p-1"
          key={theme}
          onClick={() => {
            setSelectedTheme(theme);
          }}
        >
          <FontAwesomeIcon
            icon={ThemeToIcon[theme]}
            className={`feather ${selectedTheme === theme ? "preferred" : ""}`}
            size="xl"
          />
        </li>
      ))}
    </ul>
  );
};

export default ThemeOptions;
