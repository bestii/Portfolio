"use client";

import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, type FC } from "react";
import { useThemeContext } from "~/app/_contexts/ThemeContext";
import styles from "./ChangeColorMode.module.css";
import ThemeOptions from "./ThemeOptions/ThemeOptions";

const ChangeColorMode: FC = () => {
  const [isOpen, setOpen] = useState(false);
  const { selectedTheme, preference } = useThemeContext();

  const toggleSettings = () => setOpen((prev) => !prev);

  return (
    <aside
      className={`fixed top-1/4 right-0 z-20 flex items-start transition-transform duration-200 ease-in-out ${styles.settingsMenu} ${isOpen ? styles.open : ""}`}
    >
      <button
        className={`${styles.settingsToggle} z-10 cursor-pointer select-none`}
        aria-label="Toggle theme options"
        aria-expanded={isOpen}
        aria-controls="settings"
        onClick={toggleSettings}
      >
        <FontAwesomeIcon icon={faGear} />
      </button>
      <div
        id="settings"
        className={`${styles.settingsMenuOptions} min-h-[150px] w-60 p-4`}
      >
        <ThemeOptions />
        <div className="mt-4 text-center">
          <span>
            color mode: <strong>{selectedTheme}</strong>
          </span>
          {selectedTheme === "system" && (
            <p>
              (<em>{preference}</em> mode detected)
            </p>
          )}
        </div>
      </div>
    </aside>
  );
};

export default ChangeColorMode;
