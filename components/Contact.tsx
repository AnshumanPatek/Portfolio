"use client";

import { motion } from "framer-motion";
import { Send, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 lg:px-20 py-20">
      <div className="max-w-4xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Contact</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-dark-card border border-gray-800 rounded-xl p-8 lg:p-12"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name Input */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 bg-dark-lighter border border-gray-800 rounded-lg focus:outline-none focus:border-primary transition-colors text-white placeholder-gray-600"
                  required
                />
              </motion.div>

              {/* Email Input */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@email.com"
                  className="w-full px-4 py-3 bg-dark-lighter border border-gray-800 rounded-lg focus:outline-none focus:border-primary transition-colors text-white placeholder-gray-600"
                  required
                />
              </motion.div>
            </div>

            {/* Message Input */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Write your message..."
                rows={6}
                className="w-full px-4 py-3 bg-dark-lighter border border-gray-800 rounded-lg focus:outline-none focus:border-primary transition-colors text-white placeholder-gray-600 resize-none"
                required
              />
            </motion.div>

            {/* Submit Button and Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row justify-between items-center gap-4"
            >
              <div className="flex gap-4">
                {[
                  { icon: Linkedin, href: "https://www.linkedin.com/in/anshuman-patek/", label: "LinkedIn" },
                  { icon: Github, href: "https://github.com/AnshumanPatek", label: "GitHub" },
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-lg bg-dark-lighter border border-gray-800 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition-all"
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-primary hover:bg-primary-dark rounded-lg font-medium flex items-center gap-2 transition-colors w-full sm:w-auto justify-center"
              >
                <Send size={20} />
                Send
              </motion.button>
            </motion.div>
          </form>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-8 pt-8 border-t border-gray-800 text-center"
          >
            <p className="text-sm text-gray-500 mb-4">
              Let&apos;s build something amazing together! Feel free to reach out at{" "}
              <a href="mailto:AnshumanPatek369@gmail.com" className="text-primary hover:underline">
                AnshumanPatek369@gmail.com
              </a>
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
              <a
                href="https://github.com/AnshumanPatek"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                GitHub
              </a>
              <span>•</span>
              <a
                href="https://www.linkedin.com/in/anshuman-patek/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
              <span>•</span>
              <a
                href="https://x.com/Anshuman_Patek"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                Twitter
              </a>
            </div>
            <p className="text-sm text-gray-600 mt-4">© 2025 Anshuman Patek</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

