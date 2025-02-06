"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Project 1",
    description:
      "Responsive WordPress web site | PHP, CSS	Created a Responsive Service WordPress website for Resort Platform Using PHP,",
    image: "/placeholder.svg?height=200&width=300",

    live: "https://adventuresstaycamping.com/",
    tags: ["Yoast SEO", "Jetpack WP Security", "crisp"],
  },
  // {
  //   title: "Project 2",
  //   description: "Detailed explanation of project 2. Discuss the challenges you faced and how you overcame them. Mention any notable achievements or metrics.",
  //   image: "/placeholder.svg?height=200&width=300",
  //   github: "https://github.com/yourusername/project2",
  //   live: "https://project2-demo.com",
  //   tags: ["Vue.js", "Express", "PostgreSQL"]
  // },
  // {
  //   title: "Project 3",
  //   description: "In-depth overview of project 3. Explain the problem it solves and why you chose to work on it. Highlight any unique or innovative aspects.",
  //   image: "/placeholder.svg?height=200&width=300",
  //   github: "https://github.com/yourusername/project3",
  //   live: "https://project3-demo.com",
  //   tags: ["Angular", "Django", "MySQL"]
  // },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h2>
        <div className="mt-12 space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="flex flex-col lg:flex-row items-center bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="lg:w-1/2">
                <img
                  src="https://adventuresstaycamping.com/wp-content/uploads/2020/02/adventurestaycamping-high-resolution-logo-transparent-3-200x109.png"
                  alt={project.title}
                  className="w-full h-64"
                />
              </div>
              <div className="lg:w-1/2 p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                  >
                    <FaExternalLinkAlt className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
