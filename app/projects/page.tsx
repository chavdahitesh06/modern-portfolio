'use client'

import { motion } from 'framer-motion'
import { fadeIn, slideIn } from '../../utils/animations'
import Image from 'next/image'
import Navbar from '../../components/navbar'

export default function ProjectsPage() {
  const projects = [
    {
      title: "JobLinker",
      description: "Engineered a job search platform that integrates personalized email communication with job listings. Enabled users to customize emails for specific industries or companies, resulting in a 40% higher interview request rate. Improved user engagement by 45% and increased job applications by 60% within 6 months. Developed a tailored email workflow for HR managers, boosting interview invitations by 40% and enhancing job application success by 25%.",
      tech: ["React", "Next.js", "TailwindCSS"],
      link: "https://github.com/chavdahitesh06/JobLinker"
    },
    {
      title: "TextUtils App",
      description: "Developed a React-based Text Utility App for simple text manipulations. Users can convert text to uppercase/lowercase, remove extra spaces, copy text, and clear input. Implemented state management using React hooks for smooth user interactions. Technologies used include React, JavaScript, state management with React hooks, responsive design, and unit testing.",
      tech: ["React", "JavaScript", "State Management (React hooks)", "Responsive Design", "Unit Testing"],
      link: "https://github.com/chavdahitesh06/TextUtils_React"
    },
    {
      title: "Taskly",
      description: "Developed a React.js-based to-do list application that helps users organize and manage daily tasks effectively. Designed features for adding, updating, and deleting tasks with real-time updates.",
      tech: ["React.js", "JavaScript", "HTML5", "CSS3"],
      link: "https://github.com/chavdahitesh06/Taskly"
    }
  ]

  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <section className="py-20 bg-gray-900 text-white pt-28">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600"
              variants={fadeIn}
            >
              Projects
            </motion.h2>
            <motion.p
              className="text-xl text-gray-400"
              variants={fadeIn}
            >
              "Code + Creativity = My Portfolio. Dive in!"
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -10, scale: 1.05 }}
                className="bg-black rounded-lg overflow-hidden transition-all duration-300 ease-in-out shadow-lg"
              >
                <div className="relative h-48">
                  {/* You can uncomment this Image section if you have images for each project */}
                  {/* <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover"
                  /> */}
                </div>
                <div className="p-6">
                  <motion.h3
                    className="text-xl md:text-2xl font-semibold mb-2 text-gradient"
                    variants={fadeIn}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    className="text-gray-400 mb-4"
                    variants={fadeIn}
                  >
                    {project.description}
                  </motion.p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <motion.span
                        key={i}
                        className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm"
                        whileHover={{ scale: 1.1 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                    <motion.p
                      className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm"
                      variants={fadeIn}
                    >
                      <strong>GitHub: </strong>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-500"
                      >
                        {project.link}
                      </a>
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  )
}
