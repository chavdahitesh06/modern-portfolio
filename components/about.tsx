'use client'

import { motion } from 'framer-motion'
import { fadeIn, slideIn } from '../utils/animations'
import { Code, Coffee, Terminal } from 'lucide-react'

export default function About() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-gray-400">
            I write code, drink coffee, and occasionally debug my life.
          </p>
        </div>
        

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            variants={slideIn}
            className="p-6 bg-gray-900 rounded-lg"
          >
            <Code className="w-12 h-12 mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2">Clean Code</h3>
            <p className="text-gray-400">Writing clean, maintainable, and efficient code is my passion.</p>
          </motion.div>

          <motion.div
            variants={slideIn}
            className="p-6 bg-gray-900 rounded-lg"
          >
            <Coffee className="w-12 h-12 mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2">Problem Solving</h3>
            <p className="text-gray-400">Turning complex problems into simple solutions.</p>
          </motion.div>

          <motion.div
            variants={slideIn}
            className="p-6 bg-gray-900 rounded-lg"
          >
            <Terminal className="w-12 h-12 mb-4 text-blue-500" />
            <h3 className="text-xl font-semibold mb-2">Modern Tech</h3>
            <p className="text-gray-400">Always learning and implementing the latest technologies.</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

