'use client'

import { motion } from 'framer-motion'
import { fadeIn } from '../utils/animations'
import Image from 'next/image'

export default function Projects() {
  const projects = [
    {
      title: "Project 1",
      description: "Code + Creativity = My Portfolio. Dive in!",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-16%20105835-uqfMgV0WpPWpnsoNAqbL5oLVrQrJNs.png",
      tech: ["React", "Next.js", "TailwindCSS"],
      link: "#"
    },
    // Add more projects as needed
  ]

  return (
    <section className="py-20 bg-gray-900 text-white">
      <motion.div 
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <p className="text-xl text-gray-400">Some things I've built</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              whileHover={{ y: -10 }}
              className="bg-black rounded-lg overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

