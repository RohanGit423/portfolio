'use client'

import { motion } from 'framer-motion'

const skills = [
  { name: "Digital Marketing", level: 90 },
  { name: "SEO", level: 85 },
  { name: "Content Writing", level: 80 },
  { name: "Customer Relations", level: 90 },
  { name: "MS Office", level: 75 },
  { name: "Tally", level: 70 },
  { name: "Web Design", level: 60 },
  { name: "Google Ads", level: 75 },
  { name: "Leadership", level: 80 },
  { name: "Project Management", level: 65 }
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Professional Skills
        </motion.h2>
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 dark:bg-gray-700 overflow-hidden shadow rounded-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">{skill.name}</h3>
                <div className="mt-5">
                  <div className="relative pt-1">
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-200 dark:bg-indigo-700">
                      <motion.div 
                        style={{ width: `${skill.level}%` }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm font-semibold inline-block text-indigo-600 dark:text-indigo-400">
                    {skill.level}%
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

