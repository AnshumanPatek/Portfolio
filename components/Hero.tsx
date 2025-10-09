"use client";

import { motion } from "framer-motion";
import { Play, Mail } from "lucide-react";
import { useState, useEffect } from "react";

const codeLines = [
  "anshuman@devops:~$ cd portfolio",
  "anshuman@devops:~/portfolio$ npm run deploy",
  "> Building for production...",
  "> Running tests... ✓ 100% passed",
  "> Deploying to AWS... ✓ done",
  "🚀 Live at: anshumanpatek.me",
];

export default function Hero() {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < codeLines.length) {
      const timer = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, codeLines[currentIndex]]);
        setCurrentIndex((prev) => prev + 1);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 lg:px-20 py-20">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Building scalable systems that{" "}
            <span className="gradient-text">live and breathe in the cloud</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-400 text-lg mb-8 leading-relaxed"
          >
            Full-Stack Developer passionate about crafting scalable web applications,
            cloud infrastructure, and seamless user experiences with modern technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-primary hover:bg-primary-dark rounded-lg font-medium flex items-center gap-2 transition-colors"
            >
              <Play size={20} />
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border border-gray-700 hover:border-primary rounded-lg font-medium flex items-center gap-2 transition-colors"
            >
              <Mail size={20} />
              Get in Touch
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Content - Terminal */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="bg-dark-card rounded-xl border border-gray-800 overflow-hidden shadow-2xl">
            {/* Terminal Header */}
            <div className="bg-dark-lighter px-4 py-3 flex items-center gap-2 border-b border-gray-800">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-sm text-gray-500 ml-4">terminal</span>
            </div>

            {/* Terminal Content */}
            <div className="p-6 font-mono text-sm space-y-2 min-h-[300px]">
              {displayedLines.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className={
                    index === 0 || index === 1
                      ? "text-green-400"
                      : line.includes("✓")
                      ? "text-emerald-400"
                      : line.includes("🚀")
                      ? "text-primary font-semibold"
                      : "text-gray-300"
                  }
                >
                  {line}
                </motion.div>
              ))}
              {currentIndex < codeLines.length && (
                <motion.div
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block w-2 h-4 bg-primary ml-1"
                />
              )}
            </div>
          </div>

          {/* Floating Elements */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl"
          />
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}

