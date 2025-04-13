"use client";

import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const GoToTop = () => {
  const [showGoTop, setShowGoTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowGoTop(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollUp = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      {showGoTop && (
        <div className="animate-fadeIn fixed right-[15px] bottom-[35px] z-50 md:right-[75px] md:bottom-[20px]">
          <button
            onClick={handleScrollUp}
            className="group rounded border border-[var(--color-primary)] bg-transparent p-3 transition hover:bg-[var(--color-primary)]"
            aria-label="Go to top"
          >
            <FontAwesomeIcon
              icon={faArrowUp}
              className="text-[var(--color-primary)] transition group-hover:text-white"
              size="lg"
            />
          </button>
        </div>
      )}
    </>
  );
};

export default GoToTop;
