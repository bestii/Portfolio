"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeSwitcher from "@/components/theme-switcher/ThemeSwitcher";
import {
  faGithub,
  faLinkedinIn,
  faXTwitter,
  faInstagram,
  faFacebookF,
} from "@fortawesome/free-brands-svg-icons";
import type { IconDefinition } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  BookOpen,
  Briefcase,
  Code2,
  MessageCircle,
  Mail,
} from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

interface SocialLink {
  platform: string;
  url: string;
}

interface MobileMenuProps {
  navItems: NavItem[];
  socialLinks: SocialLink[];
  email: string;
}

const platformIcons: Record<string, IconDefinition> = {
  github: faGithub,
  linkedin: faLinkedinIn,
  twitter: faXTwitter,
  instagram: faInstagram,
  facebook: faFacebookF,
};

const navIcons: Record<string, React.ReactNode> = {
  About: <BookOpen size={16} />,
  Experience: <Briefcase size={16} />,
  Skills: <Code2 size={16} />,
  Contact: <MessageCircle size={16} />,
};

function SocialIcon({ platform }: { platform: string }) {
  const icon = platformIcons[platform];
  if (!icon) return null;
  return <FontAwesomeIcon icon={icon} height={16} aria-hidden="true" />;
}

const MobileMenu = ({ navItems, socialLinks, email }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="md:hidden relative z-60 p-2 transition-colors"
        onClick={() => setIsOpen((value) => !value)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ opacity: 0, rotate: -90, scale: 0.85 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.85 }}
              transition={{ duration: 0.18 }}
              className="block"
            >
              <X size={24} />
            </motion.span>
          ) : (
            <motion.span
              key="menu"
              initial={{ opacity: 0, rotate: 90, scale: 0.85 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: -90, scale: 0.85 }}
              transition={{ duration: 0.18 }}
              className="block"
            >
              <Menu size={24} />
            </motion.span>
          )}
        </AnimatePresence>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-x-0 top-14 bottom-0 z-40 md:hidden bg-black/30 backdrop-blur-xs"
            />

            {/* Left drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="fixed inset-y-0 left-0 top-14 z-50 md:hidden w-[75vw] max-w-[320px] shadow-2xl flex flex-col"
            >
              {/* Solid background */}
              <div className="absolute inset-0 bg-white dark:bg-[#0a192f]" />

              <div className="relative flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between px-6 pt-8 pb-4 border-b border-(--color-bg-tertiary)/30">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-(--color-text-muted)">
                    Navigation
                  </span>
                  <span className="text-xs font-mono text-(--color-accent)">
                    menu
                  </span>
                </div>

                {/* Nav links */}
                <nav className="flex-1 flex flex-col pt-2 px-3">
                  {navItems.map((item, i) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center gap-4 py-3.5 px-3 rounded-lg hover:bg-(--color-bg-secondary) transition-colors"
                    >
                      <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-(--color-bg-tertiary)/30 text-(--color-text-muted) group-hover:bg-(--color-accent)/10 group-hover:text-(--color-accent) transition-colors">
                        {navIcons[item.label]}
                      </span>
                      <div className="flex flex-col">
                        <span className="text-[14px] font-medium text-(--color-text-primary) group-hover:text-(--color-accent) transition-colors">
                          {item.label}
                        </span>
                        <span className="text-[10px] font-mono text-(--color-text-muted)">
                          0{i + 1}
                        </span>
                      </div>
                    </a>
                  ))}
                </nav>

                {/* Bottom section: email + socials + theme */}
                <div className="border-t border-(--color-bg-tertiary)/30 px-4 py-4 space-y-4">
                  <a
                    href={`mailto:${email}`}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-(--color-bg-secondary) transition-colors group"
                  >
                    <Mail
                      size={15}
                      className="text-(--color-text-muted) group-hover:text-(--color-accent) transition-colors"
                    />
                    <span className="text-[12px] font-mono text-(--color-text-secondary) group-hover:text-(--color-accent) transition-colors truncate">
                      {email}
                    </span>
                  </a>

                  <div className="flex items-center gap-1 px-3">
                    {socialLinks.map(({ platform, url }) => (
                      <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={platform}
                        className="flex items-center justify-center w-8 h-8 rounded-lg text-(--color-text-secondary) hover:text-(--color-accent) hover:bg-(--color-bg-secondary) transition-colors"
                      >
                        <SocialIcon platform={platform} />
                      </a>
                    ))}
                    <div className="flex-1" />
                    <ThemeSwitcher />
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
