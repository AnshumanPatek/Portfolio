"use client";

import { motion } from "framer-motion";
import { Code, Server, Cloud } from "lucide-react";

const skillsData = [
  {
    icon: Code,
    title: "Frontend",
    skills: "React, Next.js, JavaScript, Tailwind, Bootstrap",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Server,
    title: "Backend",
    skills: "Node.js, Express, MongoDB, PostgreSQL, Prisma, Redis",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Cloud,
    title: "DevOps & Cloud",
    skills: "Docker, Kubernetes, AWS, GCP, Jenkins, Terraform, Helm, Argo CD",
    color: "from-orange-500 to-red-500",
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
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-6 lg:px-20 py-20">
      <div className="max-w-7xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.title}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <div className="bg-dark-card border border-gray-800 rounded-xl p-8 hover:border-primary/50 transition-all duration-300">
                {/* Icon */}
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${skill.color} p-0.5`}>
                    <div className="w-full h-full bg-dark-card rounded-lg flex items-center justify-center">
                      <skill.icon size={32} className="text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                  <span className="text-gray-400">&lt;</span>
                  {skill.title}
                  <span className="text-gray-400">/&gt;</span>
                </h3>
                <p className="text-gray-400 leading-relaxed">{skill.skills}</p>

                {/* Progress Bar */}
                <div className="mt-6 h-1 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                    className={`h-full bg-gradient-to-r ${skill.color}`}
                  />
                </div>
              </div>

              {/* Glow Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-20 blur-xl rounded-xl transition-opacity duration-300 -z-10`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

