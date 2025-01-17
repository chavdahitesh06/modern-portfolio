'use client'

import { motion } from 'framer-motion'
import { fadeIn } from '../utils/animations'

export default function Experience() {
  return (
    <section className="py-20 bg-black text-white">
      <motion.div 
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-xl text-gray-400">
            Where I've been, what I've built, and how I've grown (as a developer, not in height).
          </p>
        </div>

        <div className="space-y-12">
          <motion.div 
            variants={fadeIn}
            className="relative pl-8 border-l-2 border-gray-800"
          >
            <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-0" />
            <div className="mb-1 text-xl font-semibold">Senior Frontend Developer</div>
            <div className="text-gray-400 mb-2">Tech Company • 2022 - Present</div>
            <p className="text-gray-300">
              Led the development of multiple high-impact web applications using React and Next.js.
              Implemented modern design patterns and best practices.
            </p>
          </motion.div>

          <motion.div 
            variants={fadeIn}
            className="relative pl-8 border-l-2 border-gray-800"
          >
            <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-0" />
            <div className="mb-1 text-xl font-semibold">Frontend Developer</div>
            <div className="text-gray-400 mb-2">Another Company • 2020 - 2022</div>
            <p className="text-gray-300">
              Developed and maintained multiple client-facing applications.
              Collaborated with design and backend teams to implement new features.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

