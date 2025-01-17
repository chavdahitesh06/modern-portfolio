'use client';

import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../../utils/animations";
import { Code, Coffee, Terminal } from "lucide-react";
import Navbar from "../../components/navbar";

export default function AboutPage() {
  return (
    <main className="bg-black min-h-screen font-sans">
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pt-20"
      >
        <section className="py-20 bg-black text-white">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="text-center mb-16">
              <motion.h2
                className="text-3xl md:text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600"
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
              >
                About Me
              </motion.h2>
              <motion.p
                className="text-xl text-gray-400"
                variants={fadeIn}
                whileHover={{ scale: 1.02 }}
              >
                I write code, drink coffee, and occasionally debug my life.
              </motion.p>
            </div>
            <div className="p-6 bg-gray-900 rounded-lg shadow-md text-center">
              <motion.p
                className="text-gray-400 text-lg"
                variants={fadeIn}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                I am{" "}
                <span className="text-blue-500 font-semibold">
                  Hitesh Chavda
                </span>
                , a passionate web developer with a strong foundation in
                <span className="text-blue-500 font-semibold"> React.js</span>,{" "}
                <span className="text-blue-500 font-semibold">JavaScript</span>,
                and modern web development technologies. With hands-on
                experience gained through impactful internships and personal
                projects, I specialize in crafting{" "}
                <span className="text-blue-500 font-semibold">clean</span>,{" "}
                <span className="text-blue-500 font-semibold">
                  maintainable
                </span>
                , and{" "}
                <span className="text-blue-500 font-semibold">
                  efficient code
                </span>
                .
              </motion.p>
            </div>
            <br />
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                variants={slideIn}
                className="p-6 bg-gray-900 rounded-lg"
                whileHover={{ scale: 1.05 }}
              >
                <Code className="w-12 h-12 mb-4 text-blue-500" />
                <motion.h3
                  className="text-xl font-semibold mb-2"
                  whileHover={{ scale: 1.1 }}
                >
                  Clean Code
                </motion.h3>
                <p className="text-gray-400">
                  I specialize in writing clean, maintainable, and efficient
                  code, ensuring scalable and reliable applications.
                </p>
              </motion.div>

              <motion.div
                variants={slideIn}
                className="p-6 bg-gray-900 rounded-lg"
                whileHover={{ scale: 1.05 }}
              >
                <Coffee className="w-12 h-12 mb-4 text-blue-500" />
                <motion.h3
                  className="text-xl font-semibold mb-2"
                  whileHover={{ scale: 1.1 }}
                >
                  Problem Solving
                </motion.h3>
                <p className="text-gray-400">
                  I thrive on solving complex problems and transforming
                  challenges into simple, user-friendly solutions.
                </p>
              </motion.div>

              <motion.div
                variants={slideIn}
                className="p-6 bg-gray-900 rounded-lg"
                whileHover={{ scale: 1.05 }}
              >
                <Terminal className="w-12 h-12 mb-4 text-blue-500" />
                <motion.h3
                  className="text-xl font-semibold mb-2"
                  whileHover={{ scale: 1.1 }}
                >
                  Modern Tech
                </motion.h3>
                <p className="text-gray-400">
                  Passionate about learning and implementing the latest
                  technologies like React.js, JavaScript, and API-driven
                  applications.
                </p>
              </motion.div>
            </div>

            {/* Skills Section */}
            <motion.div variants={fadeIn} className="mt-20">
              <motion.h3
                className="text-2xl font-bold mb-8 text-center"
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
              >
                Skills & Technologies
              </motion.h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[ 
                  "React-js", 
                  "JavaScript", 
                  "Node.js", 
                  "HTML5", 
                  "CSS3", 
                  "TailwindCSS", 
                  "Java", 
                  "C" 
                ].map((skill, index) => (
                  <motion.div
                    key={skill}
                    variants={fadeIn}
                    className="p-4 bg-gray-900 rounded-lg text-center transition-all hover:scale-105 transform"
                    whileHover={{ scale: 1.05 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Education Section */}
            <motion.div variants={fadeIn} className="mt-20">
              <motion.h3
                className="text-2xl font-bold mb-8 text-center"
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
              >
                Education
              </motion.h3>
              <div className="space-y-8">
                <motion.div
                  variants={fadeIn}
                  className="p-6 bg-gray-900 rounded-lg shadow-md"
                  whileHover={{ scale: 1.05 }}
                >
                  <h4 className="text-xl font-semibold mb-2 text-blue-500">
                    Bachelor Engineering of Computer Science
                  </h4>
                  <p className="text-gray-200">
                    Government Engineering College, Dahod • 2021 - 2025
                  </p>
                  <p>up to 5th Sem: 7.87 CGPA</p>
                </motion.div>
                <motion.div
                  variants={fadeIn}
                  className="p-6 bg-gray-900 rounded-lg shadow-md"
                  whileHover={{ scale: 1.05 }}
                >
                  <h4 className="text-xl font-semibold mb-2 text-blue-500">
                    New Gold Secondary & Higher Secondary School, Jesar
                  </h4>
                  <p className="text-gray-400">
                    Higher Secondary Certificate (HSC) – 81.6% - 2018 – 2021
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </section>
      </motion.div>
    </main>
  );
}
