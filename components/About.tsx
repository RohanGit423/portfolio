'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8 text-center font-poppins"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-lg mb-4">
            I am Rohankumar, born on 12-01-2000, seeking a position to utilize my skills and abilities that offers
            professional growth and benefits the organization while being resourceful, innovative, and flexible.
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Father's name: Hanamanthrao</li>
            <li>Gender: Male</li>
            <li>Nationality: Indian</li>
            <li>Religion: Hindu</li>
            <li>Marital Status: Unmarried</li>
            <li>Languages Known: English, Hindi, Kannada</li>
          </ul>
          <p className="text-lg font-semibold">Hobbies: Singing, Playing Video Games</p>
          <p className="text-lg font-semibold">Activities: Cricket, Kabaddi, Chess</p>
        </motion.div>
      </div>
    </section>
  )
}

