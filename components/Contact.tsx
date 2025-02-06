'use client'

import { motion } from 'framer-motion'
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Contact Information
        </motion.h2>
        <motion.div
          className="mt-12 bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="px-4 py-5 sm:p-6">
            <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              <motion.div
                className="sm:col-span-1"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 flex items-center">
                  <EnvelopeIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-indigo-500" />
                  Email
                </dt>
                <dd className="mt-1 text-sm text-gray-900 dark:text-white">Rohankumarh45@gmail.com</dd>
              </motion.div>
              <motion.div
                className="sm:col-span-1"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 flex items-center">
                  <PhoneIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-indigo-500" />
                  Phone
                </dt>
                <dd className="mt-1 text-sm text-gray-900 dark:text-white">7022840434, 9148757522</dd>
              </motion.div>
              <motion.div
                className="sm:col-span-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 flex items-center">
                  <MapPinIcon className="flex-shrink-0 mr-1.5 h-5 w-5 text-indigo-500" />
                  Address
                </dt>
                <dd className="mt-1 text-sm text-gray-900 dark:text-white">
                  #2-641 Abhishek Nivas Sedam Road<br />
                  Sundar Nagar Opp Govt Hospital<br />
                  Kalaburagi, Karnataka 585105
                </dd>
              </motion.div>
            </dl>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

