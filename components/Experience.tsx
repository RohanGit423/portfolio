'use client'

import { motion } from 'framer-motion'
import { BriefcaseIcon, UserGroupIcon, BuildingOfficeIcon, ChartBarIcon } from '@heroicons/react/24/outline'

const experiences = [
  {
    title: "Digital Marketing Executive",
    company: "Empower Creative Consulting llp",
    duration: "1 year",
    description: "Specialized in SEO and content writing, driving digital marketing strategies for various clients.",
    icon: ChartBarIcon,
  },
  {
    title: "Customer Relation Executive",
    company: "Harivillu resort",
    duration: "1 Year",
    description: "Managed customer relations, ensuring high satisfaction rates and resolving inquiries efficiently.",
    icon: UserGroupIcon,
  },
  {
    title: "Front Office Executive",
    company: "SR Continental",
    duration: "6 months",
    description: "Utilized Amadeus GDS for bookings and managed front desk operations, enhancing guest experiences.",
    icon: BuildingOfficeIcon,
  },
  {
    title: "Market Survey Trainee",
    company: "Kalaburagi Airport",
    duration: "Project-based",
    description: "Conducted comprehensive market surveys, providing valuable insights for airport operations and services.",
    icon: BriefcaseIcon,
  }
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Professional Experience
        </motion.h2>
        <div className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{
                opacity: 0,
                x: -50
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              transition={{
                delay: index * 0.1,
                duration: 0.5
              }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <exp.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">{exp.title}</h3>
                  <p className="text-sm text-indigo-600 dark:text-indigo-400">{exp.company}</p>
                </div>
              </div>
              <p className="mt-2 text-base text-gray-500 dark:text-gray-300">{exp.description}</p>
              <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">{exp.duration}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

