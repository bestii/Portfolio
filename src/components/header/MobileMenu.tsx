"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeSwitcher from "@/components/theme-switcher/ThemeSwitcher";

interface NavItem {
  label: string;
  href: string;
}

interface MobileMenuProps {
  navItems: NavItem[];
}

const MobileMenu = ({ navItems }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className="md:hidden relative z-60 p-2 transition-colors "
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
      <Dialog
        open={isOpen}
        onClose={setIsOpen}
        className="fixed inset-0 z-40 md:hidden overflow-hidden pointer-events-none"
      >
        <motion.div
          initial={false}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-x-0 top-14 bottom-0 backdrop-blur-xs pointer-events-auto"
        />

        <motion.div
          initial={false}
          animate={{ x: isOpen ? 0 : "100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-y-0 right-0 top-14 w-[65vw] max-w-sm shadow-xl overflow-hidden flex flex-col pointer-events-auto  dark:border-slate-800/40"
        >
          <nav className="flex-1 flex flex-col py-10 px-4 text-[13px] font-mono sm:px-6 overflow-y-auto">
            <div className="flex flex-col space-y-2 mb-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-md py-2 transition-colors "
                >
                  {item.label}
                </a>
              ))}
            </div>
            <ThemeSwitcher />
          </nav>
        </motion.div>
      </Dialog>
    </>
  );
};

export default MobileMenu;
