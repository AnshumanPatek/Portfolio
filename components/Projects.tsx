"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projectsData = [
  {
    title: "Easy Way",
    description: "A comprehensive platform connecting users with services and solutions seamlessly.",
    tags: ["React", "Node.js", "MongoDB"],
    gradient: "from-blue-500 to-cyan-500",
    link: "https://easy-way-frontend.vercel.app/",
    github: "https://github.com/AnshumanPatek/Easy-Way-2.0",
  },
  {
    title: "Patna Metro Route Finder",
    description: "Interactive route planner for Patna Metro with real-time updates and fare calculator.",
    tags: ["Next.js", "Maps API", "PostgreSQL"],
    gradient: "from-green-500 to-emerald-500",
    link: "https://patnametroroute.com/",
    // github: "#",
  },
  {
    title: "Blogify",
    description: "A modern blogging platform for writers to share their stories and ideas.",
    tags: ["JavaScript", "EJS", "Express"],
    gradient: "from-purple-500 to-pink-500",
    // link: "#",
    github: "https://github.com/AnshumanPatek/Blogify",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 lg:px-20 py-20">
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative flex"
            >
              <div className="bg-dark-card border border-gray-800 rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 flex flex-col w-full">
                {/* Project Image Placeholder */}
                <div className={`h-44 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1, type: "spring" }}
                      className="text-6xl font-bold text-white/20"
                    >
                      {index + 1}
                    </motion.div>
                  </div>
                  {/* Animated grid pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="grid grid-cols-6 grid-rows-6 h-full">
                      {[...Array(36)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: [0.2, 0.5, 0.2] }}
                          transition={{ duration: 2, delay: i * 0.05, repeat: Infinity }}
                          className="border border-white/20"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors min-h-[3.5rem] flex items-center">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed flex-1">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-dark-lighter text-xs rounded-full text-gray-300 border border-gray-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-gray-400 hover:text-primary transition-colors"
                    >
                      <Github size={20} />
                    </motion.a>
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-gray-400 hover:text-primary transition-colors"
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Glow Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 blur-xl rounded-xl transition-opacity duration-300 -z-10`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

