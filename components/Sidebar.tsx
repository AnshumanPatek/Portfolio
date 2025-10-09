"use client";

import { motion } from "framer-motion";
import { Home, Boxes, FolderGit2, User, Mail, Github, Linkedin, Twitter } from "lucide-react";
import { useState } from "react";

const navItems = [
  { icon: Home, label: "Home", href: "#home" },
  { icon: Boxes, label: "Skills", href: "#skills" },
  { icon: FolderGit2, label: "Projects", href: "#projects" },
  { icon: User, label: "About", href: "#about" },
  { icon: Mail, label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/AnshumanPatek" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/anshuman-patek" },
  { icon: Twitter, label: "X/Twitter", href: "https://x.com/Anshuman_Patek" },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("#home");

  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed left-0 top-0 h-screen w-64 bg-dark-card border-r border-gray-800 hidden lg:flex flex-col z-50"
    >
      {/* Logo */}
      <div className="p-6 border-b border-gray-800">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="flex items-center gap-3"
        >
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary via-purple-500 to-pink-500 flex items-center justify-center font-bold text-white text-lg shadow-lg shadow-primary/30">
              AP
            </div>
            <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-dark-card"></div>
          </div>
          <div className="flex-1">
            <span className="text-base font-semibold block text-white">Anshuman</span>
            <span className="text-xs text-gray-400">Full Stack Developer</span>
          </div>
        </motion.div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item, index) => (
            <motion.li
              key={item.label}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.1 * index }}
            >
              <a
                href={item.href}
                onClick={() => setActiveSection(item.href)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 group ${
                  activeSection === item.href
                    ? "bg-primary text-white"
                    : "text-gray-400 hover:text-white hover:bg-dark-lighter"
                }`}
              >
                <item.icon
                  size={20}
                  className={`transition-transform group-hover:scale-110 ${
                    activeSection === item.href ? "animate-pulse" : ""
                  }`}
                />
                <span>{item.label}</span>
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>

      {/* Social Links */}
      <div className="p-6 border-t border-gray-800">
        <p className="text-xs text-gray-500 mb-3">Connect with me</p>
        <div className="flex gap-3">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="w-9 h-9 rounded-lg bg-dark-lighter border border-gray-800 hover:border-primary flex items-center justify-center text-gray-400 hover:text-primary transition-all"
              title={social.label}
            >
              <social.icon size={18} />
            </motion.a>
          ))}
        </div>
        <p className="text-xs text-gray-600 mt-4">
          Life runs on Linux ☁️
        </p>
      </div>
    </motion.aside>
  );
}

