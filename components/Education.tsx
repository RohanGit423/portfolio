'use client'

import { motion } from 'framer-motion'
import { AcademicCapIcon, BookOpenIcon, ClipboardDocumentListIcon, PencilIcon } from '@heroicons/react/24/outline'

const education = [
  {
    degree: "MBA",
    institution: "Sharan Basava University",
    year: "2023",
    description: "Focused on business administration and management principles.",
    icon: AcademicCapIcon,
  },
  {
    degree: "BBA",
    institution: "Sharan Basava University",
    year: "2021",
    description: "Studied core business concepts and practices.",
    icon: BookOpenIcon,
  },
  {
    degree: "PUC",
    institution: "Department of Pre-University Board, Bangalore",
    year: "2018",
    description: "Completed pre-university course with focus on commerce subjects.",
    icon: ClipboardDocumentListIcon,
  },
  {
    degree: "SSLC",
    institution: "Karnataka Secondary Education Examination Board",
    year: "2016",
    description: "Completed secondary education with distinction.",
    icon: PencilIcon,
  }
]

export default function Education() {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Educational Background
        </motion.h2>
        <div className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <edu.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">{edu.degree}</h3>
                  <p className="text-sm text-indigo-600 dark:text-indigo-400">{edu.institution}</p>
                </div>
              </div>
              <p className="mt-2 text-base text-gray-500 dark:text-gray-300">{edu.description}</p>
              <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">{edu.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

