"use client";

import Image from "next/image";
import { imgLogo } from "~/app/_assets";

const Header = () => {
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
    }
  };

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
            {["About", "Experience", "Services", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="cursor-pointer p-2 transition-colors duration-200 hover:text-[var(--color-primary)]"
                  onClick={(e) => handleSmoothScroll(e, item.toLowerCase())}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      {/* Spacer to push content below fixed navbar */}
      <div className="h-[65px]"></div>
    </header>
  );
};

export default Header;
