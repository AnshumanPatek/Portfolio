"use client";

import { motion } from "framer-motion";

const techBadges = ["React js", "Node.js", "Fast Api", "MongoDB", "PostgreSQL", "AWS", "Github Actions"];

export default function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 lg:px-20 py-20">
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">About</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-dark-card border border-gray-800 rounded-xl p-8 lg:p-12"
        >
          <div className="grid lg:grid-cols-[200px,1fr] gap-8 items-start">
            {/* Profile Image */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 0.8 }}
              className="mx-auto lg:mx-0"
            >
              <div className="relative">
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary to-purple-500 p-1">
                  <div className="w-full h-full rounded-full bg-dark-card flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-6xl font-bold text-white">
                      AP
                    </div>
                  </div>
                </div>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-dark-card"
                />
              </div>
            </motion.div>

            {/* Content */}
            <div>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-3xl font-bold mb-4"
              >
                Anshuman Patek
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-gray-400 leading-relaxed mb-6"
              >
                I craft performant web applications with modern tech stacks. Passionate about
                building scalable full-stack solutions, cloud infrastructure, and clean code.
                Always open to collaborating on exciting projects!
              </motion.p>

              {/* Tech Badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-3"
              >
                {techBadges.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg text-sm font-medium text-primary"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-800"
              >
                {[
                  { label: "Projects", value: "40+" },
                  { label: "Technologies", value: "20+" },
                  { label: "Commits", value: "1000+" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl font-bold gradient-text mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

