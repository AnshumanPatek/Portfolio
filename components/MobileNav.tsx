"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Home, Boxes, FolderGit2, User, Mail, X, Menu } from "lucide-react";
import { useState } from "react";

const navItems = [
  { icon: Home, label: "Home", href: "#home" },
  { icon: Boxes, label: "Skills", href: "#skills" },
  { icon: FolderGit2, label: "Projects", href: "#projects" },
  { icon: User, label: "About", href: "#about" },
  { icon: Mail, label: "Contact", href: "#contact" },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={() => setIsOpen(true)}
        className="fixed top-6 right-6 z-50 lg:hidden w-12 h-12 bg-dark-card border border-gray-800 rounded-lg flex items-center justify-center text-white hover:border-primary transition-colors"
      >
        <Menu size={24} />
      </motion.button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20 }}
              className="fixed right-0 top-0 h-full w-80 bg-dark-card border-l border-gray-800 z-50 lg:hidden overflow-y-auto"
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary via-purple-500 to-pink-500 flex items-center justify-center font-bold text-white shadow-lg shadow-primary/30">
                    AP
                  </div>
                  <div>
                    <span className="text-base font-semibold block">Anshuman</span>
                    <span className="text-xs text-gray-400">Full Stack Developer</span>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-10 h-10 rounded-lg bg-dark-lighter flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Navigation */}
              <nav className="p-6">
                <ul className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.label}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 * index }}
                    >
                      <a
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-400 hover:text-white hover:bg-dark-lighter transition-all duration-300 group"
                      >
                        <item.icon size={20} className="group-hover:scale-110 transition-transform" />
                        <span>{item.label}</span>
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

