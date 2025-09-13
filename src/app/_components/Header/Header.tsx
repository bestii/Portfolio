"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { imgLogo } from "~/app/_assets";

const Header = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  // Handle smooth scroll when clicking on navigation links
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Get the height of the navbar to offset the scroll position
      const navbarHeight = 65;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Set active section
      setActiveSection(id);
    }
  };

  // Track scroll position and update active section
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout | null = null;

    const determineActiveSection = () => {
      const sections = ["about", "experience", "services", "contact"];
      const navbarHeight = 65;

      // Find the section that is currently in view
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Consider a section "active" when its top is near the top of the viewport
          return rect.top <= navbarHeight + 100 && rect.bottom > navbarHeight;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    const handleScroll = () => {
      // Clear the existing timeout
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      // Set a new timeout
      scrollTimeout = setTimeout(() => {
        // Scrolling has stopped, now update the active section
        determineActiveSection();
      }, 150); // Wait 150ms after scrolling stops before updating
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initialize active section on mount with a slight delay
    // to ensure all elements are properly rendered
    setTimeout(determineActiveSection, 300);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, []);

  return (
    <header className="header">
      <nav className="nav-bar fixed top-0 z-40 w-full bg-[var(--bg)] px-4 py-2 shadow-xl">
        <div className="mx-auto flex max-w-screen-xl items-center justify-between">
          <div className="logo-container">
            <Image
              src={imgLogo}
              alt="Bestin John Logo"
              width={35}
              height={35}
              className="w-auto"
            />
          </div>
          <ul className="flex space-x-4">
            {["About", "Experience", "Services", "Contact"].map((item) => {
              const sectionId = item.toLowerCase();
              const isActive = activeSection === sectionId;

              return (
                <li key={item}>
                  <a
                    href={`#${sectionId}`}
                    className={`relative cursor-pointer p-2 transition-colors duration-300 ${
                      isActive
                        ? "text-[var(--color-primary)]"
                        : "text-[var(--color)] hover:text-[var(--color-primary)]"
                    }`}
                    onClick={(e) => handleSmoothScroll(e, sectionId)}
                  >
                    {item}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 w-full origin-left transform bg-[var(--color-primary)] transition-transform duration-300 ease-out ${
                        isActive ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
      {/* Spacer to push content below fixed navbar */}
      <div className="h-[65px]"></div>
    </header>
  );
};

export default Header;
