'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" className="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="absolute top-0 right-0 -mt-20 -mr-20 lg:mt-0 lg:mr-0 lg:right-1/2 lg:translate-x-1/2"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <svg width="404" height="784" fill="none" viewBox="0 0 404 784">
            <defs>
              <pattern id="56409614-3d62-4985-9a10-7ca758a8f4f0" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" className="text-gray-200 dark:text-gray-700" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="784" fill="url(#56409614-3d62-4985-9a10-7ca758a8f4f0)" />
          </svg>
        </motion.div>
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <motion.div
            className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white sm:text-5xl md:text-6xl"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
            >
              <span className="block">Rohankumar H</span>
              <span className="block text-indigo-600 dark:text-indigo-400">MBA Graduate & Digital Marketing Specialist</span>
            </motion.h1>
            <motion.p
              className="mt-3 text-base text-gray-500 dark:text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Dedicated professional with experience in digital marketing, customer relations, and front office management. Seeking opportunities to leverage my skills and drive organizational growth.
            </motion.p>
            <motion.div
              className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <div className="rounded-md shadow">
                <a href="#contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                  Contact Me
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a href="#experience" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 dark:bg-gray-800 dark:text-indigo-400 dark:hover:bg-gray-700">
                  View Experience
                </a>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:mx-0 lg:col-span-6 lg:flex lg:items-center lg:justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="relative mx-auto w-full lg:max-w-lg">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="relative z-10 w-72 h-72 mx-auto lg:w-80 lg:h-80"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full opacity-20 blur-lg"></div>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-07%20at%2010.10.39_f0abc1f4-Photoroom-WBPnPbi41tuKJLmtthnJcxiUzDYnpD.png"
                  alt="Professional headshot"
                  className="relative z-10 w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-xl"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

