'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '../utils/animations'
import Link from 'next/link'

export default function Hero() {
  const [color, setColor] = useState('white') // State for color change on click

  const handleTitleClick = () => {
    // Change the title color to a random color when clicked
    const colors = ['#ff6347', '#32cd32', '#1e90ff', '#ffa500', '#ff1493']
    setColor(colors[Math.floor(Math.random() * colors.length)])
  }

  return (
    <motion.div 
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        {/* Optional background image here */}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div variants={fadeIn} className="text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 cursor-pointer transition-all duration-500 ease-in-out transform hover:scale-105 hover:text-yellow-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ color }} // Dynamically apply the color
            onClick={handleTitleClick} // Handle click event for color change
          >
            Oops, I accidentally built this portfolio!
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Exploring the intersection of design and technology
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Link 
              href="/projects" 
              className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors inline-block"
            >
              View Projects
            </Link>
            <br />
            <br /><br />
            
            

          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}
