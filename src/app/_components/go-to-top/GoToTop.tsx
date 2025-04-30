"use client";

import { ArrowUpToLine } from "lucide-react";
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
        <button
          onClick={handleScrollUp}
          className="group fixed right-[15px] bottom-[35px] z-50 cursor-pointer rounded border border-[var(--color-primary)] p-2 hover:bg-[var(--color-primary)] md:right-[75px] md:bottom-[20px]"
          aria-label="Go to top"
        >
          <ArrowUpToLine className="text-[var(--color-primary)] group-hover:text-white" />
        </button>
      )}
    </>
  );
};

export default GoToTop;
