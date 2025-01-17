'use client';

import { motion } from "framer-motion";
import { fadeIn } from "../../utils/animations";
import Navbar from "../../components/navbar";

export default function ExperiencePage() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />
      <section className="py-20 bg-black text-white pt-28">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600"
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
            >
              Experience
            </motion.h2>
            <motion.p
              className="text-xl text-gray-400"
              variants={fadeIn}
              whileHover={{ scale: 1.02 }}
            >
              Where I've been, what I've built, and how I've grown (as a developer, not in height).
            </motion.p>
          </div>

          <div className="space-y-12">
            <motion.div
              variants={fadeIn}
              className="relative pl-8 border-l-2 border-gray-800"
              whileHover={{ scale: 1.03 }}
            >
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-0" />
              <motion.div
                className="mb-1 text-xl font-semibold"
                whileHover={{ scale: 1.05 }}
              >
                React JS Intern
              </motion.div>
              <div className="text-gray-400 mb-2">
                infolabz-Ahmedabad • June 2024 – July 2024
              </div>
              <p className="text-gray-300">
                • Learned JavaScript (ES6) and React fundamentals. <br />
                • Developed an API-based React application with dynamic data
                integration. <br />
                • Gained experience in API integration and state management.{" "}
                <br />
                • Built responsive and optimized web components
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn}
              className="relative pl-8 border-l-2 border-gray-800"
              whileHover={{ scale: 1.03 }}
            >
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-0" />
              <motion.div
                className="mb-1 text-xl font-semibold"
                whileHover={{ scale: 1.05 }}
              >
                Data Analytics Intern
              </motion.div>
              <div className="text-gray-400 mb-2">
                IBM SkillsBuild • June 2024 – July 2024
              </div>
              <p className="text-gray-300">
                • Developed foundational and advanced skills in data analytics
                during a structured internship program. <br />
                • Participated in expert-led masterclasses and practical
                workshops on data analysis and problem-solving. <br />
                • Designed and presented a project analyzing real-world data
                challenges. <br />• Tools Tech: IBM SkillsBuild, Data Analytics,
                Project Design, Presentation Skills.
              </p>
            </motion.div>

            {/* Example of a commented-out section */}
            {/* <motion.div
              variants={fadeIn}
              className="relative pl-8 border-l-2 border-gray-800"
            >
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-0" />
              <div className="mb-1 text-xl font-semibold">
                Junior Web Developer
              </div>
              <div className="text-gray-400 mb-2">
                Startup Inc. • 2018 - 2020
              </div>
              <p className="text-gray-300">
                Assisted in the development of responsive web applications.
                Gained experience in modern web technologies and agile
                development practices.
              </p>
            </motion.div> */}
          </div>
        </motion.div>
      </section>
    </main>
  );
}
